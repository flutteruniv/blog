---
title: "Dart 2.17 での変化点の要約"
author: "Aoi"
description: ""
pubDatetime: 2022-05-14T13:25:15.000Z
tags: ["ニュース"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)

Flutter 3と同時に更新された Dart 2.17 の変化点を知りたい！

本記事ではそんな要望にお答えします。

Flutter 3と同時に更新された、  
Dart 2.17 の変化点について書かれた記事の翻訳に対し、  
適宜情報を付け加えながら、要約を行います。

この記事さえ読めば、Dart 側の変化点を押さえることができます。

ぜひ読んでみてください！

## 参考記事

本記事の大元となる記事はこちらです。

https://medium.com/dartlang/dart-2-17-b216bfc80c5d

細かいニュアンス等はこちらの記事で読んだほうが理解しやすいので、  
気になる方はぜひこちらを読んで見てください。

以下、要約となります。

## 導入

2022年5月12日のGoogle I/Oにて、  
新たなDart SDK , バージョン 2.17 を発表しました。  
このリリースは先進的な生産性とプラットフォームに対する対応性という  
コアなテーマに基づいています。

言語の新しい要素は以下となります。

*   メンバーのサポートが搭載された enum
*   クラスのsuper 継承に対するパラメータの向上
*   より対応性の上がった名前付き引数

`pachage:lints`（Dart codeのベストプラクティスに対するチェックを  
サポートするツール）の新たなメジャーバージョンや、  
豊富なコードサンプルを含むコアライブラリのAPI ドキュメントの  
幅広い更新により、ツールの向上も行いました。  
プラットフォームの統合の改善のため、  
Flutter プラグインやRISC - V プロセッサーに対する実験的サポート、  
macOSとWindowsの実行ファイルへの署名ためのサポートに、  
`dart:ffi` (ネイティブのCの相互運用)を使った新たなテンプレートが追加されました。

## 生産性向上のための新たな言語の機能

新たな機能の追加と、現存の機能の改善によって、  
より生産性を向上するためにDart 言語を絶えず進化させていきます。  
Dart 2.17 では、  
enum のメンバーに対する新たなメジャーサポート、  
コンストラクタでの名前付き引数の使い方の再構築、  
冗長さと繰り返しをより少なくする、  
スーパークラスに対するパラメーターの受け渡しのためのコード改善を追加しました。

### メンバーで強化されたenum

enum は個別の状態の集合を表現するのにとても良い手法です。  
例えば、water（水）を、`enum Water { frozen, lukewarm, boiling }`として、  
モデル化する、といった形です。  
しかし、enumにいくつかのメソッドを追加したい時、  
例えば温度に寄ってそれぞれの状態を変更したいといった時や、  
enumを`String`に変換したい時、  
どうすれば良いでしょうか？  
おそらく、`waterToTemp` メソッドを追加するといった、extension メソッドを使うことでしょう。  
しかし、これはenumとの同期を注意深くし続けなければなりません。  
`String`への変換に対して、`toString()` のオーバーライドがより好まれますが、  
サポートされていませんでした。

Dart 2.17 では、enum でのメンバーに対する一般的なサポートを追加します。  
これはつまり、状態を持つフィールドや、  
その状態を設定するコンストラクター、  
機能性を持ったメソッド、  
既存のメンバーに対するオーバーライドを追加することができるということです。  
言語トラッカーにて3番目に高い投票数の課題だったこともあり、  
多くの人がこの機能を要求していました。

waterの例で例えると、温度状態を保持する`int` のフィールドと、  
`int`の値を取得するデフォルトのコンストラクタを追加することができます。

```
enum Water {
…
  final int tempInFahrenheit;
  const Water(this.tempInFahrenheit);
}
```

enum の作成時にコンストラクタが呼ばれるようにするため、  
enumの値それぞれに対し、コンストラクタを呼ぶ必要があります。

```
enum Water {
  frozen(32),
  lukewarm(100),
  boiling(212);
…
}
```

`String`への変換をサポートするため、  
`Object`からenumが継承している、  
toStringをシンプルにオーバーライドします。

```
@override
String toString() => "The $name water is $tempInFahrenheit F.";
```

これら2つのアプローチの完成した例は以下の画像のようになります。  
Dart 2.17の方がより簡単に読め、メンテナンスしやすいことがわかります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/enum_compare_2-1024x439.png)

### super での初期化

クラスの継承階層がある時、よくあるパターンは、  
いくつかのコンストラクタのパラメータを  
スーパークラスのコンストラクタへ渡すことです。  
これをするためにサブクラスは以下の手順を取ります。

1.  それぞれのパラメータを自身のコンストラクタで列挙する
2.  それらのパラメータを指定してsuperコンストラクタを呼び出す

この書き方は、繰り返しが多く、コードを読みにくくさせ、保守がより面倒な、  
ボイラープレートなコードとなります。

何名かのDart コミュニティのメンバーがこの事象を助けてくれました。  
スーパークラスでパラメータが指定されたことを表現するための、  
新たなコンストラクタを導入すれば、この問題を解決できそうだ、ということです。  
これは良いアイデアだと考え、Dart 2.17で追加されました。  
以下の例でわかるように、  
これは特にFlutterのWidgetのコードに関連しています。  
実際、この新機能をFlutter フレームワークに適用したところ、  
[合計で約2000行近くのコードが削減されました！](https://github.com/flutter/flutter/pull/100905/files)

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/super_sample_compare-1024x618.png)

### 名前付き引数がどこでも宣言可能に

最後に、メソッドを呼び出す際の名前付き引数の動作を改良しました。  
以前は名前付き引数はメソッドの引数のリストの  
最後に表示しなければいけませんでした。  
これは、位置によって決まる引数を  
コードをより読みやすくするために最後に配置したい場合に迷惑なことでした。  
例えば、次の`List<T>.generate`コンストラクタの呼び出しを見てください。  
以前は`growable`の引数は最後に配置しなければならず、  
ジェネレーターそれ自身を含む位置に寄って決まる引数が大きい場合に、  
その下に配置した`growable`の引数を見落としやすくなっていました。  
現在はそれらを好きなように並べ替えることができ、  
小さな名前付き引数を最初に配置し、  
ジェネレーターを最後に配置することが可能となります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/named_arg_compare-1024x537.png)

これら3つの機能のさらなる例として、  
以下の公式のサンプルを御覧ください。

*   [enum](https://github.com/dart-lang/samples/blob/master/enhanced_enums/lib/members.dart)
*   [superでの初期化](https://github.com/dart-lang/samples/blob/master/parameters/lib/super_initalizer.dart)
*   [名前付き引数](https://github.com/dart-lang/samples/blob/master/parameters/lib/named_parameters.dart)

## 生産性向上のためのツール

続けて生産性の向上をテーマに、コアなツールのいくつかの改善があります。

### lint

Dart 2.14で`package:lint`を導入しました。  
これは、エラーを防止し、  
またより効果的なコードレビューを可能とする正統のスタイルを使用し、  
コードを書く手助けをするDartの静的解析で働くものです。  
それ以来、たくさんの新しいlintが静的解で利用可能となってきました。  
これらについて慎重にトリアージを行い、  
その中から、Dartに対する[10の新しいlint](https://github.com/dart-lang/lints/blob/main/CHANGELOG.md#200)と、  
Flutterに対する[2つの新しいlint](https://github.com/flutter/packages/blob/master/packages/flutter_lints/CHANGELOG.md#200)が選ばれました。  
これらにはimportがpubspec ファイルに含まれるかを確かめるlintや、  
型パラメータに対する不要なnullチェックを防止するlint、  
childのプロパティの配置位置を確かめるlintが含まれます。  
新しいlintは以下のシンプルなコマンドにてアップグレード可能です。

*   Dartパッケージ： `dart pub upgrade —-major-versions lints`
*   Flutter パッケージ：`flutter pub upgrade —-major-versions flutter_lints`

### SecureSockets

SecureSockets はTLS とSSL で保護されたTCPソケットを有効にするために  
一般的に使われます。  
2.17より前のDartでは、  
安全なデータトラフィックを検査する方法がなかったため、  
開発中にこれらのソケットをデバッグするのは困難でした。  
今回keyLog ファイルの指定に対するサポートを追加しました。  
指定した場合、  
新しいTLS 鍵がサーバーと交換された際に、  
[NSS Key Log Format](https://firefox-source-docs.mozilla.org/security/nss/legacy/key_log_format/index.html)内のテキストの行がファイルに追加されます。  
これは、ネットワークトラフィック解析ツール（例：[WireShark](https://gitlab.com/wireshark/wireshark/-/wikis/TLS#tls-decryption)）に、  
ソケットを通して送られたコンテンツを複合することを可能ににします。  
詳細は[SecureSocket.connect()](https://api.dart.dev/stable/2.17.0/dart-io/SecureSocket/connect.html)のAPIドキュメントをご確認ください。

### API ドキュメントへのサンプルコードの追加

`dart doc` ツールによって生成されたAPI ドキュメント は、  
新たなAPIを学んでいるDart 開発者の殆どにとって重要な資産です。  
[コアライブラリ](https://dart.dev/guides/libraries)のAPIには長い間、豊富なテキストによる説明があった一方で、  
多くの開発者は、そのAPIを使っているサンプルコードを読むことによって  
APIについて学びたいと伝えてきました。  
Dart2.17では、主要なコアライブラリを全面的に見直し、  
最も閲覧された上位200ものページに対しサンプルコードを加えました。  
これにより、現在は包括的なサンプルコードが記載されています。  
例えば、`dart:convert`に対するドキュメントを[Dart2.16](https://api.dart.dev/stable/2.16.2/dart-convert/dart-convert-library.html)の時と  
アップデートされた[Dart2.17](https://api.dart.dev/stable/2.17.0/dart-convert/dart-convert-library.html)のときで比較してみてください。  
これによりドキュメントを参照しやすくなることを期待しています。

### コードの削減、ツールの削除

生産性の向上は、プラットフォームに新たな機能が追加された時だけでなく、  
スタックを整理するときや、  
もはや使われない機能を削除するときにも得られます。  
これは、表面積を小さく保ち続けることを助けます。  
特に、新しい開発者にとってこのことは重要なことです。  
これに向けて、`dart:io`ライブラリから[231行もの非推奨のコードを削除しました](https://dart-review.googlesource.com/c/sdk/+/236840)。  
もしあなたがまだ非推奨のAPIを使用しているのなら、  
[dart fix](https://dart.dev/tools/dart-fix) で代替手段にアップグレードすることが可能です。  
これからも非推奨の[Dart CLI ツール](https://github.com/dart-lang/sdk/issues/46100)の削除に対する努力を続けて行きます。  
今回は、`dartdoc`ツール(代替手段として`dart doc` を使用してください)と、  
`pub` ツール(代替手段として`dart pub` 、もしくは`flutter pub`を使用してください)  
の削除を行いました。

## プラットフォームの統合とサポートの拡大

2つ目のコアなテーマは、プラットフォームの統合とサポートです。  
Dartは真にマルチプラットフォームな言語です。  
すでに[幅広い範囲のプラットフォーム](https://dart.dev/overview#platform)をサポートしている一方で、  
それぞれのサポートされているプラットフォームにて深い統合ができることを確かめ、  
新たなプラットフォームをサポートできるように常に進化していきます。

### flutter ツールへのテンプレートの追加

Dart FFI （ [C やネイティブのコードと相互運用](https://dart.dev/guides/libraries/c-interop)するためのコアなメカニズム）が、  
現存のネイティブのプラットフォームのコードと  
Dartのコードを統合する、よく知られた方法です。  
Flutterでは、ホストのプラットフォームから  
ネイティブのAPI(Windows のWin32 APIなど)  
を使用するプラグインを構築することが良い方法です。  
Dart 2.17と Flutter 3 では、  
ネイティブコードへ呼び出す`dart:ffi`によって支えられたDart APIを持つ  
FFI プラグインをより簡単に作成できるように、  
`flutter` ツールにテンプレートを追加しました。  
詳細は更新された[developing packages and plugins](https://docs.flutter.dev/development/packages-and-plugins/developing-packages#dart-only-platform-implementations) ページを御覧ください。

### ABI に特化した型のサポート

ABI ([application binary interface](https://en.wikipedia.org/wiki/Application_binary_interface)) への特定の型を持った  
プラットフォームのFFIを使用できるようにするため、  
FFI はABI に特化した型をサポートするようになりました。  
例えば、CPU アーキテクチャによって 32 -bit、または64-bitになる、  
ABI 特化型のサイズを持った長い整数型の正しい表現をするための、  
Long 型(C言語のlong型)を使えるようになりました。  
サポートされた型のすべてのリストは、  
[AbiSpecificInteger](https://api.dart.dev/stable/2.17.0/dart-ffi/AbiSpecificInteger-class.html) API ページの"Implementers "のリストを御覧ください。

### メモリ等のクリーンアップの改善

Dart FFI を使ってネイティブプラットフォームと深く統合する場合、  
Dartとネイティブコードによって割り当てられた  
メモリや他のリソース(ポート、ファイルなど)のクリーンアップを  
揃える必要がしばしばあります。  
これは、Dartが自動的にクリーンアップを制御する  
ガベージコレクション言語であることから、昔から非常に困難なものでした。  
Dart 2.17 は、ファイナライズされるべきでない物、  
早期に破棄されるべきでないものをタグ付するための、  
`Finalizable`のマーカーインターフェースを含むFinalizerや、  
オブジェクトがガベージコレクションされる際に実行される  
コールバックを提供するDart オブジェクトをアタッチすることができる  
`NativeFinalizer` クラスのコンセプトを導入することでこれを解決します。  
これらを組みわ焦ることで、ネイティブとDartコードの両者の  
クリーンアップコードを実行することができます。  
詳細は、[NativeFinalizer](https://api.dart.dev/stable/2.17.0/dart-ffi/NativeFinalizer-class.html)の説明と例のAPIドキュメントをご覧になるか、  
通常のDartコードでの同様のサポートのための、  
[WeakReferences](https://api.dart.dev/stable/2.17.0/dart-core/WeakReference-class.html)と[Finalizer](https://api.dart.dev/stable/2.17.0/dart-core/Finalizer-class.html)のドキュメントを御覧ください。

### 実行ファイルへの署名のサポート

Dartをネイティブコードへコンパイルするためのサポートは、  
Flutter アプリのすばらしい起動のパフォーマンスと高速な描画を可能にする、  
コアの部分となります。  
２つ目のユースケースは、  
`[dart compile](https://dart.dev/tools/dart-compile)`での実行ファイルへDartをコンパイルする能力です。  
これらの実行ファイルはDart SDK がインストールされている必要がなく、  
どんな端末でもスタンドアローンで実行が可能です。  
Dart 2.17 でのもう一つの新たな能力は、  
[実行ファイルのへの署名](https://dart.dev/tools/dart-compile#exe)のためのサポートです。  
これは、署名がよく要求されるWindows やmacOSへの  
デプロイメントを可能にします。

### 対応プラットフォームの拡大

また、新たなプラットフォームの開発に取り組むことで、  
対応プラットフォームの拡大をし続けています。  
[RISC-V](https://riscv.org/about/) はプロセッサーに対する新しい革新的な命令セットです。  
世界的非営利機関の RISC-V International は、  
命令セットを無料でオープンにする、RISC-V Specificationを所有しています。  
これはまだ新しいプラットフォームですが、  
そのポテンシャルに期待しており、  
`2.17.0-266.1.beta` Linux リリース(またはbetaチャンネルの最新)にて、  
試験的にサポートを開始しています。  
フィードバックをお待ちしています。

## まとめ

Flutter 3と同時に更新された、  
Dart 2.17 の変化点について書かれた記事の翻訳に対し、  
適宜情報を付け加えながら、要約を行いました。

いかがだったでしょうか？

enumの変化が一番大きく、目を取られがちですが、  
ドキュメントの更新など、細かなサポートも注目したいところですね。

また、Flutter 3 での更新情報についてはこちらの記事を御覧ください。

https://blog.flutteruniv.com/

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/5/14）

Dart 2.17 についての要約記事でした。

今回のFlutter 3での変化点を追っている人は、  
このDart 2.17の変化点、特にenumの変化に注目している方が多いかと思います。

Extensionで実装していたのがenumの中で書けるようになるのは、  
かなり便利と言って良いのではないでしょうか。

個人開発でもDartPadでも良いので、  
ぜひ今一度使用してみてこの便利さを味わってみてください。

要約記事を書いていて、  
目につかないところでとても多くのアップデートがなされている、  
ということに気付かされます。

自身のキャッチアップの糧となっているので、  
本当に良い経験をさせてもらっている、と思います。

あなたも気になる記事やドキュメントの日本語化をしてみると、  
普段気づかないことに気付かされるかもしれません。

ぜひ興味があれば、やってみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。