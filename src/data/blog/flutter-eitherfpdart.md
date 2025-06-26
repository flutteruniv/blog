---
title: "【Flutter】 Either型を使ってみよう！【fpdart】"
author: "Aoi"
description: ""
pubDatetime: 2022-08-18T14:16:31.000Z
categories: ["package"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

Either 型？ どんな型なんだろう？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

エラーハンドリングをもっと楽にする方法ってないかしら？

本記事ではそんな疑問にお答えします。

Flutter のエラーハンドリングを楽にしてくれる、`Either`型について解説します。

`Either`型について紹介した上で、  
`try - catch` でエラーハンドリングを行った場合のコードを改良します。

`Either`を使って記述すると、以下の画像のように短いコードで端的に表すことができます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/20220818_compare.png)

ぜひ読んでみてください！

## Either 型とは

### 解決したい課題

入力された文字列を数字に変換し、その数字の平方根を返すアプリケーションを考えます。

ユーザーが素直に数字を入力してくれればよいですが、  
入力フォームに文字列を入力した際に、エラー（例外）が発生します。

ここで、エラーハンドリングが必要となります。  
エラーハンドリングの一例が`try-catch`を使う方法です。

```dart
try {
  number = double.parse(text);
} on FormatException catch (e) {
  //エラー時の対応
}
```

`try{}`内の処理を実行し、  
例外が発生したら`on FormatException catch (e) {}`内の処理が実行される、という方法です。

上のコードでは`double.parse()`のメソッドは`()`内に  
文字列が入力された場合に`FormatException`という例外が発生するので、  
それを`catch`で対処できるようになっています。

この方法自体に問題はないのですが、  
`try-catch`を埋め込んだメソッドを作成する際に、少し困ることが起き得ます。

それは、**正常時と例外時で違う型の結果**を返したい時です。

今回の`parse`のように、正常時には`parse`した結果の数値を返したい、  
例外時には例外を返したい、といった場合、  
メソッドの返り値を何で設定していいか困ります。

最終的にUIの表示を`String`にしようとするのであれば、  
メソッド内で`String`への変換処理を記載することで返す型を`String`に統一できますが、  
メソッドが肥大化します。  
また、メソッドで行うことが、  
「メソッドで本来やりたいこと」+「Stringへの変換」  
となり、実行内容が分散し読みにくくなってしまいます。

メソッド埋め込みをやめて、UIの記述文(`build` メソッド内)で`Builder`等を使い、  
`try-catch`を直接行うのも、`build`メソッドが肥大化し、読みにくくなってしまいます。

**「`try-catch`をメソッドに埋め込みつつ、正常時と例外時で別々の型を返したい」**  
というのが今回解決したい課題となります。  

### Either型での解決

上記課題を解決してくれるのが、[fpdartパッケージ](https://pub.dev/packages/fpdart)の`Either`型です。

`Either`型とは抽象クラスで、  
正常時用に`Either`型を継承した`Right`型が、  
例外時用に同じく`Either`型を継承した`Left`型がそれぞれ用意されています。

`Right`型、`Left`型、共に内部に任意の型の値を保持することができます。

上記の、  
**「`try-catch`をメソッドに埋め込みつつ、正常時と例外時で別々の型を返したい」**  
という課題については、  
`Either`型を返り値として設定し、  
正常時には`Right`型を、例外時には`Left`型を返す、という方法で解決できます。

```dart
  Either<FormatException, double> parseNumber(String text) {
    try {
      return Either.right(double.parse(text));
    } on FormatException catch (e) {
      return Either.left(e);
    }
  }
```

上記例では、正常時には`double`型を保持する`Right`型の値を、  
例外時には`FormatException`型を保持する`Left`型の値を返します。

まとめると`Either`型とは、**返り値の型が2つの型どちらにもなりうる際に対応できる型**です。

この後の基本的な使い方ではエラーハンドリングにより特化した使い方と、  
Either型からの値の取り出し方について解説します。

## 基本的な使い方

以下のコードを修正していく形で解説していきます。  
（先に紹介した比較画像の左側のコードです。）

ベースコード

```dart
import 'dart:math';

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
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  late final TextEditingController _controller;

  @override
  void initState() {
    _controller = TextEditingController();
    _controller.text = '0';
    super.initState();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            SizedBox(
              width: 100,
              child: TextField(
                controller: _controller,
                onChanged: (value) => setState(() {}),
              ),
            ),
            Builder(
              builder: (context) {
                final double number;
                try {
                  number = double.parse(_controller.text);
                } on FormatException catch (e) {
                  return Text(
                    e.toString(),
                    style: const TextStyle(fontSize: 24),
                  );
                }
                return Text(
                  'sqrt($number) =${sqrt(number).toString()}',
                  style: const TextStyle(fontSize: 24),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
```

### 準備

まず準備として、パッケージのインストールと、  
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて  
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add fpdart
```

#### パッケージのインポート

実装したいDartファイルの上部に以下のインポート文を追加し、  
パッケージをインポートします。

一部クラスが`material`パッケージと競合するため、`as`文で`fp`という名前付けをしておきます。

```dart
import 'package:fpdart/fpdart.dart' as fp;
```

### 実装

#### Either型のメソッドを用いたtry-catch

「`Either`型とは」の章では以下のコードを紹介しました。

```dart
  Either<FormatException, double> parseNumber(String text) {
    try {
      return Either.right(double.parse(text));
    } on FormatException catch (e) {
      return Either.left(e);
    }
  }
```

このコードを`Either`の`tryCatch`メソッドで書き換えることができます。

```dart
  Either<FormatException, double> parseNumber2(String text) {
    return Either.tryCatch(
      () => double.parse(text),
      (e, s) => e as FormatException,
    );
  }
```

第1引数にて`try{}`文の中に書く処理を記述し、正常時に返したい値を返します。  
第2引数にて例外時の処理を記述し、例外時に返したい値を返します。  
（`e`は例外時の`Object`, `s`は`StackTrace`です。）

このメソッドを`MyWidget`内、`build`メソッドの後に追加します。  
(`Either` →`fp.Either`)となることに注意です。

```dart
  fp.Either<FormatException, double> parseNumber2(String text) {
    return fp.Either.tryCatch(
      () => double.parse(text),
      (e, s) => e as FormatException,
    );
  }
```

#### Either型からの値の引き出し

`Either`型からの値の引き出し方を解説します。

値を引き出す際には`match`メソッドを用いるのが便利です。

`match`メソッドは、引数にて`Either`型の値が`Right`型だった際の関数と、  
`Left`型だった際の関数を記述することで、共通の型を返すことのできるメソッドです。

```dart
Either.match<String>(
  (l) => l.toString(),
  (r) => 'sqrt($r) = ${sqrt(r).toString()}',
),
```

`l,r`はそれぞれ`Left`型, `Right`型の中身の値を表します。  
引数にて`String`を返すメソッドを設定しています。  
`match`メソッドを用いることで、それぞれの型ごとに別々の処理を行いつつ、  
一つの型に変換することができます。

ベースコードの`Builder`ウィジェットを以下のウィジェットに置き換えてください。

```dart
            Text(
              parseNumber2(_controller.text).match<String>(
                (l) => l.toString(),
                (r) => 'sqrt($r) = ${sqrt(r).toString()}',
              ),
              style: const TextStyle(fontSize: 24),
            ),
```

以上で書き換えは完了となります。

最終的なコードは以下のとおりです。

最終的なコード

```dart
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:fpdart/fpdart.dart' as fp;

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
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  late final TextEditingController _controller;

  @override
  void initState() {
    _controller = TextEditingController();
    _controller.text = '0';
    super.initState();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            SizedBox(
              width: 100,
              child: TextField(
                controller: _controller,
                onChanged: (value) => setState(() {}),
              ),
            ),
            Text(
              parseNumber2(_controller.text).match<String>(
                (l) => l.toString(),
                (r) => 'sqrt($r) = ${sqrt(r).toString()}',
              ),
              style: const TextStyle(fontSize: 24),
            ),
          ],
        ),
      ),
    );
  }

  fp.Either<FormatException, double> parseNumber2(String text) {
    return fp.Either.tryCatch(
      () => double.parse(text),
      (e, s) => e as FormatException,
    );
  }
}
```

## まとめ

本記事ではFlutter のエラーハンドリングを楽にしてくれる、`Either`型について解説しました。

`Either`型について紹介した上で、  
`try - catch` でエラーハンドリングを行った場合のコードを改良します。

いかがだったでしょうか？

`Either`型を用いることで、コードがスッキリと、見やすくなりました。

`Either`型には他にもさまざまなメソッドが用意されています。  
[こちら](https://pub.dev/documentation/fpdart/latest/fpdart/Either-class.html)にて紹介されていますので、興味ある方はぜひ見てみてください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 参考

https://codewithandrea.com/articles/functional-error-handling-either-fpdart/

## 編集後記（2022/8/18）

`Either`型についての記事でした。

今回は深く触れませんでしたが、  
この`Either`型が含まれるパッケージ、  
`fpdart`は関数型プログラミングを補助するためのパッケージです。

関数型プログラミングとはデータと関数を分離して記述していくプログラミング手法です。  
関数の組み合わせで記述していくことにより、  
コードがシンプルに、読みやすくなる、というメリットがあります。

（詳しくは、[こちらの記事](https://www.sandromaglione.com/techblog/fpdart-functional-programming-in-dart-and-flutter)を読んでみることをオススメします。）

意識しなければ気が付かないような内容ではありますが、  
コードをよりシンプルにわかりやすくしたい、  
といった時には使用を検討してみてもよいかと思います。

自分もまだまだ勉強中ですので、興味のある方は一緒に勉強しましょう！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。