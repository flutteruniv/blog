---
title: "【Flutter】カメラで物を検出しよう！【 edge_detection 】"
slug: "flutter-package-edge-detection"
author: "Aoi"
description: ""
pubDatetime: "2022-04-22"
tags: ["Package"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/ojisan.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutterで、カメラで物体の検出ってできるのかな？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/obasan.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      難しい設定せずに楽に実装したいわ！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

本記事ではそんな疑問、要望にお答えします。

カメラで物の端を検出し、切り取って写真を撮ることのできるパッケージ、
edge_detection パッケージを紹介します。

edge_detection パッケージを使うと、以下のgifのような動作が実装可能です。

![](/images/wp-content/uploads/2022/04/20220422_edge_detection_sample.webp)

しかも、実装はとても簡単です！

ぜひ本記事を読んで、実装してみてください。

## edge_detection パッケージ

![](/images/wp-content/uploads/2022/02/プログラミング画像.webp)

edge_detection パッケージはその名の通り、
Flutterでカメラを起動し、
物体の端を検知してその物体の大きさで画像を切り取る事のできるパッケージです。

パッケージの紹介ページは以下となります。

https://pub.dev/packages/edge_detection

## 基本的な使い方

![](/images/wp-content/uploads/2022/03/パソコン.webp)

基本的な使い方とサンプルコードについて解説します。

### 準備

edge_detectionパッケージを使用するにあたり、いくつか設定が必要となります。

#### iOSの設定

まず、対象とするiOSのバージョンを10.0以上にする必要があります。

`ios`フォルダ内の`Podfile` の2行目の `platform`の行のコメントアウトを解除し、10.0以上に設定してください。

```
platform :ios, '10.0'
```

`Podfile`が存在しない場合は、一度iOSのシミュレータにてアプリを実行してください。

次に、カメラの利用の設定をします。

`ios/Runner/Info.plist`に、以下の`key`を追加してください。

```
NSCameraUsageDescription
カメラの利用を許可してください
```

iOSの設定は以上となります。

#### Android の設定

まず、kotlinのバージョンの確認です。

`android/build.gradle` の`kotlin_version`を確認してください。

パッケージの推奨のバージョンは1.5.31ですが、
1.6.10でも現在自分は動作を確認できています。

どちらかで設定してください。

```
ext.kotlin_version = '1.5.31'
```

次に、`minSdkVersion` を21以上に設定します。

`android/app/build.gradle` の `minSdkVersion` を 21以上に設定してください。

```
minSdkVersion 21
```

以上でAndroid 側の設定も完了となります。

#### パッケージのインストール

Flutter側の設定として、パッケージをインストールします。

`pubspec.yaml`の`dependencies`に`edge_detection`パッケージを追加してください。

```
dependencies:
  edge_detection: ^1.0.9
```

パッケージのバージョンは以下のパッケージ紹介ページを確認ください。

https://pub.dev/packages/edge_detection

### 実装

#### パッケージのインポート

実装したいDartファイルに以下の文を追加し、パッケージをインポートしましょう。

```
import 'package:edge_detection/edge_detection.dart';
```

#### 物体検出のカメラの呼び出しメソッド

物体検出のカメラは以下のメソッドで呼び出せます。

```
EdgeDetection.detectEdge;
```

このメソッドは`Future<String?>`の返り値をもつメソッドで、
撮影した画像ファイルの保存場所のパスを返します。

Flutter側で行うのはこのメソッドを呼び出すだけで、
物体の検出、撮影、画像の保存は全てパッケージが行ってくれます。
とても簡単ですよね！

### サンプルコード

最後に、実装コードを紹介します。

```
import 'dart:io';

import 'package:edge_detection/edge_detection.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: EdgeDetectionSample(),
    );
  }
}

class EdgeDetectionSample extends StatefulWidget {
  const EdgeDetectionSample({Key? key}) : super(key: key);

  @override
  State createState() => _EdgeDetectionSampleState();
}

class _EdgeDetectionSampleState extends State {
  //撮影した画像の保存パスを保持する状態を定義
  String? _imagePath;

  Future getImage() async {
    String? imagePath;

    //撮影時のエラーをtry - catch でハンドリング
    try {
      imagePath = await EdgeDetection.detectEdge;
    } on PlatformException catch (e) {
      imagePath = e.toString();
    }

    //撮影し、保存が終わったらsetStateで画面を更新
    setState(() {
      _imagePath = imagePath;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('EdgeDetection Sample'),
      ),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(
              child: ElevatedButton(
                //ボタンを押した際に画像を取得メソッドを呼び出す
                onPressed: getImage,
                child: const Text('Scan'),
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            const Text('Cropped image path:'),
            Text(
              //保存した画像のパスを表示
              _imagePath.toString(),
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 14),
            ),
            Visibility(
              visible: _imagePath != null,
              child: Padding(
                padding: const EdgeInsets.all(8),
                //保存した画像を表示
                child: Image.file(
                  File(_imagePath ?? ''),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

本サンプルコードは大部分をパッケージの`Example`を参考にしています。

実機にてアプリを実行後、ボタンを押してカメラを起動してみてください。

目の前の物を検知する様子が見て取れるかと思います。

## まとめ

![](/images/wp-content/uploads/2022/02/コーディング男性.webp)

本記事では、カメラで物の端を検出し、切り取って写真を撮ることのできるパッケージ、
edge_detection パッケージを紹介しました。

とても難しそうな画像認識、検知がこんなに簡単な実装で実現できるなんて、
驚きですよね！

実際に使ってみて、使い勝手を見て貰えればと思います。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://youtu.be/ddrBQMfc6nA

## 編集後記（2022/4/22）

本記事では、カメラでの物の検出を実装できるパッケージを紹介しました。

この記事の作成に当たり、手元で確認を行うのですが、
とても簡単に実装できる上に、ちゃんと物を検出できるので、とても驚きました。

Kotlin , Swift でのネイティブの機能の実装方法を覚えておくと、
こんなにも自由度の高いパッケージを作成できるようになるのだ、と感動しました。

自分も今回のパッケージのように、人を驚かせるような実装、
パッケージを提供したいものです。

まずはFlutterの基本からしっかり学んで、
一つ一つできるようにしていきます。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
