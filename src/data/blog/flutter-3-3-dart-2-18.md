---
title: "Flutter 3.3 / Dart 2.18変化点の要約"
slug: "flutter-3-3-dart-2-18"
author: "Aoi"
description: ""
pubDatetime: "2022-08-31"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

**『 Flutter 3.3 と Dart 2.18 の変化点を知りたい！』**

そんなあなたに向けて、Flutter 3.3 / Dart 2.18の変化点をまとめて紹介いたします。

これを見ればFlutter 3.3のアップデートで何が変わったのか一気に知ることができます！
ぜひ読んでみてください！

本記事は、以下の記事をベースに要約を行います。

https://medium.com/flutter/whats-new-in-flutter-3-3-893c7b9af1ff

https://medium.com/dartlang/dart-2-18-f4b3101f146c

## Flutter 3.3の変化点

Flutter 3.3 では5,687ものプルリクエストがマージされたとのことです。

Web , デスクトップ, テキストハンドリングのパフォーマンスでの向上と、
go_router パッケージ、Dev tool 、VS codeの拡張機能のアップデートを含みます。

### SelectionArea ウィジェット

Flutter 3.3 にて、`SelectionArea` ウィジェットが追加されました。

今まで、FlutterのWebアプリでのテキスト選択は思うような挙動をしていませんでした。
一回のマウスカーソルのスワイプで複数行選択できるようにするのは、簡単ではありませんでした。

`SelectionArea`ウィジェットにより、
このウィジェットの子は、全て自由にテキスト選択が可能となります。

例えば、`Scaffold`のようなウィジェットツリーの根元の部分を
`SelectionArea` ウィジェットで囲うだけで、複数行の選択が可能となります。

詳しくは[こちら](https://api.flutter.dev/flutter/material/SelectionArea-class.html)

![](http://34.145.4.125/wp-content/uploads/2022/08/20220831_selection_area.gif)

サンプルコード
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SelectionArea Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'SelectionArea Demo Home Page'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return SelectionArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text(title),
        ),
        body: Center(
          child: DefaultTextStyle.merge(
            style: const TextStyle(
              fontSize: 20,
              color: Colors.black,
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                Text('選択可能なテキスト1'),
                Text('選択可能なテキスト2'),
                Text('選択可能なテキスト3'),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```

### トラックパッドの入力対応

Flutter 3.3 ではトラックパッドの入力に対応しました。
リッチでスムーズなコントロールを可能にするだけでなく、
いくつかの誤操作を生むような事象の削減をしています。

詳細は[こちら](https://docs.google.com/document/d/1oRvebwjpsC3KlxN1gOYnEdxtNpQDYpPtUFAkmTUe-K8/edit?resourcekey=0-pt4_T7uggSTrsq2gWeGsYQ)をご覧ください。
また、以下のプルリクエストを参照ください

- [Support trackpad gestures in framework](https://github.com/flutter/flutter/pull/89944)
- [iPad trackpad gestures](https://github.com/flutter/engine/pull/31591)
- [Reland "ChromeOS/Android trackpad gestures"](https://github.com/flutter/engine/pull/34060)
- [Win32 trackpad gestures](https://github.com/flutter/engine/pull/31594)
- [Linux trackpad gestures](https://github.com/flutter/engine/pull/31592)
- [Mac trackpad gestures](https://github.com/flutter/engine/pull/31593)

### スクリブル

Flutter 3.3 より、iPad OSとApple Pencil で可能な、[スクリブル](https://support.apple.com/ja-jp/guide/ipad/ipad355ab2a7/ipados)での手書き入力に対応しました。

`CupertinoTextField`、`TextField`、`EditableText`のウィジェットで、
Flutter 3.3にアップデートするだけで可能となります。

### テキストインプット

Flutter 3.3では、プラットフォームの`TextInputPlugin`から
詳細なテキスト入力の更新を受け取ることができるようになりました。
以前は`TextInputClient`は古いものと新しいものの差分は保持せず、
新しく編集された状態のみ配信していました。
`TextEditingDeltas`と`DeltaTextInputClient`にアクセスすることにより、
入力によって伸縮する、装飾付きの範囲を持つ入力フィールドを作成可能です。

詳細は、[こちら](https://flutter.github.io/samples/rich_text_editor.html)をご覧ください。

### Material Design 3

FlutterへのMaterial Design 3 のコンポーネントのマイグレートが行われています。
今回のリリースでは、`[IconButton](https://api.flutter.dev/flutter/material/IconButton-class.html)`, `[Chips](https://api.flutter.dev/flutter/material/Chip-class.html)`, `[AppBar](https://api.flutter.dev/flutter/material/AppBar-class.html)`のアップデートがなされています。

詳細については[元記事](https://medium.com/flutter/whats-new-in-flutter-3-3-893c7b9af1ff)にてGIFで紹介されています。

Material 3に関する動向は[こちら](https://github.com/flutter/flutter/issues/91605)で確認することが可能です。

### Windows

Flutter3.3から、Windows のデスクトップアプリケーションのバージョンを、プロジェクトのpubspec.yamlファイルとビルド引数から設定可能になりました。
（以前はWindows アプリケーション固有ファイルからの設定でした。）
これにより、アプリケーションが更新された際にエンドユーザーが
最新版を取得するための自動アップデートを
より簡単に行うことができるようになります。

より詳細な情報は、[ドキュメント](https://docs.flutter.dev/deployment/windows#updating-the-apps-version-number)と[マイグレーションガイド](https://docs.flutter.dev/development/platform-integration/windows/version-migration)をご覧ください。

### go_router パッケージ

画面遷移ロジック設計のシンプル化をするための
Flutter チームによってメンテナンスされているパッケージ、
`go_router`についてです。
最新版(5.0)では、`redirect`の引数に`BuildContext`が追加されたり、
`navigatorBuilder`の削除等の破壊的変更が行われています。（[詳細](https://docs.google.com/document/d/10l22o4ml4Ss83UyzqUC8_xYOv_QjZEi80lJDNE4q7wM/edit?resourcekey=0-U-BXBQzNfkk4v241Ow-vZg)）

詳細は[こちら](https://docs.flutter.dev/development/ui/navigation)をご覧ください。

2022年8月31日10時時点でまだgo_router 5.0 は更新されていませんでした。

### VS Code 拡張機能の強化

Visual Studio Code のFlutter 拡張機能がアップデートされました。
その一つがdependencyの追加機能です。
Dart: Add Dependency を利用することで、
複数のパッケージを一気に追加することが可能です。

アップデートの詳細は以下を参照ください。

- [VS Code extensions v3.46.0](https://groups.google.com/g/flutter-announce/c/u1iSDMtKMVg?pli=1)
- [VS Code extensions v3.44.0](https://groups.google.com/g/flutter-announce/c/x4m9o93-Dng)
- [VS Code extensions v3.42](https://groups.google.com/g/flutter-announce/c/45Wsk5pISx4)

### DevTool のアップデート

DevTool に対して、UXとパフォーマンスの向上を含む、
多くのアップデートがされました。
その一つが、データ表示の向上で、より早く表示され、多くのイベントのリストのスクロールがスムーズになりました。([#4175](https://github.com/flutter/devtools/pull/4175)).

その他の向上については以下をご覧ください。

- [Flutter DevTools 2.16.0 release notes](https://docs.flutter.dev/development/tools/devtools/release-notes/release-notes-2.16.0)
- [Flutter DevTools 2.15.0 release notes](https://docs.flutter.dev/development/tools/devtools/release-notes/release-notes-2.15.0)
- [Flutter DevTools 2.14.0 release notes](https://docs.flutter.dev/development/tools/devtools/release-notes/release-notes-2.14.0)

### パフォーマンス：ラスターキャッシュの向上

Flutter 3.3にて、アセットからの画像読み込みのパフォーマンスが、
コピーの削除と、ガベージコレクション(GC)の圧迫の削減により向上しました。
ベンチマークにて画像読み込み時間が約2倍向上したとのことです。

[元記事](https://medium.com/flutter/whats-new-in-flutter-3-3-893c7b9af1ff)では向上に関してより詳細なロジックや、
向上具合の画像が記載されています。

詳細は[こちら](https://docs.flutter.dev/release/breaking-changes/image-provider-load-buffer)のドキュメントをご覧ください。

### 安定性：iOS ポインタ圧縮の無効化

Flutter 2.10 stable リリースにて、
iOS上でDartのポインタ圧縮の最適化を可能にしました。
しかしポインタ圧縮はDartのヒープ領域用の仮想メモリを大きく圧迫し動きます。
ポインタ圧縮を無効にした場合、
Dart オブジェクトによって消費されるメモリが増加しますが、
Flutterアプリケーションの非Dart部分に使用できるメモリも増加するため、
こちらの方が全体として望ましいことから無効化しています。

将来的にこの最適化の有効化を行うことはあり得るとのことです。
（詳細は[元記事](https://medium.com/flutter/whats-new-in-flutter-3-3-893c7b9af1ff)をご確認ください。）

### API の向上 : PlatformDispatcher.onError

以前はアプリケーションのエラーや例外全てをキャッチするために
カスタム `Zone`を設定する必要がありましたが、
今回のリリースで、カスタム `Zone`を使う代わりに、
`PlatformDispatcher.instance.onError` コールバックを使うことが推奨されます。

詳細は[こちら](https://docs.flutter.dev/testing/errors)のドキュメントをご確認ください。

### API の向上 : フラグメントプログラムの変更

GLSLで書かれ、`pubspec.yaml`の`shaders:`セクションでリスト化された
フラグメントシェーダーはエンジンによって
理解されるフォーマットにて自動的にコンパイルされ、
アセットとしてアプリケーションにバンドルされるようになりました。
このおかげで、第三者のツールを使って
シェーダーを手動でコンパイルする必要がなくなります。

この変更の例は、[こちら](https://github.com/zanderso/fragment_shader_example)をご覧ください。

### API の向上 : フラクショナル トランスレーション

以前はFlutter エンジンは合成レイヤーを
正確なピクセル境界に常に揃えていました。
デスクトップのサポートが追加されてから、
観測可能なスナッピング動作(ぶれ)に気がつきました。
画面のデバイスピクセル比が一般的にデスクトップでは低いためです。
例えば、低いデバイスピクセル比の画面では、
ツールチップがフェードインする際にスナッピングが見えます。
このスナッピングは新たなiPhoneモデルでは不要と決定し、
[ピクセルスナッピング](https://github.com/flutter/flutter/issues/103909)の削除をしました。

### サポートプラットフォームの変更：32-bit iOS の非推奨化

32-bit iOS デバイスとiOS バージョン9、10
(iPhone 4S、iPhone 5、iPhone 5C、第2、3、4世代  iPad)
のサポートが終了します。
これらのデバイスでは、Flutter3.3以降で作成されたアプリは実行されません。

### サポートプラットフォームの変更：macOS 10.11、10.12の非推奨化予告

2022年 第4クォーターのstableリリースで、
macOS のバージョン10.11、10.12に対するサポートを終了します。

### サポートプラットフォームの変更：ビットコードの非推奨化予告

来たるXcode 14 のリリースにて、
ビットコードでのiOSアプリのアップロードができなくなります。(詳細は[こちら](https://developer.apple.com/documentation/xcode-release-notes/xcode-14-release-notes))
これにより、Flutterも将来のstableリリースでビットコードに対するサポートを終了します。

通常、Flutterアプリはビットコードは可能になっていません。
ビットコードの可能化の変更については[元記事](https://medium.com/flutter/whats-new-in-flutter-3-3-893c7b9af1ff)に詳細が記載されています。
その他ビットコードでの配布の詳細は[こちら](https://help.apple.com/xcode/mac/11.0/index.html?localePath=en.lproj#/devde46df08a)をご確認ください。

## Dart 2.18の変化点

### DartとObjective-C/Swift との相互運用の導入

Dart 2.18でmacOS、iOSのプラットフォームのAPIで通常使用されるように、
Objective-C/Swiftのコードを呼び出すことができます。
DartはCLIアプリからバックエンドのコード、Flutter UIまで、
この相互運用のメカニズムをサポートします。

Dart API ラッパー生成ツール、`ffigen`で、
APIヘッダーからこれらのバインディングを構成することができます。

例で紹介します。

#### Objective-C を使ったタイムゾーンの例

[元記事](https://medium.com/dartlang/dart-2-18-f4b3101f146c)で紹介されている例の要点をまとめたものとなります。

macOS は[NSTimeZone クラス](https://developer.apple.com/documentation/foundation/nstimezone?language=objc%5D)で公開されている
タイムゾーン情報を要求するためのAPIを持ちます。
ユーザーのデバイスにて設定されたタイムゾーンと
UTCタイムゾーンのオフセットを取得するためにAPIを実行できます。

以下はGMTのタイムゾーンとのオフセットを取得するための
タイムゾーンAPIの実行例です。

```objectivec
#import

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSTimeZone *timezone = [NSTimeZone systemTimeZone]; // Get current time zone.
        NSLog(@"Timezone name: %@", timezone.name);
        NSLog(@"Timezone offset GMT: %ld hours", timezone.secondsFromGMT/60/60);
    }
    return 0;
}
```

API ヘッダーを含む`Fondation.h`をインポートしています。
また、`NSTimeZone`クラスから、`systemTimeZone`メソッドを呼び出しています。
このメソッドは、デバイスの設定のタイムゾーンの
`NSTimeZone`インスタンスを返します。

このアプリで、以下の実行結果が得られます。

```bash
Timezone name: Europe/Copenhagen
Timezone offset GMT: 2 hours
```

新しいObjective-C相互運用機能を使用して、
Dartでこの結果を再現してみましょう。

Dart CLI でアプリを作ります。

```bash
dart create timezones
```

pubspec.yaml ファイルにて、`ffigen`の設定をします。
この設定はヘッダーファイルを指し示し、
どのObjective-C インターフェースがラッパーを生成する
必要があるかを示します。

```yaml
ffigen:
  name: TimeZoneLibrary
  language: objc
  output: "foundation_bindings.dart"
  exclude-all-by-default: true
  objc-interfaces:
    include:
      - "NSTimeZone"
  headers:
    entry-points:
      - "/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/System/Library/Frameworks/Foundation.framework/
         Headers/NSTimeZone.h"
```

これで、`NSTimezone.h`のヘッダーに対してObjective-Cバインディング
することを選択し、
`NSTimeZone`インターフェースにAPIのみが含まれます。

ラッパーの生成は以下のコマンドで`ffigen`を実行することで可能です。

```bash
dart run ffigen
```

このコマンドで、生成された一連のAPIバインディングを含む、
`foundation_bindings.dart`が作成されます。
このバインディングファイルを使うことで、
Dartの`main`メソッドを書くことができます。

前述のObjective-Cのコードと対応させると、以下のようになります。

```dart
void main(List args) async {
  const dylibPath =
      '/System/Library/Frameworks/Foundation.framework/Versions/Current/Foundation';
  final lib = TimeZoneLibrary(DynamicLibrary.open(dylibPath));

  final timeZone = NSTimeZone.getLocalTimeZone(lib);
  if (timeZone != null) {
    print('Timezone name: ${timeZone.name}');
    print('Offset from GMT: ${timeZone.secondsFromGMT / 60 / 60} hours');
  }
}
```

このような新たなサポートがDart2.18から可能となります。
これによりDart のmacOS/iOSのAPI呼び出しサポートの相互運用は加速します。
また、これによりFlutterのプラグインは補完されます。
どんなDartアプリでも実行可能な新たなサポートが追加され、
macOS/iOSのAPIをDart コードから直接呼び出せるようになります。

より詳細な情報は、[こちら](https://dart.dev/guides/libraries/objective-c-interop)をご確認ください。

### マルチプラットフォームアプリでのプラットフォーム固有のネットワーキング

Dartはマルチプラットフォームの`http`ライブラリを含んでいます。
このライブラリはプラットフォーム固有の内容を考えること無しで
コードを書くことができるようにしています。
ですが時々、特定のホストプラットフォームの
ネットワーキングAPIにコードを記述したい場合があります。

例えば、Appleのネットワーキングライブラリ、`NSURLSession`はWiFiのみのネットワークを指定したり、VPNが必要であることを指定したりできます。
これらのユースケースをサポートするために、macOS/iOSプラットフォームに対して、新たなネットワーキングパッケージ、`cupertino_http`を作成しました。
これは前章で紹介したObjective-Cの相互運用で作成されています。
FoundationのAppleのネットワークAPIから生成された、APIラッパーの大規模な集合を使用しています。

`cupertino_http`の例は、[元記事](https://medium.com/dartlang/dart-2-18-f4b3101f146c)をご確認ください。

アプリを可能な限りマルチプラットフォームに保つために、
基本的な`http`操作のためのマルチプラットフォームな`http` APIの集合を維持し、
使用するネットワークライブラリをプラットフォームごとに構成できるようにしました。

Dart 2.18では試験的に2つのプラットフォーム固有のhttpライブラリの
サポートを提供します。

- `[cupertino_http](https://pub.dev/packages/cupertino_http)` : macOS/iOSに対する、`NSURLSession`を基盤とする
- `[cronet_http](https://pub.dev/packages/cronet_http)` :  Android上で人気のネットワークライブラリの[Cronet](https://developer.android.com/guide/topics/connectivity/cronet)を基盤とする

共通のクライアントAPIをいくつかのHTTP 実装と組み合わせることで、
両者の長所を活用できます。
全てのプラットフォームの単一のソースセットでアプリをメンテしながら、
プラットフォーム固有の動作を得ることができます。

### 型推論の向上

Dartではジェネリクスを使った関数を多く使います。
例えば`fold`メソッドを考えましょう。
以下の例はint型の要素のリストの合計を計算する例です。

```dart
List numbers = [1, 2, 3];
final sum = numbers.fold(0, (x, y) => x + y);
print(‘The sum of $numbers is $sum’);
```

Dart2.17では以下の型に関するエラーが出ます。

```bash
line 2 • The operator ‘+’ can’t be unconditionally invoked because the receiver can be ‘null’.
```

これは、`x`の型が不確かなために発生します。
修正は以下のコードのように型を指定することで可能です。

```dart
final sum = numbers.fold(0, (int x, int y) => x + y);
```

Dart 2.18では型推論が強化され、`x`と`y`が`null`でない`int`型と推測され
上記の例でも静的解析でエラーとならなくなります。

これにより、より簡潔なDartコードを記述できるようになります。

### 非同期処理のパフォーマンスの向上

Dart VM が `async`メソッドと、`async*/sync*`ジェネレーター関数を
適用する方法が改善されています。
これにより、コードサイズが削減されます。

例：GoogleアプリのAOTスナップショットのサイズが10%削減

また、マイクロベンチマーク全体でパフォーマンスが向上しました。

これらの変更は追加で小さな挙動の変更を含みます。
詳細は[こちら](https://github.com/dart-lang/sdk/blob/master/CHANGELOG.md#dart-vm)をご確認ください。

### pub.dev の向上

pub.dev パッケージリポジトリに2つの変更を加えました。

- スポンサーシップを容易にするために、
`pubspec`でfundingのタグをサポートするようになりました。
fundingに設定したリンクは[pub.dev](https://pub.dev/)のサイドバーに表示されます。([詳細](https://dart.dev/tools/pub/pubspec#funding))
- オープンソースパッケージを奨励するために、
[pub.dev](https://pub.dev/)の自動パッケージスコアリングで、
OSI承認済ライセンスを使用するパッケージに10ポイントを追加します。

### 重大な変更

Dart 2.18での重大な変更(breaking changes)を紹介します。

- `dart2js`、`dartanalyzar`コマンドの廃止
- `.packages`ファイルの使用の中止
- `Object`型を継承しないクラスのmixinの使用不可。(breaking change [#48167](https://github.com/dart-lang/sdk/issues/48167)).
- `dart:io`の`uri`のプロパティ、`RedirectException`が`null`許容に(breaking change [#49045](https://github.com/dart-lang/sdk/issues/49045)).
- 非推奨になっていた`dart:io`のネットワーキングAPIのスネークケースの定数の削除(breaking change [#34218](https://github.com/dart-lang/sdk/issues/34218))
- Dart VMは、終了時に初期設定を復元しないよう変更(breaking change [#45630](https://github.com/dart-lang/sdk/issues/45630))

### null safety

2023年半ばでのリリースで、
非null safety 、または完全にnull safetyでないものに対する
サポートを終了する、と告知されました。

これは、Dart 2.11以前のサポートの終了を意味します。
SDK の設定の下限が2.12未満のpubspec ファイルは、
Dart 3以降では解決されなくなります。

null safetyへの移行具合については[元記事](https://medium.com/dartlang/dart-2-18-f4b3101f146c)を参照ください。

## まとめ

本記事では、Flutter 3.3 / Dart 2.18の変化点をまとめて紹介しました。

いかがだったでしょうか？

プラットフォーム追加のような大きい変化点は無いながらも、
`SelectArea` ウィジェットのような魅力的なウィジェットの追加は、
とても嬉しいですね。

Flutter 3.3、Dart 2.18 、早速使ってみようと思います。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/8/31）

Flutter 3.3 / Dart 2.18 の記事でした。

個人的には、VS Code 機能拡張の Dart: add dependencyにとても感動しました。

パッケージインストールがとても楽になります。

あなたは、今回のアップデート、どう思いましたか？

ぜひ感想をTwitter等で共有いただければと思います。

ますます盛り上がっていくFlutter、楽しんでいきましょう！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。