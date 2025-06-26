---
layout: "../../layouts/BlogPost.astro"
title: "【 Flutter 】おしゃれなフェードアウトアニメーションを実装しよう！"
description: ""
pubDatetime: "2022-06-15"
author: Aoi
slug: "flutter-package-fade-out-particle"
featured: false
draft: false
tags: ["Package", "Flutter"]
ogImage: ""
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)
おしゃれなフェードアウトアニメーションを実装したい！

本記事ではそんな要望にお答えします。

Flutter にておしゃれなフェードアウトアニメーションを実装できるパッケージ、
[fade_out_particle](https://pub.dev/packages/fade_out_particle)** **パッケージを紹介します。

このパッケージを使用すると、アイコンやテキストのWidgetに対し、
以下のようなアニメーションを付けることが可能です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/fade_out_particle_sample.gif)

このパッケージ、海外の技術情報等が集まる掲示板サイト、Redditにて、
投稿されて１日足らずで70以上のUpvoteを集めています！

https://www.reddit.com/r/FlutterDev/comments/vbxqxn/fade_out_particle_is_now_available_for_flutter/

簡単におしゃれなフェードアウトアニメーションを実装できるので、
ぜひ読んでみて下さい！

## 使い方

基本的な使い方について解説します。

今回紹介するパッケージのリンクはこちらです。

https://pub.dev/packages/fade_out_particle

### パッケージのインストール

ターミナル (コマンドプロンプト)を立ち上げ、プロジェクトのルートに移動し、
以下のコマンドを打ちます。

```bash
flutter pub add fade_out_particle
```

もしくは、`pubspec.yaml `ファイルの`dependencies`に以下のコードを追加します。

```yaml
dependencies:
  fade_out_particle: ^1.0.0 #追加
```

### パッケージのインポート

フェードインアニメーションを追加したいWidgetの記述のあるファイルの上の方に、
以下のインポート文を追加します。

```dart
import 'package:fade_out_particle/fade_out_particle.dart';
```

### Widgetの追加

フェードインアニメーションを追加したいWidgetを以下のように、
`FadeOutParticle` `Widget` で囲います。

```dart
FadeOutParticle(
              disappear: true,
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    Icons.check_circle_sharp,
                    size: 52,
                    color: Theme.of(context).primaryColorDark,
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'Fade out Particle',
                    style: Theme.of(context).textTheme.headline2,
                  ),
                ],
              ),
            ),
```

`disappear`プロパティには`bool`型の値を設定でき、
`true`の際は、`Widget`の生成と同時に消失アニメーションが開始されます。

実際に使用する際にはここに`true - false` のフラグを用意し、
切り替えることでアニメーションのオンオフを実装すると良いです（下記のサンプルコード参照）

その他設定できるプロパティは以下となります。

- `duration` : 完全に消えるまでの秒数を管理
- `curve`: アニメーションの仕方（だんだん遅くなる、等）を管理

### サンプルコード

最後にサンプルコードを紹介します。
（大部分をパッケージのexampleから引用しております。）

```dart
import 'package:fade_out_particle/fade_out_particle.dart';
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FadeOutParticle Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State createState() => _HomePageState();
}

class _HomePageState extends State {
  bool _disappear = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            FadeOutParticle(
              disappear: _disappear,
              duration: const Duration(milliseconds: 3000),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    Icons.check_circle_sharp,
                    size: 52,
                    color: Theme.of(context).primaryColorDark,
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'Fade out Particle',
                    style: Theme.of(context).textTheme.headline2,
                  ),
                ],
              ),
            ),
            const SizedBox(
              height: 16,
            ),
            OutlinedButton(
              onPressed: () => setState(() => _disappear = !_disappear),
              child: Text(
                _disappear ? 'Reset' : 'Start',
                style: const TextStyle(fontSize: 30),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

こちらのサンプルコードはFlutter 3.0.2での記載となります。

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事ではFlutter にておしゃれなフェードアウトアニメーションを実装できるパッケージ、
[fade_out_particle](https://pub.dev/packages/fade_out_particle)** **パッケージを紹介しました。

いかがだったでしょうか？

かなりニッチなパッケージだとは思うものの、
このパッケージ自体の実装は350行ほどでできており、
内部コードを読むのもまた、勉強となります。

興味ある方はぜひ読んでみて下さい。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/6/15）

本記事ではアニメーションのパッケージを紹介しました。

自分は、気になるパッケージやWidgetは内部実装を見るようにしています。

内部実装を見ることで、そのパッケージの理解をより深めることができ、
自分が同じようなことを実装する際の力になると考えています。

また、どのプロパティをいじればどこが変わるのかわかるため、
その意味でも勉強になります。

Flutterの理解を深めたい際には、
とても有用な方法かと思っていますので、
ぜひ行ってみて下さい！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。