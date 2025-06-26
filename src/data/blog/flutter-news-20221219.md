---
title: "Flutter ニュース 【2022年12月第3週】"
slug: "flutter-news-20221219"
author: "Aoi"
description: ""
pubDatetime: "2022-12-19"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年12月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### flutter 3.3.10 リリース！

https://twitter.com/FlutterReleases/status/1603502710308872192

Flutter のstable チャンネルにて、Flutter 3.3.10がリリースされました。

[Hotfixes一覧](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#3310-dec-16-2022)によると今回のリリースでの修正点は以下となります。

- [Android のTVデバイスでのスクロール時に生じる不具合の修正](https://github.com/flutter/flutter/issues/113314)
- [Safari でのFlutter Web 、CanvasKit モード使用時に、ClipRRectでネストされたウィジェットが表示されない問題の修正](https://github.com/flutter/flutter/issues/80401)

### isolate_agents パッケージ

https://medium.com/@gaaclarke/isolate-agents-easy-isolates-for-flutter-6d75bf69a2e7

Flutter / Dart チームがリリースしたパッケージ、
isolate_agents パッケージについての記事です。

Flutter / Dart でのIsolateをより実装しやすくするパッケージとなっています。

### go_router（今週のパッケージ）

https://youtu.be/b6Z885Z46cU

Flutter 公式による パッケージ紹介動画シリーズ、Package of the Week の
最新動画がアップロードされました。

今回はFlutterアプリでURLを用いた画面遷移等を実装しやすくするパッケージ、
go_routerパッケージの紹介となります。

### デスクトップのFlutter開発体験を良くするためには？

https://medium.com/flutter/how-can-we-improve-the-flutter-experience-for-desktop-70b34bff9392

2022年 Q3 のFlutterのデスクトップアプリ開発に関する調査結果の紹介記事です。

1,901ものFlutter でのデスクトップアプリ開発者に調査を行った結果が記載されています。

## Flutterに関する話題

### Flutter Socket.IO のクライアントパッケージ

https://www.reddit.com/r/FlutterDev/comments/zk6y3n/flutter_socketio_client_package/

双方向で低遅延の通信を実現する[Socket.IO](https://socket.io/)のクライアントパッケージ、
[socket_io_client_flutter](https://pub.dev/packages/socket_io_client_flutter) パッケージについての投稿がRedditで話題となっていました。

サーバーとのメッセージの送受信が実現できるとのことです。

### camerawesome Rc1 リリース

https://www.reddit.com/r/FlutterDev/comments/zmi83k/camerawesome_rc1_released_on_pubdev/

[Camerawesome ](https://pub.dev/packages/camerawesome/versions/1.0.0-rc1+4)パッケージについての投稿がRedditで話題となっていました。

ドキュメントやExample等が充実したとのことです。

## Flutterに関する記事

### Flutterでモバイルアプリ開発着手からリリース後まで。【感想】

https://qiita.com/MasaoSasaki/items/8a283666ffbbf0cf877a

Flutterでのモバイルアプリ開発に着手した理由から、
リリース後の市場の反応に至るまでをまとめて解説された記事です。

広告収益やリリース時にかかる金額等が紹介されています。

### **【Flutter】Material Theme Builder で好みの色をアプリに組み込む**

https://zenn.dev/10_tofu_01/articles/adopt_material_color_generotor

Material Theme Builderを用いたアプリへの色の反映を行う方法について
書かれた記事です。

Material Designに則った統一感のある配色が設定可能となります。

### **Flutterアプリ・Pilllの構成について**

https://zenn.dev/bannzai/articles/9fc28c2dee312e

Flutterで作成された個人開発アプリのファイル構成等について書かれた記事です。

記事内で自作されたライブラリ、[async_value_group](https://github.com/bannzai/async_value_group/)の紹介がなされています。

### **Meilisearchを使ってFlutter×Firestoreの全文検索を実現する**

https://zenn.dev/tsuruo/articles/939f9af76f83be

Meilisearchを利用したFlutter x Firestore での全文検索の実装方法について書かれた記事です。

Meilisearchの登場の背景から、優れている点等についてもまとめられています。

### なぜFlutterにはClojureが必要か？

https://functional.works-hub.com/learn/why-flutter-needs-clojure-45b93

Flutterとプログラミング言語であるClojureの関係性について解説された記事です。

Dart で書かれたコードのClojureでの表現の対比や、
Flutter開発をClojureで行う方法が紹介されています。

### どのようにしてFlutterのための高いカスタマイズ性を持ったRich Text Editorを実装したか

https://blog-appflowy.ghost.io/how-we-built-a-highly-customizable-rich-text-editor-for-flutter/

Notionの代替手段である、
高いカスタマイズ性を持ったRichText Editor 、
[AppFlowy Editor](https://pub.dev/packages/appflowy_editor)の技術設計について書かれた記事です。

データ構造やサンプルコード等が紹介されています。

### Flutter Riverpod :アプリのAPI呼び出しを難なく管理する

https://dhruvnakum.xyz/flutter-riverpod-effortlessly-managing-api-calls-in-your-app

状態管理フレームワークであるRiverpod を用いたAPI呼び出しの実装方法について
紹介された記事です。

2つのAPIを利用したサンプルアプリの作成方法が紹介されています。

### Flutter でRiverpod を用いたListViewのベストなパフォーマンスの実現

https://itnext.io/write-best-performance-listviews-with-riverpod-in-flutter-8bf6590ed8b8

Riverpodを用いた、ListView での不要なリビルドの抑制について書かれた記事です。

selectやoverrideを用いた方法が紹介されています。

## Flutter大学メンバーによる記事

### Todo アプリを作成しました。『鏡を使わないと読めない』ですけど。【Mirror Todo】

https://qiita.com/Umigishi-Aoi/items/4d1c78474e8ddde55a61

登録されたToDoの文字列が鏡文字で表示されるアプリを作成した、
との体験談の記事です。

アプリのアーキテクチャやRiverpod Generator での状態管理等が紹介されています。

### 初心者リンクを埋める

https://qiita.com/dongri727/items/1dfd8ae94310bf452bd5

url_launcher を使用した実装方法についての、悩んだ点や解決策について書かれた記事です。

どこに何を書けばいいのか、という悩みについてサンプルコードで１つの解が示されています。

### プログラミングの勉強を1年半して思ったこと。

https://qiita.com/kagura1/items/f0b1a54efb1e6159bf87

筆者のプログラミングを1年半勉強してわかったノウハウについて書かれた記事です。

経験談ベースでポイントが丁寧に記載されています。

### **【Flutter Widget of the Week #32】AnimatedListを使ってみた**

https://zenn.dev/faucon/articles/cd8a8ac1e7fe2e

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回はアニメーション付きでリストの追加、削除等を行うのに有用な
`AnimatedList`についての解説記事となっています。

### **【Flutter Widget of the Week #33】Flexibleを使ってみた**

https://zenn.dev/faucon/articles/00aa30926f235e

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回はウィジェットの大きさを割合で調整するウィジェット、
`Flexible`についての解説記事となっています。

### **go_routerいらないんじゃないですか?**

https://zenn.dev/joo_hashi/articles/e741bc068e2f7c

短い記述での画面遷移の実装について書かれた記事です。

Extension を用いたgo_router を使用しない方法が紹介されています。

## Flutter大学アドベントカレンダーの記事

### **Flutter x Firebaseでメール通知機能を実装してみる**

https://zenn.dev/masa_tokyo/articles/sendgrid-demo-app

Flutter x Firebaseでのメール通知機能の実装方法について書かれた記事です。

SendGridを用いたメール配信の実装方法が紹介されています。

### **【Flutter】思い通りのバリデーションを簡単に作ろう**

https://zenn.dev/sanyatsu/articles/fce6d774396b60

TextFormField に対するバリデーションの実装方法について書かれた記事です。

パッケージを利用した　バリデーションの実装方法が紹介されています。

### **【Flutter】AsyncValue を使ってローディング表示、ダイアログ表示、スナックバー表示の共通化をしてみた**

https://zenn.dev/susatthi/articles/20221214-090833-flutter-async-value

Riverpod のAsyncValue を用いたローディング表示等の処理の共通化について書かれた記事です。

コード内の任意の場所で処理を呼び出す方法が紹介されています。

### **Rive Animation を使用してみた**

https://zenn.dev/uetomo/articles/b93ed7cda84024

アニメーション作成ツールであるRIveについて紹介された記事です。

FlutterでRiveを使用できるようにするパッケージの紹介等が行われています。

### サンタさんのパラパラ漫画を実装した話

https://qiita.com/dongri727/items/37616461625d03e8ddc6

Flutter で作成したリコメンドアプリの紹介とアニメーションの実装方法について
書かれた記事です。

実装サンプルのコードが記事内で紹介されています。

### **Flutter x Firestore で無限スクロールのチャット機能を実装する**

https://zenn.dev/kosukesaigusa/articles/flutterfire-infinite-scroll-chat

Flutter x Firestore でのチャット機能の実装方法について解説された記事です。

過去の情報を少しずつ読み込んでいく、無限スクロールの実装方法についても紹介されています。

### **【Flutter】スポットライト風のチュートリアルを作成してみよう**

https://zenn.dev/kazukidddd/articles/9f79e8d597ca21

アプリを初めて起動した人向けに、
スポットライト風に動作を指示するチュートリアルの実装方法について解説された記事です。

showcaseviewというパッケージを利用した方法が紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221212/

https://blog.flutteruniv.com/dart-3-20221214/

## まとめ

本記事ではFlutterニュースとして、
2022年12月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/12/19）

今週のFlutterニュースでした。

記事半ばで書いたMirror Todo という鏡文字を表示するTodo アプリは、
自分が[クソアプリアドベントカレンダー](https://qiita.com/advent-calendar/2022/kuso-app)の記事のために作成したものです。

去年記事を書いてからすぐにアプリの構想自体は思いついたので、
1年越しに作成したアプリでした。

レスポンシブ対応等もしていて、
意外と凝ったアプリになったかと思います。

ぜひ上記記事から覗いてみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。