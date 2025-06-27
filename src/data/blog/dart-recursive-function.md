---
title: "【Dart】 再帰関数 って何？"
slug: "dart-recursive-function"
author: "Aoi"
description: ""
pubDatetime: "2022-05-27"
tags: ["Dart"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/ojisan.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      コードを読んでいたら関数の中で自分自身の関数を呼び出しているのを
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>
見つけたんだけど、これってどういう処理なのかな？

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/obasan.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      難しくてよくわからないわ！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

本記事ではそんな疑問にお答えします。

自分自身を呼び出し、処理を再帰的に行う関数、
再帰関数についてDartでの例を交えて解説します。

本記事の目的は再帰関数を使ったコードを読めるようになることです。
実際に使えるようになるのはなかなか難しいですが、
使ったコードにぶつかった時に慌てなくて済むように、
基礎をしっかりおさえておきましょう！

ぜひ読んでみてください！

## 再帰関数 とは

### 再帰関数 の例

再帰関数とは、関数の中で自分自身を呼び出し、処理を行う関数のことです。

例を挙げて解説します。

```dart
void main() {
  print(iterativeSum(10));
}

int iterativeSum(int n) {
  int temp = 0;

  for (int i = 0; i recursiveSum(4)
=> 5 + ( 4 + recursiveSum(3) )
=> 5 + ( 4 + ( 3 +recursiveSum(2) ) )
=> 5 + ( 4 + ( 3 +  ( 2 + recursiveSum(1) ) ) )
=> 5 + ( 4 + ( 3 +  ( 2 + ( 1 + recursiveSum(0) ) ) ) )
=> 5 + ( 4 + ( 3 +  ( 2 + ( 1 + 0 ) ) ) )
=> 15
```

といった形で計算され、15が答えとして返ります。

このコードが引数以下の数字の合計を返すこと、がわかったかと思います。

### 再帰関数 の良い点

良い点は、再帰関数で書くとコードをよりスッキリと、端的に書くことができることです。

上での例示のとおり、コードを短く書くことができます。

### 再帰関数の弱点

弱点は3つあります。

１つ目は、コードを理解するのにちょっとコツが要ることです。
特に初心者の方がこの再帰関数を理解しようとすると、手こずるかと思います
コードを読む側には優しくないコードとなってしまうのが、１つ目の弱点です。

２つ目は、`for`で行った時に比べ、パフォーマンスが良くないことです。
以下のDartPadで`for`ループで行う場合と、再帰的に行う場合の実行時間を比較しています。

https://dartpad.dev/?id=1de5c64bc31178eda4b0e6391263ddf0

何回か実行してみると、再帰的に行う場合の方が時間がかかることがわかると思います。
このように、パフォーマンスが悪くなってしまうことが弱点の２つ目です。

3つ目はメモリを消費することです。
上のDartPadにて`n=10000`を計算すると、
`Uncaught RangeError: Maximum call stack size exceededError: RangeError: Maximum call stack size exceeded`
とスタックオーバーフローのエラーが出ます。
計算途中で、`5+recursiveSum(4)`の`5`の部分をメモリで記録しておかなければいけないため、
メモリを消費してしまうからです。
メモリ消費でのエラーが発生し得ること、これが3つ目の弱点です。

## まとめ

本記事では自分自身を呼び出し、処理を再帰的に行う関数、
再帰関数についてDartでの例を交えて解説しました。

いかがだったでしょうか？

再帰関数について理解が深まりましたか？

弱点の方が多く解説したため、使わないほうが良いのでは？と思われるかも知れません。
ですが、使い所と使い方を選べば、強力な効果を発揮するのが再帰関数です。

再帰関数の使い所等々については、以下の記事がとても勉強になるかと思います。
興味のある方はぜひ読んでみてください。

https://qiita.com/drken/items/23a4f604fa3f505dd5ad

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://medium.com/flutter-community/higher-order-functions-recursion-in-dart-functional-programming-part-5-4237bc114005

## 編集後記（2022/5/27）

今回は再帰関数についての記事でした。

ちょっとマニアックなテクニックについての記事だったかと思います。
ただ引き出しを大きくするのは大事だと思っています。

いつか、必要となった時につかえるように、頭の片隅に記憶しておくと良いかと思います。

こういうテクニックは競技プログラミング等でよく使うイメージがあります。
Dartの競技プログラミングがあったら面白そうだな、とふと思いました。
（Flutter Puzzle Hack のようなハッカソンはありましたが。）

Flutter/Dartが広まっていけば、いつかできるかもしれませんね。

将来に期待です。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
