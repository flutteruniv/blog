---
title: "Flutter ニュース 【2022年5月第1週】"
slug: "flutter-news-20220509"
author: "Aoi"
description: ""
pubDatetime: "2022-05-09"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)
Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年5月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Google I/O

https://io.google/2022/intl/ja/

日本時間5/12 午前2時から5/13にかけて、
Googleの最新情報の講演会、Google I/Oが開催されます。

オンラインでの視聴が可能で、GoogleのプロダクトであるFlutterに関する最新情報も、
もちろん発表されます。

最新情報をキャッチアップするのが好きな方は、ぜひ見てみてください。

### ThemeExtension | Decoding Flutter

https://youtu.be/8-szcYzFVao

Flutterの情報や機能を深掘りするシリーズ、Decording Flutterが更新されました。

Flutterの5月のアップデートで実装予定の、
自作WidgetでもThemeを使えるようにする、
ThemeExtension についての解説動画となります。

こちらの内容に関しては、週刊Flutter大学でも記事にしていますので、
併せてご確認ください。

https://blog.flutteruniv.com/flutter-themeextension/

### Boring to Fly - Fixing up MyDash (The Boring Flutter Development Show, Ep. 57)

https://youtu.be/G1dxXphxPx4

The Boring Flutter Develop Show の最新Episodeが公開されました。

今回は、Flutterの初心者向け動画シリーズ、Learning to Fly とのコラボ動画で、
Learning to Fly で作成しているFlutter グッズアプリを、
2人で修正していく様子が動画化されています。

## Flutterに関する話題

### convenient_test パッケージ

https://www.reddit.com/r/FlutterDev/comments/uk3u5g/given_the_interest_convenient_test_is_opensourced/

FlutterのIntegration Test をより便利に実行できるパッケージ、
convenient_testパッケージの紹介の投稿です。

テストのビデオ録画等ができ、Integration Testの補助をしてくれるそうです。
投稿のリンク先にDemoのVideoがあるので、ぜひ見てみてください。

### Dashboard パッケージ

https://www.reddit.com/r/FlutterDev/comments/ujpqbw/flutter_dynamic_dashboard_widget/

パネルの大きさを自由に変えたり、移動できたりするパッケージ、
Dashboard パッケージの紹介の投稿です。

Demoのページや、YouTubeでのDemoの動画がリンクされていますので、
ぜひ見てみてください。

## Flutterに関する記事

### Flutter App Architecture: The Presentation Layer

https://codewithandrea.com/articles/flutter-presentation-layer/

Flutter でのアプリアーキテクチャの詳細を紹介する記事として、
ユーザーが触る部分であるプレゼンテーション層の記述方法について解説された記事です。

ユーザー認証を題材に、
RiverpodのStateNotifierProviderを使った実装方法について記載されています。

### Dart 2.17での Super 引数の使い方

https://codewithandrea.com/tips/dart-2.17-super-arguments/

Dart 2.17でのsuper引数について書かれた記事です。

引数宣言時にsuperを設定することができるようになるとのことです。
Flutterの次のアップデートで利用可能となる書き方とのこと、楽しみですね。

### Throwする関数をテストする方法

https://codewithandrea.com/tips/flutter-test-expect-tear-off/

テスト関数の中で例外を投げる関数を使う際の注意点についてまとめられた記事です。

expectの中で関数を実行するのでなく、
関数そのものを渡すようにすると良い、とのことでした。

### Providerを使ったFlutterの状態管理を学ぼう

https://cswithiyush.hashnode.dev/exploring-state-management-in-flutter-with-provider

Provider を使ったFlutterの状態管理について学ぶことができる記事です。

Flutterのデフォルトのカウンターアプリを題材に、
Change Notifier等を使いProviderの基本的な使い方を学ぶことができます。

## Flutter大学メンバーによる記事

### **Flutterでよくあるログイン画面を作る**

https://zenn.dev/joo_hashi/articles/fc6914a5d74629

Flutter でのログイン画面の作成例を紹介した記事です。

UI的な作成例とバリデーションについても記載されています。

### **FlutterのAppBarの色をオリジナルにしたい!**

https://zenn.dev/joo_hashi/articles/a0344fb300c1f6

Flutter のAppBarの色を変更する方法について解説された記事です。

色の指定を16進数出する方法と、RGBAで指定する方法、の2種類で解説されています。

### [Flutter×Firebase] firebase_authのエラーハンドリング(例外処理、try-catch)を学ぶ

https://zenn.dev/hikaru24/articles/7c5d49b0e877b9

Firebase_auth でのエラーハンドリングについて書かれた記事です。

Firebase_auth で発生するエラーコードごとに対処を分ける方法について、
サンプルコードをベースに紹介されています。

### **シンプルでカラフルで拡張しやすい FirebaseCrashlytics 連携可能な Dart 製ロガーパッケージを公開した話**

https://zenn.dev/susatthi/articles/20220506-144617-flutter-roggle

FlutterでDebug Consoleに表示するログをカスタマイズするためのパッケージを自作され、
その内容について紹介されている記事です。

カラフルで、かゆいところに手が届くパッケージとなっているかと思います。
パッケージはpub.devにて公開されていますので、ぜひ利用してみてください。
（リンクは[こちら](https://pub.dev/packages/roggle)）

### **FlutterHooksを気軽に使ってみよう！**

https://zenn.dev/manabu/articles/bae5d5ded78cbc

Flutter Hooks の基本的な使い方について解説された記事です。

Flutter Hooks で使われる、useStateとuseEffectについて特に注目して記載されています。
これからHooksを使用するにあたって参考になる記事となっています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220502/

https://blog.flutteruniv.com/flutter-themeextension/

https://blog.flutteruniv.com/flutter-material-you-navigation-bar/

https://blog.flutteruniv.com/flutteruniversity-online-exchange-meeting/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、
2022年5月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/5/9）

あなたは、Flutterやアプリ開発は難しいと思いますか？

難しい、の定義も色々ありますので、人それぞれの意見がある話題かと思います。
自分は、調べれば解決方法がわかる、という意味でFlutterは難しくはないですが、
アプリ開発に関しては『ものづくり』としての一定の難しさがある、と思っています。

プログラミングに関して何も勉強していない人が、
子供が粘土で作品を作るかのようにいきなりアプリケーションを作り始められるか、
と言われたら、それはNoでしょう。

Flutterについてやプログラミングについての知識が多少なりとも必要となるので、
この意味ではFlutterでのアプリ開発は特殊技能と言え、難しいと感じるかもしれないと思います。

ただ、自分はこの技能の習得自体はそこまで難しいものではない、と考えます。
日本語の教材もかなり増えてきていますし、
本記事で紹介しているような最新情報が日々投稿されていて、
欲しい情報へ手が届くようになっています。
一つ簡単なアプリを作成するのであれば、必要なことは調べればできる、
もしくは調べたことを組み合わせればできるようになっているかと思います。
（少なくとも調べればできるかできないか、わかるようになってきています。）

以上から、調べれば解決方法がわかる、という意味でFlutterは難しくはないと考えます。

では、ここに製品開発、『ものづくり』として、
納期や外部から仕様の要求事項、チームのマネジメント項目が入ってくるとどうでしょうか。

これらの交渉、調整に関しては、調べてわかるものでは無いですし、
臨機応変に対応しなければいけないもので、難しいものだと自分は考えます。
（こちらの方がむしろ得意で、簡単だと感じる方もいらっしゃるかもしれませんが。。。）

Flutterに限らないところで、アプリ開発として、もっと広く『ものづくり』としての難しさは、
大きい、多くの人を巻き込んだアプリになればなるほど発生するものかと思います。

以上から、自分の結論は、
調べれば解決方法がわかる、という意味でFlutterは難しくはないですが、
アプリ開発に関しては『ものづくり』としての一定の難しさがある、となります。

一人で、納期を決めず、仕様策定も自由にできる環境で、
規模の小さい、簡単なアプリを作成するのであれば、
Flutterでのアプリ開発は簡単なものだと思います。

あなたはどう思いますか？ぜひご意見をお聞かせください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。