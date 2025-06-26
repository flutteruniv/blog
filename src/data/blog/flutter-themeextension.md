---
title: "【Flutter】2022年5月アップデート先取り紹介！【 ThemeExtension 】"
slug: "flutter-themeextension"
description: ""
pubDatetime: "2022-05-04"
author: "Aoi"
tags: ["ウィジェット"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---



Widgetに何度も色や大きさを設定するの面倒だな、、、





TextならThemeが使えるけれど、使えないWIdgetはどうすれば良いのかしら？Widgetの定義と装飾のコードは分けたいわ！




本記事ではこのような悩みにお答えします。



2022年5月に予定されているFlutterアップデートで実装予定の、自作のWidgetに対してもThemeにてサイズや色を設定できるようにする、ThemeExtensionについて解説します。



Flutterのコードの書き方の常識が次のアップデートで変わるかもしれません。



本記事で是非情報を先取りしてみてください！



課題点と解決方法







課題点



TextWidgetの例



あなたは、Flutterでこんなコードの書き方してはいませんか？



Text(
  'sample',
  style: TextStyle(fontSize: 24, color: Colors.green),
),



このように、サイズや色などの装飾と、メインとなる内容の部分（上記例だと'sample'）の部分を一緒に記載されている方が多いかと思います。



これは、装飾の部分が多くなればなるほど、縦にコードが長くなり、内容の部分を探すのに苦労する、読みにくいコードとなってしまいます。



また、同じ装飾を使い回す、ということを考えたときには、Text Widgetを使うたびに同じ装飾のコードが出てくることとなり、ボイラープレート(繰り返し)なコードとなってしまいます。



これを解決するのがTheme です。



MaterialApp内の、Themeにて以下のように設定することで、Text を装飾のコード無しで使用しても、Themeにて設定した装飾が反映されます。



    MaterialApp(
      theme: ThemeData(
        textTheme: const TextTheme(
          bodyText2: TextStyle(fontSize: 24, color: Colors.green),
        ),
      ),
      home: const MyWidget(),
    );



これで、装飾のコードと内容のコードが分離され、コード量の削減、ボイラープレートなコードの回避が可能となります。



自作Widgetでは、、、？



今の話はFlutterにて用意されているText Widgetについての方法でした。



では自作のWidgetではどうでしょうか？



例えば、以下のような自作Widgetを考えます。



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



このWidgetなら、colorやsizeに初期値が設定されているため、使用の際の装飾のコードの省略ができ、繰り返しを回避することができそうです。



ただ、内容の実装と装飾の初期値が一緒に定義されているため、初期値を変えたい時にはこの実装のコードまで見に行かなくてはなりません。ちょっと面倒ですよね。Text Widgetと装飾のコードの管理が異なるのも管理が複雑になり面倒です。



ただ、自作のWidgetにはThemeが用意されているわけではないので、Text Widgetの方法は使えません。



どうすれば良いでしょうか？



解決方法



「自作WidgetでもText Widgetと同じようにThemeを使いたい」という課題に対する解決策が、2022年5月に実施予定のFlutterのアップデートで実装される、【ThemeExtension】です。



端的に言うと、自作Widgetに対してもThemeを使えるようにするものとなります。



これにより自作Widgetでも装飾の定義部分と内容の定義部分をText Widget と同じようにわけることができ、よりわかりやすいコードを書くことが可能となります。



具体的な実装例については、次の章から確認していきます。



ThemeExtension の使い方







ThemeExtensionの使い方について解説していきます。




Flutter のバージョンを、betaチャンネルの"2.13.0-0.3.pre"にして、解説していきます。



アップデート後のstableチャンネルでは多少異なることがあるかもしれません。ご了承ください。




実装の流れは以下の通りです。




ThemeExtension実装クラスを作成する自作Widgetに1.のクラスを実装するMaterialAppにて1.のクラスを設定する




一つ一つ解説していきます。



ThemeExtension 継承クラスの作成



まず準備としてTextでのTextStyleにあたる、ThemeExtension継承クラスを作成します。



サンプルは以下の通りです。



class SquareStyle extends ThemeExtension<SquareStyle> {
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
  ThemeExtension<SquareStyle> copyWith({
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
  ThemeExtension<SquareStyle> lerp(
      ThemeExtension<SquareStyle>? other, double t) {
    if (other is! SquareStyle) {
      return this;
    }

    return SquareStyle(
      color: Color.lerp(color, other.color, t),
    );
  }
}



ThemeExtension実装クラスでは2つのメソッドのoverrideが必要です。



//1まず１つ目として、copyWithメソッドをoverrideする必要があります。



//22つ目として、Style間の変化を定義する、lerpメソッドをoverrideする必要があります。



自作WidgetへThemeExtension 継承クラスの実装



自作Widgetへ、ThemeExtension継承クラスを実装します。



Styleクラスの各プロパティを、自作Widgetに反映させるイメージです。



サンプルの実装は以下になります。



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
    final defaultStyle = Theme.of(context).extension<SquareStyle>()!;
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



//3BuildContextから設定されているThemeを取得しています。これにより、MaterialAppで設定したThemeが反映されます。



MaterialAppへThemeExtension 継承クラスの設定



最後に、MaterialAppへThemeExtension 継承クラスを設定します。



Text Widgetの時と同じように、ThemeDataのextensionsにて、以下のように設定可能です。



class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        extensions: const <ThemeExtension<dynamic>>[
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



サンプルコード全体



今回のサンプルコードの全体は以下のとおりです。



import 'package:flutter/material.dart';

const SquareStyle kSquareStyle1 =
    SquareStyle(size: 150, color: Colors.green, borderRadius: 10);
const SquareStyle kSquareStyle2 =
    SquareStyle(size: 200, color: Colors.red, borderRadius: 50);

void main() {
  runApp(const MyApp());
}

class SquareStyle extends ThemeExtension<SquareStyle> {
  const SquareStyle({
    this.color,
    this.size,
    this.borderRadius,
  });

  final Color? color;
  final double? size;
  final double? borderRadius;

  @override
  ThemeExtension<SquareStyle> copyWith({
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
  ThemeExtension<SquareStyle> lerp(
      ThemeExtension<SquareStyle>? other, double t) {
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
      theme: ThemeData(extensions: const <ThemeExtension<dynamic>>[
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
    final defaultStyle = Theme.of(context).extension<SquareStyle>()!;
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



また、以下のDartPadにて今回のコードを紹介しています。ぜひ併せて確認してみてください。




https://dartpad.dev/?id=4d6a932542c15f402a89269d80fe52b5&channel=beta




まとめ



本記事では2022年5月に予定されているFlutterアップデートで実装予定の、自作のWidgetに対してもThemeにてサイズや色を設定できるようにする、ThemeExtensionについて解説しました。



いかがだったでしょうか？



今回の話はFlutterのコードの書き方を大きく変える、転換点の話かもしれません。



アップデートが来た際には、ぜひ使ってみてください。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










参考




https://youtu.be/8-szcYzFVao




編集後記（2022/5/4）




本記事ではThemeExtensionについて解説しました。



個人的な所感をここでは述べさせていただきます。



今まででもTextなどでは、Themeを使った書き方、というのはありました。



これが自作Widgetでもできるようになることで、コードの書き方のスタンダードが、Themeを使って装飾と内容を分けるというコード構造に変わるかもしれません。



ディレクトリ構造として、Themeフォルダを必ず作るようになる、といった形を想像しています。



一種のHTML/CSSの書き方に近いかもしれません。



もちろん、これに抵抗がある方もいらっしゃるかもしれません。装飾と内容を分けないコードは、一つにまとまっている、という点で一定の読みやすさがあるからです。



装飾と内容を分けるか、分けないか、派閥ができるような気がしています。



ただ、どちらでも書ける、というのはFlutterの強みのように思います。あなたがどんなバックグラウンドを持っていたとしても、それに近い形でFlutterのコードを書けるからです。



ますますFlutterの将来が楽しみになる、そんな話題だと思いました。アップデート、楽しみに待ちましょう！





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

