---
title: "【 Monarch 】レイアウトチェックを楽にしよう【 Flutter 】"
slug: "flutter-monarch"
description: ""
pubDatetime: "2022-06-22"
author: "Aoi"
tags: ["Package"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)
Monarch ？聞いたこと無いな、、、どんなツールなの？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)
レイアウトチェックといえば、複数のサイズの端末の

レイアウトチェックって面倒なのよねぇ。

簡単にならないかしら？

本記事ではそんな疑問、要望にお答えします。

Flutter での様々な機種のレイアウトチェックを簡単に行うことができるツール、
Monarch (モナーク)について紹介します。

Monarch を使うと、こんなことができます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/20220622_monarch_demo.gif)

Flutter 3 への対応もなされており、
最近はオープンソース化も発表された、
2022年の今注目のツールとなっています。

導入も簡単にできるので、ぜひ本記事を読んで使ってみて下さい！

## Monarch とは

https://monarchapp.io/

Monarchとは何かについて解説します。

まず、Monarch にて解決したい課題について述べ、
Monarch がどのようにして解決するのかを解説します。

### 解決したい課題

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/20220622_monarch_problem.png)

Flutter でのアプリを作成して、いざレイアウトチェックを行おうとした時、
確認項目は多岐に渡ります。

例えば以下のような確認項目があります。

- 複数の種類、サイズの機種での確認
- テキストの大きさ変更でのレイアウト崩れの確認
- 言語変更による影響の確認
- テーマ(ダークモード等)の確認

これらを組み合わせて確認するとなると、
何度もエミュレータの立ち上げを行ったり、
言語設定の変更を行ったりしなければなりません。

一言で言って、面倒です。
工数もかなりかかります。

このように、レイアウトチェックで多岐にわたる確認項目を確認するのに、
手間がかかること、工数がかかることが解決したい課題です。

### Monarch による解決

Monarch は上記の手間や工数を削減してくれるツールとなっています。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/20220622_monarch_demo.gif)

左側のコントロールパネル上で、機種やテーマ、言語、テキストスケールを選択することで、
即座に右のUIに反映することが可能となります。

機種ごとの実行のし直しや、言語設定の変更等を行わなくとも反映してくれるので、
かなりの手間や工数の削減ができます。

また、ホットリロードにも対応しており、
コードの変更をUIに即座に反映することも可能となっています。

### Monarch の良いポイント

Monarch と似たようなツールとして、[storybook_flutter](https://pub.dev/packages/storybook_flutter) プラグインがあります。

こちらも同様の問題を解決してくれるツールですが、
Monarch の方が優れているポイントが１点あります。

それは、**本体のコードを変更せずに使用できる**ことです。

storybook_flutter プラグインは、
lib フォルダ配下のDartコードへの`Storybook` Widgetの追加等、
本番コードの編集が必要となります。

これは製品にとっては不要なコードで、
製品化段階で削除する、開発段階で追加する、等毎回行うのは手間です。

一方でMonarch はツールとしてインストールして使用するため、
多少の準備は必要なものの、本番コードに一切触ること無く、
使用することが可能となっています。

このため、Monarch を使用したまま製品化することも可能です。

以上がMonarch の良いポイントとなります。

## Monarch の基本的な使い方

### Monarch のインストール

以下のページに従ってインストールしていきます。

https://monarchapp.io/docs/install

前提としてXcodeのインストールが必要となります。

#### ダウンロード

ルート直下にdevelopmentフォルダを用意し、
コマンドラインツールでdevelopment フォルダに移動後、
コマンドで必要ファイルをダウンロードします。

```bash
cd ~/development
curl -O https://d2dpq905ksf9xw.cloudfront.net/macos/monarch_macos_1.7.8.zip
```

ダウンロードするフォルダは任意です。
後ほどパスの設定をするので、ダウンロードしたフォルダまでのパスを控えておいて下さい。

curl ~のコマンドについては記事を見ているタイミングによって古い場合があります。
必ず上記のインストールに関するページを参照の上、最新のコマンドで実行して下さい。

#### 解凍

続けてdevelopmentフォルダにて以下のコマンドを打ち、ファイルを解凍します。

```bash
unzip monarch_macos_1.7.8.zip
```

unzip ~のコマンドについては記事を見ているタイミングによって古い場合があります。
必ず上記のインストールに関するページを参照の上、最新のコマンドで実行して下さい。

#### パスの設定

ルートディレクトリ(コマンドラインツールを立ち上げ直した時に居る、
ユーザーネームのディレクトリ)にて、.zshrc(.bashrc)ファイルを開き、以下のパスを追加します。

```bash
export PATH="$PATH:/monarch/bin"
```

<monarchをダウンロードしたフォルダまでのパス>の部分は、
monarchをダウンロードしたフォルダまでのパスを記載して下さい。

私の例だと以下のようになります。

```bash
export PATH="$PATH:/Users/umigishiaoi/development/monarch/bin"
```

以上でインストールは完了です。

### Monarch の使い方

Monarch の実際の使い方について解説していきます。

#### 初期化

Monarch を使用したいFlutter Project に移動し、以下のコマンドを打って初期化を行います。

```bash
monarch init
```

このコマンドにより、pubspec.yaml の `dev_dependencies`への必要パッケージの追加、
後述のstories フォルダの追加を自動で行ってくれます。

#### Story の追加

Monarch でチェックする画面（`Widget`）はStory と呼ばれます。
このStroy を stories フォルダの *_stories.dartファイルに用意することで、
Monarch を実行したときに確認が可能となります。

* には自分の好きな名前を設定可能です。
終わりが_stories.dartとなるようにファイルを作成します。

カウンターアプリの`MyHomePage Widget`のStoryの作成を例に取り上げて、
作成方法を解説します。

stories フォルダに main_stories.dartを用意します。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-22-17.48.22.png" alt="" width="300">

main_stories.dartに以下のようにWidget を返すメソッドを用意します。

```dart
import 'package:flutter/material.dart';
import 'package:monarch_sample/main.dart';

Widget myHomePage() => const MyHomePage(title: 'Monarch Demo');
```

用意したWidget を返すメソッドがStoryとして実行時のコントロールパネルに表示されます。

以下の画像のように、複数のStoryを一つのファイルに用意することも可能です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/20220622_stories_sample.png)

準備は以上です！簡単ですね！

#### Monarch の実行

コマンドラインツールで以下のコマンドを実行することでMonarchが実行されます。

```bash
monarch run
```

実行した後、左側のコントロールパネル下半分に
先程設定した*_stories.dart、storyが表示されるのでこれを選択します。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-22-17.59.00-874x1024.png" alt="" width="300">

おめでとうございます！
Story に設定したWidgetが表示されました！

このように、確認したいレイアウトをStoryとして設定し、
確認する、というのがMonarch の実行方法となります。

### 確認項目

Monarch のコントロールパネルを設定することで確認できる項目について
主要な項目を解説します。

#### 実行機種の変更

Device の項目にて実行する機種の変更ができます。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-22-18.17.52-867x1024.png" alt="" width="300">

iPadのようなタブレット端末も確認可能です。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-22-18.17.17-1024x951.png" alt="" width="300">

#### テーマの変更

Theme の項目で、Light Theme, Dark Theme の切り替えが可能です。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-22-18.27.07-868x1024.png" alt="" width="300">

#### Locale の変更

Locale の項目にて、地域設定（言語設定等）を変更することが可能です。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-22-18.29.45-864x1024.png" alt="" width="300">

#### Text Scale の変更

Text Scale Factor の項目にて 、テキストの大きさの基準値を変更することが可能です。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-22-18.32.15-864x1024.png" alt="" width="300">

## まとめ

本記事ではFlutter での様々な機種のレイアウトチェックを簡単に行うことができるツール、
Monarch (モナーク)について紹介しました。

ちょっと設定が手間な部分はあるものの、
ワンクリックで欲しい画面にアクセスできる点、
本番のコードに影響を与えない点は、かなり良いと感じています。

ぜひMonarch を使って、開発を効率化してみて下さい！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/6/22）

先日、こんなツイートが話題になりました。

https://twitter.com/nilsreichardt/status/1539169833438306306

Flutterのアプリは、一本指でスクロールするのに対し、
二本指でスクロールすると2倍スクロール速度が速くなる、とのTipsです。

しかも、三本指なら3倍と、指を増やすごとに速くなるとのこと。

これを利用して、Flutterアプリかどうかを判別することができる、
といのがツイートの趣旨になっています。

こちらはissueが建てれているもののCloseがされていないようです。

自分の作ったFlutterアプリでも確かに早くなっている気がするので、
この仕様の信憑性は割と高そうです。

嘘みたいな話の紹介でした。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。