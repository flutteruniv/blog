---
title: "【 sliding_up_panel 】スライドアップパネルの実装【Flutter】"
slug: "package_sliding_up_panel"
author: "Aoi"
description: ""
pubDatetime: "2022-10-12"
tags: ["Package"]
layout: "../../layouts/BlogPost.astro"
---

**下からパネルが上がってくるような、スライドアップパネルを実装したい！**

本記事ではそんな要望にお答えします。

[sliding_up_panel](https://pub.dev/packages/sliding_up_panel) パッケージを利用した、スライドアップパネルの実装方法について解説します。

基本的な使い方から、カスタマイズ方法まで解説します。

以下のようなUIを簡単に実装することが可能です。

![](http://34.145.4.125/wp-content/uploads/2022/10/20221012_top.gif)

ぜひ読んでみて実装してみてください！

## 基本的な使い方

基本的な使い方について解説していきます。

### 準備

まず準備として、パッケージのインストールと、
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add sliding_up_panel
```

#### パッケージのインポート

実装したいDartファイルの上部に以下のインポート文を追加し、
パッケージをインポートします。

```dart
import 'package:sliding_up_panel/sliding_up_panel.dart';
```

### 実装

実装方法について解説します。

任意の場所に`SlidingUpPanel` ウィジェットを追加します。

`body` プロパティに背景で表示するウィジェットを、
`pannel`プロパティにスライドアップパネルに表示したいウィジェットを配置します。

```dart
SlidingUpPanel(
  body: // ・・・
  panel: // ・・・
),
```

![](http://34.145.4.125/wp-content/uploads/2022/10/20221012_base.gif)

GIFの実装コード全体
```dart
import 'package:flutter/material.dart';
import 'package:sliding_up_panel/sliding_up_panel.dart';

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
      backgroundColor: Colors.red[200],
      body: SlidingUpPanel(
        body: const Center(
          child: Text('Hello World!'),
        ),
        panel: const Center(
          child: Text('こんにちは世界！'),
        ),
      ),
    );
  }
}
```

## カスタマイズ方法

カスタマイズ方法について解説していきます。

### 最小化時に表示するウィジェットの設定

最小化時(下部に表示されている時)に表示するウィジェットを、
`collapsed`プロパティにて設定できます。

```dart
SlidingUpPanel(
        body: const Center(
          child: Text('Hello World!'),
        ),
        panel: const Center(
          child: Text('こんにちは世界！'),
        ),
        collapsed: const Center(
          child: Text('テスト'),
        ),
      ),
```

<img src="http://34.145.4.125/wp-content/uploads/2022/10/スクリーンショット-2022-10-12-17.25.15-511x1024.png" alt="" width="300">

`collapsed`に何も設定しない場合、
`pannel`に設定したウィジェットの最上部部分が表示されます。

スライドアップと共に`collapsed`に設定したウィジェットは非表示になります。

### 高さの指定

`minHeight`プロパティにて、最小化時の高さを、
`maxHeight`プロパティにて、最大化時の高さを指定可能です。

```dart
SlidingUpPanel(
          body: const Center(
            child: Text('Hello World!'),
          ),
          panel: const Center(
            child: Text('こんにちは世界！'),
          ),
          minHeight: 300,
          maxHeight: 800,
        ),
```

<img src="http://34.145.4.125/wp-content/uploads/2022/10/スクリーンショット-2022-10-12-17.33.48.png" alt="" width="300">

### 枠線

`border`プロパティにて、枠線の様々な設定が可能です。

```dart
SlidingUpPanel(
          body: const Center(
            child: Text('Hello World!'),
          ),
          panel: const Center(
            child: Text('こんにちは世界！'),
          ),
          border: const Border(
            top: BorderSide(
              color: Colors.blue,
              width: 5,
            ),
          ),
        ),
```

<img src="http://34.145.4.125/wp-content/uploads/2022/10/スクリーンショット-2022-10-12-17.51.21-516x1024.png" alt="" width="300">

また、`borderRadius`プロパティにて、パネルの角を角丸にすることが可能です。

```dart
SlidingUpPanel(
          body: const Center(
            child: Text('Hello World!'),
          ),
          panel: const Center(
            child: Text('こんにちは世界！'),
          ),
          borderRadius: const BorderRadius.only(
            topLeft: Radius.circular(24),
            topRight: Radius.circular(24),
          ),
        ),
```

<img src="http://34.145.4.125/wp-content/uploads/2022/10/スクリーンショット-2022-10-12-17.53.20-510x1024.png" alt="" width="300">

現状、border とborderRaidus の同時設定はできない模様です。

### パネルの背景色

`color`プロパティにてパネルの背景色を設定可能です。

```dart
SlidingUpPanel(
          body: const Center(
            child: Text('Hello World!'),
          ),
          panel: const Center(
            child: Text('こんにちは世界！'),
          ),
          color: Colors.yellow[200]!,
        ),
```

<img src="http://34.145.4.125/wp-content/uploads/2022/10/スクリーンショット-2022-10-12-17.55.50-507x1024.png" alt="" width="300">

他にもさまざまなカスタマイズが可能です！
詳しくは、[こちら](https://pub.dev/packages/sliding_up_panel#custom-usage)をご確認ください。

## まとめ

本記事では、[sliding_up_panel](https://pub.dev/packages/sliding_up_panel) パッケージを利用した、スライドアップパネルの実装方法について解説しました。

基本的な使い方から、カスタマイズ方法まで解説しました。

いかがだったでしょうか？

シンプルで、とても簡単に実装できることがおわかりいただけたかと思います。

ぜひあなたのアプリに実装してみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/10/12）

昨日、Flutter と、ゲームエンジンのFlame を使って
ブロック崩しのゲームを作成しました。

一画面のみの簡単な構成ですが、
ちゃんと遊べるものとなっています。

作成難易度ですが、ちょっと数学の知識が必要ではあるものの、
Flameのおかげでそこまで難しくはなかったと思います。

というか、作っていてとても楽しかったです。
目に見えて動くものを作るのは、楽しいものですね。

動作の動画やソースコードは以下のGitHubにて見ることができます。

https://github.com/Umigishi-Aoi/block_breaker

是非参考にしてみてください。
（スターいただけるととても喜びます。）

こちらについて、時間はかかりますが、いつか記事で出そうと思っていますので、
そちらもお楽しみにお待ち下さい。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。