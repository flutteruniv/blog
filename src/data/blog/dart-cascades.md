---
title: "【 Dart 】カスケード演算子 \" .. \" とは?【 Flutter 】"
description: ""
pubDatetime: "2022-10-26"
author: "Aoi"
tags:
  - "Flutter"
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---


「コードの中で出てくる、" .. " って一体何なんだろう？」



本記事ではそんな疑問にお答えします。



Flutter / Dart で頻出する、 カスケード演算子 " .. "について解説します。



サンプルコードを紹介の上、どのような用途で使うのか詳細に解説します。



ぜひ読んでみてください！



カスケード演算子 " .. "とは



コードリーディング中、以下のようなコードを見たことはありませんか？



myObject..someMethod()
        ..otherMethod();



" .. " に続いてメソッドが並んでいるようなコードです。



ここで使われている" .. " をcascades (カスケード演算子)と呼びます。



役割としては、同じオブジェクトに対するメソッドの実行の省略記法となります。



上記コードは以下のコードと同じこととなります。



myObject.someMethod();
myObject.otherMethod();



myObjectの繰り返しを省略できるわけですね。



以上がカスケード演算子の概要となります。



カスケード演算子 " .. " の特徴、テクニック



カスケード演算子での特徴、テクニックについて紹介します。



値を返さない



myObject..someMethod()
        ..otherMethod();



上記コードのsomeMethodがint型の値を返すものだとしましょう。普通の"."で実行すれば、値を返すメソッド、ということになります。



一方、カスケード演算子で実行されたメソッドは、値を返さない、という特徴があります。



下記のコードで、UserDataクラスにtoStringメソッドを使ってString化をしていますが、カスケード演算子での実行のため、dataにはStringは返されず、userDataが代入されるのみとなります。



class UserData {}

void main() {
  final userData = UserData();
  final dataA = userData.toString();
  final dataB = userData..toString();

  print(dataA.runtimeType); // String
  print(dataB.runtimeType); // UserData
}





runtimeType メソッドで実行元のオブジェクトの型を知ることができます。




フィールドへの値の連続代入



カスケード演算子を使うと、以下のようなフィールドへの値の連続代入が可能です。



class UserData {
  String? name;
  int? age;
  String? from;
}

void main() {
  final userData = UserData();

  userData
    ..name = "Aoi"
    ..age = 30
    ..from = "Chiba";

  print(userData.name); // Aoi
  print(userData.age); // 30
  print(userData.from); // Chiba
}





上記コードは10行目のuserDataを省略して、以下のように書くこともできます。



class UserData {
  String? name;
  int? age;
  String? from;
}

void main() {
  final userData = UserData()
    ..name = "Aoi"
    ..age = 30
    ..from = "Chiba";

  print(userData.name); // Aoi
  print(userData.age); // 30
  print(userData.from); // Chiba
}





null-shorting なカスケード演算子



以下のようなコードを考えます。



Data? data = fetchData();
data?.someMethod;
data?.otherMethod;




"?."は条件付きプロパティアクセス演算子です。演算子の左側がnullのとき、右側の処理が実行されません。（参考）




このコードをnull-shorting なカスケード演算子" ?.. "を使って次のように書き換えることが可能です。



Data? data = fetchData();
  ?..someMethod;
  ..otherMethod;



最初にnull-shorting なカスケード演算子で演算子の左側のnullの判定をし、nullなら右側の処理を実行しない、(その後のカスケード演算子の処理も実行しない)というようにできます。



まとめ



本記事ではFlutter / Dart で頻出する、 カスケード演算子 " .. "について解説しました。



サンプルコードを紹介の上、どのような用途で使うのか詳細に解説しました。



いかがだったでしょうか？



自分で使わないにしろ、人の書いたコードや内部コードで出てき得る演算子となっています。



ぜひ、「これってなんだっけ？」となった時には本記事の内容を参照してみてください。



本記事があなたのアプリ開発の一助となれば幸いです。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










参考




https://dart.dev/codelabs/dart-cheatsheet#cascades




編集後記（2022/10/26）




最近、こちら の、Dartの公式ドキュメントを読むことが多くなりました。



記事ネタを探すのも目的の一つですが、公式ドキュメントを読むのが正しい情報の取得方法として純粋に一番だと思うからです。



Dartのドキュメント全体の日本語化はまだされていないですが、CodeLab 等のチュートリアルの一部は日本語化されています。



例えば以下のチュートリアルではクラスの基本的な書き方等を学ぶことができます。




https://developers.google.com/codelabs/from-java-to-dart#0








Javaを学んだことがある人向けのため、基本用語等が少々難しいですが、勉強にはなるかと思います。



公式ドキュメント内のチュートリアル紹介ページは知見の宝庫だと思っています。



ぜひ読んでみて、知識を身につけてみてください。





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

