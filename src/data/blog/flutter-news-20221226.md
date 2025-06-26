---
title: "Flutter ニュース 【2022年12月第4週】"
slug: "flutter-news-20221226"
author: "Aoi"
description: ""
pubDatetime: "2022-12-26"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年12月第4週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Observable Flutter: Payments in Flutter

https://youtu.be/WGE4p6y2r_k

Observable<Flutter>と題した、Flutterに関するライブコーディングのアーカイブ動画です。

今回Flutter への Google Pay の導入方法について紹介されています。

## Flutterに関する話題

### Flutter Markup Language パブリックベータリリース

https://www.reddit.com/r/FlutterDev/comments/zpte66/we_spent_3_years_building_a_crossplatform/

マルチプラットフォームなアプリ作成ができるマークアップ言語、
Flutter Markup Languageのパブリックベータがリリースされたとの投稿が、
Redditで話題となっていました。

[こちら](https://fml.dev/#/assets/templates/home.xml)からこの言語の概要を見ることが可能です。

### Serverpod バージョン1.0 RC版

https://www.reddit.com/r/FlutterDev/comments/zptca7/serverpod_the_missing_server_for_flutter_is_in_rc/

Dartで記述されたオープンソースのスケーラブルなアプリサーバー、
Serverpod がバージョン1.0 のRC版となったとの投稿がRedditで話題となっていました。

来年1月初旬にバージョン1.0がリリースされる予定だとのことです。

### paperfold パッケージ

https://pub.dev/packages/paperfold

紙を折りたたむようなアニメーションを実装できるパッケージ、
paperfoldパッケージがRedditで話題となっていました。

pub.devのReadmeにて、アニメーションを見ることが可能です。

### flutter_rust_bridge アップグレード

https://www.reddit.com/r/FlutterDev/comments/zt4vf8/enjoy_rust_a_modern_language_with_performance/

Flutter と Rust を結びつける、flutter_rust_bridge がアップグレードしたとの投稿が
Redditで話題となっていました。

[こちら](https://github.com/fzyzcjy/flutter_rust_bridge)からflutter_rust_bridge の概要を見ることが可能です。

### Dropboxのような個人ファイルストレージFlutterアプリ

https://github.com/antonio-pedro99/file-space-mobile-app

Flutterで作られた、Dropboxのような個人ファイルストレージモバイルアプリのGitHubが、
Redditで話題となっていました。

AWS Amplify 等を用いて作成されたとのことです。

## Flutterに関する記事

### 【Flutter】親要素の幅の最小値を設定した状態で、子要素が動的に変化した際に親要素の幅を可変型にする方法

https://qiita.com/deodeo_mg/items/0f64d6bb51948b8b9237

子要素の大きさに応じて大きくなることができる`Conatiner`の実装方法について書かれた記事です。

`constraints`プロパティの利用法や、`Row`に対する設定など、
重要なポイントが丁寧に解説されています。

### 2023年にFlutterチームがすべき10のこと

https://blog.flutterbountyhunters.com/ten-things-the-flutter-team-should-do-in-2023

Flutter でさまざまなオープンソースのプロジェクトを作成しているチームの目線から、
10個のFlutter チームに望むことを紹介している記事です。

画面描画に関するものから、テキスト入力システムに関するものなど、
幅広く紹介されています。

### Flutter アプリのハッキングの仕方と守り方

https://medium.com/@talsec/how-to-hack-protect-flutter-apps-simple-and-actionable-guide-pt-1-3a873c7780db

Flutterアプリがどのようにしてハッキングされる可能性があり、
それに対してどのようにして守るのか、という内容について記載された記事シリーズです。

記事では、リバースエンジニアリングのためのツール等が紹介されています。

### 2022年12月のニュースまとめ

https://codewithandrea.com/newsletter/december-2022/

2022年12月のFlutter のニュースについてまとめて紹介されている記事です。

Dart 3 について書かれた、The road to Dart 3の紹介や、
`ListenableBuilder`クラスの紹介等が書かれています。

## Flutterに関する動画

### Riveを利用したアニメーションのFlutterへの実装の仕方

https://youtu.be/Td3xEWwRAQA

Riveを利用したアニメーションのFlutterへの実装の仕方について紹介された動画です。

Riveアニメーション付きのタイトル画面の実装方法等が紹介されています。

## Flutter大学メンバーによる記事

### **【Flutter】fl_chart：折れ線グラフで使用するプロパティ詳細**

https://zenn.dev/tsukatsuka1783/articles/fl_chart_flutter

fl_chartパッケージでの折れ線グラフを実装する際の使用するプロパティについて、
日本語で紹介された記事です。

サンプルコードをベースとして、
各プロパティの内容が解説されています。

### **Flutterでインターネットの通信速度を測定する**

https://zenn.dev/pressedkonbu/articles/flutter-speed-test

Flutterでインターネットの通信速度を測定する方法について書かれた記事です。

speed_test_dart というパッケージの使い方が解説されています。

### **dartでネストされたMapをディープコピーする**

https://zenn.dev/pressedkonbu/articles/flutter-json-deep-copy

Dart の`Map`を参照渡しではなくディープコピーする方法について解説された記事です。

再帰関数を用いた方法と、エンコードとデコードを用いた方法の2つが紹介されています。

### **Riverpod2.0でCRUD**

https://zenn.dev/joo_hashi/articles/36a8a81b98bd92

Flutter の状態管理フレームワークであるRiverpodを用いた
CRUDの実装方法について紹介された記事です。

サンプルアプリとしてFirebaseを組み合わせたアプリが紹介されています。

### **【dio × riverpod】http_mock_adapter で APIクライアントのテストを書く**

https://zenn.dev/shimizu_saffle/articles/http-mock-adapter

http_mock_adapter というパッケージを利用した、
dioを用いたHTTP 通信の、モックを用いたテストについて解説された記事です。

Riverpod を組み合わせたユニットテストの方法が解説されています。

### **Androidの赤いエラー?**

https://zenn.dev/joo_hashi/articles/ffd2c7ad35f279

Flutter で Firebase を利用する際に遭遇するエラーについて、
解決方法を紹介された記事です。

`build.gradle` の修正内容が紹介されています。

### **Firebaseの値を次のページに渡す**

https://zenn.dev/joo_hashi/articles/0edaf38f13169f

Firebaseから受け取った値を表示した画面から、
次の詳細画面に値を橋渡しする方法について紹介された記事です。

サンプルコードをベースとしてコメントで方法が紹介されています。

## Flutter大学アドベントカレンダーの記事

### 【Flutter】macOSのクライアントアプリを作る

https://qiita.com/tokkun5552/items/23b9bf26b1dcce41af44

Flutter 3.0 でstable になったmacOSでのアプリのビルドについて、
実際にやってみた結果を記載した記事です。

ビルドの方法だけでなく、
macOSでビルドすると出てくるワーニングに対する対応についても書かれています。

### **【Flutter】さよなら、 Renderflex overflowed - 恐らくもっとも遠回りなUIエラーの解説 -**

https://zenn.dev/heyhey1028/articles/532d0a9464c562

`Renderflex overflowed`等のUIエラーについて対処法を含めて解説された記事です。

Flutterの画面描画の仕組みから、
UIエラーが何故起こるのか、といった原因についてまで細かく分析し紹介されています。

### **【Flutter✖️WebRTC】WebRTCについて学んだことのまとめ**

https://zenn.dev/faucon/articles/085ab8e420b432

リアルタイムな音声やビデオ等の通信を確立する技術であるWebRTCについて解説し、
Flutterへの導入方法を紹介した記事です。

WebRTCについて基礎から解説がなされており、
参考になるウェブサイトや動画等も多数紹介されています。

### **【Flutter × GoFデザインパターン】Commandを実装してみた**

https://zenn.dev/nozomi_cobo/articles/flutter-design-pattern-command

GoF デザインパターンの中の、Command パターンを紹介し、
Flutterでの導入例について解説された記事です。

サンプルアプリをベースとして、
コマンドの履歴管理ができるアプリの作り方を学ぶことができます。

### **【Flutter】Flutter大学女子部でプレゼントおすすめするアプリを作った話💖**

https://zenn.dev/minn/articles/2fbab4f5e3045f

Flutter大学女子部の共同開発アプリ、『レコメンだー』について、
開発の経緯や技術面について紹介された記事です。

開発することで気付いたことや身についたこと等、
共同開発を通して得られた経験、スキルが紹介されています。

### **ChatGPTをFlutterで使う方法をChatGPTに聞いた結果**

https://zenn.dev/kboy/articles/efae4bf6d457e1

ChatGPT をFlutter で使う方法について、
ChatGPTに直接聞いてみた結果を紹介された記事です。

API Key の取得方法や、完成したコード等が紹介されています。

### **モバイルアプリでWeb上決済を導入する**

https://zenn.dev/ryota_iwamoto/articles/web_checkout_on_mobile_app

モバイルアプリに対してWeb上で行う決済を導入する方法について解説された記事です。

Stripeや、Firebase Dynamic Linksの設定方法から、
詳細に導入方法が紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221219/

https://blog.flutteruniv.com/dart_spread_operator/

https://blog.flutteruniv.com/flutteruniversity-jointdevelopment-10/

## まとめ

本記事ではFlutterニュースとして、
2022年12月第4週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/12/26）

昨日、[Flutter大学アドベントカレンダー](https://qiita.com/advent-calendar/2022/flutteruniv)が25日目を迎え、
25個の記事が無事揃いました。

ほぼ遅れなく25個の記事が揃ったのは、
本当にすごいことだと思っています。

1つ1つの記事が分量や内容が薄い生地か、
というとそんなことはなく、
1つ1つFlutter大学メンバーが全力で書いた、
渾身の記事になっているかと思います。

まだ読んでない方はぜひ読んでみてほしいと思います。
驚くほど内容が濃いです。

これに影響を受けて、
週刊Flutter大学では今週、12月30日まで毎日記事を投稿しようと思います。

年末休みのお供に、こちらもぜひ読んでみていただければと思います。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。