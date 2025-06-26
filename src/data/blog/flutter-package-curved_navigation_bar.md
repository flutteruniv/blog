---
title: "【 curved_navigation_bar 】おしゃれなNavigation Bar を実装しよう！【 Flutter 】"
slug: "flutter-package-curved_navigation_bar"
description: ""
pubDatetime: "2022-10-21"
author: "Aoi"
tags: ["Package"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

**【おしゃれなNavigation Bar を実装したい！】**

本記事ではそんな要望にお答えします。

curved_navigation_bar パッケージを使った、
おしゃれな Navigation Bar の実装方法について解説します。

以下のようなUI が実装可能です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/10/20221021_curved_navigation_bar_sample.gif)

基本的な使い方からカスタマイズ方法まで、詳しく解説します。

ぜひ読んでみてください！

## 基本的な使い方

基本的な使い方について解説していきます。

### 準備

まず準備として、パッケージのインストールと、
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add curved_navigation_bar
```

#### パッケージのインポート

実装したいDartファイルの上部に以下のインポート文を追加し、
パッケージをインポートします。

```dart
import 'package:curved_navigation_bar/curved_navigation_bar.dart';
```

### 実装

実装方法について解説します。

`Scaffold`の`bottomNavigationBar`プロパティに`CurvedNavigationBar` ウィジェットを設定します。

`CurvedNavigationBar` ウィジェットの`index`プロパティにページを管理するインデックスを、
`items`プロパティに`Navigation Bar`に設定したいアイコン等のウィジェットのリストを、
`onTap`プロパティに`Navigation Bar`タップ時の処理を定義する関数を設定します。

```dart
@override
  Widget build(BuildContext context) {
    return Scaffold(
      // ...
      bottomNavigationBar: CurvedNavigationBar(
        index: index,
        items: const [
          Icon(Icons.man, size: 30),
          Icon(Icons.timeline, size: 30),
          Icon(Icons.settings, size: 30),
        ],
        onTap: (int index) {
          setState(() {
            this.index = index;
          });
        },
      ),
    );
```

サンプルコード全体はこちら
```dart
import 'package:curved_navigation_bar/curved_navigation_bar.dart';
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

class MyWidget extends StatefulWidget {
  const MyWidget({super.key});

  @override
  State createState() => _MyWidgetState();
}

class _MyWidgetState extends State {
  int index = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Curved Navigation Bar Sample'),
      ),
      body: [
        Container(
          width: double.infinity,
          height: double.infinity,
          color: Colors.red,
        ),
        Container(
          width: double.infinity,
          height: double.infinity,
          color: Colors.green,
        ),
        Container(
          width: double.infinity,
          height: double.infinity,
          color: Colors.orange,
        ),
      ][index],
      bottomNavigationBar: CurvedNavigationBar(
        index: index,
        items: const [
          Icon(Icons.man, size: 30),
          Icon(Icons.timeline, size: 30),
          Icon(Icons.settings, size: 30),
        ],
        onTap: (int index) {
          setState(() {
            this.index = index;
          });
        },
      ),
    );
  }
}
```

上記コードで以下のようにアニメーションがついた`Navigation Bar`が作成できます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/10/20221021_curved_navigation_bar_sample.gif)

基本的な使い方は以上となります！

## カスタマイズ方法

カスタマイズ方法として、`CurvedNavigationBar` ウィジェットに用意されているプロパティを
いくつか紹介します。

### 色の設定

`color` プロパティで背景色、現在のアイコンの背景色を一括で変更可能です。
`buttonBackgroundColor` プロパティで現在のアイコンの背景色を変更可能です。
`backgroundColor` プロパティでアニメーション背景の色を変更可能です。

```dart
CurvedNavigationBar(
        color: Colors.blue[200]!,
        buttonBackgroundColor: Colors.grey,
        backgroundColor: Colors.white,
        // ...
      ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/10/スクリーンショット-2022-10-21-18.11.39.png)

### 高さの設定

`height`プロパティで`Navigation Bar`の高さを設定可能です。

```dart
CurvedNavigationBar(
        height: 50,
        // ...
      ),
```

### アニメーション設定

`animationCurve` プロパティで、アニメーションの動き方を設定可能です。
`animationDuration` プロパティでアニメーションにかかる秒数を設定可能です。

```dart
CurvedNavigationBar(
        animationCurve: Curves.bounceIn,
        animationDuration: const Duration(milliseconds: 900),
        // ...
      ),
```

以上がカスタマイズ方法の詳解となります！

## まとめ

本記事では curved_navigation_bar パッケージを使った、
おしゃれな Navigation Bar の実装方法について解説しました。

基本的な使い方からカスタマイズ方法まで、詳しく解説しました。

いかがだったでしょうか？

普段使っている`BottomNavigationBar`をこのパッケージのウィジェットに入れ替えるだけで、
簡単に実装可能となります。

あなたのアプリにちょっとアクセントを加えたい、と思ったら、
ぜひこのパッケージを導入してみることをオススメします。

本記事があなたのあぷり開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/10/21）

最近、Flutter 公式のゲーム開発へのプッシュが多いです。

1週間に1~2回はゲーム関係のツイートをしているように思います。

Flutterでのゲーム作成は自分も2作品ほどリリースしていることもあり、
結構身近なものになってきているかな、と思います。

ゲームエンジンのFlameを使わずとも、
アイデア次第でゲームを作れるのはFlutterのいいところだと思います。

あなたも、是非挑戦してみてはいかがでしょうか？

きっと楽しい経験となるはずです。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。