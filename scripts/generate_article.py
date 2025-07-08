import os
import datetime
import feedparser
import google.generativeai as genai
import requests

# --- 設定 ---
# 取得するニュースの鮮度（何日以内の記事を対象にするか）
DAYS_AGO = 7
# ニュースソースのRSSフィードURL
RSS_FEEDS = {
    "Flutter 公式": "https://medium.com/feed/flutter",
    "Flutter Community": "https://medium.com/feed/flutter-community",
    "Zenn (Flutter)": "https://zenn.dev/topics/flutter/feed",
    "Qiita (Flutter)": "https://qiita.com/tags/flutter/feed",
    "dev.to": "https://dev.to/feed",
    "Hacker News": "https://hnrss.org/frontpage",
    "Reddit Flutter": "https://www.reddit.com/r/FlutterDev/.rss",
    "Google Developers": "https://developers.googleblog.com/feeds/posts/default",
    "OpenAI Blog": "https://openai.com/blog/rss.xml",
    "Reddit Artificial": "https://www.reddit.com/r/artificial/.rss",
    "Hatena Flutter": "https://b.hatena.ne.jp/q/Flutter?mode=rss",
    "Flutter YouTube": "https://www.youtube.com/feeds/videos.xml?channel_id=UCwXdFgeE9KYzlDdR7TG9cMw",
    "Connpass Events": "https://connpass.com/explore/ja.atom",
}
# --- ここまで ---

def check_flutter_changelog():
    """Flutter CHANGELOGから最新の更新をチェックする"""
    try:
        # GitHub APIを使用してCHANGELOG.mdの最新コミットを取得
        api_url = "https://api.github.com/repos/flutter/flutter/commits?path=CHANGELOG.md&per_page=1"
        response = requests.get(api_url)
        if response.status_code == 200:
            commits = response.json()
            if commits:
                latest_commit = commits[0]
                commit_date = datetime.datetime.strptime(latest_commit['commit']['author']['date'], '%Y-%m-%dT%H:%M:%SZ')
                since_date = datetime.datetime.now() - datetime.timedelta(days=DAYS_AGO)
                
                if commit_date >= since_date:
                    changelog_url = "https://github.com/flutter/flutter/blob/stable/CHANGELOG.md"
                    return f"- Title: Flutter CHANGELOG Updated\n  URL: {changelog_url}\n  Source: Flutter Official\n\n"
    except Exception as e:
        print(f"Error checking Flutter changelog: {e}")
    return ""

def fetch_recent_articles():
    """RSSフィードから指定された日数以内の記事を収集する"""
    articles_text = ""
    print("Fetching recent articles...")
    # 今日の日付から指定された日数を引いた日付を計算
    since_date = datetime.datetime.now() - datetime.timedelta(days=DAYS_AGO)
    
    # Flutter CHANGELOGの更新をチェック
    articles_text += check_flutter_changelog()
    
    for name, url in RSS_FEEDS.items():
        feed = feedparser.parse(url)
        for entry in feed.entries:
            # 記事の公開日をdatetimeオブジェクトに変換
            published_date = None
            try:
                if hasattr(entry, 'published_parsed') and entry.published_parsed:
                    published_date = datetime.datetime(*entry.published_parsed[:6])
                elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
                    published_date = datetime.datetime(*entry.updated_parsed[:6])
                else:
                    # 日付が取得できない場合は現在の日付を使用（最新として扱う）
                    published_date = datetime.datetime.now()
            except Exception:
                # 日付の変換に失敗した場合は現在の日付を使用
                published_date = datetime.datetime.now()
            
            # 公開日が指定された日付よりも新しいかチェック
            if published_date >= since_date:
                # Connpassイベントの場合はFlutter関連のみフィルタリング
                if name == "Connpass Events":
                    if "flutter" not in entry.title.lower() and "flutter" not in entry.get('summary', '').lower():
                        continue
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
以下のFlutter、開発、AI関連のニュースリストを元に、Astroブログで使えるMarkdown形式の記事を生成してください。

# 依頼事項
- 読者が興味を持つような、フレンドリーで分かりやすい導入文から始めてください。
- 収集したニュースを「Flutter・モバイル開発」「AI・機械学習」「開発者向け情報」「その他技術トピック」などの適切なカテゴリに分類してください。
- 各カテゴリから最も興味深い記事を3-5個程度選んで紹介してください。すべての記事を掲載する必要はありません。
- 各ニュースについて、タイトルとURLだけでなく、2〜3文程度の詳しい解説や注目ポイント、なぜその記事が重要なのかをあなたの言葉で追記してください。リンクの次に改行して記すスタイルでお願いします。
- 全体のまとめや来週への期待などを述べる、ポジティブな締めの一文を入れてください。
- 必ず日本語で記述してください。
- リンクの形式は、タイトルを記述してから改行し、次の行にURLのみを記述してください。これによりremark-link-card-plusプラグインがリンクカードを自動生成します。例：
  タイトル
  https://example.com

# Markdownのフォーマット
- Astroのfrontmatterを必ず含めてください。
- `layout`は「../../layouts/BlogPost.astro」としてください。
- `title`は「週刊開発者ニュース {today_str}号」としてください。
- `slug`は「flutter-news-{today_str.replace('-', '')}」としてください。
- `description`は今週の主要なトピックを2-3文で要約した内容にしてください。
- `pubDatetime`は「{today_str}」としてください。
- `author`は「kboy」としてください。
- `tags`は以下の既存タグから適切なものを選んで使用してください: ["Flutter", "Widget", "Package", "Dart", "ニュース", "News", "AI", "Development", "開発ツール", "初心者向け", "UI/レイアウト", "ゲーム開発", "データベース", "イベント", "ビジネス", "企業インタビュー", "Flutter大学", "勉強会"]。AIは新しく追加してもかまいません。

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
    filepath = f"src/data/blog/flutter-news-{today_for_filename}.md"
    
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
