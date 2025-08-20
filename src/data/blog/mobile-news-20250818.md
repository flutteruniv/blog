---
title: 【週刊ニュース】Flutter 3.35 リリース、React Native 0.81 アップデート、Gemini API更新ほか
slug: mobile-news-20250818
author: kboy
description: 今週注目の技術革新をピックアップ
pubDatetime: "2025-08-18"
tags: ["ニュース", "モバイル開発", "Flutter", "React Native", "Swift", "Kotlin", "AI"]
layout: "../../layouts/BlogPost.astro"
---

今週もモバイル開発界隈で話題になったニュースをいくつかピックアップしてみました。Flutterのアップデート、React Nativeの進化、そして生成AIの最新情報など、盛りだくさんの内容となっています。開発効率の向上や、プラットフォーム固有の機能強化に繋がる情報も多いので、ぜひ最後まで読んでみてください。


## Flutter・クロスプラットフォーム開発

### Flutter CHANGELOG Updated

https://github.com/flutter/flutter/blob/stable/CHANGELOG.md

Flutter 3.35.1と3.35.0のリリースノートが公開されました。3.35.1では、Windows環境でのFlutter SDKダウンロード問題の修正など、安定性の向上が図られています。3.35.0は安定版の初期リリースで、様々な改善が含まれています。具体的な修正内容についてはCHANGELOGを参照することをお勧めします。これらの修正は、開発中のアプリの安定性と信頼性の向上に直接貢献します。


### What’s new in Flutter 3.35

https://medium.com/flutter/whats-new-in-flutter-3-35-c58ef72e3766?source=rss----4da7dfd21a33---4

Flutter 3.35の新機能を紹介する公式ブログ記事です。CHANGELOGに記載されている内容をより詳細に解説しており、開発者にとって有用な情報が豊富に含まれています。特に、パフォーマンス改善や新機能の利用方法について、具体的なコード例などを交えた解説が参考になります。

### Dart/Flutter MCP

https://dart.dev/tools/mcp-server

https://dev.classmethod.jp/articles/dart-mcp-server/

3.35.0のリリースでDart/Flutter MCPが発表されました！生成AIはたまにエラーで溢れる動かないコードを書いてくることがありますが、このMCPを入れると、ちゃんと動くコードが生成されたそうです！

### A production-ready Flutter + Supabase SaaS boilerplate (auth, payments, CI/CD, etc.)

https://www.reddit.com/r/FlutterDev/comments/1mrqq84/a_productionready_flutter_supabase_saas/

RedditのFlutterDevコミュニティで話題になった、SupabaseとFlutterを使ったSaaSボイラープレートです。認証、決済、CI/CDなど、SaaS開発に必要な機能が既に実装されているため、開発期間の短縮に繋がります。具体的な実装方法やアーキテクチャの検討材料として役立つでしょう。


## React Native開発

### React Native 0.81 - Android 16 support, faster iOS builds, and more

https://reactnative.dev/blog/2025/08/12/react-native-0.81

React Native 0.81がリリースされ、Android 16のサポート、iOSビルド速度の向上などが実現しました。Android 16対応は、最新のAndroidデバイスへの対応を必要とする開発者にとって必須の情報です。iOSビルド速度の向上は、開発サイクルの高速化に繋がり、開発効率を大幅に向上させます。


### Visualizing Open Source Licenses to Analyze Compliance and Reduce Legal Risk

https://www.callstack.com/blog/visualizing-open-source-licenses-to-analyze-compliance-and-reduce-legal-risk

React Native開発において、オープンソースライブラリのライセンス管理は非常に重要です。この記事では、オープンソースライセンスの可視化によるコンプライアンス遵守と法的リスク軽減の方法について解説されています。開発者は、この情報を参考に、自社アプリにおける法的リスクを軽減するための対策を検討できます。


### Looking for alternatives to react-native-gifted-chat

https://www.reddit.com/r/reactnative/comments/1mt03y1/looking_for-alternatives_to_reactnativegiftedchat/

人気チャットライブラリ`react-native-gifted-chat`の代替を探しているRedditの投稿です。様々な代替案とそのメリット・デメリットが議論されており、開発者は自らのプロジェクトに最適なチャットライブラリを選択するための参考情報を得ることができます。


## Swift・iOS開発

### TextKit 2 – The Promised Land

https://blog.krzyzanowskim.com/2025/08/14/textkit-2-the-promised-land/

iOSにおけるテキストレンダリングの進化に関する記事です。TextKit 2の新しい機能とパフォーマンス向上について詳細に解説しており、iOSアプリ開発においてテキスト処理のパフォーマンス改善を検討している開発者にとって非常に有益な情報です。


### Building Lettre.app: 55k+ organic downloads, 2 years, 0 ads

https://www.reddit.com/r/iOSProgramming/comments/1mscf5s/building_lettreapp_55k_organic_downloads_2_years/

5万5千以上のオーガニックダウンロード数を達成したアプリ開発の成功事例です。アプリ開発の戦略や、オーガニックダウンロードを増やすためのヒントを得ることができます。


### SwiftUI Tutorial: Sankey Diagram with instant curves, clean stacking, and auto layout

https://www.reddit.com/r/iOSProgramming/comments/1mrixv3/swiftui_tutorial_sankey_diagram_with_instant/


SwiftUIを用いたサンキー図の作成チュートリアルです。視覚的に分かりやすく、具体的なコード例も提示されているため、SwiftUIでの高度なUI開発の参考になります。


## Kotlin・Android開発

### Accelerating development with monthly releases for Android Studio - releasing 2X more often than before

https://android-developers.googleblog.com/2025/08/accelerating-development-with-monthly-releases-android-studio-2x-more-than-before.html

Android Studioのリリース頻度が倍増したことを発表する公式ブログです。より頻繁なアップデートにより、開発者は最新の機能やバグ修正を迅速に利用できるようになります。これにより開発効率が向上し、開発プロセスが円滑になります。


### What’s new in the Jetpack Compose August ’25 release

https://android-developers.googleblog.com/2025/08/whats-new-in-jetpack-compose-august-25-release.html

Jetpack Composeの最新リリースに関する情報です。新しい機能や改善点、そしてそれらがAndroidアプリ開発にどのように影響するかを理解する上で非常に重要な情報です。


### Media3 1.8.0 - What’s new?

https://android-developers.googleblog.com/2025/08/media3-180-whats-new.html

Android Media3ライブラリのアップデート情報です。メディア再生関連の機能強化やバグ修正に関する情報が掲載されており、メディア関連機能を持つアプリを開発する際に役立ちます。


## 生成AI

### Claude Opus 4 and 4.1 can now end a rare subset of conversations

https://www.anthropic.com/research/end-subset-conversations

AnthropicによるClaudeのアップデートに関する発表です。特定の種類の会話の終了処理が改善されました。これは、AIの安全性と倫理的な利用に関連する重要なアップデートです。


### Imagen 4 is now generally available

https://developers.googleblog.com/en/announcing-imagen-4-fast-and-imagen-4-family-generally-available-in-the-gemini-api/

GoogleのImagen 4が一般公開されたことを発表するブログ記事です。Gemini APIとの統合も発表されており、開発者は高品質な画像生成機能を自身のアプリケーションに容易に統合できます。


### OpenAI’s letter to Governor Newsom on harmonized regulation

https://openai.com/global-affairs/letter-to-governor-newsom-on-harmonized-regulation

OpenAIがAI規制に関するカリフォルニア州知事への書簡を公開しました。AI規制の調和と、革新を阻害しない適切な規制の必要性を訴えています。AI開発に関わる全ての人にとって、重要な政策的動向に関する情報です。


## 開発者向け情報

### Launch HN: Embedder (YC S25) – Claude code for embedded software

https://news.ycombinator.com/item?id=44915206

Y Combinatorに採択されたEmbedderという、組み込みシステム向けにClaude Codeを提供するサービスに関するニュースです。組み込み開発におけるAI支援ツールの登場は、開発効率の向上に大きく貢献する可能性を秘めています。


## その他技術トピック

### The Future of Large Files in Git Is Git

https://tylercipriani.com/blog/2025/08/15/git-lfs/

Git LFSの将来性に関する記事です。大規模ファイルの管理におけるGitの進化と、今後の開発における影響について解説しています。


## Flutter大学で話題になっていた記事

https://zenn.dev/flutteruniv/books/flutter-monetization

Flutter大学Slackコミュニティで、Flutterアプリの収益化に関するZennの記事が話題になっていました。Flutterを用いたアプリ開発における収益化戦略や、具体的な実装方法について議論が活発に行われていたようです。

## まとめ

今週最も重要なトレンドは、生成AIのAPIへの統合の進展です。GoogleのImagen 4の一般公開とGemini APIとの統合は、モバイルアプリ開発において、高品質な画像生成機能を容易に利用可能にするという大きな変化をもたらします。これにより、アプリ開発者は、より洗練されたユーザーインターフェースや、今まで実現が難しかった機能を実装できるようになるでしょう。

## 編集後記

Flutterの最新が出て、Dart/Flutter MCPが公開されたようです！React Nativeに追い風が来ている最近ですが、これを機にAI時代でもFlutter頑張ってください！というお気持ちです。