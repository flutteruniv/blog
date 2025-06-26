---
title: "Flutter ニュース 【2022年9月第4週】"
author: "Aoi"
description: ""
pubDatetime: 2022-09-26T10:00:00.000Z
categories: ["news"]
---

**『Flutterの最新情報をキャッチアップしたい！』**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年9月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### GoRouter Version 5.0 リリース！

https://twitter.com/FlutterDev/status/1572661980640743424

画面遷移を管理するパッケージ、GoRouterのバージョン5.0がリリースされました。

BottomNavigationBarなどを用いたネスト化された画面遷移のサポートや  
リダイレクトの向上等が行われています。

### Nested Navigation with GoRouter (The Boring Flutter Development Show, Ep. 63)

https://youtu.be/NuX4b6qtU2U

Flutter 公式のライブコーディングの様子などを提供する動画シリーズ、  
The Boring Flutter Development Showが更新されました。

今回は画面遷移を管理するパッケージ、GoRouter パッケージを利用した、  
ネストされた画面遷移の実装方法について、ライブコーディングで紹介しています。  
(注：2022年5月に撮影されたものとのことです。)

### Shortcuts (今週のウィジェット)

https://youtu.be/6ZcQmdoz9N8

Flutter 公式による ウィジェット紹介動画シリーズ、Widget of the Week の  
最新動画がアップロードされました。

3週にわたってキーボードショートカットの実装について解説する中、  
2週目の今週は、Shortcuts Widgetの紹介となります。

### 体験の良い画面読み上げの作成

https://blog.gskinner.com/archives/2022/09/flutter-crafting-a-great-experience-for-screen-readers.html

素晴らしいアニメーションで話題になったFlutter製アプリ、  
[Wonderous](https://flutter.gskinner.com/wonderous/)を作成したチームによる記事です。

スクリーンリーダー(画面読み上げ)を実装するにあたってのTips を数多く紹介しています。

## Flutterに関する話題

### 地図実装SDK HERE

https://www.reddit.com/r/FlutterDev/comments/xlnmjt/here\_maps\_for\_flutter/

iOS/Android向けにFlutter で地図を実装するのに有用なSDK、  
HERE SDKについての投稿がRedditで話題となっていました。

投稿内リンクにて、概要やサンプルアプリのソースコード、利用価格等を見ることができます。

### オープンソースのリモートコンフィグ Flagsmith

https://www.reddit.com/r/FlutterDev/comments/xlx48q/flagsmith/

リリースされたアプリを外部から調整できるようにする、  
フラグやリモートコンフィグの機能を提供するFlagsmith がRedditで話題となっていました。

Flutter 用のSDK も用意されているとのことです。

### シンプルなWebRTCでのP2P PeerDart

https://github.com/MuhammedKpln/peerdart

WebRTC（Web上でのリアルタイム通信） での  
P2P(peer to peer) をDartで実装するプラグイン、[PeerDart](https://pub.dev/packages/peerdart)がReddit で話題となっていました。

MIT ライセンスで、PeerJS のDart版として開発が進められています。

### WeatherKit パッケージ

https://pub.dev/packages/weather\_kit

AppleのWeatherKit REST API のラッパーパッケージ、WeatherKit パッケージが  
Redditで話題となっていました。

パッケージページにて利用方法が記載されています

## Flutterに関する記事

### **バックエンドエンジニアがFlutterで「お気に入りのWebコンテンツ」を管理するアプリを作ってリリースした話**

https://zenn.dev/tanachu/articles/25158dd3721d07

Flutter × Firebase でのアプリ開発体験談についてまとめられた記事です。

各技術の選定理由の解説に加え、  
バックエンドエンジニアの目線から、大変だった点等がまとめられています。

### **サーバサイドDartとFlutterを絡めたデモアプリ作ってみた所感**

https://zenn.dev/yokojp/articles/f0460e86f6ef08

サーバーサイドをDartで実装できる、Serverpod を利用して作成したデモアプリに関する解説、  
所感についてまとめられた記事です。

記事内で作成したアプリのGitHub リポジトリが紹介されています。

### 9月のニュースまとめ

https://codewithandrea.com/newsletter/september-2022/

９月に話題となったFlutter界隈のニュースについてまとめられた記事です。

Flutter 3.3 のリリースや、Flutter Vikings の開催、GoRouter 5.0 のリリース等が  
紹介されています。

### Flutter 特化のUI テストフレームワーク Patrol

https://medium.com/flutter-community/announcing-patrol-flutter-first-ui-testing-framework-a638601f1e16

Flutterに特化したUI テストフレームワーク、Patrol について紹介された記事が  
Redditで話題となっていました。

オープンソースであり、  
Testの記法の簡略化や、Integration Test における様々なセッティングができるとのことです。

## Flutter大学メンバーがリリースしたアプリ

### 低評価Checker for YouTube ~ ゆーちゅーぶの低評価・レートを簡単チェック！ ~

https://apple.co/3MX2A5n

藤田さんにより、ゆーちゅーぶの低評価・レートを簡単チェックできるアプリ、  
『低評価Checker for YouTube』がリリースされました！

YouTube 動画のURL を貼り付けて読み込みボタンを押すだけで、  
高評価数、低評価数、レートを確認できるアプリとなっています。

シンプルですが、レスポンスも早く、動画のサムネも出るなど工夫がなされていて、  
とても良いアプリだと思いました！

## Flutter大学メンバーによる記事

### Flutter入門 DropDownMenu 配列から選択肢を作成する

https://qiita.com/yuto96315/items/bc61c10638b5bd4b1cae

Flutter の`DropDownButton` ウィジェットの解説記事です。

一つ一つアイテムを定義していくパターンと、  
Listからアイテムを定義するパターンの2パターンを紹介しています。

### Flutter入門 条件が適合するまでButtonを無効化する

https://qiita.com/yuto96315/items/ec0c3f9902f19b3ee7d7

`ElevatedButton`の無効化の方法について書かれた記事です。

無効化の方法と、具体例を記事内で紹介しています。

### **【Flutter Widget of the Week #3】Wrapを使ってみた**

https://zenn.dev/faucon/articles/ce70c4a60527af

Flutter公式のウィジェット紹介動画シリーズ、  
Widget of the Weekで紹介されたウィジェットを、実際に触って紹介している記事です。

この記事では`Wrap` ウィジェットの紹介が画像付きでなされています。

### **【Flutter Widget of the Week #4】AnimatedContainerを使ってみた**

https://zenn.dev/faucon/articles/99f8249b21583e

Flutter公式のウィジェット紹介動画シリーズ、  
Widget of the Weekで紹介されたウィジェットを、実際に触って紹介している記事です。

この記事では`AnimatedContainer` ウィジェットの紹介がなされています。  
CodePenでの埋め込みで実際に触って動きを確認できます。

### **【Flutter Widget of the Week #5】Opacityを使ってみた**

https://zenn.dev/faucon/articles/3c745c9f52c516

Flutter公式のウィジェット紹介動画シリーズ、  
Widget of the Weekで紹介されたウィジェットを、実際に触って紹介している記事です。

この記事では`Opacity` ウィジェットの紹介がなされています。  
この記事でも実際に触って`Opacity`ウィジェットの効果を確認することが可能です。

### **検索クエリパラメータのトリミング？**

https://zenn.dev/ryota\_iwamoto/articles/fixed\_query\_parameter

文字列での検索の際に、単語間の空白の検知や不要な空白の削除を行う方法について、  
筆者が検討した内容を紹介した記事です。

全角スペース、半角スペースが混ざった場合の対応など、検討がなされています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220919/

https://blog.flutteruniv.com/flutter-medium-large-appbar/

https://blog.flutteruniv.com/flutteruniversity-jointdevelopment-9/

## まとめ

本記事ではFlutterニュースとして、  
2022年9月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/9/26）

サーバーサイドDartについての記事を紹介しました。

サーバーサイドDart といえば、  
今回紹介した記事で紹介されていたServerpodと、  
DartFlog が有名かと思っています。

それぞれの使ってみた系の日本語記事というのはまだまだ少ないので、  
これらの比較でそれぞれ何ができるのか、検証してみたいですね。

サーバーサイドDartでのメリットをしっかりと確認しつつ、  
導入について検討できるようにしたいです。

サーバーサイドDartの今後の動きに期待ですね。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。