---
layout: "../../layouts/BlogPost.astro"
title: "【Flutter】サイトの画像を表示する"
description: ""
pubDatetime: "2023-03-26"
author: shimano
slug: "image-network"
featured: false
draft: false
tags: ["Flutter"]
ogImage: ""
---

## サイトの画像を表示する

## 今回の手順

1.使いたい画像のurlをとってくる
2.urlを記述する

## 使いたい画像のurlをとってくる

画像アドレスをコピーを選択。

## urlを記述する

appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        child: Image.network(
            'https://1.bp.blogspot.com/-SWOiphrHWnI/XWS5x7MYwHI/AAAAAAABUXA/i_PRL_Atr08ayl9sZy9-x0uoY4zV2d5xwCLcBGAs/s1600/pose_dance_ukareru_man.png'),
      ),

Image.network（）の部分に先ほど取ってきた画像をペーストする

参考記事

[https://qiita.com/yu124choco/items/a2710ec004d3425a2a0b](https://qiita.com/yu124choco/items/a2710ec004d3425a2a0b)