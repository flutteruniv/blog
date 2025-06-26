---
title: "Flutter ニュース 【2022年11月第4週】"
slug: "flutter-news-20221128"
author: "Aoi"
description: ""
pubDatetime: 2022-11-28T10:00:00.000Z
tags: ["ニュース"]
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年11月第4週に話題になったFlutter関連の情報や、  
アップされた記事の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.3.9 リリース！

https://twitter.com/FlutterReleases/status/1595458434538913792

Flutter のstable チャンネルにて、Flutter 3.3.9がリリースされました。

[Hotfixes一覧](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#339-nov-23-2022)によると今回のリリースでの修正点は以下となります。

*   [DartのWebでのmixin内のprivateな変数のセッターがエラーとなる問題の修正](https://github.com/dart-lang/sdk/issues/50119)
*   [factoryコンストラクタでの型パラメータのnull許容性が不確かな挙動を示す問題の修正](https://github.com/dart-lang/sdk/issues/50392)

## Flutterに関する話題

### AWS Amplify Flutter のWeb とDesktopへの対応

https://www.reddit.com/r/FlutterDev/comments/z12x9v/aws\_amplify\_flutter\_expands\_support\_for\_web\_and/

AWS Amplify がFlutter Web と Desktop に対応したとの投稿がRedditで話題となっていました。

ストレージやAuth 等が対応したとのことです。

### cameraAwesome プラグイン

https://www.reddit.com/r/FlutterDev/comments/z1t3yu/camerawesome\_100preview\_is\_ready/

Flutterでカスタマイズ性に優れたカメラインターフェースを実装するのに良い  
プラグインについての投稿がRedditで話題となっていました。

iOS / Android で利用が可能とのことです。

### info\_popup パッケージ

https://www.reddit.com/r/FlutterDev/comments/z1vlc7/the\_new\_popup\_package\_is\_ready/

吹き出しでメッセージを表示するポップアップの実装に便利なパッケージ、  
[info\_popup](https://pub.dev/packages/info_popup) パッケージがRedditで話題となっていました。

出現したときや消えた時の処理を実装できる等、カスタマイズ性に優れています。

### Appwrite 1.1 リリース

https://www.reddit.com/r/FlutterDev/comments/z2q69g/announcing\_appwrite\_11/

オープンソースでセルフホストなFirebaseの代替手段であるAppwriteのバージョン1.1が  
リリースされたとの投稿がRedditで話題となっていました。

コンソールのデザインの見直し等が行われたとのことです。

### FlutterでのMaterial 3対応

https://www.reddit.com/r/FlutterDev/comments/z3lo6p/material\_3\_specs\_recent\_updates/

FlutterでのMaterial 3対応についてまとめられた投稿です。

投稿内各リンクから、どのような対応がプルリクエストでなされているか見ることができます。

### Record 型の追加について

https://github.com/dart-lang/language/blob/master/accepted/future-releases/records/records-feature-specification.md

Dartで今後実装が予定されている`Record` 型についての導入意図や検討状況について  
まとめられた文章がRedditで話題となっていました。

Record型により、名前付きであるフィールドと位置によって決まるフィールドの両者を持つ  
フィールドの列を定義することが可能となります。(例は[こちら](https://github.com/dart-lang/language/blob/master/accepted/future-releases/records/records-feature-specification.md#introduction))

## Flutterに関する記事

### 2022年11月のニュースまとめ

https://codewithandrea.com/newsletter/november-2022/

2022年11月のFlutterに関するニュースや情報についてまとめられた記事です。

カンファレンスの情報やRiverpod 2.1等が取り上げられています。

### 初心者のためのFlutterチュートリアル, アプリを作るための step by step ガイド

https://www.solutelabs.com/blog/flutter-tutorial-for-beginners-step-by-step-guide

Flutterでアプリを作るためのチュートリアル記事です。

アプリを作成するにあたり知っておくと良い情報について、  
リンクを紹介する形で説明されています。

### Riverpod のデータキャッシュとプロバイダーのライフサイクル

https://codewithandrea.com/articles/flutter-riverpod-data-caching-providers-lifecycle/

Riverpodの内部処理として、どのようにデータをキャッシュしているか、  
プロバイダーのライフサイクルはどうなっているのかについて解説された記事です。

プロバイダーの初期化タイミングや、いつdisposeされるのか等について、  
図解付きで解説されています。

## Flutter大学メンバーによる記事

### MySQL8Quickを公開する

https://qiita.com/dongri727/items/7d9cb406b81a507489db

自作のアプリケーションをGitHubに公開するに至った経緯について書かれた記事です。

記事内のGitHubリンクでは、MySQLに接続し、  
クエリを記入し実行できるアプリが公開されています。

### **【Flutter Widget of the Week #25】Alignを使ってみた**

https://zenn.dev/faucon/articles/db643d94debbfe

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で  
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回はウィジェットの位置を調整する、**`Align`**についての解説記事となっています。

### **【Flutter Widget of the Week #26】Positionedを使ってみた**

https://zenn.dev/faucon/articles/03e0bb753710b1

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で  
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回はウィジェットの位置を数値で調整する、**`Positioned`**についての解説記事となっています。

### **【Flutter Widget of the Week #27】AnimatedBuilderを使ってみた**

https://zenn.dev/faucon/articles/2a57639089925c

Flutter 公式のウィジェット紹介動画シリーズ、Widget of the Week で  
紹介されたウィジェットを、一つ取り上げて解説する記事です。

今回はアニメーションを実現する、`AnimatedBuilder`についての解説記事となっています。

### **【Flutter】【AndroidStudio】fvm + dart-define使用時のブレークポイント設定**

https://zenn.dev/tsukatsuka1783/articles/flutter\_fvm\_dart\_define

Android Studio でFlutterのバージョン管理ツールのFVMと環境分けのdart-define使用時に、  
Android StudioのUI上のボタンからデバッグ実行ができるようにする  
方法について書かれた記事です。

スクショ付きでわかりやすく解説がなされています。  

### **\[Flutter\] 選択したタブだけ目立たせる**

https://zenn.dev/hikaru24/articles/4dd35c29c40f37

タブを選択すると選択したタブのみが濃い色になるタブバーの実装方法について書かれた記事です。

サンプルコードの紹介と解説が丁寧になされています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20221121/

https://blog.flutteruniv.com/widget-divider/

https://blog.flutteruniv.com/widget-icon/

## まとめ

本記事ではFlutterニュースとして、  
2022年11月第4週に話題になったFlutter関連の情報や、  
アップされた記事の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/11/28）

今週のFlutterニュースでした。

本記事内でカメラについてのプラグインを紹介しました。  
カメラと言えば、自分のiPhoneのカメラの調子が悪いです。

光が写り込んだり、写すものの逆さになった画像が写真撮影時に表示されたりします。  
おそらくレンズに傷がついていたり、汚れていたりが原因なのだと思っています。

これを機会にiPone14に買い換えるか、  
我慢して来年のiPhone 15 ？ を待つかは悩みどころですね。

明るい場所では目立たず綺麗な写真が撮れるので、  
あと1年位我慢しようかな、と思います。

もし手軽に治す方法があったら教えていただけますと幸いです。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。