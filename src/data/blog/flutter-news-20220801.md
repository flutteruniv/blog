---
title: "Flutter ニュース 【2022年7月第5週】"
slug: "flutter-news-20220801"
author: "Aoi"
description: ""
pubDatetime: "2022-08-01"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)
Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年7月第5週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Full-stack Dart パート 3 (The Boring Flutter Development Show, Ep. 61)

https://youtu.be/AGtfOacKL1c

Flutter 公式のライブコーディングの様子などを提供する動画シリーズ、
The Boring Flutter Development Showが更新されました。

[前回](https://youtu.be/AaQzV1LTmo0)、[前々回](https://youtu.be/K85PUBjFhn8)に引き続き、サーバーのようなバックエンドもDartで作成する方法について
カウンターアプリを作りながら紹介しています。

## Flutterに関する話題

### オープンソースのBloCを使ったアプリケーション

https://www.reddit.com/r/FlutterDev/comments/wbwoiw/any_open_source_example_of_an_app_that_uses_bloc/

「BloCで作られたオープンソースのアプリケーションが知りたい！」
という投稿がRedditで話題となっていました。

元投稿のコメントにて、BloCを使ったアプリケーションのGitHubが寄せられています。

### f_count パッケージ

https://www.reddit.com/r/FlutterDev/comments/wbtlb4/i_made_a_consolecount_equivalent_for_dart/

Javascript の `console.count()`をDartで使えるようにしたパッケージ、
`f_count`パッケージが話題となっていました。

Demo Video にて、使用例を動画で見ることができます。

### Notionのオープンソース代替手段、AppFlowy

https://www.appflowy.io/

メモやタスク管理等ができるツール、[Notion](https://www.notion.so/ja-jp)のオープンソースの代替手段として作られた
[AppFlowy](https://www.appflowy.io/)がReddit話題となっていました。

FlutterとRustを使用して作られているとのことで、
[GitHub](https://github.com/AppFlowy-IO/appflowy)にてソースコードが公開されいます。

### 無料でオープンソースのファイル送信アプリ、AirDash

https://www.reddit.com/r/FlutterDev/comments/w8ssuy/airdash_new_free_and_open_source_flutter_app_for/

無料で使えるオープンソースのファイル送信アプリ、AirDash についての投稿が、
Redditで話題となっていました。

Flutter、Firebase を用いて作成がなされており、
iOS,Android,Windows,macOSにて対応がされているとのことです。

### クリーンアーキテクチャのサンプルアプリ、Dasher

https://github.com/infinum/flutter-dasher

TwitterのようなUIを再現したオープンソースのサンプルアプリDasherのGitHubリンクです。

Flutterでクリーンアーキテクチャにて作成されているとのことです。

## Flutterに関する記事

### **FlutterアプリをAndroid 13に対応させる**

https://zenn.dev/tsuruo/articles/eae9dbbad8372f

現在ベータ版で今後リリースが予定されているAndroid 13に
Flutterで対応する方法について解説された記事です。

Android 13での新機能の紹介や、それに対する対応方法について画像つきでまとめられています。

### **Flutterの課題、Early-onset jankとは何か**

https://zenn.dev/mjhd/articles/e5e10de56eba50

Flutterのパフォーマンス面の課題である、Early-onset jankについて紹介、解説された記事です。

問題点と現状の解決策、今後の展望について、丁寧に解説がなされています。

### **ゆめみ社のFlutterエンジニア採用課題に取り組んでみた**

https://zenn.dev/tsuruo/articles/017e405b21412f

Flutterエンジニアの採用課題に取り組んだ、その体験談についてまとめられた記事です。

課題アプリの作成に当たって注意した点や、
使ったパッケージ等についてまとめられ、解説がなされています。

### Flutterの例外ハンドリング  〜 try-catchとResult型 〜

https://codewithandrea.com/articles/flutter-exception-handling-try-catch-result-type/

Flutterのエラー等の例外ハンドリングの方法について解説された記事です。

`try-catch`を用いる方法に加えて、
`Result`型と呼ばれるクラスを用意してハンドリングする方法が紹介されています。

### Mac OS のドックをFlutterで再現しよう

https://code.pieces.app/blog/build-a-macos-inspired-dock-with-flutter

Mac OSで画面下にてアプリケーション一覧を表示するドックを、
Flutterで再現する方法について解説された記事です。

サンプルコードを紹介した上で、
アニメーションの調整をグラフを用いて丁寧に解説がなされています。

### Flutterでのテストの作成、メンテナンス時間の削減

https://medium.com/@ch271828n/reduce-the-time-of-writing-and-maintaining-tests-in-flutter-7ecba85c4a17

Flutterでのテストの作成、メンテナンス時間の削減の良い方法として、
[flutter_convenient_test](https://github.com/fzyzcjy/flutter_convenient_test)を紹介した記事です。

記事内でスクリーンショット付きでパッケージ利用のメリットについてまとめられています。

## Flutterに関する動画

### const, final, dynamic, var... when and why? | Dart & Flutter tutorial

https://youtu.be/DFe0Aag7V5k

Dartで変数宣言時に頭につけるconstやfinal について、
それぞれいつ、どのような理由で使うのかについてまとめられた動画です。

一つ一つ丁寧に例を紹介した上で解説がなされています。

### Why Flutter? 👨🏽‍💻 The Flutter Pod EP[0]

https://www.youtube.com/watch?v=G6cYuft9Xbo

ラジオ形式でFlutterについて紹介、解説した動画です。

毎週更新される予定だそうで、
第一回はFlutterの良さやどのような時にFlutterを使わないべきか、
等のトピックについてトークがされています。

### Flutter で チャットアプリを作ろう

https://youtu.be/Dt_taxX98sg

チャットのAPIを提供するStream を
Flutterで、Firebase Extensionsを用いて利用する方法について
解説したチュートリアル動画です。

チャットアプリの作成を題材に、ゼロからチャットアプリを作る方法について解説されています。

## Flutter大学メンバーによる記事

### **Flutter Dart-defineでInfo.plistの値も変更する**

https://zenn.dev/daisuke7/articles/a6f2bfecb2db64

Dart-defineで開発環境分けをする際に、
Info.plistの値を開発環境ごとに変更する方法について解説された記事です。

Google サインインを例として、
Dart-defineでInfo.plistの内部の値を変更する方法が解説されています。

### **withConverterなるものを使ってみた!**

https://zenn.dev/joo_hashi/articles/17f9fad30426dd

Flutter と Firebase の連携方法について、Freezed を用いた方法を解説された記事です。

サンプルコードをベースに、Firestoreの値への変換方法を解説されています。

### **StateNotifireProviderとは?**

https://zenn.dev/joo_hashi/articles/71d568d398da97

Riverpod の `StateNotifierProvider` について実際に使ってみた使用例をまとめた記事です。

Firebaseと連携した一画面のアプリの作成をベースに、
`StateNotifierProvider`の仕様例がまとめられています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220725/

https://blog.flutteruniv.com/package-slide_to_act/

https://blog.flutteruniv.com/flutteruniv-task-learning-plan/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、
2022年7月第5週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/8/1）

今週のFlutterニュースについての記事でした。

今週注目したいのはNotionの代替手段であるAppFlowyと、Android13対応の記事です。

Notionの代替手段であるAppFlowyについては試み自体が面白いな、と思いました。
現在、Firebaseの代替手段としてのSupabaseのように、
色々なサービスのオープンソース化が挑戦されています。
サービスを真似して作成してみるだったり、
プログラミング言語を変えて再現してみるだったりは、
勉強にもなるし実力を高める一つの方法かと思います。
興味ある方は積極的にコントリビュートしてみるのをオススメします。

Android 13対応は素直にこんな機能があるんだ、と勉強になりました。
デベロッパー側はやることが増えるような内容ではあり、
ちゃんとキャッチアップして対応していかなければな、と思いました。

今日から8月ですね。
夏本番、楽しいイベント等で気分をリフレッシュしつつ、
頑張っていきましょう！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。