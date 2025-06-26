---
title: "【Flutter】一味違う ローディング を実装しよう！"
description: ""
pubDatetime: "2022-04-06"
author: "Aoi"
tags:
  - "Flutter"
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---



ローディング のアニメーション、なんかつまんないんだよなぁ。





もっとおしゃれなものにする方法はないかしら？




本記事では、そんな悩みにお答えします。



一味違うローディングのアニメーションの実装方法として、loading_animation_widgetパッケージを使った方法を紹介します。



例えば、こんなローディングが実装できます。







あなたのアプリの出来栄えをワンランク上げること間違いなしです！



ぜひ読んで見てください！



loading_animation_widget パッケージ







loading_animation_widget パッケージは、さまざまなローディングのアニメーションを提供してくれるパッケージです。



簡単に、一味違うローディングを実装可能です。



早速実装方法についてみていきましょう。



実装方法



パッケージのインストール



まず、パッケージをインストールします。



pubspec.yaml のdependenciesに以下のように追記します。



dependencies:
  flutter:
    sdk: flutter
  loading_animation_widget: ^1.1.0+3 #追記



追記したら flutter pub get をし、パッケージをインストールしましょう。



インポート



ローディングを実装したいdartファイルに以下の文を追加し、パッケージをインポートしましょう。



import 'package:loading_animation_widget/loading_animation_widget.dart';



これで利用する準備は完了です。



LoadingAnimationWidgetの追加



実装したい部分にLoadingAnimationWidgetを追加しましょう。



実装サンプルコードは以下の通りです。



import 'package:flutter/material.dart';
import 'package:loading_animation_widget/loading_animation_widget.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Loading Animation Demo Page'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.blue,
        appBar: AppBar(
          title: Text(title),
        ),
        body: Center(
          child: LoadingAnimationWidget.inkDrop(  //この部分
            color: Colors.white,
            size: 100,
          ),
        ));
  }
}




実装例



LoadingAnimationWidgetにはさまざまなアニメーションパターンのWidgetが用意されています。



本記事ではいくつかのパターンを紹介します。



inkDropパターン







LoadingAnimationWidget.inkDrop(
  color: Colors.white,
  size: 100,
),



staggeredDotsWaveパターン







LoadingAnimationWidget.staggeredDotsWave(
  color: Colors.white,
  size: 100,
),



flickrパターン







LoadingAnimationWidget.flickr(
  leftDotColor: Colors.greenAccent,
  rightDotColor: Colors.redAccent,
  size: 100,
),



その他



その他のアニメーションパターンについては、以下のページでgifで全て紹介されています。こちらを参照し、好きなものを選んでください。




https://pub.dev/packages/loading_animation_widget




まとめ







本記事では一味違うローディングのアニメーションの実装方法として、loading_animation_widgetパッケージを使った方法を紹介しました。



ローディングのアニメーションを変えるだけで、見た目がワンランク上のアプリになるので、loading_animation_widgetパッケージはおすすめです。



ぜひ、利用してみてください！



本記事があなたのアプリ開発の一助となれば幸いです。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










編集後記（2022/4/6）




今回はローディングのアニメーションに関する記事でした。



あなたはデータ読み込みやビルドの待ち時間、何に使っていますか？



自分はTwitterを見たり、Flutter大学のSlackを見たりなど、SNSを見て時間を潰してしまっています。



塵も積もれば山となる、と言いますが、この待ち時間も積み上げればかなりの時間になります。



サクッと待ち時間に英単語の勉強をしたり、ニュースサイトでニュース記事を読むようにすると、より生産性が高くなるんだろうな、と思います。



これからはおしゃれなローディング画面を見ながら、知識のキャッチアップを心がけていきたいと思います。





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

