---
title: "【 Icon 】アイコンを実装しよう！ 【 Flutter 】"
description: ""
pubDatetime: "2022-11-25"
author: "Aoi"
tags:
  - "Flutter"
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---


「アイコンをUIに表示させたい！」



本記事ではそんな要望にお答えします。



Flutterでボタンや装飾として用いる記号のウィジェット、Icon ウィジェットの紹介を行います。



基本的な使い方からカスタマイズ方法まで詳しく解説します。



ぜひ読んでみてください！



基本的な使い方



表示させたい場所にIcon ウィジェットを配置し、引数に表示させたいアイコンのIconDataを設定します。



Flutter create で作成したアプリの状態では、IconDataとして、マテリアルデザインのIcons.~と、iOSのデザインのCupertinoIcons.~が使えます。







        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(Icons.share),
            SizedBox(
              height: 16,
            ),
            Icon(CupertinoIcons.share),
          ],
        ),



ソースコード全体
import 'package:flutter/cupertino.dart';
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
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(Icons.share),
            SizedBox(
              height: 16,
            ),
            Icon(CupertinoIcons.share),
          ],
        ),
      ),
    );
  }
}





カスタマイズ方法



Iconウィジェットのカスタマイズ方法について解説していきます。



サイズ



sizeプロパティでアイコンのサイズを設定することができます。







        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(
              Icons.man,
              size: 40,
            ),
            SizedBox(
              height: 16,
            ),
            Icon(
              Icons.man,
            ),
          ],
        ),



色



colorプロパティにでアイコンの色を設定することができます。







Icon(
  Icons.share,
  color: Colors.green,
),



影



shadowsプロパティにShadowインスタンスを設定することで、アイコンに影をつけることができます。







Icon(
  Icons.man,
  shadows: [
    Shadow(
      color: Colors.blue,
      blurRadius: 10,
    ),
  ],
),



方向



textDirectionプロパティで一部アイコンで用意されている向き（文字が左から右に書くか、アラビア文字のように右から左に書くか）に応じた表示を設定することができます。







        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(
              Icons.arrow_back,
              textDirection: TextDirection.ltr,
            ),
            SizedBox(
              height: 16,
            ),
            Icon(
              Icons.arrow_back,
              textDirection: TextDirection.rtl,
            ),
          ],
        ),



読み上げ内容



semanticLabelプロパティにてデバイスの音声読み上げ機能実行時に読み上げるアイコンの説明を設定することができます。



Icon(
  Icons.arrow_back,
  semanticLabel: 'Back',
),



まとめ



本記事ではFlutterでボタンや装飾として用いる記号のウィジェット、Icon ウィジェットの紹介を行いました。



基本的な使い方からカスタマイズ方法まで詳しく解説しました。



いかがだったでしょうか？



Iconは簡単にUIにワンポイントを設定できるウィジェットです。



今回紹介したカスタマイズ方法でカスタマイズし、自分だけのアイコンを表現してみてください！



本記事があなたのアプリ開発の一助となれば幸いです。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










編集後記（2022/11/25）




Iconについての記事でした。



このIconを使用したウィジェットに、IconButtonウィジェットがあります。



その名の通り、アイコンをボタン化するウィジェットです。



このウィジェットについては以下の記事で詳しく解説をしています。




https://blog.flutteruniv.com/flutter-iconbutton/




ぜひ併せて読んでみてください！





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

