---
title: "【2022年最新】 Flutter × Firebase でアプリを作ろう！"
slug: "flutter-firebase"
description: ""
pubDatetime: "2022-05-18"
author: "Aoi"
tags: ["Package"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      複数人でデータを共有するアプリを作りたいんだけれど、
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>
サーバーの用意とか大変そう、、、良い方法ないかな？

本記事ではそんな疑問、要望にお答えします！

誰でも簡単に用意できるバックエンドサービス、Firebaseと、
Flutterを組み合わせた アプリの作成方法について解説します！

2021年末から2022年にかけて、
Flutter × Firebaseのセットアップ方法がとても簡単になっています！

本記事さえ読めば、セットアップの仕方から簡単なアプリの作り方まで、
一気通貫で知ることができます。

ぜひ読んでみてください！

## Firebase とは？

https://firebase.google.com/?hl=ja&gclid=CjwKCAjwj42UBhAAEiwACIhADucUNPI8aU8vYihruiK62aioOfhIV6ZdDBkBsBzKF74rSQokQZ16DhoCSZMQAvD_BwE&gclsrc=aw.ds

Firebase とは、Googleが提供している、
アプリの構築、改善に役立つアプリ開発プラットフォームです。

Firebaseを使うと、一例として以下のようなことが可能です。

- クラウドでのアプリのデータ保存、共有
- ユーザー認証、ログインの実装
- ウェブサイトのデプロイ

これらの機能を使うのに、複雑なサーバー管理等は**必要ありません**。

サーバー管理無しでバックエンドを運用できることがFirebaseの強みです。

本記事ではこのFirebaseのクラウドでのデータ共有機能を使って、
絵馬や七夕の短冊のような願いを投稿し、
その願いを誰でも見れる状態にするアプリをFlutterで作成します。

作成するアプリのgifは以下です。
右側の端末で作成した願いが、左側の端末でも同時に表示されていることがわかります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/firebase_sample.gif)

この記事を読みながら、ぜひ一緒に作成してみてください！

参考：本記事での作成環境は以下の通りです。

- macOS Monterey バージョン12.4
- Google Chrome バージョン: 101.0.4951.64
- Flutter 3.0.0 (Dart 2.17.0)
- Visual Studio Code 1.67.1
- firebase-tools 10.9.2
- flutterfire_cli 0.2.2+2

## Flutter × Firebase のセットアップ

セットアップの全体の手順は以下の通りです。

1. Google Chrome にGoogleアカウントでログイン、コンソールに移動
2. Firebase CLI のインストール
3. FlutterFire CLI のインストール
4. Flutter プロジェクトの立ち上げ
5. firebase_core プラグインのインストール
6. FlutterFire CLI でのFirebaseプロジェクトの立ち上げ、設定
7. main.dart でのFirebase の初期化と設定

Flutterの環境構築ができている前提で進めていきます。
Flutterの環境構築については、以下の記事をご確認ください。

https://blog.flutteruniv.com/flutter-entrance/

### Google Chrome にGoogleアカウントでログイン、コンソールに移動

お持ちのGoogleアカウントで、Google Chromeにログインします。

以下のページにアクセスし、右上のコンソールに移動を押します。

https://firebase.google.com/?hl=ja

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-16.29.38-1024x404.png)

以下のようなFirebase のコンソール画面が開かれていれば、
コンソールへの移動は完了となります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-16.45.44-1024x1002.png)

### Firebase CLI のインストール

Firebase を利用するにあたって、
コマンドラインインターフェース(CLI)をインストールし、
セットアップを行う方法が便利です。

以下のコマンドをターミナルにて実行しFirebase CLI をインストールしてください。

```bash
curl -sL https://firebase.tools | bash
```

インストール後、Firebase CLI にて Firebaseにログインします。
以下のコマンドを打ち、前節にてログインしたGoogle アカウントにて、ログインしてください。

```bash
firebase login
```

以上でFirebase CLI のインストール、設定は完了となります。

参考：

https://firebase.google.com/docs/cli#setup_update_cli

### FlutterFire CLI のインストール

続いてFlutter にFirebase のセットアップをするのに便利なCLIである、
FlutterFire CLI をインストールします。

任意のディレクトリで次のコマンドを実行し、FlutterFire CLIをインストールします。

```bash
dart pub global activate flutterfire_cli
```

以上でFlutterFire CLIのインストールは完了となります。

参考：

https://firebase.google.com/docs/flutter/setup?platform=android

### Flutter プロジェクトの立ち上げ

任意のディレクトリで、Flutter プロジェクトを立ち上げます。

今回は、以下のコマンドにてfirebase_sample というプロジェクトを立ち上げました。

```bash
flutter create firebase_sample
```

以上でFlutterプロジェクトの立ち上げ、設定は完了となります。

### firebase_core プラグインのインストール

Flutter プロジェクトに、Firebaseへの接続を可能にするためのプラグイン、
firebase_core プラグインをインストールします。

Flutter プロジェクトのディレクトリにて以下のコマンドを打って、
firebase_coreプラグインをインストールしましょう。

```
flutter pub add firebase_core
```

VScodeを使用している場合は、Flutterプロジェクトを開き、
[control + shift + ^ ]でターミナルを開けば、
自動的にFlutterプロジェクトに移動したターミナルを利用できます。

インストールと同時に、`generated_plugin_registrant.dart` ファイル
が自動生成されます。

以上でfirebase_core プラグインのインストールは完了となります。

### FlutterFire CLI でのFirebaseプロジェクトの立ち上げ、設定

FlutterFire CLIを使ってFirebaseプロジェクトの立ち上げ、
Flutterプロジェクトとの連携の設定を行います。

ターミナルでFlutterプロジェクトのルートに移動し、
以下のコマンドを実行します。

```bash
flutterfire configure
```

以下の画像のように現在存在するFirebase プロジェクトの一覧が表示されます。
今回はcreate new project をカーソルキー上下で選択し、
Enterを押して新しくプロジェクトを作成します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-18.15.48-1024x127.png)

作成するFirebase プロジェクトの名前を入力するよう求められるため、
好きな名前を入力します。(今回はmy-easy-tutorialとします。)

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-18.25.05-1024x28.png)

次にサポートするプラットフォームを選択します。
カーソルキー上下で移動し、スペースキーでチェックのオンオフを行います。
選択が完了したらEnterを押し、決定します。
(今回はすべてチェックが入った状態で進めます。)

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-18.27.16-1024x120.png)

FirebaseのプロジェクトへFlutterプロジェクトが各プラットフォームごとに登録されます。

登録が完了後、androidのgradleファイルを修正するか問われるため、
yキーを押し、了承します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-18.29.10-1024x30.png)

以上で、FlutterFire CLI を使ったFirebaseのセットアップは完了となります。

設定変数等が記載された`firebase_options.dart`が自動生成されます。

### Firebase の初期化と設定

セットアップの最後です。
`main.dart `にて Firebase の初期化を行いましょう。

`main.dart`に以下のコードを追加し、プラグインと設定ファイルをインポートします。

```dart
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';
```

次にmain.dartのmain関数を以下のように書き換えます。

```dart
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(const MyApp());
}
```

次に`android/app/build.gradle` ファイルを開き、
`minSdkVersion`を以下のように21以上に設定します。

```
defaultConfig {
        applicationId "com.example.firebase_sample"
        minSdkVersion 21
        targetSdkVersion flutter.targetSdkVersion
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
    }
```

最後に、`ios/podfile `の2行目の`platform`の設定を10以上に変更してください。

```
platform :ios, '10'
```

おめでとうございます！
これでFirebaseをFlutterで扱う準備はすべて完了しました！

この準備を基に、次の章からアプリの作成に入りましょう！

## Cloud Firestoreを使ったアプリの作成

Firebaseの機能の一つである、
Cloud Firestoreというクラウドにデータを保存、共有する機能を使って、
絵馬や七夕の短冊のような願いを投稿し、
その願いを誰でも見れる状態にするアプリをFlutterで作成していきます。

### 準備

#### Firebase コンソールでの準備

ブラウザにてFirebase コンソールへ移動し、
FlutterFire CLIにて作成したプロジェクトをクリックし、開きます。

Firebase コンソールに作成したプロジェクトが無い場合、
一度画面をリロードすると表示されます。

開いたプロジェクトにてCloud Firestoreを選択します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-18.56.55-1024x541.png)

データベースの作成を選択します。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-19.00.11-1-1024x941.png" alt="" width="300">

セキュリティルールの選択画面となります。
今回はテスト環境モードで開始する、を選択し次へを押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-19.08.15-1024x740.png)

セキュリティルールとは、Cloud Firestoreのデータに対し、
誰に、読み書きなどどんな権限を持たせるかを設定するものです。

テスト環境では30日以内なら誰でもデータの読み取り、更新、削除が可能となります。
30日を超えると、誰も読み取り、更新、削除ができなくなるため、
それまでにセキュリティルールの更新が必要となります。

データベースを保存するサーバーの所在地を選択します。
今回はasia-northeast1 (東京)を選択し、有効にするを押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-19.08.57-1024x611.png)

以上でCloud Firestoreを使用する準備ができました。

#### cloud_firestore プラグインのインストールとインポート

Flutterプロジェクトのルートにターミナルで移動し、
以下のコマンドを実行して cloud_firestore プラグインをインストールします。

```dart
flutter pub add cloud_firestore
```

インストール後、`main.dart`に以下の文を追加し、
`cloud_firestore`プラグインをインポートします。

```dart
import 'package:cloud_firestore/cloud_firestore.dart';
```

以上でCloud Firestoreを使用する準備は完了となります。

iOSでアプリを実行すると、

`LoadError - dlopen(/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle, 0x0009): tried: '/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle' (mach-o file, but is an incompatible architecture (have 'x86_64', need 'arm64e')) - /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle`

というエラーが出る場合があります。

この場合はFlutterプロジェクトのルートにて、
以下のコマンドを順に実行することで解決します。

`cd ios`
`sudo arch -x86_64 gem install ffi`
`arch -x86_64 pod install`

#### アプリの骨組みの構築

アプリのUIの骨組みを構築していきます。
`main.dart`を以下のように書き換えてください。

```dart
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';

import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

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

class MyWidget extends StatefulWidget {
  const MyWidget({super.key});

  @override
  State createState() => _MyWidgetState();
}

class _MyWidgetState extends State {
  final TextEditingController _controller = TextEditingController();

  final _list = List.generate(10, (index) => 'test $index');

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final reverseList = _list.reversed.toList();
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: Container(
                height: double.infinity,
                alignment: Alignment.topCenter,
                child: ListView.builder(
                  itemCount: reverseList.length,
                  itemBuilder: (BuildContext context, int index) {
                    return Center(
                      child: Text(
                        reverseList[index],
                        style: const TextStyle(fontSize: 20),
                      ),
                    );
                  },
                ),
              ),
            ),
            Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _controller,
                    autofocus: true,
                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      _list.add(_controller.text);
                      _controller.clear();
                    });
                  },
                  child: const Text('送信'),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
```

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/05/Screenshot_1652875881-473x1024.png" alt="" width="300">

現状、入力された文字列が画面上から表示されるようなアプリにはなっていますが、
あくまで実行している端末のみで参照できるだけで、
他のユーザーとのデータ共有は実現できていません。

次からCloud Firestoreを使って他のユーザーとのデータ共有を実現していきます。

### Cloud Firestore にデータを入力

まず、Cloud Firestoreがどのようにデータを保存しているのかについて学び、
コンソール上からデータを構築していきましょう。

#### データモデル

Cloud Firestoreがどのようにデータを保存しているのかです。

以下の図のような形でCloud Firestoreではデータを保存しています。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-22.05.01-1024x607.png)

項目を表したフィールドと値が組になってドキュメントに保存され、
そのドキュメントがコレクションとして集まっている、という保存形式です。

具体的には、peopleというコレクションの中に、
aaaaaaaaaaaaというIDのドキュメントが記録され、
そのドキュメントの中に、first(名前)がAoi , last(名字)がUmigishi,age(年齢)が30、
というデータが保存されている、という形です。

次から実際にデータを構築してみましょう。

#### コンソールからのデータ保存

Cloud Firestore にいくつかデータを入力してみましょう。

コレクションを開始を押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-21.43.45-1024x676.png)

コレクションIDの入力です。

Cloud Firestore のデータはコレクションというひとまとまりで扱われます。
その名前を付ける部分です。
今回はdreamという名前にします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-18-21.45.21-1024x590.png)

ドキュメントの追加画面です。
ドキュメントにフィールドをいくつか持たせることができます。

ドキュメントIDは自動IDで設定します。

今回フィールド名はcontentとし、値はString（文字列）で 夢の内容を記載します。
createdAtという時刻を表すフィールドも記載しましょう。
タイプをtimestampに設定し、適当な時刻を設定します。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-19-0.19.16-992x1024.png" alt="" width="300">

保存を押すと、データが保存されます。

複数ドキュメントを保存してみましょう。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-19-0.19.37-1024x288.png)

このように、データを登録することで、
このデータベースからデータを取得することさえできれば、
複数のユーザーでデータを共有することができます。

次から、実際にデータ共有の仕方を解説していきます。

### Cloud Firestore を利用したデータ共有

Cloud Firestore をアプリに実装して行きます。

流れとしては以下の通りです。

- Cloud Firestore からのデータ取得、表示
- Cloud Firestoreへのデータ保存

#### Cloud Firestore からのデータ取得、表示

Cloud Firestoreからデータを取得し表示させていきます。

Cloud FirestoreからStreamでデータを取得します。
取得のコードは以下の通りです。

```dart
FirebaseFirestore.instance
                      .collection('dream')
                      .orderBy('createdAt')
                      .snapshots(),
```

`FirebaseFirestore`.instanceでCloud Firestoreのデータベースのインスタンスを取得します。
`collection(~)`でコレクションを選択します。
o`rderBy(~)`でフィールドの値にて並べ替えます。
最後に`snapshots()`で`Stream`にてデータの取得を行います。

`Stream`に関しては以下の記事で解説しています。
併せてご確認ください。

https://blog.flutteruniv.com/flutter-future-stream-difference/

Stream で取得した値を、Flutter アプリ上で表示させましょう。
StreamBuilderを使って表示の処理を書いていきます。

作成したコードは以下の通りです。

```dart
//...

class _MyWidgetState extends State {
  final TextEditingController _controller = TextEditingController();

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: Container(
                height: double.infinity,
                alignment: Alignment.topCenter,
                //1
                child: StreamBuilder(
                  //2
                  stream: FirebaseFirestore.instance
                      .collection('dream')
                      .orderBy('createdAt')
                      .snapshots(),
                  builder: (context, snapshot) {
                    if (snapshot.hasError) {
                      return const Text('エラーが発生しました');
                    }
                    if (!snapshot.hasData) {
                      return const Center(child: CircularProgressIndicator());
                    }
                    //3
                    final list = snapshot.requireData.docs
                        .map((DocumentSnapshot document) {
                      final documentData =
                          document.data()! as Map;
                      return documentData['content']! as String;
                    }).toList();

                    final reverseList = list.reversed.toList();

                    return ListView.builder(
                      itemCount: reverseList.length,
                      itemBuilder: (BuildContext context, int index) {
                        return Center(
                          child: Text(
                            reverseList[index],
                            style: const TextStyle(fontSize: 20),
                          ),
                        );
                      },
                    );
                  },
                ),
              ),
            ),
//...
```

//1
`StreamBuilder`に`Stream`の型として`QuerySnapshot`を明示します。

//2
`stream`の設定部分です。前述したデータの取得処理を記載しています。

//3
`StreamBuilder`の`AsyncSnapshot`から、データを取得し、List化している部分です。
`docs`でドキュメントのリストを取得します。
それぞれのドキュメントが`Map`型でデータを持っているため、
今回表示したい`'content'`のデータを取り出し、List化しています。

以上でデータの取得、表示は完了となります。

#### Cloud Firestoreへのデータ保存

Cloud Firestoreへのデータ保存を行います。

データ保存は以下のコードで行うことができます。

```dart
FirebaseFirestore.instance
                        .collection('dream')
                        .doc()
                        .set(〜);
```

`doc`を空欄にするとdocument IDを自動で設定してくれます。

このコードを実装すると、以下のようになります。

```dart
//・・・

class _MyWidgetState extends State {
  final TextEditingController _controller = TextEditingController();

//...
            Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _controller,
                    autofocus: true,
                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    //4
                    final document = {
                      'content': _controller.text,
                      'createdAt': Timestamp.fromDate(DateTime.now()),
                    };
                    //5
                    FirebaseFirestore.instance
                        .collection('dream')
                        .doc()
                        .set(document);
                    setState(_controller.clear);
                  },
                  child: const Text('送信'),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
```

//4
保存するデータの定義部分です。
`Map`型のデータにて保存を行います。
`createdAt`の部分は`DateTime`型を`TimeStamp`型に変換するため、
このような処理を行っています。

//5
データの保存処理のコードです。

おめでとうございます！

これで実装は終わりです。
エミュレータ、シミュレータにて2つ同時にアプリを実行して、
本記事冒頭のgifのように、
データの共有ができていることを確かめてみてください。

### サンプルコード

最後に本記事の最終的なサンプルコードを紹介します。

```dart
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';

import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(
    const MyApp(),
  );
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

class MyWidget extends StatefulWidget {
  const MyWidget({super.key});

  @override
  State createState() => _MyWidgetState();
}

class _MyWidgetState extends State {
  final TextEditingController _controller = TextEditingController();

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: Container(
                height: double.infinity,
                alignment: Alignment.topCenter,
                child: StreamBuilder(
                  stream: FirebaseFirestore.instance
                      .collection('dream')
                      .orderBy('createdAt')
                      .snapshots(),
                  builder: (context, snapshot) {
                    if (snapshot.hasError) {
                      return const Text('エラーが発生しました');
                    }
                    if (!snapshot.hasData) {
                      return const Center(child: CircularProgressIndicator());
                    }
                    final list = snapshot.requireData.docs
                        .map((DocumentSnapshot document) {
                      final documentData =
                          document.data()! as Map;
                      return documentData['content']! as String;
                    }).toList();

                    final reverseList = list.reversed.toList();

                    return ListView.builder(
                      itemCount: reverseList.length,
                      itemBuilder: (BuildContext context, int index) {
                        return Center(
                          child: Text(
                            reverseList[index],
                            style: const TextStyle(fontSize: 20),
                          ),
                        );
                      },
                    );
                  },
                ),
              ),
            ),
            Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _controller,
                    autofocus: true,
                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    final document = {
                      'content': _controller.text,
                      'createdAt': Timestamp.fromDate(DateTime.now()),
                    };
                    FirebaseFirestore.instance
                        .collection('dream')
                        .doc()
                        .set(document);
                    setState(_controller.clear);
                  },
                  child: const Text('送信'),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
```

## まとめ

本記事では誰でも簡単に用意できるバックエンドサービス、Firebaseと、
Flutterを組み合わせた アプリの作成方法について解説しました。

いかがだったでしょうか？

セットアップから実装まで、簡単に体験できたかと思います。

本記事で紹介したFirebaseの機能は本当にごく一部です。
気になる方はぜひFirebaseの公式ドキュメントや記事などを読んで、
色々と試してみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://github.com/firebase/flutterfire/blob/master/packages/cloud_firestore/cloud_firestore/example/lib/main.dart

https://qiita.com/karamage/items/ef89defb084b5f537108

## 編集後記（2022/5/19）

Flutter × Firebaseの記事でした。

Firebase のセットアップは以前はかなり面倒でしたが、
FlutterFire CLI の登場によりとても楽になりました。

Firebase の実装も120行ちょっとでできることに、
驚いた方もいるのではないでしょうか？

本記事で紹介したように、FlutterにFirebaseを組み合わせることは、
そこまで難しいことではありません。

つまり、データの共有が簡単に実装できる、ということでもあります。
データの共有ができれば、
アプリの幅はかなり広がります。

ぜひ本記事を参考に、アプリ開発の幅を広げてみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。