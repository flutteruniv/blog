---
title: "Flutter ニュース 【2022年7月第2週】"
slug: "flutter-news-20220711"
author: "Aoi"
description: ""
pubDatetime: "2022-07-11"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)
Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年7月第2週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### NavigationRail（今週のウィジェット）

https://youtu.be/y9xchtVTtqQ

Flutter 公式によるWidget紹介動画シリーズ、Widget of the Weekが更新されました。

今回はサイドメニューを実装できる`Widget,` `NavigationRail` の紹介動画です。

こちらについて、週刊Flutter大学でも紹介記事をアップロードしています。
併せてご確認下さい。

https://blog.flutteruniv.com/flutter-navigationrail/

## Flutterに関する話題

### Cached パッケージ

https://www.reddit.com/r/FlutterDev/comments/vsmf53/cached_dart_package_that_can_generate_cache_logic/

データをキャッシュする機構のコードを自動生成してくれる、
Dart Package がReddit で話題となっていました。

データをキャッシュする機構のコードが頻繁に書くコードのため、
build_runnerを使って自動生成できるようにした、という趣旨で作られたそうです。

## Flutterに関する記事

### **【個人開発】実務未経験者がFlutterを使ってスノーボード診断アプリをリリースしたときのまとめ**

https://zenn.dev/hata8341/articles/647db1f90a7401

Flutterを使ってのモバイルアプリ作成の体験談について書かれた記事です。

使ったパッケージの紹介や導入理由などについて丁寧に詳しく解説されています。

### **device_previewとFigmaでFlutterのStore用スクショを簡単に作る**

https://zenn.dev/k9i/articles/69eb5a52ce16d1

device_previewとFigmaを使い、
各種Store申請用のスクリーンショットを作る方法について書かれた記事です。

面倒なスクリーンショットの作成作業を簡単に行えるようにする方法について、
記載がされています。

### **Flutter前史: ChromeがFlutterになるまで**

https://zenn.dev/mjhd/articles/680a19ae893c1e

FlutterがFlutterになるまでの流れについて紹介されている記事です。

Chromeのブラウザエンジンのフォークから始まるFlutterの歴史を、
順を追って丁寧に紹介されています。

### Flutterの画面が色あせて見えるのはなぜ？

https://ente.io/blog/tech/display-p3/

Flutter で作成したアプリが色あせて見えるのはなぜか、という趣旨の記事です。

PCの画面で見る色と実機で見る色の違いについて、
原因と事例を紹介されています。

### Flutter Riverpod : アプリの開始時にリスナーを登録する方法

https://codewithandrea.com/articles/riverpod-initialize-listener-app-startup/

Flutter の状態管理手法、Riverpod に関するTipsの記事です。

main関数内でProvider を使うにはどうすればいいか？
という疑問に答えています

### Flutter x Clean Architecture

https://itnext.io/flutter-clean-architecture-b53ce9e19d5a

FlutterでのClean Architectureについて解説した記事です。

考え方の説明からサンプルコードを用いた解説まで行われています。

### Riverpodの状態管理でのアーキテクチャの利用のケーススタディ

https://codeclusive.io/blog/riverpod-state-management/

状態管理手法であるRiverpodを使ったアーキテクチャについて、
実際のアプリに導入してみた結果の考察記事です。

Riverpod導入による長所と短所について記載されています。

## Flutter大学メンバーによる記事

### 【Flutter】ランダムな色を返したい

https://qiita.com/taisei_dev/items/33a84bf27f37848b5788

Flutterでランダムな色を取得する方法について書かれた記事です。

端的にサンプルコード付きで実装方法を紹介しています。

### **BLE制御するC++製iOSアプリをPigeon使ってFlutterアプリ化した**

https://zenn.dev/daisuke7/articles/fb7730939be6b0

C++製のアプリケーションをFlutterで一部リプレースした、
その体験談について記載された記事です。

Method Channel周りのコードを自動生成する
コードジェネレータであるPigeonの使用例が記載されています。

### 【Flutter】go_routerでBottomNavigationBarの永続化に挑戦する

https://qiita.com/heyhey1028/items/fbe24b0781b9245aff4d

https://zenn.dev/heyhey1028/articles/d64564e6fd1df4

画面遷移のパッケージであるgo_routerについて、
BottomNavigationBarを残したまま画面遷移する方法についての提案、考察記事です。

実現する方法と、この方法での問題点について記載がされています。

### **image_pickerについて勉強してみる**

https://zenn.dev/joo_hashi/articles/5c51cb474a17bf

image_pickerパッケージについて使ってみた体験談について書かれた記事です。

iOS、Androidの設定など、image_pickerを使うにあたって必要な内容が記載されています。

### **TextFiledで0を入力させない方法**

https://zenn.dev/fen/articles/7c3549810f63dd

TextFiledで0を入力させない方法について書かれた記事です。

サンプルコード付きで端的に0を入力させない方法を紹介しています。

### **【中級者向け】Firebase Authを用いたRiverpod入門**

https://zenn.dev/ryota_iwamoto/articles/firebase_auth_and_riverpod

Firebase Auth とRiverpod を使ったユーザー認証処理の入門として、
サンプルを紹介した記事です。

サンプルコードや参考文献付きで、丁寧に実装方法が解説されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220704/

https://blog.flutteruniv.com/flutter-inheritedwidget/

https://blog.flutteruniv.com/flutter-navigationrail/

## まとめ

<img src="http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg" alt="" width="300">

本記事ではFlutterニュースとして、
2022年7月第2週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/7/11）

今週のFlutterニュースでした。

今週はFlutter大学のメンバーの記事も含め、
日本語の記事がかなり多く注目された週だったかと思います。

特に、『Flutter前史: ChromeがFlutterになるまで』の記事は、
Flutterの歴史を端的に知ることができ、
とても興味深いかかったです。

どういう思想で、どういう歴史の基Flutterが作られたか知れば、
今後どのような展開がされていくのか知ることができるかもしれないので、
歴史について知る機会は重要だと考えます。

Flutterの今後を考える機会がある際にはぜひ思い返して読みたい記事だと思いました。
まだ読んでいない方はぜひ一度読んでみることをオススメします。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。