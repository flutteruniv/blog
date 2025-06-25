---
title: "【 Icon 】アイコンを実装しよう！ 【 Flutter 】"
description: ""
pubDatetime: 2022-11-25T10:00:00.000Z
categories: ["widget"]
---

**「アイコンをUIに表示させたい！」**

本記事ではそんな要望にお答えします。

Flutterでボタンや装飾として用いる記号のウィジェット、Icon ウィジェットの紹介を行います。

基本的な使い方からカスタマイズ方法まで詳しく解説します。

ぜひ読んでみてください！

## 基本的な使い方

表示させたい場所に`Icon` ウィジェットを配置し、  
引数に表示させたいアイコンの`IconData`を設定します。

Flutter create で作成したアプリの状態では、`IconData`として、  
マテリアルデザインの`Icons.~`と、iOSのデザインの`CupertinoIcons.~`が使えます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/11/スクリーンショット-2022-11-25-16.46.32.png)

```dart
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(Icons.share),
            SizedBox(
              height: 16,
            ),
            Icon(CupertinoIcons.share),
          ],
        ),
```

ソースコード全体

```dart
import 'package:flutter/cupertino.dart';
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
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(Icons.share),
            SizedBox(
              height: 16,
            ),
            Icon(CupertinoIcons.share),
          ],
        ),
      ),
    );
  }
}
```

## カスタマイズ方法

`Icon`ウィジェットのカスタマイズ方法について解説していきます。

### サイズ

`size`プロパティでアイコンのサイズを設定することができます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/11/スクリーンショット-2022-11-25-17.15.14.png)

```
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(
              Icons.man,
              size: 40,
            ),
            SizedBox(
              height: 16,
            ),
            Icon(
              Icons.man,
            ),
          ],
        ),
```

### 色

colorプロパティにでアイコンの色を設定することができます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/11/スクリーンショット-2022-11-25-17.17.05.png)

```dart
Icon(
  Icons.share,
  color: Colors.green,
),
```

### 影

`shadows`プロパティに`Shadow`インスタンスを設定することで、  
アイコンに影をつけることができます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/11/スクリーンショット-2022-11-25-17.11.59.png)

```dart
Icon(
  Icons.man,
  shadows: [
    Shadow(
      color: Colors.blue,
      blurRadius: 10,
    ),
  ],
),
```

### 方向

`textDirection`プロパティで一部アイコンで用意されている向き  
（文字が左から右に書くか、アラビア文字のように右から左に書くか）  
に応じた表示を設定することができます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/11/スクリーンショット-2022-11-25-17.01.15.png)

```dart
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(
              Icons.arrow_back,
              textDirection: TextDirection.ltr,
            ),
            SizedBox(
              height: 16,
            ),
            Icon(
              Icons.arrow_back,
              textDirection: TextDirection.rtl,
            ),
          ],
        ),
```

### 読み上げ内容

`semanticLabel`プロパティにてデバイスの音声読み上げ機能実行時に読み上げる  
アイコンの説明を設定することができます。

```dart
Icon(
  Icons.arrow_back,
  semanticLabel: 'Back',
),
```

## まとめ

本記事ではFlutterでボタンや装飾として用いる記号のウィジェット、  
Icon ウィジェットの紹介を行いました。

基本的な使い方からカスタマイズ方法まで詳しく解説しました。

いかがだったでしょうか？

Iconは簡単にUIにワンポイントを設定できるウィジェットです。

今回紹介したカスタマイズ方法でカスタマイズし、自分だけのアイコンを表現してみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/11/25）

`Icon`についての記事でした。

この`Icon`を使用したウィジェットに、`IconButton`ウィジェットがあります。

その名の通り、アイコンをボタン化するウィジェットです。

このウィジェットについては以下の記事で詳しく解説をしています。

https://blog.flutteruniv.com/flutter-iconbutton/

ぜひ併せて読んでみてください！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。