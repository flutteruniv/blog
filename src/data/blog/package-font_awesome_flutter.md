---
title: "【 font_awesome_flutter 】おしゃれなアイコンを実装しよう"
slug: "package-font_awesome_flutter"
author: "Aoi"
description: ""
pubDatetime: "2022-08-25"
tags: ["Package"]
layout: "../../layouts/BlogPost.astro"
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)
font_awesome_flutter ? どんなパッケージなんだろう？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)
Material Icon にないアイコンを実装したいわ！

本記事はそんな疑問、要望にお答えします。

Material Icon にないアイコンを使用可能にするパッケージ、
[font_awesome_flutter](https://pub.dev/packages/font_awesome_flutter) パッケージを紹介します。

簡単に、様々なアイコンを実装可能です。
例えば以下のようにTwitterのアイコンも実装できます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-25-22.42.57-508x1024.png)

ぜひ本記事を読んで使い方を学んでみてください！

## 基本的な使い方

### 準備

まず準備として、パッケージのインストールと、
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add font_awesome_flutter
```

#### パッケージのインポート

実装したいDartファイルの上部に以下のインポート文を追加し、
パッケージをインポートします。

```dart
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
```

### 実装

実装方法について解説します。

アイコンを使用したい場所に`FaIcon` ウィジェットを配置し、
ウィジェットの第一引数として、
`FontAwesomeIcons.~`を設定します。

~にはアイコン名を入力します。
アイコン名については、[こちら](https://fontawesome.com/icons)のページを参照してください。

アイコン名の入力時はロワーキャメルケースで行い、
スタイルの指定は接頭語で行います。
例：Solid のAddress Book なら、"solidAddressBook"と入力します。

```dart
FaIcon(FontAwesomeIcons.solidAddressBook),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-25-22.37.50.png)

### 色と大きさの設定

`FaIcon` ウィジェットのプロパティで、`size`,`color`をそれぞれ設定することで、
大きさと色を設定することが可能です。

```dart
FaIcon(
          FontAwesomeIcons.twitter,
          size: 50,
          color: Color(0xFF1DA1F2),
        ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-25-22.40.12.png)

## まとめ

本記事では、Material Icon にないアイコンを使用可能にするパッケージ、
[font_awesome_flutter](https://pub.dev/packages/font_awesome_flutter) パッケージを紹介しました。

いかがだったでしょうか？

font_awesome_flutterパッケージにて利用できるアイコンは、
フリーの、商用利用可能なアイコンとなります。

是非利用して、あなたのアプリをおしゃれにしてみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/8/25）

font_awesome_flutterパッケージの紹介記事でした。

font_awesome_flutterで実装できるアイコンの中に、
企業ブランドのアイコンが含まれているのが、とても良い点だと思っています。

[こちら](https://fontawesome.com/icons/address-book?s=regular)の公式ページを見るだけでも様々なアイコンが用意されていて、
とても楽しいです。

時間があるときに見てみることをオススメします。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。