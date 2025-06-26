---
title: "【Flutter】splash画面の作成"
author: "shimano"
description: ""
pubDatetime: 2023-03-16T16:41:48.000Z
tags: ["UI/レイアウト"]
---

## splash画面

MShareというアプリを作る際に調べたので、やり方を解説したいと思います！

splash画面とは、アプリを起動した時、最初に画面中央に表示されるページことです。

![](https://blog.flutteruniv.com/wp-content/uploads/2023/03/IMG_4915-473x1024.png)

とても、簡単に作ることができますので、実装して良いアプリを作成していきましょう！

### flutter\_native\_splash

[flutter\_native\_splash](https://pub.dev/packages/flutter_native_splash)は使用することで、起動中にデータを読み込む必要がある場合に、ユーザーに待機中であることを知らせるのに役立てることができます！

### flutter\_native\_splashの追加

[flutter\_native\_splash](https://pub.dev/packages/flutter_native_splash)のサイトから、Installingを選んでいただきます。

![](https://blog.flutteruniv.com/wp-content/uploads/2023/03/スクリーンショット-2023-03-17-1.01.20-1024x598.png)

With Flutterに書いてあるこちらのコマンドをターミナルで実行してください。

```
 flutter pub add flutter_native_splash
```

すると、自動的にプラグインがダウンロードされたかと思います。

### 使用する画像を管理するファイル及び画像の追加

プロジェクト直下にassets/imagesを作っていきます

![](https://blog.flutteruniv.com/wp-content/uploads/2023/03/スクリーンショット-2023-03-15-17.30.04.png)

作成できましたら、使いたい画像をドラッグ&ドロップでimagesの中に追加していきましょう！

### pubspeck.yamlで使用する画像のpassを通す

使いたい画像をimage\_pathに指定しましょう！

```
flutter_native_splash:
  image: 'assets/images/splash_icon.png' 
```

また、colorを指定することで、スプラッシュ画面の背景色を変更することができます

```
color: "#00bfff"
```

＊背景色はカラーコードで選択してください。

使う際はこちらのコードをpubspeck.yamlのflutter\_native\_splash内に追記しましょう！

指定できましたら、下記コマンドを実行しましょう。

```
flutter pub pub run flutter_native_splash:create
```

上手くいけばスプラッシュ画面が実装できていると思います！