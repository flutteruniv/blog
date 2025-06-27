---
title: "【Flutter】 FutureとStream の違いって何？"
slug: "flutter-future-stream-difference"
author: "Aoi"
description: ""
pubDatetime: "2022-03-09"
tags: ["初心者向け"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      FutureとStream 、よく出てくるけど、一体何なの？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      何が違うのかわからないわ！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

Flutterでコードを書いていて出てくる`Future`と`Stream`、
どちらも非同期処理でよく使われるものとなっていますが、難しくてよくわからないですよね。

本記事では`Future`と`Stream`それぞれについて解説し、
違いについてまとめます。

Flutter初心者必見の内容となっています。
ぜひ読んでみてください！

## Futureとは

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/パソコン.jpeg)

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Future ってよく出てくるけど、一体何なんだろう？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

`Future`とは、**「非同期処理の返り値を表すクラス」**です。

例えば、以下のような処理を考えてみましょう。

1. コンソールに「明日の天気は」を出力する
2. ウェブページからデータを取得する
3. コンソールに「晴れです」を出力する

コンソールに「明日の天気は晴れです」と表示したい処理と、
全く関係なくウェブページからデータを取得する処理を同時に行なっている例です。

ウェブページからデータを取得する処理は時間がかかります。
また、Flutter/Dartではプログラムは上から順番に実行されます。
普通は途中で順序が変わったりしません。
そのため、上の処理を行うと、「明日の天気は」の出力と、「晴れです」の出力の間に、
ウェブページからデータを取得している時間分、待ち時間が発生します。

これは、あまりユーザーフレンドリーではありませんよね。
理想としては、ウェブページからデータを取得している間に、
「晴れです」を表示させて、
「明日の天気は」と「晴れです」の待ち時間を無くしたいです。

ここで登場するのが`Future`です。
`Future`を返り値に保つ関数は、非同期処理となり、その関数が実行している間に、
他の処理を実行することが可能となります。

今回の例で言うと、実行に時間のかかるウェブページからデータを取得する処理を
`Future`を返り値にして非同期処理にすることで、
ウェブページからデータを取得している間に「晴れです」を表示させることができます。

`Future`を使う意味、わかりましたでしょうか？

一般的に処理に時間がかかる関数は`Future`を返り値に持っています。
今回例に出したウェブページからデータを取得する処理も、
普通は`Future`を返り値に持ちます。

`Future`クラスは正式には、`Future<T>`と書かれます。
`T`の部分に元々の返り値のクラスを設定することができます。
例: `Future<int>`

厳密には、Flutter/Dartでは、処理の同時実行はできません。
実際の処理は実行に時間のかかる処理（Future関数）の処理順を最後にする、
実行順の入れ替えを行なっています。

**Future**クラスは、 **event queue** の末尾にアイテムを登録します。

[The Event Loop and Dart (翻訳)](https://qiita.com/takyam/items/6ad155678c95bba4047f)

今回の例で言うと、

1. コンソールに「明日の天気は」を出力する
2. コンソールに「晴れです」を出力する
3. ウェブページからデータを取得する

の順に実行順を入れ替えています。

コンソールに表示する処理は同期処理で実行に時間がかからないため、
あたかもウェブページからデータを取得する処理と、「晴れです」を出力する処理が
同時に実行しているように見えるわけです。

同期処理、非同期処理についてはこちらも併せてご覧ください。

https://twitter.com/flutteruniv/status/1448921588636831749?s=21

### async / await について

`Future`と切っても切り離せない関係にあるのが、`async` / `await`です。

以下の処理をまとめた関数を考えましょう。

1. コンソールに「明日の天気は」を出力する
2. ウェブページから天気データを取得する （`Future`関数）
3. コンソールに「"天気データ"です」を出力する

今回は前の例と違い、ウェブページから取得したデータを利用して、
コンソールに天気を出力しています。

この場合実行順序はどうなるでしょうか？
答えは、次のようになります。

1. コンソールに「明日の天気は」を出力する
2. コンソールに「"天気データ"です」を出力する
3. ウェブページから天気データを取得する （`Future`関数）

ウェブページから天気データを取得する関数はFuture関数なので、実行順序が変わり、
天気データがないのに天気データを表示する、という矛盾した状態となってしまいます。

一体どうすれば良いでしょうか？

ウェブページから天気データを取得する処理を、
Future関数じゃなくするのが手っ取り早い気がしますが、
今回の場合、既にパッケージ等で定義済の関数のためそれはできないとします。

ここで登場するのが`await`です。

`await`を関数の前につけると、実行順序の変更が行われず、
付けた関数の結果を待って次の関数の処理が実行されます。

なので、今回の場合、`await`をウェブページから天気データを取得する関数の前につければ、
実行順序を変更することなく、以下の順序で実行可能です。

1. コンソールに「明日の天気は」を出力する
2. ウェブページから天気データを取得する （`Future`関数）
3. コンソールに「"天気データ"です」を出力する

ここで、`await`を使う時の注意が2点あります。

- 全体の関数を`Future`関数にすること
- 全体の関数に`async`をつけること

上の`Future`については、『`await`を使う = 処理に時間がかかる』
なので理解していただけるかと思います。

下の`async`のつける位置は『 { 』の前となります。
これは`await`を使う時の決まりのようなものです。
忘れずに付けましょう。

今回の例をコードにすると以下のようになります。
（あくまで例であり、実際に動作するコードでないことにご留意ください。）

```dart
**Future** showWeather()  **async**{

  //コンソールに「明日の天気は」を出力する
  print('明日の天気は');

  //ウェブページから天気データを取得する
  String weather = **await** getWeather();

  //コンソールに「"天気データ"です」を出力する
  print('$weather です')；
}
```

`async` / `await` についてはこちらも併せてご覧ください。

https://twitter.com/flutteruniv/status/1451806410849673220?s=21

### FutureBuilder

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      `Future`関数の結果を使ってUIを作成するにはどうしたらいいの？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

Widgetを組み上げる`build`関数は `Future`関数でないため、
この中で`async / await`を使うことはできません。

ここで登場するのが`FutureBuilder` Widgetです。
`FutureBuilder` Widgetを使えば、`Future`関数の結果を使ってUIを組み上げることが可能です。

以下のサンプルコードを使って、使い方を解説していきます。

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({
    super.key,
  });

  @override
  State createState() => _MyHomePageState();
}

class _MyHomePageState extends State {
  late Future data;

  //5秒待って、文字列を返す関数
  Future getData() async {
    //1
    return Future.delayed(
      const Duration(seconds: 5),
      () => 'データがありました',
    );
  }

  @override
  void initState() {
    //2
    data = getData();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('FutureBuilder'),
      ),
      body: Center(
        //3
        child: FutureBuilder(
          //4
          future: data,
          //5
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            //6
            if (snapshot.hasData) {
              //7
              return Text(snapshot.data!);
              //8
            } else if (snapshot.hasError) {
              //9
              return Text('${snapshot.error!}');
            } else {
              //10
              return const CircularProgressIndicator();
            }
          },
        ),
      ),
    );
  }
}
```

//1
5秒待ち、その後`String`を返す処理です。

//2
`Future<String>`型の変数 `data`の初期化部分です。
ここで//1で定義した`getData`の関数を実行します。
この`data`にFuture関数の結果が保持されます。

//3
`FutureBuilder`の定義部分です。

//4
`future`の定義部分です。
ここで定義したインスタンスの状態(エラーだったり取得中だったり)で、
次に説明する`snapshot`の状態が変わります。

//5
`builder`の定義部分です。
通常の`builder`と同様に`BuildContext`を引数に持ちます。
もう一つの`AsyncSnapshot<T>`の引数が上で定義した`future`の状態によって状態を変え、
`future`の結果のデータだったり、エラー結果を持ちます。
（`T`の部分には`future`で設定した`Future<T>`関数の`T`のクラスが入ります。）

//6
`snapshot.hasData`で、`future`で指定した関数に結果が返ってきたかどうかを判定します。

//7
`snapshot.data`に`future`で指定した関数の実行結果が入ります。

//8
`snapshot.hasError`で、`future`で指定した関数でエラーが発生したかどうかを判定します。

//9
`snapshot.error`に`future`で指定した関数のエラー結果が入ります。

//10
エラーも結果も返ってきていない状態、実行中の状態の時の処理です。

## Streamとは

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Stream って難しそうなんだよなぁ・・・
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

ちょっとイメージするのが難しいですが、イメージを掴めばこれ以上ない武器になります！

`Stream`とは、データオブジェクトを一つずつ渡していく川の流れのようなものです。

例えばFirebase等のデータベースを考えてみましょう。
データベースのデータは色々なユーザーによって更新されていきます。

この更新されたデータ一つ一つが川の流れのように流れていき、
あなたのアプリでデータの変化を確認する、そんなことが、Streamを使うと可能となります。

`Stream`のサンプルコードを見てみましょう。

```dart
Stream countStream() async* {
  for (int i = 1; i <div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Stream関数の結果を使ってUIを作成するにはどうしたらいいの？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

`Stream`の値によって画面の値を変えていくには`StreamBuilder`を使うと便利です。

こちらもサンプルコードで解説していきます。

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({
    super.key,
  });

  @override
  State createState() => _MyHomePageState();
}

class _MyHomePageState extends State {
  late Stream data;

  //1秒ごとに数値を返す関数
  Stream countStream() async* {
    for (var i = 1; i .delayed(const Duration(seconds: 1));
      yield i;
    }
  }

  @override
  void initState() {
    //1
    data = countStream();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('StreamBuilder'),
      ),
      body: Center(
        //2
        child: StreamBuilder(
          //3
          stream: data,
          //4
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            //5
            if (snapshot.hasData) {
              return Text(snapshot.data!.toString());
            } else if (snapshot.hasError) {
              return Text('${snapshot.error!}');
            } else {
              return const CircularProgressIndicator();
            }
          },
        ),
      ),
    );
  }
}
```

//1
`data`に`Stream`関数を設定している部分です。
`StreamBuilder`でこの`data`を監視することで、
`Stream`のデータを取得します。

//2
`StreamBuilder`の定義部分です。

//3
上で定義した`data`を設定します。

//4
`builder`の定義部分です。
`FutureBuilder`で解説した内容と同様です。
通常の`builder`と同様に`BuildContext`を引数に持ちます。
もう一つの`AsyncSnapshot<T>`の引数が上で定義した`Stream`の状態によって状態を変え、
`Stream`の結果のデータだったり、エラー結果を持ちます。
（`T`の部分には`stream`で設定した`Stream<T>`インスタンスの`T`のクラスが入ります。）

//5
以下、`FutureBuilder`と同内容のため省略します。

## FutureとStream の違い

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/プログラミング画像.jpeg)

最後に`Future`と`Stream`の違いを3つ紹介します。

### 検知する変数データの違い

`Future`は一度その関数を実行すれば返り値は一つのため、一つの結果しか出てきません。
そのため、変数の変化を追う、ということはできません。

一方`Stream`はデータの流れを作るため、変数の変化を追うことは得意です。

### 使う演算子の違い

`Future`関数では、`async`と`return`を用いて値を返します。

一方で、`Stream`関数では、`async*`と`yield`を使って値を返します。

### Builderの違い

`Future`関数を用いる`FutureBuilder`は一度だけデータを取得し画面を構築する、
という処理が得意です。

一方で、`Stream`関数を用いる`StreamBuilder`は、データを監視し続け、
変化するデータによって画面を更新する、という処理が得意です。
特に、リアルタイムのチャットアプリの実装等で役に立ちます。

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事では`Future`と`Stream`それぞれについて解説し、
違いについてまとめました。

`Future`も`Stream`も、少し複雑なアプリを作成しようとすると、
避けては通れないクラスだと思います。

この後の参考に本記事を書くにあたって参考にした資料を並べてあります。
もっと理解を深めたい方は、ぜひ読んでみてください。

本記事がアプリ制作の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://cswithiyush.hashnode.dev/streams-vs-futures-in-flutter

https://api.flutter.dev/flutter/dart-async/Future-class.html

https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html

https://qiita.com/takyam/items/6ad155678c95bba4047f

https://dart.dev/tutorials/language/streams

https://www.cresc.co.jp/tech/java/Google_Dart2/language/generators/generators.html

https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html

## 編集後記(2022/03/09)

本日3月9日午前3時から、Appleの新商品発表会がありましたね。

Flutter大学内でも、Mac Studio 買う？どうする？という話題でもちきりになっていました。

かくいう自分もFlutter大学メンバーとリアルタイムで発表会を見て、
リアクションしつつとても楽しんでいました。

自分としてはiPad Airが気になりましたね。
性能も申し分ないし、キーボードさえ用意すれば
ブログを書くのに役に立ちそうです。

みなさんはどんな商品が気になりましたか？
私の[Twitter](https://twitter.com/Aoi_Umigishi)にて是非是非コメントいただけると嬉しいです。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。