---
title: "【Flutter】 余白 の付け方【padding,margin】"
description: ""
pubDatetime: "2022-06-08"
author: "Aoi"
tags:
  - "Flutter"
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---



Widgetに 余白 をつけるには、一体どうしたら良いんだろう？





padding とか margin とか、違いがわからないわ！




本記事ではそんな疑問にお答えします。



FlutterでのWidgetの間の余白の付け方を解説します。Containerのmargin,padding, Padding Widgetでの余白の付け方の違いから、EdgeInsetsの種類まで詳細に解説します。



ぜひ読んでみてください！



余白の付け方







上の画像をご覧ください。



ピンクの大きな枠の中に水色の枠があり、その中に「text」という文字が表示されています。



ピンクの枠と水色の枠の間、水色の枠とTextの文字の間に余白が無い状態です。これらに余白を付ける方法を3パターン紹介します。



Containerのmargin



１つ目の方法は、Containerのmargin(マージン)で余白を付ける方法です。この方法では、以下の画像のようにmarginを設定したContainerの周りに余白が付きます。



水色のContainerに50のmarginを設定した例



コードは以下のようになります。



                Container(
                  height: 300,
                  width: 300,
                  color: Colors.red[200],
                  child: Stack(
                    children: [
                      Container(
                          margin: EdgeInsets.all(５０),
                          color: Colors.blue[200],
                          child: const Text(
                            'text',
                            style: TextStyle(fontSize: 30),
                          ),
                      ),
                    ],
                  ),
                ),




EdgeInsets.all(50)は長方形の各辺4方向に50の余白を与える、という意味となります。詳細は後述します。




Containerのpadding



2つ目の方法は、Containerのpadding(パディング)で余白を設定する方法です。この方法では、以下の画像のようにpaddingを設定したContainerの内部に余白が設定されます。



水色のContainerに50のpaddingを設定した例



コードはこちらです。



                Container(
                  height: 300,
                  width: 300,
                  color: Colors.red[200],
                  child: Stack(
                    children: [
                      Container(
                          padding: EdgeInsets.all(５０),
                          color: Colors.blue[200],
                          child: const Text(
                            'text',
                            style: TextStyle(fontSize: 30),
                          ),
                      ),
                    ],
                  ),
                ),




marginは外側に、paddingは内側に余白がつく、と覚えておきましょう！




Padding Widget のpadding



3つ目の方法は、余白を付けたいWidgetをPadding Widgetで囲い、padding プロパティで余白を設定する方法です。



この方法では、以下の画像のようにPadding Widgetで囲んだContainerの周りに余白が付きます。



水色のContainerをPaddingで囲い、50のpaddingを設定した例



コードはこちらです。



                Container(
                  height: 300,
                  width: 300,
                  color: Colors.red[200],
                  child: Stack(
                    children: [
                      Padding(
                        padding: EdgeInsets.all(50),
                        child: Container(
                          color: Colors.blue[200],
                          child: const Text(
                            'text',
                            style: TextStyle(fontSize: 30),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),




「paddingなのに外側に余白がつくの？」と不思議に思うかもしれません。



確かにContainerからしたらmargin（外側の余白）がつくように見えますが、外側のPadding Widgetからするとちゃんとpadding（内側の余白）がついています。



Containerの周りにPadding Widgetの薄い膜が張られ、このPadding Widgetのpadding(内側)で余白が設定されるイメージです。



ちょっと複雑ですが、上記イメージで覚えておきましょう！




上の3つの方法を実際に数値を変更して検証できるDartPadを作成しました。



こちらでぜひ3つの方法をマスターしてみてください！




https://dartpad.dartlang.org/?id=a832253046c11eaefaf62248ae2e516b




EdgeInsetsについて







上ではContainerの長方形4辺全てに同じ値の余白を付ける方法を紹介しました。



では、左側だけ余白を付けたい、といった際はどうすればよいでしょうか？



この章ではEdgeInsetsのコンストラクタをそれぞれ紹介し、4辺それぞれに異なる値を設定する方法等を解説します。



解説するコンストラクタは、以下となります。



EdgeInsets.all(double value)EdgeInsets.fromLTRB(double left, double top, double right, double bottom)EdgeInsets.only({double left = 0.0, double top = 0.0, double right = 0.0, double bottom = 0.0})EdgeInsets.symmetric({double vertical = 0.0, double horizontal = 0.0})




EdgeInsets.fromWindowPadding は使用場所が限定的のため、割愛します。




EdgeInsets.all



1つ目のコンストラクタはEdgeInsets.all(double value)です。



allの名の通り、4辺すべてに同じ値(value)の余白を与えます。



EdgeInsets.fromLTRB



2つ目のコンストラクタは、EdgeInsets.fromLTRB(double left, double top, double right, double bottom)です。



名前無し引数で左、上、右、下の順に値を設定することで、それぞれの方向の余白を設定することができます。



例：EdgeInsets.fromLTRB(0,8,16,24)の場合、左に0,上に8,右に16,下に24の余白が設定されます。



EdgeInsets.only



3つ目のコンストラクタは、EdgeInsets.only({double left = 0.0, double top = 0.0, double right = 0.0, double bottom = 0.0})です。



上のEdgeInsets.fromLTRB とは異なり、名前付き引数で指定したい方向にだけ余白を指定することが可能です。



例:EdgeInsets.only(left:8,top:16) の場合、左に8, 上に16の余白が設定されます。（右と下は余白なし）



EdgeInsets.symmetric



4つ目のコンストラクタはEdgeInsets.symmetric({double vertical = 0.0, double horizontal = 0.0})です。



verticalのプロパティで上と下に同じ値の余白を、horizontalのプロパティで左と右に同じ値の余白をセットで設定することができます。



例:EdgeInsets.symmetric(horizontal:8) の場合、左と右に8の余白が設定されます。（上と下は余白なし）



まとめ







本記事では、FlutterでのWidgetの間の余白の付け方を解説しました。Containerのmargin,padding, Padding Widgetでの余白の付け方の違いから、EdgeInsetの種類まで詳細に解説しました。



いかがだったでしょうか？



padding と margin の違いはWEB系からFlutterに入った人にとって既知かと思いますが、Padding Widgetについては意外だったかもしれません。



ぜひ本記事で余白の付け方をマスターしてみてください！




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










編集後記（2022/6/8）




余白の付け方についての記事でした。



割愛しましたが、EdgeInsets.fromWindowPadding について調べてみると、Flutter内部のコード構造について知ることができ、とても興味深かったです。



詳細をここで書くとかなり長くなってしまいますので、詳しくはFlutter大学のSlackのtimes_aoi_umigishi チャンネルにて記載します。



興味ある方はぜひ見に来てみてください。



Flutter大学への入会



はこちらから









週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

