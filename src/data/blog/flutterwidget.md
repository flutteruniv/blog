---
title: "【Flutter】Widgetを 自作 しよう！"
author: "Aoi"
description: ""
pubDatetime: 2022-08-10T10:00:00.000Z
categories: ["beginer"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

Widget を 自作 してみたいけれど、どうやったら良いんだろう？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

コードが長くなって読みにくくなってしまったわ。  
どうしたら良いのかしら？

本記事ではそんな疑問にお答えします。

FlutterでWidgetを自作する方法を紹介します。  
基本的な方法とVS codeのコマンドを使った方法2種類を紹介します。

現役のFlutterエンジニアが当たり前に行っているテクニックとなります。

初心者必見の内容となりますので、ぜひ読んでみてください！

## Widget を自作することのメリット

Widget を自作することのメリットについて解説していきます。  
アプリ作成の中でどんな課題があって、  
Widgetを自作することでどのように解決できるのか述べていきます。

### 課題

以下のようなUIを実装したコードがあります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/Simulator-Screen-Shot-iPhone-13-Pro-Max-2022-08-10-at-13.18.31-473x1024.png)

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

class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                height: 100,
                color: Colors.blue,
                child: const Center(
                  child: Text('タイトル'),
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
                child: Container(
                  height: 400,
                  color: Colors.red[100],
                  child: const Center(
                    child: Text('メイン画像'),
                  ),
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
                child: Row(
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(right: 16),
                      child: Container(
                        height: 100,
                        width: 100,
                        color: Colors.green[100],
                        child: const Center(
                          child: Text('サブ画像 1'),
                        ),
                      ),
                    ),
                    Expanded(
                      child: Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.only(bottom: 16),
                            child: Container(
                              height: 50,
                              color: Colors.yellow[100],
                              child: const Center(
                                child: Text('サブタイトル 1'),
                              ),
                            ),
                          ),
                          Container(
                            height: 50,
                            width: double.infinity,
                            color: Colors.orange[100],
                            child: const Text(
                              '今日はいい天気ですね.良い一日になりそうです.',
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
                child: Row(
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(right: 16),
                      child: Container(
                        height: 100,
                        width: 100,
                        color: Colors.green[100],
                        child: const Center(
                          child: Text('サブ画像 2'),
                        ),
                      ),
                    ),
                    Expanded(
                      child: Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.only(bottom: 16),
                            child: Container(
                              height: 50,
                              color: Colors.yellow[100],
                              child: const Center(
                                child: Text('サブタイトル 2'),
                              ),
                            ),
                          ),
                          Container(
                            height: 50,
                            width: double.infinity,
                            color: Colors.orange[100],
                            child: const Text(
                              '明日もいい天気みたいです.今から楽しみですね.',
                            ),
                          ),
                        ],
                      ),
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

このコード自体動作には問題はないのですが、  
以下のような課題を抱えています。

*   長いコードとなっている
*   Widget の階層が深くなっている

長いコードも階層が深いコードも、コードの可読性を下げる要因となり、  
あまり好ましくありません。

特に、以下の画像の部分はほとんど同じコードを2回書いています。  
例えば色を変更するなど、片方を修正したらもう片方も修正しなければいけなくなるので、  
ちょっと面倒です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-10-13.36.16.png)

以上が課題となります。

### Widgetを自作することでの解決方法

コードの繰り返しの解消をしつつ、  
一つのファイルのコードを短く、階層を浅くしたい、  
というのが、今回の目指すべき姿です。

これを実現するのがWidget を自作することによるコードの別ファイルへの切り出しです。

具体的には以下のように構成要素を自作Widget で分け別ファイルに保存します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-10-13.45.01.png)

各コードは以下のようになります。

```dart
import 'package:flutter/material.dart';
import 'package:original_widget_sample/contents_widget.dart';
import 'package:original_widget_sample/main_image_widget.dart';
import 'package:original_widget_sample/title_widget.dart';

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
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: const [
              TitleWidget(),
              MainImageWidget(),
              ContentsWidget(
                subImage: 'サブ画像 1',
                subTitle: 'サブタイトル 1',
                text: '今日はいい天気ですね.良い一日になりそうです.',
              ),
              ContentsWidget(
                subImage: 'サブ画像 2',
                subTitle: 'サブタイトル 2',
                text: '明日もいい天気みたいです.今から楽しみですね.',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

TitleWidget

```dart
import 'package:flutter/material.dart';

class TitleWidget extends StatelessWidget {
  const TitleWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      color: Colors.blue,
      child: const Center(
        child: Text('タイトル'),
      ),
    );
  }
}
```

MainImageWidget

```dart
import 'package:flutter/material.dart';

class MainImageWidget extends StatelessWidget {
  const MainImageWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
      child: Container(
        height: 400,
        color: Colors.red[100],
        child: const Center(
          child: Text('メイン画像'),
        ),
      ),
    );
  }
}
```

ContentsWidget

```dart
import 'package:flutter/material.dart';

class ContentsWidget extends StatelessWidget {
  const ContentsWidget({
    super.key,
    required this.subImage,
    required this.subTitle,
    required this.text,
  });

  final String subImage;
  final String subTitle;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
      child: Row(
        children: [
          Padding(
            padding: const EdgeInsets.only(right: 16),
            child: Container(
              height: 100,
              width: 100,
              color: Colors.green[100],
              child: Center(
                child: Text(subImage),
              ),
            ),
          ),
          Expanded(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.only(bottom: 16),
                  child: Container(
                    height: 50,
                    color: Colors.yellow[100],
                    child: Center(
                      child: Text(subTitle),
                    ),
                  ),
                ),
                Container(
                  height: 50,
                  width: double.infinity,
                  color: Colors.orange[100],
                  child: Text(
                    text,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
```

見てみていかがでしょうか？

main.dartのコードがかなり短くなり、読みやすくなりました。  
また、各構成要素のコードの階層も浅くなりました。

2重でコードを書いていた部分は、ContentsWidgetとして一つにまとめられて、  
全体的なコードの分量も少なくなりました。  
  
また、各構成要素を名前をつけて別ファイルに分けたことにより、  
UIを調整する際にどのファイルのコードを変更すればよいのかわかりやすくなりました。

以上がWidget 自作によるコード切り出しの効果です。

コード全体を把握するのにいくつもファイルを渡らなければならない、  
というデメリットはあるものの、  
ひとつひとつのファイルが読みやすくなるのは大きなメリットかと思います。

次からは実際にどうやってWidgetを自作するのかについて解説していきます。

## Widgetの自作方法

Widgetの自作方法について解説していきます。

基本的な方法とVS codeのコマンドを使った方法2種類を紹介します。

### 基本的な方法

まず基本的な方法を解説していきます。

#### ファイルの作成

libフォルダ内の任意の場所に、”自作Widgetの名前.dart”というファイルを作成します。

例えば自作Widgetの名前を"`TitleWidget`"とするのであれば、  
"title\_widget.dart"とファイル名をつけます。

Widgetの名前はクラス名なので、パスカルケースという命名規則で、  
ファイル名はスネークケースという命名規則で名前を付けるのが、  
Dartでは通例となっています。

#### 自作Widgetの準備

作成したファイル内に自作Widget を準備します。

VS Codeの場合は、"stl"と打ち込んで、サジェストで出てくるFlutter Stateless Widgetを選択します。  
Widgetの名前をマルチカーソルで編集できるようになるので、  
自作Widgetの名前を入力します。  
入力後escを押し、完了します。

(以下のGIFをごらんください)

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/20220810_stateless.gif)

自動入力したimport文を削除し、import文として以下のコードを配置して、  
準備は完了となります。

```dart
import 'package:flutter/material.dart';
```

VS Codeの場合、  
import文削除後、エラーの出ている`StatelessWidget`上でcmd + . を押すことで、  
クイックフィックスからimport文を自動入力することが可能です。

"stf"と打ち込んでサジェストで`StatefulWidget`を選択することで  
`StatefulWidget`を継承した自作Widgetを作成することも可能です。

Android Studioでも同様にして自作Widgetを準備することが可能です。

#### 自作Widgetの完成

自作Widget の`build` メソッド中に `return` を打ち込み、  
その後に続けて切り出したい部分のWidgetをコピーペーストで配置します。

以下は例となります。  

```dart
class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              // ここからコピー
              Container(
                height: 100,
                color: Colors.blue,
                child: const Center(
                  child: Text('タイトル'),
                ),
              ),
              // ここまで
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
                child: Container(
                  height: 400,
       // ...
```

```dart
class SampleWidget extends StatelessWidget {
  const SampleWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      color: Colors.blue,
      child: const Center(
        child: Text('タイトル'),
      ),
    );
  }
}
```

配置した最後の閉じカッコの後にセミコロン(;)を配置するのを忘れないようにして下さい。

必要に応じてファイルに必要なパッケージ等をimportして下さい。

パッケージのimportの際にはcmd + . でのクイックフィックスを用いるのが便利です。

#### 元のコードへの自作Widgetの配置

コピーペーストした元のコードを自作Widget で置き換えます。

先の例で解説すると以下になります。

```dart
class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              // ここからコピー
              Container(
                height: 100,
                color: Colors.blue,
                child: const Center(
                  child: Text('タイトル'),
                ),
              ),
              // ここまで
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
                child: Container(
                  height: 400,
       // ...
```

```dart
class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              SampleWidget() //この部分
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
                child: Container(
                  height: 400,
       // ...
```

配置した自作Widgetでエラーがでるため、  
自作Widgetを選択の上クイックフィックスを開き、  
自作Widgetを定義しているファイルのimportを行います。

以上が自作Widgetを扱う基本的な方法となります！

### Extract Widget を使う方法

ここからはエディターとしてVS Code を使用している前提で記載します。

#### Extract Widget の実行

切り出したいWidget上でcmd + . を押し、クイックフィックスを開きます。

Extract Widgetを実行し、自作Widgetの名前を入力すると、

ファイル下方に切り出された自作Widgetが作成され、  
元のコードは自作Widget で置き換わります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/20220810_extract_widget.gif)

Android Studio でもExtract Widgetを使用することが可能です。

Android Studio でExtract Widgetを使う方法については  
こちらの参考記事で解説がされています。

https://hiyoko-programming.com/1838/

#### ファイルの作成、自作Widgetの配置

基本的な方法と同様に、libフォルダ内の任意の場所に、  
”自作Widgetの名前.dart”というファイルを作成します。

このファイルに、先程元のファイル下方に配置された自作Widgetを移動します。

import周りでエラーが出るため、クイックフィックスにてimport文の追加を行います。

#### 元ファイルへのimport文の追加

元ファイルで自作Widgetにてエラーが出るため、  
クイックフィックスにて自作Widgetのファイルのimportを行います。

以上がExtract Widgetを用いた方法となります。  
基本的な方法と比べてかなり楽に自作Widgetが作成できますね！

## まとめ

本記事ではFlutterでWidgetを自作する方法を紹介しました。  
基本的な方法とVS codeのコマンドを使った方法2種類を紹介しました。

いかがだったでしょうか？

Widgetを自作できるようになると、一気にやれることが増えるので、  
是非挑戦してみて下さい。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 参考

https://lesalto.jp/bloglist/blogdetail/89

## 編集後記（2022/8/10）

自作Widgetを作る方法についての記事でした。

今回あまり触れていないですが、  
「自作Widgetをフォルダのどこに配置するか」は、  
開発者共通の悩みかと思います。

自分が今行っている個人開発ではAtomic Designに則って、  
atoms, molecules,...のフォルダを作って分けています。

ちょっとファイルの分け方が細かくなりすぎる気もしますが、  
どの要素かさえ決めればファイルの配置に悩まなくて済むので、  
結構好みです。

あなたはどのようなフォルダ構成でUI層を作成していますか？

よければTwitter等でご意見をお寄せ下さい。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。