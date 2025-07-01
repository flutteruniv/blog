---
title: "【 Flutter x Flame 】ブロック崩しゲームを作ろう！"
slug: "flutter-flame-block-breaker-game"
author: "Aoi"
description: ""
pubDatetime: "2022-10-15"
tags: ["ゲーム開発"]
layout: "../../layouts/BlogPost.astro"
---

**『 Flame を使ってゲームを作ってみたい！』**

そんな要望にお答えするのが本記事です。

Flutter のゲームエンジンであるFlame を使って、
ブロック崩しゲームを作るチュートリアル記事となります。

本記事を読めば、以下のようなゲームを作成可能です。

https://youtu.be/IGZ2TnKKzIU

Flame でどんなふうにアプリを作るのか、
知ることが出来る記事となっています。

ぜひ読んでみてください！

## Flame とは

Flame とは ゲームのための独創的な解決策を提供する、 Flutter のゲームエンジン です。
Flameを利用することにより、ゲームを作成するのに必要なコードの簡素化が行えます。

とはいえ、Flutterで利用するには、[こちら](https://pub.dev/packages/flame)のパッケージを利用することで利用ができます。

今回紹介するFlameの機能はごく一部です。

全体を知りたい、という方は、ぜひ[Flame公式ドキュメント](https://docs.flame-engine.org/latest/#)をご確認ください。

## Flame チュートリアル ：ブロック崩しゲームを作ろう！

### 概要

今回のチュートリアルでは、以下のようなブロック崩しゲームを作成します。

- ボールをパドル(上記動画内で左右に動く青色のもの)で反射させ、
ぶつかったら壊れるブロックをすべて壊すことを目的とするゲーム
- ボールは壁、パドル、ブロックに当たると跳ね返る
- ３回画面下部に落ちるとゲームオーバーとなる

次のセクションから実際に作成に入ります。
ぜひ読みつつ、一緒に作成してみましょう！

今回作成するアプリの開発環境は以下となります。

- Flutter 3.3.4
- Flame 1.4.0

Flutterの環境構築や、Flutterプロジェクトの作り方は理解している前提で解説します。

もしこの部分が不安な方は、以下の記事を読んでから始めてみてください。

https://blog.flutteruniv.com/flutter-entrance/

### 準備

#### プロジェクトの作成とパッケージのインストール

任意の名前でFlutterプロジェクトを作成しましょう。

次にそのプロジェクトをお使いのIDE (統合開発環境、Android Studio や VS code)で
開いてください。

CLI(macならターミナル)で、作成したプロジェクトのルートにて
以下のコマンドを実行しflameパッケージをインストールします。

```bash
flutter pub add flame
```

#### ファイルの準備

libフォルダにて、以下のフォルダ構成で空のファイルを作成します。

<img src="/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-13-16.48.37.webp" alt="" width="300">

#### constants.dart の準備

今回のチュートリアルでは、
アプリ内で設定する数字や色等を、すべて`constants.dart`にまとめてます。

以下のコードをコピーし、`constants.dart`のファイルに貼り付けてください。

```dart
import 'dart:math';

import 'package:flutter/material.dart';

//Paddle Settings
const double kPaddleWidth = 100;
const double kPaddleHeight = 20;
//Start position from bottom.
const double kPaddleStartY = 50;
const Color kPaddleColor = Colors.blue;

//Ball Settings
const double kBallRadius = 10;
const double kBallSpeed = 500;
const double kBallStartYRatio = 1 / 2;
const double kBallMinSpawnAngle = 45;
const double kBallMaxSpawnAngle = 135;
const int kBallRandomNumber = 5;
const double kBallNudgeSpeed = 300;
const double kBallUncontrolledPositionY = 10;
const Color kBallColor = Colors.white;

// Math Settings
const double kRad = pi / 180;

//Button Settings
const double kButtonWidth = 200;
const double kButtonHeight = 50;
const Color kButtonColor = Colors.blue;
const Color kGameOverButtonColor = Colors.red;

//Countdown Settings
const double kCountdownSize = 200;
const TextStyle kCountdownTextStyle = TextStyle(
  color: Colors.white,
  fontWeight: FontWeight.bold,
  fontSize: 160,
);
const int kCountdownDuration = 3;

//Game Settings
const int kGameTryCount = 3;
const int kBlocksColumnCount = 2;
const int kBlocksRowCount = 3;

//Block Settings
const double kBlocksStartYPosition = 50;
const double kBlocksStartXPosition = 50;
const double kBlocksHeightRatio = 1 / 3;
const List kBlockColors = [
  Colors.red,
  Colors.blue,
  Colors.green,
  Colors.yellow,
  Colors.purple,
  Colors.orange,
];
const String kBlockPositionX = 'x';
const String kBlockPositionY = 'y';
const double kBlockPadding = 5;
```

準備は以上となります！
次から実際にゲームを構築していきましょう！

### ゲームの画面表示

まずゲーム全体を取り仕切る、`FlameGame`を拡張したクラスを用意します。

`block_breaker.dart`に以下のコードを貼り付けてください。

```dart
import 'package:flame/game.dart';

class BlockBreaker extends FlameGame {}
```

現在、ゲームは空の状態です。
この空の状態をアプリに表示させてみましょう。

`main.dart` に書かれているコードをすべて削除し、以下のコードを貼り付けてください。

```dart
import 'package:flame/game.dart';
import 'package:flutter/material.dart';

import 'game/block_breaker.dart';

void main() {
  final game = BlockBreaker();
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: SafeArea(
        child: GameWidget(
          game: game,
        ),
      ),
    ),
  );
}
```

ポイントとなるのは`GameWidget`です。
`GameWidget`は`Game`クラスを拡張したクラスのインスタンスを元に、
画面に作成したゲームを表示してくれるウィジェットです。

`FlameGame`クラスは`Game`クラスを拡張しているので、
`BlockBreaker`クラスは`Game`クラスの拡張クラスとなります。

クラス・インスタンスとは何かについては、以下の本にもまとまっております。

https://zenn.dev/flutteruniv/books/dart-textbook

今回のチュートリアルでは、クラスの拡張についてはわからなくても
ゲームの完成は可能です。

もし深く知りたい場合は、以下の記事をご確認ください。

https://blog.flutteruniv.com/flutter-dart-extends/

今回の場合、これからゲームを構築していく`BlockBreaker`クラスのインスタンスを
`GameWidget`に与えることで、
`GameWidget`にブロック崩しゲームを表示してもらいます。

ここまでできたらアプリを実行してみましょう。

以下のように真っ黒の画面が表示されるはずです。

<img src="/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-13-17.30.35.webp" alt="" width="300">

今回のチュートリアルではmacOSでの実行画像を表示します。

以上で、ゲームの画面表示は完了となります。

### パドルの追加

ゲーム画面にパドルを表示させてみましょう。

#### パドルの作成

まず、パドルの作成を行います。

`paddle.dart`に以下のコードを貼り付けてください。

```dart
import 'dart:ui';

import 'package:flame/components.dart';

import '../../constants/constants.dart';

class Paddle extends RectangleComponent {
  Paddle()
      : super(
          size: Vector2(kPaddleWidth, kPaddleHeight),
          paint: Paint()..color = kPaddleColor,
        );
}
```

このコードでは、パドルを設定する、`Paddle`クラスを作成しています。
`Paddle`クラスは`RectangleComponent`クラスの拡張クラスしており、
この拡張により、長方形の物体の性質を持つこととなります。

`super`内で、長方形の物体における設定をしています。
`size`でサイズを設定します。
`Vector2`は横方向(`x`方向)に第1引数、縦方向(`y`方向)に第2引数の大きさを持つ矢印を表しています。

<img src="/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-13-17.50.54.webp" alt="" width="300">

これをsizeに指定すると、横に第1引数分、縦に第2引数分の大きさを持つ長方形となります。

今回は`Vector2(kPaddleWidth, kPaddleHeight)`と設定しているので、
横に`kPaddleWidth`、縦に`kPaddleHeight`の長方形となります。
`kPaddleWidth`、`kPaddleHeight`の具体的な値は`constants.dart`にて設定されています。

また、`paint`にて色の指定をしています。

こちらは補足となるので、興味のある方のみお読みください。

```dart
Paint()..color = kPaddleColor
```

の意味についてです。

`Paint()`で`Paint`クラスのインスタンスを設定します。
".."はカスケード演算子と呼びます。
詳細な解説は省きますが、同じインスタンスに対して複数回処理を行ったり、
今回のようにインスタンスのフィールドを直接変更する際に用います。

今回の場合、
`color`に`constants.dart`で設定した`kPaddleColor`を与えた`Paint`クラスのインスタンス、
という意味になります。

以上でパドルの作成は完了です。

#### パドルの配置

続いて、パドルを配置しましょう。
`block_breaker.dart`に移動し、`BlockBreaker`クラスに`onLoad`メソッドを追加します。

以下のコードを全文コピーし、先程書いたblock_breaker.dartのコードから置き換えてください。

```dart
import 'package:flame/game.dart';

import '../constants/constants.dart';
import 'component/paddle.dart';

class BlockBreaker extends FlameGame {
  @override
  Future? onLoad() async {
    final paddle = Paddle();
    final paddleSize = paddle.size;
    paddle
      ..position.x = size.x / 2 - paddleSize.x / 2
      ..position.y = size.y - paddleSize.y - kPaddleStartY;

    await addAll([
      paddle,
    ]);
  }
}
```

`onLoad()` メソッドは、ゲームのロード（初期読み込み）時に呼ばれるメソッドです。
このメソッドで、ゲーム中の初期状態の物体の配置を行います。

`onLoad()` メソッド内で`Paddle`のインスタンス化を行い、以下のコードで`Paddle`の初期位置を設定しています。

```dart
paddle
      ..position.x = size.x / 2 - paddleSize.x / 2
      ..position.y = size.y - paddleSize.y - kPaddleStartY;
```

`Paddle`インスタンスの`position`プロパティの`x`要素に、`size.x / 2 - paddleSize.x / 2`を指定しています。
ここで、`size`はゲーム画面全体の大きさを表します。
`size.x` でゲーム画面の横方向の大きさとなります。

paddleSizeはパドルの大きさなので、`size.x / 2 - paddleSize.x / 2`で以下の図のように、
パドルの位置を横方向の中心に設定することとなります。

<img src="/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-13-18.19.23.webp" alt="" width="300">

`position.y`の内容や以下で同じく出てくる配置の設定では
一部を除いて解説を省略します。

詳しく知りたい方は同じく図を書いて設定内容を確認してみてください。

`addAll`メソッドは、物体をゲーム中に配置するメソッドです。
上記で位置を設定した`paddle`を配置しています。

ここまでできたらアプリを実行してみましょう。
以下の画像のように中央にパドルが配置されるはずです。

<img src="/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-13-18.33.23.webp" alt="" width="300">

表示されない場合はホットリスタートをお試しください。

以上が物体の作成、配置の基礎となります。

### ボールの追加

続いて、ボールの追加を行います。

#### ボールの作成

まず、ボールの作成を行います。

`ball.dart`に以下のコードを貼り付けてください。

```dart
import 'dart:ui';

import 'package:flame/components.dart';

import '../../constants/constants.dart';

class Ball extends CircleComponent {
  Ball() {
    radius = kBallRadius;
    paint = Paint()..color = kBallColor;
  }
}
```

このコードでは、ボールを設定する、`Ball`クラスを作成しています。
`Ball`クラスは`CircleComponent`クラスの拡張クラスしており、
この拡張により、円の物体の性質を持つこととなります。

`radius`にて円の半径を設定しています。

以上でボールの作成は完了です。

#### ボールの配置

続いて、ボールを配置しましょう。

`block_breaker.dart`に移動します。

ゲームの仕様上、ボールが下部に落ちた際など、何度もボールを配置し直すので、
ボール配置の処理を`resetBall`というメソッドで定義します。

`block_breaker.dart`、`BallBreaker`クラスの`onLoad`メソッドの下に、
`resetBall`メソッドを追加します。
`onLoad`メソッドにて`resetBall`メソッドを呼び出します。

上記を行ったコードが以下となります。

```dart
import 'package:flame/game.dart';

import '../constants/constants.dart';
import 'component/ball.dart';  // 追加
import 'component/paddle.dart';

class BlockBreaker extends FlameGame {
  @override
  Future? onLoad() async {
    final paddle = Paddle();
    final paddleSize = paddle.size;
    paddle
      ..position.x = size.x / 2 - paddleSize.x / 2
      ..position.y = size.y - paddleSize.y - kPaddleStartY;

    await addAll([
      paddle,
    ]);

    await resetBall();  // 追加
  }

  Future resetBall() async {  // メソッド追加
    final ball = Ball();

    ball.position
      ..x = size.x / 2 - ball.size.x / 2
      ..y = size.y * kBallStartYRatio;

    await add(ball);
  }
}
```

ここまでできたらアプリを再実行してみましょう。

以下の画像のように、中心にボールが表示されるはずです。

<img src="/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-13-20.25.57.webp" alt="" width="300">

以上でボールの追加は完了となります！

### ブロックの追加

続いて、ブロックの追加を行います。

#### ブロックの作成

まず、ブロックの作成を行います。

`block.dart`に以下のコードを貼り付けてください。

```dart
import 'dart:math';
import 'dart:ui';

import 'package:flame/components.dart';

import '../../constants/constants.dart';

class Block extends RectangleComponent {
  Block({required this.blockSize})
      : super(
          size: blockSize,
          paint: Paint()
            ..color = kBlockColors[Random().nextInt(kBlockColors.length)],
        );

  final Vector2 blockSize;
}
```

このコードでは、ブロックを設定する、`Block`クラスを作成しています。
`Block`クラスは`RectangleComponent`クラスの拡張クラスしており、
この拡張により、長方形の物体の性質を持つこととなります。

今回、ブロックの大きさは画面サイズによって変わるように設定します。
そのため、インスタンス生成時に引数として`blockSize`を受け取り、`size`に設定するようにします。

`Random().nextInt(kBlockColors.length)`にて0 ~ `kBlockColors.length`の
ランダムな整数を用いて、`kBlockColors` という色の配列から、色を設定するようにします。
これにより、ブロックが生成されるたびにランダムな色のブロックとなります。

ブロックの作成は以上となります。

#### ブロックの配置

続いて、ブロックを配置しましょう。

`block_breaker.dart`に移動します。

ボールと同様にゲームの仕様上、何度もブロックを配置し直すので、
ブロック配置の処理を`resetBlocks`というメソッドで定義します。

`block_breaker.dart`、`BallBreaker`クラスの`resetBall`メソッドの下に、
`resetBlocks`メソッドを追加します。
`onLoad`メソッドにて`resetBlocks`メソッドを呼び出します。

上記を行ったコードが以下となります。

```dart
import 'package:flame/game.dart';

import '../constants/constants.dart';
import 'component/ball.dart';
import 'component/block.dart';  // 追加
import 'component/paddle.dart';

class BlockBreaker extends FlameGame {
  @override
  Future? onLoad() async {
    final paddle = Paddle();
    final paddleSize = paddle.size;
    paddle
      ..position.x = size.x / 2 - paddleSize.x / 2
      ..position.y = size.y - paddleSize.y - kPaddleStartY;

    await addAll([
      paddle,
    ]);

    await resetBall();
    await resetBlocks();  // 追加
  }

  Future resetBall() async {
  // ...
  }

  Future resetBlocks() async {  // メソッド追加
    final sizeX = (size.x -
            kBlocksStartXPosition * 2 -
            kBlockPadding * (kBlocksRowCount - 1)) /
        kBlocksRowCount;

    final sizeY = (size.y * kBlocksHeightRatio -
            kBlocksStartYPosition -
            kBlockPadding * (kBlocksColumnCount - 1)) /
        kBlocksColumnCount;

    final blocks =
        List.generate(kBlocksColumnCount * kBlocksRowCount, (int index) {
      final block = Block(
        blockSize: Vector2(sizeX, sizeY),
      );

      final indexX = index % kBlocksRowCount;
      final indexY = index ~/ kBlocksRowCount;

      block.position
        ..x = kBlocksStartXPosition + indexX * (block.size.x + kBlockPadding)
        ..y = kBlocksStartYPosition + indexY * (block.size.y + kBlockPadding);

      return block;
    });

    await addAll(blocks);
  }
}
```

resetBlocks で行っているブロックのサイズの決定、位置の決定は、
複雑な上、Flameでのゲーム開発の本筋から離れる内容となっています。

なので、コードをコピペし、
「ここでサイズ指定や位置の設定をしたブロックのリストを生成し、配置してるんだな」
というくらいの理解で次に進んで構いません。

詳細を知りたい方向けに、以下で処理内容の解説をまとめていますので、
興味のある方はぜひ読んでみてください。

resetBlocksで行っている内容について
##### ブロックのsizeの決定

ブロックのサイズの決定は、
全体の長さから隙間の長さを引いたものを、ブロックの数で割って求めています。

###### 横方向

```dart
final sizeX = (size.x -
            kBlocksStartXPosition * 2 -
            kBlockPadding * (kBlocksRowCount - 1)) /
        kBlocksRowCount;
```

![](/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-13-23.39.57-1024x584.webp)

###### 縦方向

```dart
final sizeY = (size.y * kBlocksHeightRatio -
            kBlocksStartYPosition -
            kBlockPadding * (kBlocksColumnCount - 1)) /
        kBlocksColumnCount;
```

![](/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-13-23.50.57-1024x580.webp)

##### ブロックのリスト生成

`List<Block>.generate()`で`Block`の`List`を生成しています。

第1引数でブロックの個数を、第2引数でインデックスに対応する`Block`を返すメソッドを設定します。
ブロックの個数は横の個数 * 縦の個数 (`kBlocksColumnCount * kBlocksRowCount`)となります。

##### ブロックの横の位置と縦の位置のインデックス

インデックスに対する横の位置と縦の位置のインデックスを
以下のコードで取得しています。

```dart
final indexX = index % kBlocksRowCount;
      final indexY = index ~/ kBlocksRowCount;
```

(~/は割り算の結果を超さない最大の整数を返す演算子です。)

以下の図は3 x 2 のときの例となります。

![](/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-14-0.15.04-1024x367.webp)

##### ブロックの横の位置と縦の位置

ブロックの横の位置と縦の位置は以下のコードで設定しています。

```dart
block.position
        ..x = kBlocksStartXPosition + indexX * (block.size.x + kBlockPadding)
        ..y = kBlocksStartYPosition + indexY * (block.size.y + kBlockPadding);
```

以下は横の位置の設定の考え方の図となります。
（縦の位置も同様の考え方となります。）

![](/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-14-0.18.19-1024x341.webp)

ここまでできたらアプリを再実行してみましょう。

以下の画像のように、様々な色のブロックが整列して配置されるはずです。

<img src="/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-14-0.20.47.webp" alt="" width="300">

上記画像含め以下で実行結果と画像でブロックの厚みが異なるかもしれませんが、
作成に問題はありません。

以上でブロックの追加は完了となります！

### ボールの移動

ボールを動かす方法について解説します。

各`Component`には`update`というメソッドが用意されています。
これはごく短い単位時間ごとに実行されるメソッドです。

このメソッドの中で、単位時間ごとに`position`を更新することで、
ボールの移動を実装できます。

`ball.dart`を以下のように変更します。

```dart
import 'dart:math';   // 追加
import 'dart:ui';

import 'package:flame/components.dart';

import '../../constants/constants.dart';

class Ball extends CircleComponent {
  Ball() {
    radius = kBallRadius;
    paint = Paint()..color = kBallColor;

    final vx = kBallSpeed * cos(spawnAngle * kRad);  // 追加
    final vy = kBallSpeed * sin(spawnAngle * kRad);  // 追加
    velocity = Vector2(vx, vy);  // 追加
  }
  late Vector2 velocity;  // 追加

  double get spawnAngle {  // メソッド追加
    final random = Random().nextDouble();
    final spawnAngle =
        lerpDouble(kBallMinSpawnAngle, kBallMaxSpawnAngle, random)!;
    return spawnAngle;
  }

  @override
  void update(double dt) {  // メソッド追加
    position += velocity * dt;
    super.update(dt);
  }
}
```

ボールの横方向、縦方向それぞれに対する速度を持った変数、velocityを定義し、
コンストラクタ内で初期化しています。

コンストラクタ内の初期化処理並びに`spawnAngle`で行っている処理は、
これも複雑な上、Flameでのゲーム開発の本筋から離れる内容となっています。

なので、コードをコピペし、
「ここでランダムな角度でボールが投げ出されるよう、設定しているんだな」
というくらいの理解で次に進んで構いません。

詳細を知りたい方向けに、以下で処理内容の解説をまとめていますので、
興味のある方はぜひ読んでみてください。

ボールの速度ベクトルの初期設定について
##### spawnAngle について

```dart
double get spawnAngle {
    final random = Random().nextDouble();
    final spawnAngle =
        lerpDouble(kBallMinSpawnAngle, kBallMaxSpawnAngle, random)!;
    return spawnAngle;
  }
```

`spawnAngle` はボール出現時の角度を取得するゲッターです。

`random` は 0 と 1 の間のランダムな数値となります。
`lerpDouble`は、`kBallMinSpawnAngle`と`kBallMaxSpawnAngle`の2つの角度を、
`random`の比率で分ける角度を返します。
これにより、`kBallMinSpawnAngle`と`kBallMaxSpawnAngle`の2つの角度の間の
ランダムな角度が取得できます。

##### 速度ベクトルの初期設定について

```dart
final vx = kBallSpeed * cos(spawnAngle * kRad);
    final vy = kBallSpeed * sin(spawnAngle * kRad);
```

このコードで、`kBallSpeed`の速さを持ち、特定の角度で進む物体の、
横方向(x方向)と縦方向(y方向)の速さを設定しています。

![](/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-15-1.29.06-1024x597.webp)

ここで、θはラジアンなので、`kRad`をかけてラジアンに変換しています。

ここで求めた`vx`と`vy`を`velocity`に設定することで、
ランダムな角度に`kBallSpeed`の速さで進むよう、設定ができます。

`update`メソッド内で、
ボールの位置を表すパラメータの`position`を、単位時間`dt * velocity`だけ進むよう設定することで、
ボールの移動を実現しています。

ここまでできたらアプリを再実行してみましょう。

以下のGIFのように、ボールが下方向に移動するはずです。
（GIFではわかりやすいように`kBallSpeed = 50`としています。）

![](/images/wp-content/uploads/2022/10/20221015_ball_move.webp)

 以上でボールの移動の設定は完了となります！

### パドルのドラッグ移動

パドルをドラッグ移動できるようにしましょう。

Flame でドラッグができるようにしたり、タップできるようにしたり等、
何かの機能を追加する時には、
その`Component`に追加したい機能を持つクラスを`mixin`することで実装できます。

`mixin` とは、
クラス名の横に`with`で追加したい機能を持つクラスを記述することで、
追加したい機能を持つクラスのメソッドを使えるようにすることです。

`paddle.dart`にて`Paddle`クラスに、`DragCallbacks`クラスを`mixin`します。
`Paddle`クラスが`DragCallbacks`クラスのメソッドを使えるようになるので、
以下のコードのようにコードを追加し、ドラッグによって位置が変更されるようにします。

```dart
import 'dart:ui';

import 'package:flame/components.dart';
import 'package:flame/experimental.dart';  // 追加

import '../../constants/constants.dart';

class Paddle extends RectangleComponent with DragCallbacks {  // 修正
  Paddle({required this.draggingPaddle})  // 修正
      : super(
          size: Vector2(kPaddleWidth, kPaddleHeight),
          paint: Paint()..color = kPaddleColor,
        );

  final void Function(DragUpdateEvent event) draggingPaddle;  // 追加

  @override
  void onDragUpdate(DragUpdateEvent event) {  // メソッド追加
    draggingPaddle(event);
    super.onDragUpdate(event);
  }
}
```

`onDragUpdate`メソッドはドラッグをしているポインターを移動した際に呼ばれるメソッドです。
このメソッド中で`draggingPaddle`メソッドを呼び出します。

`draggingPaddle`メソッドの実装は`block_breaker.dart` の`BlockBreaker`クラスにて行います。
そのため、`draggingPaddle`メソッドを受け取れるようコンストラクタに設定しています。

続いて`block_breaker.dart`を修正していきます。

パドルを配置している、`block_breaker.dart` の `BlockBreaker`クラスにも、
`mixin`が必要です。
`HasDraggableComponents` クラスを`BlockBreaker`クラスに`mixin`します。
`block_breaker.dart` にて`draggingPaddle`メソッドの実装を行ったコードが、以下となります。

```dart
import 'package:flame/experimental.dart';  // 追加
import 'package:flame/game.dart';

import '../constants/constants.dart';
import 'component/ball.dart';
import 'component/block.dart';
import 'component/paddle.dart';

class BlockBreaker extends FlameGame with HasDraggableComponents {  // 修正
  @override
  Future? onLoad() async {
    final paddle = Paddle(
      draggingPaddle: draggingPaddle,  // 追加
    );
    final paddleSize = paddle.size;
    paddle
      ..position.x = size.x / 2 - paddleSize.x / 2
      ..position.y = size.y - paddleSize.y - kPaddleStartY;

    await addAll([
      paddle,
    ]);

    await resetBall();
    await resetBlocks();
  }

  Future resetBall() async {
  // ...
  }

  Future resetBlocks() async {
  // ...
  }

  void draggingPaddle(DragUpdateEvent event) {
    final paddle = children.whereType().first;

    paddle.position.x += event.delta.x;

    if (paddle.position.x  size.x - paddle.size.x) {
      paddle.position.x = size.x - paddle.size.x;
    }
  }
}
```

`draggingPaddle`メソッドの実装について解説します。

ここでポイントとなるのが、`draggingPaddle`メソッド内の`children`です。
`children`により、配置している`Component`達を取得することができます。
今回、`Paddle`は一個しか無い想定のため、
`children.whereType<Paddle>().first`で配置している`Paddle`を取得できることとなります。

`draggingPaddle`の`DragUpdateEvent`からは、ドラッグでの移動量を`event.delta`で取得できます。
これを用いてパドルの位置を更新しています。

以降の処理はパドルが画面外に移動しないようにする処理となります。

ここまでできたらアプリを再実行してみましょう。

以下のGIFのように、パドルがドラッグに応じて移動するはずです。

![](/images/wp-content/uploads/2022/10/20221015_paddle_move.webp)

以上でパドルのドラッグ移動の設定は完了となります！

### 衝突時の挙動の追加

以下について、衝突時の挙動の追加(反射の設定)を行っていきます。

- ボールとパドル
- ボールとブロック
- ボールと壁

#### ボールとパドル

衝突時の挙動の追加は、パドルのドラッグの設定時と同様、
Flameに用意されている衝突機能を持つクラスを`mixin`することで追加できます。

また、衝突を判定するために、Hit Box と呼ばれる当たり判定
（物体がぶつかることができる範囲）を追加する必要があります。

`paddle.dart`の`Paddle`を以下のように修正してください。

```dart
import 'dart:ui';

import 'package:flame/collisions.dart';  // 追加
import 'package:flame/components.dart';
import 'package:flame/experimental.dart';

import '../../constants/constants.dart';

class Paddle extends RectangleComponent with CollisionCallbacks, DragCallbacks {  // 修正
  Paddle({required this.draggingPaddle})
      : super(
          size: Vector2(kPaddleWidth, kPaddleHeight),
          paint: Paint()..color = kPaddleColor,
        );

  final void Function(DragUpdateEvent event) draggingPaddle;

  @override
  Future? onLoad() {  // メソッド追加
    final paddleHitbox = RectangleHitbox(
      size: size,
    );

    add(paddleHitbox);

    return super.onLoad();
  }

  @override
  void onDragUpdate(DragUpdateEvent event) {
    draggingPaddle(event);
    super.onDragUpdate(event);
  }
}
```

`Paddle`クラスに`CollisionCallbacks`クラスを`mixin`することで衝突機能を追加しています。

`Paddle`クラスが読み込まれる際に実行される`onLoad`メソッドの中で、
`RectangleHitbox`クラスのインスタンスを`add`しています。
これにより、`size`の大きさを持った長方形の当たり判定が`Paddle`に付与されます。

同様にボールにも当たり判定を追加しましょう。

`ball.dart` を以下のように書き換えます。

```dart
import 'dart:math';
import 'dart:ui';

import 'package:flame/collisions.dart';  // 追加
import 'package:flame/components.dart';

import '../../constants/constants.dart';

class Ball extends CircleComponent with CollisionCallbacks {  // 修正
  Ball() {
    radius = kBallRadius;
    paint = Paint()..color = kBallColor;

    final vx = kBallSpeed * cos(spawnAngle * kRad);
    final vy = kBallSpeed * sin(spawnAngle * kRad);
    velocity = Vector2(vx, vy);
  }
  late Vector2 velocity;

  double get spawnAngle {
  // ...
  }

  @override
  Future? onLoad() async {  // メソッド追加
    final hitbox = CircleHitbox(radius: radius);

    await add(hitbox);

    return super.onLoad();
  }

  @override
  void update(double dt) {
    position += velocity * dt;
    super.update(dt);
  }
}
```

`Ball`クラスが読み込まれる際に実行される`onLoad`メソッドの中で、
`CircleHitｂox`クラスのインスタンスを`add`しています。
これにより、`radius`の半径を持った円の当たり判定が`Ball`に付与されます。

当たり判定の追加は以上で完了となります。

続いて衝突時の挙動を設定していきましょう。
`CollisionCallbacks`の追加により、`onCollisionStart` , `onCollision` , `onCollisionEnd`
というメソッドが利用可能となります。
これらのメソッドは、それぞれ、
衝突の開始時、衝突中、衝突の終了時に呼び出されるメソッドとなっています。

`ball.dart`の`Ball`クラスに`onCollisionStart`メソッド等を追加します。

```dart
import 'dart:math';
import 'dart:ui';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';

import '../../constants/constants.dart';
import 'paddle.dart';  // 追加

class Ball extends CircleComponent with CollisionCallbacks {
  Ball() {
  // ...
  }
  late Vector2 velocity;

  double get spawnAngle {
  // ...
  }

  @override
  Future? onLoad() async {
  // ...
  }

  @override
  void update(double dt) {
  // ...
  }

  @override
  void onCollisionStart(  // メソッド追加
    Set intersectionPoints,
    PositionComponent other,
  ) {
    final collisionPoint = intersectionPoints.first;

    if (other is Paddle) {
      final paddleRect = other.toAbsoluteRect();

      updateBallTrajectory(collisionPoint, paddleRect);
    }

    super.onCollisionStart(intersectionPoints, other);
  }

  void updateBallTrajectory(  // メソッド追加
    Vector2 collisionPoint,
    Rect rect,
  ) {
    final isLeftHit = collisionPoint.x == rect.left;
    final isRightHit = collisionPoint.x == rect.right;
    final isTopHit = collisionPoint.y == rect.top;
    final isBottomHit = collisionPoint.y == rect.bottom;

    final isLeftOrRightHit = isLeftHit || isRightHit;
    final isTopOrBottomHit = isTopHit || isBottomHit;

    if (isLeftOrRightHit) {
      if (isRightHit && velocity.x > 0) {
        velocity.x += kBallNudgeSpeed;
        return;
      }

      if (isLeftHit && velocity.x
`isLeftOrRightHit` の条件分岐内の以下コードは、
`Paddle`がボールを追いかけて衝突したときの挙動を表現しています。

```dart
if (isRightHit && velocity.x > 0) {
        velocity.x += kBallNudgeSpeed;
        return;
      }

      if (isLeftHit && velocity.x

`isTopOrBottomHit` の条件分岐内では、長方形の上下に衝突した際の挙動を定義しています。

`isTopOrBottomHit` の条件分岐内で`y`を反転させているのは前述の説明の通りですが、
`x`についても以下の処理を加えています。

```dart
if (Random().nextInt(kBallRandomNumber) % kBallRandomNumber == 0) {
        velocity.x += kBallNudgeSpeed;
      }
```

前述の反射の方法だと、ボールが常に入射角と同じ角度で反射するため、
面白みに欠けることとなります。
上記処理でランダムで`velocity.x`に値を加えることで、
ランダムな反射を実現しています。

ゲーム全体を管理する、`block_breaker.dart`の`BlockBreaker`クラスにも、
衝突機能を与える`mixin`が必要です。

以下のように`block_breaker.dart`を修正します。

```dart
import 'package:flame/experimental.dart';
import 'package:flame/game.dart';

import '../constants/constants.dart';
import 'component/ball.dart';
import 'component/block.dart';
import 'component/paddle.dart';

class BlockBreaker extends FlameGame
    with HasCollisionDetection, HasDraggableComponents {  // 修正
// ...
}
```

以上で、ボールとパドルの衝突の設定は完了となります。

#### ボールとブロック

ボールとブロックの衝突時の挙動を設定していきます。

まず、`ball.dart` を以下のように修正します。

```dart
import 'dart:math';
import 'dart:ui';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';

import '../../constants/constants.dart';
import 'block.dart' as b;  // 追加
import 'paddle.dart';

class Ball extends CircleComponent with CollisionCallbacks {
// ...

  @override
  void onCollisionStart(
    Set intersectionPoints,
    PositionComponent other,
  ) {
    final collisionPoint = intersectionPoints.first;

    if (other is b.Block) {  // 条件分岐追加
      final blockRect = other.toAbsoluteRect();

      updateBallTrajectory(collisionPoint, blockRect);
    }

    if (other is Paddle) {
      final paddleRect = other.toAbsoluteRect();

      updateBallTrajectory(collisionPoint, paddleRect);
    }

    super.onCollisionStart(intersectionPoints, other);
  }

// ...

}
```

`onCollisionStart`メソッドに、`Block`との衝突時の挙動を設定しています。

設定内容は`Paddle`と同じとなっています。

続いて、`Block`のコードを修正していきます。

`block.dart`を以下のように修正してください。

```dart
import 'dart:math';
import 'dart:ui';

import 'package:flame/collisions.dart';  // 追加
import 'package:flame/components.dart';

import '../../constants/constants.dart';
import 'ball.dart';  // 追加

class Block extends RectangleComponent with CollisionCallbacks {  // 修正
  Block({required this.blockSize})
      : super(
          size: blockSize,
          paint: Paint()
            ..color = kBlockColors[Random().nextInt(kBlockColors.length)],
        );

  final Vector2 blockSize;

  @override
  Future? onLoad() async {  // メソッド追加
    final blockHitbox = RectangleHitbox(
      size: size,
    );

    await add(blockHitbox);

    return super.onLoad();
  }

  @override
  void onCollisionStart(  // メソッド追加
    Set intersectionPoints,
    PositionComponent other,
  ) {
    if (other is Ball) {
      removeFromParent();
    }

    super.onCollisionStart(intersectionPoints, other);
  }
}
```

`CollisionCallbacks` の`mixin`の追加を行っています。
また、`onLoad`メソッド内で当たり判定を設定する`RectangleHitbox`の追加を行っています。

ブロックは、ボールと衝突時に消えるように設定したいため、
`onCollisionStart`メソッドの中で、
`Ball`との衝突時に`removeFromParent`を呼び出し、
自身がゲームから削除されるようにしています。

以上で、ボールとブロックの衝突の設定は完了となります。

#### ボールと壁

ボールとゲームの外枠(壁)との衝突の設定を行います。

`block_breaker.dart`を以下のように修正します。

```dart
import 'package:flame/collisions.dart';  // 追加
import 'package:flame/experimental.dart';
import 'package:flame/game.dart';

import '../constants/constants.dart';
import 'component/ball.dart';
import 'component/block.dart';
import 'component/paddle.dart';

class BlockBreaker extends FlameGame
    with HasCollisionDetection, HasDraggableComponents {
  @override
  Future? onLoad() async {
    final paddle = Paddle(
      draggingPaddle: draggingPaddle,
    );
    final paddleSize = paddle.size;
    paddle
      ..position.x = size.x / 2 - paddleSize.x / 2
      ..position.y = size.y - paddleSize.y - kPaddleStartY;

    await addAll([
      ScreenHitbox(),  // 追加
      paddle,
    ]);

    await resetBall();
    await resetBlocks();
  }
// ...
}
```

ここで、`ScreenHitbox`を`add`しています。
これは画面枠に付与する当たり判定となります。

続いて、`ball.dart`を以下のように修正します。

```dart
import 'dart:math';
import 'dart:ui';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';

import '../../constants/constants.dart';
import 'block.dart' as b;
import 'paddle.dart';

class Ball extends CircleComponent with CollisionCallbacks {
  Ball() {
    radius = kBallRadius;
    paint = Paint()..color = kBallColor;

    final vx = kBallSpeed * cos(spawnAngle * kRad);
    final vy = kBallSpeed * sin(spawnAngle * kRad);
    velocity = Vector2(vx, vy);
  }
  late Vector2 velocity;

  bool isCollidedScreenHitboxX = false;  // 追加
  bool isCollidedScreenHitboxY = false;  // 追加

  double get spawnAngle {
    final random = Random().nextDouble();
    final spawnAngle =
        lerpDouble(kBallMinSpawnAngle, kBallMaxSpawnAngle, random)!;
    return spawnAngle;
  }

  // ...

  @override
  void onCollisionStart(
    Set intersectionPoints,
    PositionComponent other,
  ) {
  // ...
  }

  @override
  void onCollision(Set intersectionPoints, PositionComponent other) {  // メソッド追加
    if (other is ScreenHitbox) {
      final screenHitBoxRect = other.toAbsoluteRect();

      for (final point in intersectionPoints) {
        if (point.x == screenHitBoxRect.left && !isCollidedScreenHitboxX) {
          velocity.x = -velocity.x;
          isCollidedScreenHitboxX = true;
        }
        if (point.x == screenHitBoxRect.right && !isCollidedScreenHitboxX) {
          velocity.x = -velocity.x;
          isCollidedScreenHitboxX = true;
        }
        if (point.y == screenHitBoxRect.top && !isCollidedScreenHitboxY) {
          velocity.y = -velocity.y;
          isCollidedScreenHitboxY = true;
        }
        if (point.y == screenHitBoxRect.bottom && !isCollidedScreenHitboxY) {
          removeFromParent();
        }
      }
    }
    super.onCollision(intersectionPoints, other);
  }

  @override
  void onCollisionEnd(PositionComponent other) {  // メソッド追加
    isCollidedScreenHitboxX = false;
    isCollidedScreenHitboxY = false;
    super.onCollisionEnd(other);
  }

  // ...
}
```

`onCollision`は物体の衝突中に呼び出されるメソッドです。
壁への反射だと画面の角など、上辺に当たって離れるまでの間に左右の辺に当たる、
という場合が発生します。
そのような場合に対応するため、
`onCollision`メソッドで横方向(`x`方向)、縦方向(`y`方向)それぞれ反射の実装をしています。
`isCollidedScreenHitboxX`、`isCollidedScreenHitboxY`は、
横方向(`x`方向)、縦方向(`y`方向)それぞれで反射したかどうかを判定するフラグです。
これが`false`のときのみ反射の処理を行うようにし、
衝突の終了時に呼び出される`onCollisionEnd`のメソッドの中でフラグを初期化します。

画面最下部にボールが衝突時には、`removeFromParent`し、ボール自体を消滅させます。

ここまでできたらアプリを再実行してみましょう。

以下のGIFのように、壁やブロック、パドルとボールが反射し、ブロックと
ぶつかるとブロックが壊れるはずです。

![](/images/wp-content/uploads/2022/10/20221015_collide.webp)

ブロック崩しゲームがほとんど出来上がりましたね！

以上で衝突の挙動の追加は完了となります。

### 開始ボタンの追加

現状、ビルドするとすぐにゲームが始まってしまう状態となっています。
これを開始ボタンとボールが動くまでのカウントダウンを追加し、遊びやすくします。

#### テキストボタンの作成

`my_text_button.dart`に以下のコードを追加します。

```dart
import 'dart:ui';

import 'package:flame/components.dart';
import 'package:flame/experimental.dart';

import '../../constants/constants.dart';

class MyTextButton extends TextBoxComponent with TapCallbacks {
  MyTextButton(
    String text, {
    required this.onTapDownMyTextButton,
    required this.renderMyTextButton,
  }) : super(
          text: text,
          size: Vector2(kButtonWidth, kButtonHeight),
          align: Anchor.center,
        );

  final Future Function() onTapDownMyTextButton;
  final void Function(Canvas canvas) renderMyTextButton;

  @override
  Future onTapDown(TapDownEvent event) async {
    await onTapDownMyTextButton();
    super.onTapDown(event);
  }

  @override
  void render(Canvas c) {
    renderMyTextButton(c);
    super.render(c);
  }
}
```

このコードでは、テキストボタンを設定する、`MyTextButton`クラスを作成しています。
`MyTextButton`クラスは`TextBoxComponent`クラスの拡張クラスしており、
この拡張により、テキストボックスの機能を持つようになります。

`TapCallbacks`を`mixin`しています。
これにより、この`Component`をタップ可能にします。

今回、テキストボタンのテキストはコンストラクタを用いて受け取り、
`super`内で`text`を受け渡すようにします。
同時に、`size`と`align` (ボタンに対するテキストの位置)も設定します。

ボタンを押したときの挙動を示す`onTapDown`の中身や、
ボタンの色等描画内容を管理する`render`メソッドの中身は、
実装元の`BlockBreaker`クラスにて実装するため、
関数の変数を用いて定義し、コンストラクタで受け取るようにします。

テキストボタンの押したときの挙動や`render`の中身は後ほど実装します。

#### カウントダウンテキストの作成

ゲーム画面に表示するカウントダウンのテキストを作成します。

`countdown_text.dart`にて、以下のコードを追加してください。

```dart
import 'dart:ui';

import 'package:flame/components.dart';

import '../../constants/constants.dart';

class CountdownText extends TextComponent {
  CountdownText({
    required this.count,
  }) : super(
          size: Vector2.all(kCountdownSize),
          textRenderer: TextPaint(
            style: kCountdownTextStyle,
          ),
          text: '$count',
        );

  final int count;

  @override
  Future render(Canvas canvas) async {
    super.render(canvas);
    await Future.delayed(const Duration(seconds: 1));
    removeFromParent();
  }
}
```

このコードでは、カウントダウンのテキストを設定する、`CountdownText`クラスを作成しています。
`CountdownText`クラスは`TextComponent`クラスの拡張クラスしており、
この拡張により、テキストの機能を持つようになります。

カウントダウンの数字はコンストラクタで受け取り、
`super`内で`text`に設定します。

同じく`super`内でテキスト全体のサイズと、文字色等のスタイルを設定しています。

`render`メソッドで、描画された際に1秒後に消滅するよう、
`removeFromParent`を呼び出すように設定しています。

以上でカウントダウンテキストの設定は完了となります。

#### 開始時の挙動の実装

ボタンの配置と開始時の挙動の実装をしていきます。

`block_breaker.dart`を以下のように追加、修正します。

```dart
import 'dart:ui';  // 追加

import 'package:flame/collisions.dart';
import 'package:flame/experimental.dart';
import 'package:flame/game.dart';

import '../constants/constants.dart';
import 'component/ball.dart';
import 'component/block.dart';
import 'component/countdown_text.dart';  // 追加
import 'component/my_text_button.dart';  // 追加
import 'component/paddle.dart';

class BlockBreaker extends FlameGame
    with HasCollisionDetection, HasDraggableComponents, HasTappableComponents {  // 修正
  @override
  Future? onLoad() async {
    final paddle = Paddle(
      draggingPaddle: draggingPaddle,
    );
    final paddleSize = paddle.size;
    paddle
      ..position.x = size.x / 2 - paddleSize.x / 2
      ..position.y = size.y - paddleSize.y - kPaddleStartY;

    await addMyTextButton('Start!');  // 追加

    await addAll([
      ScreenHitbox(),
      paddle,
    ]);
    // resetBall を削除
    await resetBlocks();
  }

  Future resetBall() async {
  // ...
  }

  Future resetBlocks() async {
  // ...
  }

  Future addMyTextButton(String text) async {  // メソッド追加
    final myTextButton = MyTextButton(
      text,
      onTapDownMyTextButton: onTapDownMyTextButton,
      renderMyTextButton: renderMyTextButton,
    );

    myTextButton.position
      ..x = size.x / 2 - myTextButton.size.x / 2
      ..y = size.y / 2 - myTextButton.size.y / 2;

    await add(myTextButton);
  }

  void draggingPaddle(DragUpdateEvent event) {
  // ...
  }

  Future onTapDownMyTextButton() async {  // メソッド追加
    children.whereType().forEach((button) {
      button.removeFromParent();
    });
    await countdown();
    await resetBall();
  }

  void renderMyTextButton(Canvas canvas) {  // メソッド追加
    final myTextButton = children.whereType().first;
    final rect = Rect.fromLTWH(
      0,
      0,
      myTextButton.size.x,
      myTextButton.size.y,
    );
    final bgPaint = Paint()..color = kButtonColor;
    canvas.drawRect(rect, bgPaint);
  }

  Future countdown() async {
    for (var i = kCountdownDuration; i > 0; i--) {
      final countdownText = CountdownText(count: i);

      countdownText.position
        ..x = size.x / 2 - countdownText.size.x / 2
        ..y = size.y / 2 - countdownText.size.y / 2;

      await add(countdownText);

      await Future.delayed(const Duration(seconds: 1));
    }
  }
}
```

ボタンのタップを機能を追加するため、`HasTappableComponents`を`mixin`しています。

テキストボタンの配置処理は何度も行うため、`addMyTextButton`でメソッド化します。

`onTapDownMyTextButton`メソッドはボタンのタップしたときの処理を定義しています。
具体的には、

```dart
`children.whereType().forEach((button) {       button.removeFromParent();     });`
```

でのボタンの削除と、
後述する`countdown`でのカウントダウンの開始、
ボールのリセットを行っています。

`renderMyTextButton`はテキストボタンの描画処理の設定を記述しています。

`countdown`メソッドでは`Countdown`テキストを1秒ごとに配置する処理を行っています。

ここまでできたらアプリを実行してみましょう。

Start! と書かれたボタンが表示され、押すとカウントダウンが開始し、
カウントダウンの終了とともにボールが動き出すはずです。

以上で開始時の挙動の追加は完了となります。

### 失敗時の挙動の追加

失敗時の挙動の追加をしていきます。

失敗時 = ボールが削除された時のため、
ボールが削除された時に呼び出されれる`onRemove` メソッドを利用して、
失敗時の挙動を追加します。

`ball.dart`を以下のように修正します。

```dart
import 'dart:math';
import 'dart:ui';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';

import '../../constants/constants.dart';
import 'block.dart' as b;
import 'paddle.dart';

class Ball extends CircleComponent with CollisionCallbacks {
  Ball({
    required this.onBallRemove,  // 修正
  }) {
  // ...
  }
  late Vector2 velocity;

  bool isCollidedScreenHitboxX = false;
  bool isCollidedScreenHitboxY = false;

  final Future Function() onBallRemove;  // 追加

  double get spawnAngle {
  // ...
  }

  @override
  Future? onLoad() async {
  // ...
  }

  @override
  void update(double dt) {
  // ...
  }

  @override
  Future onRemove() async {  // メソッド追加
    await onBallRemove();
    super.onRemove();
  }
  // ...
}
```

`onRemove`メソッドの追加を行いました。
実際の処理は実装元の`BlockBreaker`クラスにて実装するため、
関数の変数を用いて定義し、コンストラクタで受け取るようにします。

`onBallRemove`をコンストラクタの引数に設定する際に中括弧を忘れないよう注意ください。

続いて、`block_breaker.dart`を以下のように修正します。

```dart
import 'dart:ui';

import 'package:flame/collisions.dart';
import 'package:flame/experimental.dart';
import 'package:flame/game.dart';

import '../constants/constants.dart';
import 'component/ball.dart';
import 'component/block.dart';
import 'component/countdown_text.dart';
import 'component/my_text_button.dart';
import 'component/paddle.dart';

class BlockBreaker extends FlameGame
    with HasCollisionDetection, HasDraggableComponents, HasTappableComponents {
  int failedCount = kGameTryCount;  // 追加

  bool get isGameOver => failedCount == 0;  // 追加

// ...

  Future resetBall() async {
    final ball = Ball(
      onBallRemove: onBallRemove,  // 追加
    );

    ball.position
      ..x = size.x / 2 - ball.size.x / 2
      ..y = size.y * kBallStartYRatio;

    await add(ball);
  }

  Future resetBlocks() async {
    children.whereType().forEach((block) {  // 追加
      block.removeFromParent();
    });

    final sizeX = (size.x -
            kBlocksStartXPosition * 2 -
            kBlockPadding * (kBlocksRowCount - 1)) /
        kBlocksRowCount;
  // ...
  }

  Future addMyTextButton(String text) async {
  // ...
  }

  Future onBallRemove() async {  // メソッド追加
    failedCount--;
    if (isGameOver) {
      await addMyTextButton('Game Over!');
    } else {
      await addMyTextButton('Retry');
    }
  }

// ...

  Future onTapDownMyTextButton() async {
    children.whereType().forEach((button) {
      button.removeFromParent();
    });

    if (isGameOver) {  // 条件分岐追加
      await resetBlocks();
      failedCount = kGameTryCount;
    }

    await countdown();
    await resetBall();
  }

  void renderMyTextButton(Canvas canvas) {
    final myTextButton = children.whereType().first;
    final rect = Rect.fromLTWH(
      0,
      0,
      myTextButton.size.x,
      myTextButton.size.y,
    );
    final bgPaint = Paint()
      ..color = isGameOver ? kGameOverButtonColor : kButtonColor;  // 修正
    canvas.drawRect(rect, bgPaint);
  }
// ...
}
```

`failedCount`というフィールドを追加しています。
これは、ボールが最下部に落ちることができる残り回数（残り失敗可能回数）を記録するフィールドです。

また、`isGameOver`というゲッターを追加し、`failedCount`が`0`、
つまり失敗可能回数が`0`となったかどうかを取得しています。

`resetBall`メソッドの中で`Ball`のコンストラクタに`onBallRemove`メソッドを渡しています。

`resetBlocks`メソッドの最初で、
その時点で残っている`Block`をすべて削除する処理を加えています。

`onBallRemove`メソッドを追加しています。
ボールが最下部に落ちた際 = ボールが削除された際に、
`failedCount`を`-1`し、ゲームオーバーならGame Overと書かれたボタンを、
そうでないならRetry と書かれたボタンを表示するように設定しています。

`onTapDownMyTextButton`メソッドにて
ゲームオーバー時にブロックをリセットする処理を呼び出します。
また、`failedCount`の初期化も行っています。

`renderMyTextButton`の修正もしています。
ゲームオーバー時にボタンを赤くするように設定しています。

ここまでできたらアプリを実行してみてください。

ボールが最下部に落ちるとRetryボタンやGameOverボタンが表示され、
リトライ機能が追加されているはずです。

以上が失敗時の挙動の追加となります。

### クリア時の挙動の追加

ゲームクリア時（ブロックを全部壊した時）の挙動を追加します。

ブロックが壊れた時にブロックがすべて壊れているかをチェックし、
全て壊れていたらクリアボタンを表示するようにします。

`block.dart`を以下のように修正します。

```dart
import 'dart:math';
import 'dart:ui';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';

import '../../constants/constants.dart';
import 'ball.dart';

class Block extends RectangleComponent with CollisionCallbacks {
  Block({required this.blockSize, required this.onBlockRemove})  // 修正
      : super(
          size: blockSize,
          paint: Paint()
            ..color = kBlockColors[Random().nextInt(kBlockColors.length)],
        );

  final Vector2 blockSize;
  final Future Function() onBlockRemove;  // 追加

  @override
  Future? onLoad() async {
  // ...
  }

  @override
  void onCollisionStart(
  // ...
  }

  @override
  Future onRemove() async {  // メソッド追加
    await onBlockRemove();
    super.onRemove();
  }
}
```

`Ball`と同様、`onRemove`メソッドの追加を行いました。
実際の処理は実装元の`BlockBreaker`クラスにて実装するため、
関数の変数を用いて定義し、コンストラクタで受け取るようにします。

続いて、`block_breaker.dart`を以下のように修正します。

```dart
import 'dart:async';
import 'dart:ui';

import 'package:flame/collisions.dart';
import 'package:flame/experimental.dart';
import 'package:flame/game.dart';

import '../constants/constants.dart';
import 'component/ball.dart';
import 'component/block.dart';
import 'component/countdown_text.dart';
import 'component/my_text_button.dart';
import 'component/paddle.dart';

class BlockBreaker extends FlameGame
    with HasCollisionDetection, HasDraggableComponents, HasTappableComponents {
  int failedCount = kGameTryCount;

  bool get isCleared => children.whereType().isEmpty;  // 追加

  bool get isGameOver => failedCount == 0;

  // ...

  Future resetBlocks() async {
    children.whereType().forEach((block) {
      block.removeFromParent();
    });

    final sizeX = (size.x -
            kBlocksStartXPosition * 2 -
            kBlockPadding * (kBlocksRowCount - 1)) /
        kBlocksRowCount;

    final sizeY = (size.y * kBlocksHeightRatio -
            kBlocksStartYPosition -
            kBlockPadding * (kBlocksColumnCount - 1)) /
        kBlocksColumnCount;

    final blocks =
        List.generate(kBlocksColumnCount * kBlocksRowCount, (int index) {
      final block = Block(
        blockSize: Vector2(sizeX, sizeY),
        onBlockRemove: onBlockRemove,  // 追加
      );

      final indexX = index % kBlocksRowCount;
      final indexY = index ~/ kBlocksRowCount;

      block.position
        ..x = kBlocksStartXPosition + indexX * (block.size.x + kBlockPadding)
        ..y = kBlocksStartYPosition + indexY * (block.size.y + kBlockPadding);

      return block;
    });

    await addAll(blocks);
  }

// ...

  Future onBallRemove() async {
    if (!isCleared) {  // 条件分岐追加
      failedCount--;
      if (isGameOver) {
        await addMyTextButton('Game Over!');
      } else {
        await addMyTextButton('Retry');
      }
    }
  }

  Future onBlockRemove() async {  // 追加
    if (isCleared) {
      await addMyTextButton('Clear!');
      children.whereType().forEach((ball) {
        ball.removeFromParent();
      });
    }
  }

  void draggingPaddle(DragUpdateEvent event) {
  // ...
  }

  Future onTapDownMyTextButton() async {
    children.whereType().forEach((button) {
      button.removeFromParent();
    });

    if (isCleared || isGameOver) {  // 修正
      await resetBlocks();
      failedCount = kGameTryCount;
    }
    await countdown();
    await resetBall();
  }

// ...

}
```

`isCleared` のゲッターを追加しています。
ゲーム画面中の`Block`の数をチェックし、`Block`が`0`になったら`true`を返します。

`Block`のインスタンス生成時、コンストラクタにて後述の`onBlockRemove`を追加しています。

後述の`onBlockRemove` にてクリア時にボールを削除する処理を追加するため、
`onBallRemove`のメソッドにて、では`Ball`が削除した時処理を動かさないようにするため、
`!isCleared`で処理を囲んでいます。

`onBlockRemove`にて、ブロックが削除された際にクリアしているか判定し、
クリアしているなら、`Clear!`と書かれたボタンを表示し、
`Ball`の削除処理を行うよう、処理を記述しています。

`onTapDownMyTextButton`内の条件分岐に`isCleared`を追加し、
クリアした際にも`resetBlocks`を呼ぶようにします。

ここまでできたらアプリを実行してみましょう。

ブロックが全部削除された際に、Clear! ボタンが表示されます。

以上で、クリア時の挙動の追加は完了です！

### 効果音の追加

最後に、ボールが物体とぶつかった際の効果音を実装しましょう。

#### 準備

効果音の実装のために、`flame_audio` パッケージを追加します。
このパッケージはflameで音声の実装をするのに役に立つパッケージです。

CLI(macならターミナル)で、作成したプロジェクトのルートにて
以下のコマンドを実行しflameパッケージをインストールします。

```bash
flutter pub add flame_audio
```

続いて効果音のファイルの配置を行います。

[こちら](https://github.com/Umigishi-Aoi/block_breaker/blob/main/assets/audio/20221011_ball_hit.wav)のページのDownloadから、`20221011_ball_hit.wav` ファイルをダウンロードし、

以下のように`assets/audio` フォルダに保存します。

<img src="/images/wp-content/uploads/2022/10/スクリーンショット-2022-10-15-18.32.41.webp" alt="" width="300">

次に`pubspec.yaml`にて以下のように`assets`の追加を行います。

```yaml
# 省略

flutter:
  uses-material-design: true

  assets: # 追加
    - assets/audio/ # 追加
```

準備は以上で完了となります！

#### 効果音の実装

効果音を実際に実装しましょう。
効果音は以下のコードで実装(再生)できます。

```dart
FlameAudio.play('20221011_ball_hit.wav');
```

`ball.dart`にて、上記コードの追加を行います。
以下のようにコードを修正してください。

```dart
import 'dart:math';
import 'dart:ui';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flame_audio/flame_audio.dart';  // 追加

import '../../constants/constants.dart';
import 'block.dart' as b;
import 'paddle.dart';

class Ball extends CircleComponent with CollisionCallbacks {

// ...

  @override
  void onCollisionStart(
    Set intersectionPoints,
    PositionComponent other,
  ) {
    final collisionPoint = intersectionPoints.first;

    if (other is b.Block) {
      final blockRect = other.toAbsoluteRect();

      updateBallTrajectory(collisionPoint, blockRect);
    }

    if (other is Paddle) {
      final paddleRect = other.toAbsoluteRect();

      updateBallTrajectory(collisionPoint, paddleRect);
    }

    FlameAudio.play('20221011_ball_hit.wav');  // 追加

    super.onCollisionStart(intersectionPoints, other);
  }
// ...
}
```

以上で効果音の実装は完了です！

ここまでできたらアプリを実行してみましょう。
ボールがぶつかるたびに音が鳴るのを確認できます。

完成したアプリは以下のようになります。

https://youtu.be/IGZ2TnKKzIU

全体のソースコードは以下のGitHubにて確認可能です。

https://github.com/Umigishi-Aoi/block_breaker

## まとめ

本記事では、Flutter のゲームエンジンであるFlame を使って、
ブロック崩しゲームを作るチュートリアルを行いました。

長い間お付き合いいただきありがとうございました！

今回追加したドラッグやタップ、衝突の機能を応用すれば、
様々なゲームが作成できると思います。

ぜひこのチュートリアルを利用して、
はじめてのゲーム開発に挑戦してみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/10/15）

Flutter x Flame でブロック崩しを作るチュートリアルの記事でした。

改めて思うのは、ゲームづくりというか、アプリづくりって楽しいですね。

このブロック崩しアプリの第一版はほぼ休憩無しで7時間ほど熱中して作成したものでした。
それくらい作ってて楽しかったです。

特に今回のゲームのように作ったものが動いて、
実際にブロックを壊したりするよう実装できたりするのは、
本当に楽しかったです。

ぜひ、あなたにもこの気持ちを味わってほしい、と思って書いたのが、
本記事となります。

いいな、と思ったら、上記GitHubのリポジトリにスターをいただけると励みとなります。

この記事があなたのFlameでのアプリ開発の最初の一歩となることを、
心から祈っております。

オリジナル作品ができたらぜひ[こちらまで](https://twitter.com/Aoi_Umigishi)教えて下さい！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
