---
title: "【Flutter】 SnackBar を出す方法【ScaffoldMessenger】"
slug: "flutter-snackbar-scaffoldmessenger"
author: "Aoi"
description: ""
pubDatetime: 2022-03-25T10:00:00.000Z
tags: ["ウィジェット"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

アプリで一時的にメッセージを表示したいんだけど、いい方法ないかな？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

`BuildContext`を使わないで`SnackBar`を表示する方法はないかしら？

本記事ではこのような悩み、疑問に答えます。  
アプリでエラーメッセージなど、一時的にメッセージを表示したい時に使用する、  
`SnackBar`の表示方法について解説します。

本記事を読めば以下のgifのように、一時的にメッセージを出すことが可能となります。

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/SnackBar.gif)

`BuildContext`を使う方法と使わない方法、２つを紹介します。

よく使うテクニックですので、ぜひ読んでみてください！

## BuildContextを使う方法

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/パソコン.jpeg)

`BuildContext`を使って`SnackBar`を表示する方法を紹介します。

方法はとても簡単で、以下のコードを表示したい場所に配置するだけです。

```
ScaffoldMessenger.of(context).showSnackBar(
  const SnackBar(
    content: Text('メッセージ'),
  ),
);
```

`SnackBar`はプロパティを設定することで、  
背景色や、表示時間など、色々と変更することが可能です。

古い記事だと、`Scaffold.of(context).showSnackBar(〜)`  
が紹介されているかもしれません。  
こちらの方法は廃止予定で現在非推奨となっています。  
  
また、`Scaffold.~`の方法だと、画面遷移後に`SnackBar`が引き継がれない、  
というデメリットもあります。  
以上から、今回紹介した`ScaffoldMessenger.~`を使うことを強く勧めます。

サンプルとして導入で紹介したgifのコードを紹介します。

```
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('ページ1'),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.of(context).push(
              MaterialPageRoute(
                builder: (context) => const MySecondPage(),
              ),
            );
          },
          child: const Text('次のページ'),
        ),
      ),
    );
  }
}

class MySecondPage extends StatelessWidget {
  const MySecondPage({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('ページ2'),
        backgroundColor: Colors.red,
        automaticallyImplyLeading: false,
      ),
      body: Center(
        child: Builder(builder: (context) {
          return ElevatedButton(
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('メッセージ'),
                ),
              );
              Navigator.of(context).pop();
            },
            child: const Text('前のページ'),
          );
        }),
      ),
    );
  }
}
```

以上が`BuildContext`を使う`SnackBar`の表示方法となります。

## BuildContextを使わない方法

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/プログラミング画像.jpeg)

`View`とロジックを完全に切り離したい時など、  
`BuildContext`を使わないで`SnackBar`を表示させたい時があると思います。

ここでは、`BuildContext`を使わないで`SnackBar`を表示させる方法について解説します。

準備として、グローバルにて以下のキーを定義します。

```
final scaffoldKey = GlobalKey<ScaffoldMessengerState>();
```

このキーを`MaterialApp`に渡します。

```
MaterialApp(
  scaffoldMessengerKey: scaffoldKey,
  home: ~
);
```

SnackBarを使用したい場所で、キーから`ScaffoldMessengerState`を取り出します。

```
ScaffoldMessengerState _scaffoldMessangerState = scaffoldKey.currentState!;
```

このStateを使ってSnackBarを表示させます。

```
_scaffoldMessangerState.showSnackBar(
  const SnackBar(
    content: Text('メッセージ'),
  ),
);
```

サンプルとして`BuildContext`を使わない場合の導入で紹介したgifのコードを紹介します。

```
import 'package:flutter/material.dart';

final scaffoldKey = GlobalKey<ScaffoldMessengerState>();

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      scaffoldMessengerKey: scaffoldKey,
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('ページ1'),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.of(context).push(
              MaterialPageRoute(
                builder: (context) => const MySecondPage(),
              ),
            );
          },
          child: const Text('次のページ'),
        ),
      ),
    );
  }
}

class MySecondPage extends StatelessWidget {
  const MySecondPage({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('ページ2'),
        backgroundColor: Colors.red,
        automaticallyImplyLeading: false,
      ),
      body: Center(
        child: Builder(builder: (context) {
          return ElevatedButton(
            onPressed: () {
              ScaffoldMessengerState _scaffoldMessangerState =
                  scaffoldKey.currentState!;
              _scaffoldMessangerState.showSnackBar(
                const SnackBar(
                  content: Text('メッセージ'),
                ),
              );
              Navigator.of(context).pop();
            },
            child: const Text('前のページ'),
          );
        }),
      ),
    );
  }
}
```

以上が`BuildContext`を使わない`SnackBar`の表示方法となります。

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング女性.jpeg)

アプリでエラーメッセージなど、一時的にメッセージを表示したい時に使用する、  
`SnackBar`の表示方法について解説しました。

`BuildContext`を使う方法と使わない方法、２つを紹介しました。

`BuildContext`を使わない方法は使う方法に比べて少し複雑ですが、  
自由度高くどこでも`SnackBar`を呼び出せるようになるので、有用だと思います。

ぜひ本記事を読んで使ってみてください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 参考

https://youtu.be/lytQi-slT5Y

## 編集後記（2022/3/25）

最近海外の掲示板のReddit等でFirebaseの代替手段として登場したAppwriteが話題になっています。

この話題に乗っかり自分も使用してみようと思い、ちょっと調べてみました。

現状Cloud版がリリースされておらず、  
自前でサーバーを用意し、そこにAppwriteをインストールするという形で利用できるようです。

ローカルのデスクトップでもインストールはできますが、  
やはり、Firebaseのように外部データベースとして使用したいため、  
現状での採用は、サーバー用意するハードルが高い、そう感じました。

FirebaseがCloudで使えるのは改めて素晴らしいですね。

Cloud版のリリースに向けて開発推進中らしいので、  
大人しく待とうと思います。

簡単に利用できるようになったら記事化しようと思いますので、  
ぜひお楽しみにお待ちください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。