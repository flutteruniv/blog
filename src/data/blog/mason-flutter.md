---
title: "【 Mason 】コード生成を自動化しよう！【 Flutter 】"
description: ""
pubDatetime: 2022-06-24T13:40:26.000Z
categories: ["flutter"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

Mason ? 聞いたこと無いな、、、どんなツールなの？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)

いろいろなプロジェクトで何度も同じコードを用意するのは面倒だわ！

自動化できないかしら？

本記事ではそんな疑問、要望にお答えします。

今回は [Mason](https://pub.dev/packages/mason_cli#built-in-lambdas) によるコード生成の自動化を紹介します！

これを使えば何度も行うコードのコピペをコマンドで自動化することができます！

昨日(2022年6月23日)、Flutter のPackage of the Week でも紹介されていました。

https://youtu.be/qjA0JFiPMnQ

本記事では、基本的な使い方から、  
テンプレートの作成方法、  
最後にはflutter create の代わりになるテンプレートの紹介を行います。

とても便利なツールなので本記事を読んでぜひ使ってみて下さい！

## Mason とは

https://pub.dev/packages/mason\_cli#built-in-lambdas

Mason とは、コード生成を自動化してくれるツールのことです。  
Dartで作成されており、オープンソースのツールとなっています。

例えば、Flutterのコードを書く際に、  
新しいファイルに`Stateless Widget` 用意することがあるかと思います。

新規ファイル作成  
→StatelessWidgetを作成  
→名前の書き換え  
→material.dartのimport  
という作業を、ファイルを作る度に行う訳です。

これって面倒ですよね。

これをコマンド一発で自動で生成してくれるのがMason （Mason CLI） です。

Mason ではbricks と呼ばれるテンプレートを登録しておくことで、  
自動的にコード生成することが可能となります！

自動化により、

*   コピペミス、打ち間違いによるエラーの減少
*   作成時間の短縮

を見込む事ができます。

作業の効率化に役立つとても良いツール、それがMasonです。

## Mason の基本的な使い方

早速、Mason の基本的な使い方について解説していきます。

### インストール

Mason CLI のインストールは以下のコマンドにて行なうことができます。

```bash
dart pub global activate mason_cli
```

Homebrewからインストールする場合は以下のコマンドとなります。

```
brew tap felangel/mason
brew install mason
```

インストールを確認したら、

```bash
mason
```

とコマンドを実行しましょう。  
以下の画像のようにヘルプが現れたら、無事Mason のインストールは完了です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-24-18.03.48.png)

### Mason での初めてのコード生成

Mason の基本データやテンプレートを保存するフォルダを配置したいフォルダを新規作成し、  
そのフォルダにコマンドラインインターフェース（以下、ターミナルと表記）で移動し、  
以下のコマンドを打ってMason の初期化を行います。  
（今回はmason というフォルダを新規作成し行います。）

```bash
mason init
```

すると以下の画像のようにMasonで使用するファイルが自動生成されます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-24-18.05.49.png)

mason.yaml を見ると、hello というファイルが登録されていることがわかります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/20220624_mason_init-1024x709.png)

続いて、以下のコマンドで、  
mason.yaml に登録されているテンプレート(bricks)をすべて取得します。

```bash
mason get
```

ここまでできれば、コード生成の準備は完了です！

以下のコマンドで、helloのテンプレートを自動生成してみましょう。

```bash
 mason make hello
```

`mason make ~` のコマンドがコード生成のコマンドとなります。

"What is your name?"と聞かれるので、好きな名前を記入します。

すると、以下の画像のようにフォルダ内にHELLO.md が自動生成されます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-24-18.19.27.png)

`mason make <<テンプレートの名前>> -o <<フォルダのパス>>`

でフォルダのパスで設定したフォルダにファイルを生成することができます。

### 自作テンプレート(bricks)の作成方法

続いて自作テンプレートを登録し、使用する方法を解説します。  
今回は、Stateless Widgetを自動生成するテンプレートを作成してみたいと思います。

テンプレートを保存するフォルダとしてbricksフォルダを新規作成し、ターミナルで移動します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-24-18.38.29.png)

以下のコマンドを打ち、my\_stateless\_widget という名前のテンプレートを作成します。

```
mason new my_stateless_widget
```

mason new ~ のコマンドが、新規テンプレート作成のコマンドとなります。

すると、以下の画像のようにファイルが追加されます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-24-19.01.16.png)

重要なファイルだけ解説します。

*   \_\_brick\_\_ フォルダに入っているファイル、フォルダがテンプレートとして自動生成されます。
*   brick.yamlにて、後述する変数を設定することができます。

早速brick.yaml を見てみましょう。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/20220624_mason_brick_yaml-992x1024.png)

ポイントは23行目 ~ 28行目のvars です。

ここで、ファイル名等 の変数を定義することができます。  
現在は、`name` という`String` の変数が設定されていることとなります。

変数の設定項目については割愛します。  
詳しくはyaml ファイルのコメントを確認下さい。

今回はこのname という変数を使ってテンプレートのファイルを作成していきます。

変数を使用する際には、`{{name}}`といったように、波括弧2つで囲んで使用します。

\_\_brick\_\_フォルダに、{{name.snakeCase()}}.dartというファイルを作成し、  
以下のように記載します。

```dart
import 'package:flutter/material.dart';

class {{name.pascalCase()}} extends StatelessWidget {
  const {{name.pascalCase()}}({super.key});

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

`.snakeCase(), .pascalCase()`は、変数を自動で整形してくれるシンタックスとなっています。

例：`.pascalCase()`の場合、`name` として`"my widget "`と入力されると、  
`"MyWidget"`となります。

詳細は[こちら](https://pub.dev/packages/mason_cli#built-in-lambdas)

Flutter 3 を使用している前提の記載であることにご注意下さい。

作成したテンプレートをmason に登録しましょう。

bricksフォルダに移動して以下のコマンドを打ち、作成したテンプレートをmason に登録します。

```
mason add -g my_stateless_widget --path my_stateless_widget
```

`mason add <<作成したテンプレートの名前>> --path <<テンプレートまでのパス>>`  
でmasonで使用できるテンプレートとして登録されます。

`mason add -g <<作成したテンプレートの名前>> --path <<テンプレートまでのパス>>`  
と`-g`をつけることで、現在のフォルダに関わらず、  
どこでも作成したテンプレートを使用できるようになります。

任意のフォルダで、`mason make my_stateless_widget` を実行してみて下さい。  
名前の入力後、入力された名前の`StatelessWidget`が生成されれば成功です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-24-20.24.36-1024x745.png)

以上が基本的な使い方となります！

## 応用編 自作のFlutterプロジェクトテンプレートを作成する

ここからはmason の応用編となります。  
自作のFlutterプロジェクトのテンプレートを作成してみます。

以下の項目を満たすプロジェクトを作成します。

*   pubspec.yaml や main.dartなどでコメントが削除されている
*   main.dart がシンプルな状態になっている
*   pubspec.yaml が整理され、[pedantic\_mono](https://pub.dev/packages/pedantic_mono)が導入されている
*   analysis\_options.yaml がpedantic\_monoに対応している
*   Flutter 3 に対応している

以下では作成の流れを記載します。

結果だけみたい、使ってみたい方は、最後の”使用方法”まで飛んでください。

### 作成の流れ

`flutter create mason_sample`でmason\_sample という名前のFlutterプロジェクトを生成します。

次に、ファイルの検索機能を使って、  
mason\_sample という単語が使われているファイルを検索します。

検索して出てきたファイルに対し、  
適宜シンタックスを使いながらmason\_sampleという単語を`{{name}}`に書き換えていきます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-24-20.45.29-1024x716.png)

gitignore されるファイルは対応不要です。

次に、`mason new my_flutter_template` でテンプレートファイルを作成し、  
先程編集したFlutter プロジェクトをFlutter プロジェクトの名前を`{{name}}` に変え、  
\_\_brick\_\_フォルダに入れます。

作成したmy\_flutter\_template ファイルをGitHubのリポジトリにアップロードします。

これで準備は完了です！

### 使用方法

以下のコードで、Mason に作成したテンプレートを登録します。

```bash
mason add -g my_flutter_template --git-url https://github.com/Umigishi-Aoi/my_flutter_template.git
```

あとは、以下のコマンドでテンプレートからプロジェクトを作成するだけです。

```bash
mason make my_flutter_template 
```

名前の入力を求められたら、スネークケースで好きな名前を入力します。

入力が終わると、、、

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-24-22.22.23-1024x932.png)

ファイルが生成されました！  
`flutter pub get` をすれば、自由にFlutterプロジェクトとして扱えます！

![](https://blog.flutteruniv.com/wp-content/uploads/2022/06/スクリーンショット-2022-06-24-22.18.05-1024x852.png)

今回作成したテンプレートはこの章で紹介した、`mason add ~` のコマンドを実行すれば、  
誰でも実行可能となります。

ぜひ初期プロジェクトとして使ってみて下さい！

## まとめ

本記事では、コード生成自動化ツール、Masonの  
基本的な使い方から、テンプレートの作成方法、  
最後にはflutter create の代わりになるテンプレートの紹介を行いました。

いかがだったでしょうか？

今回紹介した内容以外でも、さまざまなカスタマイズが可能となっています。

以下で紹介する参考動画や、記事、  
[公式のパッケージ紹介ページ](https://pub.dev/packages/mason_cli)にて、カスタマイズ方法を確認してみてください。

また、世界中の人が作成したテンプレート集が以下のページで見ることができます。

https://brickhub.dev/

ダウンロードも可能となっています。

こちらも併せてご確認下さい。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 参考

https://youtu.be/G4PTjA6tpTU

https://verygood.ventures/blog/code-generation-with-mason

## 編集後記（2022/6/24）

Mason についての記事でした。

テンプレート作成は作成時は大変ですが、  
一度作成してしまえば 何度も使い回すことができるので、  
作る労力に見合ったものかと思います。

自分も今回作成したテンプレートを今後使いまわして行こうと思います。

今回作成したテンプレートは、静的解析に特化していて、  
Flutterの文法ルールに則ったコードを書きたい際には  
非常に良いテンプレートとなったかと思います。

ぜひ、新規でプロジェクト作成の際には使ってみて下さい！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。