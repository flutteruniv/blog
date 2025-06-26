---
title: "【Dart】 アロー構文 => とは？ 【Flutter】"
author: "Aoi"
description: ""
pubDatetime: 2022-11-02T10:00:00.000Z
categories: ["dart"]
---

**コードの中で出てくる、" => " って一体何なんだろう？」**

本記事ではそんな疑問にお答えします。

Flutter / Dart で頻出する、 " => "を使ったアロー構文 について解説します。

サンプルコードを紹介の上、どのような用途で使うのか詳細に解説します。

ぜひ読んでみてください！

## アロー構文 " => " とは？

コードリーディング中、以下のようなコードを見たことはありませんか？

```dart
final list = <int>[1, 2, 3];
final sum = list.fold<int>(0, (a, b) => a + b);

print(sum); // 6
```

fold については以下記事を御覧ください。

https://blog.flutteruniv.com/flutter-dart-list/#toc30

2行目の`fold` メソッドで、矢印のような記号 " => " が使われています。

この" => "を使った書き方 を**arrow syntax (アロー構文)**と呼びます。

アロー構文は関数の定義の記法で、  
式を" => "の右側で実行し、その結果を返す関数を定義する記法となります。

具体的には上記コードは以下のコードと同じになります。

```dart
final list = <int>[1, 2, 3];
final sum = list.fold<int>(0, (a, b) {
  return a + b;
});

print(sum); // 6
```

中身が`return` 1行のみの関数と同じになるわけですね。

以上が" => " の役割、アロー構文の解説となります。

## サンプルコード

最後にサンプルコードを紹介します。

先の例では`fold` の中の関数の定義にアロー構文を用いましたが、  
以下のようにクラス内のメソッドの定義でも使用可能です。

```dart
void main(List<String> arguments) {
  final people = People(height: 1.65, weight: 65.2);

  print(people.bmi); // 23.948576675849406

  people.say('Hello'); // Hello
}

class People {
  People({required this.height, required this.weight});

  final double height;
  final double weight;

  double get bmi => weight / (height * height);

  void say(String message) => print(message);
}
```

以上がサンプルコードとなります。

## まとめ

本記事ではFlutter / Dart で頻出する、 " => "を使ったアロー構文 について解説しました。

サンプルコードを紹介の上、どのような用途で使うのか詳細に解説しました。

いかがだったでしょうか？

アロー構文はFlutterのコードリーディング中に頻出する記法です。  
覚えておけばコードの理解がスムーズになるので、ぜひ覚えておいてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 参考

https://dart.dev/codelabs/dart-cheatsheet#arrow-syntax

## 編集後記（2022/11/2）

アロー構文についての記事でした。

こういうコードの書き方って検索するのに困りますよね。

あなたはどんな検索ワードでこの記事にたどり着いたんでしょうか？

" => " で検索してたどり着いたのであれば、  
願ったり叶ったりというか、ユーザーフレンドリーだな、と思います。

アロー構文、というキーワードがわかる人は、  
そもそもこの記事が必要ないくらい理解しているのでは、という気持ちがありますね。

結局の所今回紹介した内容は、書き方、読み方の問題なので、  
漢字を覚えるような形で素直にインプットしてもらえたらな、と思います。

\=> を見た時にこんな記事あったな、と思い出してもらえれば幸いです。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。