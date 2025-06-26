---
title: "【Flutter】 Drift の基本的な使い方解説"
slug: "flutter-drift"
author: "Aoi"
description: ""
pubDatetime: "2022-04-13"
tags: ["データベース"]
layout: "../../layouts/BlogPost.astro"
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)
Flutterで内部データベースを扱うのに、良い方法ないかな？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)
Dartだけで、簡単に内部データベースを使いたいわ！

本記事では、そんな質問、要望にお答えします。

Flutterで内部データベースを簡単に扱えるようにするライブラリとして、
Driftを紹介します。

基本的な使用方法が理解できるように、
内部データベースからのデータの表示、追加、更新、削除のできる
サンプルコードで解説します。

内部データベースの選定に悩んでいる人には有用かと思います。
ぜひ読んでみてください！

## Drift とは

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

「アプリを落としたらデータが消えてしまった！」

あなたはこのような経験はないでしょうか。

データの永続化を行っていないアプリを落とすと、
それまで記録されていたデータは削除されてしまいます。

Drift  とは Dart/Flutterのアプリケーションでデータの永続化を行うためのライブラリです。
`[sqflite](https://pub.dev/packages/sqflite)` や [sql.js](https://github.com/sql-js/sql.js/) のようなデータベースライブラリの上に構築されていて、
Streamでデータを受け取ったり、
SQLの知識が無くともDartのみでデータの追加や更新ができる機能を持っています。

データベースとは、以下の例のように整理された情報の集まりです。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/database_sample-1024x405.png)

Firebaseのように外部サーバーに用意されたデータベースを外部データベースと呼ぶのに対し、
スマートフォンなどの記憶領域に用意するデータベースを内部データベースと呼びます。
Driftは、内部データベースを扱いやすくするライブラリとなります。

SQLとは、データベースを扱うためのデータベース言語です。

本記事ではSQLについて理解していなくてもデータベースを扱えるように解説しますが、
詳細について知りたい方は、下記ページが参考になりますので、読んでみてください。

https://products.sint.co.jp/topsic/blog/sql

特にDriftは、以下の時に有用なライブラリとなっています。

- データベース形式で内部にデータを保存したい
- `String` や`Bool` 、 `Int` などの基本的な型しか取り扱わない

## 基本的な使い方

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング女性.jpeg)

簡単なアプリの作成を通し、基本的な使い方を解説していきます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/drift_sample.gif)

上のgifで紹介しているようなアプリを作成します。

このアプリでデータの表示、追加、更新、削除を行うことができ、
アプリを落としてもデータが保存されていることがわかると思います。

### 準備

ベースとなる`main.dart`のコードは以下の通りです。

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: DriftSample(),
    );
  }
}

class DriftSample extends StatelessWidget {
  const DriftSample({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(child: Container()),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: ElevatedButton(
                      child: const Text('Add'),
                      onPressed: () async {},
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: ElevatedButton(
                      child: const Text('remove'),
                      onPressed: () async {},
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```

このコードをベースにアプリを作成していきます。

#### パッケージのインストール

今回のアプリでは、6つのパッケージを使用します。
以下のように`pubspec.yaml`にパッケージを追加してください。

```
dependencies:
  drift: ^1.5.0
  path: ^1.8.0
  path_provider: ^2.0.9
  sqlite3_flutter_libs: ^0.5.5

dev_dependencies:
  build_runner: ^2.1.8
  drift_dev: ^1.5.2
```

各パッケージのバージョンは、以下のリンクから確認ください。

[drift](https://pub.dev/packages/drift)
[path](https://pub.dev/packages/path)
[path_provider](https://pub.dev/packages/path_provider)
[sqlite3_flutter_libs](https://pub.dev/packages/sqlite3_flutter_libs)
[build_runner](https://pub.dev/packages/build_runner)
[drift_dev](https://pub.dev/packages/drift_dev)

2022年4月時点で、
pathのバージョンとflutter_testのバージョンの競合で
`flutter pub get` ができなくなる事象があります。

そのため、`path`パッケージのバージョンをあえて1.8.0に設定しています。

詳細はこちらの記事をご確認ください。

https://minpro.net/drift-flutter_test-from-sdk-is-forbidden

#### コードの自動生成

今回のデータベースはシンプルにIDと内容のみをもったデータベースとします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-13-16.27.23-1024x802.png)

このデータベースを構築するために、2段階の方法を行います。

1. ベースとなるコードの作成
2. コードの自動生成

##### ベースとなるコードの生成

以下のようにフォルダを構成し、`todos.dart`ファイルを作成しましょう。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-13-16.36.33.png)

この`todos.dart` ファイルにデータベースの構成や処理等を記載していきます。

以下のようにコードを追加してください。

```
import 'package:drift/drift.dart';

//1
part 'todos.g.dart';

//2
class Todos extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get content => text()();
}

//3
@DriftDatabase(tables: [Todos])
class MyDatabase extends _$MyDatabase {}
```

//1
'ファイル名.g.dart'の形で記載します。
今回の場合ファイル名が'todos.dart'のため、'todos.g.dart'となります。
この部分はエラーとなりますが、ファイルの自動生成によりエラーは消えるため、
無視して構いません。

//2
データベースのテーブルを定義します。
今回の場合、`Todos`というクラス名のため、`todos`というテーブルが作成され、
列として`id`と`content`を持っている、という形になります。
また一行一行が、`Todo`というデータクラスで保持されます。
（クラス名から`s`を取った形でデータクラスが自動生成されます）

`IntColumn`で`int`の値を、`TextColumn`で`String`の値を保持する列を生成します。
`autoIncrement()`を設定しておくと、データ追加時に`id`を自動で生成してくれます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-13-16.49.01-1024x618.png)

//3
データベースクラスの定義です。
ここに、データベースの生成処理やデータの追加等の処理を後ほど記載していきます。

`@DriftDatabase(tables: [テーブルクラス名])`
とアノテーションを追加することで、データベースにテーブルが紐付けられます。

##### コードの自動生成

ターミナルにて、プロジェクトのルートディレクトリで以下のコードを実行しましょう。

```
flutter pub run build_runner build
```

`todos.g.dart`というファイルが自動生成されます。

もし、コードに変更を加えて再生成したい場合は、

`flutter pub run build_runner build` `--delete-conflicting-outputs`

を実行しましょう。

自動生成ファイルを静的解析の対象から外すため、
analysis_options.dartに以下のコードを追加することをオススメします。

```
analyzer:
  exclude:
    - lib/**/**/*.g.dart
```

以上でデータベースの構築は完了となります。

### データベース生成

ここからは、作成したデータベースとアプリケーションのつなぎ込みを行っていきます。

まず、アプリを立ち上げたときにデータベースを生成する処理を追加します。

todos.dartを以下のように書き換えてください。

```
import 'dart:io';  //追加

import 'package:drift/drift.dart';
import 'package:drift/native.dart';  //追加
import 'package:path/path.dart' as p;  //追加
import 'package:path_provider/path_provider.dart';  //追加

part 'todos.g.dart';

class Todos extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get content => text()();
}

@DriftDatabase(tables: [Todos])
class MyDatabase extends _$MyDatabase {
  //4
  MyDatabase() : super(_openConnection());  //追加

  //5
  @override  //追加
  int get schemaVersion => 1; //追加
}

//6
//以下追加
LazyDatabase _openConnection() {
  return LazyDatabase(() async {
    final dbFolder = await getApplicationDocumentsDirectory();
    final file = File(p.join(dbFolder.path, 'db.sqlite'));
    return NativeDatabase(file);
  });
}
```

//4
データベースのインスタンス生成と同時にデータベースとの接続処理を行います。
`_openConnection`は6にて記述します。

//5
データベースのバージョン指定部分です。

//6
このメソッドでデータベースの保存位置を取得し設定することを行っています。

データベースの生成は、`main.dart`の`main`関数の中で、`runApp`の前で行います。

```
import 'package:drift_sample2/src/drift/todos.dart';  //追加
import 'package:flutter/material.dart';

void main() {
  final database = MyDatabase(); //追加
  runApp(const MyApp());
}

//以下省略
```

以上がデータベースの生成処理となります。

### データの表示

データベース内のデータを表示する方法を記載します。

データベースのデータの取得は以下の2種類があります。

- `Stream`でデータを監視する
- `Future`でデータを一気に取得する

`todos.dart`の`MyDatabase`クラス内に上記2種類の方法を記載します。

```
@DriftDatabase(tables: [Todos])
class MyDatabase extends _$MyDatabase {
  MyDatabase() : super(_openConnection());

  @override
  int get schemaVersion => 1;
  //7
  //以下追記
  Stream> watchEntries() {
    return (select(todos)).watch();
  }
  //8
  //以下追記
  Future> get allTodoEntries => select(todos).get();
}
```

//7
`Stream`でのデータ取得のコードです。
`select`でテーブルを選択し、
`watch`でデータクラスである`Todo`のリストを`Stream`で返します。

//8
Futureでのデータ取得のコードです。
上と同様、`select`でテーブルを選択し、`get`でデータを取得します。

今回はデータの追加等を監視し続けたいため、
`Stream`のメソッドを用いて、`StreamBuilder`にてデータの反映を行います。

以下のように`main.dart`を書き換えてください。

```
import 'src/drift/todos.dart';
import 'package:flutter/material.dart';

void main() {
  final database = MyDatabase();
  //9
  runApp(MyApp(database: database));  //変更
}

class MyApp extends StatelessWidget {
  const MyApp({
    Key? key,
    required this.database,  //追加
  }) : super(key: key);

  final MyDatabase database;  //追加

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      //9
      home: DriftSample(database: database),//変更
    );
  }
}

class DriftSample extends StatelessWidget {
  const DriftSample({
    Key? key,
    required this.database,  //追加
  }) : super(key: key);

  final MyDatabase database;  //追加

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              //10
              //以下、Container()をStreamBuilder(...)に置き換え
              child: StreamBuilder(
                stream: database.watchEntries(),
                builder:
                    (BuildContext context, AsyncSnapshot> snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  }
                  return ListView.builder(
                    //11
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) => TextButton(
                      child: Text(snapshot.data![index].content),
                      onPressed: () async {
                      },
                    ),
                  );
                },
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: ElevatedButton(
                      child: const Text('Add'),
                      onPressed: () async {
                      },
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: ElevatedButton(
                      child: const Text('remove'),
                      onPressed: () async {
                      },
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```

//9
データベースインスタンスを親から子に受け渡します。

今回は単純なアプリのため、親から子へのインスタンス受け渡しで記述しています。
構造が複雑になる場合は、`Provider`や`Riverpod`などの状態管理手法を利用してください。

//10
`StreamBuilder`の記述部分です。
`database.watchEntries`メソッドによりデータの取得を行います。

//11
`snapshot.data`には`List<Todo>`の型のデータが入っているので、
これを使ってデータを表示します。

以上がデータの表示処理となります。

（まだデータベースにデータが無いため、何もひょうじされません。）

### データの追加

データの追加処理を記述していきます。

`todos.dart`の`MyDatabase`クラス内にデータ追加のメソッドを記載します。

```
@DriftDatabase(tables: [Todos])
class MyDatabase extends _$MyDatabase {
  MyDatabase() : super(_openConnection());

  @override
  int get schemaVersion => 1;

  Stream> watchEntries() {
    return (select(todos)).watch();
  }

  Future> get allTodoEntries => select(todos).get();
  //12
  //以下追加
  Future addTodo(String content) {
    return into(todos).insert(TodosCompanion(content: Value(content)));
  }
}
```

//12
データの追加メソッドです。
`into`でデータを追加するテーブルを指定し、
`insert`でデータクラスである`TodosCompanion`を追加します。
`TodosCompanion`はデータの挿入や更新に有用なデータクラスです。
このデータクラスを使うことにより、
idを指定せずにデータを追加したい時など、一部のデータだけ追加することができます。

このメソッドを`main.dart` の`DriftSample`クラスの`build`メソッド内に追加します。

追加したコードは以下のようになります。

```dart
@override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: StreamBuilder(
                stream: database.watchEntries(),
                builder:
                    (BuildContext context, AsyncSnapshot> snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  }
                  return ListView.builder(
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) => TextButton(
                      child: Text(snapshot.data![index].content),
                      onPressed: () async {},
                    ),
                  );
                },
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: ElevatedButton(
                      child: const Text('Add'),
                      onPressed: () async {
                        //以下追加
                        await database.addTodo(
                          'test test test',
                        );
                      },
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: ElevatedButton(
                      child: const Text('remove'),
                      onPressed: () async {},
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
```

以上がデータの追加方法となります。

### データの更新

データの更新処理を記述していきます。

`todos.dart`の`MyDatabase`クラス内にデータ更新のメソッドを記載します。

```
@DriftDatabase(tables: [Todos])
class MyDatabase extends _$MyDatabase {
  MyDatabase() : super(_openConnection());

  @override
  int get schemaVersion => 1;

  Stream> watchEntries() {
    return (select(todos)).watch();
  }

  Future> get allTodoEntries => select(todos).get();

  Future addTodo(String content) {
    return into(todos).insert(TodosCompanion(content: Value(content)));
  }

//13
//以下追加
  Future updateTodo(Todo todo, String content) {
    return (update(todos)..where((tbl) => tbl.id.equals(todo.id))).write(
      TodosCompanion(
        content: Value(content),
      ),
    );
  }
}
```

//13
データ更新のメソッドです。
`update(todos)`でテーブルを指定し、
`where`以下で引数の`Todo `インスタンスと`id`が一致する物を探します。
探索で見つかった行を、`write` で上書きする、といった流れのメソッドとなります。

このメソッドを`main.dart` の`DriftSample`クラスの`build`メソッド内に追加します。

追加したコードは以下のようになります。

```dart
@override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: StreamBuilder(
                stream: database.watchEntries(),
                builder:
                    (BuildContext context, AsyncSnapshot> snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  }
                  return ListView.builder(
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) => TextButton(
                      child: Text(snapshot.data![index].content),
                      onPressed: () async {
                        //以下追加
                        await database.updateTodo(
                          snapshot.data![index],
                          'updated',
                        );
                      },
                    ),
                  );
                },
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: ElevatedButton(
                      child: const Text('Add'),
                      onPressed: () async {
                        await database.addTodo(
                          'test test test',
                        );
                      },
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: ElevatedButton(
                      child: const Text('remove'),
                      onPressed: () async {},
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
```

以上がデータの更新方法となります。

### データの削除

データの削除処理を記述していきます。

`todos.dart`の`MyDatabase`クラス内にデータ削除のメソッドを記載します。

```
@DriftDatabase(tables: [Todos])
class MyDatabase extends _$MyDatabase {
  MyDatabase() : super(_openConnection());

  @override
  int get schemaVersion => 1;

  Stream> watchEntries() {
    return (select(todos)).watch();
  }

  Future> get allTodoEntries => select(todos).get();

  Future addTodo(String content) {
    return into(todos).insert(TodosCompanion(content: Value(content)));
  }

  Future updateTodo(Todo todo, String content) {
    return (update(todos)..where((tbl) => tbl.id.equals(todo.id))).write(
      TodosCompanion(
        content: Value(content),
      ),
    );
  }
//14
//以下追加
  Future deleteTodo(Todo todo) {
    return (delete(todos)..where((tbl) => tbl.id.equals(todo.id))).go();
  }
}
```

//13
データ削除のメソッドです。
`delete(todos)`でテーブルを指定し、
`where`以下で引数の`Todo `インスタンスと`id`が一致する物を探します。
探索で見つかった行を、go で削除実行する、といった流れのメソッドとなります。

このメソッドを`main.dart` の`DriftSample`クラスの`build`メソッド内に追加します。

追加したコードは以下のようになります。

```dart
@override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: StreamBuilder(
                stream: database.watchEntries(),
                builder:
                    (BuildContext context, AsyncSnapshot> snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  }
                  return ListView.builder(
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) => TextButton(
                      child: Text(snapshot.data![index].content),
                      onPressed: () async {
                        await database.updateTodo(
                          snapshot.data![index],
                          'updated',
                        );
                      },
                    ),
                  );
                },
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: ElevatedButton(
                      child: const Text('Add'),
                      onPressed: () async {
                        await database.addTodo(
                          'test test test',
                        );
                      },
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: ElevatedButton(
                      child: const Text('remove'),
                      onPressed: () async {
                        //15
                        //以下追加
                        final list = await database.allTodoEntries;
                        if (list.isNotEmpty) {
                          await database.deleteTodo(list[list.length - 1]);
                        }
                      },
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
```

//15
`await database.allTodoEntries`で データベース内のデータを全件取得します。
その後、一番最後のデータを削除する、といった流れで削除処理を行っています。

以上で、データベースの作成、データの表示、追加、更新、削除をするアプリができました。

今回のアプリの全体のコードは以下のリポジトリにあります。
併せてご確認ください。

https://github.com/Umigishi-Aoi/drift_sample

## まとめ

Flutterで内部データベースを簡単に扱えるようにするライブラリとして、
Driftを紹介しました。

基本的な使用方法が理解できるように、
内部データベースからのデータの表示、追加、更新、削除のできる
サンプルコードで解説しました。

Driftのライブラリでは、他にもいろいろな設定があります。

こちらの公式ドキュメントにて解説されているため、
興味がある方、ぜひこちらも併せて読んでみてください。

https://drift.simonbinder.eu/

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/4/13）

Flutterで内部データベースを扱いやすくするパッケージとして、
『Moor』を思い浮かべる人がいらっしゃるかもしれません。

この『Moor』と『Drift』は兄弟のような関係にあります。
『Moor』の名前を変えたものが『Drift』という位置づけです。

なぜ名前を変える必要があったのでしょうか。

もともと、Androidの内部データベースを使いやすくするライブラリとして
『Room』があり、それを逆から読んで『Moor』としたそうです。
[こちら](https://drift.simonbinder.eu/name/)によると、『Moor』という言葉は、一部の地域であまり良くない表現だったため、
名前を変える判断に至ったそうです。

造語のようなものを作るときは、それが良くない表現かどうか、
しっかりと確認する必要がある、ということがよく分かるエピソードですよね。

アプリの名前をつけるときなど、特に気をつけたいものです。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。