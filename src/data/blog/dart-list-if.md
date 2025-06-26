---
title: "【 Dart 】 List の中で if 文を使おう！【 Flutter 】"
slug: "dart-list-if"
description: ""
pubDatetime: "2022-12-27"
author: "Aoi"
tags: ["Package"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---


「条件によってを分岐させて中身が一部違うListを作りたいんだけど、いい方法ないかな？」



あります！



以前Listの定義文の中でfor文が使えることを紹介しましたが、実はif文も使用可能なんです！



本記事では、if 文による条件分岐を用いてListを定義する方法について紹介します。



Flutterでの使用例も併せて紹介します。



ぜひ読んでみてください！



List の定義文の中でif文を使う



とある変数の値に応じて、Listの中の一部の値を含めるか含めないか条件分岐してListを定義したいとします。



例えば、このような例です。



  const flag = false;

  List<String> list;

  if (flag) {
    list = ['a', 'b', 'c'];
  } else {
    list = ['a', 'c'];
  }

  print(list); // [a, c]



今はListの要素が3個しか無いのでそんなに手間ではないように見えますが、５個だったり10個だったりして、変わる部分が1個だけだとすると、ちょっと冗長に見えますよね。



このコードが、Listの中のif文での条件分岐を用いることにより、以下のように書くことができます。



  const flag = false;

  final list2 = [
    'a',
    if (flag) 'b',
    'c',
  ];

  print(list2); // [a, c]



Listの定義文の中でif文を使って'b'を含めるか含めないか条件分岐することができています。



このように、Listの定義文の中でif文は使用可能です。



また、以下のようにif-elseでの条件分岐も可能です。



  const flag = false;

  final list3 = [
    'a',
    if (flag) 'b' else 'B',
    'c',
  ];

  print(list3); // [a, B, c]



さらに、三項演算子を用いた条件分岐も可能となっています。



  const flag = false;

  final list4 = [
    'a',
    flag ? 'b' : 'B',
    'c',
  ];

  print(list4); // [a, B, c]



複数個条件分岐を含むことも可能です。



  const flag = false;

  final list5 = [
    if (!flag) 'a',
    if (flag) 'b',
    if (!flag) 'c',
  ];

  print(list5); // [a, c]



以上、Listの中でのif文の使用の例でした。



Flutterでの使用例



Flutterでの使用例を解説します。



3の倍数だけ激しく主張する（カウントの後ろに'!!!!!!!!'がつく）カウンターアプリを作ってみます。







Rowのchildrenプロパティに配置するListにて、以下のようにif文を利用して書くことで、上のアプリが実現できます。



children: [
  Text('$counter'),
  if (counter % 3 == 0) const Text('!!!!!!!!')
],



サンプルコード全体は以下になります。



import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyWidget(),
    );
  }
}

class MyWidget extends StatefulWidget {
  const MyWidget({super.key});

  @override
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  int counter = 1;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('List if Sample'),
      ),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: () {
          setState(() {
            counter++;
          });
        },
      ),
      body: DefaultTextStyle(
        style: const TextStyle(
          fontSize: 30,
          color: Colors.black,
        ),
        child: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('$counter'),
              if (counter % 3 == 0) const Text('!!!!!!!!')
            ],
          ),
        ),
      ),
    );
  }
}




まとめ



本記事では、if 文による条件分岐を用いてListを定義する方法について紹介しました。



Flutterでの使用例も併せて紹介しました。



いかがだったでしょうか？



ColumunやRow等でif文を用いて、Widgetを表示、非表示にする方法は一つの方法として、覚えておいて損はないかと思います。



ぜひあなたのアプリで活用してみてください！



本記事があなたのアプリ開発の一助となれば幸いです。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










編集後記（2022/12/25）




Listの定義文の中でifを使おうという主旨の記事でした。



Flutterに関して、ウィジェットの表示非表示の方法には、Visibilityを使う等、さまざまな方法があります。



一体どの方法をつかえば良いのでしょうか？



この点について、検証を含めて詳細に解説された記事を見つけましたので紹介します。




https://qiita.com/miyakeso/items/ba8b5125828ba5da9407








記事内では4つの方法について比較、検証されて紹介がなされています。今回紹介したifを使う方法もその中の１つとして紹介されています。



結論はこれが絶対良い、というものはなく、用途や条件による、というものなのですが、どのようなときにどの方法を使えばよいのかまで記載がなされているので、ぜひ上の記事を読んでいただければと思います。



ウィジェットの表示、非表示についてのコラムでした。





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

