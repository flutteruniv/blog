---
title: "Flutter ニュース 【2022年10月第4週】"
author: "Aoi"
description: ""
pubDatetime: 2022-10-24T10:00:00.000Z
tags: ["ニュース"]
---

**「Flutterの最新情報をキャッチアップしたい！」**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年10月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.3.5 リリース！

https://twitter.com/FlutterReleases/status/1582859167693672448

Flutter のstable チャンネルにて、Flutter 3.3.5がリリースされました。

[Hotfixes一覧](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#335-oct-19-2022)によると今回のリリースでの修正点は以下となります。

*   [`FadeInImage`でキャッシュされた画像からキャッシュされていない画像に切り替えた時にアプリがクラッシュする不具合の修正](https://github.com/flutter/flutter/pull/113035)
*   [post-submit のビルドとデプロイメントのドキュメントの移動](https://github.com/flutter/flutter/pull/112228)
*   [絵文字と韓国語の組み合わせでアプリがクラッシュする問題の修正](https://github.com/flutter/engine/pull/36807)
*   [Web アプリをデバック時誤ったエラーが表示される問題の修正](https://github.com/flutter/flutter/pull/112887)

## Flutterに関する話題

### Flutter Smooth

https://www.reddit.com/r/FlutterDev/comments/y6um51/be\_60fps\_smooth\_no\_matter\_how\_janky\_your\_app/

Flutterでリスト等をよりスムーズにスクロールできるようにするパッケージ、  
flutter\_smoothについての投稿がRedditで話題となっていました。

[こちら](https://cjycode.com/flutter_smooth/)にて比較動画等詳細を見ることが可能となっています。

### Flutter Web で作成されたポートフォリオ ウェブサイト

https://www.reddit.com/r/FlutterDev/comments/ybhys7/portfolio\_website\_using\_flutter\_web\_opensource/

Flutter Web で作成されたポートフォリオとしてのWeb サイトとソースコードの紹介記事です。

Web サイトでは筆者が作成したアプリの一覧を見ることができます。

### Dart のためのInteractive Shell (REPL)

https://www.reddit.com/r/FlutterDev/comments/yb6jjm/interactive\_shell\_repl\_quickly\_trying\_things\_like/

シェル上で入力したDartのコードを実行する等ができるソフトウェアが  
Redditで話題となっていました。

GitHub内のREADME にて実行例等を見ることができます。

### calendar\_day\_view パッケージ

https://www.reddit.com/r/FlutterDev/comments/yast5r/calendar\_day\_view\_dav\_view\_widget\_for\_calendar\_app/

日の予定表を作成するのに有用なパッケージ、calendar\_day\_view パッケージについての投稿が  
Redditで話題となっていました。

pub.dev のパッケージ紹介ページにて使用例の画像を見ることが可能です。

### プロフィール画像の重ね合わせサンプル

https://github.com/rutvik110/Flutter-Animations/tree/master/lib/flutter\_design\_challenges/pictures\_stack

コインの形で表示されたプロフィール画像を重ね合わせ、  
追加や削除のアニメーションを実装したサンプルプロジェクトがRedditで話題となっていました。

リンク先の動画にて、実装結果のアニメーションを見ることができます。

### Flutter/Flutter Web で作られた シンプルなお絵かきアプリ

https://github.com/JideGuru/flutter\_drawing\_board

Flutter / Flutter Web で作成されたシンプルなお絵かきアプリのリポジトリが  
Redditで話題となっていました。

リンク先の"Link to Demo"からデモアプリを触って確認することができます。

### RxDB の Flutter での使い方

https://github.com/pubkey/rxdb/blob/master/examples/flutter/README.md

データベースである [RxDB](https://rxdb.info/) を Flutter で扱うための方法について書かれたREADMEが、  
Reddit で話題となっていました。

今後、Example内でサンプルアプリも作成される模様です。

## Flutterに関する記事

### Dr.Riverpod : どのようにして状態管理についての不安を解消し愛するようになったか | Codemadic Blog

https://blog.codemagic.io/flutter-state-management-part-1/

Flutter の状態管理手法の変遷の歴史から、  
筆者の状態管理手法の選定の理由について書かれた記事です。

記事内では、状態管理手法の Pub.devでのLike 数ランキング等が紹介されています。

### Flutter Rivepod Generator でのProviderの自動生成方法

https://codewithandrea.com/articles/flutter-riverpod-generator/

状態管理フレームワーク Riverpod で利用するProvider を  
パッケージを利用して自動生成する方法について書かれた記事です。

`build_runner`での自動生成にて`Provider`を自動生成することができます。

### ガラスが割れるようなアニメーションの実装方法

https://medium.com/@SchabanBo/explosion-animation-in-flutter-3b7319e63469

正方形のパネルが、ガラスが割れるように割れ散るアニメーションの実装方法について  
解説された記事です。

記事内のGIFで実装内容のアニメーションを見ることができます。

### 2022年 10月のニュースまとめ

https://codewithandrea.com/newsletter/october-2022/

2022年10月に起きた出来事についてまとめて紹介している記事です。

Isar 3.0 のリリースやRiverpod 2.0 のリリースの他、筆者の作成した記事等が紹介されています。

## Flutterに関する動画

### Reddi のクローンアプリ作成チュートリアル

https://youtu.be/B8Sx7wGiY-s

Reddit のクローンアプリを作成するチュートリアル動画がRedditにて話題となっていました。

Flutter, Firebase, Riverpod 2.0 を利用して作成したチュートリアルとなっています。

### Apple Watch + Flutter = No Problem! | FlutterVikings 2022

https://www.youtube.com/watch?v=l1-QYqaGyMk

Apple Watch とFlutterの組み合わせについてのFlutter Vikings の講演の切り抜き動画です。

実装方法やスマホとの連携方法等が紹介されています。

## Flutter大学メンバーによる記事

### 初心者 flutter\_unity\_widget 2022.2.0のpub.devを読む

https://qiita.com/dongri727/items/c14072877851119f7a57

https://qiita.com/dongri727/items/e484564439b1da62566e

https://qiita.com/dongri727/items/ddd91d7d1020fc5446b5

Flutter x Unity でのアプリ作成に挑戦している体験談について書かれた記事です。

flutter\_unity\_widget パッケージのドキュメントを読み解くことで、  
Flutter x Unityのアプリの実装に挑戦しています。

### 【Flutter Web】Javascriptを呼び出す (packages:js)

https://qiita.com/heyhey1028/items/01b38dd48b30b67d5a17

https://zenn.dev/heyhey1028/articles/abd818ca760e33

Flutter Web で javascript のコードを呼び出す方法について書かれた記事です。

外部のjsライブラリを呼び出す方法についても記載がされています。

こちらの記事について英語版の記事も作成されています。

https://medium.com/@heyhey1028/flutter-web-calling-javascript-functions-with-packages-js-41c64b49a4ed

### \[Flutter\] 縦横スクロールできる表を作る

https://qiita.com/kilalabu/items/8ea473927751c1e0e69c

Flutter での縦横スクロールできる表の作り方について解説されている記事です。

シンプルな設定方法と`Table`との組み合わせについて紹介されています。

### **【Flutter】なぜウィジェットの import 先に「material.dart」を選ぶのか**

https://zenn.dev/mamushi/articles/flutter\_import\_material

Flutterのウィジェットをインポートする際に選ぶ`material.dart`について、  
その選択理由を深堀りした記事です。

図を用いて、選択理由について詳細に解説されています。

### **【Flutter Widget of the Week #15】InheritedModelを使ってみた**

https://zenn.dev/faucon/articles/151e9f980f1046

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で  
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回は`InheritedModel`についての解説記事となっています。

### **【Flutter Widget of the Week #16】ClipRRectを使ってみた**

https://zenn.dev/faucon/articles/a2b7fd7b58606e

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で  
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回は`**ClipRRect**`についての解説記事となっています。

### **【Flutter Widget of the Week #17】Heroを使ってみた**

https://zenn.dev/faucon/articles/87818d00fc665a

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で  
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回は`****Hero****`についての解説記事となっています。

### **仙人「弟子よ。Firestoreからランダムなドキュメントを取得することはできるかの？」**

https://zenn.dev/pressedkonbu/articles/random-get-from-firestore

Firestore からランダムなドキュメントを取得する方法について書かれた記事です。

全県取得する方法ではないランダムなドキュメントを取得する方法について紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221017/

https://blog.flutteruniv.com/company-interview-strict-systems/

https://blog.flutteruniv.com/flutter-dart-list/

https://blog.flutteruniv.com/flutter-package-curved\_navigation\_bar/

## まとめ

本記事ではFlutterニュースとして、  
2022年10月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/10/24）

今週のFlutter ニュースの記事でした。

今週紹介した内容の中で、Apple Watch との組み合わせの動画がとても興味深かったです。

最近 Google もPixel Watch を リリースしましたし、  
腕時計型デバイスはどんどん使う人が増えていくものだと思っています。

Flutter で腕時計型デバイスも同時開発できる、となったら、  
Flutterの需要は一気に高まるのではないでしょうか。

今後のFlutter の公式サポートの動向に期待ですね。

しっかりと "Watch" していこうと思います。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。