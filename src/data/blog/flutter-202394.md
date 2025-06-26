---
title: "Flutter ニュース 【2023年9月第4週】"
author: "Aoi"
description: ""
pubDatetime: 2023-09-25T10:26:03.000Z
tags: ["ニュース"]
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2023年9月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.13.5リリース！

https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#3135-september-20-2023

FlutterのStable チャンネルにてVersion 3.13.5が利用可能となりました。

iOS17での実機に対するProfileモードでのビルドがインストールされない問題等が解消されたそうです。

詳細は上のリンクから。

### Flutter 製モバイルアプリ、YouTube Create

https://twitter.com/flutterdev/status/1704918767774429575

YouTube動画の編集が行えるアプリケーション、YouTube CreateがFlutterで作成されている、  
とFlutter公式からアナウンスがありました。

現状はAndroid アプリとしてのみ配信がなされているとのことです。

## Flutterに関する話題

### sakura\_blizzard パッケージ

https://www.reddit.com/r/FlutterDev/comments/16qyebr/sakura\_blizzard\_package/

桜が散っているような背景を実装できるパッケージ、sakura\_blizardパッケージがRedditで話題となっていました。

桜だけでなく、カラフルなキューブが3D回転しながら落ちてくる背景も実装できます。

### croppy パッケージ

https://pub.dev/packages/croppy

画像を円形や星形など様々な形で切り抜くことのできるパッケージ、CroppyパッケージがRedditで話題となっていました。

パッケージのほぼ全てがFlutterのフレームワーク内で作成されており、マルチプラットフォーム対応がされているパッケージとなっています。

## Flutterに関する記事

### **Flutterアプリケーション開発にRiverpodを僕が使う理由**

https://zenn.dev/koji\_1009/articles/18a8a54b615ae7

Flutterにおける状態管理について述べた上で、Riverpodがどのような特徴があり、筆者が採用しているのかについて解説された記事です。

InheritedWidget 、 Provider等にも触れつつ、  
その中でのDependency Injection 等のRiverpodの特徴が紹介されています。

### **【Flutter】App Check を導入して Firebase を守ろう！**

https://zenn.dev/flutteruniv\_dev/articles/20230316-172748-flutter-firebase-app-check

Firebaseの各リソースに対し、製作者の承認のないユーザーからのアクセスを防止するサービス、  
AppCheckをFlutterアプリに導入する方法について書かれた記事です。

そもそもの仕組みやiOS、Androidの設定方法など、図解やスクリーンショットを用いて解説がなされています。

### How to Fetch Data and Perform Data Mutations with the Riverpod Architecture

https://codewithandrea.com/articles/data-mutations-riverpod/

データ層からのデータの取得と、データの変更をRiverpodを用いてどのように行うかについて解説された記事です。

図解やコードブロックを用いて詳細に解説がなされています。

### The Power ofthelate keyword in Dart

https://thiele.dev/blog/the-power-of-late-keyword-in-dart/

変数宣言時に使用するlate に関するtips についてまとめられた記事です。

getter の使用に対する代替案としての紹介等がなされています。

## Flutter大学メンバーによる記事

今週Flutter大学メンバーが書いた記事は以下になります！

**[Simulatorを失って取り戻した話（失敗学）](https://zenn.dev/flutteruniv_dev/articles/36747dc661d1b6)**

## まとめ

本記事ではFlutterニュースとして、  
2023年9月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2023/9/25）

キャリア形成の上でFlutterという選択が正しいのか？というX上のポストがFlutter大学のSlack内で話題に上がりました。

このポストの意見としては、Flutterというフレームワーク、Dartという言語は代替手段が限られている、  
Flutterが廃止になった時にエンジニアとして他のステップに移動するのが難しくなる、  
だからFlutterという選択をする際は、慎重になった方が良い、ということでした。  
広く使われている、という視点に立つなら、JavaScriptに通ずるReact等の選択肢もある、  
という意見です。

このポストの意見は間違えてないと思ってます。  
エンジニアとして働くと決めた人が参考にする意見としては賢い意見だと思います。

じゃあFlutterは選んじゃダメなのか、と言われると、そんなこともないと思っています。  
自分は、無駄な選択肢など存在しない、と昔から考えています。  
一見遠回りでも、後々間違えた、と思った選択肢でも、  
その選択肢で得た経験などは決して無駄にならないです。  
なので、その人がその時点で一番大事にしているものを守れる選択ができてさえすれば、  
例えその選択肢が途中で途絶えたとしても、  
そこで得た経験から次のステップに踏み出せると思います。

Flutterは大変魅力のあるフレームワークです。  
Flutter自体もそうですし、オープンソースであることや、コミュニティの活発さ等、  
選択する理由は十分すぎるほどあると思っています。

あなたが今、一番大切にしているものが何でしょうか？  
何を選択したらそれを守れるのか、じっくりと考えてみてください。  

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。