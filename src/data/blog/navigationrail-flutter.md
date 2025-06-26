---
title: "【 NavigationRail 】 サイドメニュー を実装しよう！【 Flutter 】"
author: "Aoi"
description: ""
pubDatetime: 2022-07-08T11:01:55.000Z
categories: ["widget", "uncategorized"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

サイドメニュー を作ってみたいんだけど、どんなWidgetを使ったら良いんだろう？

本記事ではそんな疑問にお答えします。

画面横側で画面遷移をコントロールする サイドメニュー を実装するWidget、  
`NavigationRail` Widgetを紹介します。

本記事を読めば以下のようなUIが作れます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/20220708_navigation_rail_sample.gif)

基本的な使い方から様々なプロパティの使い方まで紹介します。  
ぜひ読んでみて下さい！

## 基本的な使い方

![](https://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

基本的な使い方は公式のYouTubeチャンネルでも紹介されています。  
こちらもぜひ観てみてください。

https://youtu.be/y9xchtVTtqQ

基本的な使い方について解説していきます。

### 準備

#### StatefulWidget の用意

今回は簡略化のために`StatefulWidget` でインデックスを切り替える方法にて解説します。

`StatefulWidget`を継承した`Widget`を用意し、状態として`int`型のパラメータをもたせます。

```dart
class MyWidget extends StatefulWidget {
  const MyWidget({super.key});

  @override
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  int _selectedIndex = 0;

// ・・・

}
```

#### 表示する画面の用意

表示する画面を用意します。  
今回はインデックスを受け取り、その値によって表示を変える`StatelessWidget`を用意します。

サンプルコードはこちら

```dart
class MainContents extends StatelessWidget {
  const MainContents({super.key, required this.index});

  final int index;

  @override
  Widget build(BuildContext context) {
    switch (index) {
      case 1:
        return Expanded(
          child: ColoredBox(
            color: Colors.blue[200]!,
            child: const Center(
              child: Text('Bookmark'),
            ),
          ),
        );
      case 2:
        return Expanded(
          child: ColoredBox(
            color: Colors.green[200]!,
            child: const Center(
              child: Text('Friends'),
            ),
          ),
        );
      default:
        return Expanded(
          child: ColoredBox(
            color: Colors.red[200]!,
            child: const Center(
              child: Text('Home'),
            ),
          ),
        );
    }
  }
}
```

### NavigationRailの実装

#### Rowで並べる

`NavigationRail Widget`と表示する画面の`Widget`を`Row`で並べます。

```
class _MyWidgetState extends State<MyWidget> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          NavigationRail(
          // ・・・
          ),
          MainContents(index: _selectedIndex)
        ],
      ),
    );
  }
}
```

#### 表示するアイコンを設定する

`NavigationRailDestination`を使用し、  
`destinations`プロパティに画面表示するアイコンを設定します。

```dart
          NavigationRail(
            destinations: const [
              NavigationRailDestination(
                icon: Icon(Icons.home),
                label: Text('Home'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.bookmark),
                label: Text('Bookmark'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.people),
                label: Text('Friends'),
              ),
            ],
            // ・・・
          ),
```

#### インデックス周りの設定

表示するインデックスの設定と、  
アイコンが選択されたときに切り替わる処理を設定します。

表示するインデックスについては`selectedIndex`プロパティにて、  
切り替わる処理については`onDestinationSelected`にて設定します。

```dart
          NavigationRail(
            destinations: const [
            // ・・・
            ],
            selectedIndex: _selectedIndex,
            onDestinationSelected: (index) {
              setState(() {
                _selectedIndex = index;
              });
            },
          ),
```

以上で完成です！

完成したコードは以下にてご覧ください。

完成したコードはこちら

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
      home: MyWidget(),
    );
  }
}

class MyWidget extends StatefulWidget {
  const MyWidget({super.key});

  @override
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          NavigationRail(
            destinations: const [
              NavigationRailDestination(
                icon: Icon(Icons.home),
                label: Text('Home'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.bookmark),
                label: Text('Bookmark'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.people),
                label: Text('Friends'),
              ),
            ],
            selectedIndex: _selectedIndex,
            onDestinationSelected: (index) {
              setState(() {
                _selectedIndex = index;
              });
            },
          ),
          MainContents(index: _selectedIndex)
        ],
      ),
    );
  }
}

class MainContents extends StatelessWidget {
  const MainContents({super.key, required this.index});

  final int index;

  @override
  Widget build(BuildContext context) {
    switch (index) {
      case 1:
        return Expanded(
          child: ColoredBox(
            color: Colors.blue[200]!,
            child: const Center(
              child: Text('Bookmark'),
            ),
          ),
        );
      case 2:
        return Expanded(
          child: ColoredBox(
            color: Colors.green[200]!,
            child: const Center(
              child: Text('Friends'),
            ),
          ),
        );
      default:
        return Expanded(
          child: ColoredBox(
            color: Colors.red[200]!,
            child: const Center(
              child: Text('Home'),
            ),
          ),
        );
    }
  }
}
```

## プロパティの使い方

![](https://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング女性.jpeg)

`NavigationRail`で設定できる項目(プロパティ)について、  
いくつか紹介します。

### NavigationRail全体に関する設定

#### 背景色

`backgroundColor` プロパティにて`NavigationRail`の背景色を変更することが可能です。

```dart
          NavigationRail(
            // ・・・
            backgroundColor: Colors.yellow[200],
          ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-08-18.03.12-824x1024.png)

#### エレベーション

背景に対する`NavigationRail`の高さを設定することで、  
`NavigationRail`の影の濃さを調整することができます。

```dart
          NavigationRail(
            // ・・・
            elevation: 5,
          ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-08-18.37.36-824x1024.png)

`Row`で`Widget`を並べている場合は`Elevation`での影が反映されません。  
`Row`でなく`Stack`で重ねる、  
もしくは`MainContents Widget`で色を指定するのでなく、  
インデックスによりテーマカラーが変わるようにする、  
等の対応が必要です。

#### 最小幅

`minWidth`プロパティにて `NavigationRail`の最小の幅を設定することが可能です。

```dart
          NavigationRail(
            // ・・・
            minWidth: 150,
          ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-08-18.57.13-870x1024.png)

#### 表示位置

`groupAlignment`プロパティに`-1 ~ 1`の値を設定することで、  
アイコンの表示位置を変更することが可能です。  
(デフォルトは`-1`で、`0`で中央に配置されます。)

```dart
          NavigationRail(
            // ・・・
            groupAlignment: 0,
          ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-08-19.00.02-864x1024.png)

#### アイコン上下へのWidget の追加

`leading` プロパティに`Widget`を設定することでアイコン上部に表示する`Widget`を、  
`trailing` プロパティに`Widget`を設定することでアイコン下部に表示する`Widget`を  
それぞれ設定することが可能です。

```
          NavigationRail(
            // ・・・
            leading: const Text('上'),
            trailing: const Text('下'),
          ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-08-19.05.05-872x1024.png)

#### インディケーターの表示、色の設定

`useIndicator`プロパティを`true`に設定することで、  
選択しているアイコンをより目立たせるインディケーターを表示することができます。

`indicatorColor`プロパティでインディケーターの色を設定することが可能です。

```
          NavigationRail(
            // ・・・
            useIndicator: true,
            indicatorColor: Colors.grey[300],
          ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-08-19.11.07-876x1024.png)

### アイコンとラベル関連

#### アイコン横へのラベルの表示

`extended`プロパティを`true`に設定することで、アイコン横にラベルを併記することが可能です。  
この時の最小幅を`minExtendedWidth`にて設定可能です。

```
          NavigationRail(
            // ・・・
            extended: true,
            minExtendedWidth: 200,
          ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-08-19.13.58-864x1024.png)

#### アイコン下へのラベルの表示

`labelType`プロパティに、  
`NavigationRailLabelType.all`を設定すると常時、  
`NavigationRailLabelType.`selectedを設定するとアイコン選択時に  
ラベルをアイコン下部に表示することができます。

```
          NavigationRail(
            // ・・・
            labelType: NavigationRailLabelType.selected,
          ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-08-19.26.20-867x1024.png)

#### アイコンとラベルのテーマ

`selectedIconTheme` にて、選択時のアイコンのテーマを、  
`selectedLabelTextStyle` にて、選択時のラベルのテーマを設定することが可能です。  
また、`unselectedIconTheme` にて、非選択時のアイコンのテーマを、  
`unselectedLabelTextStyle` にて、非選択時のラベルのテーマを設定することが可能です。  

```dart
          NavigationRail(
            // ・・・
            labelType: NavigationRailLabelType.all,
            selectedIconTheme: const IconThemeData(color: Colors.green),
            selectedLabelTextStyle: const TextStyle(color: Colors.purple),
            unselectedIconTheme: IconThemeData(color: Colors.green[100]),
            unselectedLabelTextStyle: TextStyle(color: Colors.purple[100]),
          ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-08-19.32.32-866x1024.png)

## まとめ

![](https://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事では画面横側で画面遷移をコントロールする サイドメニュー を実装する`Widget`、  
`NavigationRail Widget`を紹介しました。

基本的な使い方から様々なプロパティの使い方まで紹介しました。

いかがだったでしょうか？

サイドメニューはTwitter(WEB)のUI等でも使われています。  
使用してみるとワンランク上のデザインができるかもしれません。

ぜひ本記事を参考に使ってみて下さい！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/7/8）

`NavigationRail Widget`についての記事でした。

この記事を書いていて改めて思ったのですが、  
コードの変更がUIに即時反映されるのがめっちゃ楽しいですね。

「この色にしたらどうか？」や  
「この配置にしたらどうか？」がすぐ検証できるのが、  
パズルや積み木を遊んでいるようで、ものすごい楽しいです。

やっぱり目に見えるところに自分が作ったものができあがるのは、  
これ以上無く楽しいですね。

遊ぶように勉強ができる環境というのは、大事にしていきたいです。

あなたもぜひ`Widget`のプロパティを色々と弄ってみて、  
変更が即時反映される楽しさを味わってみて下さい。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。