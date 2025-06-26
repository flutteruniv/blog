---
title: "【コピペでできる】 Golden Test で開発体験を向上させよう"
author: "Aoi"
description: ""
pubDatetime: 2022-03-02T10:00:00.000Z
categories: ["test"]
---

あなたはFlutterでテスト、書いていますか？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

テスト書くのって面倒臭いんだよなぁ

そう思ってなかなか手をつけられないでいる方、多いと思います。

そんな方に向けて、本記事ではコピペ（コピー&ペースト）でできるとても簡単なテスト、  
**Golden Test**を紹介します。

また本記事の後半では、Golden Testを利用した開発体験の向上のさせ方についても紹介します。

ぜひ読んでみてください！

## テストを書く目的

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/パソコン.jpeg)

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

そもそもテストって何のために書くのかしら？

テスト、書いた方がいいのはわかるけれど、何のために書くのかわからない、  
そんな方いらっしゃると思います。

テストを書く目的は『**安心するため**』です。

例えば、リリース済みのモバイルアプリのコードを修正した時を考えてみましょう。  
修正した部分に関連するところだけ、実機で目視でチェックするだけで、本当に充分でしょうか？

修正した部分が想定外の部分に影響していないか、少し不安になりませんか？

あらかじめテストを書いておいてテストでチェックするようにすれば、  
想定外の変更に気が付くことができますし、  
何より「テストで大丈夫だったから、大丈夫なはず」と安心できます。

コードを変更した際にアプリが想定通り動くか確かめ、安心するために、  
今日からテストを書いてみませんか？

## Golden Test の紹介

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/プログラミング画像.jpeg)

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

テストを書いた方がいいのはわかったけれど、難しそうなんだよなぁ

確かに、複雑なテストを書いていこうとすると難しくなってきます。

ですが、元のコードによるアプリの画面と、修正後のコードによるアプリの画面を比較する、  
そんなテストならとても簡単に書くことができます。

このようなテストがGolden Testです。

Golden Test について以下の内容を解説していきます。

*   概要
*   実装方法
*   実装コードの解説

### 概要

Golden Test はFlutterのテスト分類でいうと、Widget Testにあたります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/03/スクリーンショット-2022-03-02-12.05.40-1024x475.png)

Flutterのテストの分類については以下の公式ドキュメントをご覧ください。  
[Testing Flutter apps](https://docs.flutter.dev/testing)

Widget Testはその名の通りWidgetに対するテストです。  
特に、画面を表示するWidgetに対してテストを行うことが多いです。

Golden Test も画面を表示するWidgetに対して行うテストとなります。

Golden Test は以下のようなテストです。

**Golden と呼ばれるスクリーンショットとの差分の有無を確認するテスト**

以下の図をご覧ください。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/03/スクリーンショット-2022-03-02-12.14.13-1024x502.png)

コードの修正がおき、修正したコードがUIに影響していないことを確かめたい、そんな例を考えます。

まず、準備としてコードを修正する前に、正常なコードからGoldenと呼ばれるスクリーンショットを生成しておきます。

テストでは、修正したコードから生成されるGoldenと正常なコードのGoldenを比較します。  
  
これらが一致するならテスト成功、  
不一致ならテスト失敗となります。

Golden Testとはこのようなテストです。  
イメージ掴めましたでしょうか？

以上がGolden Testの概要となります。

### 実装方法

続いて具体的な実装方法について解説していきます。

#### パッケージのインストール

`pubspec.yaml`ファイルの`dev_dependencies`に以下のように追記し、パッケージを追加します。

```
dev_dependencies:
  golden_toolkit: ^0.13.0
```

#### テストコードの実装

testフォルダにテストファイルとして、`'テストしたいWidgetがあるファイル名'_test.dart`というファイルを作成します。

このファイルに、以下のコードをコピー&ペーストで追加します。

```
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:golden_toolkit/golden_toolkit.dart';

class TestWidget extends StatelessWidget {
  const TestWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: , //ここにテストしたいWidgetを入れる
    );
  }
}

const String title = ; //ここにテストの名前を入れる

void main() {
  testGoldens('${title}_golden_test', (WidgetTester tester) async {
    await loadAppFonts();
    //デバイスの画面サイズ(iPhone6)
    const size6 = Size(375, 667);

    await tester.pumpWidgetBuilder(const TestWidget(), surfaceSize: size6);
    await screenMatchesGolden(tester, '${title}_iphone6');
  });
}
```

#### テスト対象Widget、テスト名の設定

コードの中でエラーが２つ出ているかと思います。

上のコードの、`//ここにテストしたいWidgetを入れる`のコメントの前にテスト対象のWidgetを、

`//ここにテストの名前を入れる`の前にテストの名前を記載します。

必要に応じてWidgetのファイルのインポートを行ってください。

Flutterの初期状態のカウンターアプリで実装した場合、以下のようなコードとなります。

```
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:golden_test_temp2/main.dart';
import 'package:golden_toolkit/golden_toolkit.dart';

class TestWidget extends StatelessWidget {
  const TestWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(title: 'Flutter Demo Home Page'), //ここにテストしたいWidgetを入れる
    );
  }
}

const String title = 'sample'; //ここにテストの名前を入れる

void main() {
  testGoldens('${title}_golden_test', (WidgetTester tester) async {
    await loadAppFonts();
    //デバイスの画面サイズ(iPhone6)
    const size6 = Size(375, 667);

    await tester.pumpWidgetBuilder(const TestWidget(), surfaceSize: size6);
    await screenMatchesGolden(tester, '${title}_iphone6');
  });
}
```

テスト対象のWidgetはMaterialAppのhomeに設定した時に、  
狙いのレイアウトとなるよう構成する必要があります。

#### Goldenの生成

Goldenの生成はターミナルにて行います。

ターミナルにて以下のコマンドを実行してください。

```
flutter test --update-goldens
```

`flutter test ファイル名 --update-goldens`

と、ファイル名を指定して実行することも可能です。

このコマンドにより、goldensフォルダが作成され、中にスクリーンショットが生成されます。

#### テストの実行

テストの実行もターミナルにて行います。

Widgetの中のテキストを書き換えるなど、明らかに画面に変更が現れる変更をしてから、

以下のコマンドをターミナルで実行してみてください。

```
flutter test
```

`flutter test ファイル名`

と、ファイル名を指定して実行することも可能です。

テストが失敗し、failureフォルダが作成されて中に差分画像等が生成されるはずです。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/03/golden_test_diff.png)

差分画像の例

Widgetのコードを元に戻し、もう一度`flutter test` を実行してみましょう。

今度はテストが成功するはずです。

以上が、Golden Test の実装方法となります。

### 実装コードの解説

実装コードの内容について解説していきます。

```
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:golden_toolkit/golden_toolkit.dart';

//1
class TestWidget extends StatelessWidget {
  const TestWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: , //ここにテストしたいWidgetを入れる
    );
  }
}

const String title = ; //ここにテストの名前を入れる

void main() {
  //2
  testGoldens('${title}_golden_test', (WidgetTester tester) async {
    //3
    await loadAppFonts();
    //4
    //デバイスの画面サイズ(iPhone6)
    const size6 = Size(375, 667);

    //5
    await tester.pumpWidgetBuilder(const TestWidget(), surfaceSize: size6);
    //6
    await screenMatchesGolden(tester, '${title}_iphone6');
  });
}
```

//1  
Test用Widgetの定義部分です。  
テストによってはこのウィジェットは何度も呼びだす場合があるため、ここで定義しています。

//2  
Golden Test の実行メソッドです。  
第１引数に与えられた`String`がコンソール上で表示されます。

//3  
フォントの読み込みメソッドです。  
これがないと、文字化けが発生します。

//4  
スクリーンショットの大きさの定義部分です。  
好きな値を設定することで、任意の大きさのGoldenを作成できます。

//5  
testerにWidgetを組み上げるメソッドです。  
第１引数にWidgetを、第２引数にサイズを設定します。

//6  
testerのWidgetがGoldenと一致するか確認するメソッドです。  
第２引数の`String`の名前を持つGoldenと比較を行います。  
Golden生成時は、第２引数の`String`の名前がGoldenの名前となります。

ここで注目したいのが、  
`main`関数の中はテストしたいWidgetに依存していないことです。  
普通のWidget Testは、テストしたいWidgetの中の子Widgetがあるかどうかの確認を行うため、  
`main`関数の中がテストしたいWidgetに依存します。

`main`関数の中がテストしたいWidgetに依存していないため、  
どんなWidgetに対しても同じコードでテストすることができ、  
コピペでもテストを作成することができるのです。  

## Golden Test を利用した開発体験の向上させ方

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

あなたは、こんな経験はありませんか？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

小さい端末だったり、大きい端末だったり、  
色々な端末でレイアウトチェックしなければいけないのが面倒臭い！

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

画面遷移を何回もしないと辿り着けない画面をレイアウトチェックするのって、  
ものすごい手間だわ。

これらの開発体験の悪さ、Golden Testをうまく使えば、解消できるんです。

提案したいGolden Testの利用法は以下です。

**エミュレータの代わりにGoldenを使ってレイアウトチェックする**

Goldenとは画面のスクリーンショットのことでした。  
Golden Testで Goldenを自在に作り、これでレイアウトチェックをしよう、というのが提案です。

上の2人の不満がどのように解消されるかみていきましょう。

#### 色々な端末でのレイアウトチェック

Goldenテストでは、以下のようにコードを書くことにより、  
複数の画面サイズに対してGolden Test、並びにGoldenの生成を行うことが可能です。

```
void main() {
  testGoldens('${title}_golden_test', (WidgetTester tester) async {
    await loadAppFonts();
    //デバイスの画面サイズ(iPhone6)
    const size6 = Size(375, 667);

    await tester.pumpWidgetBuilder(const TestWidget(), surfaceSize: size6);
    await screenMatchesGolden(tester, '${title}_iphone6');

    //デバイスの画面サイズ(iPad)
    const sizePad = Size(1024, 1366);

    await tester.pumpWidgetBuilder(const TestWidget(), surfaceSize: sizePad);
    await screenMatchesGolden(tester, '${title}_iPad');
  });
}
```

上記例ではiPhone6とiPadのGoldenを同時に生成することが可能となります。

このGoldenをチェックするようにすれば、いちいちエミュレータを切り替えて確認する必要はなくなります。  
  
Goldenでレイアウトチェックすることにより、  
色々な端末でのレイアウトチェックの面倒さが軽減されます。

#### 何回も画面遷移が必要な画面のレイアウトチェック

Golden Testでは画面遷移に依存せず、テストしたい画面を直接テストすることが可能です。

そのため、確認したい画面のWidgetを直接指定することで、  
画面遷移関係なく確認したい画面のGoldenを取得できます。

Goldenでレイアウトチェックすることにより、  
何回も画面遷移していた手間はなくなります。

#### Goldenを使ってレイアウトチェックする開発の流れ

最後にエミュレータの代わりにGoldenを使ってレイアウトチェックする開発の流れを画像で紹介します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/03/スクリーンショット-2022-03-02-14.26.50-1024x495.png)

以上、エミュレータの代わりにGoldenを使ってレイアウトチェックすることで、  
開発体験を向上させることが可能となります。

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング女性.jpeg)

本記事ではコピペ（コピー&ペースト）でできるとても簡単なテスト、Golden Testを紹介しました。

また本記事の後半では、Golden Testを利用した開発体験の向上のさせ方についても紹介しました。

Golden Test、書いてみたくなりましたか？

レイアウトの確認もできて、テストとしても扱えるという、  
一石二鳥のテストだと私は考えております。

ぜひぜひ使って開発体験を向上させましょう！

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 参考

https://zenn.dev/matsumaru/articles/c2bf8ec468cff8

## 編集後記(2022/3/2)

今回はテストについての話でした。  
テストといえば、今の時期、大学受験が行われていましたね。  
大学受験で印象に残っているエピソードがあるので、それを話そうと思います。  
  
とある神奈川の大学を受験するにあたって、地下鉄の南北線に乗った時の話です。  
その時の自分は試験で頭がいっぱいで、周りが全く見えていない状態でした。  
電車に乗ってしばらく経って、目的地に着く時間になっても目的の駅の名前が呼ばれません。

呼ばれた地名をよくよく聞いてみると、、、、なんと、埼玉の地名です。  
南北線の南北を間違えていました。

幸い、早めに家を出ていたため試験開始には間に合いましたが、  
生きた心地がしなかったのを今でも覚えています。

電車も今回のテストの話も、何事も確認は大事ですね。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。