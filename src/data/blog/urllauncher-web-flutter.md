---
title: "【 url_launcher 】アプリからWEBページを開こう！【 Flutter 】"
description: ""
pubDatetime: 2023-01-04T10:00:00.000Z
categories: ["package"]
---

**「アプリのボタンをタップしたら自分のHPに移動するようにしたい！」**

本記事ではそんな要望にお答えします。

アプリから特定のURLのWEBページを開く方法として、  
[url\_launcher](https://pub.dev/packages/url_launcher) パッケージを利用した方法を紹介します。

url\_launcher パッケージでの  
アプリから電話の発信画面やメールの送信画面に移動する方法も併せて紹介します。

ぜひ読んでみてください！

## 特定のURLのWEBページを開く方法

[url\_launcher](https://pub.dev/packages/url_launcher) パッケージを利用した、  
アプリから特定のURLのWEBページを開く方法を紹介します。

### 準備

まず準備として、パッケージのインストールと、  
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて  
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add url_launcher
```

#### パッケージのインポート

実装したいDartファイルの上部に以下のインポート文を追加し、  
パッケージをインポートします。

```dart
import 'package:url_launcher/url_launcher.dart';
```

### 実装

実装方法を紹介します。

以下のコードで開きたいWEBページのURL を`URI`として取得します。

```dart
final url = Uri.parse('https://blog.flutteruniv.com/');
```

`launchUrl`メソッドを実行することで、URLのWEBページヘ移動する処理を呼び出します。

```dart
launchUrl(url);
```

以下のサンプルコードではボタンを押すと週刊Flutter大学のトップページに移動する  
アプリを紹介しています。

サンプルコード全体

```dart
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyWidget(),
    );
  }
}

class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            final url = Uri.parse('https://blog.flutteruniv.com/');
            launchUrl(url);
          },
          child: const Text('週刊Flutter大学を表示'),
        ),
      ),
    );
  }
}
```

簡潔な説明のため今回のサンプルコードでは  
URLが開けない際のエラーハンドリング等を省略しています。

特定のURLのWEBページを開く方法は以上です！

## 電話の発信画面やメールの送信画面に移動する方法

url\_launcherパッケージを利用した、  
電話の発信画面やメールの送信画面に移動する方法を紹介します。

Android, iOSのアプリを対象として紹介します。

iOSの場合、シミュレーターではなく実機でアプリを実行する必要があります。

### 電話の発信画面に移動する方法

`URI`を以下のように設定することで、電話の発信画面に移動することができます。

```dart
final uri = Uri.parse('tel:+**-**-****-****'); //*は数字
```

この`URI`を`launchUrl`すれば電話の発信画面に移動するかを尋ねる表示を表示することができます。

### メールの送信画面に移動する方法

`URI`を以下のように設定することで、電話の発信画面に移動することができます。

```dart
final uri = Uri.parse('mailto:********@******.***?subject=件名&body=本文'); 
```

`**************.***`はメールアドレスを、  
`subjetct=`の後にメールの件名を、  
`body=`の後にメールの本文を記載することができます。  
この`URI`を`launchUrl`すればメールの送信画面に移動することができます。

`canLaunchUrl` というメソッドで、  
引数の`URI`で開くアプリが存在するかを検証することができます。  
（例えばWEBページのリンクなら、  
ブラウザアプリが１つ以上存在するか、等）

このメソッドを使うには`AndroidManifest.xml`等にて設定が必要です。  
詳細は[url\_launcher](https://pub.dev/packages/url_launcher) のReadmeを御覧ください。

## まとめ

アプリから特定のURLのWEBページを開く方法として、  
[url\_launcher](https://pub.dev/packages/url_launcher) パッケージを利用した方法を紹介します。

url\_launcher パッケージでの  
アプリから電話の発信画面やメールの送信画面に移動する方法も併せて紹介します。

アプリから特定のURLを開いたり、  
お問い合わせ先の電話をかけることができたり、  
メールをすることができたりするアプリは、かなり便利だと思っています。

ぜひ、url\_launcherパッケージを使用して実装してみてください！

本記事があなたのアプリ開発の一助となれば幸いです。  

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2023/1/4）

url\_launcher についての記事でした。

このパッケージはかなり良くて、  
twitterアプリを開く、なんてことも可能だったりします。

以前共同開発した『つみあげったー』というアプリで、  
url\_launcherを用いてツイート機能を実装しました。

共同開発といえば第11期の共同開発のキックオフが本日20:00から実施されます。

以下のYouTubeリンクから誰でも視聴可能ですので、  
是非見ていただければと思います。

https://youtu.be/DnPRIOfYKrA

以上、編集後記でした。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。