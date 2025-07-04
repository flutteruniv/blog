---
title: "【Flutter】 Column の使い方"
slug: "flutter-column"
author: "Aoi"
description: ""
pubDatetime: "2022-06-10"
tags: ["初心者向け"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/ojisan.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      `Column` ってよく使うけれど、縦に並べるだけじゃないのかな？
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
      各プロパティの設定でどんな影響があるのか知りたいわ！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

本記事ではそんな疑問、要望にお答えします。

Flutterで度々使用する Column の使い方について解説します。
Columnに用意されているプロパティを変化させた時にどんな挙動を示すのか知ることができます。

触って確認できるDartPadも用意しているので、ぜひ読んでみてください！

## Column の基本的な使い方

`Column`の基本的な使い方です。

`children` プロパティに複数の`Widget`を設定することで、
設定したWidgetを縦に並べることができます。

```dart
Column(
                children: [
                  Container(
                    width: sizeRed,
                    height: sizeRed,
                    color: Colors.red,
                    child: const Center(child: Text('red')),
                  ),
                  Container(
                    width: sizeBlue,
                    height: sizeBlue,
                    color: Colors.blue,
                    child: const Center(child: Text('blue')),
                  ),
                  Container(
                    width: sizeGreen,
                    height: sizeGreen,
                    color: Colors.green,
                    child: const Center(child: Text('green')),
                  )
                ],
              ),
```

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-21.37.01.webp" alt="" width="300">

簡単に縦に並べて配置できるので、画面レイアウトの基本の`Widget`として用いられます。

## Column の各プロパティについて

本章では、`Column`の各プロパティについて、設定によりどんな違いがあるのか紹介します。

### DartPad

各プロパティについて、実際に変更すると、どうレイアウトが変わるのか、
触って確かめることのできるDartPadを作成しました。

https://dartpad.dev/?id=ff1435be00d292eaa5cc1712982ed830

本記事を読みながら、自分でもぜひ触って検証してみてください。

### `mainAxisSize` プロパティ

`mainAxisSize` プロパティについて解説します。

このプロパティに設定できるのは`MainAxisSize`で、これは以下の2つの値の`enum`となっています。

- `MainAxisSize.max`
- `MainAxisSize.min`

`enum` とは、列挙型と呼ばれるもので、
複数の定数をひとつにまとめた型のことです。

`MainAxisSize`の例だと、`max`と`min`、2つの定数を所持しています。

#### `MainAxisSize.max`

`MainAxisSize.max`は、`Column` の`children`で埋まった領域に対する
残りの領域を縦方向に最大化するプロパティです。

例えば、最大400の高さの`Container`のうち、`Column` の`children`が300専有していたとしたら、
残りの領域の100をフルに使ってスペースを取ろうとします。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-21.37.01.webp" alt="" width="300">

次の`min`と比較するとわかりやすいので、`min`の場合を確認しましょう。

#### `MainAxisSize.min`

`MainAxisSize.min`は、`Column` の`children`で埋まった領域に対する
残りの領域を縦方向に最小化するプロパティです。

例えば、最大400の高さの`Container`のうち、`Column` の`children`が300専有していたとしたら、
残りの領域の100を最小化するため余りのスペースはなくなります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-21.57.00.webp" alt="" width="300">

### `mainAxisAlignment `プロパティ

`mainAxisAlignment` プロパティについて解説します。

このプロパティに設定できるのは`MainAxisAlignment `で、
これは以下の6つの値の`enum`となっています。

- `MainAxisAlignment.start`
- `MainAxisAlignment.center`
- `MainAxisAlignment.end`
- `MainAxisAlignment.spaceAround`
- `MainAxisAlignment.spaceBetween`
- `MainAxisAlignment.spaceEvenly`

`MainAxis` (`Column`の場合縦方向)の`Alignment`(配置)に関するプロパティです。

#### `MainAxisAlignment.start`

`MainAxisAlignment.start` は縦並びの最前の位置から順に詰めて
`children`の`Widget`を配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-21.37.01.webp" alt="" width="300">

#### `MainAxisAlignment.center`

`MainAxisAlignment.center` は縦並びの中央に詰めて
`children`の`Widget`を配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-22.18.41.webp" alt="" width="300">

#### `MainAxisAlignment.end`

`MainAxisAlignment.end` は縦並びの最後部の位置から順に詰めて
`children`の`Widget`を配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-22.20.48.webp" alt="" width="300">

#### `MainAxisAlignment.spaceAround`

`MainAxisAlignment.spaceAround` は
`children`の`Widget`の上下に均等にスペースを配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-22.23.20.webp" alt="" width="300">

#### `MainAxisAlignment.spaceBetween`

`MainAxisAlignment.spaceBetween` は
`children`の`Widget`の１番最初と最後を端に配置し、
残りの`Widget`をスペースが同じ大きさになるように配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-22.26.20.webp" alt="" width="300">

#### `MainAxisAlignment.spaceEvenly`

`MainAxisAlignment.spaceEvenly` は
`children`の`Widget`を残りのスペースが同じ大きさになるように配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-22.28.56.webp" alt="" width="300">

### `ｃrossAxisAlignment `プロパティ

`crossAxisAlignment` プロパティについて解説します。

このプロパティに設定できるのは`CrossAxisAlignment `で、
これは以下の5つの値の`enum`となっています。

- `CrossAxisAlignment.start`
- `CrossAxisAlignment.center`
- `CrossAxisAlignment.end`
- `CrossAxisAlignment.stretch`
- `CrossAxisAlignment.baseline`

`CrossAxis` (`Column`の場合横方向)の`Alignment`(配置)に関するプロパティです。
最後の`CrossAxisAlignment.baseline`は`Column`の場合影響ないため、
残りの4つについて解説を行います。

#### `CrossAxisAlignment.start`

`CrossAxisAlignment.start` は横方向の最初の位置（デフォルトは左）に寄せて
`children`の`Widget`を配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-22.48.28.webp" alt="" width="300">

#### `CrossAxisAlignment.center`

`CrossAxisAlignment.center` は横方向の中央に寄せて
`children`の`Widget`を配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-21.37.01.webp" alt="" width="300">

#### `CrossAxisAlignment.end`

`CrossAxisAlignment.end` は横方向の最後の位置（デフォルトは右）に寄せて
`children`の`Widget`を配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-22.51.41.webp" alt="" width="300">

#### `CrossAxisAlignment.ｓｔretch`

`CrossAxisAlignment.stretch` は
`children`の`Widget`を可能な限り横方向に拡張して配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-22.54.14.webp" alt="" width="300">

### `ｖerticalDirection `プロパティ

`ｖerticalDirection` プロパティについて解説します。

このプロパティに設定できるのは`VerticalDirection  `で、
これは以下の2つの値の`enum`となっています。

- `VerticalDirection`.down
- `VerticalDirection`.up

`Widget`の配置方向を管理するプロパティとなります。

#### `VerticalDirection`.down

`VerticalDirection`.down は
`children`の`Widget`を上から下へ配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-21.37.01.webp" alt="" width="300">

#### `VerticalDirection`.up

`VerticalDirection`.up は
`children`の`Widget`を下から上へ配置する設定となります。

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-23.03.28.webp" alt="" width="300">

`MainAxisAlignment.start`の開始位置も上から下へ変更となります。

### `textDirection `プロパティ

`textDirection` プロパティについて解説します。

このプロパティに設定できるのは`TextDirection  `で、
これは以下の2つの値の`enum`となっています。

- `TextDirection`.ltr
- `TextDirection`.rtl

#### `TextDirection`.ltr

`TextDirection`.ltr は
`children`の`Widget`を横方向の開始位置を左に設定する設定となります。

`TextDirection`.ltrと`CrossAxisAlignment.start`を設定した場合の画像

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-22.48.28.webp" alt="" width="300">

#### `TextDirection`.rtl

`TextDirection`.rtl は
`children`の`Widget`を横方向の開始位置を右に設定する設定となります。

`TextDirection`.rtlと`CrossAxisAlignment.start`を設定した場合の画像

<img src="/images/wp-content/uploads/2022/06/スクリーンショット-2022-06-10-23.14.07.webp" alt="" width="300">

## まとめ

Flutterで度々使用する Column の使い方について解説しました。
Columnに用意されているプロパティを変化させた時にどんな挙動を示すのか紹介しました。

いかがだったでしょうか？

本記事でプロパティでできることは列挙しましたので、
カタログのように使って自分のアプリのレイアウトに役立ててもらえればと思います。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/6/10）

６月も気がつけば10日が経ち、関東は梅雨入りが発表されましたね。

雨は余りすきではないので、この時期は少し憂鬱となります。

早く梅雨が開けて、楽しい夏が来てほしいものです。

あなたは梅雨について、どう思いますか？

よければぜひ感想をお知らせください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
