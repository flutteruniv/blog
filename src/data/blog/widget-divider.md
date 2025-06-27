---
title: "【 Divider 】区切り線を実装しよう！【Flutter】"
slug: "widget-divider"
description: ""
pubDatetime: "2022-11-24"
author: "Aoi"
tags: ["Widget"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

「区切り線を実装したい！」

本記事ではそんな要望にお答えします。

区切り線を実装できるウィジェット、`Divider` ウィジェットについて解説します。

基本的な使い方からカスタマイズ方法まで詳細に解説します。

以下のような区切り線を実装することが可能です。

<img src="http://34.145.4.125/wp-content/uploads/2022/11/スクリーンショット-2022-11-24-20.49.46.png" alt="" width="300">

ぜひ読んでみてください！

## 基本的な使い方

区切り線を実装したい場所に、`Divider()`ウィジェットを配置することで区切り線が実装されます。

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
      body: Center(
        child: Column(
          children: [
            Container(
              width: 100,
              height: 100,
              color: Colors.red,
            ),
            const Divider(),
            Container(
              width: 100,
              height: 100,
              color: Colors.blue,
            ),
          ],
        ),
      ),
    );
  }
}
```

`Column`のような縦方向に並べたUIで区切り線が実装されます。

## カスタマイズ方法

カスタマイズ方法について解説します。

### 高さ

`Divider`の空白を含めた高さを`height`で設定できます。

<img src="http://34.145.4.125/wp-content/uploads/2022/11/スクリーンショット-2022-11-24-21.16.55.png" alt="" width="300">

```dart
Column(
          children: [
            Container(
              width: 100,
              height: 100,
              color: Colors.red,
            ),
            const Divider(
              height: 50,
            ),
            Container(
              width: 100,
              height: 100,
              color: Colors.blue,
            ),
          ],
        ),
```

### 色

区切り線の色を`color`にて設定可能です。

<img src="http://34.145.4.125/wp-content/uploads/2022/11/スクリーンショット-2022-11-24-21.18.50.png" alt="" width="300">

```dart
Column(
          children: [
            Container(
              width: 100,
              height: 100,
              color: Colors.red,
            ),
            const Divider(
              color: Colors.green,
            ),
            Container(
              width: 100,
              height: 100,
              color: Colors.blue,
            ),
          ],
        ),
```

### 線の太さ

線の太さを`thickness`で設定可能です。

<img src="http://34.145.4.125/wp-content/uploads/2022/11/スクリーンショット-2022-11-24-21.20.43.png" alt="" width="300">

```dart
Column(
          children: [
            Container(
              width: 100,
              height: 100,
              color: Colors.red,
            ),
            const Divider(
              thickness: 5,
            ),
            Container(
              width: 100,
              height: 100,
              color: Colors.blue,
            ),
          ],
        ),
```

### 前後の余白

前後の余白を`indent`、`endIndent`にて設定可能です。

<img src="http://34.145.4.125/wp-content/uploads/2022/11/スクリーンショット-2022-11-24-21.23.11.png" alt="" width="300">

```dart
Column(
          children: [
            Container(
              width: 100,
              height: 100,
              color: Colors.red,
            ),
            const Divider(
              indent: 24,
              endIndent: 48,
            ),
            Container(
              width: 100,
              height: 100,
              color: Colors.blue,
            ),
          ],
        ),
```

## まとめ

本記事では区切り線を実装できるウィジェット、Divider ウィジェットについて解説しました。

基本的な使い方からカスタマイズ方法まで詳細に解説しました。

いかがだったでしょうか。

シンプルながら使い勝手の良いウィジェットかと思います。

ぜひ使ってUIを実装してみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/11/24）

来週がもう12月という事実が受け入れられなくて参っています。

時間が経つのが早すぎますね...

12月はアドベントカレンダーなど、Flutter界隈を盛り上げるイベントが多くあります。

しっかりと準備して、思いっきり楽しみたいですね。

Flutter大学でもアドベントカレンダーを実施予定です。

Flutter大学メンバーなら誰でも参加可能なので、
もし参加したい方がいらっしゃいましたらぜひお声がけください。

今年もラストスパート、頑張っていきましょう！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。