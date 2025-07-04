---
title: "Flutter ニュース 【2022年11月第3週】"
slug: "flutter-news-20221121"
author: "Aoi"
description: ""
pubDatetime: "2022-11-21"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年11月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter Forward 開催決定！

https://twitter.com/FlutterDev/status/1592593528390963200

Flutter のオンラインイベントが2023年1月25日に開催されるとの告知が公式よりありました。

ケニアのナイロビから配信され、基調講演やテクニカルトーク等が行われる予定だとのことです。

### FutureBuilder (take 2) 今週のウィジェット

https://youtu.be/zEdw_1B7JHY

Flutter 公式による ウィジェット紹介動画シリーズ、Widget of the Week の
最新動画がアップロードされました。

今回の動画は[4年前にアップロードされたFutureBuilderの動画](https://youtu.be/ek8ZPdWj4Qo)の、
あまり良くない使われ方をしている部分の修正と注意を加えたTake2の動画となっています。

## Flutterに関する話題

### internet_availability  Flutter パッケージ

https://www.reddit.com/r/FlutterDev/comments/z00vn3/internet_availability_flutter_package/

[internet_availability](https://pub.dev/packages/internet_availability) というパッケージについての投稿がRedditで話題となっていました。

インターネットの利用状況を監視し、
画面遷移管理パッケージである[go_router](https://pub.dev/packages/go_router)と組み合わせることで、
インターネットが利用できない際には新たな画面へ遷移する、
といった挙動を実装できます。

### Ruzz モバイルアプリ

https://github.com/vlts1/ruzz

人気のプログラミング言語やフレームワーク等の更新情報を追いかけることのできる
モバイルアプリ、Ruzzに関しての[Redditの投稿](https://www.reddit.com/r/FlutterDev/comments/yzgm9y/i_made_an_app_to_track_new_features_and_changes/)が話題となっていました。

このアプリはFlutterで、オープンソースとして作られたとのことです。

### platform_ui パッケージ

https://www.reddit.com/r/FlutterDev/comments/yykc76/platform_ui_platform_specific_widgets_and_ui/

[platform_ui](https://pub.dev/packages/platform_ui) というパッケージについての投稿がRedditで話題となっていました。

アプリの実行元のOSに従って、
UIを切り替えてくれるウィジェットを提供するパッケージとなります。

### Flutter Feature Architecture Generator プラグイン

https://www.reddit.com/r/FlutterDev/comments/yxtufm/ive_created_an_intellij_plugin_for_generating/

[Flutter Feature Architecture Generator](https://plugins.jetbrains.com/plugin/20381-flutter-feature-architecture-generator) というIntelliJのプラグインを作成した、
とのRedditの投稿が話題となっていました。

Feature Firstなフォルダ分け（アーキテクチャ）を自動で実装してくれる
プラグインとのことです。

### profile_photo パッケージ

https://www.reddit.com/r/FlutterDev/comments/yv2uk8/i_made_my_first_package/

[profile_photo](https://pub.dev/packages/profile_photo) というパッケージについての投稿がRedditで話題となっていました。

正方形や円形などさまざまな形で、
カスタマイズ性に優れたプロフィール画像のUIが実装できるとのことです。

## Flutterに関する記事

### Flutter : テストに対する関数のモックの仕方

https://cfdevelop.medium.com/flutter-how-to-mock-functions-for-testing-8eb07c6588af

テストに対して、パッケージで利用可能なメソッドをどのようにモックするかについて書かれた記事です。

この記事では`Widget`テストでの`launchUrl`メソッドのモックの仕方について紹介されています。

## Flutterに関する動画

### Giant Robot Game

https://youtu.be/KCn6Diz5Bz0

ローグライクシュミレーションゲーム、Giant Robot Game についての
動画がRedditで話題となっていました。

Flutter x Flame で実装されているとのことです。

## Flutter大学メンバーがリリースしたアプリ

### 1440task ~ 就寝時刻までに本当にやるべきことが分かるタスク管理アプリ ~

https://apps.apple.com/us/app/1440task/id1640161652

https://play.google.com/store/apps/details?id=site.studio.ringrininfo.new1440task

KOTAさんにより、就寝時刻までに本当にやるべきことが分かるタスク管理アプリ、
『1440Task』がリリースされました！

就寝時間までのカウントダウンが常に表示されていて、
時間を意識しつつ、その日やらなければならないことを管理できる
タスク管理アプリとなっています。

UIも綺麗で課金によるグレードアップもしっかりと考えられているアプリで、
とても素晴らしいです！

### バズバト ~ 時代先取りセンスを競う新感覚ゲームアプリ ~

https://apps.apple.com/jp/app/%E3%83%90%E3%82%BA%E3%83%90%E3%83%88/id1620662173

https://play.google.com/store/apps/details?id=com.yamyanu.buzzbattle

洋祐矢野さんにより、時代先取りセンスを競う新感覚ゲームアプリ、
『バズバト』がリリースされました！

YouTube動画のサムネイルが2つ表示され、
どちらの動画が再生回数が多いか判断し回答するクイズゲームアプリとなっています！

ランキング機能等が実装されていてシンプルながらも遊んで楽しいゲームアプリです！

## Flutter大学メンバーによる記事

### **【Flutter Widget of the Week #24】BackdropFilterを使ってみた**

https://zenn.dev/faucon/articles/e015b24a94f10b

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回は背景に対するぼかしを実装できる`**BackdropFilter**`についての解説記事となっています。

### **【Flutter】Admobのバナーを複数箇所に出そうとした際に発生したエラーの解決策**

https://zenn.dev/romu/articles/6af275f1b8489d

Flutterでの広告実装に際し直面したエラーに対する解決策について書かれた記事です。

原因分析の結果と解決策が提示されており、
複数箇所に広告を実装したい際に参考にしたい記事となっています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221114/

https://blog.flutteruniv.com/flutter-keyboard-shortcut/

https://blog.flutteruniv.com/widget-spacer/

## まとめ

本記事ではFlutterニュースとして、
2022年11月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/11/21）

告知です。

11月24日(木) 19:00 から、Flutter大学とLINE DCのコラボ企画として、

『【ハンズオン】Flutter Web X Google App ScriptでLIFFアプリを作ろう』

というハンズオン企画が行われます。

https://linedevelopercommunity.connpass.com/event/265087/

LIFF アプリとは、LINEが提供するプラットフォームで動作するウェブアプリです。

このLIFFとFlutterを組み合わせてアプリを作ろう、というハンズオンが実施されます。

有志のFlutter大学メンバーが数ヶ月かけて準備したイベントとなっていて、
個人的にいまから非常に楽しみにしています。

上記リンクから参加登録ができますので、
みなさんぜひ、参加登録をしてお待ち下さい！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。