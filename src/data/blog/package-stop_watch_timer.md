---
title: "【 stop_watch_timer 】ストップウォッチを実装しよう【 Flutter 】"
slug: "package-stop_watch_timer"
author: "Aoi"
description: ""
pubDatetime: "2022-11-06"
tags: ["Package"]
layout: "../../layouts/BlogPost.astro"
---

**「Flutterでストップウォッチを実装したい！」**

本記事ではそんな要望にお答えします。

[stop_watch_timer](https://pub.dev/packages/stop_watch_timer) パッケージを使ったストップウォッチ機能の実装方法について解説します。

このパッケージを利用すると以下のようなストップウォッチが実装可能です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/11/20221106_count_up_timer_sample.gif)

パッケージの基本的な使い方から、用意されているメソッド等の詳細まで解説します。

ぜひ読んでみてください！

## ストップウォッチの実装方法

ストップウォッチを実装する方法について解説していきます。

### 準備

まず準備として、パッケージのインストールと、
Dartファイルへのインポート文の追加を行います。

#### パッケージのインストール

CLI(macならターミナル)で、自分のプロジェクトのルートにて
以下のコマンドを実行しパッケージをインストールします。

```bash
flutter pub add stop_watch_timer
```

#### パッケージのインポート

実装したいDartファイルの上部に以下のインポート文を追加し、
パッケージをインポートします。

```dart
import 'package:stop_watch_timer/stop_watch_timer.dart';
```

### 実装

実装方法について解説します。

まず、`StatefulWidget`の持つ状態として、`StopWatchTimer`インスタンスを用意します。
`dispose`メソッドにて、状態の`dispose`を設定します。

```dart
class CountUpPage extends StatefulWidget {
  const CountUpPage({super.key});

  @override
  State createState() => _CountUpPageState();
}

class _CountUpPageState extends State {
  final _stopWatchTimer = StopWatchTimer();

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    _stopWatchTimer.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
　　　　// ...
  }
}
```

ストップウォッチの経過ミリ秒数は、`StopWatchTimer.rawTime` で`Stream`で取得できます。

`StopWatchTimer.gatDisplayTime` メソッドの引数にミリ秒数を与えることで、
00:00:00:00の形で経過時間を取得できます。

上記を踏まえ、`StreamBuilder`にて時間表示を実装したものが以下となります。

```dart
StreamBuilder(
              stream: _stopWatchTimer.rawTime,
              initialData: _stopWatchTimer.rawTime.value,
              builder: (context, snapshot) {
                final displayTime = StopWatchTimer.getDisplayTime(
                  snapshot.data!,
                );
                return Center(
                  child: SizedBox(
                    width: 144,
                    child: Text(
                      displayTime,
                      style: const TextStyle(fontSize: 24),
                    ),
                  ),
                );
              },
            ),
```

ストップウォッチのスタート、ストップ、リセットはそれぞれ以下のメソッドにて実行可能です。

```dart
final _stopWatchTimer = StopWatchTimer();

//スタート
_stopWatchTimer.onStartTimer();

//ストップ
_stopWatchTimer.onStopTimer();

//リセット
_stopWatchTimer.onResetTimer();
```

### ラップの実装

ストップウォッチのラップタイム(`StopWatchRecord`)のリストは、`StopWatchTimer.records`で、`Stream`で取得できます。

`StopWatchRecord.displayTime`で00:00:00:00の形でラップタイムを取得できます。

`StreamBuilder`での実装例は以下となります。

```dart
StreamBuilder>(
                stream: _stopWatchTimer.records,
                initialData: const [],
                builder: (
                  BuildContext context,
                  AsyncSnapshot> snapshot,
                ) {
                  final value = snapshot.data;
                  if (value!.isEmpty) {
                    return const Text('No Record');
                  }
                  return ListView.builder(
                    controller: _scrollController,
                    itemCount: value.length,
                    itemBuilder: (BuildContext context, int index) {
                      final data = value[index];
                      return Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.all(8),
                            child: Text('${index + 1} ${data.displayTime}'),
                          ),
                        ],
                      );
                    },
                  );
                },
              ),
```

ラップタイムの記録は以下のメソッドにて可能です。

```dart
final _stopWatchTimer = StopWatchTimer();

//ラップタイムの記録
_stopWatchTimer.onAddLap();
```

上記を実装したサンプルコードは以下となります。
是非参考にしてみてください。

サンプルコード全体
```dart
import 'package:flutter/material.dart';
import 'package:stop_watch_timer/stop_watch_timer.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const CountUpPage(),
    );
  }
}

class CountUpPage extends StatefulWidget {
  const CountUpPage({super.key});

  @override
  State createState() => _CountUpPageState();
}

class _CountUpPageState extends State {
  final _stopWatchTimer = StopWatchTimer();

  final _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    _stopWatchTimer.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Stop Watch'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            StreamBuilder(
              stream: _stopWatchTimer.rawTime,
              initialData: _stopWatchTimer.rawTime.value,
              builder: (context, snapshot) {
                final displayTime = StopWatchTimer.getDisplayTime(
                  snapshot.data!,
                );
                return Center(
                  child: SizedBox(
                    width: 144,
                    child: Text(
                      displayTime,
                      style: const TextStyle(fontSize: 24),
                    ),
                  ),
                );
              },
            ),
            const SizedBox(height: 32),
            SizedBox(
              height: 80,
              child: StreamBuilder>(
                stream: _stopWatchTimer.records,
                initialData: const [],
                builder: (
                  BuildContext context,
                  AsyncSnapshot> snapshot,
                ) {
                  final value = snapshot.data;
                  if (value!.isEmpty) {
                    return const Text('No Record');
                  }
                  return ListView.builder(
                    controller: _scrollController,
                    itemCount: value.length,
                    itemBuilder: (BuildContext context, int index) {
                      final data = value[index];
                      return Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.all(8),
                            child: Text('${index + 1} ${data.displayTime}'),
                          ),
                        ],
                      );
                    },
                  );
                },
              ),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: _stopWatchTimer.onStartTimer,
              child: const Text('Start'),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: _stopWatchTimer.onStopTimer,
              child: const Text('Stop'),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: _stopWatchTimer.onResetTimer,
              child: const Text('Reset'),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: () async {
                if (!_stopWatchTimer.isRunning) {
                  return;
                }
                _stopWatchTimer.onAddLap();
                await Future.delayed(const Duration(milliseconds: 100));
                await _scrollController.animateTo(
                  _scrollController.position.maxScrollExtent,
                  duration: const Duration(milliseconds: 200),
                  curve: Curves.easeOut,
                );
              },
              child: const Text('Lap'),
            ),
          ],
        ),
      ),
    );
  }
}
```

## 用意されているメソッドなど

### カウントダウン

`StopWatchTimer`のインスタンス生成時に`mode`と`presetMillisecond`を設定することで、
カウントダウンするタイマーを実装可能です。

```dart
final _stopWatchTimer = StopWatchTimer(
    mode: StopWatchMode.countDown,
    presetMillisecond: 1000 * 60,
  );
```

### リスナー

`StopWatchTimer.rawTime.listen` 等で、
ミリ秒の変化時やストップ時などに実行される関数を設定可能です。

```dart
_stopWatchTimer.rawTime.listen((value) => print('rawTime $value'));

_stopWatchTimer.minuteTime.listen((value) => print('minuteTime $value'));

_stopWatchTimer.secondTime.listen((value) => print('secondTime $value'));

_stopWatchTimer.records.listen((value) => print('records $value'));

_stopWatchTimer.fetchStopped.listen((value) => print('stopped from stream'));

_stopWatchTimer.fetchEnded.listen((value) => print('ended from stream'));
```

## まとめ

本記事では、[stop_watch_timer](https://pub.dev/packages/stop_watch_timer) パッケージを使ったストップウォッチ機能の実装方法について解説しました。

基本的な使い方から用意されているメソッドまで詳細に解説しました。

いかがだったでしょうか？

タイマーで実行される機能等を実装するのに、非常に役に立つパッケージかと思います。

ぜひ、参考にしてみてください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/11/6）

ストップウォッチの実装方法についての解説記事でした。

このパッケージを使えば、例えばデザイン面でネイティブアプリと差別化したストップウォッチを実装できたりするので、
アプリ開発に非常に役に立つかと思います。

0秒ちょうどで止めるゲームを実装したりとか、
ゲームのカウントダウンに役に立てたりとかするのも面白そうです。

色々な活用方法が思い浮かぶパッケージでしたね。

使い勝手も非常によいので、ぜひ一度使ってみていただければ、と思いました。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。