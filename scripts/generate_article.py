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
    # Flutter関連
    "Flutter 公式": "https://medium.com/feed/flutter",
    "Flutter Community": "https://medium.com/feed/flutter-community",
    "Flutter YouTube": "https://www.youtube.com/feeds/videos.xml?channel_id=UCwXdFgeE9KYzlDdR7TG9cMw",
    "Reddit Flutter": "https://www.reddit.com/r/FlutterDev/.rss",
    "Hatena Flutter": "https://b.hatena.ne.jp/q/Flutter?mode=rss",
    
    # React Native関連
    "React Native Blog": "https://reactnative.dev/blog/rss.xml",
    "React Native Community": "https://medium.com/feed/react-native-community",
    "Reddit React Native": "https://www.reddit.com/r/reactnative/.rss",
    "Qiita (React Native)": "https://qiita.com/tags/react-native/feed",
    "React Native YouTube": "https://www.youtube.com/feeds/videos.xml?channel_id=UCMYS7PYW8T9lHVtNXbLvR3w",
    
    # Swift/iOS関連
    "Swift.org Blog": "https://swift.org/blog/rss.xml",
    "iOS Dev Weekly": "https://iosdevweekly.com/issues.rss",
    "Ray Wenderlich": "https://www.kodeco.com/rss.xml",
    "NSHipster": "https://nshipster.com/feed.xml",
    "Swift by Sundell": "https://www.swiftbysundell.com/feed.rss",
    "Apple Developer": "https://developer.apple.com/news/rss/news.rss",
    "Reddit iOS Programming": "https://www.reddit.com/r/iOSProgramming/.rss",
    "Qiita (Swift)": "https://qiita.com/tags/swift/feed",
    "Qiita (iOS)": "https://qiita.com/tags/ios/feed",
    
    # Kotlin Native/Android関連
    "Kotlin Blog": "https://blog.jetbrains.com/kotlin/feed/",
    "Android Developers Blog": "https://android-developers.googleblog.com/feeds/posts/default",
    "Android Weekly": "https://androidweekly.net/rss",
    "Kotlin Multiplatform Mobile": "https://kotlinlang.org/docs/multiplatform/multiplatform-mobile-getting-started.html",
    "Reddit Android Dev": "https://www.reddit.com/r/androiddev/.rss",
    "Qiita (Kotlin)": "https://qiita.com/tags/kotlin/feed",
    "Qiita (Android)": "https://qiita.com/tags/android/feed",
    
    # 汎用開発・技術
    "Zenn": "https://zenn.dev/feed",
    "dev.to": "https://dev.to/feed",
    "Hacker News": "https://hnrss.org/frontpage",
    "Google Developers": "https://developers.googleblog.com/feeds/posts/default",
    "OpenAI Blog": "https://openai.com/blog/rss.xml",
    "Reddit Artificial": "https://www.reddit.com/r/artificial/.rss",
    "Connpass Events": "https://connpass.com/explore/ja.atom",
}
# --- ここまで ---

def check_flutter_changelog():
    """Flutter CHANGELOGから最新の更新をチェックし、内容を要約する"""
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
                    # CHANGELOGの内容を取得
                    changelog_content_url = "https://raw.githubusercontent.com/flutter/flutter/stable/CHANGELOG.md"
                    changelog_response = requests.get(changelog_content_url)
                    
                    if changelog_response.status_code == 200:
                        changelog_content = changelog_response.text
                        
                        # 最新バージョンセクションを抽出（最初の##から次の##まで）
                        lines = changelog_content.split('\n')
                        latest_section = []
                        in_latest_section = False
                        section_count = 0
                        
                        for line in lines:
                            if line.startswith('## '):
                                if in_latest_section:
                                    break
                                in_latest_section = True
                                section_count += 1
                                if section_count > 1:
                                    break
                            elif in_latest_section:
                                latest_section.append(line)
                        
                        # 最新の変更内容を要約
                        latest_changes = '\n'.join(latest_section)
                        
                        changelog_url = "https://github.com/flutter/flutter/blob/stable/CHANGELOG.md"
                        return f"- Title: Flutter CHANGELOG Updated\n  URL: {changelog_url}\n  Source: Flutter Official\n  Changes: {latest_changes[:500]}...\n\n"
                    else:
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
                # Connpassイベントの場合はモバイル開発関連のみフィルタリング
                if name == "Connpass Events":
                    mobile_keywords = ["flutter", "react native", "swift", "ios", "android", "kotlin", "mobile", "モバイル"]
                    title_lower = entry.title.lower()
                    summary_lower = entry.get('summary', '').lower()
                    
                    if not any(keyword in title_lower or keyword in summary_lower for keyword in mobile_keywords):
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
あなたは日本の優秀なモバイルアプリエンジニア兼テクニカルライターです。
以下のFlutter、React Native、Swift/iOS、Kotlin/Android、AI関連のニュースリストを元に、Astroブログで使えるMarkdown形式の記事を生成してください。

## 記事構成の要件
1. **導入文**: 読者が興味を持つような、フレンドリーで分かりやすい導入文から始める
2. **カテゴリ分類**: ニュースを「Flutter・クロスプラットフォーム開発」「React Native開発」「Swift・iOS開発」「Kotlin・Android開発」「AI・機械学習」「開発者向け情報」「その他技術トピック」などに分類（カテゴリは「##」を使用）
3. **記事選定**: 各カテゴリから最も価値の高い記事を3-5個程度選んで紹介（すべて掲載する必要なし）
   - **モバイル開発者向け**: UI/UX、パフォーマンス最適化、状態管理、アーキテクチャ設計、クロスプラットフォーム戦略
   - **プラットフォーム固有**: iOS特有の機能、Android特有の機能、ネイティブ開発のベストプラクティス
   - **開発効率向上**: CI/CD、テスト、デバッグ、開発ツール、IDE拡張
   - **技術トレンド**: 新しいフレームワーク、ライブラリ、開発手法、最新OS対応
   - **チーム開発**: コードレビュー、設計パターン、プロジェクト管理、チームワーク
   - **キャリア**: 技術選択、学習方法、業界動向、エンジニアとしての成長
   - 新機能や重要なアップデート情報を優先
   - ベストプラクティスやアーキテクチャに関する記事を重視
   - 個人的な体験談や基本的なチュートリアルは避ける
4. **記事解説**: 各ニュースについて4〜6文程度の詳しい解説を必ず追記する。以下の要素を含める：
   - **技術的な詳細**: 何がどのように変更・改善されたのか（CHANGELOGなど実際の内容がある場合は具体的に要約）
   - **開発者への影響**: 実際の開発にどう影響するのか
   - **注目ポイント**: なぜこのニュースが重要なのか
   - **具体的な活用方法**: どのように活用できるのか
   - **今後の展望**: 今後どのような発展が期待できるのか
   （「解説:」というプレフィックスは不要。「Changes:」フィールドがある場合は、その内容を活用して具体的な変更点を説明する）
5. **まとめセクション**: 最後に「## まとめ」セクションを追加し、全体のまとめや来週への期待を述べるポジティブな締めの文を記述
6. **編集後記セクション**: まとめの後に「## 編集後記」セクションを追加し、「（ここは人間が手動で編集します）」というプレースホルダーテキストのみを記述
7. **言語**: 必ず日本語で記述

## リンクの形式
記事タイトルを「###」で始めて、改行し、空行を入れてからURLのみを記述し、その後も空行を入れてください。
これによりremark-link-card-plusプラグインがリンクカードを自動生成します。

例：
### タイトル

https://example.com

記事の解説文を直接記述...

## Frontmatter設定
---
title: "週刊モバイル開発ニュース {today_str}号"
slug: "mobile-news-{today_str.replace('-', '')}"
author: "kboy"
description: "[今週の主要なトピックを2-3文で要約]"
pubDatetime: "{today_str}"
tags: ["ニュース", "モバイル開発", "Flutter", "React Native", "Swift", "Kotlin"]
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
    filepath = f"src/data/blog/mobile-news-{today_for_filename}.md"
    
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
