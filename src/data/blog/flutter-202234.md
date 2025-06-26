---
title: "Flutterニュース 【2022年3月第4週】"
author: "Aoi"
description: ""
pubDatetime: 2022-03-28T10:00:00.000Z
categories: ["news"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)

Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年3月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutterに関する話題

### どのIDEを使っているかのアンケート

https://www.reddit.com/r/FlutterDev/comments/tkt7f2/which\_ide\_do\_u\_use/

IDE(統合開発環境)として何を使っているか、  
アンケートをとったスレッドがRedditで話題となっていました。

Android Studioが約24%、VScodeが約61%という結果で、  
VScodeを使っている人が多いようです。  
（詳しい得票数は上のリンクからご確認ください。）

IDEの選択の参考になれば幸いです。

### Flutter Puzzle Hack 作品集

https://fluttergems.dev/flutter-puzzle-hack/

今年行われたハッカソンであるFlutter Puzzle Hack の投稿作品で、  
選りすぐりのものを紹介しているページです。

実際にプレイできるページのリンクや、  
ソースコードなどがまとめられています。

### flutter\_tree パッケージ

https://pub.dev/packages/flutter\_tree

Flutterで以下のようなツリー構造を実装できるパッケージ、  
flutter\_treeが話題となっていました。

*   あああ
    *   いいい
    *   ううう

タップで出すように設定する、  
出るまでのローディングを表示する、など色々とできるようです。

### audio\_waveforms パッケージ

https://pub.dev/packages/audio\_waveforms

音声録音と録音中の波形を表示してくれるパッケージ、  
audio\_waveformsがRedditで話題となっていました。

まだリリースしたてのようですが、  
見た目よく音声録音したいアプリに良いパッケージです

### install\_referrer パッケージ

https://pub.dev/packages/install\_referrer

アプリがどこからインストールされたものかを検知するプラグイン、  
install\_referrerが話題となっていました。

iOSだったら、AppStoreからインストールされたものか、  
TestFlightからインストールされたものかを検知できるようです。

## Flutterに関する記事

### FlutterのCupertinoTabBarの高さやTextStyleを自由に変更したい

https://qiita.com/deodeo\_mg/items/ba41cd57b8b001ce07ae

CupertinoTabBarの高さやTextStyleを自由に変更する方法についての記事。

この記事で、既存のWidget クラスを継承して、  
必要な部分をオーバーライドして書き換える、という方法について学べます。

### FlutterでChromeの拡張機能を作ろう

https://cswithiyush.hashnode.dev/lets-build-a-chrome-extension-using-flutter

Chromeの拡張機能をFlutterで作る方法についての解説記事です。

設定はごく僅かで、簡単にChromeの拡張機能としてアプリを作成できます。

こちらの記事の日本語版として、週刊Flutter大学で記事を出しています。  
合わせてご確認ください。

https://blog.flutteruniv.com/fluttter-chrome-extension/

### Cocoapodを使ってFlutterモジュールを統合しよう

https://itnext.io/integrate-flutter-modules-with-cocoapods-a984dc671382

既存のiOSプロジェクトにflutterを埋め込むのを楽にする方法として、  
cocoapods-embed-flutterプラグインを使う方法を紹介した記事が話題になっていました。

公式の複雑な方法に対し、シンプルに解決できるとのことです。

### Flutterのプロジェクト構造：機能優先か、レイヤー優先か？

https://codewithandrea.com/articles/flutter-project-structure/

Flutterのプロジェクト内のフォルダ分けの方法について、  
先週紹介したRiverpod のアーキテクチャをベースに、  
レイヤー優先で分ける方法と、機能優先で分ける方法の紹介記事です。

フォルダ分けの方法に悩んでる方は一度読んでみることをお勧めします。

### FlutterのBoxDecoration バックグラウンドアニメーションの修正

https://itnext.io/fixing-boxdecoration-background-animation-in-flutter-bb935653f884

Containerをアニメーションで変化させる際、  
どのようにしたらスムーズに変化させられるか、の考察記事です。

結論として作成された筆者のパッケージも紹介されており、  
記事内で比較のgifが提示されています。

## Flutterに関する動画

### Flutterでマインスイーパを作ろう

https://www.youtube.com/watch?v=gYMf3AC0mPk

Flutterでマインスイーパを作ろう、という動画です。

コーディングの様子を流しているだけの動画ですが、  
特別なパッケージも使わずにシンプルにマインスイーパを作成しています。

## Flutter大学のメンバーによる記事

### FlutterのWidgetについて学び直してみる

https://qiita.com/JunichiHashimoto/items/e3bab2bab0b4c414a8fe

基礎的なWidgetの使い方についての紹介記事です。

スクリーンショットやコードを交えて、色々な用法を紹介されています。

### 【Flutter】just\_audioを使って音声ファイルを再生する

https://qiita.com/heyhey1028/items/4d342e24cc168db378e1

Flutterで音声ファイルを再生可能にするパッケージ、  
just\_audioの使い方の解説記事です。

一つ一つ、図や動画も交えて丁寧に解説されています。

### 【Flutter】音声ファイルをバックグラウンド再生する

https://qiita.com/heyhey1028/items/0504730eb594c7e5f59a

音声ファイルのバックグラウンド再生を可能にする実装方法についての解説記事です。

上のjust\_audioパッケージに加えて、audio\_seriveパッケージの使用方法について、  
丁寧に解説されています。

バックグラウンドでのプログレスバーの動作にも対応しており、  
かなり参考になる記事かと思います。

### FlutterのLogin画面のバリデーションについて学んでみた!

https://qiita.com/JunichiHashimoto/items/79f326dd35ff391e7447

Login画面の入力フォームをベースに、  
TextFormFieldのvalidationの方法について学べる記事です。

正規表現を使った書き方についても学ぶことができます。

### MultiProvider classとは?

https://qiita.com/JunichiHashimoto/items/79fad698dc0e57273d37

Flutterの状態管理手法、ProviderのMultiProviderについて解説した記事です。

サンプルをベースにわからないところを試行錯誤し、解決されています。

### MVVM学んでみる

https://qiita.com/JunichiHashimoto/items/adbaf705498bc22c7354

Providerを使ったシンプルなサンプルプロジェクトの紹介記事です。

ViewModelとViewの分離をしっかり行い、  
リストビューへの反映をさせています。

基礎を学ぶのに良いプロジェクトだと思います。

### **【Flutter×Firebase】ユーザーのブロック機能の実装**

https://zenn.dev/hikaru24/articles/ebc647a169cbfe

Flutter × Firebaseでのユーザーのブロック機能の実装方法についての解説記事です。

コードベースで実装方法を解説されています。

投稿型アプリでAppleの審査を受ける際に必須となる機能なので、  
この実装例を提示してもらえるのは助かりますね。

### **flutter\_native\_splash エラーで１日無くなった話・・・**

https://zenn.dev/hikaru24/articles/0d58c7acc71711

flutter\_native\_splashを使っていて詰まった点の共有記事です。

タイプミスは見つけるのに時間がかかるので、  
このような事例の共有はありがたいです。

### 【Flutter】AndroidのエミュレータでGoogleMapが表示されない時の解決法

https://zenn.dev/wakanao/articles/9ed5be61d25419

google\_maps\_flutterとgeolocatorを使ってGoogle Mapの表示を実装するにあたり、  
エミュレータでの表示がされない原因とその解決策についての記事です。

結構落とし穴なポイントかと思います。  
事例として覚えておきたいです。

### **FlutterWebでFirebaseAuthのcurrentUserがリロード時にnullになることに対しての対処法**

https://zenn.dev/kboy/articles/4c398560a2518f

FlutterWebでFirebaseAuthのcurrentUserが  
リロード時にnullになることに対しての対処法について解説した記事です。

アプリにはないFlutterWeb特有のブラウザでのリロードに関する  
ハマりポイントについて解説されています。

FlutterWeb とFirebaseAuthを併用する際に覚えておきたいです。

## 週刊Flutter大学の記事

週刊Flutter大学で先週アップロードした記事を紹介します。

https://blog.flutteruniv.com/flutternews-20220321/

https://blog.flutteruniv.com/fluttter-chrome-extension/

https://blog.flutteruniv.com/flutter-snackbar-scaffoldmessenger/

https://blog.flutteruniv.com/flutteruniversity-slack/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、2022年3月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/3/28）

今週は特にFlutter大学メンバーの記事が多い週でした。  
週刊Flutter大学の記事も合わせるとなんと14本のFlutter関連の記事が上がっています。  
特に「今週集中して記事を書こう！」とか呼びかけしていません。  
それなのにこの本数は本当に凄いと思います。

12月のアドベントカレンダーはどうなってしまうんでしょう？  
2つくらいカレンダーを作らないと追いつかないかもしれませんね。

記事を書く、というのは頭の中の整理にもなるし、ノウハウの共有にもなる、  
一石二鳥の取り組みだと個人的に思っています。

ちょっとしたエラーの対処法についてまとめた記事でもなんでも良いので、  
みなさんもぜひ記事を書いてみてはいかがでしょうか。

きっとエンジニア生活が豊かになりますよ。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。