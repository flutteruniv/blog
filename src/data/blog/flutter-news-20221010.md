---
title: "Flutter ニュース 【2022年10月第2週】"
slug: "flutter-news-20221010"
author: "Aoi"
description: ""
pubDatetime: "2022-10-10"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**「Flutterの最新情報をキャッチアップしたい！」**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年10月第2週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.3.4 リリース！

https://twitter.com/FlutterReleases/status/1577702704016662528

Flutter のstable チャンネルにて、Flutter 3.3.4がリリースされました。

[Hotfixes一覧](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#333-sept-28-2022)によると今回のリリースでの修正点は以下となります。

- [FlutterのデスクトップアプリであるDPRとスクリーンサイズでOpacityのレイヤーを使用した際にpixel snapping が正しく動作しない問題の修正](https://github.com/flutter/engine/pull/36181)
- [60Hz 以上のリフレッシュレートのAndroid 端末でフレーム飛びが発生する問題の修正](https://github.com/flutter/engine/pull/36491)

### Equality in Dart | Decoding Flutter

https://youtu.be/DCKaFaU4jdk

Flutterの情報や機能を深掘りするシリーズ、Decording Flutterが更新されました。

今回は2つのオブジェクトを等しいと判定するための、
Dartでの値の等価性についての解説となっています。

## Flutterに関する話題

### Very Good Ranch | Flutter と Flameで作成されたオープンソースのゲーム

https://www.reddit.com/r/FlutterDev/comments/xwl28z/very_good_ranch_an_open_source_game_built_with/

Flutter とFlame でオープンソースで作成されたユニコーンの育成ゲームがRedditで
話題となっていました。

お菓子をドラッグ＆ドロップでユニコーンに与えることでユニコーンが成長していく
ゲームとなっています。
投稿内のリンクから、ソースコードや解説記事を見ることができます。

### Fontsource プラグイン

https://pub.dev/packages/fontsource

[Fontsource](https://fontsource.org/) のフォントを簡単に利用可能にするプラグインがRedditで話題となっていました。

yaml ファイルに設定を記述することで、Fontsource のフォントを利用可能になるとのことです。

### FlutterとServerpod を利用したマルチユーザーのピクセルお絵かきアプリ

https://www.reddit.com/r/FlutterDev/comments/xuvj7b/multiuser_pixel_drawing_app_with_flutter/

Flutter と DartでのバックエンドサービスであるServerpod を利用して作られた、
複数人でお絵描きできるアプリについての投稿がRedditで話題となっていました。

投稿内のリンクからデモアプリの実行と、ソースコードの確認が可能です。

## Flutterに関する記事

### **【Flutter】アプリを分割する3つのレイヤーと依存関係**

https://zenn.dev/chooyan/articles/17dde307509248

レイヤー分けされたアーキテクチャに対し、
各レイヤーの役割と依存関係について紹介されている記事です。

目の前の要件や条件に対して、
各レイヤーの役割をどのように持たせるとよいか、一例を学ぶことができます。

### **2020年の開発の参考になるFlutter製アプリ**

https://zenn.dev/hyshu/articles/8d202b8ad7d67f

2020年に公開されたFlutter製アプリの中から厳選したアプリの紹介をしている記事です。

アプリのおおまかな種類別に、アプリへのリンクが紹介されています。

### **【必見】プログラマーが学習・開発で絶対に登録するべき15のYouTubeチャンネル**

https://zenn.dev/nameless_sn/articles/recommended_youtube

Python, TypeScript, Dart(Flutter)に対して、
参考になるYouTubeチャンネルを紹介している記事です。

海外のチャンネルを中心に、4つのチャンネルがFlutterで紹介されています。

### Flutter モバイルアプリの ソフトウェアコード監査

https://chililabs.io/blog/flutter-mobile-app-code-audit

Flutter モバイルアプリのバグの発見を容易にするなどの効果のある、
ソフトウェアコード監査について紹介されている記事です。

記事内ではコードの品質やメンテナンス性、セキュリティなど、
それぞれの項目に対しチェックすべき項目が多数紹介されています。

### Flutter Riverpod 2.0: The Ultimate Guide

https://codewithandrea.com/articles/flutter-state-management-riverpod/

先日リリースされたFlutter Riverpod 2.0 に対応した、
Riverpod の利用方法について紹介、解説されている記事です。

各Providerの使い方からテストの方法まで、網羅的に紹介がなされています。

### Flutteアプリへのマルチプラットフォームな月額制、年額製のサブスクリプション導入のコンプリートガイド

https://www.reddit.com/r/FlutterDev/comments/xwg7ay/complete_guide_to_adding_multiplatform_monthly/

Revenuecat を利用したマルチプラットフォームなサブスクリプションの導入方法について書かれた記事です。

上記投稿内リンクからチュートリアル記事について見ることができます。

### Flutterでの Supabase を利用した認証のコンプリートチュートリアル

https://www.sandromaglione.com/techblog/flutter-supabase-authentication-complete-tutorial

Flutter アプリで Supabase を利用した認証機能の実装について解説されたチュートリアル記事です。

認証機能を持つアプリの作成に対し、Supabase のセットアップの仕方から解説がなされています。

## Flutterに関する動画

### HABIT TRACKER • Flutter Tutorial ♥ Hive Local Storage

https://youtu.be/2VKpq4h3Sdw

Havit Tracker アプリ （習慣記録アプリ）の作成を通してFlutterについて学ぶことのできる、
チュートリアルの動画です。

ローカルストレージ利用のパッケージであるHiveを利用したアプリの作成方法について、
学ぶことができます。

## Flutter大学メンバーによる記事

### 【Flutter Widget of the Week #9】PageViewを使ってみた

https://zenn.dev/faucon/articles/e85f3744eb003c

Flutter 公式 の動画シリーズ, "Widget of the Week"で紹介されたウィジェットについて
解説している記事です。

今回は`PageView` についてまとめられています。

### **【Flutter Widget of the Week #10】Tableを使ってみた**

https://zenn.dev/faucon/articles/2b5f56975289aa

"Widget of the Week"で紹介されたウィジェットについて紹介、解説している記事です。

この記事では、`Table` ウィジェットの解説がなされています。

### **【Flutter Widget of the Week #11】SliverAppBarを使ってみた**

https://zenn.dev/faucon/articles/7baf3bf1cef120

"Widget of the Week" で紹介されたウィジェットについて、
実際に触ってみて解説している記事です。

今回は`SliverAppBar`について、実際に触って確認できるサンプル付きで解説がなされています。

### **abstractでREST APIのプログラムを作る**

https://zenn.dev/joo_hashi/articles/20433e4a97df8d

Abstract なクラスとhttp通信についてサンプルコードで利用方法を解説している記事です。

`FutureBuilder`を利用したデータの取得と表示方法も紹介されています。

### **[Flutter] タイマーの実装方法**

https://zenn.dev/hikaru24/articles/b3bf625d20fa54

Flutter でタイマーを実装する方法について解説されている記事です。

サンプルコードを紹介の上、コードの各行の役割について丁寧に解説がなされています。

### [Firebase] Functionsで本番・開発・Emulator環境を判別する

https://qiita.com/kilalabu/items/8a6fe02bd0281fe433f5

Cloud Functions でのFirebase の環境の判別をする方法について書かれた記事です。

エミュレータの判別、デバック環境の判別について、それぞれ方法を解説されています。

### [Firebase] FunctionsからSlack通知を飛ばす

https://qiita.com/kilalabu/items/9c424b1812376738e7fb

Cloud Functions で Slack の通知を飛ばす方法について書かれた記事です。

Firestoreにデータが作られた時を発火の条件としたslack への通知方法が、
ミニマムな実装とカスタマイズした実装の2パターン紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221003/

https://blog.flutteruniv.com/flutteruniversity-study-meeting-202209/

## まとめ

本記事ではFlutterニュースとして、
2022年10月第2週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/10/10）

今週のFlutterニュースでした。

今週はFlameやSupabase、Serverpod 等、
様々なテーマでサンプルプロジェクトが紹介されていた週だったかと思います。

Flutter で作られたアプリをチュートリアルとして公開していただけるのは、
読み手の実力アップのためにも非常にありがたいことです。

週刊Flutter大学でも三目並べアプリのチュートリアル記事を出しています。

https://blog.flutteruniv.com/flutter-tutorial-logic/

Flutter大学のYoutubeでも、じゃんけんアプリの作成等、様々なチュートリアルを紹介しています。

https://youtu.be/uDoDwKNOX3E

このようなチュートリアルは、Flutterでのアプリ開発を盛り上げるためにも、
とても有用だと思っています。

今後もチュートリアルをどんどん増やしていこうと思いますので、
お楽しみにしていてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。