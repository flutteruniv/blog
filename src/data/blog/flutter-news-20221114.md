---
title: "Flutter ニュース 【2022年11月第2週】"
slug: "flutter-news-20221114"
author: "Aoi"
description: ""
pubDatetime: "2022-11-14"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年11月第2週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.3.8 リリース！

https://twitter.com/FlutterReleases/status/1590407669483032577

Flutter のstable チャンネルにて、Flutter 3.3.8がリリースされました。

[Hotfixes一覧](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#338-nov-09-2022)によると今回のリリースでの修正点は以下となります。

- [Android デバイスが no Data を渡した際の `TextField` の null safety の問題の修正](https://github.com/flutter/flutter/issues/113973)
- [`num` 型 を許さない `TextInput`の型変換の修正](https://github.com/flutter/flutter/issues/109632)

### Gesture Arena | Decoding Flutter

https://youtu.be/Q85LBtBdi0U

Flutter のタップ、ダブルタップ、ロングタップ等のイベントがどのように判別されているかを、
イベントの闘技場に例えて紹介されている動画です。

アニメーション付きで、判別の仕組みが紹介されています。

### Flutter News Toolkit

https://twitter.com/FlutterDev/status/1590758686149976064

Flutter の新たなテンプレートである、
Flutter News Toolkit へのアーリーアクセスが可能になった、とのツイートです。

このテンプレートを使うことによって、
認証機能やSNSへのシェア機能を持ったニュースアプリを、
より速く、簡単に作成することができるとのことです。

## Flutterに関する話題

### Samsung Note のようなメモアプリのリポジトリ

https://www.reddit.com/r/FlutterDev/comments/ys4ulo/i_built_a_notetaking_app_similar_to_samsung_note/

マークダウンで書くことのできるメモアプリのリポジトリがRedditで話題となっていました。

Firebase を用いて作成されており、投稿内GitHubリンクからデザイン等を見ることができます。

### Flutter で作成されたGoogle 製 VPN デスクトップアプリ

https://twitter.com/timsneath/status/1590449925300846592

Google が提供するVPNアプリがFlutter で作られた、と話題となっていました。

macOS と Windows で使えるアプリをシングルコードベースで作成したとのことです。

### Flutter バージョン管理ツール Puro

https://puro.dev/

Flutter のバージョン管理ツールであるPuro についての投稿がRedditで話題となっていました。

リンク先にてFVM等との性能差が紹介されています。

## Flutterに関する記事

### **dart:ffiで既存のC++の資産をDart/Flutterから使用する方法**

https://zenn.dev/turing_motors/articles/c62030a38d2eda

C++ で書かれた関数等をDart / Flutter で利用する方法について解説された記事です。

dart:ffi を用いて利用する方法が、具体的な課題と解決策の提示で解説されています。

### **タダで文化祭来場用の予約サイトを作らされた話**

https://zenn.dev/bun133/articles/e035b8a6b04956

Flutter x Firebase で 文化祭来場用の予約サイトを作成した際の経験談について
書かれた記事です。

仕様変更の経緯や作成にあたって困った点等が書かれています。
記事内で作成したアプリケーションのソースコードのGitHubリンク等が記載されています。

### **StateNotifier, StateProvider, FutureProvider, StreamProviderの使い分け**

https://zenn.dev/3ta/articles/fb2329ba2ab1dd

Flutterの状態管理フレームワーク、Riverpod のいくつかの`Provider`について、
役割の違い等を紹介している記事です。

`FutureProvider`の`StateNotirfierProvider`での書き換えでの例等が紹介されています。

### **【Flutter】Riverpod 2.0 の Notifier と riverpod_generator の解説**

https://zenn.dev/10_tofu_01/articles/try_riverpod_generator

Flutterの状態管理フレームワーク、Riverpodのバージョン2.0と同時に追加された
riverpod_generator 等について紹介された記事です。

カウンターアプリを題材にriverpod_generatorでのコード生成の利用方法や、
`Notifier`での記述例が紹介されています。

### **【重要】学習・開発で必ず確認するべきOSS**

https://zenn.dev/nameless_sn/articles/awesome_open_source

WEB開発、モバイル開発等々で開発者が知っておくと良いオープンソースソフトウェア（OSS）について紹介された記事です。

Flutter で作成されているOSSについてもいくつか紹介がなされています。

### **【Flutter】プログラミング歴半年で、モバイルアプリを2個リリースした話**

https://zenn.dev/tatukane/articles/81aebcfac673b6

半年で2つのアプリをリリースした筆者の経験談について書かれた記事です。

リリースにあたり困った点やアプリケーション作成の際に工夫した点等が記載されています。

### パッケージを使わずにオリジナルのToastを実装しよう！

https://itnext.io/create-your-own-toast-without-using-any-packages-6d3828816f7c

パッケージを使わず、オリジナルの`Toast`を実装する方法について書かれた記事です。

`Overlay`を用いた実装方法が紹介されています。

### Flutter Riverpod 2.0 でのAsyncNotifier のサブクラスの単体テストの仕方

https://codewithandrea.com/articles/unit-test-async-notifier-riverpod/

Riverpod 2.0 で追加された`AsyncNotifier`のサブクラスの単体テストの仕方について
紹介、解説された記事です。

認証機能を例に挙げモックの仕方やリスナーの設定方法等が紹介されています。

## Flutterに関する動画

### Flutterでの回転式ダイアルのUIへの挑戦

https://www.youtube.com/watch?v=nzqAp8xZ4wA

Flutterで黒電話のようなダイアルでのパスコード解錠アプリを作成したとの動画です。

[こちら](https://github.com/mkobuolys/flutter-design-challenges/tree/master/flutter_rotary_passcode) のGitHubからソースコードを確認することが可能です。

## Flutter大学メンバーによる記事

### .familyについて学んでみた!

https://qiita.com/JunichiHashimoto/items/877a757e501468792227

Flutter 、Riverpod の`Provider` に対する修飾子である`family`について書かれた記事です。

主にサンプルコードにて`family`での`Provider` 利用を行っています。

### **Flutter × Bitriseでappstore＆playストアにまとめてデプロイが快適すぎる件**

https://zenn.dev/manabu/articles/184ac4060c37bf

Flutter とCI/CDサービスであるBitriseを用いて、
App Store、Google Play Storeにまとめてデプロイする方法について解説された記事です。

実際に導入しているアプリの設定内容をスクショ付きで紹介されています。

### **【Flutter Widget of the Week #22】AbsorbPointerを使ってみた**

https://zenn.dev/faucon/articles/5a28dc9f7ea7c9

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回はタップ等のジェスチャーを無効化する`**AbsorbPointer**`についての解説記事となっています。

### **【Flutter Widget of the Week #23】Transformを使ってみた**

https://zenn.dev/faucon/articles/a2415c2cd1fd0a

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回は拡大や回転等を実装できる`**Transform**`についての解説記事となっています。

### **Flutter Build時に Package.resolved file is corrupted or malformed**

https://zenn.dev/ishihaya/articles/2dfa53a3c11b1b

GitHub Actions を利用してのCI を構築時に直面したエラーの内容と解決策について書かれた記事です。

端的に原因と解決策が書かれています。

### **【Flutter】Animationの基礎から応用まで **

https://zenn.dev/heyhey1028/articles/a9ee3695cfcf63

https://zenn.dev/heyhey1028/articles/8752d61f522f50

https://zenn.dev/heyhey1028/articles/222e2851e9d97f

https://zenn.dev/heyhey1028/articles/10492c3884a45a

Flutterのアニメーションの実装方法について解説された記事です。

アニメーションを実装するにあたっての様々な要素を丁寧にわかりやすく解説されています。

これらの記事の英語化もされています。

https://medium.com/@heyhey1028/flutter-animation-newbie-to-advanced-1-basics-5283c9e4b2e1

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221107/

https://blog.flutteruniv.com/flutter-widget-placeholder/

https://blog.flutteruniv.com/widget-sizedbox/

## まとめ

本記事ではFlutterニュースとして、
2022年11月第2週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/11/14）

Flutter公式からこんなツイートがありました。

https://twitter.com/FlutterDev/status/1590026371417673728

2023年1月25日に何かある、との告知ツイートです。
一体何があるんでしょうか？
いくつか予想をしてみようと思います。

1. Flutter のメジャーアップデート (Flutter 4.0.0)
2. Flutter のカンファレンスの開催
3. Flutter Apprentice のような初心者向けチュートリアル本の展開
4. Flutter Puzzle Hack のようなハッカソンの開催

個人的には、Flutter 4.0が本命かな、と思っています。
どれになるにしろ、今からワクワクが止まりませんね！

あなたはこの告知についてどのように思いますか？
ぜひTwitter等でご意見をお聞かせください！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。