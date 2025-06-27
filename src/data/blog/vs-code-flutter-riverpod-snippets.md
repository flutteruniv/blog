---
title: "【VS Code 用拡張】 Flutter Riverpod Snippets 紹介！"
slug: "vs-code-flutter-riverpod-snippets"
author: "Aoi"
description: ""
pubDatetime: "2022-07-13"
tags: ["開発ツール"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutter Riverpod Snippets ってどんな拡張機能なんだろう？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Riverpod のコードを書くのをもっと楽にしたいわ！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

本記事ではそんな疑問、要望にお答えします！

Flutter の状態管理手法であるRiverpod のコードを書くのを楽にする、
VS code の拡張機能である、**[Flutter Riverpod Snippets](https://marketplace.visualstudio.com/items?itemName=robert-brunhage.flutter-riverpod-snippets) **を紹介します！

以下のGIF のような形でコードを書くのを楽にしてくれます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/20220713_riverpod_snippets.gif)

導入方法から、基本的な使い方まで解説していきます。

ぜひ読んで導入を検討してみて下さい！

## 導入方法

Visual Studio Code のExtensions の検索バーにて、
**"Flutter Riverpod Snippets"**を検索します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-13-17.14.55-1024x562.png)

検索して出てきたFlutter Riverpod Snippetsを選択します。

開いたページにて、**install**ボタンを押せば、導入は完了です！

## 基本的な使い方

基本的な使い方は、下のGIFのように、コマンドを打ち込み、
表示された選択肢から自分が使いたいものを選択するだけです。

選択後、自動でコードが生成されます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/20220713_riverpod_snippets.gif)

このSnippetsの打ち込むコマンドと、作られるものの内容を以下の表にまとめました！
（公式ページの表を日本語訳したものとなります。）

コマンド内容`consumer``Consumer` `Widget`を生成します。`stlessConsumer``ConsumerWidget`を継承したクラスを生成します。`stfulConsumer``ConsumerStatefulWidget`を継承したクラスを生成します。`stlessHookConsumer``HookConsumerWidget`を継承したクラスを生成します。`stfulHookConsumer``StatefulHookConsumerWidget`を継承したクラスを生成します。`provider``Provider`の定義コードを生成します。`providerFamily``family` 修飾子付きの`Provider`の定義コードを生成します。`futureProvider``FutureProvider`の定義コードを生成します。`futureProviderFamily``family` 修飾子付きの`FutureProvider`の定義コードを生成します。`streamProvider``StreamProvider`の定義コードを生成します。`streamProviderFamily``family` 修飾子付きの`StreamProvider`の定義コードを生成します。`changeNotifierProvider``ChangeNotifierProvider`の定義コードを生成します。`changeNotifierProviderFamily``family` 修飾子付きの`ChangeNotifierProvider`の定義コードを生成します。`stateProvider``StateProvider`の定義コードを生成します。`stateProviderFamily``family` 修飾子付きの`StateProvider`の定義コードを生成します。`stateNotifierProvider``StateNotifierProvider`の定義コードを生成します。`stateNotifierProviderFamily``family` 修飾子付きの`StateNotifierProvider`の定義コードを生成します。`stateNotifier``StateNotifier`を継承したクラスを生成します。`listen``ref.listen`のコードを自動生成します。

生成されたコードの入力欄への移動はTabキーを押すことで可能です。

## まとめ

本記事では、Flutter の状態管理手法であるRiverpod のコードを書くのを楽にする、
VS code の拡張機能である、**[Flutter Riverpod Snippets](https://marketplace.visualstudio.com/items?itemName=robert-brunhage.flutter-riverpod-snippets) **を紹介しました。

導入方法から基本的な使い方まで解説しました。

いかがだったでしょうか？

細かい内容に思えるかもですが、導入しておくとコードを書くのがグッと楽になるはずです

VS codeを使っている人は、ぜひ一度利用を検討してみて下さい！

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://twitter.com/biz84/status/1496416100745101318

## 編集後記（2022/7/13）

コードを書くのを楽にするSnippetsの拡張機能の話でした。

Snippetsって登録するのが面倒ですが、
登録した後めちゃくちゃ楽になるんですよね。

普段遣いの内容のSnippets登録に役に立つのが[Alfred](https://www.alfredapp.com/)です。

自分はAlfredにてログインによく使うメールアドレスをスニペット登録することで、
色々な処理がとても楽になりました。

有料機能となってしまいますが、導入した後は無くてはならないものになっています。

同様のサービスはあると思うので、
ぜひ探して、Snippets登録で色々な入力処理を楽にしてみて下さい！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。