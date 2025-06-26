---
title: "Flutter ニュース 【2022年6月第2週】"
author: "Aoi"
description: ""
pubDatetime: 2022-06-13T10:00:00.000Z
tags: ["ニュース"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)

Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年6月第2週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.0.2 リリース！

https://twitter.com/FlutterReleases/status/1535537361219641345

Flutterのstable チャンネルのバージョンが3.0.2に更新されました。

[こちら](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#302-june-10-2022)によると、以下の内容が更新されたとのことです。

*   [Safari 13にてFlutter アプリが黒い画面表示となる問題の修正](https://github.com/flutter/flutter/issues/104785)
*   [Windows ユーザーがVisual Studio 2022 で `flutter doctor` するとクラッシュする問題の修正](https://github.com/flutter/flutter/issues/102451)
*   [一部言語でテキストの想定外の改行がなされる問題の修正](https://github.com/flutter/flutter/issues/103846)
*   [Material 3 仕様時にインクスパークルが発生する問題の修正](https://github.com/flutter/flutter/pull/104569)
*   [Android で SliverReorderableListがドラッグできない問題の修正](https://github.com/flutter/flutter/issues/103404)
*   [Android でネストした横方向のSlider Widget が横方向スライドできない問題の修正](https://github.com/flutter/flutter/issues/103566)
*   [Windows アプリのビルドで、ビルドプロセスが落ちる問題の修正](https://github.com/flutter/flutter/issues/100375)
*   [initState/dispose/setStateのサジェストがintellij で働かない問題の修正](https://github.com/dart-lang/sdk/issues/49027)
*   [パッケージを公開しようとした際、`dart pub login` で落ちる問題の修正](https://github.com/dart-lang/pub/issues/3424)
*   [enum の強化機能を使用した際 `dart analyze`でエラーとなる問題の修正](https://github.com/dart-lang/sdk/issues/49097)

### FocusableActionDetector (Widget of the Week)

https://youtu.be/R84AGg0lKs8

Flutter公式のWidget紹介動画シリーズ、Widget of the Week が更新されました。

今回は、 `[Actions](https://api.flutter.dev/flutter/widgets/Actions-class.html)`、`[Shortcuts](https://api.flutter.dev/flutter/widgets/Shortcuts-class.html)`、`[MouseRegion](https://api.flutter.dev/flutter/widgets/MouseRegion-class.html)`、`[Focus](https://api.flutter.dev/flutter/widgets/Focus-class.html)` の  
4つの`Widget`の機能をまとめて扱うことのできる`Widget`、  
`[FocusableActionDetector](https://api.flutter.dev/flutter/widgets/FocusableActionDetector-class.html) Widget`の紹介動画となります。

### DartPadワークショップの紹介

今週も公式Twitterにて様々なDartPadでのワークショップが紹介されていました。

#### ネイティブ iOS開発者向けのFlutter

https://dartpad.dev/workshops.html?webserver=https://raw.githubusercontent.com/vandadnp/dartpad\_workshop\_starter/main/public/

iOS開発者向けにFlutterを紹介するDartPad チュートリアルのワークショップです。

#### Futureの初心者向けガイド

https://dartpad.dev/workshops.html?webserver=https://raw.githubusercontent.com/FilledStacks/dart\_flutter\_workshops/main/futures

Flutterでの非同期処理やFutureについて学ぶことのできるチュートリアルのワークショップです。

#### Flutter でのリアクティブコーディング

https://dartpad.dev/workshops.html?webserver=https://raw.githubusercontent.com/PoojaB26/codelabs/master/dartpad\_codelabs/src/reactive\_code

`Stream` や`ValueNotifier, Riverpod`を使った  
リアクティブプログラミングについて学ぶことのできるワークショップです。

#### コンバータを使ってFirestoreへの型安全を実現しよう

https://dartpad.dev/workshops.html?webserver=https://raw.githubusercontent.com/pr-Mais/dartpad\_workshops/main/firestore\_type\_safety\_with\_converter

Firebase のFirestoreをコンバータを実装し  
型安全に扱う方法について学ぶことのできるワークショップです。

#### Flutterでのキーボード指向のパズルゲームの作成

https://dartpad.dev/workshops.html?webserver=https://raw.githubusercontent.com/salihgueler/keyboard\_puzzle\_dartpad\_workshop/main/

Flutterでのキーボードショートカットの実装方法について学ぶことのできるワークショップです。

## Flutterに関する話題

### AWS Amplify Flutter ライブラリのアップデート

https://www.reddit.com/r/FlutterDev/comments/v8dvzp/amplify\_flutter\_team\_released\_a\_new\_version\_of/

サーバーレスバックエンドとして利用できる、  
AWS Amplify のFlutterライブラリに関して、新しいバージョンがリリースされました。

Androidの認証周りの改善等が行われたとのことです。

### Chessformer

https://github.com/K-Rafiki/chess\_variant

チェスを題材としたパズルゲームアプリのソースコードが公開されています。

Flutterで、状態管理手法としてProviderを使って作成されています。

## Flutterに関する記事

### Flutter Gen : Assetの管理をプロ仕様にしよう！

https://dhruvnakum.xyz/fluttergen-manage-assets-like-a-pro

画像URLを打ち込むのではなく、  
enumのようにする事ができるパッケージ、  
Flutter\_genについての投稿がRedditで話題となっていました。

Flutter genについては日本語の[こちら](https://wasabeef.medium.com/fluttergen-25149caea94f)の記事も併せて読むと  
理解が深まります。

### Flutter App Architecture: The Application Layer

https://codewithandrea.com/articles/flutter-app-architecture-application-layer/

Flutter アプリのアーキテクチャについて紹介する記事シリーズ、  
今回はApplication 層についての記事がアップされていました。

複数のData層のリポジトリをApplication層でまとめて管理する方法について書かれています。

### Flutter のBottomNavigationBarに関する全て

https://itnext.io/everything-about-the-bottomnavigationbar-in-flutter-e99e5470dddb

BottomNavigationBar について5つの改良点をまとめた記事です。

スクロール時にBottomNavigationBarを隠す方法など、  
BottomNavigationBarを使用する際に覚えておきたい方法についてまとめられています。

### FlutterでのCSS フィルター

https://medium.com/@iofod/css-filter-for-flutter-apply-filters-in-flutter-as-you-use-css-4bce68ff8acd

画像等のWidgetに簡単に画像フィルターをかけることができるパッケージ、  
CSS\_Filter パッケージの紹介記事です。

サンプルコードが紹介されており、基本的な使い方を学ぶことができます。

### Flutter アプリのリバース・エンジニアリング

https://www.guardsquare.com/blog/current-state-and-future-of-reversing-flutter-apps

アプリケーションのコードから元となったDartのコードを取得する  
リバース・エンジニアリングについての記事がRedditで話題となっていました。

手法としてどの方法を取るべきかの検討から、  
実際のアプリに対するリバース・エンジニアリングの例まで紹介されています。

### Flutterでのテストに関する最小限のガイド

https://itnext.io/minimalist-guide-to-testing-in-flutter-e9c885c7e35c

Flutterのテストについてまとめられた記事です。

記事シリーズとしてテストについて書かれていく予定のようで、  
今回はテストの概要と種類についての解説記事となっています。

### SwiftUI 開発者向けのFlutter

https://www.alwaysrightinstitute.com//flutter/

SwiftUI の開発者向けに Flutterについて紹介、解説されている記事です。

カウンターアプリ等を題材にSwiftUIで書いた場合とFlutterで書いた場合を比較しつつ、  
両者の行き来ができるように解説がなされています。

## Flutterに関する動画

### Flutter E-commerce App Part6

https://youtu.be/Oggjb7ATVew

FlutterでEコマースのアプリを作成するチュートリアル動画シリーズが更新されました。

今回の動画は第６回目で、  
ショッピングカートへのデータ配置、認証周り等を学ぶことができるとのことです。

## Flutter大学の動画

Flutter大学のYouTubeチャンネルにて更新された動画を紹介します。

*   [【Flutter超入門2022】③入力フォームに入れた値を次の画面に渡す【Flutter3.0】](https://youtu.be/Iyy4ceBaAjY)
*   [【Flutter超入門2022】④画像を配置する【Flutter3.0】](https://youtu.be/coKoO6dcQLI)
*   [【Flutter超入門2022】⑤リストを作る方法（ListView）【Flutter3.0】](https://youtu.be/BMREPjjgXjE)
*   [【Flutter超入門2022】⑥今までの復習！YouTubeアプリのトレース【Flutter3.0】](https://youtu.be/noWY6aBVY_0)
*   [【Flutterの教科書】① Flutter環境構築 Flutter3 M1 Mac 対応](https://youtu.be/1Qi1OmPb9f0)
*   [【Flutterの教科書】② UIの作り方。Twitterのタイムラインを作ってみよう。](https://youtu.be/bPGfd0xI1g4)
*   [【Flutterの教科書】③ じゃんけんを作ろう。変数と関数と条件分岐。](https://youtu.be/uDoDwKNOX3E)
*   [【Flutterの教科書】④ WebAPIと連携してフリー画像検索アプリを作ろう【前編】](https://youtu.be/vdYrRkgk20E)

## Flutter大学メンバーによる記事

### 初心者 flutter x firestoreの複合クエリに挑戦する(multiple search)

https://qiita.com/dongri727/items/fe78f78b30841e322ab0

Flutterで複数語の検索機能をつける方法について紹介している記事です。

サンプルコードを紹介の上、苦戦したポイントについて紹介されています。

### **Flutterのデータのモデルについて学んでみる**

https://zenn.dev/joo\_hashi/articles/9aeaec1afa515c

FlutterでのCloud Firestreとのデータのやり取りに関して、  
主に型周りの内容を解説している記事です。

詰まったポイントについて、調べた内容や参考にした記事等を併せて紹介し、解説されています。

### **GetXに入門してみた!**

https://zenn.dev/joo\_hashi/articles/ba5831fa685c26

Flutter のパッケージであるGet X について使用方法の解説、使ってみた感想の記事です。

サンプルコードを作成の上紹介されており、最後には使ってみた感想が記載されています。

### **REDEMEってどう読むの?**

https://zenn.dev/joo\_hashi/articles/2901e0774279fb

Flutterのパッケージを探す際に、どこを見て使用の判断をすべきか、  
実例を用いて紹介されている記事です。

パッケージを探す際の思考の流れの参考になります。

### **fl\_chartで変数を使うとエラーが出る?**

https://zenn.dev/joo\_hashi/articles/e6dc11ce7a487c

fl\_chartライブラリについて詰まった点と解決方法について記載された記事です。

試行錯誤しながら解決策を検討し、解決している流れを知ることができます。

### **【Flutter】ローカル DB パッケージの Isar Database の使い方**

https://zenn.dev/susatthi/articles/20220607-061331-flutter-isar

ローカルDB パッケージのIsar の使い方について解説された記事です。

3つのローカルDBパッケージを実際に使ってみた比較も記載されています。  
サンプルアプリをベースに使用方法について詳細に解説されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220606/

https://blog.flutteruniv.com/flutter-padding-margin/

https://blog.flutteruniv.com/flutter-column/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、  
2022年6月第2週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/6/13）

今週もたくさんのFlutterに関するニュースを紹介しました。

個人的な感想としては、[BottomNavigationBarに関する記事](https://itnext.io/everything-about-the-bottomnavigationbar-in-flutter-e99e5470dddb)が印象に残りました。

スクロール時にBottomNavigationBarを隠す、というのは、  
なかなか実装方法が思いつかない内容だったので、大変興味深いです。

今現在実際に作成中の個人開発アプリでBottomNavigationBarを使用しているので、  
この記事で紹介されている内容をしっかり理解の上、  
実装できれば、かなりUXが上がると思いました。

サンプルアプリを作って実際に動かし、使い方をマスターしようと思います。

面白そうと思った方は、ぜひ記事を読んでみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。