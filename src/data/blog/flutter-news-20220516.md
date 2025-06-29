---
title: "Flutter ニュース 【2022年5月第2週】"
slug: "flutter-news-20220516"
author: "Aoi"
description: ""
pubDatetime: "2022-05-16"
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

本記事ではFlutterニュースとして、2022年5月第2週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Google I/O 開催、Flutter最新情報発表

https://youtu.be/w_ezWG1yKQQ

Google の最新情報や技術情報の講演会、
Google I/O が日本時間5/12,13に開催されました。

GoogleのプロダクトであるFlutterについても、
Flutter 3 を始め、数々の最新情報が発表されました。

上記基調講演のまとめ記事を週刊Flutter大学にてアップしていますので、
併せてご確認ください。

https://blog.flutteruniv.com/news-google-i-o-2022-flutter/

### Flutter 3 (Dart 2.17) アップデート

https://twitter.com/FlutterDev/status/1524477980835258371

Flutter のstable 最新、そしてメジャーアップデートとしてFlutter 3 が公開されました。

mac OS 、Linux に対するサポートがstableとなり、
ついにモバイル（iOS,Android）、Web、 デスクトップ(windows, mac OS, Linux)、
すべてのサポートがStableとなりました。

Flutter 3 ならびにDart 2.17の変化点について、
Flutter大学では動画、記事にしています。
以下、併せてご確認ください

https://youtu.be/uituBAhOGWU

https://blog.flutteruniv.com/flutter-3-release-note/

https://blog.flutteruniv.com/dart-2-17-summary/

## Flutterに関する話題

### I/O ピンボールゲーム

https://www.reddit.com/r/FlutterDev/comments/umscjv/io_pinball_built_with_flutter_and_flame/

Google I/Oに向けてFlutterで作られたピンボールゲームがRedditで話題となっていました。

ゲームだけでなく、紹介記事、ソースコードも公開されています。
ゲームエンジンであるFlame やFirebaseを用いて作られたとのことです。

### Flutter Sidekick 1.0 のリリース

https://www.reddit.com/r/FlutterDev/comments/unv8po/flutter_sidekick_10_is_out/

Flutter のプロジェクト管理ツール、Flutter Sidekick のver 1.0がリリースされました。

管理しているFVMのバージョンをSidekick上で確認できたり、
利用しているIDEで直接プロジェクトを開けたりできます。

## Flutterに関する記事

### GoogleI/O 2022で発表されたFirebaseの新機能をまとめてみた。

https://qiita.com/mogmet/items/b8231af4af84577056a8

Google I/O で発表されたFirebase の新機能についてまとめて紹介されている記事です。

Flutterに関する情報も記載されており、
Firebaseを使用する方は目を通しておくと良いです。

### ゲーム開発ツールとしてのFlutterのアーリーアダプターからの展望

https://medium.com/flutter/perspectives-from-early-adopters-of-flutter-as-a-game-development-tool-f95fb3406d51

Googleの方の目線から、
Flutter x Gameの市場を調査した結果についてまとめられた記事です。

Flutter のCasual Game Kit が発表され、
Flutter x Gameの市場もどんどん増えてきそうです。

### 70以上のソースコード付きFlutter プロジェクト

https://www.theinsaneapp.com/2021/06/flutter-projects-with-source-code.html

ソースコードが公表されているFlutterプロジェクトを
70個以上集めて紹介している記事です。

FlutterのQuick Guide や Summaryもついているので、
読んでみて興味のあるものをピックアップするのが良いかと思います。

### **盛り上がれFlutter3**

https://zenn.dev/reinf0rce/articles/88f3cf377de9ac

Flutter 3、Dart 2.17の情報についてまとめて紹介している記事です。

端的に、ポイントに絞って紹介されています。

### **Flutter 3.0のリリース解説！**

https://zenn.dev/umi_mori/articles/5e49f437387a0c

Flutter 3周りの情報についてまとめて紹介している記事です。

Firebase の情報やFlutter 3へのアップグレードの仕方まで紹介されています。

## Flutterに関する動画

### Flutterでのカスタムエラーメッセージ

https://youtu.be/UWXC0DHIIfQ

Flutter でUI上で表示するエラーメッセージをカスタマイズする方法について紹介された記事です。

SnackBarをカスタマイズし、カードでエラーメッセージが出てきたかのように見せることができます。

## Flutter大学メンバーによる記事

### **Flutter で ObjectBox つかってみた**

https://zenn.dev/pressedkonbu/articles/flutter-object-box

Flutter でローカルデータベースを扱うパッケージである、
ObjectBoxについての使用方法についてまとめられた記事です。

hiveとの比較やサンプルコード、
ObjectBox 使用時のYouTubeでのライブ配信のアーカイブ動画のリンク等が記載されています。

### **【Flutter開発Tips】自動生成ファイルの diff をプルリクに表示しないようにする**

https://zenn.dev/mamushi/articles/hide_generated_file_diff

Flutter で自動生成されるファイルの変化点を、
GitHubのプルリクエストに表示させないようにする方法について記載された記事です。

この記事の方法を使えば、freezed等でファイルの自動生成を使用している際に、
レビュワーがレビューしやすいプルリクを作成できるようになります。

### **カメラ機能の実装(imagepicker)**

https://zenn.dev/takaku1222/articles/ac50e1049be742

imagepicker パッケージを使ったカメラ機能の実装方法についてまとめられた記事です。

実装手順からサンプルコード、
実際に動かして見た際のスクリーンショットまで丁寧に解説されています。

### **riverpodを使ってFireStoreの値を取得する**

https://zenn.dev/joo_hashi/articles/69b7dcbb24483c

riverpodとFirestoreを組み合わせてアプリにデータを表示する
サンプルコードを紹介した記事です。

サンプルコードのコメントにて、実装内容が説明されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220509/

https://blog.flutteruniv.com/news-google-i-o-2022-flutter/

https://blog.flutteruniv.com/flutter-3-release-note/

https://blog.flutteruniv.com/dart-2-17-summary/

## まとめ


本記事ではFlutterニュースとして、
2022年5月第2週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/５/16）

今週のFlutterニュースに関する記事でした。

記事内でも紹介した、Flutter Sidekickが使用してみて結構体験が良かったので、
こちらについて編集後記で述べようと思います。

Flutter SidekickはFlutterプロジェクトをUI上で管理できるアプリケーションになります。

以下の画像のようにFlutteプロジェクトをパネルにて管理できます。

![](/images/wp-content/uploads/2022/05/スクリーンショット-2022-05-15-9.31.04-1024x645.webp)

注目すべきは使用しているFlutterのバージョンが表示されること、
IDEマークからIDEにてプロジェクトを直接開けることの2点です。

複数のプロジェクトを管理していると、特に、FVMを使っている際、
使っているFlutterのバージョンがわからなくなることがあるかと思います。
SidekickはFVMと連携しているため、
パネル上でどのバージョンを使っているのか読み取ることができます。

また、IDEをワンクリックで開けるのは地味に便利です。
いちいちIDEを開いて、開くプロジェクトを選択して、という手間がなくなります。

Sidekickは日々行っている作業を、
ちょっと便利にするアプリケーションというのが使ってみた感想です。

興味のある方はぜひ、以下のリンクからダウンロードして使ってみてください。

https://github.com/fluttertools/sidekick/releases/tag/1.0.0

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
