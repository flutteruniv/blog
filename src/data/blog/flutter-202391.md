---
title: "Flutter ニュース 【2023年9月第1週】"
author: "Aoi"
description: ""
pubDatetime: 2023-09-04T10:00:00.000Z
tags: ["ニュース"]
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

不定期更新となっていましたが、今週から復活していきます！

本記事ではFlutterニュースとして、2023年9月第1週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.13.2 リリース！

https://twitter.com/FlutterReleases/status/1696944652522340583

FlutterのStable チャンネルにてVersion 3.13.2が利用可能となりました。

2次元スクロールに関するバグ修正が反映されたアップデートとなります。  
詳細は[こちら](https://twitter.com/FlutterReleases/status/1696944652522340583)。

2023/09/05追記  
Flutter 3.13から3.13.1へアップグレードすると、  
3.13.2へアップグレードする際にエラーが発生する不具合が発生しています。  
参考:[「flutter upgrade」したら「Unknown flutter tag. Abandoning upgrade to avoid destroying local changes.」という謎のエラーが発生した場合の対処法](https://minpro.net/unknown-flutter-tag-abandoning-upgrade-to-avoid-destroying-local-changes)  
この修正が行われたブランチは現在マージされており、CPとなっています。([ソース](https://github.com/flutter/flutter/issues/133819))  
おそらく次の3.13.3で対応されるはずです。  
急いで3.13.2にアップグレードする必要のない方は、3.13.3を待つことをおすすめします。

### Observable Flutter: Building with Stacked

https://www.youtube.com/live/06vVccZvGuo?si=WTe1RPf8mN\_gOWfs

Flutter公式チャンネルでObservable<Flutter>というライブ配信が行われました。

今回は、本番環境のアプリケーションを作成するためのフレームワーク、  
[Stacked](https://stacked.filledstacks.com/)を解説する配信となっています。  
Stacked のCLI を使って新規アプリを作成すると、Stackedの状態管理手法や  
画面遷移管理手法、テストなどが実装された状態で作成されるため、  
Stackedの書き方で短い時間でアプリを作成できるようです。

### home\_widget (Package of the Week)

https://youtu.be/L9cP9OTUstA?si=W1olnnpni0WNq7Cp

Flutter公式が有用なFlutterのパッケージを紹介する動画シリーズ、Package of the Week に  
最新動画が追加されました。

今回は、Android/iOSでホーム画面上のウィジェットを実装するためのプラグイン、  
[home\_widget](https://pub.dev/packages/home_widget)が取り上げられています。

## Flutterに関する話題

### Flutter Gems 3周年！

https://medium.com/@fluttergems/flutter-gems-turns-3-we-now-have-5500-flutter-packages-neatly-categorized-in-175-categories-507e8e6584a1

5500以上のFlutterのパッケージ/プラグインをカテゴリー別に分けて表示している、  
Flutterのパッケージ検索サイト、[Flutter Gems](https://fluttergems.dev/)が3周年を迎えた、という投稿が、  
Reditで話題となっていました。

3周年の追加で、Chat GPT や生成AI 関係のパッケージがカテゴライズされ、  
探索しやすくなったとのことです。

## Flutterに関する記事

### **カメラメーカーごとの Exif 情報の違いに困った話**

https://zenn.dev/lovegraph/articles/f851cb61a0dc37

Flutterを使用した個人開発中に直面した、  
メーカーによって値形式が統一されていないデータに対する対応について書かれた記事です。

記事内では整数、分数の混じったデータに対してDart でどう処理するかが書かれています。

### **Flutter Webでシンプルモダンな管理画面を開発する方法**

https://zenn.dev/tsuruo/articles/142d35b5e6395c#discuss

筆者の作成した、Flutter Web で管理画面を作成するのに有用なテンプレートを  
紹介している記事です。

宣言的ルーティングや2次元スクロールなど、  
管理画面で必要な機能をどうやって実装したのかが記載されています。

### **GraphQLサーバーは、本当にGoがTypeScriptより早いのか。Flutterからの呼び出しで検証する。**

https://zenn.dev/minedia/articles/344e302b883122

Flutter からGraphQLを用いる際に、  
GraphQL の実装サーバーとしてGOとTypeScriptのそれぞれを用意し比較した記事です。

実装の際に使ったツール等が丁寧に紹介されており、  
GraphQLの実装にチャレンジする際に参考となります。

### **Flutterのconstを書いたり消したり...疲弊した彼に送る〜鎮魂歌〜**

https://zenn.dev/chillnn\_tech/articles/c35418421c8c08

Flutter のconstに関するワーニング、エラーを一括で修正するための設定、コマンドについて  
紹介された記事です。

Constのワーニングは非常によく出るものなので、  
コマンド1発で一括で修正できるのはかなり助かるのではないでしょうか。

### Riverpodを使ったFlutterアプリのアーキテクチャ 導入 (更新版)

https://codewithandrea.com/articles/flutter-app-architecture-riverpod-introduction/

状態管理や依存性注入に役立つパッケージ、Riverpodを使ったFlutterアプリで、  
どうコードを書いていけば、わかりやすく、冗長でないコードになるか、  
という一例を挙げている記事です。

全体を掴むための導入記事であり、後半のリンクからより詳しい書き方を学ぶことができます。

## Flutter大学メンバーによる記事

今週Flutter大学メンバーが書いた記事は以下になります！

[Serverpod ~ Listで検索する](https://zenn.dev/flutteruniv_dev/articles/c09ccebe93bc6b)  
[textをListにする](https://zenn.dev/flutteruniv_dev/articles/37839a7212e2ef)  
[userの選択に応じて表示内容や関数を変更する](https://zenn.dev/flutteruniv_dev/articles/3cd727cc56d2f2)  
[Serverpod ~ForeignKeyはNullableという発見](https://zenn.dev/flutteruniv_dev/articles/0df41726f21b14)

## まとめ

本記事ではFlutterニュースとして、  
2023年9月第1週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2023/9/4）

お久しぶりです、Aoiです。

今年の始めから体調を崩してしまい、  
週間Flutter大学の更新ができなくなってしまっていました。

記事を楽しみにされていた方にはご迷惑をおかけし、  
本当に申し訳ございませんでした。

先日ある程度復活しましたので、今週からFlutterニュースを投稿していきます。

今後ですが、毎週のFlutterニュースの更新、  
不定期でFlutterの技術情報(Widgetの使い方等)を更新できれば、と思っています。

ぜひ楽しみにお待ち下さい！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。