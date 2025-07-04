---
title: "Flutter ニュース 【2022年12月第2週】"
slug: "flutter-news-20221212"
author: "Aoi"
description: ""
pubDatetime: "2022-12-12"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年12月第2週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### NavigationBar（今週のウィジェット）

https://youtu.be/DVGYddFaLv0

Flutter 公式による ウィジェット紹介動画シリーズ、Widget of the Week の
最新動画がアップロードされました。

今回はMaterial 3 のデザインの`BottomNavigationBar`を実装できる、
`NavigationBar` ウィジェットの紹介動画となっています。

こちらのウィジェットに対して、週刊Flutter大学でも解説記事を出しています。
あわせてご確認ください。

https://blog.flutteruniv.com/flutter-material-you-navigation-bar/

### Dart + Postgres - Observable Flutter

https://youtu.be/g76H6-MeHHk

Observable<Flutter>と題した、Flutterに関するライブコーディングのアーカイブ動画です。

[前回](https://youtu.be/WE-CYXE1xug) に続いて、Dart Frog を使ったサーバーサイドアプリでの、
Postgres 接続のハンドリングの向上をテーマとしたライブコーディングとなっています。

### The road to Dart 3,完全なsound null safe な言語

https://medium.com/dartlang/the-road-to-dart-3-afdd580fbefa

Dart の次のメジャーアップデートであるDart 3 で追加される要素や展開について書かれた記事です。

null safety でないコードのサポートの廃止についての解説と、
2023年中頃のstable リリースまでの展開等が書かれています。

### 2つの開発端末で、6つのプラットフォームをサポート

https://medium.com/flutter/supporting-six-platforms-with-two-keyboards-3cb3eb46d763

Flutter がサポートする6つのプラットフォーム全てに対して開発を行うために、
どのような開発端末を用意すべきか、という内容について解説された記事です。

macOSとWindowsの開発端末それぞれが、
どのプラットフォームに対しサポートしているかを紹介しています。

### Flutter Q3 2022 調査結果

https://medium.com/flutter/what-we-learned-from-the-flutter-q3-2022-survey-9b78803accd2

Flutterに関する満足度等のユーザー調査結果についてまとめられた記事です。

満足度の調査結果に加えて、
Firebase SDK に対してどのような問題に直面したか？等の質問の調査結果がまとめられています。

## Flutterに関する話題

### Flutter Graphite パッケージ

https://www.reddit.com/r/FlutterDev/comments/ziqcpk/flutter_graphite_package_release/

Flutter でデータ構造等のグラフを実装するのに有用なパッケージ、
Graphite パッケージがRedditで話題となっていました。

[こちら](https://github.com/lempiy/flutter_graphite)から作成例のGIFをみることが可能です。

### MMAS : Money Tracker

https://github.com/floranguyen0/mmas-money-tracker

App Store で5,000 ダウンロード以上を記録したオープンソースの家計簿アプリ、
MMASがRedditで話題となっていました。

Flutterで、Firebase や Providerを用いて作成されているとのことです。

### Flutterベースのターミナル、 Wives

https://www.reddit.com/r/FlutterDev/comments/zhl4b2/flutter_app_wives_terminal_emulator/

Flutter で作られたターミナル、Wives がRedditで話題となっていました。

[こちら](https://github.com/KRTirtho/wives)からソースコードや使用感の画像を見ることができます。

### Flutter のボイラープレートプロジェクトと、Mediumのチュートリアル

https://www.reddit.com/r/FlutterDev/comments/zewf8m/flutter_production_boilerplate_and_tutorials_on/

Flutterでのクリーンアーキテクチャに沿ったアプリケーションの作成方法について、
サンプルコードとチュートリアル記事を紹介した投稿がRedditで話題となっていました。

flutter_bloc や auto_routeを用いて作成がなされているとのことです。

### auth0_flutter2　パッケージ

https://www.reddit.com/r/FlutterDev/comments/zemnvr/first_pubdev_package_auth0_for_mobile_and_web/

Auth0 をアプリに統合するのに有用なパッケージ、
[auth0_flutter2](https://pub.dev/packages/auth0_flutter2) パッケージがRedditで話題となっていました。

作成者によると、モバイル、Web の両者に唯一対応しているAuth0パッケージとのことです。

## Flutterに関する記事

### FlutterのMaterialAppでCupertinoTabViewっぽく遷移するボトムナビゲーションを作ったよ

https://qiita.com/hi_kawano/items/0557959643512ddddf9b

BottomNavigationBarを残したまま画面遷移を行う方法について書かれた記事です。

Stack とOffstageを用いた方法が紹介されています。

### **Flutter の環境分けの新時代**

https://zenn.dev/blendthink/articles/392607db0a65dd

Flutter でのdevやprod 等の環境分けの方法について紹介された記事です。

現在master チャンネルで開発が進んでいる手法について紹介がされています。

### **初学者のためのFlutter学習コース2022**

https://zenn.dev/urasan/articles/1e5fe9da8fc263

初学者がFlutterを学び始めるに当たっての心構えや参考にすべきサイト等について
まとめられた記事です。

環境設定からFlutterの内部の処理に至るまで、学ぶべき情報がまとめられています。

### 衝突検知と追加のノウハウでFlameを32倍速くする

https://asgalex.medium.com/make-flame-32-times-faster-with-collision-detection-and-additional-tricks-3c212404b0b0

Flame 1.4 からの衝突検知に関するアルゴリズムについて紹介された記事です。

Quad tree を利用したアルゴリズムになっている、と紹介がされています。

## Flutterに関する動画

### Floffee - Flutter Coffee App

https://youtu.be/QxHlgHzSCeU

Flutter で作られたコーヒー注文用アプリに関する動画がRedditで話題となっていました。

音声入力、認識機能が実装されており、
声による注文が可能となっています。

## Flutter大学メンバーによる記事

### MySQL8Quickを修正する

https://qiita.com/dongri727/items/b47896d89b3265067607

MySQL8Quick という作成したアプリのその後について書かれた記事です。

Youtubeのコメントでの指摘に対しての対応内容が書かれています。

### **【Flutter Widget of the Week #30】ValueListenableBuilderを使ってみた**

https://zenn.dev/faucon/articles/590d848d9ea16e

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回は管理する値の変化を監視し、変化があった場合に画面の再構築を行う、
`ValueListenableBuilder`についての解説記事となっています。

### **【Flutter Widget of the Week #31】Draggableを使ってみた**

https://zenn.dev/faucon/articles/590d848d9ea16e

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回はウィジェットをドラッグ可能にする、
`**Draggable**`についての解説記事となっています。

## Flutter大学アドベントカレンダーの記事

[Flutter大学アドベントカレンダー 2022](https://qiita.com/advent-calendar/2022/flutteruniv)に投稿された記事を紹介します。

### .familyについて学んでみた!

https://qiita.com/JunichiHashimoto/items/877a757e501468792227

Flutter 、Riverpod の`Provider` に対する修飾子である`family`について書かれた記事です。

主にサンプルコードにて`family`での`Provider` 利用を行っています。

### **【Flutter × RevenueCat】Androidでアプリ内課金(消耗型)の導入 -準備編-**

https://zenn.dev/odaken/articles/bc84ef15b74a66

課金機能導入をサポートするプラットフォームのRevenueCat を使ったアプリを
作成するための準備について書かれた記事です。

この記事ではAndroid 向けの準備について紹介されています。

### 【Flutter✖️UIデザイン】 Tabbarデザインのあれこれ

https://qiita.com/HikaruKusanagi/items/33c81c12209bf72982e4

TabBar ウィジェットの各プロパティについて、
設定することでどのような変化があるか紹介した記事です。

各プロパティの設定による変化をGIF付きで紹介されています。

### Riverpod（2.0対応）を学んで初学者の壁をぶち破る

https://qiita.com/taisei_dev/items/4c9d9572a56051a1d51f

Riverpod 2.0 の使い方について、API通信を行うアプリを題材に解説を行った記事です。

基本的な使い方からRiverpod Generatorを用いたコード生成についても紹介がされています。

### Flutter大学の2年間で得られたもの

https://qiita.com/naokiwakata/items/37fa63d5cbea83fcd8b9

大学院生の筆者がFlutter大学に2年間在籍して得られた経験について書かれた記事です。

2年間で経験した個人開発や実務、インターン等について経験談が語られています。

### **沖縄で地域クーポンが使えるお店をGoogleマップで表示するために無理やりdartでスクレイピングをしてみた**

https://zenn.dev/pressedkonbu/articles/mottokina-with-dart-scraping

Dartでのスクレイピングを活用した
沖縄で地域クーポンが使えるお店をGoogleマップで表示の方法について書かれた記事です。

実装のコードや、作成したGoogleマップが記事内で紹介されています。

### **Figmaで定義したdesign tokenをFlutterで利用する**

https://zenn.dev/hndr/articles/95235ada055f1f#fn-54f1-1

デザインツールであるFigma上で定義したカラーの定数等のdesign tokenを、
Flutterで利用する方法について書かれた記事です。

tokenのダウンロード方法やdartファイルへの変換方法等が
スクリーンショット付きで解説されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221205/

https://blog.flutteruniv.com/dart-list-for/

https://blog.flutteruniv.com/flutteruniversity-study-meeting-2022011/

## まとめ

本記事ではFlutterニュースとして、
2022年12月第2週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/12/12）

今週のFlutter ニュースでした。

Dart 3に関する記事は、ワクワクする話題でしたね。

Stable のリリースが2023年中頃、と明言されたのも、
インパクトが強かったです。

記事内では同時にリリース予定の機能等についても触れられており、
今後の発展にワクワクしていました。

この記事を要約した記事を出すのもいいかもしれませんね。

気になる方は、ぜひ読んでみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。