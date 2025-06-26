---
title: "Flutter ニュース 【2022年9月第1週】"
slug: "flutter-news-20220905"
author: "Aoi"
description: ""
pubDatetime: "2022-09-05"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**『Flutterの最新情報をキャッチアップしたい！』**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年8月第5週〜9月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.3 / Dart 2.18 リリース！

https://twitter.com/FlutterReleases/status/1564665542916685824

stableチャンネルにて Flutter 3.3 / Dart 2.18 がリリースされました。

テキストを選択可能にする`SelectionArea` ウィジェットなど、
様々な追加がなされています。

Flutter 3.3 / Dart 2.18の変化点については下記記事でまとめています。
併せてご確認ください。

https://blog.flutteruniv.com/flutter-3-3-dart-2-18/

### Flutter Vikings 開催

https://fluttervikings.com/

Flutter コミュニティでも最大級のカンファレンス、Flutter Vikingsが8/31, 9/1に開かれました。

オフライン、オンラインの同時開催で、
[こちら](https://www.youtube.com/playlist?list=PL4dBIh1xps-EWXK28Qn9kiLK9-eXyqKLX)のYouTubeチャンネルにて公演を見返すことが可能です。

### Flutterアプリのパフォーマンスの測り方、向上のさせ方

https://twitter.com/FlutterDev/status/1564342122836377600

Flutterアプリのパフォーマンスの測り方、工場のさせ方についてのミートアップが
開催されます。

日本時間で9/6 9/13(火)午前9:00からの開催予定となっています。

### TextStyle (今週のパッケージ)

https://youtu.be/1z6YP7YmvwA

Flutter 公式のパッケージ紹介動画シリーズ、Package of the Week の最新動画が更新されました。

今回はパッケージではありませんが、
Textの装飾面で重要となる`TextStyle` についての紹介動画となっています。

## Flutterに関する話題

### adaptive_scaffold パッケージ

https://github.com/flutter/packages/tree/main/packages/adaptive_scaffold

GitHub上でFlutter のパッケージにadaptive_scaffoldが追加されました。

このScaffoldを使って色々な画面サイズに即座に対応できるレイアウトが実装可能になるようです。

### 残像つきスクロールの実装

https://twitter.com/reNotANumber/status/1564987907244494850?ref_src=twsrc%5Etfw%7C[…]m%2Fmediaembed%2Fx2fp79%3Fresponsive%3Dtrueis_nightmode%3Dfalse

Flutter にて残像が残るようなスクロールの実装デモの動画ツイートが話題となっていました。

Tweetのスレッドにてデモアプリのソースコードを確認することが可能です。

## Flutterに関する記事

### Zapp!でFlutterアプリをWebブラウザだけで開発する

https://qiita.com/goofmint/items/8aa71505ca0442e60131

ブラウザ上でFlutterを動かせる環境のZapp!の紹介記事です。

Zapp! の様々なパッケージをインストールできる特徴を利用し、
サンプルアプリを作成して紹介されています。

### Flutter 製 非公式Ubuntu ソフトウェア配布アプリ

https://www.omgubuntu.co.uk/2022/08/new-unofficial-ubuntu-software-app-flutter

Flutterで作られた非公式のUbuntu ソフトウェア配布アプリについて紹介している記事です。

記事内で外見等を見ることが可能です。
[こちら](https://github.com/ubuntu-flutter-community/software)のGitHubにてソースコードを見ることができます。

### Flutter Vikings おすすめ講演の紹介

https://blog.codemagic.io/flutter-vikings-2022-preview/

8/31 ~ 9/1 に開催されたFlutter Vikingsに対し、
CodeMagic オープンソースチームが開催前に厳選した講演を紹介している記事です。

合計11もの講演が概要とともに記事内で紹介されています。

## Flutter大学メンバーがリリースしたアプリ

### Flashwords ~反復学習向きのマイ単語帳~

https://apps.apple.com/jp/app/flashwords/id1642115732

okbさんにより、反復学習向きのマイ単語帳、
『Flashwords』がリリースされました！

昔ながらの単語帳をそのままアプリに落とし込んだような内容で、
自分の好きなように単語の設定等ができるようになっています。

単語帳をひっくり返すアニメーションが癖になる、
勉強にピッタリのアプリだと思いました！

## Flutter大学メンバーによる記事

### 初心者　Flutter x MySQL8 に挑戦する with mysql_client

https://qiita.com/dongri727/items/c32d328aed5dcca3bba1

https://qiita.com/dongri727/items/14191b6c6e6dce23ac20

https://qiita.com/dongri727/items/422a07e83e21c34a1d68

https://qiita.com/dongri727/items/691c6911f825262786b3

Flutter とMySQL8との組み合わせについて、
筆者が苦戦しながらもアプリを作成していく体験談について紹介している記事です。

今回はListの扱い方や、自作WidgetでのWidgetの切り出しに挑戦している様子が
書かれています。

### **ボタンのグレーアウトのロジックを考えてみた!**

https://zenn.dev/joo_hashi/articles/3e9fa02f0359e9

TextField への値の入力されていないときにボタンがグレーアウトして押せなくなるような
UIの実装方法について書かれた記事です。

サンプルコードをベースに紹介がなされています。

### **次のページに値を渡す**

https://zenn.dev/joo_hashi/articles/18ff323bc60563

次のページに値を渡す画面遷移の仕方について書かれた記事です。

サンプルコードと画像付きで紹介がなされています。

### **shared_preferencesについて学ぶ🤔**

https://zenn.dev/joo_hashi/articles/22e7f7d0897645

shared_preferences の使い方について学んだことを書いた記事です。

自作のサンプルアプリを紹介し、保存、参照、削除の処理の実装方法を紹介しています。

### **【Flutter】夏が終わる前におれと波に乗らないか？【アニメーション】**

https://zenn.dev/wakanao/articles/f67e895b618158

Flutter で実装した波乗りアニメーションの実装方法の解説記事です。

上下運動アニメーションの実装に置いて`AnimationController`を使った方法について、
詳細に解説がなされています。

### **FlutterでAppleSignを実装する**

https://zenn.dev/joo_hashi/articles/b92482ca1fd693

Apple アカウントでのサインインの実装方法について書かれた記事です。

Dartコード以外の設定部分についても解説がなされています。

### **GoogleSignInを実装する**

https://zenn.dev/joo_hashi/articles/710683144ca9cf

Google アカウントでのサインインの方法について書かれた記事です。

デバイスがAndroid / iOS 、それぞれに対し、設定から解説がなされています。

### **FlutterでBottomNavigationBarを作る**

https://zenn.dev/joo_hashi/articles/ee8037bdeb7b4b

BottomNavigationBarでの画面遷移実装について書かれた記事です。

Riverpod を使用した画面パラメータの管理方法について、
サンプルコードをベースに紹介がなされています。

### **StreamProviderでListを使う**

https://zenn.dev/joo_hashi/articles/2de8f1144184ad

FirestoreのデータをStreamで取得してListViewにて表示する方法について書かれた記事です。

ミニマムなサンプルアプリでコードの紹介がなされています。

### **Flutterで折線グラフを作ってみた!**

https://zenn.dev/joo_hashi/articles/d6b672e533881e

fl_chartパッケージを使用して折れ線グラフを表示する方法について書かれた記事です。

スマホの画面上に指定した点を通るグラフを表示する方法について書かれています。

### **flutter_dotenv：FlutterWebデプロイ時に'.env'が読み込まれない**

https://zenn.dev/tsukatsuka1783/articles/64c9e06d516a3e

flutter_dotenv にてFlutterWebデプロイ時に"dot.env"ファイルが読み込まれない際の
対処方法について書かれた記事です。

筆者が調べてわかった対処方法について、端的に述べられています。

### **flutter_hooksでATT(App Tracking Transparency)**

https://zenn.dev/joo_hashi/articles/367d39de20ecb6

iOSで広告を出す際に重要となる、
App Tracking Transparency のダイアログの出し方について書かれた記事です。

Riverpodでの実装方法について、サンプルコードをベースに紹介されています。

### **DropdownButtonで配列について学ぶ**

https://zenn.dev/joo_hashi/articles/22a06913a698f2

DropdownButton とListのmap関数を使ってサンプルアプリを紹介している記事です。

筆者が学んだ内容をサンプルアプリのコードにて紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220829/

https://blog.flutteruniv.com/flutter-3-3-dart-2-18/

https://blog.flutteruniv.com/flutteruniversity-study-meeting-202208/

## まとめ

本記事ではFlutterニュースとして、
2022年8月第5週〜9月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/9/5）

今週のFlutter ニュースの記事でした。

Flutter Vikings、ついに開催されましたね！
この記事を読んでいる方の中でも注目されていた方多いのではないでしょうか？

自分はRiverpod 2.0 の講演に注目して見ていました。

とても驚きが多かったのと同時に、
発表の上手さに感服しました。

いつか、自分もこのような場所で講演できるくらい、
Flutterコミュニティに貢献して、
知識を深めていきたいものです。

あなたはどの講演が気になりましたか？

ぜひご意見をお聞かせください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。