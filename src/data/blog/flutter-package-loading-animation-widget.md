---
layout: "../../layouts/BlogPost.astro"
title: "【Flutter】一味違う ローディング を実装しよう！"
description: ""
pubDatetime: "2022-04-06"
author: Aoi
slug: "flutter-package-loading-animation-widget"
featured: false
draft: false
tags: ["Package", "Flutter"]
ogImage: ""
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="http://34.145.4.125/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      ローディング のアニメーション、なんかつまんないんだよなぁ。
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="http://34.145.4.125/wp-content/themes/cocoon-master/images/obasan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      もっとおしゃれなものにする方法はないかしら？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

本記事では、そんな悩みにお答えします。

一味違うローディングのアニメーションの実装方法として、
[loading_animation_widget](https://pub.dev/packages/loading_animation_widget)パッケージを使った方法を紹介します。

例えば、こんなローディングが実装できます。

![](http://34.145.4.125/wp-content/uploads/2022/04/20220406_inkdrop.gif)

あなたのアプリの出来栄えをワンランク上げること間違いなしです！

ぜひ読んで見てください！

## loading_animation_widget パッケージ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

[loading_animation_widget](https://pub.dev/packages/loading_animation_widget) パッケージは、
さまざまなローディングのアニメーションを提供してくれるパッケージです。

簡単に、一味違うローディングを実装可能です。

早速実装方法についてみていきましょう。

### 実装方法

#### パッケージのインストール

まず、パッケージをインストールします。

`pubspec.yaml `の`dependencies`に以下のように追記します。

```
dependencies:
  flutter:
    sdk: flutter
  loading_animation_widget: ^1.1.0+3 #追記
```

追記したら `flutter pub get `をし、パッケージをインストールしましょう。

#### インポート

ローディングを実装したいdartファイルに以下の文を追加し、パッケージをインポートしましょう。

```
import 'package:loading_animation_widget/loading_animation_widget.dart';
```

これで利用する準備は完了です。

#### LoadingAnimationWidgetの追加

実装したい部分に`LoadingAnimationWidget`を追加しましょう。

実装サンプルコードは以下の通りです。

```dart
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
```

### 実装例

`LoadingAnimationWidget`にはさまざまなアニメーションパターンの`Widget`が用意されています。

本記事ではいくつかのパターンを紹介します。

#### inkDropパターン

![](http://blog.flutteruniv.com/wp-content/uploads/2022/04/20220406_inkdrop.gif)

```
LoadingAnimationWidget.inkDrop(
  color: Colors.white,
  size: 100,
),
```

#### staggeredDotsWaveパターン

![](http://34.145.4.125/wp-content/uploads/2022/04/20220406_staggerd_dots_wave.gif)

```
LoadingAnimationWidget.staggeredDotsWave(
  color: Colors.white,
  size: 100,
),
```

#### flickrパターン

![](http://34.145.4.125/wp-content/uploads/2022/04/20220406_flickr.gif)

```
LoadingAnimationWidget.flickr(
  leftDotColor: Colors.greenAccent,
  rightDotColor: Colors.redAccent,
  size: 100,
),
```

#### その他

その他のアニメーションパターンについては、以下のページでgifで全て紹介されています。
こちらを参照し、好きなものを選んでください。

https://pub.dev/packages/loading_animation_widget

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング女性.jpeg)

本記事では一味違うローディングのアニメーションの実装方法として、
[loading_animation_widget](https://pub.dev/packages/loading_animation_widget)パッケージを使った方法を紹介しました。

ローディングのアニメーションを変えるだけで、
見た目がワンランク上のアプリになるので、
loading_animation_widgetパッケージはおすすめです。

ぜひ、利用してみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/4/6）

今回はローディングのアニメーションに関する記事でした。

あなたはデータ読み込みやビルドの待ち時間、何に使っていますか？

自分はTwitterを見たり、Flutter大学のSlackを見たりなど、
SNSを見て時間を潰してしまっています。

塵も積もれば山となる、と言いますが、
この待ち時間も積み上げればかなりの時間になります。

サクッと待ち時間に英単語の勉強をしたり、
ニュースサイトでニュース記事を読むようにすると、
より生産性が高くなるんだろうな、と思います。

これからはおしゃれなローディング画面を見ながら、
知識のキャッチアップを心がけていきたいと思います。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。