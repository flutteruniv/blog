---
title: "Flutter ニュース 【2022年9月第2週】"
author: "Aoi"
description: ""
pubDatetime: 2022-09-12T10:00:00.000Z
categories: ["news"]
---

**『Flutterの最新情報をキャッチアップしたい！』**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年9月第2週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.3.1 リリース!

https://twitter.com/FlutterReleases/status/1567536953364553731

Flutter 3.3.1 がリリースされました。

修正点は以下となります。

*   [カスタムセンマティックのWidgetを使用したWindowsアプリでアクセシビリティを有効化した際クラッシュする問題を修正](https://github.com/flutter/flutter/issues/110820)

### FlutterのLinkedin チャンネルの解説

https://twitter.com/FlutterDev/status/1567910766266785794

Flutterがビジネス特化型SNS Linkedinにチャンネルを解説しました。

動画やブログなど、様々なコンテンツが更新予定とのことです。

## Flutterに関する話題

### kIsWeb がどのように動くか

https://www.reddit.com/r/FlutterDev/comments/x69a15/kisweb\_how\_it\_works/

実行されている端末がWebかどうかを判定するkIsWebがどのように判定しているか、  
APIの実装のリンクを紹介した投稿がRedditで話題になっていました。

JavaScriptの特徴をうまく使って判定を行なっています。  
詳細は投稿内リンクをご確認ください。

### asset\_manager\_cli

https://pub.dev/packages/asset\_manager\_cli

assets フォルダにある画像のパスを自動でpubspec.yamlに反映してくれるツール、  
asset\_manager\_cli がRedditで話題となっていました。

リンク先のGIFにて使用感を見ることができます。

### flutter\_screen\_capture プラグイン

https://www.reddit.com/r/FlutterDev/comments/xa0tmg/new\_package\_to\_capture\_the\_entire\_screen\_or\_part/

デスクトップアプリにて、画面全体、または一部分をキャプチャするプラグイン、  
flutter\_screen\_captureについての投稿がRedditで話題となっていました。

現状はmacOSとWindowsにて対応しているとのことです。

### 様々なサンプルコードリポジトリの紹介

https://www.reddit.com/r/FlutterDev/comments/x9hwn2/git\_repo\_with\_several\_examples\_cubit\_riverpod/

Riverpod や GetXなど様々なトピックを開設するために作成したサンプルコードをまとめた  
リポジトリの紹介の投稿です。

ほとんどのプロジェクトにテストが含まれている、とのことです。

### wordstonumbers パッケージ

https://pub.dev/packages/wordstonumbers

英語で書いた数字の文字列を数字に変換するパッケージ、  
wordtonumbersパッケージがRedditで話題となっていました。

このパッケージにて"one hundred twenty"と打ち込むと  
120が返ってくるメソッドが使用可能となります。

### flutter\_rust\_bridge

https://www.reddit.com/r/FlutterDev/comments/x8oqx1/use\_rust\_wasm\_on\_web\_besides\_phones\_desktops/

flutterとRustを結びつける、flutter\_rust\_bridgeがWeb に対応した、との投稿です。

投稿内GitHubのリンクから使用方法について知ることができます。

## Flutterに関する記事

### **SliverListでもListView.separatedと同様の機能をシュッと実現する**

https://zenn.dev/sgr\_ksmt/articles/bb0430feff1eb6

SliverListでセパレーターを実装する方法について書かれた記事です。

extensionを利用し、UIの実装コードを簡潔にできる方法を紹介されています。

### Flutter Animate パッケージの紹介

https://blog.gskinner.com/archives/2022/09/introducing-flutter-animate.html

Flutter Animateパッケージの紹介記事です。

Impellerで話題になったwonderousを作成したチームによるパッケージです。  
既存のウィジェットに対して簡単にアニメーションの追加を行うことが可能です。

### Riverpodを使用した、多言語対応した文字列をWidgetの外で使用する方法

https://codewithandrea.com/articles/app-localizations-outside-widgets-riverpod/

通常`BuildContext`を使用して取得する多言語対応した文字列を、  
`Widget`の外で取得する方法について書かれた記事です。

Error ハンドリングなど、`Widget`の外で多言語対応した文字列を使用したい際に、  
対応できるようになります。

### Fork Bomb for Flutter

https://swarm.ptsecurity.com/fork-bomb-for-flutter/

Flutter に関する リバースエンジニアリング手法について解説された記事です。

記事内では、BMWのアプリでの実演が記載されています。

## Flutterに関する動画

### Google Docs クローンをフルスタックで作ろう

https://youtu.be/W6vAQdzLcu4

Flutter とNode.js を使って共有のできるGoogle Docsのクローンを作ろう、  
というチュートリアル動画です。

状態管理手法にRiverpodを、  
バックエンドにMongo DBを用いて、共有機能を実装しています。

## Flutter大学メンバーがリリースしたアプリ

### マンメモ ~ 人を覚えるのが苦手な人へ ~

[https://apps.apple.com/app/マンメモ/id1624843846](https://apps.apple.com/app/マンメモ/id1624843846)

牧さんにより、人を覚えるのが苦手な人向けメモアプリ、  
『マンメモ』がリリースされました！

名前や年齢、誕生日など、人の情報に特化したメモアプリとなっています。

シンプルかつわかりやすいUIで、  
使いやすいアプリだと思いました！

### ユー・フィール・チャート ~気持ちの浮き沈み表示アプリ~

https://apps.apple.com/app/%E3%83%A6%E3%83%BC-%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB-%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88/id1643510750

JboyHashimotoさんにより、気持ちの浮き沈み表示アプリ、  
『ユー・フィール・チャート』がリリースされました！

喜怒哀楽のようなパラメータを登録することで、  
そのデータがグラフ化されて表示されるアプリとなっています。

バックエンドとしてFirebaseを、  
状態管理手法としてriverpod等を使って作成したとのことです！

こちらについて、記事でも紹介されています。

https://zenn.dev/joo\_hashi/articles/33bc89ae85d1c6

## Flutter大学メンバーによる記事

### 初心者　Flutter x MySQL8 に挑戦する with mysql\_client

https://qiita.com/dongri727/items/0b51988c474d2b30674e

FlutterとMySQL8の組み合わせに挑戦している様子が書かれた記事です。

今回はenv ファイルの導入に挑戦した内容が書かれています。

### 【Flutter】SliverAppBarを触ってみた

https://qiita.com/taisei\_dev/items/5939e9cc101b4b29ce77

`SliverAppBar`の使用方法について書かれた記事です。

GIF付きで`SliverAppBar`の各プロパティでどのようなことができるか、解説がなされています。

### Sample App of Flutter3 x MySQL8 with mysql\_client

https://qiita.com/dongri727/items/412b97eed4943006a0a0

https://qiita.com/dongri727/items/58c26c4d083d9fc4f24d

https://qiita.com/dongri727/items/417daf1ddc56d4b9607a

Flutter とMySQL8の組み合わせについて、  
実際に動くサンプルアプリを紹介している記事です。

ゼロから詳細にコードが紹介されており、それぞれのコードに対し解説もなされています。

### **【Flutter】flutterfire\_cli を使って Dart コードのみで環境分けする**

https://zenn.dev/susatthi/articles/20220904-151314-flutter-fire-flavor

Flutterプロジェクトに対するFirebase の初期設定ツール、FlutterFire CLIを使用して、  
開発環境分けをする方法について書かれた記事です。

`Firebase.initializeApp`について、Dartコードのみでの環境分けの方法が紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220905/

https://blog.flutteruniv.com/flutter-iconbutton/

https://blog.flutteruniv.com/flutteruniv-community-plan/

https://blog.flutteruniv.com/tokyo-off-0903/

## まとめ

本記事ではFlutterニュースとして、  
2022年9月第2週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/9/12）

今週のFlutterニュースでした。

今週のニュースでは、Sliverが2つほど話題に上がりました。

Sliverは便利な反面、少しわかりずらいところがあるので、  
いつか記事化できたらなと思います。

個人的には、Flutter Gakkaiでの以下の動画がオススメです。

https://youtu.be/\_NZc23KQChI

ぜひ併せて確認してみて下さい。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。