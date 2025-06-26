---
title: "【 Shimmer 】ローディング効果を追加しよう！【Flutter】"
slug: "flutter-package-shimmer"
author: "Aoi"
description: ""
pubDatetime: 2022-09-29T07:02:28.000Z
tags: ["パッケージ"]
---

**テキストや画像にローディング効果を追加したい！**

本記事ではそんな要望にお答えします。

テキストや画像、コンテナーにローディング効果を追加するパッケージ、  
[Shimmer](https://pub.dev/packages/shimmer) パッケージを紹介します。

以下の画像のようなUIが、`Shimmer`パッケージを使うと、

![](https://blog.flutteruniv.com/wp-content/uploads/2022/09/スクリーンショット-2022-09-29-15.28.49-621x1024.png)

以下のGIFのようになります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/09/20220929_shimmer.gif)

このようなUIが簡単に実装可能です！  
ぜひ読んで使ってみてください！

## Shimmer の使い方

### 準備

まず準備として、パッケージのインストールと、  
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて  
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add shimmer
```

#### パッケージのインポート

実装したいDartファイルの上部に以下のインポート文を追加し、  
パッケージをインポートします。

```dart
import 'package:shimmer/shimmer.dart';
```

### 実装

実装方法について解説します。

ローディング効果を追加したいウィジェットを、`Shimmer.fromColors`でラップします。  
`baseColor`プロパティにて、ベースとなる色を設定します。  
`highlightColor` プロパティにてハイライトの色(流れるエフェクトの色)を設定します。

```dart
Shimmer.fromColors(
  baseColor: Colors.grey[300]!,
  highlightColor: Colors.grey[100]!,
  child: ...
)
```

これだけでテキストや画像、コンテナーにローディング効果を追加することができます。

サンプルコード全体

```dart
import 'package:flutter/material.dart';
import 'package:shimmer/shimmer.dart';

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
        title: const Text('Shimeer Sample'),
      ),
      body: Shimmer.fromColors(
        baseColor: Colors.grey[300]!,
        highlightColor: Colors.grey[100]!,
        child: SingleChildScrollView(
          child: Column(
            children: [
              const MyContainers(),
              const MyContainers(),
              const MyContainers(),
              const MyContainers(),
              const MyContainers(),
              const MyContainers(),
              const MyContainers(),
              const MyContainers(),
              const Text(
                'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
                style: TextStyle(
                  fontSize: 40,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(
                width: 100,
                height: 100,
                child: Image.asset('assets/flutteruniv_logo.png'),
              )
            ],
          ),
        ),
      ),
    );
  }
}

class MyContainers extends StatelessWidget {
  const MyContainers({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8),
      child: Row(
        children: [
          Container(
            width: 50,
            height: 50,
            color: Colors.red,
          ),
          const SizedBox(width: 20),
          Expanded(
            child: Column(
              children: [
                Container(
                  height: 20,
                  color: Colors.green,
                ),
                const SizedBox(height: 10),
                Padding(
                  padding: const EdgeInsets.only(left: 10),
                  child: Container(
                    height: 20,
                    color: Colors.blue,
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
```

## まとめ

本記事では、テキストや画像、コンテナーにローディング効果を追加するパッケージ、  
[Shimmer](https://pub.dev/packages/shimmer) パッケージを紹介しました。

いかがだったでしょうか？

とても簡単に実装できることがおわかりいただけたかと思います。

データベースからのデータ取得中のローディングなど、  
`Shimmer`を使って実装すると、ワンランク上の見た目になること間違いなしです。

ぜひ使ってみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/9/29）

ここ数日、GoRouter v5.0 を触ってみる、というのがFlutter大学で少し話題となっていました。

GoRouter はFlutter の画面遷移周りをサポートするパッケージです。  
画面ごとにWEBのアドレスバーのアドレス(パス)を設定するのにとても有用なパッケージで、  
Flutter 公式のパッケージとなったことで話題になったパッケージでもあります。

つい先日、このパッケージのバージョン5.0がリリースされました。  
目玉の追加機能としては、

*   リダイレクトでのasync/await対応
*   Nested Navigation 対応

があります。

これについて自分でサンプルプロジェクトを作成し、  
使ってみました。

非同期対応については、うまく使わないとページ遷移のたびに  
リダイレクトで非同期の待ち時間が発生するため、  
ユーザー体験が悪くなってしまう、ということがわかりました。  
当たり前のことですが、非同期でなく済むように出来るのならそうすべきだな、  
と思いました。

Nested Navigation についてはものすごい簡単に実装できます。  
ただ、画面遷移時のスクロール位置の記憶、といった機能はまだGoRouterでは無いので、  
そこの実装に期待、といった感想です。

サンプルプロジェクトを貼っておきます。  
ぜひ、こうした方が良い等のご意見をお聞かせいただければと思います！

https://github.com/Umigishi-Aoi/go\_router\_sample\_fn

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。