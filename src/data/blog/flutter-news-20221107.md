---
title: "Flutter ニュース 【2022年11月第1週】"
slug: "flutter-news-20221107"
author: "Aoi"
description: ""
pubDatetime: "2022-11-07"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**「Flutterの最新情報をキャッチアップしたい！」**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年11月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.3.7 リリース！

https://twitter.com/FlutterReleases/status/1587864663936622592?s=20&t=SC08F1oNp57KMEOYOHhl3g

Flutter のstable チャンネルにて、Flutter 3.3.5がリリースされました。

[Hotfixes一覧](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#337-nov-2-2022)によると今回のリリースでの修正点は以下となります。

- [Android のインプットデコレーターで不必要なNull Safety の例外が出る問題の修正](https://github.com/flutter/flutter/issues/113550)
- [iOSの画面点滅の推測の修正](https://github.com/flutter/flutter/issues/100522)

### Crédit Agricole puts customers first with Flutter

https://youtu.be/l11j5B1a8qI

ポーランド最大のバンキングアプリを作成するのにFlutterが採択されたことについての、
解説、紹介動画がアップロードされました。

Flutter採択の理由等が動画内では紹介されています。

## Flutterに関する話題

### charts_painter 3.0.0 リリース !

https://pub.dev/packages/charts_painter

カスタマイズ可能なチャートを利用可能にするパッケージ、charts_painter の3.0.0がリリースされました。

今回の変更で、チャートの棒にウィジェットを設定することが可能となったとのことです。

### fubuntu

https://www.reddit.com/r/FlutterDev/comments/ymg4s6/fubuntu_a_look_and_feel_emulator_of_ubuntu/

Ubuntu のデスクトップ環境を再現したエミュレータをFlutterで作成したとの投稿がRedditで話題となっていました。

エミュレーター内でのターミナルでのコマンド実行等が可能となっています。

### flutter_advanced_boilerplate リポジトリ

https://www.reddit.com/r/FlutterDev/comments/ykma75/id_like_to_share_my_flutter_advanced_boilerplate/

Flutter のサンプルアプリのリポジトリについての投稿がReddit で話題となっていました。

様々なパッケージの組み合わせがなされており、
作成者の作成経験からくるノウハウが詰め込まれたリポジトリとのことです。
（リポジトリは[こちら](https://github.com/fikretsengul/flutter_advanced_boilerplate)）

## Flutterに関する記事

### **【Flutter】新しい状態管理パッケージを作ってみた**

https://zenn.dev/mathru/articles/acc30f196d7ca1

Provider のような状態管理パッケージを自作し、その内容について解説された記事です。

個別のウィジェットで管理する状態とアプリ全体で管理する状態それぞれに対し、
対応策が用意されているとのことです。

### **Flutter開発をマスターするための手引き 2022年版**

https://zenn.dev/nameless_sn/articles/the_loadmap_of_flutter

Flutter での開発をするにあたり有用なサイトやリポジトリについてまとめて紹介している記事です。

記事内では、YouTube動画チャンネルやサイト、書籍が紹介されています。

### 新しいテンプレートでFlame のゲームを作成しよう

https://verygood.ventures/blog/generate-a-game-with-our-new-template?utm_source=twitter&utm_medium=social&utm_campaign=game_template

 Flutter のゲームエンジン Flame を用いたアプリケーション作成のためのテンプレートを作成した、
との記事がRedditで話題となっていました。

[Very Good CLI ](https://github.com/VeryGoodOpenSource/very_good_cli)にて作成されたテンプレートが利用可能とのことです。

### モバイル等のPlatform View

https://roszkowski.dev/2022/platform-views/

モバイル等でFlutter自体やパッケージで用意されていないUIを実装したい時に用いる、
`PlatformView`の実装方法について解説された記事です。

iOSやAndroid, macOSでの`PlatformView` の実装方法について解説がなされています。

### Flutter InAppWebView 6 プレリリース

https://medium.com/@pichillilorenzo/flutter-inappwebview-6-b0bcef5ca3cf

Flutter で `WebView`を利用するのに有用なプラグイン、flutter_inappwebview のバージョン6についての記事です。

Web や MacOSに対するサポートがなされたとのことです。

### Flutter Web で Chrome 拡張を作成する方法

https://blog.codemagic.io/how-to-build-a-chrome-extension-with-flutter-web/

Flutter Web でGoogle Chrome の拡張アプリを作成する方法について書かれた記事です。

CodeMagic でのCI/CDの方法についても紹介がなされています。

### DockerでのローカルテストでCIのコストを削減しよう

https://www.bam.tech/article/reduce-your-ci-cost-using-docker-to-run-local-tests

Docker でのローカルテストの実装方法について書かれた記事です。

macOSでのCIの実行でコストがかかる問題を解消する方法として紹介がなされています。

### Flutterでのインタラクティブなチャートの作成方法

https://itnext.io/how-to-build-interactive-charts-in-flutter-e317492d5ba1

ユーザーの操作に対応可能なチャートの実装方法について紹介された記事です。

[Graphic](https://pub.dev/packages/graphic) パッケージを利用した方法が紹介されています。

## Flutter大学メンバーによる記事

### **【Flutter Widget of the Week #20】FittedBoxを使ってみた**

https://zenn.dev/faucon/articles/e4364aa0d33aad

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回は`FittedBox`についての解説記事となっています。

### **【Flutter Widget of the Week #21】LayoutBuilderを使ってみた**

https://zenn.dev/faucon/articles/2288879760575c

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回は`**LayoutBuilder**`についての解説記事となっています。

### **Readerが無くなった!**

https://zenn.dev/joo_hashi/articles/5d427e825591f9

Riverpod 2.0 で削除された`Reader`の型定義について、取り上げて紹介している記事です。

代替手段について、サンプルコードにて紹介がなされています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221031/#toc18

https://blog.flutteruniv.com/dart-arrow-syntax/

https://blog.flutteruniv.com/flutter_besso/

https://blog.flutteruniv.com/package-stop_watch_timer/

## まとめ

本記事ではFlutterニュースとして、
2022年11月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/11/7）

今週のFlutter ニュースでした。

今週はチャートについての投稿を2つ紹介しました。

Flutterでアプリを作成していてチャート(グラフ)を導入したい、という要望は度々出てくるものかな、と思います。

自分も昨年個人開発したアプリケーションで折れ線グラフをパッケージを利用して作成した記憶があります。

(余談ですが、今回久しぶりに利用していたcharts_flutterパッケージを確認したら、ディスコンになっていました。)

pub.dev でchartと調べると数多くのチャート用パッケージがヒットするので、
どれを選んでいいのか迷うところだと思います。

それぞれのパッケージにどのような利点があるのかについて、
いつか全部比較してみた記事を作成したいものですね。

ちょっと時間がかかりそうなので、気長に待っていただければと思います。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。