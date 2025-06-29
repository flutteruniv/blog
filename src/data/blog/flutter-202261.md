---
title: "Flutter ニュース 【2022年6月第1週】"
slug: "flutter-news-20220606"
author: "Aoi"
description: ""
pubDatetime: "2022-06-06"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/man.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutterの最新情報をキャッチアップしたい！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年6月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Making generic widgets (The Boring Flutter Development Show, Ep. 58)

https://youtu.be/Ikg7vHJoZjA

Flutter公式の動画シリーズ、The Boring Flutter Development Showが更新されました。

今回はインスタンス生成時にデータ型を指定できるようにできる、
ジェネリクスについての解説となっています。

### CodeLab 映画推薦アプリの作成

https://codelabs.developers.google.com/tfrecommenders-flutter#0

Flutter 公式により、映画推薦アプリの作成に関するCodeLabが紹介されました。

TensorFlowを使った推薦システムを実装するアプリの作成のチュートリアルとなっています。

### Type Promotion | Decoding Flutter

https://youtu.be/2Cl0C-9dK48

コードの中で型をより限定的な型であると推定し使えるようにするDartの機能、
Type Promotion についての解説動画です。

例を用いてType Promotion について学ぶことができます。

### DartPad ワークショップの紹介

今週も公式Twitterにて様々なDartPadでのワークショップが紹介されていました。

#### 優雅にエラーをハンドリングしよう

https://dartpad.dev/workshops.html?webserver=https://handling-errors-gracefully.web.app

`try - catch`を始めとして、エラーのハンドリングの仕方について
様々なテクニックを学ぶことができるワークショップです。

#### blocを使った状態管理のセグメント化

https://dartpad.dev/workshops.html?webserver=https://dartpad-ws-segmented-state.web.app

BloCを使用して、状態を`Data`,`Error`,`Loading`の3状態に分けて管理する方法について、
学ぶことができるワークショップです。

#### 数学者としてコードを書こう

https://dartpad.dev/workshops.html?webserver=https://raw.githubusercontent.com/olexale/mathematician_workshop/main/#Step1

ロジックを考えることが得意な数学者のように、
普段書いているコードを様々なテクニックを使ってリファクタリングしていく
方法について学部ことができるワークショップです。

#### アニメーションの実装

https://dartpad.dev/workshops.html?webserver=https://raw.githubusercontent.com/pszklarska/flutter_animations_workshop/master/

様々なアニメーションの方法について学ぶことのできるワークショップです。

#### Flutter Web アプリのポートフォリオ

https://dartpad.dev/workshops.html?webserver=https://dartworkshop-291fb.web.app

Flutter Web でのアプリケーションの作成方法について学ぶことができるワークショップです。

## Flutterに関する話題

### Frosty

https://www.frostyapp.io/

Flutter で作られたTwitch のモバイルアプリ、
FrostyがRedditで話題になっていました。

GitHub上でソースコードが公開されています。
Providerを用いて作成されているようでした。

### Flutter Puzzle : multi platform 部門 第2位

https://www.reddit.com/r/FlutterDev/comments/v4osgs/flutter_puzzle_runner_up_in_category_multi/

Flutter Puzzle Hack のMultiPlatform部門で2位を取得したアプリ紹介の投稿です。

MultiPlatform部門で2位を取得しているだけあって、
Webだけでなくデスクトップアプリやモバイルにも対応しているとのことでした。

### pod_player プラグイン

https://pub.dev/packages/pod_player

Youtube動画やVimeo動画をFlutterアプリ上で再生できるようにするプラグイン、
pod_playerプラグインがReddit上で話題になっていました。

再生だけでなく、再生速度の変更等が行えるとのことです。

### Neat パッケージ

https://pub.dev/packages/neat

Flutterのコードを短く書けるようにするパッケージ、
NeatがRedditで話題となっていました。

Text Widgetなどのコードをcontext.~の形で簡潔に書くことができます。

## Flutterに関する記事

### **Flutter はモバイル開発のオートマになるか？【Flutter】**

https://zenn.dev/yuuki0206/articles/9de7dc295380e7

Flutterに関する紹介記事です。

Flutterの扱いやすさを車の機構のAT(オートマ)に例えて表現されています。

### **FlutterアプリのPresentation層構成方針**

https://zenn.dev/altive/articles/flutter-presentation-directory

ユーザーが扱う画面部分のフォルダ構成について検討、紹介している記事です。

この記事内で紹介されているDiscussionにて、
紹介のフォルダ構成に至った経緯等を知ることができます。

### Flutter アプリでのダイナミックテーマ

https://itnext.io/dynamically-theme-your-flutter-app-59da5037f5df

Android 12 から実装されたMaterial You の機能である、
[User-generated schemes (UGS)](https://m3.material.io/m3/pages/dynamic-color/user-generated-color)、
こちらをFlutterにて実装する方法について解説した記事が
Redditで話題となっていました。

ユーザーの壁紙からテーマの基盤となるカラーを取得し、
これをアプリに反映させることができるようになります。

こちらについては週刊Flutter大学でも記事にしています。
併せてご確認ください。

https://blog.flutteruniv.com/flutter-dynamic-color/

## Flutterに関する動画

### Flutter 3で Linux のパッケージ検索アプリを作成する5分の動画

https://www.youtube.com/watch?v=QExuHkYFMQA

Ubntuのテーマ、yaruの見た目でアプリを構成する、という趣旨の動画です。

約5分の動画で検索機能をもったアプリの構成方法を学べます。

### Dart Frog Demo

https://www.youtube.com/watch?v=N7l0b09c6DA

バックエンドをDart で書けるようにする、Dart Frog についてのライブアーカイブ動画です。

Demoとして実装している様子が動画化されており、
チュートリアルとして有用です。

## Flutter 大学による動画

Flutter大学が先週出した動画をまとめて紹介します。

https://youtu.be/4b6DuHGcltI

https://youtu.be/Cpg3otpYG9w

## Flutter大学メンバーがリリースしたアプリ

### つみあげったー ~  その日やった積み上げを楽々ツイート！ ~

https://apps.apple.com/jp/app/%E3%81%A4%E3%81%BF%E3%81%82%E3%81%92%E3%81%A3%E3%81%9F%E3%83%BC/id1626830264

https://play.google.com/store/apps/details?id=com.zerokaraapp.tumiagetter

共同開発8、つみあげったーチームにより、
その日やった積み上げを楽々ツイートできるアプリ、『つみあげったー』がリリースされました。

積み上げ内容を登録し、
チェックボックスにチェックを入れてツイートボタンを押すだけで、
ツイート文が自動生成されるアプリとなっています。

現在機能改善のアップデートに向けて鋭意開発中とのことです。
楽しみですね！

## Flutter大学メンバーによる記事

### **driftを使ってToDoアプリを作ってみる**

https://zenn.dev/asano369/articles/7efdd3300aa735

Flutterで内部データベースを扱えるようにするdriftを使って、
ToDoアプリを作成する方法について解説された記事です。

サンプルコードを含め詳細に作成内容が解説されています。

### **FlutterでAndroidのbuildエラーが出た!**

https://zenn.dev/joo_hashi/articles/d24a196cc5b958

Flutter × Firebase で発生したAndroid 周りのエラーについて対処法を解説されている記事です。

コードの例を用いて、対処法について、しっかりと解説されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220530/

https://blog.flutteruniv.com/flutter-dynamic-color/

https://blog.flutteruniv.com/flutteruniversity-study-meeting-202205/

## まとめ


本記事ではFlutterニュースとして、
2022年6月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/6/6）

Flutter大学メンバーがリリースしたアプリとして、
『つみあげったー』を紹介しました。

こちらのアプリには自分も関わっていて、
ほぼ予定通りにリリースができてホッとしているところです。

こちらのアプリの開発プロジェクトは、
アプリ開発初心者が少しでもステップアップできるように、
と考えて企画したプロジェクトになっています。

まずはコードを書いて、それを実現する、ということを実感してもらう、
という点でリリースはメンバーの良い経験になったのではないかと思います。

自分としても、コードを書かずにプロジェクトの進捗を管理し、
人に実装を任せてアプリをリリースするという、
プロジェクトマネジメントの経験をすることができたので、
とても体験としてよかったです。

このプロジェクトは次のアップデートによる実践まで行って完了となります。
最終的なアプリについては6月末に開かれる、共同開発最終発表会にて、紹介する予定です。

告知は再度週刊Flutter大学にて行いますので、
最終発表会、ぜひ見に来てください！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
