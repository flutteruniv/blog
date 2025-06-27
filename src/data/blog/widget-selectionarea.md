---
title: "【 SelectionArea 】文字を選択できるようにしよう！【Flutter】"
slug: "widget-selectionarea"
description: ""
pubDatetime: "2022-09-14"
author: "Aoi"
tags: ["Widget"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

**「アプリの文字を選択できるようにしたい！」**

本記事はそんな疑問にお答えします。

Flutter 3.3で追加された、子孫のウィジェットを選択可能にするWidget、
`SelectionArea` `Widget`を紹介します。

この`Widget`によって、以下のようにテキストが選択可能となります。

![](http://34.145.4.125/wp-content/uploads/2022/09/20220914_selection_area_sample.gif)

とても便利な`Widget`となっています。
ぜひ本記事で学んでみて下さい！

## 基本的な使い方

基本的な使い方は、選択可能にしたいテキストの`Widget`を、`SelectionArea`にて囲うだけです。

```dart
SelectionArea(
  child: //選択可能にしたいTextWidget
）
```

`Text` `Widget`を直接囲うのでなく、
いくつか他のWidgetを挟んで囲んでも全ての文字列が選択可能になります。

```dart
@override
  Widget build(BuildContext context) {
    return SelectionArea(
      child: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.max,
            children: [
              const Text('おはようございます'),
              const Text('今日はいい天気ですね'),
              const Text('調子はいかがですか'),
            ],
          ),
        ),
      ),
    );
  }
```

![](http://34.145.4.125/wp-content/uploads/2022/09/20220914_selection_area_sample.gif)

## まとめ

本記事では、Flutter 3.3で追加された、子孫のウィジェットを選択可能にするWidget、
`SelectionArea` `Widget`を紹介しました。

いかがだったでしょうか？

とても簡単に使用可能なWidgetとなっています。

手元ではiOS, Web,macOSで選択可能なことを確認しています。

ぜひ使ってみて下さい！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/9/14）

ワーケーションで記事を書くことの挑戦が、2周目に入りました。

本日は大分県別府市から記事を書いています。

露天風呂や部屋からのオーシャンビューがとても綺麗で、
来たばかりですが、とても満足しています。

ただいろんなところを回るために滞在期間を短くしたのは失敗でした...
全然ゆっくりできません。

次は一つのところに長くいるようなワーケーションをしたいと思いました。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。