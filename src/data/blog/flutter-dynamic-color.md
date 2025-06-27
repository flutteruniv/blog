---
title: "【Flutter】ダイナミックカラーの実装方法【Material You】"
slug: "flutter-dynamic-color"
author: "Aoi"
description: ""
pubDatetime: "2022-06-01"
tags: ["Package"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Material You の ダイナミックカラー 、Flutterで実装するにはどうしたら良いんだろう?
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

本記事ではそんな疑問にお答えします。

Google の推奨するデザインの最新版、
Material You (Material 3) の目玉機能の一つである、
ユーザーの壁紙からキーとなる色を抽出し、
その色を基盤としたカラーテーマでアプリを構成する機能、ダイナミックカラーを、
 Flutterで実装する方法について解説します。

壁紙を変えるとアプリ内の色も変わる、といったなんとも不思議な体験が味わえます。

ぜひ読んで体験してみてください！

本記事はこちらの記事を参考に構成しています。

https://itnext.io/dynamically-theme-your-flutter-app-59da5037f5df

## ダイナミックカラーとは

![](/images/wp-content/uploads/2022/02/コーディング男性.jpeg)

ダイナミックカラーとは、ユーザーの壁紙からキーとなる色を抽出し、
その色を基盤としたカラーテーマでアプリを構成する機能のことです。

Google の推奨するデザインの最新版、
Material You (Material 3) の目玉機能の一つとなっています。

以下のGifがサンプルアプリによるダイナミックカラーの挙動となります。

![](/images/wp-content/uploads/2022/06/dynamic_color_sample.gif)

壁紙の変更により、アプリ内の色が変わっていることを確認できます。

この機能はモバイルだとAndroid のみで利用可能です。
また、Android 12以上（エミュレータだと API 32以上）でないと反映されません。

## ダイナミックカラーの実装方法

![](/images/wp-content/uploads/2022/02/コーディング女性.jpeg)

ここからは具体的な実装方法について解説していきます。

### dynamic_color パッケージのインストール

ダイナミックカラーの機能は[dynamic_color](https://pub.dev/packages/dynamic_color) パッケージによって実装されます。

以下のコマンドをFlutter プロジェクトのルートで実行し、
dynamic_colorパッケージをインストールしてください。

```bash
flutter pub add dynamic_color
```

### dynamic_color パッケージのインポート

`MaterialApp` を実装するファイルに、以下の`import`文を追加してください。

```dart
import 'package:dynamic_color/dynamic_color.dart';
```

### DynamicColorBuilder の用意

`MaterialApp`を以下のように`DynamicColorBuilder`で囲います。

```dart
@override
  Widget build(BuildContext context) {
    return DynamicColorBuilder(
      builder: (ColorScheme? lightDynamic, ColorScheme? darkDynamic) {
        return MaterialApp(
          title: 'Flutter Demo',
          home: const MyHomePage(title: 'Flutter Demo Home Page'),
        );
      },
    );
  }
```

`lightDynamic, darkDynamic`に、壁紙から取ってきて作成された`ColorScheme`が設定されます。

端末がダイナミックカラーに対応していない場合、
これらの`ColorScheme`は`null`となります。

### ダイナミックカラー非対応端末への対応

`lightDynamic, darkDynamic`が`null`許容なのでこのまま`theme`に設定することができません。

以下のメソッドを用意して、
nullの時には予め設定したキーの色の`ColorScheme`となるようにします。

```dart
ThemeData lightTheme(ColorScheme? lightColorScheme) {
  final scheme = lightColorScheme ??
      ColorScheme.fromSeed(seedColor: const Color(0xFFF47C7C));
  return ThemeData(
    colorScheme: scheme,
  );
}

ThemeData darkTheme(ColorScheme? darkColorScheme) {
  final scheme = darkColorScheme ??
      ColorScheme.fromSeed(
        seedColor: const Color(0xFFF47C7C),
        brightness: Brightness.dark,
      );
  return ThemeData(
    colorScheme: scheme,
  );
}
```

### Themeの設定

上記メソッドを使ってダイナミックカラーのThemeを設定します。

```dart
@override
  Widget build(BuildContext context) {
    return DynamicColorBuilder(
      builder: (ColorScheme? lightDynamic, ColorScheme? darkDynamic) {
        return MaterialApp(
          title: 'Flutter Demo',
          theme: lightTheme(lightDynamic),
          darkTheme: darkTheme(darkDynamic),
          home: const MyHomePage(title: 'Flutter Demo Home Page'),
        );
      },
    );
  }
```

以上で設定は完了です。

対象の端末でアプリを実行してみてください。

壁紙によりアプリ内の色が変わる様子が確認できるはずです。

## まとめ

![](/images/wp-content/uploads/2022/03/猫パソコン.jpeg)

Google の推奨するデザインの最新版、
Material You (Material 3) の目玉機能の一つである、
ユーザーの壁紙からキーとなる色を抽出し、
その色を基盤としたカラーテーマでアプリを構成する機能、ダイナミックカラーを、
 Flutterで実装する方法について解説しました。

いかがだったでしょうか？

今後、ダイナミックカラーに対応した端末はどんどん増えていくはずなので、
ぜひこの対応方法を覚えておき、いつでも対応できるよう準備してみてください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/6/1）

ダイナミックカラーについての記事でした。

アプリの色が、壁紙によって変わるなんて、なんだか不思議な気がしますよね。

壁紙の色を取得できることを利用して、
何らかの形でアプリを作れると、面白いかもしれません。

iOSでもこのような機能が追加されるんでしょうか？
楽しみですね。

今後のMaterial Designの進化にも期待しています。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。