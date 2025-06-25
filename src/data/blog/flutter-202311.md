---
title: "Flutter ニュース 【2023年1月第1週】"
description: ""
pubDatetime: 2023-01-02T10:00:00.000Z
categories: ["news"]
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、  
2022年12月第5週〜2023年1月第1週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Deep linking in Flutter

https://youtu.be/KNAb2XL7k2g

URL をクリックするとアプリの特定の画面にアクセスできるようにする、  
Deep Linking の紹介、実装方法についての解説を行った動画です。

Deep Linking の実装メリットの紹介や、  
Android 向けの[go\_router](https://pub.dev/packages/go_router)を利用した実装方法が解説されています。

### Firebase Remote Config (今週のパッケージ)

https://youtu.be/34ExOdNEMXI

Flutter 公式による パッケージ紹介動画シリーズ、Package of the Week の  
最新動画がアップロードされました。

Firebase のコンソールから、  
既にユーザーが使用中のアプリの設定値を変更できるようにするパッケージ、  
[Firebase Remote Config](https://pub.dev/packages/firebase_remote_config)パッケージの紹介動画となります。

## Flutterに関する話題

### flutter\_acrylic

https://pub.dev/packages/flutter\_acrylic

デスクトップアプリでのアクリル板のような見た目のWindowを実装できるパッケージ、  
flutter\_acrylic についての投稿がRedditで話題となっていました。

上のリンクのpub.devページにて使用感のGIFを見ることができます。

## Flutterに関する記事

### 【個人開発】OpenAIの文章生成モデルを使ったアプリを24時間で作ってリリースしました

https://qiita.com/imajoriri/items/5ef954b912c3db54d1d0

OpenAI のAPI を使ったアプリを作成しリリースした、  
との体験談と技術について書かれた記事です。

API利用の方法を中心に紹介がなされています。

### **SizedBox で理解する Flutter のレイアウト計算**

https://zenn.dev/chooyan/articles/7bfc11b55363a4

`SizedBox`を例に、Flutterのレイアウトがどのように行われるのかについて解説された記事です。

例題に対して`BoxConstraints`の値がどのように計算されるのか、  
詳細に解説がなされています。

### BloC ルールの破壊

https://www.christianfindlay.com/blog/flutter-breaking-bloc-rules

Flutter の状態管理手法の１つであるBloCパターンの書き方について、  
時にはルールに則らない方がよい、と紹介している記事です。

則らない方が良い場合を複数紹介されています。

### Flutterを使ってChrome 拡張を作成する方法

https://narayann.hashnode.dev/chrome-extension-using-flutter

Flutterを利用してGoogle Chrome の拡張機能を作成する方法について紹介された記事です。

`index.html`の設定方法等が紹介されています。

## Flutterに関する動画

### How to Build A Chrome Extension with Flutter

https://youtu.be/7nHzIIqT1DQ

Google Chrome の拡張機能をFlutterで作る方法について紹介された動画が、  
Redditで話題となっていました。

QRコード生成の拡張機能の作成方法が紹介されています。

## Flutter大学メンバーがリリースしたアプリ

### 順くん 〜順番待ちアプリ〜

https://apps.apple.com/jp/app/junkun/id1644442130

https://play.google.com/store/apps/details?id=junkun.junbanmachi.junkun

hironariさんにより、  
順番待ちアプリ『順くん』がリリースされました！

飲食店やクリニック等の順番待ちの管理を手助けするアプリとのことです。

プッシュ通知によるお客様の呼び出し機能など、  
便利な機能が搭載されているそうです！

### Memollage ~ コラージュ画像作成アプリ ~

https://play.google.com/store/apps/details?id=com.pressedkonbu.collage&pli=1

https://apps.apple.com/app/%E7%B0%A1%E5%8D%98%E3%82%B3%E3%83%A9%E3%83%BC%E3%82%B8%E3\[…\]9C%E6%88%90%E3%82%A2%E3%83%97%E3%83%AA-memollage/id1661418765

こんぶさんにより、  
コラージュ画像作成アプリ、『Memollage』がリリースされました！

40枚くらいの画像を一枚にまとめたコラージュ画像を、  
簡単に作成することができるアプリとなっています。

2022年の写真をまとめるのにとても良いアプリかと思います！

### Exchange Diary ~ 交換日記アプリ ~

https://apps.apple.com/jp/app/exchange-diary/id6444697825

Ryoさんにより、  
交換日記アプリ、『Exchange Diary』がリリースされました！

知り合いとだけでなく、どこかの誰かとも交換日記をすることのできるアプリとなっています。

カレンダーのUI等がシンプルながら洗練されていて、  
使いやすい交換日記アプリです！

## Flutter大学メンバーによる記事

### **GitHub Actions で Automatically manage signing を使って ipa をビルドする**

https://zenn.dev/yorifuji/articles/build-automatically-manage-singin-on-ci

iOS 向けのCDを、Automatically manage signing を  
利用して行う方法について紹介された記事です。

Automatically manage signingを利用するに当たってのメリットや、  
GitHub Actions を利用した方法、ワークフローが紹介されています。  

### **入力した文字が逆向きになる?**

https://zenn.dev/joo\_hashi/articles/ce7f00d783e601

アプリ制作をしていて遭遇したエラーについての紹介と、  
解決方法の紹介を行った記事です。

`TextField`の`controller`の使用上の注意が紹介されています。

### **StreamProviderでログインを維持する**

https://zenn.dev/joo\_hashi/articles/41cd105bc02bd9

Riverpod の`StreamProvider`を利用した認証画面の実装方法について書かれた記事です。

サンプルコードを中心に紹介がなされています。

### **Firebaseのテストコード書いてみる**

https://zenn.dev/joo\_hashi/articles/98181d2910a203

Cloud Firestore を利用したテストのコードを紹介している記事です。

テストコードの例が複数紹介されています。

### **Firebaseに画像をuploadしたい**

https://zenn.dev/joo\_hashi/articles/fe02137dec4d51

Firebase Strage と Cloud Firestore を利用した画像のアップロード方法を紹介した記事です。

Firestore の事前準備方法等から紹介がなされています。

### **OBJECTBOXを使ってみた**

https://zenn.dev/joo\_hashi/articles/5d00ef980ac5ce

ローカルデータベースであるObjectBoxの利用方法について書かれた記事です。

データの保存機能、削除機能を持ったサンプルアプリが紹介されています。

### **初めて Flutter の自作パッケージを pub.dev に公開してみた話**

https://zenn.dev/ryota\_iwamoto/articles/first\_post\_pub\_dev

Flutterパッケージを作成し公開したその体験について書かれた記事です。

パッケージの内容や公開してよかったこと等が記載されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221226/

https://blog.flutteruniv.com/dart-list-if/

https://blog.flutteruniv.com/package-flutter\_animate/

https://blog.flutteruniv.com/flutter-understanding-constraints/

https://blog.flutteruniv.com/flutter-university-summary-2022/

## まとめ

本記事ではFlutterニュースとして、  
2022年12月第5週〜2023年1月第1週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2023/1/2）

あけましておめでとうございます。

2023年が始まりましたね。

Flutter大学は、2023年開始から勢いよく活動していきます。

さまざまなイベントやキャンペーンを用意しておりますので、  
以下をご覧いただければと思います。

https://mobile.twitter.com/FlutterUniv/status/1609073331193655301

2023年もFlutter大学をよろしくお願いいたします。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。