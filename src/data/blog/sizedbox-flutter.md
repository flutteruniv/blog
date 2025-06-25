---
title: "SizedBox の使い方 【Flutter】"
description: ""
pubDatetime: 2022-11-12T08:46:52.000Z
categories: ["widget"]
---

**「 `SizedBox` の使い方が知りたい！ 」**

本記事ではそんな要望にお答えします。

Flutterで頻出するウィジェットの、SizedBox について解説します。

基本的な使い方から、用意されているコンストラクタの紹介まで行います。

ぜひ読んでみてください！

## 基本的な使い方

`SizedBox` ウィジェットは、  
`height`で設定した高さ、`width`で設定した幅を持つ無色の長方形を用意するウィジェットです。

`child` にてウィジェットを設定することで、  
箱で大きさを制限しつつ、設定したウィジェットを箱の中に表示することができます。

```dart
SizedBox(
  height: 50,
  width: 100,
  child: Text('a'),
),
```

`height`, `width`, `child` に対する設定は省略することができます。  
`height`, `width`のみを設定して、ウィジェット間の距離を空けるのに利用することが可能です。

## コンストラクタの紹介

`SizedBox`にはいくつかのコンストラクタが用意されています。  
これらについて紹介します。

### SizedBox.expand

`SizedBox.expand`は親のウィジェットが許す限り最大の大きさの箱を用意する`SizedBox`です。  
`height`, `width`にはそれぞれ`double.infinity`が設定されます。

```dart
  const SizedBox.expand({ super.key, super.child })
    : width = double.infinity,
      height = double.infinity;
```

### SizedBox.shrink

`SizedBox.shrink` は高さも幅も`0.0`の箱を用意する`SizedBox`です。  
`height`, `width`にはそれぞれ`0.0`が設定されます。

```dart
  const SizedBox.shrink({ super.key, super.child })
    : width = 0.0,
      height = 0.0;
```

### SizedBox.fromSize

`SizedBox.fromSize`は`size`プロパティにて設定した`Size`インスタンスを基にして用意した  
高さと幅をもつ`SizedBox`です。  
`height`, `width`にはそれぞれ`size`の`height`, `width`が設定されます。

```dart
  SizedBox.fromSize({ super.key, super.child, Size? size })
    : width = size?.width,
      height = size?.height;
```

### SizedBox.square

`SizedBox.square` は`dimension`プロパティにて設定した`double`の値を  
高さと幅に持つ正方形を用意する`SizedBox`です。  
`height`, `width`にはそれぞれ`dimension`の値が設定されます。

```dart
  const SizedBox.square({super.key, super.child, double? dimension})
    : width = dimension,
      height = dimension;
```

## まとめ

本記事ではFlutterで頻出するウィジェットの`SizedBox`について解説しました。

基本的な使い方から、用意されているコンストラクタの紹介まで行いました。

いかがだったでしょうか？

`SizedBox`は本当によく利用する基本的なウィジェットとなります。

ぜひ利用方法を覚えて活用してみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/11/12）

`SizedBox`についての記事でした。

このような`Box`系のウィジェットは`Container`を始めとして`ColoredBox`等、  
本当に様々なものがあります。

これらについて紹介した上で違いについてまとめられたら良いな、  
と今回の記事を作成していて思いました。

基礎的な記事のためあまり興味を惹かないかもしれませんが、  
ぜひお楽しみにしていてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。