---
title: "Flutter ニュース 【2022年4月第2週】"
author: "Aoi"
description: ""
pubDatetime: 2022-04-11T10:00:00.000Z
categories: ["news"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)

Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年4月第2週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### MyDash: It's not just one big build method anymore! | Learning to Fly

初心者がFlutterのアプリケーション作成を通してFlutterについて学んでいく公式の動画シリーズ、Learning to Fly が更新されました。

今回のテーマはWidgetの分割と、ファイル構成、デバッグの仕方についてです。  
先輩エンジニアとの対話形式で学んでいく姿が見られます。

https://youtu.be/7\_v6oMtz7tA

## Flutterに関する話題

### Dependabot の Flutter/Dartに対するベータサポートの開始

https://twitter.com/timsneath/status/1511418212776251396

使用しているパッケージの依存関係を自動で確認し、  
必要に応じてその更新を行ったプルリクエストを送ってくれるDependabotが、  
Flutter/Dartに対応しました。

現状はGitHubからのパッケージには対応しておらず、  
`pub`のパッケージのみ対応しているとのことです。

### zwidget パッケージ

https://pub.dev/packages/zwidget

Widgetを重ね合わせて3次元の見た目にするパッケージ、  
ZWidgetがRedditで話題となっていました。

Flutterで3次元の要素を実装したり、  
立体的な見た目のテキストやアイコンを実装するのに良さそうです。

### Stockholm パッケージ

https://www.reddit.com/r/FlutterDev/comments/tzxo19/flutter\_desktop\_widgets\_dont\_need\_to\_suck/

https://pub.dev/packages/stockholm

Desktop アプリケーション向けにデザインされたUIを作成できるパッケージ、StockholmがRedditで話題になっていました。

[Serverpod](https://serverpod.dev/)のUIを作成する中で作成したパッケージとのことです。

## Flutterに関する記事

### 【個人開発】Flutter webでLINEグルチャメンバーの子どもの顔と名前がわかる「かおなまいっち」というサービスを作った話

https://qiita.com/sekitaka\_1214/items/ebaca77860bd42a67cc7

Flutter Web でのサービスのリリース体験談です。

開発にあたって使用した技術の紹介や、  
使っていて良かった点、辛かった点が紹介されています。

### **Flutter Animationの裏側**

https://zenn.dev/fastriver/articles/ecc5cc76249efd

Flutterのアニメーションについて深く掘り下げた記事です。

内部コードのリーディングを通して、  
アニメーションの仕組みについて解説されています。

### Flutterのローカルデータベースの紹介

https://itnext.io/all-local-databases-in-one-article-be65621c934a

Flutterで使われるローカルデータベースを列挙し、  
それぞれの特徴についてまとめた記事です。

ローカルデータベースの選定する際に有用です。

### FlutterアプリケーションをシームレスにWindowsに統合する方法

https://flutterondesktop.dev/how-to-seamlessly-integrate-flutter-apps-in-windows

FlutterでWindows向けのアプリケーションを作成するのに有用なパッケージを紹介している記事です。

Fluent UI や、window\_manager等、UI面に着目しての紹介となっています。

### VSCodeでFlutter テストカバレッジレポートを生成、解析する方法

https://codewithandrea.com/articles/flutter-test-coverage/

Flutterでのテストのカバレッジレポートの取得方法についての記事です。

カバレッジとは、プロジェクトの中のテスト可能なコードが  
どれだけテストされたかを割合で表したものです。  
`flutter test --coverage`を使用したカバレッジの取得方法や、  
VSCodeの拡張機能を利用して、カバレッジを見やすくする方法について書かれています。

### なぜFlutterは速いのか？

https://www.reddit.com/r/FlutterDev/comments/tw0gvj/articles\_series\_why\_is\_flutter\_fast/

Flutterが何故速いのか、をテーマに、  
3つの記事でその理由についてをまとめた記事が紹介されています。

Flutter内部の処理について、  
3つのツリーの話のような基本的な部分から丁寧に解説されています。  
Flutterの内側を学びたい際に有用な記事でした。

### GraphQL Flutter + Flutter Hooks

https://medium.com/graphql-flutter/graphql-flutter-hooks-23ab5e77514e

GraphQL Flutter パッケージの5.1.0がリリースされました。

このアップデートで、Flutter Hooksとの連携ができるようになったそうです。  
記事ではこの基本的な使い方が端的に解説されています。

### Dart/FlutterでのFutureOrとは何か？

https://itnext.io/what-is-futureor-in-dart-flutter-681091162c57

Future<T>とTのユニオン型であるFutureOrについての解説記事です。

データベースを用いた具体例で、使用例を解説されています。

## Flutterに関する動画

### Flutter上に構成されるゲームエンジン、Flame エンジン

https://youtu.be/OJsyTv4ZPs8

Flutterで2Dのゲームを遊べるようにするパッケージ（ゲームエンジン）である  
Flameについての動画です。

Flameの紹介と、簡単な使い方について、動画にまとめられています。

## Flutter大学メンバーがリリースしたアプリ

### わらびアクセサリー ~個人アクセサリー製品の紹介アプリ~

https://play.google.com/store/apps/details?id=com.kawasumi.hiroyuki\_works

[かわ](https://twitter.com/ka_shi_pan)さんによって、  
個人アクセサリー製品の紹介アプリ、『わらびアクセサリー』がリリースされました！

昆虫をモチーフにして制作されたアクセサリーを、画像で紹介するアプリとなっています。

アプリリリースもすごいですが、  
紹介されているアクセサリーがまるで本物かと見間違えるくらいのクオリティで、  
とても素敵です。  
ぜひダウンロードして見てみてください。

## Flutter大学メンバーによる記事

### FlutterとFIrebaseでCRUDできるデモアプリ作ってみた。

https://qiita.com/JunichiHashimoto/items/05099c22df951a1dfc19

FlutterとFirebaseを使用しての、  
追加や削除、編集ができるアプリケーションの作成について書かれた記事です。

Firebase のデータ構成から使用したパッケージ、サンプルコードが紹介されています。

### 【Flutter】Windows Desktop アプリのビルド方法と開発環境の構築

https://zenn.dev/susatthi/articles/20220403-075051-flutter-windows-app

Windows でのFluttterの環境構築から、Windows アプリのビルド方法まで書かれた記事です。

最近開始したFlutterのWindowsに対するサポートを早速利用してみた記事となっています。

### **【Flutter】最速で Flutter Web を Cloudflare Pages にデプロイする**

https://zenn.dev/susatthi/articles/20220405-045925-flutter-web-deploy-cloudflare

Flutter Web × Cloudflare Pagesの解説記事です。

特定のブランチにPushした際に自動でデプロイするための  
GitHubやCloudflare Pages の設定について、  
スクリーンショットや図を用いて詳細に解説されています。

### **【Flutter】geoflutterfireという範囲内の座標のみを取得する神パッケージの紹介**

https://zenn.dev/wakanao/articles/65972fe4e0894b

geoflutterfire パッケージを紹介し、範囲内の座標のみを取得する方法について書かれた記事です。

スクリーンショットやサンプルコードを用いて、  
座標の取得の仕組みについて丁寧に解説されています。

### **【Flutter】コマンド一発でスプラッシュ画面を実装する【flutter\_native\_splash】**

https://zenn.dev/susatthi/articles/20220406-061305-flutter-native-splash

Flutterのスプラッシュ画面の実装方法について書かれた記事です。

ただアイコン画像を表示する方法だけでなく、  
Android と iOSでの位置調整の仕方や、  
ダークモードの指定の仕方まで、詳細に解説されています。

### **【Flutter】初期化が終わるまでスプラッシュ画面を表示したい【flutter\_native\_splash】**

https://zenn.dev/susatthi/articles/20220409-052221-flutter-native-splash-setup

初期化処理が終わるまでスプラッシュ画面を表示し続ける方法について解説された記事です。

対策前と後の動作の変化を、サンプルコードやgifを用いて丁寧に解説されています。

### **Flutter だけど GitHub リポジトリ名にハイフンを使いたい**

https://zenn.dev/susatthi/articles/20220410-064851-package-naming

Flutterでハイフン区切りのディレクトリ名を使う方法について書かれた記事です。

Flutterでのディレクトリ名を  
ハイフン区切りにするのか、アンダーバー区切りにするのかは、好みで分かれる部分です。  
記事では、ハイフン区切りにした方が良い理由について記載されています。

## Flutter逆引き辞典の追加ページ

https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary

先週の追加ページは以下になります。

*   [Stringをenumに変換したい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/004-string-to-enum)
*   [Containerから画像がはみ出ないようにしたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/005-clip-image)
*   [ダイアログ上でページ遷移したい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/006-push-page-on-dialog)
*   [GoogleDriveに保存した動画を再生したい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/007-play-video-in-google-drive)
*   [IconButtonのPaddingを取り除きたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/008-remove-padding-from-icon-button)
*   [ぼのぼのをつくりたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/009-create-bonobono)
*   [音声波形をみたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/010-audi-streamer)

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220404/

https://blog.flutteruniv.com/flutter-package-loading-animation-widget/

https://blog.flutteruniv.com/flutter-package-liquid-swipe/

https://blog.flutteruniv.com/flutteruniversity-study-meeting-202203/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、  
2022年4月第2週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/4/11）

昨日4/10に第8期の共同開発のキックオフミーティングがZoomで開かれました。  
キックオフではアイデアのプレゼンテーションが行われました。

どれも素敵なアイデアで、参加したくなるものばかりでした。

特徴的だったのは、パッケージやFlutter Webの開発のような、  
モバイルではないアイデアが持ち寄られたことです。

Flutterの進化により、共同開発の幅もどんどんと広がってきているな、と感じました。

キックオフミーティングのアーカイブ動画の確認や、  
共同開発への参加は、Flutter大学のコミュニティプラン以上の会員であれば、  
可能となります。

興味のある方はぜひ覗いてみてください。

Flutter大学への入学はこちらから。

https://flutteruniv.com/

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。