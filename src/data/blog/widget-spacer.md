---
title: "【 Spacer 】隙間を埋めるWidgetを使おう！【 Flutter 】"
slug: "widget-spacer"
description: ""
pubDatetime: "2022-11-18"
author: "Aoi"
tags: ["Widget"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---


「レイアウトを上手く調整したい！」



本記事ではそんな要望にお答えします。



レイアウトの隙間を埋めて上手く調整するのに有用なウィジェットである、Spacerウィジェットについて解説します。



基本的な使い方から、調整方法まで詳しく解説します。



ぜひ読んでみてください！



基本的な使い方



Column やRow にSpacer ウィジェットを配置することで、子と画面の隙間を埋めるようにスペースが設定されます。







class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          children: [
            const Spacer(),
            Container(
              width: 200,
              height: 200,
              color: Colors.red,
            ),
          ],
        ),
      ),
    );
  }
}



Rowでも同様に子と画面の差分の隙間をSpacerが埋めます。







class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Row(
          children: [
            const Spacer(),
            Container(
              width: 200,
              height: 200,
              color: Colors.red,
            ),
          ],
        ),
      ),
    );
  }
}



Spacerを2つ配置すると、1つのSpacerの大きさは、子と画面の間の隙間を2等分した大きさになります。







class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Row(
          children: [
            const Spacer(),
            const Spacer(),
            Container(
              width: 200,
              height: 200,
              color: Colors.red,
            ),
          ],
        ),
      ),
    );
  }
}



これを利用することで、この両端に同じ大きさのスペースをSpacerで設定することができます。







class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Row(
          children: [
            const Spacer(),
            Container(
              width: 200,
              height: 200,
              color: Colors.red,
            ),
            const Spacer(),
          ],
        ),
      ),
    );
  }
}



基本的な使い方は以上となります！



調整方法



flexプロパティにて数値を設定することで、Spacerを含むExpandedされたウィジェットがRow(Column)の中に複数ある際に、どれだけの大きさをSpacerが占有するかを設定することができます。



以下は、２つあるSpacerの片方にflex : 2を設定した例です。何も設定しない場合 flex : 1のため、結果として隙間を1:2に分けていることがわかります。







class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Row(
          children: [
            const Spacer(),
            Container(
              width: 200,
              height: 200,
              color: Colors.red,
            ),
            const Spacer(
              flex: 2,
            ),
          ],
        ),
      ),
    );
  }
}




調整方法は以上となります！



まとめ



本記事では、レイアウトの隙間を埋めて上手く調整するのに有用なウィジェットである、Spacerウィジェットについて解説しました。



基本的な使い方から、調整方法まで詳しく解説しました。



いかがだったでしょうか？



画面の隙間を数値で設定するのでなく、隙間の大きさに応じて設定したい、という時に有用なウィジェットかと思います。



ぜひ利用して、自由自在にレイアウトを作成してみてください！



本記事があなたのアプリ開発の一助となれば幸いです。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










編集後記（2022/11/18）




Spacerウィジェットについての解説記事でした。



隙間を設定するのにSpacer ウィジェットを使うのか、SizedBox ウィジェットを使うのか、はたまたRowやColumnのalignmentプロパティを使うのかは、かなり悩ましいところかと思います。



結局の所、一般的にこうすればいい、というものはなくて、何が決まっているのかに応じて判定すべきです。



例えば隙間の大きさが決まっているときは、SizedBoxウィジェットを使って設定するのが良いです。逆に子の大きさが決まっていて、隙間はよしなに設定してくれ、というのであれば、alignmentプロパティを使うのが良いと思います。この大きさが決まっていて、隙間の大きさが一律でないときは、Spacer のflexで調整するのが良いでしょう。



要件に応じた選択が必要、ということですね。



一つを覚えるのでなくどんな要件が来ても対応できるようにしておくのが良さそうです。



ぜひ使いこなしてみてください！





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

