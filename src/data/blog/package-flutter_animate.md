---
title: "【 flutter_animate 】アニメーションを直感的に実装しよう！【 Flutter 】"
slug: "package-flutter_animate"
author: "Aoi"
description: ""
pubDatetime: "2022-12-28"
tags: ["Package"]
layout: "../../layouts/BlogPost.astro"
---

まずはこちらのGIFを御覧ください。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/12/20221228_demo.gif)

こちらのアニメーション実装部分のコードが以下です。

```dart
Image.asset('assets/flutter_univ_logo.png', width: 200)
    .animate(onPlay: (controller) => controller.repeat())
    .shimmer(delay: 4000.ms, duration: 1800.ms)
    .shake(hz: 4, curve: Curves.easeInOutCubic)
    .scale(
      begin: const Offset(1, 1),
      end: const Offset(1.1, 1.1),
      duration: 600.ms,
    )
    .then(delay: 600.ms)
    .scale(
      begin: const Offset(1, 1),
      end: const Offset(1 / 1.1, 1 / 1.1),
    )
```

サンプルコード全体
```dart
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

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
      appBar: AppBar(),
      body: Center(
        child: Image.asset('assets/flutter_univ_logo.png', width: 200)
            .animate(onPlay: (controller) => controller.repeat())
            .shimmer(delay: 4000.ms, duration: 1800.ms)
            .shake(hz: 4, curve: Curves.easeInOutCubic)
            .scale(
              begin: const Offset(1, 1),
              end: const Offset(1.1, 1.1),
              duration: 600.ms,
            )
            .then(delay: 600.ms)
            .scale(
              begin: const Offset(1, 1),
              end: const Offset(1 / 1.1, 1 / 1.1),
            ),
      ),
    );
  }
}
```

`shimmer`や`shake`等アニメーションのエフェクトをウィジェットの後ろに書き連ねるだけで、
複雑に組み合わさったアニメーションができています。

この書き方を可能にするパッケージが[flutter_animate](https://pub.dev/packages/flutter_animate)パッケージです。

本記事ではこのflutter_animateパッケージの使い方を紹介します。

flutter_animateパッケージは、
Flutter公式のリファレンスアプリである、[Wonderous](https://flutter.gskinner.com/wonderous/)でも使用されているパッケージです。

ぜひ本記事を読んで直感的なアニメーションの実装を体験してみてください！

## flutter_animate の基本的な使い方

[flutter_animate](https://pub.dev/packages/flutter_animate)パッケージを使ってアニメーションを実装する方法について紹介します。

### 準備

まず準備として、パッケージのインストールと、
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add flutter_animate
```

#### パッケージのインポート

実装したいDartファイルの上部に以下のインポート文を追加し、
パッケージをインポートします。

```dart
import 'package:flutter_animate/flutter_animate.dart';
```

### 実装

実装方法について解説します。

- `Animate` ウィジェットを使う方法
- extension method を使用する方法

2つを紹介します。

#### Animate ウィジェットを使う方法

`Animate`ウィジェットを使用したアニメーションの実装方法を解説します。

アニメーションを付与したいウィジェットを、`Animate`で囲み、
`effect`プロパティに付与したいアニメーション効果を追加します。

```dart
Animate(
  effects: const [ShimmerEffect()],
  child: Text('Hello World'),
),
```

#### extension method を使用する方法

extension method を使用する方法を紹介します。

flutter_animate パッケージをDart ファイルに`import`をすると、
`Widget`に`animate`というextensionが追加され、
すべてのウィジェットで`animate`というメソッドが使えるようになります。

この`animate`を使うことでアニメーションの実装が可能です。

```dart
Text('Hello World').animate().shimmer()
```

この記述で、`Animate`ウィジェットを使用した方法と同様のアニメーションを実装できます。

基本的な使い方は以上です！

## カスタマイズ方法

flutter_animateを使用したアニメーションのカスタマイズ方法を紹介します。

extension method を使用した方法を用いて紹介します。

### アニメーション時間の設定

アニメーションの時間はエフェクトの`duration`プロパティで設定できます。

```dart
Text('Hello World').animate().shimmer(duration: 500.ms),
```

flutter_animateを`import`すると、`num`に設定されたextensionを使用でき、
`500.milliseconds`や`5.seconds`と書くことで、
`Duration`として利用することが可能になります。

### アニメーションの繰り返し

アニメーションの繰り返しは、
`animate` の`onPlay`プロパティにて以下のようにして設定可能です。

```dart
Text('Hello World')
  .animate(
    onPlay: (controller) => controller.repeat(),
  )
  .shimmer()
```

### アニメーションの重ね合わせ

複数のアニメーションを重ね合わせる方法を紹介します。
エフェクトのメソッドを組み合わせることで、アニメーションを重ね合わせることが可能です。

```dart
Image.asset('assets/flutter_univ_logo.png', width: 200)
  .animate(onPlay: (controller) => controller.repeat())
  .shimmer(duration: 1.seconds)
  .shake(duration: 1.seconds)
  .slideX(duration: 1.seconds),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/12/20221228_slide.gif)

## アニメーションの種類

flutter_animateに用意されているアニメーションエフェクトを紹介します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/12/20221228_catalog.gif)

上記は公式のExampleアプリを実行して撮ったGIFでの紹介となります。

各アニメーションの実装コードに関しては、以下を御覧ください。

https://github.com/gskinner/flutter_animate/blob/main/example/lib/examples/everything_view.dart

## まとめ

本記事では[flutter_animate](https://pub.dev/packages/flutter_animate)パッケージの基本的な使い方からカスタマイズ方法、
用意されているアニメーションエフェクトの紹介を行いました。

いかがだったでしょうか？

公式のReadmeにはさらに発展したカスタマイズ方法等が紹介されているので、
もっと詳しく知りたい場合はぜひ読んでみることをおすすめします。

アニメーションを実装する際の候補として、
ぜひflutter_animateを検討いただければと思います。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/12/26）

flutter_animate の紹介記事でした。

このパッケージを触るのが楽しくて、
Flutter大学ロゴにいろいろなアニメーションを付けて遊んでいました。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/12/flutter_univ_logo_2.gif)

こちらのアニメーションはFlutter 大学のSlack のスタンプとして使用可能となっています。

好きな画像を好きなように動かせるのはとても面白いですね。

皆さんも是非flutter_animateパッケージを使用して、
さまざまなアニメーションを実装してみてください！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。