---
title: "Flutter ニュース 【2022年10月第1週】"
slug: "flutter-news-20221003"
author: "Aoi"
description: ""
pubDatetime: "2022-10-03"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**『Flutterの最新情報をキャッチアップしたい！』**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年9月第5週〜10月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.3.3 リリース！

https://twitter.com/FlutterReleases/status/1575212542103781387

Flutter のstable チャンネルにて、Flutter 3.3.3がリリースされました。

[Hotfixes一覧](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#333-sept-28-2022)によると今回のリリースでの修正点は以下となります。

- [Xcode 14の iOS pod bundle resourcesのサインインエラー "Signing for "x" requires a development team." の修正](https://github.com/flutter/flutter/issues/111475)
- AnimatedContainer / Containerのheightを0に設定するとアプリがクラッシュし、
uncaught exception となる現象の修正
- [Flutter tools で ShaderCompilerException が発生する問題の修正](https://github.com/flutter/flutter/issues/107590)
- [TextField で テキストを選択しようとするとjava.lang.AssertionError でアプリがクラッシュする問題の修正](https://github.com/flutter/flutter/issues/110640)
- [セキュリティ脆弱性の改善](https://github.com/dart-lang/sdk/issues/50075)
- [不正なsuper パラメータの利用が含まれる場合に、シンタックスエラーとしてレポートされずにクラッシュする問題の修正](https://github.com/dart-lang/sdk/issues/50052)

### pay プラグインのアップデート

https://twitter.com/FlutterDev/status/1575213792543358978

Flutter 公式により、[Pay プラグイン](https://pub.dev/packages/pay?linkId=8237641)のアップデートが紹介されました。

このアップデートで、Google Pay に対応したとのことです。

### Actions 今週のウィジェット

https://youtu.be/XawP1i314WM

Flutter 公式による ウィジェット紹介動画シリーズ、Widget of the Week の
最新動画がアップロードされました。

3週にわたってキーボードショートカットの実装について解説する中、
3週目の今週は、`Actions` ウィジェットの紹介となります。

## Flutterに関する話題

### Riverpod バージョン 2.0 リリース！

https://pub.dev/packages/riverpod

Flutter の状態管理フレームワーク、Riverpod のバージョン2.0がリリースされました。

[こちら](https://pub.dev/packages/riverpod/changelog)のChangelog で変更点等を見ることができます。

### flutter_anchorlable パッケージ

https://www.reddit.com/r/FlutterDev/comments/xtk1it/ive_created_a_package_that_provides_a_widget_that/

特定の位置まで自動でスクロールする機能を持ったウィジェット等を提供するパッケージ、
flutter_anchorlable パッケージがReddit で話題となっていました。

[こちら](https://pub.dev/packages/flutter_anchorlable)のパッケージ紹介ページにて使用感のGIFを見ることができます。

### live_activities プラグイン

https://pub.dev/packages/live_activities

[iOSのActivityKit API](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities) を利用した、LiveActivity や Dynamic Island の機能の
実装をするためのプラグイン、live_activities プラグイン がRedditで話題となっていました。

[こちら](https://pub.dev/packages/live_activities)のプラグイン紹介ページにて使用感のGIFを見ることができます。

### アニメーション付きドーナツ型グラフのサンプル

https://github.com/rxlabz/animated_donut

アニメーション付きのドーナツ型グラフのサンプルリポジトリが
Reddit で話題になっていました。

上記リンクのREADME にて、アプリの動作の動画を確認することができます。

## Flutterに関する記事

### **【Flutter】アプリ全体のアーキテクチャを0から考えて作り直した話**

https://zenn.dev/chooyan/articles/eefc76dbd2ba25

アプリのアーキテクチャの構成例についてまとめられた記事です。

ある要件を持ったプロジェクトに対してアプリのアーキテクチャをどうするべきか、
考え方と例がまとめられています。

### ネスト化ルーティングでのBottomNavigationBar : GoRouter vs Beamer の比較

https://codewithandrea.com/articles/flutter-bottom-navigation-bar-nested-routes-gorouter-beamer/

 BottomNavigationBar を残したまま画面遷移する方法について書かれた記事です。

GoRouter と Beamerパッケージそれぞれを使用して実装し、比較を行っています。

### Flutter でFlameを用いて ピンポンゲームを作成する

https://code.pieces.app/blog/build-a-pong-game-in-flutter-with-flame

Flutter とゲームエンジンであるFlame を用いてピンポンゲーム（卓球ゲーム）を実装する方法について解説された記事です。

衝突検知の実装方法や対戦相手の動作の管理手法等がまとめられています。

### 動画メインのソーシャルアプリをFlutterで作成する：課題と対処法

https://medium.com/@erkansahin/building-a-video-driven-social-app-with-flutter-challenges-and-how-to-overcome-them-43a231de9f84

ソーシャルアプリの[Sponty](https://medium.com/@erkansahin/building-a-video-driven-social-app-with-flutter-challenges-and-how-to-overcome-them-43a231de9f84)をFlutterで作成する最中に直面した課題と、対処法について書かれた記事です。

動画メインのソーシャルアプリを作成するにあたってのプラグイン選定の経緯等がまとめられています。

## Flutter大学メンバーによる記事

### 『超簡単』FlutterとFirebaseと接続してみる

https://qiita.com/yuto96315/items/ec984c9fecd9c0255f06

FlutterアプリとFirebase の接続方法についてまとめられた記事です。

接続に必要なコマンド等が端的にまとめられています。

### 『自分用』Flutter入門　Providerの使い方

https://qiita.com/yuto96315/items/0fc4ef968c407978f5e3

Flutter の状態管理パッケージ、Provider の使い方について解説された記事です。

`ChangeNotifier`を利用した使い方について紹介されています。

### 『コピペで簡単』Flutter✖️Firebase メール認証してみよう！

https://qiita.com/yuto96315/items/b3549c37b45d5cd39c2e

Flutter と Firebase Auth でのメール認証の実装について紹介している記事です。

Providerとの組み合わせでサンプルコードが紹介されています。

### **The Non-Designer's Color Schemes**

https://zenn.dev/ryota_iwamoto/articles/color_scheme_for_developer

アプリでの色の選択方法について書かれた記事です。

Material Designに則った色の選択方法について、
役立つサイト等が紹介されています。

### **Flutterでメモアプリを作る！！**

https://zenn.dev/maki_1003/articles/6c9e81bc57aa24

Flutter でメモアプリを作成した際のアーキテクチャ等を紹介された記事です。

システムの設計について図を用いて紹介がなされており、
構成におけるポイント等がまとめられています。

### **FlutterWebでjavaScript関数を呼び出す**

https://zenn.dev/tsukatsuka1783/articles/5635db7b9b08d4

Flutter Web で JavaScriptの関数を呼び出す方法についてまとめられた記事です。

自作のjs関数を定義し、呼び出す方法について例がまとめられています。

### **【Flutter Widget of the Week #6】FutureBuilderを使ってみた**

https://zenn.dev/faucon/articles/771b65ccc58b2f

Flutter 公式 の動画シリーズ, "Widget of the Week"で紹介されたウィジェットについて
解説している記事です。

今回は`FutureBuilder` について、まとめられています。

### **【Flutter Widget of the Week #7】FadeTransitionを使ってみた**

https://zenn.dev/faucon/articles/ca4e3763498dac

Widget of the Week で紹介された、`FadeTransition` ウィジェットについてまとめられた記事です。

サンプルアプリの紹介や、ウィジェットの各プロパティの紹介がなされています。

### **【Flutter Widget of the Week #8】FloatingActionButtonを使ってみた**

https://zenn.dev/faucon/articles/6c9642ec213c29

`FloatingActionButton` ウィジェットについてまとめられた記事です。

Material 3 での `FloatingActionButton` について紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220926/

https://blog.flutteruniv.com/flutter-package-shimmer/

https://blog.flutteruniv.com/flutter_dotted_border/

## まとめ

本記事ではFlutterニュースとして、
2022年9月第5週〜10月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/10/3）

今週のFlutterニュースの記事でした。

個人的に気になったのはFlameでのピンポンゲームの実装ですね。

Flame自体、一回チュートリアルをやったくらいで
ほとんど触ったことがないので、
是非一度アプリらしいアプリを作ってみたいと考えていました。

このピンポンゲームの記事は、実装もシンプルで作成するのに良い題材だな、
と感じました。

（確か、世界初のコンピューターゲームもピンポンゲームのようなものだったと
記憶しています。）

実際に作ってみた後、感想を編集後記やTwitterで紹介できればと思います！

ぜひお楽しみにしていてください！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。