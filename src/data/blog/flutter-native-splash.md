---
title: "【Flutter】splash画面の作成"
slug: "flutter-native-splash"
author: "shimano"
description: ""
pubDatetime: "2023-03-16"
tags: ["UI/レイアウト"]
layout: "../../layouts/BlogPost.astro"
---

## splash画面

MShareというアプリを作る際に調べたので、やり方を解説したいと思います！

splash画面とは、アプリを起動した時、最初に画面中央に表示されるページことです。

<img src="http://34.145.4.125/wp-content/uploads/2023/03/IMG_4915-473x1024.png" alt="" width="300">

とても、簡単に作ることができますので、実装して良いアプリを作成していきましょう！

### flutter_native_splash

[flutter_native_splash](https://pub.dev/packages/flutter_native_splash)は使用することで、起動中にデータを読み込む必要がある場合に、ユーザーに待機中であることを知らせるのに役立てることができます！

### flutter_native_splashの追加

[flutter_native_splash](https://pub.dev/packages/flutter_native_splash)のサイトから、Installingを選んでいただきます。

![](http://34.145.4.125/wp-content/uploads/2023/03/スクリーンショット-2023-03-17-1.01.20-1024x598.png)

With Flutterに書いてあるこちらのコマンドをターミナルで実行してください。

```
** **flutter pub add flutter_native_splash
```

すると、自動的にプラグインがダウンロードされたかと思います。

### 使用する画像を管理するファイル及び画像の追加

プロジェクト直下にassets/imagesを作っていきます

<img src="http://34.145.4.125/wp-content/uploads/2023/03/スクリーンショット-2023-03-15-17.30.04.png" alt="" width="300">

作成できましたら、使いたい画像をドラッグ&ドロップでimagesの中に追加していきましょう！

### pubspeck.yamlで使用する画像のpassを通す

使いたい画像をimage_pathに指定しましょう！

```
flutter_native_splash:
  image: 'assets/images/splash_icon.png'
```

また、colorを指定することで、スプラッシュ画面の背景色を変更することができます

```
color: "#00bfff"
```

＊背景色はカラーコードで選択してください。

使う際はこちらのコードをpubspeck.yamlのflutter_native_splash内に追記しましょう！

指定できましたら、下記コマンドを実行しましょう。

```
flutter pub pub run flutter_native_splash:create
```

上手くいけばスプラッシュ画面が実装できていると思います！