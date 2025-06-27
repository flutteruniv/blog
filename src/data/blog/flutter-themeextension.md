---
title: "【Flutter】2022年5月アップデート先取り紹介！【 ThemeExtension 】"
slug: "flutter-themeextension"
description: ""
pubDatetime: "2022-05-04"
author: "Aoi"
tags: ["Widget"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/ojisan.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Widgetに何度も色や大きさを設定するの面倒だな、、、
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/obasan.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      TextならThemeが使えるけれど、使えないWIdgetはどうすれば良いのかしら？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>
Widgetの定義と装飾のコードは分けたいわ！

本記事ではこのような悩みにお答えします。

2022年5月に予定されているFlutterアップデートで実装予定の、
自作の`Widget`に対しても`Theme`にてサイズや色を設定できるようにする、
`ThemeExtension`について解説します。

Flutterのコードの書き方の常識が次のアップデートで変わるかもしれません。

本記事で是非情報を先取りしてみてください！

## 課題点と解決方法

![](/images/wp-content/uploads/2022/02/コーディング男性.webp)

### 課題点

#### TextWidgetの例

あなたは、Flutterでこんなコードの書き方してはいませんか？

```
Text(
  'sample',
  style: TextStyle(fontSize: 24, color: Colors.green),
),
```

このように、サイズや色などの装飾と、メインとなる内容の部分（上記例だと`'sample'`）の部分
を一緒に記載されている方が多いかと思います。

これは、装飾の部分が多くなればなるほど、
縦にコードが長くなり、
内容の部分を探すのに苦労する、
読みにくいコードとなってしまいます。

また、同じ装飾を使い回す、ということを考えたときには、
`Text Widget`を使うたびに同じ装飾のコードが出てくることとなり、
ボイラープレート(繰り返し)なコードとなってしまいます。

これを解決するのが`Theme `です。

`MaterialApp`内の、`Theme`にて以下のように設定することで、
`Text` を装飾のコード無しで使用しても、`Theme`にて設定した装飾が反映されます。

```
MaterialApp(
      theme: ThemeData(
        textTheme: const TextTheme(
          bodyText2: TextStyle(fontSize: 24, color: Colors.green),
        ),
      ),
      home: const MyWidget(),
    );
```

これで、装飾のコードと内容のコードが分離され、
コード量の削減、ボイラープレートなコードの回避が可能となります。

#### 自作Widgetでは、、、？

今の話はFlutterにて用意されている`Text Widget`についての方法でした。

では自作の`Widget`ではどうでしょうか？

例えば、以下のような自作Widgetを考えます。

```dart
class Square extends StatelessWidget {
  const Square({
    Key? key,
    this.size = 100,
    this.color = Colors.blue,
    this.borderRadius = 10,
    this.child,
  }) : super(key: key);

  final double size;
  final Color color;
  final double borderRadius;

  final Widget? child;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: size,
      width: size,
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.circular(borderRadius),
      ),
      child: child,
    );
  }
}
```

この`Widget`なら、`color`や`size`に初期値が設定されているため、
使用の際の装飾のコードの省略ができ、繰り返しを回避することができそうです。

ただ、内容の実装と装飾の初期値が一緒に定義されているため、
初期値を変えたい時にはこの実装のコードまで見に行かなくてはなりません。
ちょっと面倒ですよね。
`Text Widget`と装飾のコードの管理が異なるのも管理が複雑になり面倒です。

ただ、自作の`Widget`には`Theme`が用意されているわけではないので、
`Text Widget`の方法は使えません。

どうすれば良いでしょうか？

### 解決方法

「自作`Widget`でも`Text Widget`と同じように`Theme`を使いたい」
という課題に対する解決策が、
2022年5月に実施予定のFlutterのアップデートで実装される、【`ThemeExtension`】です。

端的に言うと、自作`Widget`に対しても`Theme`を使えるようにするものとなります。

これにより自作`Widget`でも装飾の定義部分と内容の定義部分を
`Text Widget` と同じようにわけることができ、
よりわかりやすいコードを書くことが可能となります。

具体的な実装例については、次の章から確認していきます。

## ThemeExtension の使い方

![](/images/wp-content/uploads/2022/02/コーディング女性.webp)

ThemeExtensionの使い方について解説していきます。

Flutter のバージョンを、`beta`チャンネルの`"2.13.0-0.3.pre"`にして、
解説していきます。

アップデート後の`stable`チャンネルでは多少異なることがあるかもしれません。
ご了承ください。

実装の流れは以下の通りです。

1. `ThemeExtension`実装クラスを作成する
2. 自作`Widget`に1.のクラスを実装する
3. `MaterialApp`にて1.のクラスを設定する

一つ一つ解説していきます。

### ThemeExtension 継承クラスの作成

まず準備として`Text`での`TextStyle`にあたる、`ThemeExtension`継承クラスを作成します。

サンプルは以下の通りです。

```dart
class SquareStyle extends ThemeExtension {
  const SquareStyle({
    this.color,
    this.size,
    this.borderRadius,
  });

  final Color? color;
  final double? size;
  final double? borderRadius;

//1
  @override
  ThemeExtension copyWith({
    Color? color,
    double? size,
    double? borderRadius,
  }) =>
      SquareStyle(
        color: color ?? this.color,
        size: size ?? this.size,
        borderRadius: borderRadius ?? this.borderRadius,
      );

//2
  @override
  ThemeExtension lerp(
      ThemeExtension? other, double t) {
    if (other is! SquareStyle) {
      return this;
    }

    return SquareStyle(
      color: Color.lerp(color, other.color, t),
    );
  }
}
```

`ThemeExtension`実装クラスでは2つのメソッドの`override`が必要です。

//1
まず１つ目として、`copyWith`メソッドを`override`する必要があります。

//2
2つ目として、`Style`間の変化を定義する、`lerp`メソッドを`override`する必要があります。

### 自作WidgetへThemeExtension 継承クラスの実装

自作`Widget`へ、`ThemeExtension`継承クラスを実装します。

`Style`クラスの各プロパティを、自作`Widget`に反映させるイメージです。

サンプルの実装は以下になります。

```dart
class Square extends StatelessWidget {
  const Square({
    Key? key,
    this.style,
    this.child,
  }) : super(key: key);

  final SquareStyle? style;
  final Widget? child;

  @override
  Widget build(BuildContext context) {
    //3
    final defaultStyle = Theme.of(context).extension()!;
    final size = style?.size ?? defaultStyle.size;
    final color = style?.color ?? defaultStyle.color;
    final borderRadius = style?.borderRadius ?? defaultStyle.borderRadius;
    return Container(
      height: size,
      width: size,
      decoration: BoxDecoration(
        color: color,
        borderRadius:
            borderRadius != null ? BorderRadius.circular(borderRadius) : null,
      ),
      child: child,
    );
  }
}
```

//3
`BuildContext`から設定されている`Theme`を取得しています。
これにより、`MaterialApp`で設定した`Theme`が反映されます。

### MaterialAppへThemeExtension 継承クラスの設定

最後に、`MaterialApp`へ`ThemeExtension` 継承クラスを設定します。

`Text Widget`の時と同じように、`ThemeData`の`extensions`にて、以下のように設定可能です。

```dart
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        extensions: const >[
          SquareStyle(
            size: 100,
            color: Colors.deepPurple,
          ),
        ],
      ),
      home: const MyWidget(),
    );
  }
}
```

### サンプルコード全体

今回のサンプルコードの全体は以下のとおりです。

```dart
import 'package:flutter/material.dart';

const SquareStyle kSquareStyle1 =
    SquareStyle(size: 150, color: Colors.green, borderRadius: 10);
const SquareStyle kSquareStyle2 =
    SquareStyle(size: 200, color: Colors.red, borderRadius: 50);

void main() {
  runApp(const MyApp());
}

class SquareStyle extends ThemeExtension {
  const SquareStyle({
    this.color,
    this.size,
    this.borderRadius,
  });

  final Color? color;
  final double? size;
  final double? borderRadius;

  @override
  ThemeExtension copyWith({
    Color? color,
    double? size,
    double? borderRadius,
  }) =>
      SquareStyle(
        color: color ?? this.color,
        size: size ?? this.size,
        borderRadius: borderRadius ?? this.borderRadius,
      );

  @override
  ThemeExtension lerp(
      ThemeExtension? other, double t) {
    if (other is! SquareStyle) {
      return this;
    }

    return SquareStyle(
      color: Color.lerp(color, other.color, t),
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(extensions: const >[
        SquareStyle(
          size: 100,
          color: Colors.deepPurple,
        ),
      ]),
      home: const MyWidget(),
    );
  }
}

class MyWidget extends StatelessWidget {
  const MyWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: const [
              Square(),
              Square(
                style: kSquareStyle1,
              ),
              Square(
                style: kSquareStyle2,
              )
            ]),
      ),
    );
  }
}

class Square extends StatelessWidget {
  const Square({
    Key? key,
    this.style,
    this.child,
  }) : super(key: key);

  final SquareStyle? style;
  final Widget? child;

  @override
  Widget build(BuildContext context) {
    final defaultStyle = Theme.of(context).extension()!;
    final size = style?.size ?? defaultStyle.size;
    final color = style?.color ?? defaultStyle.color;
    final borderRadius = style?.borderRadius ?? defaultStyle.borderRadius;
    return Container(
      height: size,
      width: size,
      decoration: BoxDecoration(
        color: color,
        borderRadius:
            borderRadius != null ? BorderRadius.circular(borderRadius) : null,
      ),
      child: child,
    );
  }
}
```

また、以下のDartPadにて今回のコードを紹介しています。
ぜひ併せて確認してみてください。

https://dartpad.dev/?id=4d6a932542c15f402a89269d80fe52b5&channel=beta

## まとめ

本記事では2022年5月に予定されているFlutterアップデートで実装予定の、
自作の`Widget`に対しても`Theme`にてサイズや色を設定できるようにする、
`ThemeExtension`について解説しました。

いかがだったでしょうか？

今回の話はFlutterのコードの書き方を大きく変える、
転換点の話かもしれません。

アップデートが来た際には、ぜひ使ってみてください。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://youtu.be/8-szcYzFVao

## 編集後記（2022/5/4）

本記事では`ThemeExtension`について解説しました。

個人的な所感をここでは述べさせていただきます。

今まででも`Text`などでは、`Theme`を使った書き方、というのはありました。

これが自作`Widget`でもできるようになることで、
コードの書き方のスタンダードが、
`Theme`を使って装飾と内容を分けるというコード構造に変わるかもしれません。

ディレクトリ構造として、`Theme`フォルダを必ず作るようになる、
といった形を想像しています。

一種のHTML/CSSの書き方に近いかもしれません。

もちろん、これに抵抗がある方もいらっしゃるかもしれません。
装飾と内容を分けないコードは、一つにまとまっている、
という点で一定の読みやすさがあるからです。

装飾と内容を分けるか、分けないか、派閥ができるような気がしています。

ただ、どちらでも書ける、というのはFlutterの強みのように思います。
あなたがどんなバックグラウンドを持っていたとしても、
それに近い形でFlutterのコードを書けるからです。

ますますFlutterの将来が楽しみになる、そんな話題だと思いました。
アップデート、楽しみに待ちましょう！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
