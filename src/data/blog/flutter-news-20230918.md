---
title: "Flutter ニュース 【2023年9月第3週】"
slug: "flutter-news-20230918"
author: "Aoi"
description: ""
pubDatetime: "2023-09-18"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2023年9月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.13.4 リリース！

https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#3134-september-13-2023

FlutterのStable チャンネルにてVersion 3.13.4が利用可能となりました。

iOS17でのオートコレクト機能のアップグレード等に対応したとのことです。

詳細は上のリンクから。

[Flutter Releases](https://twitter.com/FlutterReleases) ではFlutter 3.13.4の通知ポストはありませんでしたが、
筆者のPCにてアップデートが確かに配信されていることを確認しております。

### Flutter アプリがiOS上でどうやって動いているか？

https://twitter.com/FlutterDev/status/1702079801782059516

FlutterアプリがiOSのシステム上でどのようにして動いているかについて解説したショート動画が投稿されました。

YouTube動画上でも投稿されており、より詳しい説明動画が[こちら](https://youtu.be/ceMsPBbcEGg?si=Y5R77r7ooya2ciPP)から見ることができます。

### Observable Flutter: Enemy movement

https://www.youtube.com/live/lPnOdCykmys?si=qfmxzmsra-cY6POF

Flutter公式チャンネルでObservable<Flutter>というライブ配信が行われました。

Flutterでゲームを作成するフレームワーク、Flameにて、
ゾンビの敵にゾンビらしい行動を実装するライブコーディングが行われました。

## Flutterに関する話題

### Weather app with apple's design

https://github.com/MasteerRui/WeatherApp-Flutter

Appleの天気アプリにインスパイアされて作成された、Flutter製の天気アプリのGitHubリポジトリがRedditで話題となっていました。

現在位置の天気が取得できるなど、再現度の高いアプリとなっています。

### Introducing FigDart: Automate Your Figma-to-Flutter Workflow for Colors and TextStyles 🎨🛠️

https://www.reddit.com/r/FlutterDev/comments/16i2mqz/introducing_figdart_automate_your_figmatoflutter/

デザインツールであるFigmaから、TextStyleやColorの情報をDartコードとして出力する拡張機能がリリースされたとの投稿がRedditで話題となっていました。

TextStyle等をまとめたクラスとしての出力だけでなく、
ThemeExtensionでの出力機能も備えています。

## Flutterに関する記事

### **UIデザイナーからFlutterエンジニアになった話**

https://zenn.dev/arsaga/articles/b1020fd281e996

社内転職にてUIデザイナーからFlutterエンジニアになった筆者の体験談の記事です。

転職理由やFlutterエンジニアになるために行った勉強方法、注意点等がまとめられています。

### **AsyncCacheのススメ(非同期処理の多重実行防止のための個人的ベタープラクティス)**

https://zenn.dev/8rine23/articles/5772f7d81144bd

ボタンタップによるAPIコールを実装している際に、
ユーザーがボタンを連打してAPIが何度も呼ばれることを防止する方法について、
筆者のおすすめの方法を紹介している記事です。

少ないコードの記述量で実装できる方法が紹介されています。

### 個人制作で登山用GPSアプリを作った話

https://zenn.dev/ryooo/articles/358a5ecf9219a6

個人制作で、圏外でも見ることのできる登山用GPSアプリを作成した体験談についての記事です。

Flutterの採用理由や、地図アプリの作成にあたり苦戦した点、
アプリとしての工夫した点などが詳細に記載されています。

### 【Flutter】個人開発アプリを作成したら「大分県警察」と協力関係を締結するまでになった話をしよう。

https://qiita.com/YuKiO-OO/items/3f714b450606a01bdb6b

個人開発アプリに関する経験談と、今後制作する人に向けた注意喚起を行っている記事です。

個人開発アプリの開発で、なぜ警察と協力関係を締結することになったかの経緯と、
この経験を踏まえて、今後個人開発でアプリを制作する人に向けて、
気をつけるべきポイントの紹介がなされています。

## Flutter大学メンバーによる記事

今週Flutter大学メンバーが書いた記事は以下になります！

[Flutter×CloudFunctions超入門　セットアップ&基本動作編](https://zenn.dev/flutteruniv_dev/articles/e37d753c2798bd)
[Flutter×CloudFunctions超入門　Push通知(FCM)編](https://zenn.dev/flutteruniv_dev/articles/42c52fb2a2be04)
[Flutter×Lottie Flutterアプリをワンランクおしゃれにしよう！](https://zenn.dev/flutteruniv_dev/articles/1d851be3e94fe4)

## まとめ

本記事ではFlutterニュースとして、
2023年9月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2023/9/18）

先日、Flutter公式のポストで、このようなものがありました。

https://twitter.com/FlutterDev/status/1700152687826792503

「初めてのアプリ制作をしている人に向けて、Flutter開発者の皆さんはどんなアドバイスをしますか？」とのことです。

このツイートに対し、世界中から160件以上のリプライが寄せられています。

もしあなたがアプリ制作の最中なら、息抜きに読んでみるのも良いかもしれません。

このアドバイスの中で自分が実践したものとして、
[Widget of the Week](https://www.youtube.com/playlist?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG) (Flutter 公式YouTubeチャンネルで配信されている、FlutterのWidgetを紹介する動画シリーズ)を見る、というのがあります。

Flutterでどんなことができるのかわかったり、
アプリのアイデアが見つかったりするので、自分としてもとてもオススメです。

ぜひ参考にしてみてください！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学X(旧Twitter)](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。