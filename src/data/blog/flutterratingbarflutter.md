---
title: "【flutter_rating_bar】評価バーを実装しよう！【flutter】"
author: "Aoi"
description: ""
pubDatetime: 2022-08-19T10:00:00.000Z
categories: ["package"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

flutter\_rating\_bar ? どんなパッケージなんだろう？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

5つ星とかの評価バーを簡単に実装したいわ！

本記事ではそんな疑問、要望にお答えします！

Flutter で 5つ星評価などを行う評価バーを実装するのに役立つパッケージ、  
[flutter\_rating\_bar](https://pub.dev/packages/flutter_rating_bar) パッケージの紹介を行います。

基本的な使い方から、カスタマイズ方法まで 詳細に解説します。

以下のようなUIを簡単に作成することが可能です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-19-18.25.56-1.png)

ぜひ読んでみてください！

## 基本的な使い方

### 準備

まず準備として、パッケージのインストールと、  
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて  
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add flutter_rating_bar
```

#### パッケージのインポート

実装したいDartファイルの上部に以下のインポート文を追加し、  
パッケージをインポートします。

```dart
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
```

### 実装

実装方法について解説します。

評価バーを実装したい場所に、`RatingBar.builder`を配置します。  
`itemBuilder`にて評価アイコンとして設定したいWidgetを、  
`onRatingUpdate`にて評価が更新された際の処理を書きます。

```dart
        RatingBar.builder(
          itemBuilder: (context, index) => const Icon(Icons.star),
          onRatingUpdate: (rating) {
            //評価が更新されたときの処理を書く
          },
        ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-19-17.23.53.png)

以上が基本的な使い方となります！

## カスタマイズ方法

色や配置等の評価バーのカスタマイズ方法を解説します！

### 配置のカスタマイズ

#### アイコンの数

`itemCount`プロパティにてアイコンの数を設定することが可能です。

```dart
        RatingBar.builder(
          itemBuilder: (context, index) => const Icon(Icons.star),
          onRatingUpdate: (rating) {
            //評価が更新されたときの処理を書く
          },
          itemCount: 7,
        ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-19-18.17.18.png)

#### 方向

`direction`プロパティにて評価バーを縦方向、横方向に設定可能です。

```dart
        RatingBar.builder(
          itemBuilder: (context, index) => const Icon(Icons.star),
          onRatingUpdate: (rating) {
            //評価が更新されたときの処理を書く
          },
          direction: Axis.vertical,
        ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-19-18.19.23.png)

#### アイコンサイズとPadding

`itemSize`プロパティにて、アイコンの大きさを設定可能です。

また、`itemPadding`プロパティでアイコン間の隙間の大きさを設定することができます。

### 色のカスタマイズ

#### 評価した数を表すアイコンの色

評価したアイコンの色は`itemBuilder`で設定したWidgetに依存します。  
以下はアイコンの色を黄色に設定した例です。

```dart
        RatingBar.builder(
          itemBuilder: (context, index) => const Icon(
            Icons.star,
            color: Colors.yellow,
          ),
          onRatingUpdate: (rating) {
            //評価が更新されたときの処理を書く
          },
        ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-19-18.25.56.png)

#### 評価外の数を表すアイコンの色

`unratedColor`プロパティにて評価外（評価されていない）アイコンの色を設定することが可能です。

```dart
        RatingBar.builder(
          itemBuilder: (context, index) => const Icon(Icons.star),
          onRatingUpdate: (rating) {
            //評価が更新されたときの処理を書く
          },
          unratedColor: Colors.blue[100],
        ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-19-18.32.41.png)

### 動作のカスタマイズ

#### 0.5の評価の有効化

`allowHalfRating` プロパティを`true`に設定することで、0.5の評価の有効化ができます。

```dart
        RatingBar.builder(
          itemBuilder: (context, index) => const Icon(Icons.star),
          onRatingUpdate: (rating) {
            //評価が更新されたときの処理を書く
          },
          allowHalfRating: true,
        ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-19-18.43.55.png)

#### 初期値の設定

`initialRating` プロパティに数値を設定することで、  
初期状態での評価値を設定することが可能です。

```dart
        RatingBar.builder(
          itemBuilder: (context, index) => const Icon(Icons.star),
          onRatingUpdate: (rating) {
            //評価が更新されたときの処理を書く
          },
          initialRating: 3,
        ),
```

#### 長押し時の動作

`glow`プロパティにて長押し時のエフェクトを発生させるか設定可能です。

`glow:true`時の画像

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-19-18.36.04.png)

また、`glowColor`プロパティにてエフェクトの色を設定可能です。  
`glowRadius`プロパティにてエフェクトの大きさを設定可能です。

#### ジェスチャーの有効化

`tapOnlyMode`プロパティを`true`にすることで、ドラッグでの選択を不可にし、タップでのみ  
選択できるようにすることができます。

また、`ignoreGestures`を`true`にすることにより、一切の動作を受け付けなくすることが可能です。

## まとめ

本記事ではFlutter で 5つ星評価などを行う評価バーを実装するのに役立つパッケージ、  
[flutter\_rating\_bar](https://pub.dev/packages/flutter_rating_bar) パッケージの紹介を行いました。

基本的な使い方から、カスタマイズ方法まで 詳細に解説しました。

いかがだったでしょうか？

自分で実装しようとすると大変なWidgetになるので、  
このようなパッケージはありがたいですね。

パッケージの紹介ページやExampleではより詳細なカスタマイズ方法が紹介されています。  
ぜひこちらも併せてご確認ください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 参考

https://youtu.be/VdkRy3yZiPo

## 編集後記（2022/4/21）

MacBook Air M2 を使い始めて一週間ちょっとが経ちました。

メイン機としての運用はしていないので、  
動作的な所の使用感はまだまだわからないのですが、  
触ってみて気になる所が一点でてきました。

新色のスペースグレーの表面に指紋というか、触ったあとがつくことです。

せっかくの綺麗な配色が、触ったあとが付くことで、かなり残念な見た目になってしまいます。

ということで、クリアのハードカバーを購入し、本日装着しました。

見た目は反射が気になる所ではありますが、触ったあとがついて見た目が悪くなることを防ぐことができ、  
さらに、傷もつきにくくなる、という一石二鳥だと思っています。

これで安心して外に持ち歩くことができそうです。

またMacBook Air M2 関連で情報があれば紹介していきます。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。