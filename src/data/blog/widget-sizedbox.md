---
title: "SizedBox の使い方 【Flutter】"
description: ""
pubDatetime: "2022-11-12"
author: "Aoi"
tags:
  - "Flutter"
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---


「 SizedBox の使い方が知りたい！ 」



本記事ではそんな要望にお答えします。



Flutterで頻出するウィジェットの、SizedBox について解説します。



基本的な使い方から、用意されているコンストラクタの紹介まで行います。



ぜひ読んでみてください！



基本的な使い方



SizedBox ウィジェットは、heightで設定した高さ、widthで設定した幅を持つ無色の長方形を用意するウィジェットです。



child にてウィジェットを設定することで、箱で大きさを制限しつつ、設定したウィジェットを箱の中に表示することができます。



SizedBox(
  height: 50,
  width: 100,
  child: Text('a'),
),




height, width, child に対する設定は省略することができます。height, widthのみを設定して、ウィジェット間の距離を空けるのに利用することが可能です。




コンストラクタの紹介



SizedBoxにはいくつかのコンストラクタが用意されています。これらについて紹介します。



SizedBox.expand



SizedBox.expandは親のウィジェットが許す限り最大の大きさの箱を用意するSizedBoxです。height, widthにはそれぞれdouble.infinityが設定されます。



  const SizedBox.expand({ super.key, super.child })
    : width = double.infinity,
      height = double.infinity;



SizedBox.shrink



SizedBox.shrink は高さも幅も0.0の箱を用意するSizedBoxです。height, widthにはそれぞれ0.0が設定されます。



  const SizedBox.shrink({ super.key, super.child })
    : width = 0.0,
      height = 0.0;



SizedBox.fromSize



SizedBox.fromSizeはsizeプロパティにて設定したSizeインスタンスを基にして用意した高さと幅をもつSizedBoxです。height, widthにはそれぞれsizeのheight, widthが設定されます。



  SizedBox.fromSize({ super.key, super.child, Size? size })
    : width = size?.width,
      height = size?.height;



SizedBox.square



SizedBox.square はdimensionプロパティにて設定したdoubleの値を高さと幅に持つ正方形を用意するSizedBoxです。height, widthにはそれぞれdimensionの値が設定されます。



  const SizedBox.square({super.key, super.child, double? dimension})
    : width = dimension,
      height = dimension;



まとめ



本記事ではFlutterで頻出するウィジェットのSizedBoxについて解説しました。



基本的な使い方から、用意されているコンストラクタの紹介まで行いました。



いかがだったでしょうか？



SizedBoxは本当によく利用する基本的なウィジェットとなります。



ぜひ利用方法を覚えて活用してみてください！



本記事があなたのアプリ開発の一助となれば幸いです。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










編集後記（2022/11/12）




SizedBoxについての記事でした。



このようなBox系のウィジェットはContainerを始めとしてColoredBox等、本当に様々なものがあります。



これらについて紹介した上で違いについてまとめられたら良いな、と今回の記事を作成していて思いました。



基礎的な記事のためあまり興味を惹かないかもしれませんが、ぜひお楽しみにしていてください。





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

