---
title: "【Flutter】線の軌跡をアニメーションしよう！【 path_animator 】"
author: "Aoi"
description: ""
pubDatetime: 2022-04-15T10:00:00.000Z
tags: ["パッケージ"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)

Flutterで描いた図形の線の軌跡をアニメーションしてみたい！

本記事はそんな要望にお答えします！

線の軌跡をアニメーションすることのできるパッケージ、  
path\_animatorパッケージを紹介します。

https://pub.dev/packages/path\_animator

このパッケージを導入すると、このようなアニメーションが実現可能です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/path_animator_sample.gif)

ぜひ読んでみてください！

## path\_animator パッケージ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/プログラミング画像.jpeg)

path\_animator パッケージは `CustomPainter`で描いた線を、  
アニメーションで表示させるパッケージです。

### 基本的な使い方

使い方はとてもシンプルです。

1.  `Path` を`PathAnimator`に変換する
2.  `canvas.drawPath`に`Path`の代わりに`PathAnimator`を渡す

#### Path をPathAnimatorに変換する

```
    final animatedPath = PathAnimator.build(
      path: ・・・,
      animationPercent: ・・・,
    );
```

#### `canvas.drawPath`に`Path`の代わりに`PathAnimator`を渡す

```
canvas.drawPath(animatedPath, ・・・);
```

あとは、`AnimationController`を設定して、`animationPercent`の値を徐々に変化させるだけです。

この後、実装例で実装方法を見ていきます。

## 実装例

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/パソコン.jpeg)

ただ図形が表示された状態から、アニメーションを設定するまでを実装していきます。

初期のコードはこちらです。

```
import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Path Animator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Path Animator'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({
    Key? key,
    required this.title,
  }) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: CustomPaint(
          painter: _MyCustomPainter(),
          child: const SizedBox(width: 300, height: 300),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        tooltip: 'Reset',
        child: const Icon(Icons.refresh),
      ),
    );
  }
}

class _MyCustomPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(size.width * 0.5, size.height * 0.5 * (1 + sin(-pi / 2)))
      ..lineTo(
        size.width * 0.5 * (1 + cos(4 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(4 * pi / 5 - pi / 2)),
      )
      ..lineTo(
        size.width * 0.5 * (1 + cos(8 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(8 * pi / 5 - pi / 2)),
      )
      ..lineTo(
        size.width * 0.5 * (1 + cos(2 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(2 * pi / 5 - pi / 2)),
      )
      ..lineTo(
        size.width * 0.5 * (1 + cos(6 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(6 * pi / 5 - pi / 2)),
      )
      ..close()
      ..addArc(Rect.fromLTWH(0, 0, size.width, size.height), -pi / 2, 2 * pi);

    final paint = Paint()
      ..color = Colors.black
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.0;

    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return false;
  }
}
```

早速実装していきましょう！

### 準備

#### AnimationControllerの実装

アニメーションを行うため、`AnimationController`を使います。

まず、`StatelessWidget`となっている`MyHomePage`を、  
`State`で`SingleTickerProviderStateMixin`を`mixin`した、`StatefulWidget`に変えましょう。

```
// ・・・

class MyHomePage extends StatefulWidget {
  const MyHomePage({
    Key? key,
    required this.title,
  }) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {

// ・・・
```

次に`State`で`AnimationController`を定義し、  
`initState`を追加して`AnimationController`の初期化処理を行いましょう。

```
// ・・・

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {
  late AnimationController? _controller;

  @override
  void initState() {
    _controller = AnimationController(
      duration: const Duration(seconds: 5),
      vsync: this,
    );

    //初めて描画されたときにアニメーションを開始するよう設定
    WidgetsBinding.instance!.addPostFrameCallback((_) {
      _controller!.forward();
    });

    super.initState();
  }

// ・・・
```

`FloatingActionButton`を押したときに再度アニメーションが実行されるよう、設定しましょう。

```
// ・・・
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          _controller!.reset();
          _controller!.forward();
        },
        tooltip: 'Reset',
        child: const Icon(Icons.refresh),
      ),
// ・・・
```

これで`AnimationController`の実装は完了となります。

#### CustomPainterの設定

`CustomPainter`に各設定を行っていきます。

まず、`CustomPainter`継承クラスの`_MyCustomPainter`に、  
`AnimationController`を設定しましょう。  
この時、`CustomPainter`の`repaint`に`controller`を設定し、  
`AnimationController`によって再描画が指示されるよう設定していることに注意してください。

```
// ・・・
class _MyCustomPainter extends CustomPainter {
  _MyCustomPainter({
    required this.controller,
  }) : super(repaint: controller);

  final AnimationController controller;
// ・・・
```

今回、アニメーションにより再描画を行うため、  
`shouldRepaint`を`true`に設定しましょう。

```
// ・・・
  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return ｔrue;
  }
// ・・・
```

MyHomePageのbuildメソッド内の\_MyCustomPainterを設定している部分で、  
AnimationControllerを渡しましょう。

```
// ・・・
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: CustomPaint(
          painter: _MyCustomPainter(
            controller: _controller!,
          ),
          child: const SizedBox(width: 300, height: 300),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          _controller!.reset();
          _controller!.forward();
        },
        tooltip: 'Reset',
        child: const Icon(Icons.refresh),
      ),
    );
  }
// ・・・
```

### path\_animatorの設定

`path_animator`パッケージを使って、アニメーションを設定していきましょう。

#### パッケージのインストール

`pubspec.yaml` に以下のように追加し、パッケージをインストールしましょう。

```
dependencies:
  path_animator: ^0.0.1
```

#### パッケージのインポート

dartファイルにパッケージをインポートします。  
インポート部分に以下の文を追加しましょう。

```
import 'package:path_animator/path_animator.dart';
```

#### PathAnimatorの実装

使い方で解説した、`PathAnimator`の実装となります。  
`path`を`PathAnimator`を使って変換しましょう。

```
// ・・・
  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(size.width * 0.5, size.height * 0.5 * (1 + sin(-pi / 2)))
      ..lineTo(
        size.width * 0.5 * (1 + cos(4 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(4 * pi / 5 - pi / 2)),
      )
      ..lineTo(
        size.width * 0.5 * (1 + cos(8 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(8 * pi / 5 - pi / 2)),
      )
      ..lineTo(
        size.width * 0.5 * (1 + cos(2 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(2 * pi / 5 - pi / 2)),
      )
      ..lineTo(
        size.width * 0.5 * (1 + cos(6 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(6 * pi / 5 - pi / 2)),
      )
      ..close()
      ..addArc(Rect.fromLTWH(0, 0, size.width, size.height), -pi / 2, 2 * pi);

    final animatedPath = PathAnimator.build(
      path: path,
      animationPercent: controller.value,
    );

    final paint = Paint()
      ..color = Colors.black
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.0;
// ・・・
  }
// ・・・
```

最後に、`canvas.drawPath`にanimatedPathを渡して、完成となります。

```
// ・・・
  @override
  void paint(Canvas canvas, Size size) {
// ・・・
    canvas.drawPath(animatedPath, paint);
  }
// ・・・
```

完成した全体のコードはこちらとなります。

```
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:path_animator/path_animator.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Path Animator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Path Animator'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({
    Key? key,
    required this.title,
  }) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {
  late AnimationController? _controller;

  @override
  void initState() {
    _controller = AnimationController(
      duration: const Duration(seconds: 5),
      vsync: this,
    );

    WidgetsBinding.instance!.addPostFrameCallback((_) {
      _controller!.forward();
    });

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: CustomPaint(
          painter: _MyCustomPainter(
            controller: _controller!,
          ),
          child: const SizedBox(width: 300, height: 300),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          _controller!.reset();
          _controller!.forward();
        },
        tooltip: 'Reset',
        child: const Icon(Icons.refresh),
      ),
    );
  }
}

class _MyCustomPainter extends CustomPainter {
  _MyCustomPainter({
    required this.controller,
  }) : super(repaint: controller);

  final AnimationController controller;

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(size.width * 0.5, size.height * 0.5 * (1 + sin(-pi / 2)))
      ..lineTo(
        size.width * 0.5 * (1 + cos(4 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(4 * pi / 5 - pi / 2)),
      )
      ..lineTo(
        size.width * 0.5 * (1 + cos(8 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(8 * pi / 5 - pi / 2)),
      )
      ..lineTo(
        size.width * 0.5 * (1 + cos(2 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(2 * pi / 5 - pi / 2)),
      )
      ..lineTo(
        size.width * 0.5 * (1 + cos(6 * pi / 5 - pi / 2)),
        size.height * 0.5 * (1 + sin(6 * pi / 5 - pi / 2)),
      )
      ..close()
      ..addArc(Rect.fromLTWH(0, 0, size.width, size.height), -pi / 2, 2 * pi);

    final animatedPath = PathAnimator.build(
      path: path,
      animationPercent: controller.value,
    );

    final paint = Paint()
      ..color = Colors.black
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.0;

    canvas.drawPath(animatedPath, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
```

ここまで完成したら、アプリを実行してみてください。

以下のgifのように表示されるはずです。

![](http://blog.flutteruniv.com/wp-content/uploads/2022/04/path_animator_sample.gif)

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事では、線の軌跡をアニメーションすることのできるパッケージ、  
path\_animatorパッケージを紹介しました。

いかがだったでしょうか？

線の引き方を考えれば色々なアニメーションを実装できそうですよね。

ぜひ考えてみて、オリジナルのアニメーションを実装してみてください！

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/4/15）

あなたは、git使ってますか？

自分は、ほとんど毎日個人開発で使用しています。  
また、自分の作ったサンプルコードをアップする、などの用途でも使用しています。

バージョンコントロールができることは言うまでもなくgitを使う利点ですが、  
やったことがちゃんと記録され、どれだけやったかが見える化されるのは本当に良いものです。

もし使ったことのない人は、一度使ってみることをオススメします。  

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。