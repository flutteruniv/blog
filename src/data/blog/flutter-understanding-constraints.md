---
title: "【 Flutter 】constraints を理解しよう！【Understanding constraints の解説】"
slug: "flutter-understanding-constraints"
description: ""
pubDatetime: "2022-12-29"
author: "Aoi"
tags: ["UI/レイアウト"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

**｢ウィジェットが思うような大きさにならない...｣**

本記事でこの悩みが解決できるかもしれません。

Flutter 公式のウィジェットの大きさ等に関するドキュメント、
Understanding Constraints を日本語で解説します。

https://docs.flutter.dev/development/ui/layout/constraints

ウィジェットの大きさの決定の仕方について、
仕組みから知りたい、というあなたにピッタリの記事となっています。

記事内では、様々な実装例をコードと横並びで確認できるWEBアプリを紹介します。

ぜひ読んでみてください！

## Flutter のレイアウトの仕方

### レイアウトのルール

Flutter のレイアウトは以下のルールに則って行われます。

**Constraints go down. Sizes go up. Parent sets position.**

日本語で解説すると、

**制約は下ります。大きさは上ります。親が位置を決めます。**

です。

より詳細に述べると以下になります。

1. ウィジェットは**親(parent)から**自身の**制約(constraints)**を取得します。
constraintは4つのdouble型の値(最小と最大の幅(width),最小と最大の高さ(height))
の集合です。
2. その後、ウィジェットはその制約を自身の**子たち(children)**に渡します。
ひとつひとつの子ウィジェットが、その子たちに自身の**制約**を伝えます。
（この制約はそれぞれの子で異なります。）
そして、どれくらいの大きさになりたいか確認します。
3. ウィジェットは、**子たち**を配置します。
4. 最終的にウィジェットは親に自身の**大きさ**(size)を伝えます。
(もちろん、制約の範囲内で伝えます。)

### 例

![](http://34.145.4.125/wp-content/uploads/2022/12/スクリーンショット-2022-12-27-19.45.12-1024x503.png)

上で説明したルールでのレイアウト構築について、
図のようなレイアウト構築で行われるやりとりを、
ウィジェット(Widget)を擬人化し、会話する様子で紹介します。

![主人公Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/doctor.png)主人公Widget
お父さん(親Widget)、

私の制約はなんですか？

![親Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/ojisan.png)親Widget
幅は、80~250 pixelの間で、

高さは30~85 pixelの間で設定して欲しいな。

![](http://34.145.4.125/wp-content/uploads/2022/12/スクリーンショット-2022-12-27-19.58.13-1024x467.png)

![主人公Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/doctor.png)主人公Widget
なるほど...

自分としては5 pixel のpadding は欲しいから、
子どもたちには、

幅は240 pixel以下 (250 - 5 x 2)に、

高さは75 pixel 以下 (85 - 5 x 2)に

してもらうよう伝えればいいな。

![主人公Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/doctor.png)主人公Widget
子1くん、
あなたは、

幅は0 ~ 240 pixel の間で、

高さは0 ~ 75pixel の間で頼みます。

![子1Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/man.png)子1Widget
OK！

じゃあ幅は240 pixel、高さは20pixel がいいな！

![主人公Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/doctor.png)主人公Widget
ありがとう！

![主人公Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/doctor.png)主人公Widget
なるほど...

子2ちゃんは子1くんの下に配置したいから、

高さが残り55pixelだな。

![](http://34.145.4.125/wp-content/uploads/2022/12/スクリーンショット-2022-12-27-20.15.33-1024x409.png)

![主人公Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/doctor.png)主人公Widget
子2ちゃん、
あなたは、

幅は0 ~ 240 pixel の間で、

高さは0 ~ 55 pixel の間で頼みます。

![子2Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/woman.png)子2Widget
OK！

じゃあ幅は90 pixel、高さは30pixel がいいな！

![主人公Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/doctor.png)主人公Widget
ありがとう！

![主人公Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/doctor.png)主人公Widget
子どもたちの大きさが決まったぞ！

それじゃあ、子1くんは x : 5, y : 5 の位置に

子2ちゃんは x : 80, y : 25 の位置に配置しよう。

自分の大きさは幅が250pixel、

高さが60 pixel だな。

![主人公Widget](http://34.145.4.125/wp-content/themes/cocoon-master/images/doctor.png)主人公Widget
お父さん、
自分の大きさは、

幅が250pixel、高さが60 pixel でお願いします！

![](http://34.145.4.125/wp-content/uploads/2022/12/スクリーンショット-2022-12-27-19.45.12-1-1024x503.png)

以上が具体例となります！

## 制限について

上でお伝えしたルールの結果として、
Flutterのレイアウトエンジンにはいくつか重要な制限があります。

- ウィジェットは自身の大きさを親から与えられた制約の中で決定できます。
これはつまり、**ウィジェットはいつも欲しい大きさになれるわけではない**、
ということです。
- ウィジェットは**画面上での自身の位置を知ることはできないし、決定しません。**
これは、そのウィジェットの親が位置を決めるからです。
- 親の大きさと位置は、さらにその親に依存するため、
ツリー全体を考慮せずにウィジェットの大きさと位置を正確に定義することは
不可能です。
- もしウィジェットがその親から異なる大きさを希望し、
親がウィジェットを配置するのに十分な情報を持っていないなら、
子の大きさは無視される可能性があります。
**配置の情報を定義する時は、具体的にしてください。**

## レイアウトの具体例

"Understanding Constraints"では上記を踏まえたレイアウトの具体例として、
29の例が紹介されています。

これらの例について、確認できるWEBアプリを用意しました。

![](http://34.145.4.125/wp-content/uploads/2022/12/スクリーンショット-2022-12-27-18.20.19-1024x797.png)

https://umigishi-aoi.github.io/constraints_examples/#/

コードを横並びにして、
日本語にて例を確認できます。

ぜひこちらで様々なウィジェットの組み合わせによるレイアウトの
コードと結果を確認してみてください。

## 制約の Tight vs. Loose

制約がTightである、Looseである、という言葉の意味について解説します。

### Tight

Tight(タイト)な制約は1つの大きさを指定します。
言い換えればTightな制約は幅の最大値と最小値が同じであり、
高さの最大値と最小値が同じである制約です。

Flutterの`box.dart`の`BoxConstraints`コンストラクタでは以下のように定義されています。

```dart
BoxConstraints.tight(Size size)
    : minWidth = size.width,
      maxWidth = size.width,
      minHeight = size.height,
      maxHeight = size.height;
```

Example 2では赤い`Container`が強制的に表示領域を埋め尽くすようになりました。
これは表示領域がTightな制約を`Container`に与えていたからです。

https://github.com/Umigishi-Aoi/constraints_examples/blob/develop/lib/src/widgets/widget_base.dart#L44-L47

### Loose

一方でLoose(ルーズ)な制約は、最大の幅と高さが設定されていますが、
ウィジェットは好きなだけ小さくなることができます。
つまり、最小の幅と高さは`0`です。

Flutterの`box.dart`の`BoxConstraints`コンストラクタでは以下のように定義されています。

```dart
BoxConstraints.loose(Size size)
    : minWidth = 0.0,
      maxWidth = size.width,
      minHeight = 0.0,
      maxHeight = size.height;
```

Example 3 では `Center`をにより、表示領域より小さい、という制約が渡されました。
つまり、Looseな制約が`Container`に渡されたということです。

結局の所、ここでの`Center`の役割は、親から渡されたTightな制約を、
Looseな制約に変換し子に渡すことです。

## まとめ

本記事では、Flutter 公式のウィジェットの大きさ等に関するドキュメント、
[Understanding Constraints ](https://docs.flutter.dev/development/ui/layout/constraints)を日本語で解説しました。

記事内で、様々な実装例をコードと横並びで確認できるWEBアプリを紹介しました。

いかがだったでしょうか？

ウィジェットのレイアウトの仕方が少しでもイメージできるようになったのであれば、
とても嬉しいです。

ぜひ本記事、また、元記事を繰り返し読んで、
理解を深めていただければと思います。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/12/27）

ウィジェットのレイアウトの仕方についての記事でした。

ウィジェットのレイアウトの仕方については、
以下の記事が根本のところからかなり詳しく解説されています。

併せてご確認いただければと思います。

https://zenn.dev/heyhey1028/articles/532d0a9464c562

今回紹介したWEBアプリのGitHubリポジトリは以下となります。

レスポンシブ対応等を結構頑張って実装しましたので、
ぜひ見ていただければ嬉しいです。

https://github.com/Umigishi-Aoi/constraints_examples

記事のためのアプリを作る形式は、
なかなか骨が折れるものでした。

好評だったら今後もやっていこうと思いますので、
ぜひFlutter大学のSlackやTwitter等で感想をいただければと思います。

以上、読んでいただきありがとうございました。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。