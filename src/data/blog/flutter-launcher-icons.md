---
layout: "../../layouts/BlogPost.astro"
title: "【Flutter】アプリアイコンを変える"
description: ""
pubDatetime: "2023-03-15"
author: shimano
slug: "flutter-launcher-icons"
featured: false
draft: false
tags: ["Flutter"]
ogImage: ""
---

## アプリアイコン

今回は、Flutterのアプリアイコンの変更の仕方について解説していこうと思います。

プラグインを使って、アプリアイコンをより魅力的なものにしていきましょう！

### **flutter_launcher_icons **

 [flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons) を使用することで、iOSおよびAndroidの両方のプラットフォームにおいて、アプリアイコンの変更を簡単かつ一貫性のある方法で行うことができます。アプリアイコンの各サイズや解像度を手動で生成する必要がなく、スクリプトが自動的に生成してくれるため、開発者はアプリアイコンの設定に時間を費やすことなく、より多くの時間を開発に注ぐことができます！

では、早速説明していこうと思います！

### **flutter_launcher_iconsの追加**

プロジェクト内の、pubspeck.yamlという場所に直接書く方法もありますが、今回はターミナルから追加する方法をやってみようと思います！[flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons) のサイトから、Installingを選んでいただきます。

![](/images/wp-content/uploads/2023/03/スクリーンショット-2023-03-15-17.12.53-1024x765.png)

With Flutterに書いてあるこちらのコマンドをターミナルで実行してください。

```
flutter pub add flutter_launcher_icon
```

すると、自動的にプラグインがダウンロードされたかと思います。

### 使用する画像を管理するファイル及び画像の追加

プロジェクト直下にassets/imagesを作っていきます

<img src="/images/wp-content/uploads/2023/03/スクリーンショット-2023-03-15-17.30.04.png" alt="" width="300">

作成できましたら、使いたい画像をドラッグ&ドロップでimagesの中に追加していきましょう！

### pubspeck.yamlで使用する画像のpassを通す

```
#  追加
flutter_icons:
  android: true
  ios: true
  image_path: "assets/images/app_icon.png"
```

このような形で使いたい画像をimage_pathに指定しましょう！

指定できましたら、下記コマンドを実行しましょう。

```
flutter pub run flutter_launcher_icons:main
```

うまくいけばアイコンが変わっていると思います！

![](/images/wp-content/uploads/2023/03/IMG_4885-1024x732.jpg)

### その他細かな設定

flutter_launcher_iconsは他にも追加の設定オプションを提供してくれています。例えば、アプリアイコンにカスタムの背景色を設定したり、アイコンの背景画像をカスタマイズすることができます！

先ほど同様使用する方はpubspeck.yamlの方に追記していきましょう！

アプリアイコンの背景色の変更

```
adaptive_icon_background: "#ffffff"
```

アイコンの背景画像を変更する

```
adaptive_icon_background: "assets/images.〇〇png"
```