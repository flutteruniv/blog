---
title: "【Flutter】 余白 の付け方【padding,margin】"
slug: "flutter-padding-margin"
description: ""
pubDatetime: "2022-06-08"
author: "Aoi"
tags: ["UI/レイアウト"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)
`Widget`に 余白 をつけるには、一体どうしたら良いんだろう？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)
`padding `とか `margin` とか、違いがわからないわ！

本記事ではそんな疑問にお答えします。

Flutterでの`Widget`の間の余白の付け方を解説します。
`Container`の`margin,padding, Padding Widget`での余白の付け方の違いから、
`EdgeInsets`の種類まで詳細に解説します。

ぜひ読んでみてください！

## 余白の付け方

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-08-17.26.03.png)

上の画像をご覧ください。

ピンクの大きな枠の中に水色の枠があり、その中に「text」という文字が表示されています。

ピンクの枠と水色の枠の間、水色の枠とTextの文字の間に余白が無い状態です。
これらに余白を付ける方法を3パターン紹介します。

### `Container`の`margin`

１つ目の方法は、`Containe`rの`margin`(マージン)で余白を付ける方法です。
この方法では、以下の画像のように`margin`を設定した`Container`の周りに余白が付きます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-08-17.32.27.png)

コードは以下のようになります。

```dart
Container(
                  height: 300,
                  width: 300,
                  color: Colors.red[200],
                  child: Stack(
                    children: [
                      Container(
                          margin: EdgeInsets.all(５０),
                          color: Colors.blue[200],
                          child: const Text(
                            'text',
                            style: TextStyle(fontSize: 30),
                          ),
                      ),
                    ],
                  ),
                ),
```

EdgeInsets.all(50)は長方形の各辺4方向に50の余白を与える、という意味となります。
詳細は後述します。

### `Container`の`padding`

2つ目の方法は、`Container`の`padding`(パディング)で余白を設定する方法です。
この方法では、
以下の画像のようにpaddingを設定した`Container`の内部に余白が設定されます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-08-17.40.40.png)

コードはこちらです。

```
Container(
                  height: 300,
                  width: 300,
                  color: Colors.red[200],
                  child: Stack(
                    children: [
                      Container(
                          padding: EdgeInsets.all(５０),
                          color: Colors.blue[200],
                          child: const Text(
                            'text',
                            style: TextStyle(fontSize: 30),
                          ),
                      ),
                    ],
                  ),
                ),
```

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doctor.png)
`margin`は外側に、`padding`は内側に余白がつく、と覚えておきましょう！

### `Padding Widget` の`padding`

3つ目の方法は、余白を付けたい`Widget`を`Padding Widget`で囲い、
`padding `プロパティで余白を設定する方法です。

この方法では、以下の画像のように`Padding Widget`で囲んだ`Container`の周りに余白が付きます。

![](http://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-08-17.32.27.png)

コードはこちらです。

```
Container(
                  height: 300,
                  width: 300,
                  color: Colors.red[200],
                  child: Stack(
                    children: [
                      Padding(
                        padding: EdgeInsets.all(50),
                        child: Container(
                          color: Colors.blue[200],
                          child: const Text(
                            'text',
                            style: TextStyle(fontSize: 30),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
```

「`padding`なのに外側に余白がつくの？」と不思議に思うかもしれません。

確かに`Container`からしたら`margin`（外側の余白）がつくように見えますが、
外側の`Padding Widget`からするとちゃんと`padding`（内側の余白）がついています。

`Container`の周りに`Padding Widget`の薄い膜が張られ、
この`Padding Widget`の`padding`(内側)で余白が設定されるイメージです。

ちょっと複雑ですが、上記イメージで覚えておきましょう！

上の3つの方法を実際に数値を変更して検証できるDartPadを作成しました。

こちらでぜひ3つの方法をマスターしてみてください！

https://dartpad.dartlang.org/?id=a832253046c11eaefaf62248ae2e516b

## `EdgeInsets`について

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/プログラミング画像.jpeg)

上では`Container`の長方形4辺全てに同じ値の余白を付ける方法を紹介しました。

では、左側だけ余白を付けたい、といった際はどうすればよいでしょうか？

この章ではEdgeInsetsのコンストラクタをそれぞれ紹介し、
4辺それぞれに異なる値を設定する方法等を解説します。

解説するコンストラクタは、以下となります。

- `EdgeInsets.all(double value)`
- `EdgeInsets.fromLTRB(double left, double top, double right, double bottom)`
- `EdgeInsets.only({double left = 0.0, double top = 0.0, double right = 0.0, double bottom = 0.0})`
- `EdgeInsets.symmetric({double vertical = 0.0, double horizontal = 0.0})`

`EdgeInsets.fromWindowPadding `は使用場所が限定的のため、割愛します。

### `EdgeInsets.all`

1つ目のコンストラクタは`EdgeInsets.all(double value)`です。

`all`の名の通り、4辺すべてに同じ値(`value`)の余白を与えます。

### `EdgeInsets.fromLTRB`

2つ目のコンストラクタは、
`EdgeInsets.fromLTRB(double left, double top, double right, double bottom)`
です。

名前無し引数で左、上、右、下の順に値を設定することで、
それぞれの方向の余白を設定することができます。

例：`EdgeInsets.fromLTRB(0,8,16,24)`の場合、左に0,上に8,右に16,下に24の余白が設定されます。

### `EdgeInsets.only`

3つ目のコンストラクタは、
`EdgeInsets.only({double left = 0.0, double top = 0.0, double right = 0.0, double bottom = 0.0})`
です。

上の`EdgeInsets.fromLTRB` とは異なり、
名前付き引数で指定したい方向にだけ余白を指定することが可能です。

例:`EdgeInsets.only(left:8,top:16)` の場合、左に8, 上に16の余白が設定されます。
（右と下は余白なし）

### `EdgeInsets.symmetric`

4つ目のコンストラクタは
`EdgeInsets.symmetric({double vertical = 0.0, double horizontal = 0.0})`
です。

`vertical`のプロパティで上と下に同じ値の余白を、
`horizontal`のプロパティで左と右に同じ値の余白をセットで設定することができます。

例:`EdgeInsets.symmetric(horizontal:8)` の場合、左と右に8の余白が設定されます。
（上と下は余白なし）

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事では、Flutterでの`Widget`の間の余白の付け方を解説しました。
`Container`の`margin,padding, Padding Widget`での余白の付け方の違いから、
`EdgeInset`の種類まで詳細に解説しました。

いかがだったでしょうか？

`padding` と `margin` の違いはWEB系からFlutterに入った人にとって既知かと思いますが、
`Padding Widget`については意外だったかもしれません。

ぜひ本記事で余白の付け方をマスターしてみてください！

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/6/8）

余白の付け方についての記事でした。

割愛しましたが、`EdgeInsets.fromWindowPadding `について調べてみると、
Flutter内部のコード構造について知ることができ、
とても興味深かったです。

詳細をここで書くとかなり長くなってしまいますので、
詳しくはFlutter大学のSlackのtimes_aoi_umigishi チャンネルにて記載します。

興味ある方はぜひ見に来てみてください。

Flutter大学への入会

はこちらから

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。