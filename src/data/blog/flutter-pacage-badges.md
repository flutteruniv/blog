---
title: "【Flutter】 badges 使い倒してみた！"
slug: "flutter-pacage-badges"
author: "Aoi"
description: ""
pubDatetime: "2022-03-11"
tags: ["Package"]
layout: "../../layouts/BlogPost.astro"
---

本記事では badges というパッケージの紹介を行います。

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/ojisan.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      未読の件数をアイコンの右上に丸と数字で表示させたいけど、どうすれば良いんだろう？
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
      Stackでやってもいいけれど、面倒だわ！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

上記のような疑問や悩みに答えてくれるパッケージこそが badgesです。
以下のようなUIが簡単に作成可能です。

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-11-10.17.27.webp" alt="" width="300">

基本的な使い方から、詳細設定まで解説します。
本記事さえ読めばbadgesを使いこなせること、間違いなしです！

ぜひ読んでみてください！

## 基本的な使い方

![](/images/wp-content/uploads/2022/02/コーディング男性.webp)

badgesパッケージの基本的な使い方を紹介します。

以下の画像のようなUIを作成してみましょう。

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-11-10.17.27-1.webp" alt="" width="300">

### パッケージのインストール

`pubspec.yaml`の`dependences`以下のように追記しパッケージをインストールします。

```
dependencies:
  badges: ^2.0.2
```

パッケージのバージョンは以下ページを見て最新バージョンを設定してください。

https://pub.dev/packages/badges

### パッケージのインポート

badgesを利用するdartファイルにて、パッケージをインポートします。
以下のコードをdartファイルの`import`の部分にに追加してください。

```
import 'package:badges/badges.dart';
```

### badgesの追加

通知バッジをつけたいWidgetを`Badge` Widgetで囲みます。
`Badge` Widgetの`badgeContent`プロパティに、バッジとして表示させたいWidgetを追加します。

以下の例は、メールアイコンに5というテキストを表示させた例です。

```
Badge(
  badgeContent: Text('5'),
  child: const Icon(
    Icons.mail,
    color: Colors.black,
    size: 50,
  ),
),
```

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-11-10.17.27-2.webp" alt="" width="300">

基本的な使い方は以上となります。
とても簡単に実装できますね。

## 詳細設定

![](/images/wp-content/uploads/2022/02/コーディング女性.webp)

badgesパッケージを使う利点は豊富な詳細設定にあります。
以下で詳細に解説していきます。

### バッジの位置

子Widgetに対するバッジの位置を調整することが可能です。

`position` プロパティに`BadgePosition` を設定することで、
バッジの位置を調整できます。

`BadgePosition`にはデフォルトとして以下のコンストラクタが用意されています。

- `BadgePosition()` : 引数でバッジの位置を調整可能
- `BadgePosition.bottomEnd()` : バッジを右下に配置
- `BadgePosition.bottomStart()` : バッジを左下に配置
- `BadgePosition.center()` : バッジを中央に配置
- `BadgePosition.topEnd()` : バッジを右上に配置
- `BadgePosition.topStart()` : バッジを左下に配置

それぞれ、`top,bottom,start,end`の引数にて位置の調節が可能です。

左下に配置した例 ：

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-11-13.05.02.webp" alt="" width="300">

```
Badge(
  badgeContent: Text('0'),
  child: const Icon(
    Icons.mail,
    color: Colors.black,
    size:50,
  ),
  position: BadgePosition.bottomStart(),
),
```

また、`alignment` プロパティにて、
`Badge` Widgetの親Widgetに対する子Widgetの位置を調整することが可能です。

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-11-13.11.58.webp" alt="" width="300">

```
Container(
  width: 100,
  height: 100,
  color: Colors.green[100],
  child: Badge(
    badgeContent: Text('0'),
    child: const Icon(
      Icons.mail,
      color: Colors.black,
      size:50,
    ),
    alignment: Alignment.bottomCenter,
  ),
),
```

上の例からわかるように、
バッジは子Widgetに対する位置でなく、
親Widgetに対する位置で設定されます。

また、`stackFit` プロパティにて、
`Badge`の子Widgetの大きさを親Widgetいっぱいに広げる等の指定が可能です。

### バッジの色、形、枠線

バッジの色、形を変更することが可能です。

`badgeColor` プロパティにてバッジの色を変更可能です。

`shape` プロパティにて、バッジの形を変更可能です。

バッジの形の種類は以下の2種類です。

- `BadgeShape.circle` : 円
- `BadgeShape.square` : 長方形

また、`borderRadius`を設定することにより、角丸の長方形を作成可能です。

`borderSide`を指定することで、バッジに枠線をつけることが可能です。

バッジ色を青色、角丸の長方形、枠線付きの例：

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-11-13.48.36.webp" alt="" width="300">

```
Badge(
  badgeContent: const Text('New'),
  child: const Icon(
    Icons.mail,
    color: Colors.black,
    size: 50,
  ),
  badgeColor: Colors.blue,
  shape: BadgeShape.square,
  borderRadius: BorderRadius.circular(10),
  borderSide: const BorderSide(width: 3),
),
```

また、`gradient`を設定することにより、色を徐々に変えることができます。

バッジ色を青色から赤色のグラデーション、長方形の例：

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-11-14.19.59.webp" alt="" width="300">

```
Badge(
  badgeContent: const Text('New'),
  child: const Icon(
    Icons.mail,
    color: Colors.black,
    size: 50,
  ),
  gradient: const LinearGradient(colors:[ Colors.blue,Colors.red]),
  shape: BadgeShape.square,
),
```

### バッジの余白（パディング）

バッジの余白（パディング）を調整することが可能です。

`padding` プロパティに`EdgeInsets`を設定することで、バッジの余白を調整可能です。

余白0を設定した例

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-11-14.36.02.webp" alt="" width="300">

```
Badge(
  badgeContent: const Text('New'),
  child: const Icon(
    Icons.mail,
    color: Colors.black,
    size: 50,
  ),
  padding: const EdgeInsets.all(0),
  shape: BadgeShape.square,
),
```

### アニメーション

`Badge`の表示が変わった時など、アニメーションをつけることができます。

`toAnimate` プロパティでアニメーションのオンオフを設定できます。
(デフォルトは`true`, オンです)

また、`animationType` プロパティでアニメーションの種類を設定します。

アニメーションの種類は以下の3種類です。

- `BadgeAnimationType.slide` ：スライドアニメーション（デフォルト）
- `BadgeAnimationType.scale` ：バッジがだんだん大きくなるアニメーション
- `BadgeAnimationType.fade` ：フェードインアニメーション

以下のページにそれぞれのアニメーションのgifがあるので、実際の動きはこちらをご覧ください。

https://pub.dev/packages/badges

また、`animationDuration` プロパティでアニメーションの秒数を設定できます。

### その他設定

その他、さらに細かい設定について解説します。

#### バッジの影

バッジの影の付き具合を調整することが可能です。

`elevation` プロパティにて影を無くしたり、濃くしたりできます。

`elevation` `0`の例：

<img src="/images/wp-content/uploads/2022/03/スクリーンショット-2022-03-11-14.07.03.webp" alt="" width="300">

#### バッジのタップ判定

バッジのタップ判定をオンオフすることができます。

`ignorePointer` プロパティに`true`を設定することで、バッジのタップ判定が無くなります。

#### バッジの表示非表示

バッジの表示非表示をプロパティにてコントロールできます。

`showBadge `プロパティに`false`を設定することで、バッジを非表示にすることができます。

## まとめ

![](/images/wp-content/uploads/2022/03/パソコン.webp)

本記事では badges というパッケージの紹介を行いました。
基本的な使い方から、詳細設定まで解説していきました。

バッジはSNS系アプリを作成するにあたって必須と言っても過言ではない、
重要な実装だと思います。
badgesパッケージを使えばバッジ周りで色々な調整ができるため、かなり有用です。
ぜひ使ってみてください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://youtu.be/_CIHLJHVoN8

## 編集後記(2022/3/11)

本記事では、任意のWidgetにバッジをつけるパッケージ、
badgesを紹介しました。

Flutterはオープンソースなので、パッケージのコードも見れる物が多いです。
今回紹介するにあたって、badgesパッケージの内部のコードを見たのですが、
条件分岐の仕方や書き方など、多くの学びがありました。

また、パッケージのコードを読んでいると、
「ここおかしくない？」だったり、
「こここうした方が良くない？」だったりに気づくことがあります。

これこそ、コントリビュートのチャンスです。
OSSのコントリビュートは実力を上げるチャンスですし、
GitHubを見る人から高評価を得られます。

内部コードのリーディングは上記のように色々とメリットがあります。
あなたも気になるWidgetや良く使うWidgetのコードを読んでみてはいかがでしょうか。
きっとFlutter力が高まるはずです。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
