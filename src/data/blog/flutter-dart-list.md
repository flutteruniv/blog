---
title: "【 Dart 】 List の使い方 【 Flutter 】"
slug: "flutter-dart-list"
description: ""
pubDatetime: "2022-10-20"
author: "Aoi"
tags: ["Dart"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

**「Dart の List の使い方を知りたい！」**

本記事ではそんな要望にお答えします。

Dart (Flutter) で頻出する、`List` についての解説記事です。
`List`の作成方法から、用意されているメソッドまで、
用意されているほぼ全てを解説します。

辞書的に使える記事となっています。

ぜひ読んで使ってみてください！

## List とは

`List`とは、ある要素数を持った、順序付けられたオブジェクトの集合です。

`List`の集合は角括弧("[ ]") で囲って表現されます。

以下は、 文字列(`String`) の`List`の例です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/10/スクリーンショット-2022-10-19-17.31.14-1024x312.png)

この集合のポイントは、何番目かという数字(インデックス)が
各要素に対応付けられていることです。
これが「順序付けられた」という意味となります。

これをコードで表すと、以下のようになります。
上記`List`を`fluits`という変数に格納した例となります。

```dart
List fruits = ['りんご', 'ぶどう', 'みかん'];
```

`List` の横に山括弧で型を指定することで、
その`List`に保存するオブジェクトの型を指定することができます。

上記例では`String` （文字列）を指定しています。

以下のような書き方も可能です。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];
```

### 要素の取り出し

`List`は順序付けられているので、インデックスを指定して要素を取り出すことができます。
変数名[インデックス] で 要素が取り出せます。

上の`fluits`の例で`1`のインデックスを持つ要素は以下のようにして取り出せます。

```dart
print(fruits[1]); // = ぶどう
```

`print()`は中身をログとして表示してくれるメソッドとなります。

## List の作り方(コンストラクタ)

`List`の作り方(`List`に用意されているコンストラクタの使い方)を解説していきます。

### List.empty

`List.empty()`で空の`List`が生成されます。

```dart
final emptyList = List.empty();

print(emptyList); // []
```

変数への格納時(インスタンス生成時)は`List`の型を指定する必要があります。

`List.empty` には、`growable`という名前付き引数が存在します。
これについては次の注釈にて説明します。

### List.filled

`List.filled` で、第1引数にて指定された長さ（要素数）を持つ、
要素がすべて第2引数 の`List`を生成することができます。

以下は、長さ3, 要素がすべて'りんご'の`List`を生成している例です。

```dart
final apples = List.filled(3, 'りんご');

print(apples); // [りんご, りんご, りんご]
```

`List.filled` には、`growable`という名前付き引数が存在します。
これについて解説します。

`List.filled`で作られる`List`は長さが固定の`List`です。(Fixed-length list)
長さ固定の`List`の長さを上書きしたり、要素を追加したりすることは、
実行時にエラーとなります。

```dart
final apples = List.filled(3, 'りんご');
apples.length = 2; // 実行時エラー
apples.add('みかん') // 実行時エラー
```

上記リストで要素の追加等で長さを変えたい時に使うのが`growable`です。
`growable`を`true`にすることで自由の効く`List` (Growable list)となり、
上記コードでもエラーとならなくなります。

### List.from

`List.from` で `Iterable`型を持つ要素から`List`を生成します。

```dart
final Iterable iterable = [1, 2, 3];

final list = List.from(iterable);

print(list); // [1, 2, 3]
```

`Iterable`型とは、`List`と同じく要素の集合を表す型で、
変数名[インデックス]で値を取り出せない
（[]の演算子が定義されていない、というエラーとなる）
特徴があります。（[参考](https://dart.dev/codelabs/iterables)）

`List.from` で作成される`List`は、Growable listです。
名前付き引数`growable`を`false`にすることでFixed-length listにすることができます。

### List.generate

`List.generate` で 第1引数の長さを持ち、
第2引数で設定した要素の生成関数に従って生成された要素を持つ`List`を生成します。

```dart
final list = List.generate(3, (int index) => index * 2);

print(list); // [0, 2, 4]
```

`List.`generate で作成される`List`は、Growable listです。
名前付き引数`growable`を`false`にすることでFixed-length listにすることができます。

### List.of

`List.of` で `Iterable`型を持つ要素から`List`を生成します。

```dart
final Iterable iterable = [1, 2, 3];

final list = List.of(iterable);

print(list); // [1, 2, 3]
```

`List.of` と`List.from`はほぼ同じですが、生成元の型に対する保証の点で異なります。
詳細は[こちら](https://github.com/dart-lang/sdk/issues/45840#issuecomment-827497363)を御覧ください。

### List.unmodifiable

`List.unmodifiable` で `Iterable`型を持つ要素から`List`を生成します。

```dart
final Iterable iterable = [1, 2, 3];

final list = List.unmodifiable(iterable);

print(list); // [1, 2, 3]
```

`List.unmodifiable` で生成した`List`は、長さや要素の変更が一切できない`List`となります。
具体的には以下のコードが実行時エラーとなります。

```dart
list[1] = 5;
```

## List のプロパティ

`List`に用意されているプロパティを一部解説します。

### first

`first`プロパティで`List`の最初の要素を取得します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.first;

print(result); // りんご

fruits.first = 'バナナ';  // 要素の上書きも可能
```

### isEmpty

`isEmpty`プロパティでその`List`が空であるかどうかを取得します。
空であれば`true`となります。

```dart
final emptyList = List.empty();

final result = emptyList.isEmpty;

print(result); // true
```

### isNotEmpty

`isNotEmpty`プロパティでその`List`が空でないかどうかを取得します。
空でなければ`true`となります。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.isNotEmpty;

print(result); // true
```

### last

`last`プロパティでその`List` の最後の要素を取得します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.last;

print(result);  // 'みかん'

fruits.last = 'バナナ';  // 要素の上書きも可能
```

### length

`length` プロパティでその`List`の長さ(要素数)を取得します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.length;

print(result); // 3
```

### reversed

`reversed` プロパティでその`List` を逆順にした`Iterable`を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.reversed;

print(result); // (みかん, ぶどう, りんご)
```

後述する`.toList()` で再度`List`化することができます。

### single

`single`プロパティで その`List`の要素が一つだけか判定し、一つだけならその要素を取得します。

```dart
final fruits = ['りんご'];

final result = fruits.single;

print(result); // りんご
```

複数の要素がある場合または要素がない場合はエラーとなります。

## List のメソッド

`List`に用意されているプロパティを一部解説します。

### add

addメソッドにより、`List`の一番最後に引数の要素が追加されます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

fruits.add('バナナ');

print(fruits);  // [りんご, ぶどう, みかん, バナナ]
```

### addAll

addAll メソッドにより、`List`の一番最後に引数の`Iterable`がすべて追加されます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final Iterable iterableFruits = ['バナナ', 'マンゴー'];

fruits.addAll(iterableFruits);

print(fruits); // [りんご, ぶどう, みかん, バナナ, マンゴー]
```

### any

any メソッドは、要素ごとに引数の関数を実行し、
一つでも`true`となるものがあれば`true`を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.any((element) => element == 'ぶどう');

print(result); // true
```

### asMap

`asMap`メソッドは、`List`をインデックスと要素の組にした、要素の追加等ができない
`Map`型のオブジェクトを返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.asMap();

print(result); // {0: りんご, 1: ぶどう, 2: みかん}
```

`Map`型とはキーと値のペアの集合の型です。
上記例では整数をキーとし、値を文字列で保持する`Map`となります。

### clear

`clear`メソッドにより、`List`のすべての要素を削除され、要素数が`0`となります。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

fruits.clear();

print(fruits);  // []
```

### contains

`contains`メソッドは、引数のオブジェクトが`List`の要素に含まれているかどうかを`bool`型で返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.contains('ぶどう');

print(result); // true
```

### elementAt

`elementAt`メソッドは、引数のインデックスの`List`の要素を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.elementAt(1);

print(result); // ぶどう
```

### every

`every`メソッドは、要素ごとに引数の関数を実行し、
すべて`true`であれば`true`を返します。

```dart
final list = [2, 4, 6];

final result = list.every((element) => element.isEven);

print(result); // true
```

### expand

`expand`メソッドは、`List`の要素を`0`個、または複数の要素を持つ`Iterable`に変換し、
そのそれぞれの境界を無くした`Iterable`として保持します。

```dart
final list = [1, 2, 3];

final iterable =
    list.expand((element) => [element, element]);

print(iterable); // (1, 1, 2, 2, 3, 3)
```

### fillRange

`fillRange`メソッドにより、第1引数以上、第2引数未満のインデックスを持つ要素が、
第3引数の値で上書きされます。

```dart
final list = [1, 2, 3, 4, 5];

list.fillRange(1, 3, 7);

print(list); // [1, 7, 7, 4, 5]
```

### firstWhere

`firstWhere`メソッドは、第1引数の関数の実行結果が`true`となる最初の要素を返します。
`true`となるものがなかった場合、`orElse`に設定した関数が呼ばれます。

```dart
final list = [1, 2, 3, 4, 5];

final result1 = list.firstWhere((element) => element > 3);

print(result1); // 4

final result2 = list.firstWhere((element) => element > 5, orElse: () => 0);

print(result2); // 0
```

### fold

`fold`メソッドは、第1引数に初期値とし、
第2引数の関数をその関数の以前の実行結果（初回は初期値）と`list`の要素で実行し、
すべての要素で実行されるまで繰り返し、得られた実行結果を返します。

```dart
final list = [1, 2, 3, 4, 5];

final result = list.fold(
  0,
  (previousValue, element) => previousValue + element,
); // 15

print(result);
```

上記コードでは、以下の計算が行われます。

初期値`0` `+` インデックス`0`の要素`1` `=` `1`
前の実行結果`1` `+` インデックス`1`の要素`2` `=` `3`
前の実行結果`3` `+` インデックス`2`の要素`3` `=` `6`
前の実行結果`6` `+` インデックス`3`の要素`4` `=` `10`
前の実行結果`10` `+` インデックス`4`の要素`5` `=` `15`

よって`15`となります。

### followedBy

`followedBy`メソッドは、引数の`Iterable`を`List`の最後に結合した`Iterable`を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final Iterable iterableFruits = ['バナナ', 'マンゴー'];

final result = fruits.followedBy(iterableFruits);

print(result); // (りんご, ぶどう, みかん, バナナ, マンゴー)
```

### forEach

`forEach`メソッドは、`List`のそれぞれの要素に対し引数の関数を実行します。

```dart
final list = [1, 2, 3];

list.forEach((element) {
  final number = element * 2;
  print(number);
}); // 2 4 6
```

上記の場合`forEach`よりも`for`ループが推奨されます。([参考](https://dart-lang.github.io/linter/lints/prefer_foreach.html))
`for` と`in`を使うことで、`List`のそれぞれの要素に対し{}内の処理を実行します。

```dart
final list = [1, 2, 3];

for (final element in list) {
  final number = element * 2;
  print(number);
} // 2 4 6
```

### getRange

`getRange`メソッドは、第1引数以上のインデックスを持ち、第2引数未満のインデックスを持つ
要素達を新たな`Iterable`として返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.getRange(1, 3);

print(result); // (ぶどう, みかん)
```

### indexOf

`indexOf`メソッドは、
第1引数の要素を`List`の要素の中で検索して最初に見つかったもののインデックスを返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.indexOf('ぶどう');

print(result); // 1
```

第1引数の要素が`List`の中に見つからない場合は`-1`が返されます。

第2引数にて、検索開始インデックスを指定することができます。

### indexWhere

`indexWhere`メソッドは、第1引数の関数の実行結果が`true`となる要素を探索し、
最初に`true`となったもののインデックスを返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.indexWhere((element) => element == 'ぶどう');

print(result); // 1
```

第1引数の関数の実行結果が`true`になるものが
`List`の中に見つからない場合は`-1`が返されます。

第2引数にて、検索開始インデックスを指定することができます。

### insert

`insert`メソッドによって、第1引数のインデックスに第2引数の要素が挿入されます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

fruits.insert(1, 'バナナ');

print(fruits); // [りんご, バナナ, ぶどう, みかん]
```

### insertAll

`insertAll`メソッドによって、第1引数のインデックスに第2引数の`Iterable`が挿入されます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final Iterable iterable = ['バナナ', 'パイナップル'];

fruits.insertAll(1, iterable);

print(fruits); // [りんご, バナナ, パイナップル, ぶどう, みかん]
```

### join

`join`メソッドは、`List`の要素を文字列(`String`)化し、それらを結合した文字列(`String`)を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.join();

print(result); // りんごぶどうみかん
```

引数に文字列と文字列の間の区切りの文字(記号)を設定することができます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.join('と');

print(result); // りんごとぶどうとみかん
```

### lastIndexOf

`lastIndexOf`メソッドは、
第1引数の要素を`List`の要素の中で検索して最後に見つかったもののインデックスを返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'ぶどう'];

final result = fruits.lastIndexOf('ぶどう');

print(result); // 3
```

第1引数の要素が`List`の中に見つからない場合は`-1`が返されます。

第2引数にて、検索開始インデックスを指定することができます。

### lastIndexWhere

`lastIndexWhere`メソッドは、第1引数の関数の実行結果が`true`となる要素を探索し、
最後に`true`となったもののインデックスを返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'ぶどう'];

final result = fruits.lastIndexWhere((element) => element == 'ぶどう');

print(result); // 3
```

第1引数の関数の実行結果が`true`になるものが
`List`の中に見つからない場合は`-1`が返されます。

第2引数にて、検索開始インデックスを指定することができます。

### lastWhere

`lastWhere`メソッドは、第1引数の関数の実行結果が`true`となる最後の要素を返します。
`true`となるものがなかった場合、`orElse`に設定した関数が呼ばれます。

```dart
final list = [1, 2, 3, 4, 5];

final result1 = list.lastWhere(
  (element) => element > 3,
);

print(result1); // 5

final result2 = list.lastWhere(
  (element) => element > 5,
  orElse: () => 0,
);

print(result2); // 0
```

### map

`map`メソッドは、`List`の要素を引数の関数で変換した結果の集合の`Iterable`を返します。

```dart
final list = [1, 2, 3];

final result = list.map((element) => element * 2);

print(result); // (2, 4, 6)
```

### reduce

`reduce`メソッドは、2つの要素を処理して1つの値に変換する、引数の関数を繰り返し、
最終的に出力された値を返します。

```dart
final list = [1, 2, 3];

final result = list.reduce((value, element) => value + element);

print(result); // 6
```

上記コードでは、以下の計算が行われます。

インデックス`0`の要素`1` `+` インデックス`1`の要素`2` `=` `3`
前の実行結果`3` `+` インデックス`2`の要素`3` `=` `6`

よって6となります。

`List`の要素が1つのときは、引数の関数は実行されずその要素が返されます。

`fold` とは異なり、最終結果の型は要素の型と同じである必要があります。

### remove

`remove`メソッドは、
引数のオブジェクトを`List`の中から探索し、最初に見つかったものを削除して`true`を返します。
見つからなかった場合、`false`を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.remove('ぶどう');

print(result); // true

print(fruits); // [りんご, みかん]
```

### removeAt

`removeAt`メソッドは、引数のインデックスの要素を削除し、削除した要素を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.removeAt(1);

print(result); // ぶどう

print(fruits); // [りんご, みかん]
```

### removeLast

`removeLast`メソッドは、`List`の最後の要素を削除し、削除した要素を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん'];

final result = fruits.removeLast();

print(result); // みかん

print(fruits); // [りんご, ぶどう]
```

### removeRange

`removeRange`メソッドによって、
第1引数以上、第2引数未満のインデックスを持つ要素が削除されます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

fruits.removeRange(1, 3);

print(fruits); // [りんご, 'もも', 'びわ']
```

### removeWhere

`removeWhere`メソッドによって、引数の関数の実行結果が`true`となる要素が削除されます。

```dart
final list = [1, 2, 3, 4, 5];

list.removeWhere((element) => element.isEven);

print(list); // [1, 3, 5]
```

### replaceRange

`replaceRange` メソッドによって、
第1引数以上、第2引数未満のインデックスを持つ要素が削除され、
第1引数の位置に第3引数の`Iterable` が挿入されます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

final Iterable iterable = ['バナナ', 'パイナップル'];

fruits.replaceRange(1, 4, iterable);

print(fruits); // [りんご, バナナ, パイナップル, びわ]
```

### retainWhere

`retainWhere`メソッドによって、引数の関数の結果が`false`となる要素が削除されます。

```dart
final list = [1, 2, 3, 4, 5];

list.retainWhere((element) => element > 3);

print(list); // [4, 5]
```

### setAll

`setAll`メソッドによって、
第1引数のインデックスから、第2引数の`Iterable`の要素で要素が上書きされます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

final Iterable iterable = ['バナナ', 'パイナップル'];

fruits.setAll(1, iterable);

print(fruits); // [りんご、バナナ、パイナップル、もも、びわ]
```

### setRange

`setRange`メソッドによって、
第1引数以上、第2引数未満のインデックスの要素が、
第3引数の`Iterable`の要素の一部で上書きされます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

final Iterable iterable = ['バナナ', 'パイナップル', 'メロン'];

fruits.setRange(1, 3, iterable);

print(fruits); // [りんご、バナナ、パイナップル、もも、びわ]
```

第4引数に整数を設定するとその整数のインデックスを最初として、
`Iterable`の要素が上書きされます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

final Iterable iterable = ['バナナ', 'パイナップル', 'メロン'];

fruits.setRange(1, 3, iterable, 1);

print(fruits); // [りんご, パイナップル, メロン, もも, びわ]
```

### shuffle

`shuffle`メソッドによってリストの要素の順番がランダムに入れ替わります。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

fruits.shuffle();

print(fruits); // [もも, ぶどう, みかん, びわ, りんご]
```

引数に`Random`のインスタンスを設定することが可能です。

### singleWhere

`singleWhere`メソッドは、
第1引数の関数の実行結果が`true`となる要素が1つだけだった場合、その要素を返します。
複数存在する場合はエラーとなります。
`true`となるものがなかった場合、`orElse`に設定した関数が呼ばれます。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'ぶどう'];

final result = fruits.singleWhere((element) => element == 'もも');

print(result); // もも

// final result2 = fruits.singleWhere((element) => element == 'ぶどう'); // 実行時エラー

final result3 = fruits.singleWhere(
  (element) => element == 'マンゴー',
  orElse: () => 'なし',
);

print(result3); // なし
```

### skip

`skip`メソッドは、
引数に指定された数の要素が、`List`の始めから削除された`Iterable`を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.skip(2);

print(result); // (みかん, もも, かき)
```

引数の数が`List`の要素数より大きい場合は、空の`Iterable`を返します。

### skipWhile

`skipWhile`メソッドは、
`List`の要素の最初から引数の関数の実行結果が`false`となるまで、
引数の関数の実行結果が`true`を返す要素を削除した`Iterable`を返します。

```dart
final list = [1, 2, 3, 4, 5];

final result = list.skipWhile((value) => value
すべての要素で引数の関数の実行結果が`true`となる場合は、
空の`Iterable`を返します。

### sort

`sort`メソッドは、
引数の関数の結果に応じて`List`の要素の順番を入れ替えます。

```dart
final list = [1, 3, 5, 2, 4];

list.sort((a, b) => b.compareTo(a));

print(list); // [5, 4, 3, 2, 1]
```

引数に何も設定されない場合、
要素が比較可能であれば、`(a, b) => a.compareTo(b)`が実行されます。
(数値の場合、上記で昇順にソートされます。)

### sublist

`subList`メソッドは、
第1引数以上、第2引数未満のインデックスの要素で作られた`List`を返します。
第2引数が省略された場合、`List`の最後の要素までで作成された`List`を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final subFruits1 = fruits.sublist(1, 3);

print(subFruits1); // [ぶどう, みかん]

final subFruits2 = fruits.sublist(1);

print(subFruits2); // [ぶどう, みかん, もも, かき]
```

### take

`take`メソッドは、
`List`の始めの要素から引数に指定された数の要素で作成された`Iterable`を返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.take(3);

print(result); // (りんご, ぶどう, みかん)
```

### takeWhile

`takeWhile`メソッドは、
`List`の要素の最初から引数の関数の実行結果が`false`となるまで、
引数の関数の実行結果が`true`を返す要素で作成された`Iterable`を返します。

```dart
final list = [1, 2, 3, 4, 5];

final result = list.takeWhile((value) => value ['りんご', 'ぶどう', 'みかん', 'もも', 'ぶどう'];

final result = fruits.toSet();

print(result); // {りんご, ぶどう, みかん, もも}
```

`Set`とは中の要素に重複のない集合のことです。

### toString

`toString`メソッドは、
`List`を文字列化したものを返します。

```dart
final fruits = ['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.toString();

print(result); // [りんご, ぶどう, みかん, もも, かき]
```

### where

`where`メソッドは、
引数の関数の実行結果が`true`となる要素で作られた`Iterable`を返します。

```dart
final list = [1, 2, 3, 4, 5];

final result = list.where((element) => element > 3);

print(result); // (4, 5)
```

`true`となる要素がない場合、空の`Iterable`を返します。

### whereType

`whereType`メソッドは、
`<>`で指定した型を持つ`List`の要素で作られた`Iterable`を返します。

```dart
final list = [1, 2.4, 'a', 4.5, 5];

final result = list.whereType();

print(result); // (1, 5)
```

## まとめ

Dart (Flutter) で頻出する、`List` についての解説しました。
`List`の作成方法から、用意されているメソッドまで、
用意されているほぼ全てを解説しました。

いかがだったでしょうか？

ほぼ全てに実行例のコードをつけていますので、
辞書的に本記事を使っていただければと思います。

ぜひ、本記事をあなたのアプリ開発に役立ててください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/10/20）

`List`についての解説記事でした。

本記事で参考にしたのはAPIのドキュメントです。（[こちら](https://api.dart.dev/be/180791/dart-core/List-class.html)）

APIドキュメントにはそのメソッドの解説や、場合によっては実行例が載っているので、
今回の記事の作成にあたって非常に役に立ちました。

もし、あなたがDart のコードの理解を深めたいならば、
これらのAPIドキュメントや、
そのコードのFlutter/Dart側の実装のコメントを読むことをオススメします。

英語で書かれているので、
日本語での説明を随時、週刊Flutter大学では補完として追加していければと思います。

このクラス(ウィジェット)を紹介してほしい等あれば、
Flutter大学内でお声がけいただくか、
[Twitter](https://twitter.com/Aoi_Umigishi) まで、ご意見ご要望をお寄せください。

お待ちしております。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。