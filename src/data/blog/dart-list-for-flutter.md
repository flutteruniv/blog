---
title: "【 Dart 】 List の中で for 文を使おう！【 Flutter 】"
author: "Aoi"
description: ""
pubDatetime: 2022-12-07T10:00:00.000Z
categories: ["dart"]
---

**「1 ~ 50の数字が要素の`List`を定義したいんだけど、手打ちでやるの面倒すぎるな...」**

待ってください！

意外と知られていないかもですが、`List`の定義文の中ではfor文による繰り返しが可能なんです。

本記事では、`for` 文による繰り返しを用いて`List`を定義する方法について紹介します。

Flutterでの使用例も併せて紹介します。ぜひ読んでみてください！

## List の定義文の中でfor文を使う

1 ~ 10 の要素が入ったリストを定義したいとします。  
このコードは以下のように書けます。

```dart
final list = [1,2,3,4,5,6,7,8,9,10];
```

では1 ~ 50ではどうでしょうか？

この書き方だと、ちょっと大変ですよね。

そこで使用するのが、`List`の定義文の中での`for`文です。

具体的には以下のようにして1 ~ 50 の要素が入った`List`が定義できます。

```dart
final list = [for (int i = 1; i < 51; i++) i];
```

1 ~ 50 を手打ちするよりずっと簡単ですよね。

ポイントとしては、通常`for`文にある中括弧"{}"がないことです。  
`for`の定義文の後に中括弧なしで要素の定義をします。

以上が、`for`文による繰り返しを用いた`List`の定義でした。

## Flutterでの使用例

Flutterでの使用例を解説します。  
1 ~ 50 の数字の2乗を表示する`ListView`を作成してみます。

Listの要素の定義文は以下で書けます。

```dart
final list = [for (int i = 1; i < 51; i++) Text('${i * i}')];
```

この`Text`Widget の`List`を使ったアプリの実行結果が以下になります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/12/スクリーンショット-2022-12-07-16.30.48.png)

サンプルコード全体は以下になります。

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
    final list = [for (int i = 1; i < 51; i++) Text('${i * i}')];

    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(8),
          child: ListView(
            children: list,
          ),
        ),
      ),
    );
  }
}
```

## まとめ

本記事では、`for` 文による繰り返しを用いて`List`を定義する方法について紹介しました。

Flutterでの使用例も併せて紹介しました。

いかがだったでしょうか？

`for`文の中が1行で済む(要素の定義文以外を含まない)ような簡単な場合には、  
今回の手法はコードが短くなってかなり有用かと思います。

使うチャンスがあれば、ぜひ使用してみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/12/7）

この記事を書いていて、  
「そもそも\[\]中でforを有効にしている部分はどこにあるんだろう？」  
と、気になりました。

Dartの内部というか、言語の定義部分の話になります。

Dartという言語がどのようにして言語として成り立っていて、  
その言語の定義というのはどこにあるのか、という話です。

例えば、`class`や`import`といった本当に基本的な定義だったり、  
1+1 = 2 になるプログラム上の定義だったりです。

Dartファイルとしてどこかにあるのか、  
それとも変換したバイナリ言語で定義されているのか。

Dart言語のコンパイルの仕組みに対してもまだまだ知識が浅いと感じました。

このあたりを知識深めて、記事化できれば良いな、と思います。

いつになるかはわかりませんが、気長にお待ちいただければ幸いです。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。