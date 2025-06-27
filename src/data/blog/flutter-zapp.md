---
title: "Zapp! パブリックベータリリース！【Flutter】"
slug: "flutter-zapp"
author: "Aoi"
description: ""
pubDatetime: "2022-08-27"
tags: ["開発ツール"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="http://34.145.4.125/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Zapp! ? どんなサービスなんだろう?
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="http://34.145.4.125/wp-content/themes/cocoon-master/images/obasan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutterをとりあえず触ってみたいわ！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

本記事ではそんな疑問、要望にお答えします。

Invertase によってパブリックベータとして先日リリースされた、
ブラウザ上でのFlutter 環境、 Zapp! について紹介します。

簡単に言うとブラウザ上で使えるVS code ベースのFlutter 環境です。
似たような環境としてDartPadがありますが、

- 複数のファイルでのアプリ構築が可能な点
- 多様なパッケージの利用が可能な点
- 作成したコードの共有が容易な点

でDartPad と異なります。

本記事ではZapp!の特徴を一つ一つ紹介していきます。

ぜひ読んで、Zapp!を触ってみてください！

## Zapp! とは

Zapp! とは、Invertase によってパブリックベータとして先日リリースされた、
ブラウザ上でFlutterアプリケーションを扱うことのできる環境のことです。

https://zapp.run/

上記ページのGet Startedから使用を開始することができます。

2022年8月27日現在パブリックベータ(公開テスト中)のサービスとなります。

### 見た目

UIは以下の画像のようになっています。

![](http://34.145.4.125/wp-content/uploads/2022/08/スクリーンショット-2022-08-27-13.49.03-1024x563.png)

UIは VS Code のような見た目をしています。
画面右側に実行中のアプリが表示されるようになっています。

画面左下の☀︎のアイコンをクリックすることにより、テーマの切り替えが可能です。

![](http://34.145.4.125/wp-content/uploads/2022/08/スクリーンショット-2022-08-27-13.52.51-1024x561.png)

## 特徴

Zapp! の特徴を3点紹介します。

### 複数のファイルでのアプリ構築が可能

Zapp! の特徴1つ目は、複数のファイルでのアプリ構築が可能な点です。

DartPad では一つのファイルに全てのコードを記述しなければいけませんでした。
そのため、例えば`main`関数と構成する`Widget`を別ファイルに分ける、ということができず、
複雑なアプリを作成しようとするとコードが長くなってしまっていました。

Zapp!はこの問題を解決します。
Zapp! はアプリのコードのファイル分け、フォルダ分割が可能となっています。
そのため一つ一つのコードを短く記述することが可能です。

![](http://34.145.4.125/wp-content/uploads/2022/08/スクリーンショット-2022-08-27-14.00.58-1024x661.png)

### 多様なパッケージの利用が可能

Zapp! の特徴2つ目は、多様なパッケージの利用が可能な点です。

DartPad では組み込まれた特定のパッケージしか利用可能でなく、
[Pub.dev](https://pub.dev/) のほとんどのパッケージは使用することができませんでした。

Zapp!は違います。
Zapp!で作られるFlutter Projectにはpubspec.yaml ファイルが含まれており、
このファイルでパッケージを設定し、
flutter pub get することで、
[Pub.dev](https://pub.dev/)のパッケージをインストールすることが可能です。

![](http://34.145.4.125/wp-content/uploads/2022/08/スクリーンショット-2022-08-27-14.25.34-1024x558.png)

### 作成したコードの共有が容易

Zapp! の特徴3つ目は、作成したコードの共有が容易な点です。

DartPad で書いたコードを共有するには、
一度 gist に書いたコードをアップロードし、
DartPadのURL を編集する必要があり、少し手間でした。

Zapp!では、画面右上のShareボタンを押し、
Copy project link をクリックすることでコピーされるURLで共有することが可能です。

https://zapp.run/edit/flutter-z4006zw5106?entry=lib/main.dart&file=lib/main.dart

## まとめ

本記事では、Invertase によってパブリックベータとして先日リリースされた、
ブラウザ上でのFlutter 環境、 Zapp! について紹介しました。

いかがだったでしょうか？

パブリックベータのため、まだまだバグ等が見受けられますが、
現状でもちょっとしたコードの共有ツールとしてはかなり良いものかと思います。

ぜひ使ってみて開発に役立ててみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/8/27）

Zapp! についての記事でした。

個人的にはZapp! のコード共有の容易さにかなり目をつけています。
記事内でも書きましたが、DartPadでのコード共有は中々手間だったんですよね。

Flutter 大学内やTwitterでのコード共有がとても気楽にできるので、
とても良いなと思っています。

あと、OGP画像で作成したアプリの画像が表示されるのが、
個人的に凄いな、と思いました。

今後に期待なサービスなので、積極的に使って、
フィードバックを送っていきたいと思います。

あなたもぜひぜひ使ってみてください！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。