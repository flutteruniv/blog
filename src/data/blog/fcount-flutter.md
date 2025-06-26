---
title: "【 f_count 】自動カウントするログ出力を使おう！【 Flutter 】"
author: "Aoi"
description: ""
pubDatetime: 2022-08-03T10:00:00.000Z
tags: ["パッケージ"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

f\_count ってどんなパッケージなんだろう？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

Flutterのログ出力で描画回数をカウントしたいんだけど、  
いい方法ないかしら？

本記事ではそんな疑問にお答えします。

Flutterで、自動カウントするログ出力を使えるようにするパッケージ、  
[f\_count](https://github.com/Chinmay-KB/f_count) パッケージを紹介します！

以下使用例のGIFとなります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/f_count_sample-1.gif)

本記事では使い方から使用例の紹介までを行います。

ぜひ読んでみて下さい！

## 基本的な使い方

### 準備

まず準備として、パッケージのインストールと、  
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて  
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add f_count
```

#### パッケージのインポート

ログ出力したいDartファイルの上部に以下のインポート文を追加し、  
パッケージをインポートします。

```dart
import 'package:f_count/f_count.dart';
```

### 実装

実装方法について解説します。

実装はとても簡単でログ出力したい場所に、`fCount(label: 'Sample');` を置くだけです。  
('Sample'の部分は自分の好きな文字列を入れることが可能です。)

```dart
  @override
  Widget build(BuildContext context) {
    fCount(label: 'Sample');
    return Scaffold(
```

これにより、以下の画像のようなログが出力されます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-03-15.46.04.png)

カウントはラベルごとに行われます。

```dart
  @override
  Widget build(BuildContext context) {
    fCount(label: 'Sample');
    fCount(label: 'Test');
    return Scaffold(
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-03-15.49.01.png)

基本的な使い方は以上です！

## 使用例

使用例のサンプルコードはこちらです。

シンプルに、カウンターをWidgetで切り出した場合の描画範囲をチェックできるアプリです。

```dart
import 'package:f_count/f_count.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    fCount(label: 'Bad');
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
            ElevatedButton(
              onPressed: _incrementCounter,
              child: const Text('Bad Increment'),
            ),
            const GoodCounter(),
          ],
        ),
      ),
    );
  }
}

class GoodCounter extends StatefulWidget {
  const GoodCounter({super.key});

  @override
  State<GoodCounter> createState() => _GoodCounterState();
}

class _GoodCounterState extends State<GoodCounter> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    fCount(label: 'Good');
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text(
          '$_counter',
          style: Theme.of(context).textTheme.headline4,
        ),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: const Text('Good Increment'),
        ),
      ],
    );
  }
}
```

このアプリのGIFは以下となります。  
Goodのボタンを押した時にBadのログが表示されないので、  
描画範囲を抑えられていることがわかります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/f_count_sample.gif)

## まとめ

本記事では、Flutterで、自動カウントするログ出力を使えるようにするパッケージ、  
[f\_count](https://github.com/Chinmay-KB/f_count) パッケージを紹介しました。

いかがだったでしょうか？

Android Studio で開発をしている方は、Flutter Performanceで同様のチェックができますが、  
VScodeを使っている方や、簡易的にチェックしたい場合等に有用です。

またFlutter Performanceにはできない、  
メソッドの呼ばれた回数のチェックができることもf\_countの利点です。

開発の効率化にとても有用なパッケージですので、  
ぜひ本記事を読んで使ってみて下さい！

本記事があなたのアプリ開発の一助となれば幸いです。  

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/8/3）

カウントアップ、で思い出したのですが、  
長押しでカウントアップし続けるWidget、というのを作成したことがあります。

以下の私の個人ブログで作成方法について解説しています。

https://zerokara-app.com/948/

こういう色んなWidgetを組み合わせて自作のWidgetを作るのって楽しいですよね。

このWidgetをせっかくなのでパッケージ化するのも面白いかな、とふと思いました。

勉強にもなるので、あなたもぜひ自作のWidget作りに挑戦してみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。