---
title: "Flutter ニュース 【2022年5月第4週】"
slug: "flutter-news-20220606"
author: "Aoi"
description: ""
pubDatetime: "2022-05-30"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/man.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutterの最新情報をキャッチアップしたい！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年5月第4週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Package of the Week shared_prefernces

https://youtu.be/sa_U0jffQII

Flutter公式のパッケージを紹介する動画シリーズ、Package of the Week が更新されました。

今回はローカルでデータを保存する、shared_preferncesについての動画となります。

### DartPad ワークショップの紹介

今週公式Twitterにて様々なDartPadでのワークショップが紹介されていました。

#### モバイルからWeb,Desktopへの移行

https://dartpad.dev/workshops.html?webserver=https://mobile2web-workshop.web.app

モバイルからWeb,Desktopアプリへの移行するにあたっての、
マウスホバー時のアクションやキーボード入力に関する設定等を学べるワークショップです。

#### LazyIndexedStack の実装

https://dartpad.dev/workshops.html?webserver=https://raw.githubusercontent.com/AlexV525/dartpad_workshops/main/implement_lazy_indexed_stack

`IndexedStack` `Widget`にて遅延読み込みを実現した、
`LazyIndexedStack` `Widget`の実装方法について学べるワークショップです。

#### Flutter Themeでの一貫したデザイン

https://dartpad.dev/workshops.html?webserver=https://raw.githubusercontent.com/foxanna/flutter_theme_workshop/main/workshop#Step1

`Theme`や`ThemeData`を用いて、
ボタンやテキスト等に一貫したデザインを実装する方法を学べるワークショップです。

#### Extension メソッド

https://dartpad.dev/workshops.html?webserver=https://extension-method-workshop.web.app

既存のクラスに新しい機能を加える、
`Extension` メソッドの使い方について学ぶことができるワークショップです。

## Flutterに関する話題

### 仮想マシンでの比較によるM1 マシンでのFlutterビルドの速さについて

https://www.reddit.com/r/FlutterDev/comments/uxbp8p/flutter_builds_are_way_faster_with_m1_machines_a/

CodeMagic でのCI/CD でFlutterアプリをビルドする際に、
M1 Mac の端末を選択すると、Mac Pro を選択するより50%速い、
という検証結果についての投稿、記事です。

投稿内のリンクから飛べる記事には比較のグラフが記載されています。

### flutter_floating プラグイン

https://github.com/jiusanzhou/flutter_floatwing

Android 端末で他のアプリやホーム画面でオーバーレイで
Flutterアプリの画面を表示させるプラグインがRedditで話題になっていました。

Readmeに使用感のGifが記載されています。

###  Hacki for Hacker News

https://github.com/Livinglist/Hacki

[Hacker News](https://news.ycombinator.com/)をスマホアプリで見れるようにした
アプリケーションのソースコードが公開されていました。

状態管理手法としてBloCを用いて作成されているとのことです。

## Flutterに関する記事

### **FlutterFlowのススメ**

https://zenn.dev/sugawara/articles/02e2f119a363fb

FlutterのローコードツールであるFlutterFlowについて紹介された記事です。

無料版と有料版の違いなど、実務で使用している目線から詳しく解説がされています。

### Dart Frog で サーバー側をDartで書こう

https://verygood.ventures/blog/dart-frog

VERY GOOD VENTURESによるDart でのバックエンドフレームワーク、
Dart Frog についての記事です。

まだ試験段階のようですが、Dartでバックエンドサーバーの処理を書くことができます。
セットアップの仕方からテストの仕方まで記載されています。

### Dart での高階関数と再帰

https://medium.com/flutter-community/higher-order-functions-recursion-in-dart-functional-programming-part-5-4237bc114005

Dartでの再帰関数や高階関数に関する記事です。

Mapやreduceなどの高階関数が例を用いて紹介されています。

再帰関数については週刊Flutter大学にて記事を出しています。
併せてご確認ください。

https://blog.flutteruniv.com/dart-recursive-function/

### FVM - Flutter バージョン管理の楽な方法

https://dhruvnakum.xyz/fvm-flutter-version-management-an-easier-way-to-maintain-flutter-versions

FVM (Flutter バージョン管理)について書かれた記事です。

インストール方法から使い方まで記載されています。

## Flutterに関する動画

### Flutter What's next? Project Structure

https://youtu.be/80-ZIcxnITI

Flutterのプロジェクトの構造について解説している動画です。

前半ではProvider,後半ではGetXを用いたプロジェクトの構造について紹介されています。

### Flutter Game Tutorials - Generating Terrain (2022)

https://youtu.be/FwtOUqXZazw

ゲーム作成チュートリアルとして、地形の作り方について解説されている動画です。

再帰関数を用いた、池のオブジェクトの作成方法が解説されています。

### First look at shader command-line tool for Flutter

https://youtu.be/Yq3B4lpJSKg

shader パッケージ、並びに shader_cli パッケージの利用方法について解説された動画です。

コマンドラインツールを用いてシェーダーのコードを即座に反映させる方法が
解説されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220523/

https://blog.flutteruniv.com/flutter-dart-final-const/

https://blog.flutteruniv.com/dart-recursive-function/

https://blog.flutteruniv.com/flutter-riverpod/

## まとめ

![](/images/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、
2022年5月第4週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/5/30）

ありがたいことに、自分の仕事は家で完結しています。

そのため、月に3~4回ほどしか家から出ない生活を送っています。

これは良いことだと思っているのですが、ちょっと困ったというか、
辛かった出来事があったので紹介します。

先日、某夢の国に遊びに行ったときのことです。

最近は入場者数の制限もゆるくなっているからか、
体感とても多い人数の来場者数でした。
人数が多くなると長くなるのがアトラクションの待ち時間です。

夢の国の滞在時間の半分くらいがアトラクションの待ち時間で、
ちょっと進んでは止まる、座ることができない時間を過ごしました。

こうした時に悲鳴をあげるのが普段座り仕事しかしていない自分の足です。
滞在中から痛くて仕方がなく、帰宅時には泣きそうになりながら帰っていました。

テレワークに喜ぶばかりでなく、
なにかしらで足腰を鍛えることは必要だなと、改めて感じました。

少しずつ鍛えていくようにします。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。