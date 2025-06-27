---
layout: "../../layouts/BlogPost.astro"
title: "【Flutter】 無限スクロール の実装方法"
description: ""
pubDatetime: "2022-03-30"
author: Aoi
slug: "flutter-infinity-scroll"
featured: false
draft: false
tags: ["Flutter"]
ogImage: ""
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutterで 無限スクロール を実装したいけれど、どうすればいいのだろう？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

そんな悩みにお答えするのが本記事です。

本記事ではリストビューが下端に行った時に自動でデータを読み取り、表示する、
無限スクロールの実装方法について解説します。

本記事を読めば、以下のgifのような無限スクロールが実装可能となります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/03/20220330_infinity_scroll.gif)

無限スクロールの実装方法は色々とありますが、
今回は`ScrollController`を使った方法を解説します。

ぜひ読んでみてください！

## 準備

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

まずは無限スクロールできないリストビューのサンプルコードを紹介します。

このコードを改造して無限スクロールができるようにします。

サンプルコードの後に、このコードの解説を行います。

### サンプルコード

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
      home: InfinityScrollPage(),
    );
  }
}

class InfinityScrollPage extends StatefulWidget {
  const InfinityScrollPage({Key? key}) : super(key: key);

  @override
  State createState() => _InfinityScrollPageState();
}

class _InfinityScrollPageState extends State {
  final List _contents = [];
  final int loadLength = 30;

  int _lastIndex = 0;

  //1
  Future _getContents() async {
    await Future.delayed(const Duration(seconds: 3));
    for (int i = _lastIndex; i  Container(
                width: double.infinity,
                height: 2,
                color: Colors.grey,
              ),
              itemBuilder: (BuildContext context, int index) {
                return SizedBox(
                  height: 50,
                  child: Center(
                    child: Text(
                      _contents[index],
                    ),
                  ),
                );
              },
            );
          },
        ),
      ),
    );
  }
}
```

### 解説

サンプルコードの特徴的な部分を解説します。

```
//1
  Future _getContents() async {
    await Future.delayed(const Duration(seconds: 3));
    for (int i = _lastIndex; i
非同期処理についてはこちらをご覧ください。

https://twitter.com/FlutterUniv/status/1448921588636831749?ref_src=twsrc%5Etfw

```
//2
        child: FutureBuilder(
          future: _getContents(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return const CircularProgressIndicator();
            }
            if (snapshot.hasError) {
              return Text('${snapshot.error}');
            }
// ・・・
```

//2
非同期関数でデータの取得を行い、その結果を使って画面表示するため、
`FutureBuilder`にて記述します。
`future`に先ほど定義したデータ取得の関数を設定します。
`snapshot.connectionState == ConnectionState.waiting` が`true`の時は
データ取得中であることを意味します。
データ取得中は`CircularProgressIndicator`を表示します。
データ取得後、エラーの際は、（`snapshot.hasError`が`true`の際は）
エラー内容を表示します。

FutureBuilderについてはこちらの記事も併せてご覧ください。

https://blog.flutteruniv.com/flutter-future-stream-difference/

```
//3
            return ListView.separated(
              itemCount: _contents.length,
              separatorBuilder: (BuildContext context, int index) => Container(
                width: double.infinity,
                height: 2,
                color: Colors.grey,
              ),
              itemBuilder: (BuildContext context, int index) {
                return SizedBox(
                  height: 50,
                  child: Center(
                    child: Text(
                      _contents[index],
                    ),
                  ),
                );
              },
            );
```

//3
リスト部分は、`ListView.seperated`を使用します。
`separatorBuilder`でアイテムの間にどんなWidgetを表示させるか設定可能です。
今回はシンプルに高さ2、グレーの線を表示させています。
`itemBuilder`では、読み取ったデータの配列`_content`から、データを表示しています。

## 無限スクロール の実装

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング女性.jpeg)

ここから、無限スクロールの実装に入ります。
準備と同様、コードの紹介の後、解説を行います。
ちょっと複雑な部分がありますが、解説しますのでぜひ読んでみてください。

### 実装コード

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
      home: InfinityScrollPage(),
    );
  }
}

class InfinityScrollPage extends StatefulWidget {
  const InfinityScrollPage({Key? key}) : super(key: key);

  @override
  State createState() => _InfinityScrollPageState();
}

class _InfinityScrollPageState extends State {
  final List _contents = [];
  final int loadLength = 30;

  int _lastIndex = 0;

  Future _getContents() async {
    await Future.delayed(const Duration(seconds: 3));

    for (int i = _lastIndex; i  contents;
  final Future Function() getContents;

  const InfinityListView({
    Key? key,
    required this.contents,
    required this.getContents,
  }) : super(key: key);

  @override
  State createState() => _InfinityListViewState();
}

class _InfinityListViewState extends State {
  //5
  late ScrollController _scrollController;
  //6
  bool _isLoading = false;

  //7
  @override
  void initState() {
    _scrollController = ScrollController();
    _scrollController.addListener(() async {
      if (_scrollController.position.pixels >=
              _scrollController.position.maxScrollExtent * 0.95 &&
          !_isLoading) {
        _isLoading = true;

        await widget.getContents();

        setState(() {
          _isLoading = false;
        });
      }
    });
    super.initState();
  }
  //8
  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      //9
      controller: _scrollController,
      //10
      itemCount: widget.contents.length + 1,
      separatorBuilder: (BuildContext context, int index) => Container(
        width: double.infinity,
        height: 2,
        color: Colors.grey,
      ),
      itemBuilder: (BuildContext context, int index) {
        //11
        if (widget.contents.length == index) {
          return const SizedBox(
            height: 50,
            width: 50,
            child: Center(
              child: CircularProgressIndicator(),
            ),
          );
        }
        return SizedBox(
          height: 50,
          child: Center(
            child: Text(
              widget.contents[index],
            ),
          ),
        );
      },
    );
  }
}
```

### 解説

実装コードを詳細に解説していきます。

```
//4
            return InfinityListView(
              contents: _contents,
              getContents: _getContents,
            );
```

//4
InfinityListViewという新たなWidgetを自作し、ListViewがあった場所に配置しています。
親から表示する`_contents` と、`_getContents`を取得し、
無限スクロール可能なListViewを表示します。

※本筋から若干外れる応用的な内容のため、
本筋を読みたい方は以下の文は飛ばしてください。

ここで新たなWidgetで`ListView`を分けている理由は描画パフォーマンスのためです。
分けなくても無限スクロール自体は実装可能です。
無限スクロールで新たなデータを読み取る際に、`setState`を行う必要があります。
新たなWidgetで分けない場合、`FutureBuilder`も`setState`にてリビルドされてしまうため、
`ListView`の再構築が行われ、結果としてリストの末尾に到達するたび、
既にあるリストが一度白紙になって表示される、ということが起きます。
これの防御策として、setStateの範囲を絞るために、
ListViewを新たなWidgetで置き換えています。

```
//5
  late ScrollController _scrollController;
```

//5
`ScrollController`の定義部分です。
この`ScrollController`を用いて、スクロールが終端に行ったことを検知し、
データの再取得の処理を行います。

```
//6
  bool _isLoading = false;
```

//6
データ取得状況を管理するフラグです。
データ取得中に再度データ取得処理が走らないよう、このフラグで管理します。

```
//7
  @override
  void initState() {
    _scrollController = ScrollController();
    _scrollController.addListener(() async {
      if (_scrollController.position.pixels >=
              _scrollController.position.maxScrollExtent * 0.95 &&
          !_isLoading) {
        _isLoading = true;

        await widget.getContents();

        setState(() {
          _isLoading = false;
        });
      }
    });
    super.initState();
  }
```

//7
ここが無限スクロールのキモとなる部分です。
`scrollController`の初期化と、リスナーの登録を行なっている部分です。
`_scrollController.addListener`にてスクロール状態を監視するリスナーを登録します。
_`scrollController.position.pixels`は現在のスクロールの位置を、
`_scrollController.position.maxScrollExtent `は最大スクロール位置を表します。
よって、if文は、「現在のスクロール位置が、最大スクロールの0.95の位置を超えた時（かつ読み込み中でない時）」を表します。
実行文は、データ読み込みしているかしていないかを`_isLoading`で管理し、
親Widgetから受け取ったデータ読み込み関数、`getContents`でデータ読み込みをする、
という内容になっています。
最後に、データ取得内容を反映するために`setState`を行なっています。

```
//8
  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }
```

//8
`ScrollController`を`dispose`している部分です。

```
//9
      controller: _scrollController,
```

//9
`ListView`に上で定義した`ScrollController`を設定します。

```
//10
      itemCount: widget.contents.length + 1,
//・・・
        //11
        if (widget.contents.length == index) {
          return const SizedBox(
            height: 50,
            width: 50,
            child: Center(
              child: CircularProgressIndicator(),
            ),
          );
        }
```

//10,11
itemCountの値をデータ長+1しています。
これは、リストが終端に行った際に、現在読み込んでるデータ+1番目の要素として、`CircularProgressIndicator`を表示するためです。

以上が実装コードの解説となります。
本記事で紹介した実装コードのDartPadは以下となります。
実際に触ってみて、挙動を確かめて見てください。

https://dartpad.dev/?id=f7ea0956e942edc6f1c62927f77ed5f0

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事ではリストビューが下端に行った時に自動でデータを読み取り、表示する、
無限スクロールの実装方法について解説しました。

実装方法としてScrollControllerを使った方法を解説しました。

少し複雑に思われるかと思いますが、
一つ一つ理解していけば、必ず実装できます。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://youtu.be/rj4lWOcMON0

## 編集後記（2022/3/30）

無限スクロールの実装方法についての記事でした。

無限スクロールはTwitter風のSNSなど、色々なところで使えるテクニックかと思います。

今回は特別なパッケージを使うことなく、Stateful Widgetで記述しました。
各々の環境に合わせて、状態管理手法等で応用していただければ良いと思います。

また、本記事ではコード紹介の方法を少し今までと変えてみました。
いかがだったでしょうか？

読みやすくなっていれば嬉しいです。

今後も改良を重ねていきますので、引き続きご愛読のほど、よろしくお願い致します。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします