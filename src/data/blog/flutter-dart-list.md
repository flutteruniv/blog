---
title: "【 Dart 】 List の使い方 【 Flutter 】"
description: ""
pubDatetime: "2022-10-20"
author: "Aoi"
tags:
  - "Flutter"
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---


「Dart の List の使い方を知りたい！」



本記事ではそんな要望にお答えします。



Dart (Flutter) で頻出する、List についての解説記事です。Listの作成方法から、用意されているメソッドまで、用意されているほぼ全てを解説します。



辞書的に使える記事となっています。



ぜひ読んで使ってみてください！ 



List とは



Listとは、ある要素数を持った、順序付けられたオブジェクトの集合です。



Listの集合は角括弧("[ ]") で囲って表現されます。



以下は、 文字列(String) のListの例です。







この集合のポイントは、何番目かという数字(インデックス)が各要素に対応付けられていることです。これが「順序付けられた」という意味となります。



これをコードで表すと、以下のようになります。上記Listをfluitsという変数に格納した例となります。



List<String> fruits = ['りんご', 'ぶどう', 'みかん'];



List の横に山括弧で型を指定することで、そのListに保存するオブジェクトの型を指定することができます。



上記例ではString （文字列）を指定しています。




以下のような書き方も可能です。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];




要素の取り出し



Listは順序付けられているので、インデックスを指定して要素を取り出すことができます。変数名[インデックス] で 要素が取り出せます。



上のfluitsの例で1のインデックスを持つ要素は以下のようにして取り出せます。



print(fruits[1]); // = ぶどう




print()は中身をログとして表示してくれるメソッドとなります。




List の作り方(コンストラクタ)



Listの作り方(Listに用意されているコンストラクタの使い方)を解説していきます。



List.empty



List.empty()で空のListが生成されます。



final emptyList = List<String>.empty();

print(emptyList); // []




変数への格納時(インスタンス生成時)はListの型を指定する必要があります。





List.empty には、growableという名前付き引数が存在します。これについては次の注釈にて説明します。




List.filled



List.filled で、第1引数にて指定された長さ（要素数）を持つ、要素がすべて第2引数 のListを生成することができます。



以下は、長さ3, 要素がすべて'りんご'のListを生成している例です。



final apples = List.filled(3, 'りんご'); 

print(apples); // [りんご, りんご, りんご]




List.filled には、growableという名前付き引数が存在します。これについて解説します。



List.filledで作られるListは長さが固定のListです。(Fixed-length list)長さ固定のListの長さを上書きしたり、要素を追加したりすることは、実行時にエラーとなります。



final apples = List.filled(3, 'りんご');
apples.length = 2; // 実行時エラー
apples.add('みかん') // 実行時エラー







上記リストで要素の追加等で長さを変えたい時に使うのがgrowableです。growableをtrueにすることで自由の効くList (Growable list)となり、上記コードでもエラーとならなくなります。




List.from



List.from で Iterable型を持つ要素からListを生成します。



final Iterable<int> iterable = [1, 2, 3];

final list = List<int>.from(iterable);

print(list); // [1, 2, 3]




Iterable型とは、Listと同じく要素の集合を表す型で、変数名[インデックス]で値を取り出せない（[]の演算子が定義されていない、というエラーとなる）特徴があります。（参考）





List.from で作成されるListは、Growable listです。名前付き引数growableをfalseにすることでFixed-length listにすることができます。




List.generate



List.generate で 第1引数の長さを持ち、第2引数で設定した要素の生成関数に従って生成された要素を持つListを生成します。



final list = List.generate(3, (int index) => index * 2);

print(list); // [0, 2, 4]




List.generate で作成されるListは、Growable listです。名前付き引数growableをfalseにすることでFixed-length listにすることができます。




List.of



List.of で Iterable型を持つ要素からListを生成します。



final Iterable<int> iterable = [1, 2, 3];

final list = List<int>.of(iterable);

print(list); // [1, 2, 3]




List.of とList.fromはほぼ同じですが、生成元の型に対する保証の点で異なります。詳細はこちらを御覧ください。




List.unmodifiable



List.unmodifiable で Iterable型を持つ要素からListを生成します。



final Iterable<int> iterable = [1, 2, 3];

final list = List<int>.unmodifiable(iterable);

print(list); // [1, 2, 3]




List.unmodifiable で生成したListは、長さや要素の変更が一切できないListとなります。具体的には以下のコードが実行時エラーとなります。



list[1] = 5;








List のプロパティ



Listに用意されているプロパティを一部解説します。



first



firstプロパティでListの最初の要素を取得します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.first;

print(result); // りんご
 
fruits.first = 'バナナ';  // 要素の上書きも可能



isEmpty



isEmptyプロパティでそのListが空であるかどうかを取得します。空であればtrueとなります。



final emptyList = List<String>.empty();

final result = emptyList.isEmpty;

print(result); // true



isNotEmpty



isNotEmptyプロパティでそのListが空でないかどうかを取得します。空でなければtrueとなります。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.isNotEmpty;

print(result); // true



last



lastプロパティでそのList の最後の要素を取得します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.last;

print(result);  // 'みかん'

fruits.last = 'バナナ';  // 要素の上書きも可能



length



length プロパティでそのListの長さ(要素数)を取得します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.length; 

print(result); // 3



reversed



reversed プロパティでそのList を逆順にしたIterableを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.reversed;  

print(result); // (みかん, ぶどう, りんご)




後述する.toList() で再度List化することができます。




single



singleプロパティで そのListの要素が一つだけか判定し、一つだけならその要素を取得します。



final fruits = <String>['りんご'];

final result = fruits.single;

print(result); // りんご




複数の要素がある場合または要素がない場合はエラーとなります。




List のメソッド



Listに用意されているプロパティを一部解説します。



add



addメソッドにより、Listの一番最後に引数の要素が追加されます。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

fruits.add('バナナ');

print(fruits);  // [りんご, ぶどう, みかん, バナナ]



addAll



addAll メソッドにより、Listの一番最後に引数のIterableがすべて追加されます。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final Iterable<String> iterableFruits = ['バナナ', 'マンゴー'];

fruits.addAll(iterableFruits);

print(fruits); // [りんご, ぶどう, みかん, バナナ, マンゴー]



any



any メソッドは、要素ごとに引数の関数を実行し、一つでもtrueとなるものがあればtrueを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.any((element) => element == 'ぶどう');

print(result); // true



asMap



asMapメソッドは、Listをインデックスと要素の組にした、要素の追加等ができないMap型のオブジェクトを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.asMap();

print(result); // {0: りんご, 1: ぶどう, 2: みかん}




Map型とはキーと値のペアの集合の型です。上記例では整数をキーとし、値を文字列で保持するMapとなります。




clear



clearメソッドにより、Listのすべての要素を削除され、要素数が0となります。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

fruits.clear();

print(fruits);  // []



contains



containsメソッドは、引数のオブジェクトがListの要素に含まれているかどうかをbool型で返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.contains('ぶどう');

print(result); // true



elementAt



elementAtメソッドは、引数のインデックスのListの要素を返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.elementAt(1);

print(result); // ぶどう



every



everyメソッドは、要素ごとに引数の関数を実行し、すべてtrueであればtrueを返します。



final list = <int>[2, 4, 6];

final result = list.every((element) => element.isEven);

print(result); // true



expand



expandメソッドは、Listの要素を0個、または複数の要素を持つIterableに変換し、そのそれぞれの境界を無くしたIterableとして保持します。



final list = <int>[1, 2, 3];

final iterable =
    list.expand((element) => [element, element]);

print(iterable); // (1, 1, 2, 2, 3, 3)



fillRange



fillRangeメソッドにより、第1引数以上、第2引数未満のインデックスを持つ要素が、第3引数の値で上書きされます。



final list = <int>[1, 2, 3, 4, 5];

list.fillRange(1, 3, 7);

print(list); // [1, 7, 7, 4, 5]



firstWhere



firstWhereメソッドは、第1引数の関数の実行結果がtrueとなる最初の要素を返します。trueとなるものがなかった場合、orElseに設定した関数が呼ばれます。



final list = <int>[1, 2, 3, 4, 5];

final result1 = list.firstWhere((element) => element > 3);

print(result1); // 4

final result2 = list.firstWhere((element) => element > 5, orElse: () => 0);

print(result2); // 0



fold



foldメソッドは、第1引数に初期値とし、第2引数の関数をその関数の以前の実行結果（初回は初期値）とlistの要素で実行し、すべての要素で実行されるまで繰り返し、得られた実行結果を返します。



final list = <int>[1, 2, 3, 4, 5];

final result = list.fold<int>(
  0,
  (previousValue, element) => previousValue + element,
); // 15

print(result);




上記コードでは、以下の計算が行われます。



初期値0 + インデックス0の要素1 = 1前の実行結果1 + インデックス1の要素2 = 3前の実行結果3 + インデックス2の要素3 = 6前の実行結果6 + インデックス3の要素4 = 10前の実行結果10 + インデックス4の要素5 = 15



よって15となります。




followedBy



followedByメソッドは、引数のIterableをListの最後に結合したIterableを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final Iterable<String> iterableFruits = ['バナナ', 'マンゴー'];

final result = fruits.followedBy(iterableFruits);

print(result); // (りんご, ぶどう, みかん, バナナ, マンゴー)



forEach



forEachメソッドは、Listのそれぞれの要素に対し引数の関数を実行します。



final list = <int>[1, 2, 3];

list.forEach((element) {
  final number = element * 2;
  print(number);
}); // 2 4 6




上記の場合forEachよりもforループが推奨されます。(参考)for とinを使うことで、Listのそれぞれの要素に対し{}内の処理を実行します。



final list = <int>[1, 2, 3];

for (final element in list) {
  final number = element * 2;
  print(number);
} // 2 4 6




getRange



getRangeメソッドは、第1引数以上のインデックスを持ち、第2引数未満のインデックスを持つ要素達を新たなIterableとして返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.getRange(1, 3);

print(result); // (ぶどう, みかん)



indexOf



indexOfメソッドは、第1引数の要素をListの要素の中で検索して最初に見つかったもののインデックスを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.indexOf('ぶどう');

print(result); // 1




第1引数の要素がListの中に見つからない場合は-1が返されます。





第2引数にて、検索開始インデックスを指定することができます。




indexWhere



indexWhereメソッドは、第1引数の関数の実行結果がtrueとなる要素を探索し、最初にtrueとなったもののインデックスを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.indexWhere((element) => element == 'ぶどう');

print(result); // 1




第1引数の関数の実行結果がtrueになるものがListの中に見つからない場合は-1が返されます。





第2引数にて、検索開始インデックスを指定することができます。




insert



insertメソッドによって、第1引数のインデックスに第2引数の要素が挿入されます。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

fruits.insert(1, 'バナナ');

print(fruits); // [りんご, バナナ, ぶどう, みかん]



insertAll



insertAllメソッドによって、第1引数のインデックスに第2引数のIterableが挿入されます。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final Iterable<String> iterable = ['バナナ', 'パイナップル'];

fruits.insertAll(1, iterable);

print(fruits); // [りんご, バナナ, パイナップル, ぶどう, みかん]



join



joinメソッドは、Listの要素を文字列(String)化し、それらを結合した文字列(String)を返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.join();

print(result); // りんごぶどうみかん




引数に文字列と文字列の間の区切りの文字(記号)を設定することができます。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.join('と');

print(result); // りんごとぶどうとみかん




lastIndexOf



lastIndexOfメソッドは、第1引数の要素をListの要素の中で検索して最後に見つかったもののインデックスを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'ぶどう'];

final result = fruits.lastIndexOf('ぶどう');

print(result); // 3




第1引数の要素がListの中に見つからない場合は-1が返されます。





第2引数にて、検索開始インデックスを指定することができます。




lastIndexWhere



lastIndexWhereメソッドは、第1引数の関数の実行結果がtrueとなる要素を探索し、最後にtrueとなったもののインデックスを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'ぶどう'];

final result = fruits.lastIndexWhere((element) => element == 'ぶどう');

print(result); // 3




第1引数の関数の実行結果がtrueになるものがListの中に見つからない場合は-1が返されます。





第2引数にて、検索開始インデックスを指定することができます。




lastWhere



lastWhereメソッドは、第1引数の関数の実行結果がtrueとなる最後の要素を返します。trueとなるものがなかった場合、orElseに設定した関数が呼ばれます。



final list = <int>[1, 2, 3, 4, 5];

final result1 = list.lastWhere(
  (element) => element > 3,
);

print(result1); // 5

final result2 = list.lastWhere(
  (element) => element > 5,
  orElse: () => 0,
);

print(result2); // 0



map



mapメソッドは、Listの要素を引数の関数で変換した結果の集合のIterableを返します。



final list = <int>[1, 2, 3];

final result = list.map((element) => element * 2);

print(result); // (2, 4, 6)



reduce



reduceメソッドは、2つの要素を処理して1つの値に変換する、引数の関数を繰り返し、最終的に出力された値を返します。



final list = <int>[1, 2, 3];

final result = list.reduce((value, element) => value + element);

print(result); // 6




上記コードでは、以下の計算が行われます。



インデックス0の要素1 + インデックス1の要素2 = 3前の実行結果3 + インデックス2の要素3 = 6



よって6となります。





Listの要素が1つのときは、引数の関数は実行されずその要素が返されます。





fold とは異なり、最終結果の型は要素の型と同じである必要があります。




remove



removeメソッドは、引数のオブジェクトをListの中から探索し、最初に見つかったものを削除してtrueを返します。見つからなかった場合、falseを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.remove('ぶどう');

print(result); // true

print(fruits); // [りんご, みかん]



removeAt



removeAtメソッドは、引数のインデックスの要素を削除し、削除した要素を返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.removeAt(1);

print(result); // ぶどう

print(fruits); // [りんご, みかん]



removeLast



removeLastメソッドは、Listの最後の要素を削除し、削除した要素を返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん'];

final result = fruits.removeLast();

print(result); // みかん

print(fruits); // [りんご, ぶどう]



removeRange



removeRangeメソッドによって、第1引数以上、第2引数未満のインデックスを持つ要素が削除されます。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

fruits.removeRange(1, 3);

print(fruits); // [りんご, 'もも', 'びわ']



removeWhere



removeWhereメソッドによって、引数の関数の実行結果がtrueとなる要素が削除されます。



final list = [1, 2, 3, 4, 5];

list.removeWhere((element) => element.isEven);

print(list); // [1, 3, 5]



replaceRange



replaceRange メソッドによって、第1引数以上、第2引数未満のインデックスを持つ要素が削除され、第1引数の位置に第3引数のIterable が挿入されます。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

final Iterable<String> iterable = ['バナナ', 'パイナップル'];

fruits.replaceRange(1, 4, iterable);

print(fruits); // [りんご, バナナ, パイナップル, びわ]



retainWhere



retainWhereメソッドによって、引数の関数の結果がfalseとなる要素が削除されます。



final list = <int>[1, 2, 3, 4, 5];

list.retainWhere((element) => element > 3);

print(list); // [4, 5]



setAll



setAllメソッドによって、第1引数のインデックスから、第2引数のIterableの要素で要素が上書きされます。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

final Iterable<String> iterable = ['バナナ', 'パイナップル'];

fruits.setAll(1, iterable);

print(fruits); // [りんご、バナナ、パイナップル、もも、びわ]



setRange



setRangeメソッドによって、第1引数以上、第2引数未満のインデックスの要素が、第3引数のIterableの要素の一部で上書きされます。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

final Iterable<String> iterable = ['バナナ', 'パイナップル', 'メロン'];

fruits.setRange(1, 3, iterable);

print(fruits); // [りんご、バナナ、パイナップル、もも、びわ]




第4引数に整数を設定するとその整数のインデックスを最初として、Iterableの要素が上書きされます。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

final Iterable<String> iterable = ['バナナ', 'パイナップル', 'メロン'];

fruits.setRange(1, 3, iterable, 1);

print(fruits); // [りんご, パイナップル, メロン, もも, びわ]




shuffle



shuffleメソッドによってリストの要素の順番がランダムに入れ替わります。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'びわ'];

fruits.shuffle();

print(fruits); // [もも, ぶどう, みかん, びわ, りんご]




引数にRandomのインスタンスを設定することが可能です。




singleWhere



singleWhereメソッドは、第1引数の関数の実行結果がtrueとなる要素が1つだけだった場合、その要素を返します。複数存在する場合はエラーとなります。trueとなるものがなかった場合、orElseに設定した関数が呼ばれます。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'ぶどう'];

final result = fruits.singleWhere((element) => element == 'もも');

print(result); // もも

// final result2 = fruits.singleWhere((element) => element == 'ぶどう'); // 実行時エラー

final result3 = fruits.singleWhere(
  (element) => element == 'マンゴー',
  orElse: () => 'なし',
);

print(result3); // なし



skip



skipメソッドは、引数に指定された数の要素が、Listの始めから削除されたIterableを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.skip(2);

print(result); // (みかん, もも, かき)




引数の数がListの要素数より大きい場合は、空のIterableを返します。




skipWhile



skipWhileメソッドは、Listの要素の最初から引数の関数の実行結果がfalseとなるまで、引数の関数の実行結果がtrueを返す要素を削除したIterableを返します。



final list = <int>[1, 2, 3, 4, 5];

final result = list.skipWhile((value) => value < 3);

print(result); // (3, 4, 5)




すべての要素で引数の関数の実行結果がtrueとなる場合は、空のIterableを返します。




sort



sortメソッドは、引数の関数の結果に応じてListの要素の順番を入れ替えます。



final list = <int>[1, 3, 5, 2, 4];

list.sort((a, b) => b.compareTo(a));

print(list); // [5, 4, 3, 2, 1]




引数に何も設定されない場合、要素が比較可能であれば、(a, b) => a.compareTo(b)が実行されます。(数値の場合、上記で昇順にソートされます。)




sublist



subListメソッドは、第1引数以上、第2引数未満のインデックスの要素で作られたListを返します。第2引数が省略された場合、Listの最後の要素までで作成されたListを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final subFruits1 = fruits.sublist(1, 3);

print(subFruits1); // [ぶどう, みかん]

final subFruits2 = fruits.sublist(1);

print(subFruits2); // [ぶどう, みかん, もも, かき]



take



takeメソッドは、Listの始めの要素から引数に指定された数の要素で作成されたIterableを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.take(3);

print(result); // (りんご, ぶどう, みかん)



takeWhile



takeWhileメソッドは、Listの要素の最初から引数の関数の実行結果がfalseとなるまで、引数の関数の実行結果がtrueを返す要素で作成されたIterableを返します。



final list = <int>[1, 2, 3, 4, 5];

final result = list.takeWhile((value) => value < 3);

print(result); // (1, 2)



toList



toListメソッドは、自身をListに変換したものを返します。引数のgrowableをfalseにすることで、Fixed-length listとすることができます。



toSet



toSetメソッドは自身をSetに変換したものを返します。Listの要素の中に重複があれば、それらの1つだけを残すよう要素が削除されます。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'ぶどう'];

final result = fruits.toSet();

print(result); // {りんご, ぶどう, みかん, もも}




Setとは中の要素に重複のない集合のことです。




toString



toStringメソッドは、Listを文字列化したものを返します。



final fruits = <String>['りんご', 'ぶどう', 'みかん', 'もも', 'かき'];

final result = fruits.toString();

print(result); // [りんご, ぶどう, みかん, もも, かき]



where



whereメソッドは、引数の関数の実行結果がtrueとなる要素で作られたIterableを返します。



final list = <int>[1, 2, 3, 4, 5];

final result = list.where((element) => element > 3);

print(result); // (4, 5)




trueとなる要素がない場合、空のIterableを返します。




whereType



whereTypeメソッドは、<>で指定した型を持つListの要素で作られたIterableを返します。



final list = [1, 2.4, 'a', 4.5, 5];

final result = list.whereType<int>();

print(result); // (1, 5)



まとめ



Dart (Flutter) で頻出する、List についての解説しました。Listの作成方法から、用意されているメソッドまで、用意されているほぼ全てを解説しました。



いかがだったでしょうか？



ほぼ全てに実行例のコードをつけていますので、辞書的に本記事を使っていただければと思います。



ぜひ、本記事をあなたのアプリ開発に役立ててください。



本記事があなたのアプリ開発の一助となれば幸いです。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










編集後記（2022/10/20）




Listについての解説記事でした。



本記事で参考にしたのはAPIのドキュメントです。（こちら）



APIドキュメントにはそのメソッドの解説や、場合によっては実行例が載っているので、今回の記事の作成にあたって非常に役に立ちました。



もし、あなたがDart のコードの理解を深めたいならば、これらのAPIドキュメントや、そのコードのFlutter/Dart側の実装のコメントを読むことをオススメします。



英語で書かれているので、日本語での説明を随時、週刊Flutter大学では補完として追加していければと思います。



このクラス(ウィジェット)を紹介してほしい等あれば、Flutter大学内でお声がけいただくか、Twitter まで、ご意見ご要望をお寄せください。



お待ちしております。





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

