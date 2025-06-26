---
title: "【 Placeholder 】場所取り用のウィジェットを使おう! 【 Flutter 】"
author: "Aoi"
description: ""
pubDatetime: 2022-11-09T10:00:00.000Z
tags: ["ウィジェット"]
---

**「後から画像を配置する場所を一時的に取っときたいんだけど、いい方法ないかな？」**

本記事ではそんな疑問にお答えします。

FlutterでUIを作成する際の場所取りに有用な仮置きのウィジェット、  
`Placeholder` ウィジェットについて解説します。

本記事を読めば、以下画像のようにUIの場所取りをすることが可能です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/11/スクリーンショット-2022-11-09-17.21.00-565x1024.png)

画像のサンプルコード

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyWidget(),
    );
  }
}

class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          const Placeholder(
            fallbackHeight: 300,
            color: Colors.red,
            strokeWidth: 5,
          ),
          Row(
            children: const [
              Placeholder(
                fallbackWidth: 300,
                fallbackHeight: 500,
                color: Colors.blue,
                strokeWidth: 5,
              ),
            ],
          ),
          const Placeholder(
            fallbackHeight: 100,
            color: Colors.green,
            strokeWidth: 5,
          ),
        ],
      ),
    );
  }
}
```

基本的な使い方からカスタマイズ方法まで、詳細に解説します。

ぜひ読んで使ってみてください！

## 基本的な使い方

基本的な使い方について解説します。

場所取りをしたい場所に、`Placeholder` ウィジェットを置くだけで、  
対角線が引かれた長方形のUIが配置されます。

```dart
      Column(
        children: [
          SomeWidgetA(),
          Placeholder(),
          SomeWidgetB(),
        ],
      ),
```

基本的な使い方は以上です！

## カスタマイズ方法

カスタマイズ方法について解説します。

### サイズ

`Column`等で囲まれた際の縦方向のサイズは、`fallbackHeight`プロパティで設定できます。  
`Row`等で囲まれた際の横方向のサイズは、`fallbackWidth`プロパティで設定できます。

```dart
Placeholder(
  fallbackWidth: 300,
  fallbackHeight: 500,
),
```

### 色

`Placeholder`の図形の色は、`color`プロパティで設定できます。

```dart
Placeholder(
  color: Colors.blue,
),
```

### 線の太さ

`Placeholder`の図形の線の太さは、`strokeWidth`プロパティで設定できます。

```dart
Placeholder(
  strokeWidth: 5,
),
```

カスタマイズ方法は以上となります！

## まとめ

本記事では、FlutterでUIを作成する際の場所取りに有用な仮置きのウィジェット、  
`Placeholder` ウィジェットについて解説しました。

基本的な使い方からカスタマイズ方法まで詳細に解説しました。

いかがだったでしょうか？

UI構築の初期段階でデザインが決まっていなかったり、  
画像データを外部から読み込む際の、仮置きだったりにとても有用なウィジェットかと思います。

ぜひ利用してみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/4/21）

本記事では`Placeholder` ウィジェットについて解説を行いました。

このウィジェットのサイズの指定方法が、少し癖があって難しい、と感じました。

例えば、`Column`では横方向のサイズの指定が\`Placeholderだけではできない、  
等があります。

ここらへんを理解するには`RenderObject`周りの仕様や、  
`Column`でのサイズ指定の仕様をしっかり理解していかなければならないと思っています。

まだまだ勉強不足なので、ここらへんを学んでいきたいです。

良い参考文献等ありましたらお教えいただけますと幸いです。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。