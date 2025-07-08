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
    "Zenn": "https://zenn.dev/feed",
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

## 記事構成の要件
1. **導入文**: 読者が興味を持つような、フレンドリーで分かりやすい導入文から始める
2. **カテゴリ分類**: ニュースを「Flutter・モバイル開発」「AI・機械学習」「開発者向け情報」「その他技術トピック」などに分類（カテゴリは「##」を使用）
3. **記事選定**: 各カテゴリから最も価値の高い記事を3-5個程度選んで紹介（すべて掲載する必要なし）
   - **Flutter エンジニア向け**: モバイル開発、UI/UX、パフォーマンス最適化、状態管理、アーキテクチャ設計
   - **開発効率向上**: CI/CD、テスト、デバッグ、開発ツール、IDE拡張
   - **技術トレンド**: 新しいフレームワーク、ライブラリ、開発手法、クロスプラットフォーム開発
   - **チーム開発**: コードレビュー、設計パターン、プロジェクト管理、チームワーク
   - **キャリア**: 技術選択、学習方法、業界動向、エンジニアとしての成長
   - 新機能や重要なアップデート情報を優先
   - ベストプラクティスやアーキテクチャに関する記事を重視
   - 個人的な体験談や基本的なチュートリアルは避ける
4. **記事解説**: 各ニュースについて2〜3文程度の詳しい解説や注目ポイント、重要性を追記（「解説:」というプレフィックスは不要）
5. **まとめセクション**: 最後に「## まとめ」セクションを追加し、全体のまとめや来週への期待を述べるポジティブな締めの文を記述
6. **言語**: 必ず日本語で記述

## リンクの形式
記事タイトルを「###」で始めて、改行し、空行を入れてからURLのみを記述し、その後も空行を入れてください。
これによりremark-link-card-plusプラグインがリンクカードを自動生成します。

例：
### タイトル

https://example.com

記事の解説文を直接記述...

## Frontmatter設定
---
title: "週刊Flutterニュース {today_str}号"
slug: "flutter-news-{today_str.replace('-', '')}"
author: "kboy"
description: "[今週の主要なトピックを2-3文で要約]"
pubDatetime: "{today_str}"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**重要**: タイトルは既にfrontmatterで設定されるため、記事本文では「# 週刊開発者ニュース」などのメインタイトルは一切不要です。導入文から直接始めてください。

## ニュースリスト
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
