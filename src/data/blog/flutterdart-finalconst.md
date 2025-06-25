---
title: "【Flutter/Dart】 finalとconst の違いって何？"
description: ""
pubDatetime: 2022-05-25T10:00:00.000Z
categories: ["beginer", "uncategorized"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

`final`と`const` って何が違うんだろう？

本記事ではそんな疑問にお答えします。

Flutter/ Dart でコードを書いていて出てくる`final`と`const`の違いについて、  
基礎の基礎から解説します！

曖昧だった理解も、きっとこの記事で固められるはずです！

ぜひ読んでみてください！

## finalとconst の違い

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

### final とconst を使う時

`final`も`const`も変数の値を変えたくないときに使います。

例えば、こんな感じです。

```dart
void main() {
  final String nickname = 'Bobby';
  final name = 'Bob'; // 型を省略して書くことができます。

  name = 'Alice';  //再代入はできません（静的解析でエラーになります）
}
```

https://dartpad.dartlang.org/?id=f376d029efac3680b7cb45d3828274eb

final を使用した例です。  
一度final とつけた変数に値を入れたなら、再代入はできなくなります。

Flutter/Dartだと静的解析（文法チェック）で再代入のコードがエラーとなります。  
（DartPadを御覧ください。）

これはconst でも同じことが起きます。

```dart
void main() {
  const String nickname = 'Bobby';
  const name = 'Bob'; // 型を省略して書くことができます。

  name = 'Alice';  //再代入はできません（静的解析でエラーになります）
}
```

https://dartpad.dartlang.org/?id=16f51b01853e1cfbb2f9c5f9895455e4

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

代入をできなくするのって不便そう、、、付けない方がよくない？

そう思う方がいるかもしれません。

ただ、再代入できるということは、いつでも何にでも変えられてしまうかもしれない、  
ということです。

再代入が自分の想定範囲内で行われるのであれば良いですが、  
他の人がプログラムを編集したりなどして、予期せぬ範囲で再代入が起き、  
それが原因でバグが発生する、そんなことが起きるかも知れません。

それなら、再代入の際に静的解析でエラーが出るようにfinalを付けて、  
他の人がプログラムを編集した際にもエラーで気づけるようにしたほうが、  
バグを防ぐという意味で良いです。

この変数は変えられない、ということを明示し、予期せぬバグを防ぐため、  
`final,const` は 有用です。

### finalとconst の違い

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

どちらも値を変えたくない時に使うのはわかったけれど、

どう違うのかしら？

finalとconstの違いを述べていきます。  
まず、大前提として、constはfinalの性質をもっています。

つまり、constの方が、final よりより厳しいキーワードということです。

そこで、const の特徴を見ていきましょう。

#### constの特徴

const を付けた変数は、コンパイル時に定数になります。

コンパイルとはDartのような特定のプログラミング言語で書かれたプログラムを、  
ネイティブ言語やJavaScriptなど、他の言語を用いて書かれた同じ動きをするプログラムに変換することです。

コンパイル時に定数になるということは、  
実行時に定数となるような値は代入できないということです。

例えば、`DateTime.now()`は実行時に実行時の値の決まる関数となっています。  
コンパイル時(言語の変換時)には値が決まっていません。

そのためこの`DateTime.now()`は実行時にチェックする`final`の変数には設定できますが、  
`const`には設定できません。（以下のDartPadを御覧ください）

https://dartpad.dartlang.org/?id=17cb870b1643170df555bba271870599

`const` に設定できるのは 数や文字列や constのついた変数、 定数の計算結果のような、  
コンパイル時の定数に限られます。

```dart
const bar = 1000000; 
const double atm = 1.01325 * bar;
```

もう一つ特徴があります。  
`const` で設定した値は設定後変更できないということです。

例えば、`final`では以下のようなコードは成り立ちます。

```dart
void main() {
  final a = [1, 2, 3];

  a[0] = 4;

  print(a);

}
```

`final` では`List`の中身を変えることは可能、ということですね。

ですが、`const`ではできません。  
以下のDartPadを実行してわかるように、実行時エラーとなります。

https://dartpad.dartlang.org/?id=7edc7e1eb3193cee9ed1e0fff1cce50e

`const`で設定した`object`はimmutable(不変)になるということです。

`final`よりより厳しい制約で使用するのが`const`ということですね。

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング女性.jpeg)

本記事では、Flutter/ Dart でコードを書いていて出てくる`final`と`const`の違いについて、  
基礎の基礎から解説しました！

いかがだったでしょうか？  
final と constの違い、つかめましたか？

背景をより詳細に知りたい場合は是非以下の参考文献も併せて読んでみてください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 参考

https://dart.dev/guides/language/language-tour#final-and-const

https://medium.com/@sidbahl67/final-vs-const-in-dart-with-examples-fac931e6bf5f

https://developer.mozilla.org/ja/docs/Glossary/Compile

https://qiita.com/yasutaka\_ono/items/608405a27e57cc30e0d7

## 編集後記（2022/5/25）

本日はfinal と constの違いについての記事でした。

自分のプロジェクトでは、  
constは明確に定数として定義したいときに使うことがほとんどですね。

finalはクラスの中で、一度しか代入しない変数に設定することが多いです。

プログラムのコーダーとして、明確に使い方を指定できるので、  
自分は比較的final , constを使ってコードを書いてます。

ぜひ、あなたも自分のプロジェクトで final,constを使ってコードを書いてみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。