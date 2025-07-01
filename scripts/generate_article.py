import os
import datetime
import feedparser
import google.generativeai as genai

# --- 設定 ---
# 取得するニュースの鮮度（何日以内の記事を対象にするか）
DAYS_AGO = 7
# ニュースソースのRSSフィードURL
RSS_FEEDS = {
    "Flutter 公式": "https://medium.com/feed/flutter",
    "Flutter Community": "https://medium.com/feed/flutter-community",
    "Zenn (Flutter)": "https://zenn.dev/topics/flutter/feed",
    "Qiita (Flutter)": "https://qiita.com/tags/flutter/feed",
}
# --- ここまで ---

def fetch_recent_articles():
    """RSSフィードから指定された日数以内の記事を収集する"""
    articles_text = ""
    print("Fetching recent articles...")
    # 今日の日付から指定された日数を引いた日付を計算
    since_date = datetime.datetime.now() - datetime.timedelta(days=DAYS_AGO)
    
    for name, url in RSS_FEEDS.items():
        feed = feedparser.parse(url)
        for entry in feed.entries:
            # 記事の公開日をdatetimeオブジェクトに変換
            if entry.published_parsed is None:
                continue  # 日付が取得できない記事はスキップ
            published_date = datetime.datetime(*entry.published_parsed[:6])
            # 公開日が指定された日付よりも新しいかチェック
            if published_date >= since_date:
                articles_text += f"- Title: {entry.title}\n  URL: {entry.link}\n  Source: {name}\n\n"
    
    if not articles_text:
        print("No new articles found in the last week.")
        return None
        
    return articles_text

def generate_article_with_ai(articles):
    """AIを使って収集した記事リストからブログ記事を生成する"""
    print("Generating article with AI...")
    
    # GitHub SecretsからAPIキーを読み込む
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("APIキーが設定されていません。GitHub SecretsにGEMINI_API_KEYを登録してください。")

    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-1.5-flash')
    
    today_str = datetime.datetime.now().strftime('%Y-%m-%d')
    
    # AIへの指示（プロンプト）
    prompt = f"""
あなたは日本の優秀なFlutterエンジニア兼テクニカルライターです。
以下のFlutter関連のニュースリストを元に、Astroブログで使えるMarkdown形式の記事を生成してください。

# 依頼事項
- 読者が興味を持つような、フレンドリーで分かりやすい導入文から始めてください。
- 収集したニュースを「公式情報」「技術記事」「パッケージ」などの適切なカテゴリに分類してください。
- 各ニュースについて、タイトルとURLだけでなく、1〜2文程度の簡単な解説や注目ポイントをあなたの言葉で追記してください。
- 全体のまとめや来週への期待などを述べる、ポジティブな締めの一文を入れてください。
- 必ず日本語で記述してください。

# Markdownのフォーマット
- Astroのfrontmatterを必ず含めてください。
- `title`は「週刊Flutterニュース {today_str}号」としてください。
- `description`は「今週見つけたFlutter関連のニュースまとめ」としてください。
- `pubDate`は「{today_str}」としてください。
- `tags`として`["Flutter", "News"]`を入れてください。

# ニュースリスト
{articles}
"""
    
    response = model.generate_content(prompt)
    return response.text

def save_markdown(content):
    """生成されたMarkdownコンテンツをファイルに保存する"""
    if not content:
        print("Content is empty. No file will be saved.")
        return False
        
    today_for_filename = datetime.datetime.now().strftime('%Y%m%d')
    # Astroのブログ記事が格納されるパス
    filepath = f"src/content/blog/flutter-news-{today_for_filename}.md"
    
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"✅ Successfully generated and saved to {filepath}")
    return True

if __name__ == "__main__":
    article_list = fetch_recent_articles()
    if article_list:
        generated_content = generate_article_with_ai(article_list)
        save_markdown(generated_content)
    else:
        # 新しい記事がなくても処理を正常終了させる（GitHub Actionsのエラーを防ぐため）
        exit(0)
