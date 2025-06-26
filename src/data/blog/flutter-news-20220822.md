---
title: "Flutter ニュース 【2022年8月第3週】"
slug: "flutter-news-20220822"
author: "Aoi"
description: ""
pubDatetime: "2022-08-22"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)
Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年8月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Midyear 2022 Flame Game Jam 開催

https://twitter.com/FlutterDev/status/1560023756327772161

Flutter の ゲームエンジン Flame を使用したアプリによるアプリコンテスト、
Flame Game Jam が開かれました。

[こちら](https://itch.io/jam/2nd-flame-game-jam/entries)から、投稿されたアプリを見ることが可能です。

### flutter_rating_bar（今週のパッケージ）

https://youtu.be/VdkRy3yZiPo

Flutter 公式のパッケージ紹介動画シリーズ、Package of the Week の最新動画が更新されました。

今回は評価のバーを実装するのに役に立つ、[flutter_rating_bar](https://pub.dev/packages/flutter_rating_bar)パッケージの紹介でした。

こちらのパッケージに関しては週刊Flutter大学でも記事化しています。
併せてご確認ください。

https://blog.flutteruniv.com/package-flutter_rating_bar/

## Flutterに関する話題

### overlayment パッケージ

https://www.reddit.com/r/FlutterDev/comments/wtglss/overlayment_an_overlay_management_package/

画面上にさらなる要素を表示する、オーバーレイに関するパッケージ、[overlayment](https://pub.dev/packages/overlayment)パッケージ
Reddit で話題になっていました。

[こちら](https://overlayment.netlify.app/#/)のサンプルアプリでどのようなオーバーレイ要素が実装可能か見ることが可能です。
また[こちら](https://medium.com/@SchabanBo/overlayment-an-overlay-management-package-2dbdd9c2b1bb)の記事内のGIFで使用感等を見ることができます。

### クロスプラットフォームなデータ転送アプリ Photon

https://github.com/abhi16180/photon

Flutterで作られたクロスプラットフォームなデータ転送アプリ PhotonのGitHub です。

複数ファイルの転送ができ、
現在Android, Windows, iOSに対応しているとのことです。

### Dart Frog の stable リリース

https://verygood.ventures/blog/dart-frog-stable

Dartでバックエンドをかけるようにするフレームワーク、
Dart Frogがstableバージョンになったとのことです。

記事内にてカウンターアプリやTODOアプリ等のチュートリアルが紹介されています。

## Flutterに関する記事

### **アクセシブルFlutter: Semantics入門**

https://zenn.dev/mjhd/articles/88c32b1610ca95

Flutterで作成したアプリのアクセシビリティに深く関わる、
`Semantics Widget`についての解説記事です。

そもそもアクセシビリティは何か、アクセシビリティ対応をなぜやるのか、
という基礎的な部分から解説がなされています。

### Firebase App Distribution への Fastlane でのデプロイ

https://itnext.io/flutter-fastlane-deployment-to-the-firebase-app-distribution-easy-way-d5ca2fbdcdf9

CI/CDツールのFastlane を使って、Firebase App Distribution へデプロイする方法について
解説された記事です。

Android向け、iOS向け、それぞれ解説がなされています。
記事内では各設定コードのサンプルが紹介されています。

### Flutter pet project roadmap

https://medium.com/@daria.orlova/flutter-pet-project-roadmap-31247c8eb015

あなたがモバイルアプリを作るべき理由や、作るためのロードマップについて、
解説がなされた記事です。

ペットアプリを題材に、どのようにアイデアを出すか、
どのように構築をしていくかを丁寧に解説されています。

### Flutter Riverpod

https://www.reddit.com/r/FlutterDev/comments/wrk5u8/flutter_riverpod/

Flutterの状態管理手法であるRiverpod についての解説記事2本です。

Part 1では利用方法の例が紹介され、
Part 2ではネットワーク通信との連携について解説がなされています。

## Flutter大学メンバーがリリースしたアプリ

### タコチャート ~ 仲間と作る、あなたの「トリセツ」作成サービス ~

https://apps.apple.com/jp/app/%E3%82%BF%E3%82%B3%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88/id1635977050

https://play.google.com/store/apps/details?id=net.snootech.takochart

manabu さんにより、仲間と作る、あなたの「トリセツ」作成サービス 、
『タコチャート』がリリースされました！

アプリ内のアンケートによる自己評価と、
あなたに対するアンケートによる他己評価を比較することができるアプリです。

フレンド5人から評価を受けると比較ができるようになる、というシステムが、
輪が広がっていく感じがしてとても良いなと思いました！
また、アプリ内の細かい部分にアニメーションが設定されているのもとても素敵でした！

## Flutter大学メンバーによる記事

### **FireStoreのセキュリティールールについて学んでみる**

https://zenn.dev/joo_hashi/articles/73f4a5a8cc8b30

FireStore のセキュリティルールについてFlutterと組み合わせた際の体験談の記事です。

いくつかルールを書いて検討しながら、ルールを設定している様子を見ることができます。

### **go_routerやって躓いたところ!**

https://zenn.dev/joo_hashi/articles/fcc29035cb6835

ルーティングパッケージ、go_router の利用方法について、
自作のサンプルアプリを紹介した記事です。

公式ドキュメントに則りつつ、実際に動くサンプルを紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、
2022年8月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/8/22）

今週のFlutterニュースでした。

今回、Flame Game Jamというアプリコンテスト、
を紹介しました。

アプリコンテストといえば、
先週末開催されたとあるアプリコンテストの予選で、
Flutter大学メンバーが参加し、最優秀賞を見事獲得していました。

最優秀賞を獲得したことは本当にすごいのですが、
それ以上に、5人のエンジニアがFlutterハウス(Flutter大学メンバーのシェアハウス)
に集まって一つのアプリを作り上げた、その様子がとても楽しそうで良いな、
と思いました。

個人開発もいいですが、チーム開発もやっぱり楽しいですよね。

またチーム開発してみたいな、と思う出来事でした。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。