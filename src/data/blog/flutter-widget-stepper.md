---
title: "【Flutter】 Stepper 使い倒してみた！"
slug: "flutter-widget-stepper"
author: "Aoi"
description: ""
pubDatetime: "2022-03-18"
tags: ["Widget"]
layout: "../../layouts/BlogPost.astro"
---

本記事では `Stepper` `Widget`の紹介を行います。

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      ステップ毎にユーザーに作業してもらうUIを作りたいんだけど、
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>
ゼロから作るの大変そう、、、

そんな悩みに応えるのが`Stepper` `Widget`です！

`Stepper` `Widget` を使えば、以下のgifのようなUIが簡単に作れちゃいます！

![](/images/wp-content/uploads/2022/03/画面収録_2022-03-17_21_28_51_AdobeCreativeCloudExpress.gif)

本記事では`Stepper Widget`の基本的な使い方から、
細かい設定まで徹底的に解説していきます。

ぜひ読んでみてください！

## 基本的な使い方

![](/images/wp-content/uploads/2022/03/stepper_simple.png)

基本的な使い方をサンプルコードをベースに解説します。

まずはこちらのサンプルコードをご覧ください。

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primaryColor: Colors.blue),
      home: Scaffold(
        appBar: AppBar(title: const Text('Stepper サンプル')),
        body: const StepperSample(),
      ),
    );
  }
}

//1
class StepperSample extends StatefulWidget {
  const StepperSample({
    Key? key,
  }) : super(key: key);

  @override
  State createState() => _StepperSampleState();
}

class _StepperSampleState extends State {
  //2
  int _index = 0;

  @override
  Widget build(BuildContext context) {
    //3
    return Stepper(
      //4
      currentStep: _index,
      //5
      onStepCancel: () {
        if (_index != 0) {
          setState(() {
            _index -= 1;
          });
        }
      },
      //6
      onStepContinue: () {
        if (_index != 2) {
          setState(() {
            _index += 1;
          });
        }
      },
      //7
      onStepTapped: (int index) {
        setState(() {
          _index = index;
        });
      },
      //8
      steps: const [
        //9
        Step(
          //10
          title: Text('Step 1 タイトル'),
          //11
          content: Text('Step 1 です'),
        ),
        Step(
          title: Text('Step 2 タイトル'),
          content: Text('Step 2 です'),
        ),
        Step(
          title: Text('Step 3 タイトル'),
          content: Text('Step 3 です'),
        ),
      ],
    );
  }
}
```

ポイントを解説していきます。

//1
`Stepper Widget` を使用する`Stateful Widget`です。
`Stepper`ではユーザーの選択が`Step1`の時、`Step2`の時で表示が変えなければいけません。
表示を変えるためには、『ユーザーが選択した`Step`が何番目か』を状態として持っておき、
この状態に応じてUIを表示するのが良いです。
このため、今回は「状態に応じてUIを表示する」のが得意な`Stateful Widget`を使っています。

//2
『ユーザーが選択したStepが何番目か』を表す状態です。

//3
Stepperの実装部分です。

//4
『何番目の`Step`を表示するか』を管理するプロパティです。
ここで設定している`_index`の値がユーザー操作によって変わることで、
`Stepper`の表示`Step`が変わります。

//5
各`Step`のCANCELボタンが押された時の動作を表すプロパティです。
`Stepper`では、CONTINUE（次へ）ボタンとCANCEL（戻る）ボタンが
デフォルトで表示されます。
今回は、CANCELボタンが押された時に`_index`の値を1減らし
`SetState`することで、
『表示する`Step`を前の`Step`にする』動作を設定しています。

//6
各`Step`のCONTINUEボタンが押された時の動作を表すプロパティです。
今回は、CONTINUEボタンが押された時に`_index`の値を1増やし
`SetState`することで、
『表示する`Step`を次の`Step`にする』動作を設定しています。

//7
各`Step`のタイトルを押した時の動作を表すプロパティです。
今回はタイトルが押された時に、
押されたタイトルの`index`を`_index`に設定し、
`SetState`することで、
『押された`Step`を表示する』動作を設定しています。

//8
表示する`Step`のリストを設定するプロパティです。
後述する`Step`クラスのリストを設定することで、
表示する`Step`全体を設定することができます。

//9
表示する`Step`それ自体を表すクラスです。
後述する`title`プロパティと`content`プロパティが必須です。

//10
`Step`のタイトルを設定するプロパティです。
今回はシンプルにテキストを設定していますが、
画像やアイコンなど`Widget`ならなんでも設定可能です。

//11
`Step`の内容（コンテンツ）を設定するプロパティです。
タイトルと同様に、
画像やアイコンなど`Widget`ならなんでも設定可能です。

以上が`Stepper`の基本的な使い方です。
`Stateful Widget`や状態が絡んでくるのでちょっと複雑に感じるかもしれません。
そんな時は、`Debug`モードや紙で`_index`の値を追いかけてみると理解が進むと思います。
ぜひやってみてください！

## 詳細設定

![](/images/wp-content/uploads/2022/02/プログラミング画像.jpeg)

`Stepper`では様々な設定が用意されています。
一つ一つの設定について解説していきます。

### CONTINUE 、CANCEL` `ボタンの変更

Stepperで自動でついてくるCONTINUEボタンと、CANCELボタン、
これらをカスタマイズすることが可能です。

`controlsBuilder`プロパティにて、
CONTINUEとCANCELが表示されていたコントロール部分のWidgetを変更できます。

以下の例は、CONTINUEのボタンを「次へ」のTextButtonに、
CANCELのボタンを「戻る」のTextButtonに変更した例です。

<img src="/images/wp-content/uploads/2022/03/controlsBuilder-509x1024.png" alt="" width="300">

```dart
@override
  Widget build(BuildContext context) {
    return Stepper(
      //12
      controlsBuilder: (BuildContext context, ControlsDetails details) {
        return Row(
          children: [
            TextButton(
              //13
              onPressed: details.onStepContinue,
              child: const Text('次へ'),
            ),
            TextButton(
              //14
              onPressed: details.onStepCancel,
              child: const Text('戻る'),
            ),
          ],
        );
      },
      // ・・・
```

//12
`controlsBuilder`の設定部分です。
注目すべきは、`ControlsDetails`で、
`details.currentStep`で現在の`Step`のインデックスを取得したり、
`details.onStepContinue`や`details.onStepCancel`で
`Stepper`の同名プロパティの内容を取得したりなど、
親の`Stepper`の色々な情報を読み取ることができます。

//13
`details.onStepContinue`で`Stepper`の`onStepContinue`で設定した動作を設定しています。

//14
`details.onStepCancel`で`Stepper`の`onStepCancel`で設定した動作を設定しています。

`margin`プロパティを設定することで、`Stepper`とボタンの間の隙間を調整可能です。

### Stepperの方向の変更

`type `プロパティを設定することで`Stepper`を水平方向に表示することができます。

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-18-11.31.46-782x1024.png" alt="" width="300">

```dart
Stepper(
      type: StepperType.horizontal,
// ・・・
```

`StepperType.horizontal`で水平方向、
`StepperType.vertical`で鉛直方向を指定できます。

水平方向の時、`elevation`プロパティの値を設定することで、
`Stepper`の下の影の大きさを変更することが可能です。

### 各Stepの見た目の変更

Stepperで表示する各Stepも様々なプロパティが用意されており、
見た目の変更が可能です。

#### サブタイトルの追加

Stepのタイトルの下にサブタイトルを設定可能です。

subtitleプロパティにWidgetを設定することで、タイトルの下に表示させることができます。

<img src="/images/wp-content/uploads/2022/03/subtitle-501x1024.png" alt="" width="300">

```dart
Stepper(
      // ・・・
      steps: const [
        Step(
          title: Text('Step 1 タイトル'),
          subtitle: Text('Step 1 サブタイトル'),
          content: Text('Step 1 です'),
        ),
        // ・・・
        ),
      ],
    );
```

#### アイコンの変更

丸と数字で表されていたStepperのアイコンを、
いくつかのプリセットのアイコンに変更することが可能です。

StepのStepStateを設定することでアイコンの変更が可能となります。

<img src="/images/wp-content/uploads/2022/03/step_state-505x1024.png" alt="" width="300">

```dart
Stepper(
      // ・・・
      steps: const [
        Step(
          title: Text('Step 1 タイトル'),
          content: Text('Step 1 です'),
          //15
          state:StepState.complete
        ),
        Step(
          title: Text('Step 2 タイトル'),
          content: Text('Step 2 です'),
          //16
          state:StepState.editing
        ),
        Step(
          title: Text('Step 3 タイトル'),
          content: Text('Step 3 です'),
          //17
          state:StepState.disabled
        ),
        Step(
          title: Text('Step 4 タイトル'),
          content: Text('Step 4 です'),
          //18
          state:StepState.error
        ),
      ],
    );
```

//15
`StepState.complete`でアイコンをチェックマークに変更できます。

//16
`StepState.editing`でアイコンをペンマークに変更できます。

//17
`StepState.disabled`でその`Step`を非活動化できます。
これにより`Step`のタップができなくなります。

//18
`StepState.error`でアイコンを三角形のエラーマークに変え、
色を赤色に変更します。

#### 活動化

`Step`のプロパティである`isActive`を`true`にすることで、
アイコンの色を`Theme`の`PrimaryColor`に変更可能です。

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-18-12.03.33-505x1024.png" alt="" width="300">

```dart
Stepper(
      // ・・・
      steps: const [
        Step(
          title: Text('Step 1 タイトル'),
          content: Text('Step 1 です'),
          isActive: true
        ),
        // ・・・
        ),
      ],
    );
```

### サンプルコード

以上が詳細設定となります。
最後に、今回紹介した詳細設定を入れ込んだ、サンプルコードを紹介します。

![](/images/wp-content/uploads/2022/03/画面収録_2022-03-17_21_28_51_AdobeCreativeCloudExpress.gif)

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(title: 'Stepper サンプル'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State createState() => _MyHomePageState();
}

class _MyHomePageState extends State {
  int _index = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Stepper(
        controlsBuilder: (context, details) {
          return Row(
            children: [
              if (details.currentStep != 2)
                TextButton(
                  onPressed: details.onStepContinue,
                  child: const Text('次へ'),
                ),
              if (details.currentStep != 0)
                TextButton(
                  onPressed: details.onStepCancel,
                  child: const Text('戻る'),
                ),
            ],
          );
        },
        currentStep: _index,
        onStepCancel: () {
          if (_index != 0) {
            setState(() {
              _index -= 1;
            });
          }
        },
        onStepContinue: () {
          if (_index != 2) {
            setState(() {
              _index += 1;
            });
          }
        },
        onStepTapped: (int index) {
          setState(() {
            _index = index;
          });
        },
        steps: [
          Step(
            title: Text('ステップ 1'),
            subtitle: Text('subtitle'),
            content: Text('ステップ 1 コンテンツ'),
            isActive: _index == 0,
            state: _index == 0 ? StepState.editing : StepState.complete,
          ),
          Step(
            title: Text('ステップ 2'),
            content: Text('ステップ 2 コンテンツ'),
            isActive: _index == 1,
            state: _index == 1
                ? StepState.editing
                : _index > 1
                    ? StepState.complete
                    : StepState.disabled,
          ),
          Step(
            title: Text('ステップ 3'),
            content: Text('ステップ 3 コンテンツ'),
            isActive: _index == 2,
            state: _index == 2
                ? StepState.editing
                : _index > 2
                    ? StepState.complete
                    : StepState.disabled,
          ),
        ],
      ),
    );
  }
}
```

本記事では、`Stepper Widget`の紹介を行いました。

基本的な使い方から詳細設定まで、徹底的に解説していきました。

`Stepper Widget`を使うとかなり簡単にこなれたUIを実現できるのでオススメです。
ぜひ使ってみてください！

本記事があなたのアプリ開発の一助となることを願っています。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/3/18）

私事ですが、昨日30回目の誕生日を迎えました。

とうとう、30になってしまったなぁ、というのが、正直な感想です。
諸先輩方からしたら、
まだ30じゃないか！、何言ってるんだ！
と怒られてしまうかも知れませんね。

気持ちや精神年齢が30歳に追いついていない気がしてなりません。
子供の頃、思っていた30代ってもっと安定していて、落ち着いていたな、と思います。

まあ、そんなこと言っても仕方がないですよね。
足りないところは足りないと認め、埋める努力をしていかなきゃいけません。

子供の頃の自分に、思ってたのと違うかもだけど、充実してるよ！と胸張って言える、
そんな30代を過ごしていこうと思います。

今回紹介したStepper Widgetのように、
一歩一歩、理想に向かって進んで行きます。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。