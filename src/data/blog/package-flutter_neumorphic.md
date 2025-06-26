---
title: "【 flutter_neumorphic 】ニューモーフィズムでUIを実装しよう"
slug: "package-flutter_neumorphic"
author: "Aoi"
description: ""
pubDatetime: 2022-07-01T10:00:00.000Z
tags: ["パッケージ"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

flutter\_neumorphic ？ どんなパッケージなんだろう？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

おしゃれなUIを作ってみたいわ！

本記事ではそんな疑問、要望にお答えします。

立体的で質感のあるデザインスタイル、**ニューモーフィズム**で  
UIを構築するのに有用なパッケージ、[flutter\_neumorphic](https://pub.dev/packages/flutter_neumorphic/install) の使い方を解説します。

以下のようなUI を実装することが簡単に可能です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-01-17.27.21.png)

ぜひ本記事を読んで実装してみて下さい！

## 基本的な使い方

![](https://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて  
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add flutter_neumorphic
```

### パッケージのインポート

UIを構築するDartファイルの上部に以下のインポート文を追加し、  
パッケージをインポートします。

```dart
import 'package:flutter_neumorphic/flutter_neumorphic.dart';
```

### Widget の設定

flutter\_neumorphicには様々なボタンや`TextField`など、さまざまな`Widget`が用意されています。

どんなWidgetが用意されているかについては、  
以下のパッケージ紹介ページをご確認ください。

https://pub.dev/packages/flutter\_neumorphic#-widgets

本記事ではflutter\_neumorphicの基本Widget 、  
`Neumorphic Widget`について紹介します。

使い方は簡単で、ニューモーフィズムを実装したい`Container`や`SizedBox` を  
`Newmorpic` `Widget`で囲うだけです。

```dart
import 'package:flutter_neumorphic/flutter_neumorphic.dart';

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
      backgroundColor: Colors.black12,
      body: Center(
        child: Neumorphic(
          child: const SizedBox(
            height: 100,
            width: 100,
            child: Center(
              child: Text('Hello World'),
            ),
          ),
        ),
      ),
    );
  }
}
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-01-17.27.21.png)

色や深さ、光の当たり方向は`style`に`NeumorphicStyle`を  
設定することによって調整することが可能です。

#### 色

色の調製例のコードです。  
`NeumorphicStyle`

```dart
        Neumorphic(
          style: NeumorphicStyle(
            color: Colors.green[100],
          ),
          child: const SizedBox(
            height: 100,
            width: 100,
            child: Center(
              child: Text('Hello World'),
            ),
          ),
        ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-01-17.41.41.png)

#### 深さ

depth プロパティに-20 ~ 20の値を設定することで、  
でっぱり具合（へこみ具合）を調整することができます。

以下は-20を設定した場合の例です。

```dart
      Neumorphic(
          style: const NeumorphicStyle(
            depth: -20,
          ),
          child: const SizedBox(
            height: 100,
            width: 100,
            child: Center(
              child: Text('Hello World'),
            ),
          ),
        ),
      ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-01-17.46.02.png)

#### 光の方向

デフォルトは左上から光が当たっている形となっていますが、  
この光の方向を`lightSource`プロパティに`LigthtSource`を設定することで  
変更することが可能です。

以下の例では右上からに変更を行っています。

```
        Neumorphic(
          style: const NeumorphicStyle(
            lightSource: LightSource.topRight,
          ),
          child: const SizedBox(
            height: 100,
            width: 100,
            child: Center(
              child: Text('Hello World'),
            ),
          ),
        ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-01-17.48.43.png)

## おまけ ニューモーフィズムなWidgetの作り方

![](https://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング女性.jpeg)

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)

ニューモーフィズムな`Widget`をパッケージに依存せずに作りたい！

そんな人向けに、ニューモーフィズムなWidgetの作り方を紹介します。

ポイントは影の付け方です。  
光源が左上にあるとして、左上側は明るく、右下側は暗く影をつけると、  
ニューモーフィズムに見えるWidgetとなります。

実装例は以下となります。

```dart
        Container(
          height: 100,
          width: 100,
          decoration: BoxDecoration(
            color: Colors.grey[300],
            borderRadius: BorderRadius.circular(20),
            boxShadow: [
              //1
              BoxShadow(
                color: Colors.grey[500]!,
                blurRadius: 15,
                offset: const Offset(5, 5),
              ),
              //2
              const BoxShadow(
                color: Colors.white,
                blurRadius: 15,
                offset: Offset(-5, -5),
              ),
            ],
          ),
          child: const Center(
            child: Text('Hello World'),
          ),
        ),
```

//1  
右下に影をつけている部分です。  
`offset`で右下にずらしています。

//2  
左上に光が当たっている表現として明るい色を設定している部分です。  
offsetで左上にずらし、whiteを設定しています。

このコードで以下のような見た目となります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-01-18.11.57.png)

以上が、パッケージに依存すること無くニューモーフィズムを実装する方法でした！

## まとめ

![](https://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事では、ニューモーフィズムで  
UIを構築するのに有用なパッケージ、flutter\_neumorphic の使い方を解説しました。

いかがだったでしょうか？  
ニューモーフィズムでUIを構築してみたくなりましたか？

本記事で紹介したように、簡単におしゃれなデザインを実装できるようになるため、  
ぜひ使用を検討してみて下さい！

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 参考

https://youtu.be/mf2CoM7btfQ

## 編集後記（2022/7/1）

Flutterでニューモーフィズムを実装する方法についての記事でした。

そもそも、ニューモーフィズムとは？となる方がいらっしゃるかもしれません。

ニューモーフィズムは「new」と、同じく立体的な表現の「スキューモーフィズム」の合体による造語で、「スキューモーフィズム」をより現代的にしたもの、ということです。

参考：

https://fastcoding.jp/blog/all/info/neumorphism/#:~:text=%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%95%E3%82%A3%E3%82%BA%E3%83%A0%EF%BC%88Neumorphism%EF%BC%89%E3%81%A8,%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AE%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E6%89%8B%E6%B3%95%E3%81%A7%E3%81%99%E3%80%82

このようなデザイン手法について学んでみるのも面白いかもしれませんね。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。