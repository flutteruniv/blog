---
title: "【 slide_to_act 】スライドで決定するボタンを実装しよう【flutter】"
description: ""
pubDatetime: 2022-07-27T14:51:35.000Z
categories: ["package"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

slide\_to\_act ってどんなパッケージなんだろう？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

スライドで決定するボタンを実装したいんだけれど、  
簡単に実装する方法が知りたいわ！

本記事ではそんな疑問、要望にお答えします。

スライドして決定するボタンを実装できるパッケージ、[slide\_to\_act](https://pub.dev/packages/slide_to_act) パッケージを紹介します。

このパッケージによって以下のGIFのようなUIを簡単に実装することが可能です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/20220722_slide_to_act_top-1024x169.gif)

ぜひ読んでみて下さい！

## 基本的な使い方

### 準備

まず準備として、パッケージのインストールと、  
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて  
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add slide_to_act
```

#### パッケージのインポート

UIを構築するDartファイルの上部に以下のインポート文を追加し、  
パッケージをインポートします。

```dart
import 'package:slide_to_act/slide_to_act.dart';
```

### 実装

実装方法について解説します。

実装したい場所に、  
`SlideAction Widget`を配置します。  
この時、`onSubmit` プロパティにスライドが完了した際に実行したい処理を記載します。

```dart
              SlideAction(
                onSubmit: () {
                  // スライドした時に実行したい処理を記載する
                },
              ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/20220722_slide_to_act_base_sin.gif)

基本的な使い方は以上です！

## 各種設定

`SlideAction` `Widget`の各プロパティを設定することで、  
どのような設定ができるのか紹介します。

### 形、配置関連

`height` プロパティでスライダーの高さを変更できます。  
`sliderButtonYOffset`でスライドするボタンの左右の初期位置を変更可能です。  
また、`borderRadius`プロパティでスライダーの外側の半径を変更できます。

```dart
              SlideAction(
                height: 200,
                sliderButtonYOffset: 100,
                borderRadius: 10,
                onSubmit: () {
                  // スライドした時に実行したい処理を記載する
                },
              ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-27-23.22.10.png)

`alignment`プロパティで`Widget`全体の位置を調整できます。

### 色関連

`innerColor`プロパティでスライドする丸の色を、  
`outerColor`プロパティで周囲の色を変更できます。

```dart
              SlideAction(
                innerColor: Colors.green,
                outerColor: Colors.deepPurple,
                onSubmit: () {
                  // スライドした時に実行したい処理を記載する
                },
              ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-27-22.52.34.png)

`elevation` プロパティで周囲につく影の大きさを変更できます。

```dart
              SlideAction(
                elevation: 16,
                onSubmit: () {
                  // スライドした時に実行したい処理を記載する
                },
              ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-27-23.27.24.png)

### アイコン関連

`submittedIcon`プロパティで、スライド完了時のアイコンを設定できます。  
また、`sliderButtonIcon`にてスライドするボタン内のアイコンを設定できます。  
さらに、`sliderButtonIconPadding`でスライドするボタン内のアイコンのPaddingを設定可能です。

```dart
              SlideAction(
                submittedIcon: const Icon(Icons.gpp_good),
                sliderButtonIcon: const Icon(Icons.arrow_forward_ios),
                sliderButtonIconPadding: 0,
                onSubmit: () {
                  // スライドした時に実行したい処理を記載する
                },
              ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/20220722_slide_to_act_icon.gif)

`sliderButtonIcon`を設定せずに`sliderButtonIconSize`を設定すると、  
スライドするボタン内のアイコンのサイズを変更することができます。

```dart
              SlideAction(
                sliderButtonIconSize: 40,
                onSubmit: () {
                  // スライドした時に実行したい処理を記載する
                },
              ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-27-23.06.36.png)

### 動き関連

`sliderRotate`プロパティでスライドする際にアイコンを回転させるか制御できます。  
`animationDuration`プロパティでアニメーションの時間を調整できます。  
`reversed`を`true`にすると、スライド方向を逆方向に変更できます。

```dart
              SlideAction(
                sliderRotate: false,
                animationDuration: const Duration(seconds: 1),
                reversed: true,
                onSubmit: () {
                  // スライドした時に実行したい処理を記載する
                },
              ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/20220722_slide_to_act_base_reverse.gif)

### 表示する文字関連

`text`プロパティでスライダーに表示する文字列を変更でき、  
`textStyle`プロパティで文字列の`textStyle`を変更可能です。

```dart
              SlideAction(
                text: 'スライドして決定！',
                textStyle: const TextStyle(color: Colors.red),
                onSubmit: () {
                  // スライドした時に実行したい処理を記載する
                },
              ),
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-27-23.39.01.png)

また、`child`プロパティで表示する文字列の代わりに自分の好きな`Widget`を設定できます。

## まとめ

本記事では、スライドして決定するボタンを実装できるパッケージ、[slide\_to\_act](https://pub.dev/packages/slide_to_act) パッケージを紹介しました。

いかがだったでしょうか？

スライドして何かを実行したい際にピッタリのパッケージだと思います。

ぜひ本記事を参考に実装に挑戦してみて下さい！

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/7/27）

slide\_to\_actパッケージについての解説記事でした。

slide\_to\_actパッケージを見つけたのは、以下のYouTubeがきっかけでした。

https://youtu.be/B6f5tayCtUU

こちらの方は定期的にFlutterのチュートリアル的な動画を出していてとても勉強になります。

今後も良いものは参考にしていきたいですね。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。