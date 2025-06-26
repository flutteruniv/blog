---
layout: "../../layouts/BlogPost.astro"
title: "Flutter チュートリアル ~ロジックの組み方を学ぼう~"
description: ""
pubDatetime: "2022-04-01"
author: Aoi
slug: "flutter-tutorial-logic"
featured: false
draft: false
tags: ["初心者向け", "Flutter"]
ogImage: ""
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)
UIは組めるようになったけど、ロジックとか、状態管理とか難しいんだよなぁ

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)
いい練習になる教材はないかしら？

本記事では、そんな悩みにお答えします。

Flutterで UIが組めるようになった人のためのチュートリアルとして、
本記事では三目並べゲームの作成方法を通し、基本的なロジックの組み方について解説します。

完成系はこちらです。

https://dartpad.dartlang.org/?id=a2bd77692fee9e5368365a56e57c0c60

三目並べゲームをプレイでき、右側のボタンを押すと、
その手番まで戻るタイムトラベル機能が付いています。

このゲームを通して、Flutterのロジックの組み方や、基本的な状態管理を学んでいきましょう！

本記事は以下のReactのチュートリアルをFlutterで置き換えたものです。
Reactの経験者の方は、Flutterでの書き方の参考になると思います。

https://ja.reactjs.org/tutorial/tutorial.html

## 準備

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/プログラミング画像.jpeg)

本記事では、[こちら](https://dartpad.dartlang.org/?id=602a2d6dd8323d9e5e0bbc2fb74e3c43)のDartPadのコードをベースとして解説していきます。

DartPadでも進めることができますが、
おすすめはAndroid Studio もしくは VScodeを使うことです。

ショートカットキーなどを使ってエラー対応等ができるためです。

Android Studio でも、VScodeでもどちらでも構いません。
ぜひご自分の環境でこのチュートリアルを進めてみてください。

Android Studio もしくは VScodeで進める場合は、
以下のGitHubリポジトリをクローンし、startプロジェクトのコードを書き換えながら進めることをお勧めします。
（もしくは、startプロジェクトのmain.dartのコードを
自分のFlutterプロジェクトのmain.dartにコピペしてください。）
アプリの実行はChromeでしか確認していないため、Chromeで実行してください。

https://github.com/Umigishi-Aoi/flutter_tutorial_tic_tac_toe_game

また、このチュートリアルはコピー&ペーストでなく、手打ちで行うことをお勧めします。
コードの書き方を覚えることができ、理解も進むはずです。

途中で詰まった場合は、章の最後にその章の完成コード配置していますので、
それと見比べて、修正してみて下さい。

### startプロジェクトの解説

startプロジェクトの`main.dart` (DartPadの場合は表示されているコード)を見てください。

既に色々なコードが書かれていますね。
このコードについて概要を解説していきます。

#### 概要

まずは概要として、このコードがどのような構成になっているのかを紹介します。

このコードには大きく分けて3つの`Widget`があります。
`Game`, `Boad`, `Square`の3つです。

各`Widget`とUIの関係性は次の図の通りです。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/04/20220401_architecture-964x1024.png" alt="" width="300">

コードを見ると、
`Game`が`Board`を呼び出し、`Board`が`GridView`で`Square`を9つ並べているのが分かると思います。

まずは、`Game`の子`Widget`が`Board`で、さらに`Board`の子`Widget`が`Square`になっている、
という関係性が掴めればOKです。

### Step1.データの受け渡しの練習

今回のチュートリアルで基本となる、
情報の伝搬、親`Widget`から子`Widget`へのデータの受け渡しを練習してみましょう。

Startプロジェクトを少し書き換えて、各マス目に、自分の位置の番号を表示させてみます。

各マス目の番号の情報は、`Board`クラス`build`メソッド内の以下のコードのiとなります。

```
children: List.generate(
              9,
              (int i) => const Square(),
            ),
```

=> はアロー関数といいます。
ここでは詳細は省きます。
詳しくは、以下の記事をご覧ください。

https://www.choge-blog.com/programming/dart-arrow/

この`i`をマス目である`Square`に渡し、`i`の値をマス目に表示させてみましょう。

まず、渡すためには`Square`側で受け取る準備が必要です。

`Square`側で、以下のように`value`というフィールド（変数）を宣言してみてください。

```dart
class Square extends StatelessWidget {
  const Square({
    Key? key,
  }) : super(key: key);

  final String value; //追加
```

すると、コンストラクタである`Square()`でエラーが出るはずです。

これは、フィールドはあるけれど、コンストラクタで受け取るコードが書いてないよ、というエラーです。
以下のようにコンストラクタに追記しましょう。

```dart
class Square extends StatelessWidget {
  const Square({
    Key? key,
    required this.value, //追加
  }) : super(key: key);

  final String value;
```

Mac端末でVScodeの場合は、赤線にカーソルを合わせ、"⌘ + . " →"generate constractor"でもOKです。

できましたでしょうか？これで、`Square`が値を受け取る準備ができました。

フィールドを宣言する→コンストラクタに追記する、が、
値を受け取るためのフィールドの追加の一連の流れとなります。

ぜひ覚えておきましょう。

ここまでできると、今度は`Board`の方でエラーが出ているはずです。

このエラーは、「`Square()`で`value`の値を要求しているのに、入っていないよ！」という内容です。

以下の`Board`クラスの`build`メソッドを以下のように書き換えて、
`Square`に番号を渡してあげましょう。

```dart
@override
  Widget build(BuildContext context) {
    const status = 'Next Player: X';
    return Column(
      children: [
        const Text(status),
        SizedBox(
          height: 34 * 3,
          width: 34 * 3,
          child: GridView.count(
            shrinkWrap: true,
            crossAxisCount: 3,
            children: List.generate(
              9,
              (int i) => Square(value: '$i'), //書き換える
            ),
          ),
        ),
      ],
    );
  }
```

後々の都合上、`value`は`String`型となっています。
一方で、`i`は`int`型です。
型を合わせる必要があるため、`'$i'`という書き方となっています。

これでエラーは無くなりました。
ただ、まだ数字は表示されません。

`Square`で受け取った値を表示するロジックを書いていないからです。

`Square`の`build`メソッドを以下のように書き換えて、`value`を表示するようにしましょう。

```dart
@override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        height: 34,
        width: 34,
        decoration: BoxDecoration(
          border: Border.all(color: const Color.fromRGBO(9, 9, 9, 1), width: 1),
        ),
        child: Center( //const削除
          child: Text(
            value, //修正
            style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold), //const追加
          ),
        ),
      ),
    );
  }
```

/

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/04/20220401_value-1024x534.png" alt="" width="300">

できましたでしょうか？

以上が親`Widget`から子`Widget`へとデータを受け渡す方法となります。

ここまでの全体のコードは[こちら](https://dartpad.dartlang.org/?id=1959a019aef7ed01084cd6329b40b953)。

### Step_a.タップに反応するようにしよう

この章では、startプロジェクトをベースにコードを書き換えていきます。
startプロジェクトは[こちら](https://dartpad.dartlang.org/?id=602a2d6dd8323d9e5e0bbc2fb74e3c43)

三目並べのゲームではマス目へのタップへの反応が不可欠です。
練習として、各マス目をタップすると表示が変わるように、コードを書き換えてみましょう。

まずはどのようにしたら実装できるか、考え方を説明します。

タップされたら値が変わる、ということは、変わる値、つまり状態を持っている必要がありますね。

状態をもつ、ということは`StatefulWidget`を使えばよさそうです。

ということで、`Square`を`StatefulWidget`に書き換えてみましょう。

Mac端末でVSコードを使用している方は、`StatelessWidget`の上で"⌘ + ."を、
AndroidStudioを使用している方は"option + enter"を押すと簡単に`StatefulWidget`に書き換えられます。

```dart
class Square extends StatefulWidget {
  const Square({
    Key? key,
  }) : super(key: key);

  @override
  State createState() => _SquareState();
}

class _SquareState extends State {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        height: 34,
        width: 34,
        decoration: BoxDecoration(
          border: Border.all(color: const Color.fromRGBO(9, 9, 9, 1), width: 1),
        ),
        child: const Center(
          child: Text(
            '',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}
```

できましたでしょうか？

次に、状態を`_value`というフィールドで持たせてみます。
`_SquareState`クラスに以下のように書き加えてください。

```dart
class _SquareState extends State {
  String _value = ''; //追加

  @override
  Widget build(BuildContext context) {
```

これで、`Square`が`_value`という状態を持つことができました。
`Square`クラスの`build`メソッドを以下のコードのようにして、
`Square`で表示する値を`_value`に設定しましょう。

```dart
@override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        height: 34,
        width: 34,
        decoration: BoxDecoration(
          border: Border.all(color: const Color.fromRGBO(9, 9, 9, 1), width: 1),
        ),
        child: Center( //const 削除
          child: Text(
            _value, //変更
            style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold), //const 追加
          ),
        ),
      ),
    );
  }
```

これで`Square`が状態である`_value`をマス目に表示するようになりました。

では、マス目をクリックしたら値が変わるようにするにはどうすればいいでしょうか？
今回は`GestureDetector`の`onTap`でそのロジックを設定します。

以下のように`Square`クラスの`build`メソッドを書き換えてください。

```dart
@override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => setState(() { //追加
        _value = 'X';  //追加
      }), //追加
      child: Container(
//残りは変更ありません
```

ここでポイントとなるのは`setState`です。

`setState`をすると、そのメソッドを持つ`StatefulWidget`が再描画(リビルド)されます。

今回の例でいうと、

タップ
→ `_value` が Xに置き換わる
→ `setState`で再描画される
→ Xが表示される
といった流れとなります。

上記コードを実行して、マス目を触ってみてください。
触ったマス目でXが表示されるはずです。

以上がタップに反応するようにする方法でした。

ここまでの全体のコードは[こちら](https://dartpad.dartlang.org/?id=4903c53291abb7c0a2bd07c81335c3dd)。

## ３目並べ基本ロジックの作成

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

基本はわかりましたでしょうか？
ここからいよいよ三目並べの作成に入っていきます。

最終的な目標は、手順を戻せる、タイムトラベル機能の実装ですが、
この章では単純に三目並べが遊べるところまでを目標にしたいと思います。

### Step2.親から子に状態を渡そう

まず、三目並べで遊べるようにするには何が必要か考えてみましょう。

一番必要なのは、３つ揃った時に勝敗を判定するロジックですよね。

これを可能にするためには、各マスがもつ値の情報が必要です。
前の章で、`Square`に値の状態を持たせることはやりましたね。
これを引っ張ってくればできそうですが、
親から子に値を渡すのとは違い、子から親に値を渡すのは複雑で、難しいです。

なので、このように考えます。

親Widget(`Board`)が９つのマス目の値の情報を状態として持ち、
子Widget(`Square`)に渡して表示します。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/04/20220401_squares-1024x753.png" alt="" width="300">

親が9つのマス目の値の情報を持つことで、これを精査すれば勝敗を決めることができます。

ここでは、"Step1.データの受け渡しの練習"で作成したコードをベースに作成していきます。
"Step1.データの受け渡しの練習"で作成したコードは[こちら](https://dartpad.dartlang.org/?id=1959a019aef7ed01084cd6329b40b953)。

実際にコードで見てみましょう。

まず、`Board Widget`を `StatefulWidget`に変えましょう。

```dart
class Board extends StatefulWidget {
  const Board({
    Key? key,
  }) : super(key: key);

  @override
  State createState() => _BoardState();
}

class _BoardState extends State {
  @override
  Widget build(BuildContext context) {
    const status = 'Next Player: X';
    return Column(
      children: [
        const Text(status),
        SizedBox(
          height: 34 * 3,
          width: 34 * 3,
          child: GridView.count(
            shrinkWrap: true,
            crossAxisCount: 3,
            children: List.generate(
              9,
              (int i) => Square(value: '$i'),
            ),
          ),
        ),
      ],
    );
  }
}
```

次に、状態として9個のマス目の値を定義しましょう。
今回のように順序づけて9個の値を管理する際には`List`を使うと良いです。

以下のように状態を定義しましょう。

```dart
class _BoardState extends State {
  List _squares = List.generate(9, (index) => null);
```

`squares`が保持する状態です。
`List.generate(9, (index) => null)`で要素数9のリストを生成し初期値として`null`を与えています。

String? は、nullでも良いString型の値を定義するときに用いられる書き方です。
このnull safetyの書き方については、以下の記事を読んでみてください。

https://zenn.dev/kboy/articles/ae607839cd4573

今、`Square`には`i`の値をそのまま渡していました。
これを、状態の`squares`の各`index`の値を渡すように設定しましょう。

以下のように`Board`クラスの`build`メソッドのコードを書き換えてください。

```dart
@override
  Widget build(BuildContext context) {
    const status = 'Next Player: X';
    return Column(
      children: [
        const Text(status),
        SizedBox(
          height: 34 * 3,
          width: 34 * 3,
          child: GridView.count(
            shrinkWrap: true,
            crossAxisCount: 3,
            children: List.generate(
              9,
              (int i) => Square(value: _squares[i]), //書き換える
            ),
          ),
        ),
      ],
    );
  }
```

上のブロックで話したnull safetyの関係でエラーが発生しています。
`Square`を以下のように書き換えてください。

```dart
class Square extends StatelessWidget {
  const Square({
    Key? key,
    required this.value,
  }) : super(key: key);

  final String? value; //書き換える

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        height: 34,
        width: 34,
        decoration: BoxDecoration(
          border: Border.all(color: const Color.fromRGBO(9, 9, 9, 1), width: 1),
        ),
        child: Center(
          child: Text(
            value ?? '',//書き換える
            style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}
```

※ `value ?? ''` は`??`の左が `null` の時、右の値とする、という表現です。

以上で、親である`Board `から子である`Square`に状態を渡すことができました。

ここまでの全体のコードは[こちら](https://dartpad.dartlang.org/?id=8350272b0b5bc03310bebbc85d4059bb)。

### Step3.親から子にメソッドを渡そう

マス目をクリックした際の挙動を設定していきましょう。
上の章では、`Square`の中で`onTap`で`Square`の状態を変更して`setState`して再描画しましたね。

ただ、今回は状態を持っているのは`Board`です。
けれど、`onTap`があるのは子の`Square`です。
子の`Square`から親の`Board`の状態を変更するにはどうすれば良いでしょうか？

解決策は、`Board`に状態変更するメソッド（関数）を定義し、
そのメソッドを子の`Square`に渡して呼び出してもらうようにすることです。

親から子へは値だけではなく、メソッドも渡すことが可能です。

実際にコードで見てみましょう。

まずは受け取る側の準備からです。
値の受け渡しの時と同様に、`Square`にメソッドを宣言し、コンストラクタに追記しましょう。

```dart
class Square extends StatelessWidget {
  const Square({
    Key? key,
    required this.onTap,//追加
    required this.value,
  }) : super(key: key);

  final void Function() onTap;  //追加
  final String? value;
```

現在、`Board`で`Square`を設定している部分でエラーが出ていると思います。
`Board`クラスの`build`メソッドのエラーの部分を以下のように書き換え、
`Square`にメソッドを渡しましょう。

```
(int i) => Square(
                onTap: () => handleClick(i), //追加
                value: _squares[i],
              ),
```

まだ`handleClick`のメソッドを定義していないため、エラーが出ていると思います。

buildメソッドの前に以下のように`handleClick`を定義しましょう。

```dart
class _BoardState extends State {
  List squares = List.generate(9, (index) => null);

//追加ここから
  void handleClick(int i) {
    final squares = _squares.sublist(0);
    squares[i] = 'X';
    setState(() {
      _squares = squares;
    });
  }
//ここまで

  @override
  Widget build(BuildContext context) {
//残りは変更ありません
```

最後に、`Square` で受け取った `onTap` メソッドを`GestureDetector`の`onTap`に設定しましょう。
`Square`クラスの`build`メソッドを書き換えます。

```dart
@override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap, //追加
      child: Container(
//残りは変更ありません
```

以上で設定は完了です。
ここまでできたらアプリを実行して、マス目をタップしてみてください。

先ほどと同様にXが表示されるはずです。

ここまでの全体のコードは[こちら](https://dartpad.dartlang.org/?id=b3bb1466f6b4c7b8fbcf4ae232e33de1)。

### Step4.XとOを交互に表示しよう

今までのコードではXしか表示できませんでした。
コードを改造して、XとOを交互に表示できるようにしましょう。

考え方はこうです。
まず、次の手番がXかOかを管理する状態を用意します。
XかOかなので、`true` or `false`を返す`bool`型の状態にするのが良いでしょう。
この状態を見て`true`ならXを、`false`ならOを表示させます。
最後に手番の後に状態を反転させます。

これなら、XとOが交互に表示されるようになりそうです。
それでは、実装していきましょう。

まず`Board`にXかOかを管理する状態を用意します。

```dart
class _BoardState extends State {
  List _squares = List.generate(9, (index) => null);
  bool _xIsNext = true; //追加
```

次に`Board`クラスの`handleClick`を以下のように書き換え、
`_xIsNext`が`true`ならXを、`false`ならOを表示させ、
表示後、`_xIsNext`を反転させます。

```
void handleClick(int i) {
    final squares = _squares.sublist(0);
    squares[i] = _xIsNext ? 'X' : 'O'; //書き換える
    setState(() {
      _squares = squares;
      _xIsNext = !_xIsNext; //追加
    });
  }
```

これにより、XとOが交互に表示されるようになりました。

Next Playerの表示も変わるようにしましょう。
以下のように`Board`クラスの`build`メソッドを書き換えてみてください。

```dart
@override
  Widget build(BuildContext context) {
    final status = 'Next Player: ${_xIsNext ? 'X' : 'O'}';  //書き換え
    return Column(
      children: [
        Text(status),  //const削除
        SizedBox(
//残りは変更ありません
```

これで、XとOの手番の変化を実装できました。

ここまでの全体のコードは[こちら](https://dartpad.dartlang.org/?id=352e7db93e73865d99f28b7a7de5ecbc)。

### Step5.ゲーム勝者の判定をしよう

いよいよ、この章の最後となります。
ゲーム勝者の判定ロジックを作成しましょう。

コードベースで解説していきます。

以下のコードをファイル末尾に貼り付けてください。

```
//1
String? calculateWinner(List squares) {
  //2
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i  createState() => _GameState();
}

class _GameState extends State {
  List>> _history = [
    {'squares': List.generate(9, (index) => null)}
  ];
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Board(),
              Padding(
                padding: const EdgeInsets.only(left: 20),
                child: Column(children: const []),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

ここで、次にやることを整理します。

`Board`で状態を受け取る準備をしましょう。

盤面の状態を`Game`が管理するようになったので、
`Board`が`Square`の状態を管理するようになった時と同様に、
`Game`から`Board`へ盤面の状態を変更するメソッドを渡す必要があります。

なので、`Board`では、状態だけでなくメソッドも受け取る準備をしなければいけません。

また、`Board`から`Square`に渡したメソッド、`handleClick`には、
次がXの番か、Oの番かを表す状態`_xIsNext`が含まれていました。

今回は`handleClick`は`Game`が持つため、`_xIsNext`も`Game`で管理するようにしましょう。

NextPlayerの表示も`_xIsNext`を使っていました。
この表示の部分も`Game`に移してしまいましょう。

こうすると、`Board`はもはや状態を持たなくなります。
そのため、`StatelessWidget`に書き換えてしまいましょう。

やることを整理すると以下のようになります。

- `_xIsNext`を`Game`に移す
- NextPlayerの表示部分を`Game`に移す
- `Board`を`StatelessWidget`に変える
- `Board`で状態を受け取る準備をする
- `Board`でメソッドを受け取る準備をする

一つ一つやっていきます。
途中出るエラーについては後々修正していきますので、
気にせずに手順を進めてください。

#### `_xIsNext`を`Game`に移す

```dart
class _BoardState extends State {
  List _squares = List.generate(9, (index) => null);
//_xIsNextを削除

  //この部分は変更ありません
}

class Game extends StatefulWidget {
  const Game({Key? key}) : super(key: key);

  @override
  State createState() => _GameState();
}

class _GameState extends State {
  List>> _history = [
    {'squares': List.generate(9, (index) => null)}
  ];
    bool _xIsNext = true;//追加
  @override
  Widget build(BuildContext context) {
//残りは変更ありません
```

#### NextPlayerの表示部分を`Game`に移す

```dart
class _BoardState extends State {
  List _squares = List.generate(9, (index) => null);

//変更ありません

  @override
  Widget build(BuildContext context) {
//削除
    return SizedBox(  //Column()とTextを削除
      height: 34 * 3,
      width: 34 * 3,
      child: GridView.count(
        shrinkWrap: true,
        crossAxisCount: 3,
        children: List.generate(
          9,
          (int i) => Square(
            onTap: () => handleClick(i),
            value: _squares[i],
          ),
        ),
      ),
    );
  }
}

class Game extends StatefulWidget {
  const Game({Key? key}) : super(key: key);

  @override
  State createState() => _GameState();
}

class _GameState extends State {
  final List>> _history = [
    {'squares': List.generate(9, (index) => null)}
  ];
  final bool _xIsNext = true;
  @override
  Widget build(BuildContext context) {
//追加ここから
    final history = _history;
    final current = history[history.length - 1];
    final winner = calculateWinner(current['squares']!);

    String status;

    if (winner != null) {
      status = 'Winner: $winner';
    } else {
      status = 'Next player: ${_xIsNext ? 'X' : 'O'}';
    }
//ここまで
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Board(),
              Padding(
                padding: const EdgeInsets.only(left: 20),
                child: Column(
                  children: [//const削除 、Padding()追加
                    Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Text(status),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

ここでcurrentは最新の盤面情報を表しています。
このcurrentを用いて勝敗を判定しています。
(currentがMap型であることに注意です。)

#### `Board`を`StatelessWidget`に変える

```dart
class Board extends StatelessWidget {
  const Board({
    Key? key,
  }) : super(key: key);

  List _squares = List.generate(9, (index) => null);
//残りは変更ありません
```

#### `Board`で状態を受け取る準備をする

`_squares`を`square`に変え、状態を受け取ります。

```dart
class Board extends StatelessWidget {
  const Board({
    Key? key,
    required this.squares,//追記
  }) : super(key: key);

   final List squares;//修正

//handleClickの修正なし
  void handleClick(int i) {
    final squares = _squares.sublist(0);
    if (calculateWinner(squares) != null || squares[i] != null) {
      return;
    }
    squares[i] = _xIsNext ? 'X' : 'O';
    setState(() {
      _squares = squares;
      _xIsNext = !_xIsNext;
    });
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 34 * 3,
      width: 34 * 3,
      child: GridView.count(
        shrinkWrap: true,
        crossAxisCount: 3,
        children: List.generate(
          9,
          (int i) => Square(
            onTap: () => handleClick(i),
            value: squares[i], //修正
          ),
        ),
      ),
    );
  }
}
```

#### `Board`でメソッドを受け取る準備をする

`Board`に`onTap`を定義して、メソッドを受け取る準備をします。

```dart
class Board extends StatelessWidget {
  const Board({
    Key? key,
    required this.onTap,  //追加
    required this.squares,
  }) : super(key: key);

  final void Function(int i) onTap;//追加
  final List squares;

  void handleClick(int i) {
    final squares = _squares.sublist(0);
    if (calculateWinner(squares) != null || squares[i] != null) {
      return;
    }
    squares[i] = _xIsNext ? 'X' : 'O';
    setState(() {
      _squares = squares;
      _xIsNext = !_xIsNext;
    });
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 34 * 3,
      width: 34 * 3,
      child: GridView.count(
        shrinkWrap: true,
        crossAxisCount: 3,
        children: List.generate(
          9,
          (int i) => Square(
            onTap: () => onTap(i),//修正
            value: squares[i],
          ),
        ),
      ),
    );
  }
}
```

お疲れ様でした！以上で`Board`で状態とメソッドを受け取る準備はできました。

次に`Game`側で`Board`に状態とメソッドを受け渡す処理を書きましょう。
`handleClick`を`Game`に移動させ、以下のようにコードを書き換えます。

```dart
class _GameState extends State {
  List>> _history = [
    {'squares': List.generate(9, (index) => null)}
  ];
  bool _xIsNext = true;

//移動、修正
  void handleClick(int i) {
    final history = _history;
    final current = history[history.length - 1];
    final squares = current['squares']!.sublist(0);

    if (calculateWinner(squares) != null || squares[i] != null) {
      return;
    }
    squares[i] = _xIsNext ? 'X' : 'O';
    history.add({'squares': squares});
    setState(() {
      _history = history;
      _xIsNext = !_xIsNext;
    });
  }

  @override
  Widget build(BuildContext context) {
    final history = _history;
    final current = history[history.length - 1];
    final winner = calculateWinner(current['squares']!);

    String status;

    if (winner != null) {
      status = 'Winner: $winner';
    } else {
      status = 'Next player: ${_xIsNext ? 'X' : 'O'}';
    }

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Board(//const削除、中身を追加
                onTap: handleClick,
                squares: current['squares']!,
              ),
              Padding(
                padding: const EdgeInsets.only(left: 20),
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Text(status),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

`handleClick`の中身が変わっていることに注意してください。

以上でエラーがなくなり、元の通りアプリを実行すると三目並べゲームが遊べる状態となります。
頑張って変更していった割に変化が少なく思うかも知れませんが、
安心してください、タイムトラベル機能の導入のためには大きな前進です。

導入まで後ちょっとです、頑張りましょう！

ここまでの全体のコードは[こちら](https://dartpad.dartlang.org/?id=a978eb8be3f367e68bf523bc46c9de30)。

### Step7.過去の着順を表示する

過去の着順を表示するためのボタンを作成していきます。

着順が増えるたびにボタンを増やすにはどうすればいいでしょうか？

一つの答えは、`List`のメソッドである`map`を用いて、
「盤面の状態の記録」である`_history`の要素ごとにボタンを作成し、
リスト化して表示する、です。

言葉では伝わりにくいので、コードで示します。
`Game`の`build`メソッドを以下のように書き換えてください。

```dart
@override
  Widget build(BuildContext context) {
    final history = _history;
    final current = history[history.length - 1];
    final winner = calculateWinner(current['squares']!);

//追加ここから
    final moves = history.map((squares) {
      final step = history.indexOf(squares);
      final desc = step != 0 ? 'Go to move #$step' : 'Go to game start';
      return ElevatedButton(onPressed: () {}, child: Text(desc));
    }).toList();
//ここまで
    String status;

    if (winner != null) {
      status = 'Winner: $winner';
    } else {
      status = 'Next player: ${_xIsNext ? 'X' : 'O'}';
    }

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Board(
                onTap: handleClick,
                squares: current['squares']!,
              ),
              Padding(
                padding: const EdgeInsets.only(left: 20),
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Text(status),
                    ),
                    Column(//Column()を追加
                      children: moves,
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
```

ポイントは、追記した`moves`の部分です。
`map`を使って、`history`のそれぞれの要素に対し、`ElevatedBotton`を生成し、
最後にリスト化しています。

少しテクニカルですが、このような書き方もできるのだ、と覚えておくと良いでしょう。

今の状態でアプリを実行してみると、マス目を押すごとにボタンが追加されていきます。

ただ、ボタンを押しても何も起きません。
次の章でボタンを押してタイムトラベルできるようにしましょう。

ここまでの全体のコードは[こちら](https://dartpad.dartlang.org/?id=e210422fe8f00fa58188dc040853e6d3)。

### Step8. タイムトラベル機能の実装

長かったチュートリアルもいよいよ最後です！

タイムトラベル機能を実装しましょう。

タイムトラベル機能のためには今が何手目の状態を見ているのかを表す状態を導入します。

`Game`へ以下のように`_stepNumber`を追加してください。

```dart
class _GameState extends State {
  List>> _history = [
    {'squares': List.generate(9, (index) => null)}
  ];
  int _stepNumber = 0;//追加
  bool _xIsNext = true;
//残りは変更ありません
```

次に、`Game`内で`jumpTo`メソッドを定義して、
`_stepNumber`がこのメソッドで更新されるようにします。
また、`_stepNumber`の値が偶数だった場合には次の手番はXなので、
`_xIsNext`を`true`にします。

```
void handleClick(int i) {
//変更ありません
  }
//追加
  void jumpTo(int step) {
    setState(() {
      _stepNumber = step;
      _xIsNext = (step % 2) == 0;
    });
  }

  @override
  Widget build(BuildContext context) {
//残りは変更ありません
```

この`jumpTo`メソッドを、前章で設定したElevatedButtonに反映しましょう。

`Game`の`build`メソッドを以下のように更新してください。

```dart
@override
  Widget build(BuildContext context) {
    final history = _history;
    final current = history[history.length - 1];
    final winner = calculateWinner(current['squares']!);

    final moves = history.map((squares) {
      final step = history.indexOf(squares);
      final desc = step != 0 ? 'Go to move #$step' : 'Go to game start';
      return ElevatedButton(onPressed: () => jumpTo(step), child: Text(desc)); //書き換える
    }).toList();

    String status;
//残りは変更ありません
```

次に、`_stepNumber`が、マス目をクリックするたび更新されるように、
`handleClick`を書き換えましょう。

書き換えた`Game`内のコードは以下のようになります。

```
void handleClick(int i) {
    final history = _history.sublist(0, _stepNumber + 1); //書き換える
    final current = history[history.length - 1];
    final squares = current['squares']!.sublist(0);

    if (calculateWinner(squares) != null || squares[i] != null) {
      return;
    }
    squares[i] = _xIsNext ? 'X' : 'O';
    history.add({'squares': squares});
    setState(() {
      _history = history;
      _stepNumber = history.length - 1;//追加
      _xIsNext = !_xIsNext;
    });
  }
```

上の書き換えの部分について解説します。
「時間の巻き戻し」をした場合、新しい`_stepNumber`より先の記録は要らなくなります。
なので、`subList`を使って、`_stepNumber`より先の記録を破棄しています。

いよいよ本当に最後です。
`_stepNumber`の盤面を表示させるように`Game`内の`build`メソッドの中身を書き換えましょう。

```dart
@override
  Widget build(BuildContext context) {
    final history = _history;
    final current = history[_stepNumber];//書き換える
    final winner = calculateWinner(current['squares']!);

//残りは変更ありません
```

おめでとうございます！

これでタイムトラベル機能が実装できました！
アプリを実行し、マス目をいくつかクリックした後に右側のボタンを押してみてください。

その着手の盤面が表示される、タイムトラベルが可能となっていることがわかります。

完成したコードは[こちら](https://dartpad.dartlang.org/?id=a2bd77692fee9e5368365a56e57c0c60)。

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

Flutterで UIが組めるようになった人のためのチュートリアルとして、
本記事では三目並べゲームの作成方法を通し、基本的なロジックの組み方について解説しました。

本記事で作成した三目並べは以下のような機能を持っています。

- 三目並べが遊べる
- 決着がついた時に勝者が表示される
- 着手の履歴を見ることができ、その着手まで戻ることができる。

かなり長く、歯応えのあるチュートリアルだったかと思います。

けれども、このチュートリアルを終えたあなたは、
Flutter力、プログラミング力がきっと上がっているはずです。

次はあなただけの自作アプリに挑戦してみてください。
きっと以前よりロジックの組み立てがしやすいですよ。

本記事があなたのアプリ開発の一助となれば、幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/4/1）

本日、4/1、Flutter大学がリニューアルされました！

特にHPが一新されて、よりわかりやすく、親しみやすくなっています。
ぜひ覗いてみてください。

https://flutteruniv.com/

このリニューアルを記念してのチュートリアル記事だったのですが、
いかがでしたでしょうか？

ここまで読まれている方は少ないかもしれませんね。

書いている私としてもかなり歯応えのある記事となりました。

この記事が誰かの役に立つことを、心から祈っています。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします