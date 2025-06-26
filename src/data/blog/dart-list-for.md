---
title: "【 Dart 】 List の中で for 文を使おう！【 Flutter 】"
slug: "dart-list-for"
description: ""
pubDatetime: "2022-12-07"
author: "Aoi"
tags: ["Widget"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---


「1 ~ 50の数字が要素のListを定義したいんだけど、手打ちでやるの面倒すぎるな...」



待ってください！



意外と知られていないかもですが、Listの定義文の中ではfor文による繰り返しが可能なんです。



本記事では、for 文による繰り返しを用いてListを定義する方法について紹介します。



Flutterでの使用例も併せて紹介します。ぜひ読んでみてください！



List の定義文の中でfor文を使う



 1 ~ 10 の要素が入ったリストを定義したいとします。このコードは以下のように書けます。



final list = [1,2,3,4,5,6,7,8,9,10];



では1 ~ 50ではどうでしょうか？



この書き方だと、ちょっと大変ですよね。



そこで使用するのが、Listの定義文の中でのfor文です。



具体的には以下のようにして1 ~ 50 の要素が入ったListが定義できます。



final list = [for (int i = 1; i < 51; i++) i];



1 ~ 50 を手打ちするよりずっと簡単ですよね。



ポイントとしては、通常for文にある中括弧"{}"がないことです。forの定義文の後に中括弧なしで要素の定義をします。



以上が、for文による繰り返しを用いたListの定義でした。



Flutterでの使用例



Flutterでの使用例を解説します。1 ~ 50 の数字の2乗を表示するListViewを作成してみます。



Listの要素の定義文は以下で書けます。



final list = [for (int i = 1; i < 51; i++) Text('${i * i}')];



このTextWidget のListを使ったアプリの実行結果が以下になります。







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

class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    final list = [for (int i = 1; i < 51; i++) Text('${i * i}')];

    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(8),
          child: ListView(
            children: list,
          ),
        ),
      ),
    );
  }
}




まとめ



本記事では、for 文による繰り返しを用いてListを定義する方法について紹介しました。



Flutterでの使用例も併せて紹介しました。



いかがだったでしょうか？



for文の中が1行で済む(要素の定義文以外を含まない)ような簡単な場合には、今回の手法はコードが短くなってかなり有用かと思います。



使うチャンスがあれば、ぜひ使用してみてください！



本記事があなたのアプリ開発の一助となれば幸いです。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










編集後記（2022/12/7）




この記事を書いていて、「そもそも[]中でforを有効にしている部分はどこにあるんだろう？」と、気になりました。



Dartの内部というか、言語の定義部分の話になります。



Dartという言語がどのようにして言語として成り立っていて、その言語の定義というのはどこにあるのか、という話です。



例えば、classやimportといった本当に基本的な定義だったり、1+1 = 2 になるプログラム上の定義だったりです。



Dartファイルとしてどこかにあるのか、それとも変換したバイナリ言語で定義されているのか。



Dart言語のコンパイルの仕組みに対してもまだまだ知識が浅いと感じました。



このあたりを知識深めて、記事化できれば良いな、と思います。



いつになるかはわかりませんが、気長にお待ちいただければ幸いです。





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

