---
title: "【 dotted_border 】点線の枠線を実装しよう！【flutter】"
slug: "flutter_dotted_border"
author: "Aoi"
description: ""
pubDatetime: "2022-09-30"
tags: ["Package"]
layout: "../../layouts/BlogPost.astro"
---

**点線の枠線を実装したい！**

本記事ではそんな要望にお答えします。

Flutterで 点線の枠線を実装できるパッケージ、
[dotted_border](https://pub.dev/packages/dotted_border) パッケージを紹介します。

本記事を読めば、以下の画像のようなUIを実装可能です。

<img src="/images/wp-content/uploads/2022/09/スクリーンショット-2022-09-30-22.17.10.png" alt="" width="300">

基本的な使い方から、カスタマイズ方法まで解説します。

ぜひ読んでみてください！

## 基本的な使い方

### 準備

まず準備として、パッケージのインストールと、
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add dotted_border
```

#### パッケージのインポート

実装したいDartファイルの上部に以下のインポート文を追加し、
パッケージをインポートします。

```dart
import 'package:dotted_border/dotted_border.dart';
```

### 実装

実装方法について解説します。

点線の枠線で囲いたいウィジェットを`DottedBorder` ウィジェットで囲うことで、
点線の枠線を実装できます。

```dart
DottedBorder(
  child: ...
),
```

サンプルコード全体
```dart
import 'package:dotted_border/dotted_border.dart';
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
      appBar: AppBar(
        title: const Text('dotted_border sample'),
      ),
      body: Center(
        child: DottedBorder(
          child: const SizedBox(
            width: 300,
            height: 300,
          ),
        ),
      ),
    );
  }
}
```

基本的な使い方は以上となります。

## カスタマイズ方法

dotted_border パッケージ でのカスタマイズ方法について解説していきます。

### 枠線の色

`color`プロパティにて枠線の色を設定することが可能です。

```dart
DottedBorder(
          color: Colors.blue,
          child: const SizedBox(
            width: 300,
            height: 300,
          ),
        ),
```

<img src="/images/wp-content/uploads/2022/09/スクリーンショット-2022-09-30-22.26.19.png" alt="" width="300">

### 枠線の外形

`borderType` プロパティにて、枠線の全体の形を設定可能です。

#### BorderType.RRect

`radius` プロパティで設定した半径を持つ曲線を角に設定することができます。

```dart
DottedBorder(
          borderType: BorderType.RRect,
          radius: const Radius.circular(50),
          child: const SizedBox(
            width: 400,
            height: 300,
          ),
        ),
```

<img src="/images/wp-content/uploads/2022/09/スクリーンショット-2022-09-30-22.29.02.png" alt="" width="300">

#### BorderType.Circle

円の枠線を設定可能です。

```dart
DottedBorder(
          borderType: BorderType.Circle,
          child: const SizedBox(
            width: 400,
            height: 300,
          ),
        ),
```

<img src="/images/wp-content/uploads/2022/09/スクリーンショット-2022-09-30-22.34.17.png" alt="" width="300">

#### BorderType.Circle

楕円の枠線を設定可能です。

```dart
DottedBorder(
          borderType: BorderType.Oval,
          child: const SizedBox(
            width: 400,
            height: 300,
          ),
        ),
```

<img src="/images/wp-content/uploads/2022/09/スクリーンショット-2022-09-30-22.34.33.png" alt="" width="300">

### 線の太さ

`strokeWidth` プロパティにて、枠線の太さを設定可能です。

```dart
DottedBorder(
          strokeWidth: 5,
          child: const SizedBox(
            width: 400,
            height: 300,
          ),
        ),
```

<img src="/images/wp-content/uploads/2022/09/スクリーンショット-2022-09-30-22.36.19.png" alt="" width="300">

### 点線の間隔

`dashPattern`プロパティにて、点線の間隔を設定可能です。
前の数字で線の長さ、後ろの数字で間隔の長さとなります。

```dart
DottedBorder(
          dashPattern: const [5, 10],
          child: const SizedBox(
            width: 400,
            height: 300,
          ),
        ),
```

<img src="/images/wp-content/uploads/2022/09/スクリーンショット-2022-09-30-22.40.54.png" alt="" width="300">

## まとめ

本記事では、Flutterで 点線の枠線を実装できるパッケージ、
[dotted_border](https://pub.dev/packages/dotted_border) パッケージを紹介しました。

基本的な使い方からカスタマイズの方法まで詳しく解説しました。

いかがだったでしょうか？

ウィジェットを`DottedBorder` ウィジェットで加工だけで実装できるのは、
かなりお手軽なように思えます。

ぜひ使ってみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/9/30）

dotted_border パッケージの紹介記事でした。

このパッケージはFlutter大学の方に教えてもらったパッケージとなります。
（ありがとうございます...！）

開発に役立つ情報の交換が日々Flutter大学のSlack にて行われているので、
自分としては本当に助かっています。

もし、このパッケージオススメだから紹介してほしい、等の情報がありましたら、
ぜひ教えていただければと思います。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。