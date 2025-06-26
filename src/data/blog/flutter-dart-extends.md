---
title: "【 Flutter / Dart 】extends って何？"
author: "Aoi"
description: ""
pubDatetime: 2022-10-14T11:13:31.000Z
tags: ["beginer"]
---

**「 Flutter のコードの中で出てくる extends ってなんだろう？ 」**

本記事ではそんな疑問にお答えします。

Flutter / Dart での `extends` の役割について解説します。

コードリーディングの役に立つ知識となっています。

丁寧に解説しますので、ぜひ読んでみてください！

## extends って何？

### extends の役割

`extends`は**クラスの拡張**を表すキーワードです。

あるクラスに対し、そのクラスの機能を持ちつつ、追加の機能を持つサブクラスを  
作成するのに用います。

クラスとは何かについては、以下の記事をご確認ください。

https://zenn.dev/kboy/books/a5b8b502dcdac4/viewer/0c1405

本記事では`extends`を『拡張』と訳します。  
記事によっては『継承』と訳しているものもあります。  
本記事では英和辞書の訳を正とし『拡張』と表記します。

### 具体例

拡張クラスの作成方法から、その特徴まで具体例を用いて解説します。

#### 拡張クラスの作成

`Monkey`というクラスを作成してみます。

```dart
class Monkey{
  const Monkey({required this.name});
  
  final String name;
  
  void move(){
   print('move!'); 
  }
  
  void cry(){
    print('screech！');
  }
}
```

`name`というフィールドを持ち、  
`move`というメソッドと、`cry`というメソッドを持つクラスです。

このクラスを拡張したクラスとして、`Human`というクラスを以下のように作成します。

```dart
class Human extends Monkey{
  const Human({required super.name});

  void sayTheName(){
   print(name); 
  }
}
```

`extends` の後に`Monkey`と続けることで、`Monkey`クラスを拡張したクラスとして定義できます。

ここで、`Monkey` クラスで`name`というフィールドは必須です。  
拡張したクラスの`Human`クラスでは  
元の`Monkey`クラス の`name`フィールドに値を設定する必要があります。

設定するための一つの方法がコンストラクタの引数として同様に受け取る方法です。  
拡張していない場合は`required this.name`と書くところを、  
`required super.name`と書くことで、  
元の`Monkey`クラス の`name`フィールドに値を設定することができます。

`Human`クラスの`sayTheName`メソッドは、`name`というフィールドを参照しています。  
`Human`クラスで`name`フィールドは定義していないため、一見エラーになりそうですが、  
拡張元の`Monkey`クラスで定義されているため、エラーとならなりません。

以上が、拡張クラスの作り方と解説になります。

#### メソッドの実行

上で定義した`Human`クラスを使って、以下のコードを実行してみましょう。

```dart
void main(){
  print('Human'); // 実行結果: Human
  final human = Human(name: 'Aoi');
  
  human.move(); // 実行結果: move!
}
```

上の`Human`クラスのコードの中には`move`というメソッドは定義されていません。

ですが、`human.move();`でエラーは発生せず、move! という実行結果が返ってきます。

これは拡張することにより、`Human`クラスが`Monkey`クラスの機能を持つ  
(`Monkey`クラスで定義した`move`というメソッドを使える)  
ためです。

https://dartpad.dev/?id=66810d46a37de985966f8c1dddda4284

#### メソッドの上書き

`Human`クラスを以下のように修正し、メソッドを追加しましょう。

```dart
class Human extends Monkey{
  const Human({required super.name});
  
  @override
  void cry(){
    print('uwaaaaaaah');
  }
  
  void sayTheName(){
   print(name); 
  }
}
```

`Monkey`で定義していた`cry`メソッドをもう一度定義し直しています。  
クラスの拡張では、元のクラス(`Monkey`)のメソッドをサブクラス(`Human`クラス)にて、  
上書きすることができます。

これを**オーバーライド**する、といいます。

以下のように、`Monkey`クラスの`cry`メソッドと、  
`Human`クラスの`cry`メソッドの実行結果を比較してみましょう。

```dart
void main(){
  
  print('Monkey'); // 実行結果: Monkey
  
  final monkey = Monkey(name:'George');

  monkey.cry(); // 実行結果: screech！
  
  print('Human'); // 実行結果: Human
  final human = Human(name: 'Aoi');

  human.cry(); // 実行結果: uwaaaaaaah
}
```

上書きが上手くいっていることが確認できます。

以上が上書き（オーバーライド）の解説でした。

以下のDartPadで今回紹介したサンプルを実際に実行してみて学ぶことができます。  
是非参考にしてみてください。

https://dartpad.dev/?id=66810d46a37de985966f8c1dddda4284

### Flutterでの例

`flutter create` で作られるカウンターアプリで、このようなクラスがあります。

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // コメント省略
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // コメント省略
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}
```

`StatelessWidget`クラスを`extends`しているので、  
この`MyApp`というクラスは、`StatelessWidget`を拡張したクラス、となります。

これにより、`MyApp`というクラスは`StatelessWidget`の機能を持ち、  
ウィジェットとしてFlutterのUIを構築する機能を持つわけです。

また上で記載したオーバーライドも利用して、`build`メソッドを上書きしていることがわかります。

以上が、Flutterでの例でした。

## まとめ

本記事では、Flutter / Dart での `extends` の役割について解説しました。

いかがだったでしょうか。

上手く使えば、メソッドの共用化ができるテクニックとなっています。  
またFlutter 等の内部コードを読む際に欠かせない知識でもあります。

ちょっと難しいテーマでしたが、  
ぜひ本記事を参考にして、理解を深めてみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 参考

https://dart.dev/guides/language/language-tour#extending-a-class

## 編集後記（2022/10/14）

`extends`についての記事でした。

記事途中の注釈でも書きましたが、`extends`の訳を『拡張』と訳すか、  
『継承』と訳すかは悩みどころでした。

なので、記事を書くにあたってのTwitterアンケートもやってみました。

https://twitter.com/Aoi\_Umigishi/status/1580803658576379904

（2022年10月14日20:00現在投票受付中です。  
ぜひあなたのご意見もお聞かせください。）

記事を書いてる現在だと、いい勝負となっています。

個人的には辞書的に正しい訳の『拡張』が好みですが、  
『継承』も実装でやりたいこととしては間違えてはいないし、  
おそらく『継承』といったほうが他の言語を触っている人からすると、  
理解しやすいのかな、とも思います。

これを『継承』と訳した大元をみつけて、  
なぜそう訳したのか確認してみたいです。

ご存じの方いれば、ぜひTwitter等でご教授いただければと思います。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。