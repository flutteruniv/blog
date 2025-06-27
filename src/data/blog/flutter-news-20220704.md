---
title: "Flutter ニュース 【2022年7月第1週】"
slug: "flutter-news-20220704"
author: "Aoi"
description: ""
pubDatetime: "2022-07-04"
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

本記事ではFlutterニュースとして、2022年6月第5週〜7月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter ３.0.4 リリース！

https://twitter.com/FlutterReleases/status/1542868150752104449

Flutter のstable チャンネルで3.0.4がリリースされました。

[こちら](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel)によると、以下の内容が修正されたとのことです。

- [iOSでのポインタ圧縮によって生じるOut of Memory エラーの修正](https://github.com/flutter/flutter/issues/105183)
- [システム上の低いメモリ使用率のイベントで生じるアプリのクラッシュの修正](https://github.com/flutter/flutter/issues/103870)
- [ImageFilterd/ColorFilterdでアニメーション時に生じる画面描画不具合の修正](https://github.com/flutter/flutter/issues/105674)

### InheritedWidget | Decoding Flutter

https://youtu.be/og-vJqLzg2c

Flutterを深堀りする動画シリーズ、Decoding Flutterが更新されました。

今回はMediaQuetyなどで使われる、
祖先のWIdgetとのデータのやり取りで重要な`Widget`、
`Inherited Widget`についての動画となっています。。

## Flutterに関する話題

### Flutterで作られたWEBアプリのリスト

https://www.reddit.com/r/FlutterDev/comments/voxj4x/list_of_web_apps_built_with_flutter/

Flutterで作られたWEBアプリをリスト化したい、とういう投稿がRedditで話題となっていました。

投稿を見た人がFlutterで作られたWEBアプリをコメントにて多数寄せています。

## Flutterに関する記事

### **【Flutter】 Riverpod 入門**

https://zenn.dev/naoya_maeda/articles/a8bbf40a202c74

Flutter の状態管理手法であるRiverpodについての入門記事です。

Riverpodの使い方についてサンプルコード付きで網羅的に紹介されています。

### Flutter チュートリアル : チャットアプリを構築しよう

https://supabase.com/blog/2022/06/30/flutter-tutorial-building-a-chat-app?utm_source=reddit&utm_medium=sc&utm_campaign=blog-content

Flutterでチャットアプリを構築するチュートリアルの記事です。

Firebaseの代替手段として作成されているバックエンドサービスのSupabaseを利用し、
チャットアプリを構築する方法について書かれています。

### Very Good CLI と SupabaseでFlutterアプリを構築しよう

https://verygood.ventures/blog/flutter-app-very-good-cli-supabase

Very Good CLI というコマンドラインからコードを生成するツールと、
Firebaseの代替手段として作成されているバックエンドサービスのSupabaseを
組み合わせて、Flutterアプリを作る方法について解説された記事です。

Very Good CLI でSupabase に沿ったコードをコマンドから自動生成できる、
という内容が記事内で紹介されています。

### Flutter 状態管理ライブラリを100行のコードで書こう

https://medium.com/@terryl1900/create-a-flutter-state-management-library-with-100-lines-of-code-e80bd865f4bd

Riverpod や Provider のような状態管理のコードを
100行以内で自作してみよう、という記事です。

カウンターアプリをベースに基本的な考え方から丁寧に解説されています。

## Flutterに関する動画

### Flutterでのスネークゲーム作成チュートリアル : Firebaseを使ったハイスコア表示とホスティング

https://youtu.be/9jvJyLhJP00

Flutterでのスネークゲームの作成のチュートリアル動画です。

スネークゲームの作成方法だけでなく、Firebaseと連携させ、ハイスコアの記録、表示方法や、
WEBアプリとしてデプロイする方法についてまで解説されています。

## **Flutter大学メンバーがリリースしたアプリ**

### **Favpic ～あなたの”好き”をコレクションしよう！～**

https://apps.apple.com/jp/app/favpic/id1629378674

minnさんにより、自分の好きなものの画像をコレクションし共有するアプリ、『Favpic』
がリリースされました！

自分が撮った画像をアップロードして、自分だけのコレクションにしたり、
他のユーザーのコレクションに対してコメントしたりすることができるアプリとなっています。

デザインもとても良く、他のユーザーの投稿を見ていてとても楽しいアプリでした！

## Flutter大学メンバーによる記事

### **Dartのenumとextensionを使って何か作る!**

https://zenn.dev/joo_hashi/articles/5e2cf8b6605592

enum のExtension を利用し、Widget を作成する方法についてのサンプル記事です。

RowのChildrenの中でのfor ループの処理など、
テクニックを使って書かれたコードが紹介されています。

### **FlutterでDart-defineについて学んでみた**

https://zenn.dev/joo_hashi/articles/767c0e3ab03349

Dart-defineでの環境分けについて実際にやってみた体験談についてまとまられた記事です。

実際に作業する中での詰まったポイント等が紹介されています。

### **【Flutter】何も表示させたくない時はContainerよりSizedBoxよりnilを使うと良い**

https://zenn.dev/wakanao/articles/078809dce5fa74

Flutterで何も表示させたくない際に使うWidget を提供するパッケージ、
nil パッケージの紹介記事です。

具体的な使い方から、使用時の注意点まで記載されています。

### **【Flutter】ウィジェットの間にスペースを作りたい時にSizedBoxではなくGapを使うと良い**

https://zenn.dev/wakanao/articles/702e37e880c9e6

FlutterでColumn や Row で並べたWidgetの間の
スペースを確保するのに有用なWidgetを提供するパッケージ、
Gap パッケージの紹介記事です。

端的にGap Widgetの使い方を紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220627/

https://blog.flutteruniv.com/flutteruniversity-jointdevelopment-8/

https://blog.flutteruniv.com/package-flutter_neumorphic/

## まとめ

![](/images/wp-content/uploads/2022/03/新聞-1024x683.webp)

本記事ではFlutterニュースとして、
2022年6月第5週〜7月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/7/4）

今週のFlutterニュースの記事でした。

今週自分が気になった内容はなんと言ってもFlutter 3.0.4 のリリースですね。
先々週に3.0.3がリリースされたばかりだというのに、
たった一週間で3.0.4がリリースされるのは、
修正の反映スピードが早く、とても良いです。

Flutterコミュニティの盛り上がりが見える、そんな出来事でした。

今後もバグや新機能がどんどんと追加されていくことでの、
Flutter のさらなる向上に期待ですね。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
