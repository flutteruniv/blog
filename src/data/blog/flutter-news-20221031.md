---
title: "Flutter ニュース 【2022年10月第5週】"
slug: "flutter-news-20221031"
author: "Aoi"
description: ""
pubDatetime: 2022-10-31T10:00:00.000Z
tags: ["ニュース"]
---

**「Flutterの最新情報をキャッチアップしたい！」**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年10月第5週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.3.6 リリース！

https://twitter.com/FlutterReleases/status/1585314105229033473

Flutter のstable チャンネルにて、Flutter 3.3.5がリリースされました。

[Hotfixes一覧](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#336-oct-26-2022)によると今回のリリースでの修正点は以下となります。

*   [Flutter 3.3.0から、プラットフォームビューでWebViewがサイズエラーを起こす問題の修正](https://github.com/flutter/flutter/issues/111255)

### Firebase UI for Auth（今週のパッケージ）

https://youtu.be/jtFaMv2vGF0

Flutter 公式による パッケージ紹介動画シリーズ、Package of the Week の  
最新動画がアップロードされました。

今回はFirebaseをつかった認証画面の実装で便利な、  
[firebase\_ui\_auth](https://pub.dev/packages/firebase_ui_auth)パッケージの紹介となります。

## Flutterに関する話題

### Flutter Smooth の設計について

https://www.reddit.com/r/FlutterDev/comments/yfbuv7/how\_i\_made\_it\_the\_60fps\_smoothness\_regardless\_of/

Flutter のリスト等のスクロールをスムーズにする、Flutter smooth について、  
ドキュメントを更新したとの投稿がRedditで話題となっていました。

[こちら](https://cjycode.com/flutter_smooth/design/)のDesign の項目が追加され、Flutter smoothパッケージの設計について更新されるとのことです。

### ChessBrain- オープンソースの web アプリ

https://www.reddit.com/r/FlutterDev/comments/ye4rdo/chessbrain\_open\_sourced\_chess\_opening\_builder\_web/

盤面記録のできるチェスアプリをオープンソースで作成した、との投稿がRedditで話題となっていました。

モバイル対応はされていなく、Web版のみ動作するとのことです。

## Flutterに関する記事

### **FlutterでTodo管理dAppを作る**

https://zenn.dev/aya2453/articles/flutter-dapp

web3dart等を用いたTodo Flutterアプリの作成方法について解説された記事です。

スマートコントラクト等との組み合わせの全体像について、  
図を用いて解説がなされています。

### Flutter でのユーザーのためのアプリのインタラクティブなチュートリアル

https://devrush.tech/demo-guide-of-app-for-users

ユーザーに動作を指示するようなチュートリアルの実装方法について解説された記事です。

[tutorial\_coach\_mark](https://pub.dev/packages/tutorial_coach_mark) パッケージを用いた実装方法について解説されています。

### 新しいFlutter Riverpod Generator での Notifier と AsyncNotifierの使い方

https://codewithandrea.com/articles/flutter-riverpod-async-notifier/

Riverpod 2.0で追加された`Notifier` と `AsyncNotifier`の使い方について解説された記事です。

そのまま利用する方法と、Riverpod Generator を使ってコード生成して利用する方法が、  
それぞれ解説されています。

### ResoCoder のFlutter Firebase と Domain Driven Design のコースの更新版

https://medium.com/@sahinefe/updated-version-2022-flutter-firebase-ddd-course-domain-driven-design-principles-by-reso-5ebe906a449d

[Reso Coder](https://www.youtube.com/c/ResoCoder/featured) のFirebase とFlutter, DDD (Domain Driven Design )のYoutube 解説動画シリーズのサンプルアプリを、一つにまとめたリポジトリの紹介記事です。

リポジトリの各ブランチが動画とリンクしており、サンプルを見ながら学ぶことができるとのことです。

### AWS Amplify を用いたFlutter モバイルアプリの作成

https://aws.amazon.com/jp/getting-started/hands-on/build-flutter-mobile-app/

AWS Amplify を用いたFlutter のモバイルアプリの作成方法について解説された、  
チュートリアル記事です。

認証機能の実装方法や、データの保存機能の実装方法がこの記事で学ぶことができます。

## Flutterに関する動画

### Flutter 開発者のための Riverpod 2.x コース

https://www.youtube.com/watch?v=vtGCteFYs4M

Riverpod 2.x について学ぶことができる、チュートリアル動画がReddit で話題となっていました。

17時間かけて様々なアプリを作ることにより、基礎からFlutterアプリの作成方法を学ぶことができます。

## Flutter大学メンバーによる記事

### 初心者 flutter\_unity\_widget 2022.2.0のpub.devを読む ４

https://qiita.com/dongri727/items/34ffa1025fedbbe77afe

Flutter x Unity での実装に挑戦している筆者の体験談について書かれた記事です。

記事ではセットアップを完了し、アプリを立ち上げるところまで紹介がなされています。

### **Flutter：iOSビルド周りのエラー集**

https://zenn.dev/tsukatsuka1783/articles/3a857b86626a0e

iOS アプリをビルド時に発生しがちなエラーについて、解決方法をまとめて紹介している記事です。

現状2つのエラーについて解決方法が記載されています。

### **【Flutter Widget of the Week #19】Tooltipを使ってみた**

https://zenn.dev/faucon/articles/7910bd0b4145e7

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で  
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回は`Tooltip`についての解説記事となっています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221024/

https://blog.flutteruniv.com/dart-cascades/

https://blog.flutteruniv.com/company-interview-axia-works/

https://blog.flutteruniv.com/package-glassmorphism/

## まとめ

本記事ではFlutterニュースとして、  
2022年10月第5週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/10/31）

今日で10月も終わり、今年も残すところあと2ヶ月となりました。

11月、12月は気になるイベントが目白押しです。

Flutter大学でもオフ会や忘年会の開催が話題となっています。

記事を書くお祭りのアドベントカレンダーも実施されるでしょうし（あくまで予想ですが）、  
楽しいことがいっぱいですね。

今年のラスト2ヶ月、精一杯楽しんでいこうと思います。  

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。