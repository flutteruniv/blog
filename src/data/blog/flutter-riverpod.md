---
title: "【2022年最新】Flutter × Riverpod の基本的な使い方解説！"
slug: "flutter-riverpod"
description: ""
pubDatetime: "2022-05-29"
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
      Flutterを勉強していてRiverpod の名前をよく聞くけれど、一体何なんだろう？
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
      使い方が難しそうでわからないわ！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

そんな疑問、悩みにお答えします！

本記事は、Flutter × Riverpodの基本的な使い方の解説記事となります。
サンプルアプリを基にRiverpodにおける状態の共有、参照、更新の方法を解説します。

記事後半では、Flutter大学で公開している、
Flutter × Riverpodのサンプルリポジトリを紹介します。

ぜひ読んでRiverpodの使い方を学んでみてください！

## Riverpod とは？

### 背景

Riverpodについて解説する前に、まず背景として解決したい問題を紹介します。

例えば、カウンターアプリのカウンターの値を管理するクラスがあったとして、
このインスタンスをアプリの色々なところで使いたい、
そんな時どうすれば良いでしょうか？

思いつく方法としては、
以下の図のように `main.dart`でインスタンス(Instance)を定義し、
Widget ツリーの下層にインスタンスを受け渡して使用する方法です。

![](/images/wp-content/uploads/2022/05/スクリーンショット-2022-05-27-23.54.58-1024x600.webp)

これだと、

- 何度もインスタンスの受け渡しコードを書かなければならない
- ツリーが深くなれば深くなるほどインスタンスの受け渡しが大変になる
- インスタンスを更新したい時には+αの対応が必要になる

といった問題を抱えています。

このように、アプリ全体で共有する状態を管理することは、
アプリ開発においての大きな問題となり得ます。

これを解決する手法の一つがRiverpodです。

### Riverpod による解決

Riverpod とは、上記のような状態管理に関する問題を解決するためのフレームワークです。

以下の図のようにRiverpodでは、
プロバイダと呼ばれるオブジェクトに値やインスタンスを格納し、
このプロバイダを必要な時にViewで呼び出すことで、
ツリーのどの位置でも値の呼び出し、参照を可能にします。

![](/images/wp-content/uploads/2022/05/スクリーンショット-2022-05-28-0.55.27-1024x578.webp)

`main.dart`から値を受け渡していた時と比べて、
ずっとシンプルにできていますよね。

このように状態管理に関する問題を解決するのがRiverpodです。

## Riverpod の基本的な使い方

サンプルアプリは以下の環境にて解説を行います。

Flutter 3.0.1
flutter_riverpod 1.0.4

今回は少し改造したカウンターアプリでRiverpodの基本的な使い方を学びましょう。

![](/images/wp-content/uploads/2022/05/20220528_riverpod_base.webp)

基本的なカウンターアプリに、画面遷移を追加したサンプルです。

コードは以下になります。

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

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State createState() => _MyHomePageState();
}

class _MyHomePageState extends State {
  int _counter = 0;

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
                  '$_counter',
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
          setState(() {
            _counter++;
          });
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
                  'ここに回数を表示',
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

このアプリに追加したい機能としては、以下になります。

- 画面遷移後の「ここに回数を表示」にカウンターの値を表示する
- 画面遷移後のページでボタンを押すことによりカウントアップを行う
画面を戻った際、このカウントアップが反映されているようにする

上記を満たすためには、2つの画面で『カウントの値』という状態を共有し、
どちらの画面からでも更新できるようにする必要があります。

この問題を、Riverpodを用いて解決しましょう。
解決を通してRiverpodの基本的な使い方を解説していきます。

### パッケージのインストール

まず、パッケージをインストールしましょう。

Riverpod には使用用途に応じて3種類のパッケージが用意されています。

- riverpod パッケージ ← Dartのみ使用する際に使用
- flutter_riverpod パッケージ ← Flutter のみ使用する際に使用
- hooks_riverpod パッケージ ← flutter_hooks とRiverpodを併用する際に使用

今回はFlutterのみの使用のため、flutter_riverpod パッケージを用います。

Flutterプロジェクトのルートディレクトリにて、
以下のコマンドを打ちパッケージをインストールしましょう。

```bash
flutter pub add flutter_riverpod
```

### パッケージのインポート

パッケージのインポートを行います。

`main.dart`のファイルの`import`部分に以下のコードを追加してください。

```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';
```

### ProviderScopeの設定

Riverpodを使う上で大事なポイントです。
Riverpodで状態管理する`Widget`を`ProviderScope`で囲う必要があります。

具体的には、１番根元の部分、`main`関数内で`ProviderScope`を以下のように設定します。

```dart
void main() {
  runApp(const ProviderScope(child: MyApp()));
}
```

### プロバイダの定義

いよいよ状態を格納するプロバイダを定義します。

Riverpodでは、様々な種類のプロバイダが用意されています。
（詳細は[こちら](https://riverpod.dev/ja/docs/concepts/providers)をご覧ください。）

今回は、シンプルに状態を管理することのできる`StateProvider`を用います。

main関数の上あたりのグローバルの位置に、以下の文を追記しプロバイダを定義します。

```dart
final countProvider = StateProvider((ref) => 0);
```

`int`型の値、`0`を格納した`StateProvider`を`countProvider`に定義したコードとなります。

グローバルに定義して良いの？
と思われるかもしれませんが、問題有りません。
値の保存自体はローカルのスコープ内で行っています。
プロバイダ自体は不変（イミュータブル）であり、
関数をグローバルで宣言しているのと変わりないためです。（[引用元](https://riverpod.dev/ja/docs/concepts/providers)）
[参考記事](https://zenn.dev/junq/articles/fa3dfd24a7ab84)

### 値の参照

上記で定義したプロバイダの値を参照する方法について解説します。

プロバイダを利用するには、`WidgetRef `クラスのオブジェクトを取得する必要があります。

この`WidgetRef `クラスのオブジェクトを取得する方法については色々ありますが、
今回は`ConsumerWidget`を継承した`Widget`にて使用する方法を紹介します。
（他の方法は[こちら](https://riverpod.dev/ja/docs/concepts/reading)）

まず、プロバイダで値を参照する`Widget`を`ConsumerWidget`を継承した`Widget`に書き換えます。
（`int _counter = 0;`を削除、`StatefulWidget`を`StatelessWidget`に書き換え、
`StatelessWidget`を`ConsumerWidget`に置き換えます。）

```dart
class MyHomePage extends ConsumerWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context,WidgetRef ref) {
    return Scaffold(
```

この時、build メソッドの引数に`WidgetRef`の変数が追加されるのに注意です。

これでプロバイダを参照する準備ができました。

`_counter`で値を表示していた部分を`ref.watch(countProvider)`に変更しましょう。

```dart
Text(
  '${ref.watch(countProvider)}',
  style: Theme.of(context).textTheme.headline4,
),
```

`ref.watch` は引数のプロバイダの値を取得し、監視します。
プロバイダの値に変更があった場合、この値に依存する`Widget`の更新が行われます。

つまりプロバイダの値を更新するだけで、
`setState`をしなくても値が更新されて表示されるわけです。

`ref.watch` は引数のプロバイダーの値を取得し、監視する、ということを覚えておきましょう。

`SecondPage`も同様に`ConsumerWIdget`を継承した`Widget`に書き換え、
「ここに回数を表示」の部分に`ref.watch(countProvider)`を設定しましょう。
（最後に修正したサンプルコードを紹介します。）

### 値の更新

値の更新も同様に、`WidgetRef `クラスのオブジェクトを利用します。

値の更新では`ref.read`を用います。
`ref.read`は値の監視を行わず、取得のみを行います。
`ref.watch`でも値の更新が可能ですが、`onPressed` のようなプロパティ内で使用する場合は
`ref.read`の使用が推奨されています。
（[参考](https://riverpod.dev/ja/docs/concepts/reading)）

`MyHomePage`の`setState`で`_counter`の値を更新していたコードを、
`ref.read(countProvider.notifier).state ++` に変更してください。

```dart
floatingActionButton: FloatingActionButton(
  onPressed: () {
    ref.read(countProvider.notifier).state ++;
  },
  child: const Icon(Icons.add),
),
```

`MySecondPage`も同様に`ref.read(countProvider.notifier).state ++`を追加します。

以上がRiverpodの基本的な使い方となります！

### サンプルコード

Riverpodを使って機能追加したコードの全体は以下の通りです。

```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final countProvider = StateProvider((ref) => 0);

void main() {
  runApp(const ProviderScope(child: MyApp()));
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

class MyHomePage extends ConsumerWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
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
                  '${ref.watch(countProvider)}',
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
          ref.read(countProvider.notifier).state++;
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}

class MySecondPage extends ConsumerWidget {
  const MySecondPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
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
                  '${ref.watch(countProvider)}',
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
          ref.read(countProvider.notifier).state++;
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

上記コードを実行した結果がこちらです。

![](/images/wp-content/uploads/2022/05/20220528_riverpod_complete.webp)

状態の共有ができており、更新がどちらの画面でもできています。

## Flutter大学のサンプルリポジトリ

![](/images/wp-content/uploads/2022/05/20220528_riverpod_repo.webp)

Flutter大学で用意しているFlutter × Riverpod のサンプルリポジトリはこちらです。

https://github.com/flutteruniv/flutter_riverpod_sample

有志のFlutter大学メンバーにより更新がなされているリポジトリです。

サンプルリポジトリのコードにはコメントが事細かに記載されており、
このリポジトリだけでもRiverpodの使い方を学ぶことができます。

このリポジトリでは、上のサンプルアプリとは異なり、
プロバイダとして`StateNotifierProvider`を用いて構築されています。

[StateNotifierProvider](https://riverpod.dev/ja/docs/providers/state_notifier_provider/)は、
`StateNotifier`を継承したクラスを状態として格納するプロバイダです。
「イミュータブル（不変）」な状態を扱いたい際、
状態変更のメソッドを一つの場所で集中的に管理したい際に用いられます。
`StateNotifier`を継承したクラスにて状態を更新するメソッドを用意することで、
外部からメソッドを使って状態を更新することが可能となります。

例：サンプルリポジトリ、`lib/state/counter.dart`内の`incrementCounter()`メソッド

Flutter と Riverpodの組み合わせをさらに学ぶのに良い教材となっているかと思います。
本記事と併せて、ぜひ見てみてください！

## まとめ

![](/images/wp-content/uploads/2022/03/猫パソコン.webp)

本記事では、Flutter × Riverpodの基本的な使い方の解説しました。
サンプルアプリを基にRiverpodにおける状態の共有、参照、更新の方法を解説しました。

記事後半では、Flutter大学で公開している、
Flutter × Riverpodのサンプルリポジトリを紹介しました。

今回紹介した内容は、あくまで基本的な使い方になります。
Riverpodをより深く学んでいくとさらにできることが増え、
あなたのアプリ開発の役に立つことでしょう。

本記事で紹介した内容以上に深く知りたい方は、ぜひ公式ドキュメントを読んで見てください。
（なんと、日本語化されています！）

https://riverpod.dev/ja/

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/5/29）

Flutter × Riverpod の解説記事でした。

先日、このようなツイートがありました。

https://twitter.com/_mono/status/1530174690857467905

Flutter大学のFlutter × Riverpod のサンプルについて、貴重なご意見をいただきました。

こちらについて、真摯に受け止め、
改めて正しく、最新のRiverpodの使い方を紹介した次第です。

今後はさらに注意の上、
正しい情報、新しい情報を伝えていくよう心がけていきます。

精進致しますので、
ぜひFlutter大学、週刊Flutter大学を`ref.watch`していてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
