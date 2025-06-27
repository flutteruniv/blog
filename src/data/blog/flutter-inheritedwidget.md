---
title: "【 Flutter 】 InheritedWidget って何？"
slug: "flutter-inheritedwidget"
author: "Aoi"
description: ""
pubDatetime: "2022-07-06"
tags: ["Widget"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/ojisan.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      勉強していたら `InheritedWidget` って`Widget` が出てきたけれど、
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>
一体何なんだろう？

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/obasan.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      状態管理で使えるらしいけれど、どう使うのか気になるわ！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

本記事ではそんな疑問にお答えします。

`Provider`や`Riverpod` の内部で使われる、状態管理の基礎となる`Widget`、
` InheritedWidget `について解説します。

https://youtu.be/og-vJqLzg2c
最近、公式でも紹介されていました。

基本的な使い方を始めとして、
内部でどんなことが行われているのかについても触れていきます。

今はとても優れた状態管理パッケージがたくさんあるので、
わざわざこのInhertitedWidgetを使うことはないかと思います。

ですが、温故知新という言葉があるように、
昔の、基礎となる優れた考え方を知ることは、
新しいことを発見する足がかりとなるかもしれません。

なので本記事は、初心者の方から理解を深めたい中級者の方まで
有用な記事となっているかと思います。
かなり長い記事となりますが、ぜひ読んでみて下さい！

## InheritedWidget の概要と使い方

`InheritedWidget` の概要と使い方について解説していきます。

`InheritedWidget` は`Provider` や `Riverpod` の内部でも使われている、
状態管理の基礎となる`Widget` です。

このため、`Inherited Widget`だけでも状態管理は可能となっています。

「そもそも状態管理って何？」と思われる方がいるかも知れません。
以下で状態管理の課題(`InheritedWidget` で解決したい課題)について、
まずは見ていきましょう。

### InheritedWidget で解決したい課題

Flutterのコードを書くことにある程度慣れてくると、
Widget の build メソッドの中にWidgetを何度も追加して、
Widgetの依存関係がどんどん深くなって行くかと思います。（以下の図）

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-17-20.09.06-793x1024.webp" alt="" width="300">

課題になるのは、最下層のWidget(水色)で最上部のWidgetが
持つデータ(黄色)を参照したい時です。

どうやって参照すれば良いでしょうか？

一つの方法は、上のWidgetからコンストラクタを使ってデータを受け渡していく方法です。
（以下のコード）

```dart
class GrandpasWidget extends StatefulWidget {
  const GrandpasWidget({super.key});

  @override
  State createState() => _GrandpasWidgetState();
}

class _GrandpasWidgetState extends State {
  int data = 100;

  @override
  Widget build(BuildContext context) {
    return FathersWidget(
      data: data,
    );
  }
}

class FathersWidget extends StatelessWidget {
  const FathersWidget({super.key, required this.data});

  final int data;

  @override
  Widget build(BuildContext context) {
    return MyWidget(data: data);
  }
}

class MyWidget extends StatelessWidget {
  const MyWidget({super.key, required this.data});
//・・・
}
```

この方法だと確実にデータは受け渡せますが、
同じようなコードを何度も書くことになり、ちょっと冗長ですよね。

可能であれば以下のように直接参照したいです。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-17-20.27.50-853x1024.webp" alt="" width="300">

これを可能にするのが`Inherited Widget`です。

データを`InheritedWidget`に持たせることで、
依存関係が`InheritedWidget`の下にある`Widget`ならどこからでも
データを参照できるようになります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-17-20.37.42-884x1024.webp" alt="" width="300">

`InheritedWidget` はFlutterのSDK の中の`Widget`なので、
特別にパッケージをインストール必要はありません。

`InheritedWidget `で課題が解決できるなこと、
わかっていただけましたでしょうか。

では、実際のコードにて基本的な使い方を解説していきます。

### 基本的な使い方

基本的な使い方の概要は以下の通りです。

1. データを共有したい`Widget`群の上部で全てと依存関係がある部分に、
`InheritedWidget `継承クラスを配置する
2. `InheritedWidget `継承クラスに用意したメソッドにてデータを参照する

ベースとなるコードはこちらになります。

2つの画面にカウンターが設定されています。
このアプリでは、2つの画面で同じ値を状態として共有したいです。
そのため、依存関係が上のWidgetに状態（データ）をもたせる必要がある、
そんなアプリとなっています。

サンプルコード全体はこちら
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text('First Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'ボタンを押した回数',
                ),
                Text(
                  'ここに回数を表示する',
                  style: Theme.of(context).textTheme.headline4,
                ),
              ],
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => const MySecondPage(),
                  ),
                );
              },
              child: const Text('次のページ'),
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}

class MySecondPage extends StatelessWidget {
  const MySecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: const Text('Second Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'ボタンを押した回数',
                ),
                Text(
                  'ここに回数を表示する',
                  style: Theme.of(context).textTheme.headline4,
                ),
              ],
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('前のページ'),
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

![](/images/wp-content/uploads/2022/06/20220618_inherited_base.webp)

今回のコードはFlutter 3.0.4 にて記載します。

#### `InheritedWidget `継承クラスの配置

まず、`InheritedWidgert` 継承クラスを用意します。

定義のコードは以下の通りです。

```dart
class InheritedCounter extends InheritedWidget {
  const InheritedCounter({
    super.key,
    required this.counter,
    //1
    required super.child,
  });

  final int counter;

  //2
  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;
}
```

共通で持たせたいデータの`counter` の部分以外は、
`InheritedWidget`の継承により必要なコードとなっています。

//1
`InheritedWidget`の継承クラスは`child`を引数に設定する必要があります。

//2
`InheritedWidget`の継承クラスは`updateShouldNotify`メソッドを
オーバーライドする必要があります。
このメソッドは、この`InheritedWidget`の継承クラスがリビルドされた際に
`InheritedWidget`の継承クラスからデータを受け取った`Widget`をリビルドするか否かを
判定するメソッドです。
簡易化のため、今回は常に`true`を返すとしています。

次に、`MyHomePage`と`MySecondPage` が共通で依存関係を持っている`MyApp`にて、
この`InheritedCounter`クラスを配置します。

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const InheritedCounter(
      counter: 100,
      child: MaterialApp(
        home: MyHomePage(),
      ),
    );
  }
}
```

#### データの参照

`InheritedCounter`にて設定した`counter = 100` という値、
これを`MyHomePage`、`MySecondPage`にて参照するためには、
以下の`dependOnInheritedWidgetOfExactType`メソッドを用います。

```dart
context.dependOnInheritedWidgetOfExactType()!.counter
```

ただ、このメソッド、ちょっと長いですよね。

これをもっと短くするために`InheritedCounter` に以下のメソッドを追加しましょう。

```dart
class InheritedCounter extends InheritedWidget {
  const InheritedCounter({
    super.key,
    required this.counter,
    required super.child,
  });

  final int counter;
  //このメソッドを追加
  static InheritedCounter of(BuildContext context) =>
      context.dependOnInheritedWidgetOfExactType()!;

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;
}
```

これにより以下のメソッドで参照可能となります。

```dart
InheritedCounter.of(context).counter
```

このメソッドを追加してデータを参照したアプリのコードは以下の通りです。

サンプルコード全体はこちら
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class InheritedCounter extends InheritedWidget {
  const InheritedCounter({
    super.key,
    required this.counter,
    required super.child,
  });

  final int counter;

  static InheritedCounter of(BuildContext context) =>
      context.dependOnInheritedWidgetOfExactType()!;

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const InheritedCounter(
      counter: 100,
      child: MaterialApp(
        home: MyHomePage(),
      ),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text('First Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'ボタンを押した回数',
                ),
                Text(
                  '${InheritedCounter.of(context).counter}',
                  style: Theme.of(context).textTheme.headline4,
                ),
              ],
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => const MySecondPage(),
                  ),
                );
              },
              child: const Text('次のページ'),
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}

class MySecondPage extends StatelessWidget {
  const MySecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: const Text('Second Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'ボタンを押した回数',
                ),
                Text(
                  '${InheritedCounter.of(context).counter}',
                  style: Theme.of(context).textTheme.headline4,
                ),
              ],
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('前のページ'),
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

コードを実行すると、ちゃんと`Widget`の依存関係の上部で設定した`counter = 100`
という値を取得できていることがわかります。

`dependOnInheritedWidgetOfExactType`については後半で解説します。

### データの更新

カウンターアプリとしては、参照だけでなく値の更新もしたいところです。
`InheritedCounter.of(context).counter++`
とすればよさそうですが、これはできません。
`StatefulWidget `の`State`と違い、 `InheritedWidget `(というか`Widget`)は
一度インスタンスが生成された後、自身を変えることができない、
`immutable`(不変)の性質を持つからです。

ではどうすればよいでしょうか？

答えは、データを変えることのできる`StatefulWidget` と
`InheritedWidget` を組み合わせる、です。

ここから若干テクニカルなことをします。
一旦組み合わせたコードを見てみましょう。

```dart
//3
class _InheritedCounter extends InheritedWidget {
  const _InheritedCounter({
    required this.data,
    required super.child,
  });
  //4
  final MyCounterState data;

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;
}

class MyCounter extends StatefulWidget {
  const MyCounter({
    super.key,
    required this.child,
  });

  //5
  final Widget child;

  //6
  static MyCounterState of(BuildContext context) {
    return context
        .dependOnInheritedWidgetOfExactType()!
        .data;
  }

  @override
  State createState() => MyCounterState();
}

//7
class MyCounterState extends State {
  int count = 0;

  void increment() => setState(() {
        count++;
      });
  //8
  @override
  Widget build(BuildContext context) {
    return _InheritedCounter(
      data: this,
      child: widget.child,
    );
  }
}
```

//3
`InheritedWidget` を`MyCounter` , `MyCounterState` (組み合わせる`StatefulWidget`と`State`)
からしか参照しなくなるため、プライベート(アンダーバー付き)にします。

//4
`InheritedWidget` で保持するデータを、
`MyCounterState` (組み合わせる`StatefulWidget`の`State`)とします。

//5
`MyCounter Widget` では受け取った`Widget` を`_InheritedCounter`でラップし返す、
という処理を行うため`Widget`を受け取るよう設定します。

//6
`InheritedCounter`をプライベートにしたため、
`InheritedCounter`にあった`of`メソッドを`MyCounter`に移動しています。

//7
ofメソッドで `MyCounterState`を返すため、
`MyCounterState`をパブリック(アンダーバーなし)にしています。

//8
`child`で受け取った`Widget`を`build`メソッドで返す際に
`_inheritedCounter`で囲んで返します。
これにより`MyCounter`より依存関係が下の`Widget`は`InheritedWidget` で
囲まれることとなります。
`_inheritedCounter`に設定した`this`は`build`メソッドを実行している
`MyCounterState`自身を表しています。

先程`InheritedWidget `継承クラスで囲んでいた代わりに、
作成した`MyCounter`で囲います。

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MyCounter(
      child: MaterialApp(
        home: MyHomePage(),
      ),
    );
  }
}
```

値の更新は`MyCounterState` の メソッド(`increment`)で行います。

更新の仕組みとしては以下のようになります。

1. `MyCounter.of(context).increment()`で`MyCounterState`の`counter`の値を更新、
`setState`が実行される
2. `setState`により`MyCounterState`がリビルドされ、
値の更新された`MyCounterState`が`_inheritedCounter`に渡される
3. `_inheritedCounter`がデータの変化を感知し、
`_inheritedCounter`のデータを観測している`Widg`etにリビルドをリクエストする
4. `_inheritedCounter`のデータを観測している`Widg`etがリビルドされ
更新されたデータを取得、画面に更新されたデータが表示される

サンプルコード全体はこちら
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class _InheritedCounter extends InheritedWidget {
  const _InheritedCounter({
    required this.data,
    required super.child,
  });

  final MyCounterState data;

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;
}

class MyCounter extends StatefulWidget {
  const MyCounter({
    super.key,
    required this.child,
  });

  final Widget child;

  static MyCounterState of(BuildContext context) {
    return context
        .dependOnInheritedWidgetOfExactType()!
        .data;
  }

  @override
  State createState() => MyCounterState();
}

class MyCounterState extends State {
  int count = 0;

  void increment() => setState(() {
        count++;
      });

  @override
  Widget build(BuildContext context) {
    return _InheritedCounter(
      data: this,
      child: widget.child,
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MyCounter(
      child: MaterialApp(
        home: MyHomePage(),
      ),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text('First Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'ボタンを押した回数',
                ),
                Text(
                  '${MyCounter.of(context).count}',
                  style: Theme.of(context).textTheme.headline4,
                ),
              ],
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => const MySecondPage(),
                  ),
                );
              },
              child: const Text('次のページ'),
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          MyCounter.of(context).increment();
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}

class MySecondPage extends StatelessWidget {
  const MySecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: const Text('Second Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'ボタンを押した回数',
                ),
                Text(
                  '${MyCounter.of(context).count}',
                  style: Theme.of(context).textTheme.headline4,
                ),
              ],
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('前のページ'),
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          MyCounter.of(context).increment();
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

![](/images/wp-content/uploads/2022/06/20220618_inherited_complete.webp)

### 改良点

Flutter Performance で+ボタンを押した時のリビルドの状況を見てみましょう。

![](/images/wp-content/uploads/2022/06/20220618_inherited_performance_before.webp)

画面的に変化している部分はカウンター部分の`Text`だけですが、
変化していない`Scaffold`などもリビルドされていることがわかります。

このリビルドを最小限に押さえるためにはどうすればよいでしょうか？

手順は2つです。

1. `Builder`を使ってリビルドされるWidgetを制限する
2. `Floating Action Button` にて『`InheritedWidget`を監視しているものリスト』に
登録されないようにする

#### `Builder`を使ってリビルドされるWidgetを制限する

`MyCounter.of(context).〜`(正確には`dependOnInheritedWidgetOfExactType`)を使うと、
引数に使用した`context`が、
『`Inherited Widget`を監視しているものリスト』に登録されます。

`Inherited Widget`が更新されると、このリストに紐付いたWidgetがリビルドされる、
という仕組みとなっています。

`Builder`で囲まない場合だと、`MyCounter.of(context).〜`で引数に使用した`context`は、
`MyHomePage` `Widget`の`build`メソッドの`context`のため、
`Inherited Widget`が更新されると`MyHomePage` `Widget`が更新されてしまう訳です。

以下の画像のように`Builder Widget`を使って`Text Widget`を切り出すと、
`MyCounter.of(context).〜`で引数に使用した`context`は`Builder Widget` の`context`となるため、
リビルドされる`Widget`を`Builder`以下に制限することができます。

![](/images/wp-content/uploads/2022/07/20220706_builder-1024x664.webp)

#### `Floating Action Button` にて『`InheritedWidget`を監視しているものリスト』に
登録されないようにする

タップすることデータを増加させる `Floating Action Button `でも
`MyCounter.of(context).〜` (この内部での`dependOnInheritedWidgetOfExactType`)
が使われているため、
タップすると使用している`context`が『`InheritedWidget`を監視しているものリスト』
に登録されてしまいリビルドの範囲が拡大されてしまいます。

そこで、タップされたときには`dependOnInheritedWidgetOfExactType`ではなく、
`getElementForInheritedWidgetOfExactType`を使うようにします。

`getElementForInheritedWidgetOfExactType`についても後半で解説します。

具体的には、`MyCounter`の`of`メソッドを以下のように書き換えます。

```dart
static MyCounterState of(BuildContext context, {bool rebuild = true}) {
    return rebuild
        ? context.dependOnInheritedWidgetOfExactType()!.data
        : (context
                .getElementForInheritedWidgetOfExactType()!
                .widget as _InheritedCounter)
            .data;
  }
```

`getElementForInheritedWidgetOfExactType`の返す型の関係上、
`dependOnInheritedWidgetOfExactType`と若干記載が変わっています。

引数に、リビルド対象とするか否かを判定するフラグを持たせ、
`InheritedWidget`の更新にあわせてリビルドしたいときには
`dependOnInheritedWidgetOfExactType`を、
リビルドしたくない際には`getElementForInheritedWidgetOfExactType`を
使えるようにしています。

具体的な`Floating Action Button`の実装は以下のようになります。

```dart
floatingActionButton: FloatingActionButton(
        onPressed: () {
          MyCounter.of(context, rebuild: false).increment();
        },
        child: const Icon(Icons.add),
      ),
```

以上が改善内容となります。

改善した全体のコードはこちら
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class _InheritedCounter extends InheritedWidget {
  const _InheritedCounter({
    required this.data,
    required super.child,
  });

  final MyCounterState data;

  @override
  bool updateShouldNotify(_InheritedCounter oldWidget) => true;
}

class MyCounter extends StatefulWidget {
  const MyCounter({
    super.key,
    required this.child,
  });

  final Widget child;

  static MyCounterState of(BuildContext context, {bool rebuild = true}) {
    return rebuild
        ? context.dependOnInheritedWidgetOfExactType()!.data
        : (context
                .getElementForInheritedWidgetOfExactType()!
                .widget as _InheritedCounter)
            .data;
  }

  @override
  State createState() => MyCounterState();
}

class MyCounterState extends State {
  int count = 0;

  void increment() => setState(() {
        count++;
      });

  @override
  Widget build(BuildContext context) {
    return _InheritedCounter(
      data: this,
      child: widget.child,
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MyCounter(
      child: MaterialApp(
        home: MyHomePage(),
      ),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text('First Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'ボタンを押した回数',
                ),
                Builder(
                  builder: (context) {
                    return Text(
                      '${MyCounter.of(context).count}',
                      style: Theme.of(context).textTheme.headline4,
                    );
                  },
                ),
              ],
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => const MySecondPage(),
                  ),
                );
              },
              child: const Text('次のページ'),
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          MyCounter.of(context, rebuild: false).increment();
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}

class MySecondPage extends StatelessWidget {
  const MySecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: const Text('Second Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'ボタンを押した回数',
                ),
                Builder(
                  builder: (context) {
                    return Text(
                      '${MyCounter.of(context).count}',
                      style: Theme.of(context).textTheme.headline4,
                    );
                  },
                ),
              ],
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('前のページ'),
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          MyCounter.of(context, rebuild: false).increment();
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

結果、カウントアップした際のリビルドの対象を少なくすることができました。

![](/images/wp-content/uploads/2022/07/20220618_inherited_performance_after.webp)

以上がInherited Widgetの概要でした。
次は具体的にInherited Widgetがどんなことをしているのか、内部の仕組みを追っていきます。

## Inherited Widget の仕組み

`Inherited Widget `の仕組みについて見ていきましょう。

この章を読めば、『何故`dependOnInheritedWidgetOfExactType` が優れているのか？』
がわかるはずです。

そのためにまず基礎知識として`Element `とは何か？について簡単に解説します。

### Elementとは何か？

`Widget`が描画される時、内部では、3種類の要素が活躍しています。
`Widget , Element, RenderObject`です。

それぞれの役割は以下のようになっています。

- `Widget `: その`Widget`の設定を管理するもの
- `Element` : その`Widget`のツリー上での位置やライフサイクルを管理するもの
- `RenderObject` : その`Widget`のサイズやレイアウト、描画を管理するもの

WidgetのツリーとはWidgetの親と子を結ぶことで表現した依存関係（またはその図）のことです。

この3種類については以下の動画がわかりやすいので興味のある方はぜひ見てみて下さい。

https://youtu.be/996ZgFRENMs

特に`Element`はその`Widget`についてどんな祖先や子がいるのかの依存関係や、
Widgetが更新された時どのように更新、再構築するかなどのライフサイクルを管理する、
重要な役割を担っています。

`InheritedWidget`もこの`Element`と深く関わっています。
次の節で見てみましょう。

### InheritedElement の継承

`Element`のクラスのコードの中に、`_inheritedWidgets`、というプロパティがあります。

これはその名の通り、先祖の`Inherited Widget` の`Element` (`InheritedElement`)を保管している`Map`です。

`_inheritedWidgets`は`Map<Type, InheritedElement>?`型で、
`Type` は `Inherited Widget `を継承した型となります。

`InheritedElement`が`mount`される(ツリー上に配置される)際に、
自身が`_inheritedWidgets`に登録されます。

実装コードを見る
```dart
class InheritedElement extends ProxyElement {
  /// Creates an element that uses the given widget as its configuration.
  InheritedElement(InheritedWidget widget) : super(widget);

  final Map _dependents = HashMap();

  @override
  void _updateInheritance() {
    assert(_lifecycleState == _ElementLifecycle.active);
    final Map? incomingWidgets = _parent?._inheritedWidgets;
    if (incomingWidgets != null)
      _inheritedWidgets = HashMap.of(incomingWidgets);
    else
      _inheritedWidgets = HashMap();
    _inheritedWidgets![widget.runtimeType] = this;
  }
```

`Element`が`mount`される度に、親から子へ継承されるため、
すべての`InheritedElement`の子の`Element`は、`_inheritedWidgets`にて
祖先の`InheritedElement`を持っていることとなります。

ざっくばらんに言えば、`Element`は祖先の`InheritedElement`の情報を保持している、ということです。

### `dependOnInheritedWidgetOfExactType`について

`dependOnInheritedWidgetOfExactType` メソッドは`BuildContext` のメソッドとして定義され、
`BuildContext`の実装である`Element`にて実装されています。

`build `メソッドで使っている`context`とは、その`Widget`の`Element`です。

実装コードは以下のようになっています。

```dart
@override
  T? dependOnInheritedWidgetOfExactType({Object? aspect}) {
    assert(_debugCheckStateIsActiveForAncestorLookup());
    final InheritedElement? ancestor = _inheritedWidgets == null ? null : _inheritedWidgets![T];
    if (ancestor != null) {
      return dependOnInheritedElement(ancestor, aspect: aspect) as T;
    }
    _hadUnsatisfiedDependencies = true;
    return null;
  }
```

4行目にて、`_inheritedWidgets`から指定した型の`InheritedWidget`の`InheritedElement`を取得し、
`ancestor`に格納していることがわかります。

`dependOnInheritedElement`メソッドは処理後に`ancestor`の持つ`Widget`を返すので、
結論、`_inheritedWidgets`で保管していた祖先の`InheritedElement`、
並びに`InheritedWidet`を取得するメソッドとなっています。

このメソッドのすごいところは、祖先の`InheritedWidget`を取得するのに、
がとても簡単なことです。

祖先の`InheritedElement`をすべての子の`Element`で保管していて、
その中から探すだけなので、どれだけ子が多かったとしても(ツリーが深かったとしても)
とても簡単に取得できるのです。
（計算量がO(1)で済みます。）

### getElementForInheritedWidgetOfExactTypeについて

本記事で祖先の`InheritedWidget`を取得する方法として紹介したものに、
`getElementForInheritedWidgetOfExactType`がありました。
こちらについても実装を見てみましょう。

```dart
@override
  InheritedElement? getElementForInheritedWidgetOfExactType() {
    assert(_debugCheckStateIsActiveForAncestorLookup());
    final InheritedElement? ancestor = _inheritedWidgets == null ? null : _inheritedWidgets![T];
    return ancestor;
  }
```

こちらも同様に`_inheritedWidgets`から欲しい`InheritedWidget`の`InheritedElement`を取得していることがわかります。

`dependOnInheritedWidgetOfExactType`との違いは、
`dependOnInheritedElement`メソッドを間に噛ませているか否かです。

では、`dependOnInheritedElement`メソッドの実装を見てみましょう。

```dart
@override
  InheritedWidget dependOnInheritedElement(InheritedElement ancestor, { Object? aspect }) {
    assert(ancestor != null);
    _dependencies ??= HashSet();
    _dependencies!.add(ancestor);
    ancestor.updateDependencies(this, aspect);
    return ancestor.widget as InheritedWidget;
  }
```

ポイントは、6行目の`ancestor.updateDependencies(this, aspect)`です。
この行では`ancestor`(祖先の`InheritedElement`)の`updateDependencies`メソッドを呼び出し、
子孫である自身を引数に与えています。
このメソッドにより、祖先の`InheritedElement`内の`_dependents`に子孫である自身が登録されます。

登録されたものはInheritedElement(正確には継承元の`ProxyElement`)で実装されている
`update`メソッドが発火した際に、子孫であるElementのWidgetをリビルドするように設定します。

まとめると、`dependOnInheritedElement`メソッドは呼び出している`Element`を、
`InheritedWidget`に関係する`Element`の集合
(前述の『『`InheritedWidget`を監視しているものリスト』)に登録するメソッドです。

これが、`getElementForInheritedWidgetOfExactType`では呼び出されていないため、
こちらでは監視対象リストに入らないということがわかります。

以上が`InheritedWidget`の仕組みの話でした。

## まとめ

![](/images/wp-content/uploads/2022/03/猫パソコン.webp)

本記事では`InheritedWidget`の基本的な使い方を始めとして、
内部でどんなことが行われているのかについて解説していきました。

かなり長い記事でしたが、いかがだったでしょうか？

現在は優れた状態管理パッケージが様々作成されているため、
今回の記事の内容が直接役に立つことはあまりないかもしれません。

ですが、最初に述べたように、昔のやり方を知ること、
基礎を知ることは、Flutter力の底上げとしてとても良いことだと考えます。

興味がある方は、Riverpod や Providerの内部実装コードのリーディングに挑戦してみて下さい。
今回記載した内容が多数見つかり興味深いはずです。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html

https://youtu.be/LFcGPS6cGrY

https://dartpad.dev/workshops.html?webserver=https://dartpad-workshops-io2021.web.app/inherited_widget&utm_source=google-io21&utm_medium=referral&utm_campaign=io21-resources#Step1

https://qiita.com/agajo/items/375d5415cb79689a925c

https://zenn.dev/chooyan/books/934f823764db62

https://medium.com/flutter-jp/inherited-widget-37495200d965

https://ericwindmill.com/articles/inherited_widget/

https://www.didierboelens.com/2018/06/widget-state-context-inheritedwidget/

https://medium.com/flutter/managing-flutter-application-state-with-inheritedwidgets-1140452befe1

## 編集後記（2022/7/6）

本記事はInheritedWidgetについての記事でした。

過去最高に学ぶことが多く、労力を注いだ記事となりました。
いかがだったでしょうか？

本記事がすぐに誰かの役に立つことはあまりないかもしれません。
ただこのような記事を書く意義はあるかと思っています。

すぐに役に立たない研究論文を書くのは有用なことか？
という議論を耳にしたことがあります。
その研究論文を読んで誰かが新たな発見をし論文を書き、
また異なる誰かがその論文を読んで新たな発見をする、
といった形で連鎖することがある、だから有用だ、という意見が寄せられていました。

本記事もこのような形で誰かの知識の糧になれば良いと思っています。

高望みかもしれませんが、本記事があなたの、
ないしまだ見ぬ誰かのアプリ開発の一助となれば幸いです。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
