---
title: "【 Flutter 】Medium & Large AppBar の実装【 Material 3 】"
slug: "flutter-medium-large-appbar"
description: ""
pubDatetime: "2022-09-21"
author: "Aoi"
tags: ["Package"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

**Flutter 3.3 で更新された、Medium とLarge のAppBar を使ってみたい！**

本記事では、そんな要望にお応えします。

Fluttter 3.3 で更新が告知された、Material 3 に対応したMedium とLarge の`AppBar`の
実装方法について解説します。

以下のような`AppBar`を簡単に実装可能です。

![](http://34.145.4.125/wp-content/uploads/2022/09/20220921_large_app_bar.gif)

ぜひ読んでみてください！

本記事ではMedium と Large の `AppBar`の実装に注目して解説を行います。
Material 3での色の変化等には触れませんので、ご了承ください。

## Medium & Large のAppBarとは

Medium & Large の`AppBar`とは、Material 3 で新たにタイプ分けされた、
AppBarのタイプとなります。

タイトルが一段下がった部分にある`AppBar`で、
スクロール時にはタイトルが通常の`AppBar`同様に、
`AppBar`の中心に移動します。

詳細は以下のページをご覧ください。

https://m3.material.io/components/top-app-bar/overview

## 実装方法

### 準備

ベースとなるアプリのコードは以下となります。

ベースコード
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const AppBarSample(),
    );
  }
}

class AppBarSample extends StatelessWidget {
  const AppBarSample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          const SliverAppBar(
            title: Text('AppBar Sample'),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (BuildContext context, int index) {
                return Container(
                  height: 48,
                  color: index.isEven ? Colors.white : Colors.black12,
                  child: Center(
                    child: Text(
                      'list item $index',
                      style: const TextStyle(fontSize: 24),
                    ),
                  ),
                );
              },
              childCount: 100,
            ),
          ),
        ],
      ),
    );
  }
}
```

Medium & Large の`AppBar`の実装には、`SliverAppBar`を用います。

そのため、リストを`CustomScrollView`で囲み、`SliverAppBar`を使用して記述しています。

### Medium & Large のAppBarの実装

Medium & Large の`AppBar`の実装方法は、
`SliverAppBar`を`SliverAppBar.medium`, `SliverAppBar.large`にそれぞれ変えるだけです。

```dart
slivers: [
          SliverAppBar.large(
            title: const Text('AppBar Sample'),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (BuildContext context, int index) {
                return Container(
                  height: 48,
                  color: index.isEven ? Colors.white : Colors.black12,
                  child: Center(
                    child: Text(
                      'list item $index',
                      style: const TextStyle(fontSize: 24),
                    ),
                  ),
                );
              },
              childCount: 100,
            ),
          ),
        ],
```

これだけで、以下のGIFのような挙動をする`AppBar`となります。

![](http://34.145.4.125/wp-content/uploads/2022/09/20220921_large_app_bar.gif)

実装方法については以上となります。

全体のコード
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const AppBarSample(),
    );
  }
}

class AppBarSample extends StatelessWidget {
  const AppBarSample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar.large(
            title: const Text('AppBar Sample'),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (BuildContext context, int index) {
                return Container(
                  height: 48,
                  color: index.isEven ? Colors.white : Colors.black12,
                  child: Center(
                    child: Text(
                      'list item $index',
                      style: const TextStyle(fontSize: 24),
                    ),
                  ),
                );
              },
              childCount: 100,
            ),
          ),
        ],
      ),
    );
  }
}
```

## まとめ

本記事では、Fluttter 3.3 で更新が告知された、
Material 3 に対応したMedium とLarge の`AppBar`の
実装方法について解説しました。

いかがだったでしょうか？

とても簡単に実装できることがお分かりいただけたかと思います。

Material 3 に関わる部分で`AppBar`に関してはスクロール時に色が変わるようになるなど、
変更が入っています。

この部分の説明は割愛しますが、`ThemeData`の`useMaterial3`プロパティを`true`にするだけで
簡単に確かめられますので、ぜひ確認してみてください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://youtu.be/WvxPbpOOavk

## 編集後記（2022/9/21）

ワーケーションと題して西日本を転々とする旅も、
今日明日で終わりとなります。

この記事は福岡の[エンジニアカフェ](https://engineercafe.jp/ja/)、というところで書いています。

エンジニアなら無料で使える、ということで、かなりありがたい場所となっています。

座席によっては大きいモニターを自由に使えたりして、
本当にありがたいです。

福岡市赤煉瓦文化館という国の重要文化財の中にあり、
とても雰囲気が良いのも個人的な良いポイントでした。

福岡以外にも、このような取り組みの場所ができると良いな、と切に思います。

福岡にいらっしゃった際は、ぜひ足を運んでみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。