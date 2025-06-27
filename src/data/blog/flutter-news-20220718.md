---
layout: "../../layouts/BlogPost.astro"
title: "Flutter ニュース 【2022年7月第3週】"
description: ""
pubDatetime: "2022-07-18"
author: Aoi
slug: "flutter-news-20220718"
featured: false
draft: false
tags: ["ニュース", "Flutter"]
ogImage: ""
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="http://34.145.4.125/wp-content/themes/cocoon-master/images/man.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutterの最新情報をキャッチアップしたい！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年7月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.0.5 リリース！

https://twitter.com/FlutterReleases/status/1547325037803458563

Flutter のstable チャンネルで3.0.5がリリースされました。

[こちら](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel)によると、以下の内容が修正されたとのことです。

- [Windows、Visual Studioで特定の言語でFlutterのツールが失敗する問題の修正](https://github.com/flutter/flutter/issues/106601)
- [ARMデバイス上で起動時Flutterがクラッシュする問題の修正](https://github.com/flutter/flutter/issues/106510)
- [Flutterでのコード補完の向上](https://github.com/dart-lang/sdk/issues/49054)
- [ファイナライズパラメータ使用時コンパイラーがクラッシュする問題の修正](https://github.com/dart-lang/sdk/issues/49402)

### Synchronous BuildContexts | Decoding Flutter

https://youtu.be/bzWaMpD1LHY

Flutter公式により、Flutterを深堀りする動画シリーズDecoding Flutterが
更新されました。

Flutter 3 で更新されたlint 2.0で新たに追加された`use_build_contexts_synchronously`
のlintについて、
内容を解説し、解決方法を紹介しています。

### Full-stack Dart  パート 2 (The Boring Flutter Development Show)

https://www.youtube.com/watch?v=K85PUBjFhn8&list=PLjxrf2q8roU3ahJVrSgAnPjzkpGmL9Czl&index=2

Flutter 公式のライブコーディングの様子などを提供する動画シリーズ、
The Boring Flutter Development Showが更新されました。

[前回](https://youtu.be/AaQzV1LTmo0)に引き続き、
サーバーのようなバックエンドもDartで作成する方法について
カウンターアプリを作りながら紹介しています。

## Flutterに関する話題

### 10個のFlutter tips & tricks

https://www.reddit.com/r/FlutterDev/comments/vwl0cd/ive_been_sharing_dozens_of_flutter_tips_tricks_on/

Flutterでの開発に役立つ情報をまとめたツイートがRedditで話題になっていました。

ツイートのリプに10個のTipsが記載されています。
どれも図解付きの内容となっています。

### フロントエンドフレームワーク ： Rad

https://www.reddit.com/r/FlutterDev/comments/vymqvp/rad_a_frontend_framework_inspired_from_flutter/

Dartを使ったWeb用のフレームワーク、Rad に関する投稿が、
Redditで話題となっていました。

Flutter と React のいいとこ取りを狙って、全てDartで書けるように作成されたとのことです。

### Flutter アプリを構築できるブラウザ環境 : Zapp

https://www.reddit.com/r/FlutterDev/comments/vyu2z8/announcing_zapp_an_inbrowser_sandbox_environment/

Flutter アプリをブラウザ上で構築できる環境のZappの紹介のRedditの投稿です。

VS codeのような使用感で、ブラウザ上でFlutterを動かすことができます。
投稿内のfeature video でどのような動きをする環境なのか見ることができます。
（現在開発中で、Early Access Program への参加を呼びかけています。）

### Flutter Webのパフォーマンステストとしてのレジュメ

https://www.reddit.com/r/FlutterDev/comments/vzk67s/my_resume_as_a_test_for_flutter_web_performance/

Flutter Web のパフォーマンステストとして作成されたWeb ページについての投稿が、
Redditで話題となっていました。

画面サイズの変更によるレスポンシブ対応がなされており、
Android アプリとしても見ることができます。

### BloCパターンを使用したサンプルアプリ

https://www.reddit.com/r/FlutterDev/comments/w0v7l5/project_sample_app_using_bloc_pattern/

BloC パターンを使用したサンプルアプリの紹介の投稿がRedditで話題となっていました。

認証機能や、インターネット接続による画面分岐等が含まれているとのことです。

## Flutterに関する記事

### **Dart/Flutterライブラリ「twitter_api_v2」がTwitterの公式サイトに掲載されました**

https://zenn.dev/kato_shinya/articles/twitter-api-v2-is-listed-in-twitter-official

筆者が作成されたライブラリ、「twitter_api_v2」がTwitterの公式サイトにて
Dart/Flutterの開発者向けライブラリとして正式に掲載されたことを受け、
このライブラリについて改めて紹介された記事です。

記事内では、サポートしているエンドポイント等が紹介されています。

## Flutterに関する動画

### Flutterで天気アプリを構築する: Flutterチュートリアル

https://youtu.be/ZqVo102JP3U

天気を見ることができるアプリをFlutterで構築するチュートリアル動画です。

1時間弱の動画で、アプリには検索欄で入力した地域の天気を見る、
テーマの変更をする等の機能がついています。

### レスポンシブなダッシュボードUI : Flutterチュートリアル

https://youtu.be/9bo1V9STW2c

画面サイズに適応したレスポンシブなダッシュボードの作成を通し、
Flutterを学ぶことができるチュートリアル動画です。

30分弱でサクッとレスポンシブ対応について学ぶことができます。

## Flutter大学メンバーによる記事

### 初心者　MySQL8に挑戦する

https://qiita.com/dongri727/items/be64695a70f1481fdd26

https://qiita.com/dongri727/items/8c2b4125530d4b0147eb

Flutter と MySQL の組み合わせに挑戦している様子を記録している記事です。

参考にしている動画や記事などが紹介されています。

### **【第1回 FlutterGakkai】発表まとめ**

https://zenn.dev/flutter_gakkai/articles/fafb715cd54921

Flutterをテーマにした技術カンファレンス、Flutter Gakkaiの第2回が、
2022年7月23日に行われることを受け、第1回の内容をまとめた記事です。

記事内で各セッションの動画を見ることができ、
どのようなカンファレンスなのかイメージを掴むことができます。

### **Flutterでログイン後の状態を維持する**

https://zenn.dev/joo_hashi/articles/902b184146ea94

Firebase を用いた認証機能で、ログイン状態ごとに表示画面を変更する方法について
勉強した内容をまとめられた記事です。

参考にされた記事や、shared_preferencesに対する見解等が記載されています。

### **【Flutter】BottomNavigationBar 永続化の最小サンプル作ってみた**

https://zenn.dev/mamushi/articles/nested_bottom_nav

BottomNavigationBarを残したまま画面遷移をする方法について、
現在(Flutter 3)の記法で解説された記事です。

図やGIFを用いて丁寧に解説がなされています。

### **copyWithメソッドとは?**

https://zenn.dev/joo_hashi/articles/f88fd2e104cd3b

Flutterの copyWith メソッドについて書かれた記事です。

海外記事の翻訳による紹介と、自分で使ってみた結果について述べられています。

### **riverpodのプロバイダーとは?**

https://zenn.dev/joo_hashi/articles/aaf3643550070b

Riverpod のProvider について学んでいる内容をまとめられた記事です。

サンプルコードをベースに、Riverpod のプロバイダーについて学んでいる内容を
まとめています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220711/

https://blog.flutteruniv.com/vs-code-flutter-riverpod-snippets/

https://blog.flutteruniv.com/flutter-dart-github-copilot/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、
2022年7月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/7/18）

今週のFlutterニュースの記事でした。

今週特に目を引いたのは、なんといってもZappについての話題でしょう。
これは、心躍りました。

VS code の使用感で、DartPadではできないファイル分けができて、
共有も簡単、という内容で、サンプルアプリ作成がとても捗りそうです。

これがリリースされた後は、Twitterでのコード共有などが一気に変わる気がしています。

とにかくリリースが待ち遠しいサービスですね。
アーリーアクセスプログラムに応募して、動向を見守ろうと思います。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。