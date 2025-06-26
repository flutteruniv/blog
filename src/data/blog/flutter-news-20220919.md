---
title: "Flutter ニュース 【2022年9月第3週】"
author: "Aoi"
description: ""
pubDatetime: 2022-09-19T10:00:00.000Z
tags: ["ニュース"]
---

**『Flutterの最新情報をキャッチアップしたい！』**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年9月第3週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.3.2リリース！

https://twitter.com/FlutterReleases/status/1570067388946841600

Flutter のstable チャンネルにて、Flutter 3.3.2がリリースされました。

[Hotfixes一覧](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#332-sept-14-2022)によると今回のリリースでの修正点は以下となります。

*   [パッケージのアセットの読み込みに失敗する不具合の修正](https://github.com/flutter/flutter/issues/111411)
*   [Flutterエンジンのカスタムエンベッダーが32bitの対象に対してビルドに失敗する不具合の修正](https://github.com/flutter/flutter/issues/111296)
*   [Platform View のVirtural Display フォールバックを使った際にAndroidのプラグインがクラッシュする不具合の修正](https://github.com/flutter/flutter/issues/111274)
*   [テキストのレンダリングが正しく処理されない不具合の修正](https://github.com/flutter/flutter/issues/111231)
*   [`catch`ブロックで`late`修飾子をつけて定義した変数を使用した際型推定が不正確になる不具合の修正](https://github.com/dart-lang/sdk/issues/49923)

### Flutter 利用者のIDEの変遷

https://twitter.com/FlutterDev/status/1570850006327762947

Flutterを使うためのIDE(統合開発環境)の、  
ユーザーの使用状況についてまとめた記事を紹介しているツイートです。

Tweet内記事にて、  
Flutter 公式のアンケート結果より、  
Android Studio とVS code どちらを使用している人が多いか、  
どちらが満足度が高いか、を紹介しています。

### Focus（今週のウィジェット）

https://youtu.be/JCDfh5bs1xc

Flutter 公式による ウィジェット紹介動画シリーズ、Widget of the Week の  
最新動画がアップロードされました。

3週にわたってキーボードショートカットの実装について解説する中、  
1週目の今週は、Focus Widgetの紹介となります。

### FlameでDashのゲームを作ろう ~ Learning to Fly ~

https://youtu.be/EFBjCwQ1OgM

初心者がFlutter に関するアプリを作成している様子を動画化したシリーズ、  
Learning to Fly が更新されました。

今回のエピソードではFlameを使って上下操作のみのアクションゲームの実装を行う際に、  
良かった点や困った点等が紹介されています。

### PrimaryScrollController | Decoding Flutter

https://youtu.be/33\_0ABjFJUU

Flutterの情報や機能を深掘りするシリーズ、Decording Flutterが更新されました。

今回は画面スクロールを管理するScrollControllerについての深掘り動画となっています。

### Flutterでのレンダリングの最適化

https://blog.gskinner.com/archives/2022/09/flutter-rendering-optimization-tips.html?linkId=8208387

Flutter 3.3 の公開と同時に話題となったアプリ、[Wonderous](https://flutter.gskinner.com/wonderous/)の作成チームが作成した  
レンダリングの最適化に関する記事がFlutter公式により紹介されました。

記事内では5つのパフォーマンス向上の手法が紹介されています。

## Flutterに関する話題

### Flutter のバージョンと Flutter engineのバージョンの対応表

https://albert221.github.io/flutter-versions-table/

Flutter のバージョンと Flutter engineのバージョンの対応を表にまとめた投稿が、  
Redditで話題となっていました。

今後、DartのSDKバージョンもこの表に加わるようです。

### flutter\_credit\_card パッケージ

https://pub.dev/packages/flutter\_credit\_card

クレジットカードのUIを簡単に実装できるパッケージ、  
flutter\_credit\_card パッケージがRedditで話題となっていました。

リンク先のGIFにてパッケージの使用感を見ることができます。

### App Widget プラグイン

https://www.reddit.com/r/FlutterDev/comments/xgwhy2/flutter\_appwidget\_home\_screen\_widget/

スマホのホームスクリーンに置くウィジェットを実装可能にするプラグインです。

プラグインのpub.devのページにて実装結果のGIFを見ることができます。  
現状はAndroidのみ対応しているとのことです。

### VS Code拡張 Flutter Stacked MVVM

https://www.reddit.com/r/FlutterDev/comments/xgorzt/released\_flutter\_vscode\_extension/

MVVMのファイル構成を自動生成するVS Code拡張がRedditで話題となっていました。

[こちら](https://marketplace.visualstudio.com/items?itemName=AdityaJoshi.stacked-mvvm)のページのGIFにて使用感を見ることが可能です。

### Appwrite 1.0 リリース

https://www.reddit.com/r/FlutterDev/comments/xe3hql/announcing\_appwrite\_10/

オープンソースのBaaSである、Appwrite の1.0 がリリースされました。

[こちら](https://appwrite.io/)のページにてAppwriteについての詳細を見ることが可能です。

### Flutterを使っている企業のリスト

https://www.reddit.com/r/FlutterDev/comments/xdai45/companies\_using\_flutter/

Flutter を使っている企業についてまとめたリストについての投稿がRedditで話題となっていました。

GitHubにて管理され、プルリクエストを送ることで更新依頼を出せるとのことです。

## Flutterに関する記事

### 高校の文化祭でソフトウェア開発をしたお話

https://qiita.com/YumNumm/items/32ffcced7193e11930d9

高校の文化祭でのクラスのアトラクションの企画を裏から支えるソフトウェアを作成し運用した、  
その体験談の記事です。

問題の表示ソフトウェアやお客さんが投げるボールのカウント用ソフトウェア、  
全体の管理用ソフトウェアなど複数のソフトウェアを一人で開発したそうです。  
技術面ではFlutter と Supabase を使って作成したとのことです。

### How to Store API Keys in Flutter: --dart-define vs .env files

https://codewithandrea.com/articles/flutter-api-keys-dart-define-env-files/

アプリのコーディングの中でAPI キーをどのように保管するか、という趣旨の記事です。

`--dart-define`を使用した方法と、.env ファイルを使用した方法をそれぞれ紹介しています。

### FlutterでSupabaseのオフラインサポートを得よう

https://blog.xmartlabs.com/blog/get-flutter-offline-support-in-supabase/

オンラインの時はSupabaseからのデータを取得し、  
オフラインの時はローカルデータベースに保存していた  
オンラインの時に取得したデータのキャッシュを読み取ることができるようにするパッケージ、  
Stockの紹介記事です。

サンプルアプリの作成を通し、Stockパッケージの効果を紹介しています。

### Flutter アプリケーションでのアダプティブなマテリアルコンポーネント

https://salih.dev/adaptive-material-components-for-your-flutter-applications

Flutter での様々な画面サイズに対する対応について書かれた記事です。

アダプティブな対応について歴史から、効果的なパッケージの紹介等がなされています。

## Flutter大学メンバーがリリースしたアプリ

### CoffeeChat 〜企業で働く人との会話マッチングツール〜

https://apps.apple.com/gb/app/coffeechat/id1641428797?uo=2

ミンさんにより、企業で働く人との会話マッチングツール、  
『CoffeeChat』がリリースされました！

完全匿名で、各分野の企業で実際に働く方をメンターとして、  
一対一で話すことのできるアプリとなっています。

業種や職種を表すアイコンがとても特徴的でした！  
また、画面内での縦横のスクロールがしっかりと配置されているのも印象的でした！

## Flutter大学メンバーによる記事

### Sample App of Flutter3 x MySQL8 with mysql\_client

https://qiita.com/dongri727/items/2b4f2616d9be9a007cdc

https://qiita.com/dongri727/items/10a8499dcfbbcc000ef1

Flutter と MySQL8 を組み合わせたアプリを作成している筆者の進捗をまとめた記事です。

記事に対して動画を作成していて、MySQL8との組み合わせのチュートリアルとして、  
かなり良い取り組みがなされています。

### TextFormFieldをたくさん並べるfileをすっきりさせる

https://qiita.com/dongri727/items/18b0261cbce6b2e81455

複数の`TextFormField` を扱うようなページのコードを短く記述する方法について  
書かれた記事です。

切り出した自作の`TextFormField`のウィジェットと使い方をコードで紹介されています。

### **LINE LIFF × Flutter Web：サンプルアプリで動作確認**

https://zenn.dev/tsukatsuka1783/articles/9b2f0bd04f3367

LINE のLIFFと Flutter Webを組み合わせてユーザー情報を取得するサンプルを作成し、  
紹介している記事です。

パッケージの利用で比較的簡単にユーザー情報の取得ができるとのことです。

### **asset\_manager\_cli試してみた!**

https://zenn.dev/joo\_hashi/articles/7460fc9b6c8678

Flutterの便利ツール、asset\_manager\_cli を試してみた内容についての記事です。

フォルダに入れた画像等のアセットからpub.spec yaml への記述を  
自動でしてくれるツールとのことです。

### **【Flutter Widget of the Week #1】SafeAreaを使ってみた**

https://zenn.dev/faucon/articles/9e39bb4140b18a

Flutter公式のウィジェット紹介動画シリーズ、  
Widget of the Weekで紹介されたウィジェットを、実際に触って紹介している記事です。

1つ目としてこの記事では`SafeArea` ウィジェットの紹介が  
画像付きでなされています。

### **【Flutter Widget of the Week #2】Expandedを使ってみた**

https://zenn.dev/faucon/articles/61ba0a617aa7ef

1つ上の記事と同じく、  
Widget of the Weekで紹介されたウィジェットを、実際に触って紹介している記事です。

2つ目として`Expanded` ウィジェットについて、  
プロパティの設定の有無でどう変わるかを含めて解説されています。

### Sample App for MySQL8

https://medium.com/@dongri727/sample-app-for-mysql8-7f076d0182c5

Flutter x MySQL8 のサンプルアプリについての記事です。

全編英語で書かれている上に、YouTube動画での紹介までなされています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220912/#toc24

https://blog.flutteruniv.com/widget-selectionarea/

https://blog.flutteruniv.com/flutteruniv-flutter-training-plan/

## まとめ

本記事ではFlutterニュースとして、  
2022年9月第3週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/9/19）

今回気になった項目は、なんといっても[高校の文化祭でソフトウェア開発をしたお話](https://qiita.com/YumNumm/items/32ffcced7193e11930d9)  
ですね。

見れば見るほど、こんなシステムを一人で作れるものなのか、と技術の高さに驚かされます。

さらに驚くべきはその発想力ですね。  
自分の高校の文化祭の時を思い出してみても、  
アトラクションを裏から支えるシステムを自作しよう、なんて考えは全く思い浮かばなかったように思います。  
ソフトウェアは購入したりするもので、自力で作れるものではない、  
という固定観念がありました。

今の10代の人たちはパソコンを触れる人が多く、  
プログラミングでソフトウェアを作る、ということが自分達より身近なものなのかな、  
とこの記事を読んで思いました。  
これはとても素晴らしいことですよね。

Flutterは特にソフトウェアを作る速度だったり、マルチプラットフォームだったりで、  
アトラクションのソフトウェア制作にマッチしていたのかな、と思います。

10代、20代の人から学びつつ、  
自分の実力をもっとつけていかなければな、と思いました。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。