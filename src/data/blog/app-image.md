---
layout: "../../layouts/BlogPost.astro"
title: "【Flutter】アプリ内の画像を表示する"
description: ""
pubDatetime: "2023-03-24"
author: shimano
slug: "app-image"
featured: false
draft: false
tags: ["Flutter"]
ogImage: ""
---

## アプリ内の画像表示

今回はアプリ内の画像表示の仕方について解説していこうと思います！

MShareというアプリを作る際に調べたので、やり方を解説したいと思います！

<img src="https://blog.flutteruniv.com/wp-content/uploads/2023/03/IMG_4915-473x1024.png" alt="" width="300">

とても、簡単に作ることができますので、実装して良いアプリを作成していきましょう！

#### 今回の手順

1.assets/imagesに画像を保存する。
2.`pubspec.yaml`を追記する。
3.`pubspec.yaml`で指定したパスでWidgetを配置する。

### 画像を保存する

プロジェクト直下にassets/imagesを作っていきます

<img src="https://blog.flutteruniv.com/wp-content/uploads/2023/03/スクリーンショット-2023-03-24-13.22.24.png" alt="" width="300">

作成できましたら、使いたい画像をドラッグ&ドロップでimagesの中に追加していきましょう！

### `pubspec.yaml`を追記する。

uses-material-designの下に書きましょう！

assets: の部分はpubspec.yamlに元々記述がないので追加しましょう！内容は使いたい画像のパスを指定しましょう

```
flutter:

  # The following line ensures that the Material Icons font is
  # included with your application, so that you can use the icons in
  # the material Icons class.
  uses-material-design: true

  assets:
    - assets/images/transparent_icon.png
```

### `pubspec.yaml`で指定したパスでWidgetを配置する。

Image.assetの（' '）に先ほどpubspec.yamlで記述したパスを指定しましょう！

```
Container(
                  width: 200,
                  child: Image.asset('assets/images/transparent_icon.png')),
```

<img src="https://blog.flutteruniv.com/wp-content/uploads/2023/03/IMG_4959-473x1024.png" alt="" width="300">

するとこのように画像を表示することができます！

参考にした記事

https://qiita.com/yu124choco/items/a2710ec004d3425a2a0b