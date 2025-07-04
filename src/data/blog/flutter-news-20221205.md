---
title: "Flutter ニュース 【2022年12月第1週】"
slug: "flutter-news-20221205"
author: "Aoi"
description: ""
pubDatetime: "2022-12-05"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年11月第5週 ~ 12月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter での状態管理

https://youtu.be/vU9xDLdEZtU

あるウィジェットから別の場所にあるウィジェットの状態を参照する、といった、
Flutterでの状態管理についての動画です。

状態管理の手法としてRiverpod を題材に、
チェックボックスのチェックに応じてProgressIndicatorの値を増減する方法が紹介されています。

### Observable<Flutter>  Code Sharing & Postgres - Craig による ライブコーディング

https://youtu.be/WE-CYXE1xug

Observable<Flutter>として始まったFlutterに関するライブコーディングのアーカイブ動画です。

フルスタックなDart のアプリケーションで、クライアントとサーバーでコードを共有する方法と、
バックエンドのPostges データベースに接続する方法が紹介されています。

## Flutterに関する話題

### stateful_props パッケージ

https://pub.dev/packages/stateful_props

stateful_props というコード量削減、可読性の向上のためのパッケージが
Reddit で話題になっていました。

`StatefulWidget` でのController 周りの実装を簡略化できるとのことです。

## Flutterに関する記事

### ゆめみの Flutter の研修課題を公開しました

https://qiita.com/blendthink/items/c2d6bdc4ebb8bbe8f666

Flutterについての研修課題を公開した、という記事が話題になっていました。

研修にあたって、自動化等による工数削減の手法等が紹介されています。

### **Dart ドキュメント読み直した備忘録**

https://zenn.dev/nrikiji/articles/f4d95f389ddf78

スプレッド演算子や`late`等のDart の文法について、
それぞれのポイントを備忘録としてまとめられた記事です。

サンプルコード付きで各項目が紹介されています。

### **忙しい人のためのFlutter's Rendering Pipeline**

https://zenn.dev/mjhd/articles/81577dd49000eb

[Flutter's Rendering Pipeline](https://youtu.be/UUfXWzp0-DU) という動画の内容を要約して紹介された記事です。

Flutter のウィジェットが画面に描画されるまでの間に
どのようなことが行われているのかについて紹介されています。

## Flutterに関する動画

### Flutter のすべてのウィジェットの紹介動画

https://youtu.be/kj_tldMmu4w

Flutter で用意されている215ものウィジェットすべてに対して、
使用例を紹介している動画です。

サンプルコードと、実装結果がわかるよう、ひとつひとつ解説がなされています。

### Dismissible Stack ウィジェットの作り方

https://youtu.be/6O_D9j8EecA

`Dismissible` ウィジェットを基に重ね合わされたカードをスライドで削除できるようにする、
`DismissibleStack` ウィジェットを作ろう、という趣旨の動画です。

アニメーションのカスタマイズ方法等が触れられています。

## Flutter大学メンバーによる記事

### fvmを使ってFlutterプロジェクトを作成する

https://qiita.com/kilalabu/items/7ed07a99024e1687a8f4

Flutterのバージョン管理ツールであるFVMを使用して
Flutterプロジェクトを作成する方法について書かれた記事です。

リポジトリ名をハイフン区切りにする方法についても触れられています。

### 画像表示でほんのちょっと躓いたこと

https://qiita.com/dongri727/items/ef0e928062cae942c9ef

Flutter での画像表示にあたっての躓きポイントについて書かれた記事です。

assetの指定時のよくある間違いについて触れられています。

### 【Flutter✖️UIデザイン】 Tabbarデザインのあれこれ

https://qiita.com/HikaruKusanagi/items/33c81c12209bf72982e4

TabBar ウィジェットの各プロパティについて、
設定することでどのような変化があるか紹介した記事です。

各プロパティの設定による変化をGIF付きで紹介されています。

### **【Flutter Widget of the Week #28】Dismissibleを使ってみた**

https://zenn.dev/faucon/articles/1c749e52a2ce56

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回はスライドしてリスト項目を削除する機能を実現する、
`Dismissible`についての解説記事となっています。

### **【Flutter Widget of the Week #29】SizedBoxを使ってみた**

https://zenn.dev/faucon/articles/bdd983d5fb945e

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回はウィジェットのサイズを指定する、`SizedBox`についての解説記事となっています。

### **go_routerでタブがある状態で画面遷移**

https://zenn.dev/kiiimii/articles/c2c36b75d31c91

画面遷移管理パッケージであるGoRouter を用いた、BotttomNavigationBar を残した
画面遷移の実装について紹介された記事です。

サンプルコードを中心に実装方法が紹介されています。

## Flutter大学アドベントカレンダーの記事

[Flutter大学アドベントカレンダー 2022](https://qiita.com/advent-calendar/2022/flutteruniv)に投稿された記事を紹介します。

### **【FlutterFire × Stripe】flutter_stripe パッケージで楽々カード決済**

https://zenn.dev/mamushi/articles/flutter_stripe_package

Flutter と 決済サービスであるStripeを組み合わせる方法について紹介された記事です。

Firebase, Cloud Functions を利用する方法が紹介されています。

### **ObjectBox × Freezed × StateNotifier のあれこれ**

https://zenn.dev/fen/articles/acca6c9490002e

Flutter のデータ永続化の手法であるObjectBox とFreezedを組み合わせて作成した、
サンプルアプリについて書かれた記事です。

記事内では組み合わせるに当たっての注意点やサンプルコードが紹介されています。

### Firebaseでサイト内ポイントシステム構築してみた。

https://qiita.com/Miyaji555/items/ec40165a975c0cb9d53d

Firebase , Firestore を用いた有効期限付きのポイントシステムの構築について
解説された記事です。

Cloud Functions　を用いたポイント失効のための定期チェック等についても触れられています。

### **Flutter × Bitriseでappstore＆playストアにまとめてデプロイが快適すぎる件**

https://zenn.dev/manabu/articles/184ac4060c37bf

Flutter アプリに対しBitrise を用いたストアへの自動デプロイ機能の構築について書かれた記事です。

自動化の構築についてスクリーンショット付きで丁寧に解説がなされています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221128/

https://blog.flutteruniv.com/flutter-news-2022-summarize/

## まとめ

本記事ではFlutterニュースとして、
2022年11月第5週 ~ 12月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/12/5）

今週のFlutterニュースでした。

12月のFlutterニュースでは、Flutter大学アドベントカレンダーの記事を
こちらでも紹介するようにしています。

週1の更新じゃ待てない、という方は[こちら](https://qiita.com/advent-calendar/2022/flutteruniv)から日々の更新を追いかけることが可能です。

記事を書くのが初めて、という方から、
この練りに練ったトピックを記事化されている方まで様々です。

Flutter大学の雰囲気を掴むいい機会だと思いますので、ぜひこの機会に追いかけてみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。