---
title: "【 M2 対応】 Flutter 環境構築"
slug: "flutter-build-environment-m2"
author: "Aoi"
description: ""
pubDatetime: 2022-08-05T13:13:28.000Z
tags: ["beginer"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)

M2 の Mac端末を導入したんだけれど、  
Flutterの環境構築ってどうやったら良いんだろう?

本記事ではそんな疑問にお答えします。

M2 Mac端末でのFlutterを使えるようにする方法（環境構築方法）について解説します。

M1時と比べて特別対応が必要だったのかどうかについて、  
調査結果をまず述べます。

環境構築の方法では、  
Android Studio のセットアップだけでなく、  
Visual Studio Code のセットアップ方法についても解説しています。

ぜひ読んでみて下さい！

今回紹介する環境構築方法は、以下の端末、環境で行います。

端末： MacBook Air (M2、2022)  
メモリ：24GB  
OS：macOS Monterey バージョン 12.5  
Xcode：バージョン13.4.1  
Android Studio：2021.2.1 Patch 2 for Mac  
Visual Studio Code：バージョン 1.70

またブラウザとしてGoogle Chromeを用います。

## 結論：M2での特別対応は不要

![](https://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

本記事の結論ですが、M1時の環境構築と比べてM2に対する特別対応は**不要**でした。

そのため、現状諸先輩方が出しているM1の環境構築方法の記事や動画にて、  
環境構築することが可能です。

本ブログの以下記事は動画付きで環境構築方法について解説し、  
環境構築後何をやったら良いかまで解説しているのでオススメです。

https://blog.flutteruniv.com/flutter-entrance/

本記事の残りの部分では、  
2022年8月時点の最新の情報を元にした環境構築方法を解説します。  
上記記事にはないVisual Studio Codeの環境構築方法についても解説していますので、  
ぜひ読んでみて下さい。

## 環境構築 方法

具体的な環境構築方法について解説していきます。

本記事は2022年8月時点での [公式の環境構築方法紹介ページ](https://docs.flutter.dev/get-started/install/macos)を参考に、  
スクリーンショットを載せて環境構築方法を紹介していきます。

環境構築では以下を導入していきます。

*   Flutter SDK (ソフトウェア開発キット)
*   Xcode (iOSの仮想端末等を使うのに必要)
*   Android Studio (Androidの仮想端末等を使うのに必要)
*   Visual Studio Code (コードを実際に書くためのソフト)

Visual Studio Codeは Android Studio で代用可能です。  
お好みで導入して下さい。

### Apple Silicon チップ macOSの対応

intel 製チップを用いたMac用のToolを  
Apple Silicon 製 チップを用いたMacで使えるように変換できるようにする設定を行います。

画面下のドック内Launchpad → その他 → ターミナルで、  
ターミナルを開き以下のコマンドを打ち込み実行します。

```bash
sudo softwareupdate --install-rosetta --agree-to-license
```

パスワードを求められるので、PCのログインパスワードを入力します。  
Install of Rosetta 2 finished successfullyと表示されれば完了です。

### Flutter SDK の導入

Flutter SDK の導入を行っていきます。

#### SDK のダウンロード 、解凍

以下の赤枠のボタンをクリックし、ダウンロードフォルダにzipファイルをダウンロードします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-15.25.25-1024x435.png)

次に Flutter SDK を保存するフォルダを用意し、  
そのフォルダにターミナル(Mac の CLI )で移動します。

例としてルートディレクトリ(自分の名前のフォルダ、書類等が保存されているフォルダ)  
にdevelopmentフォルダを作成し、そのフォルダにSDKを保存することにします。  
Finderで自分の名前のフォルダに空のdevelopmentフォルダを作成します。  
ターミナルを開き、以下のコードを打ち込み実行します。

```dart
cd ~/development
```

フォルダへの移動ができたら、以下のコマンドを実行します。

```bash
 unzip ~/Downloads/flutter_macos_arm64_3.0.5-stable.zip
```

以上でダウンロード、解凍は完了です！

#### パスを通す

次に、Flutter SDK を PCのどの場所でも参照できるようにする設定を行います。  
（この設定をパスを通す、と呼びます。）

ターミナルを開き直してルートディレクトリにいることを確認し、  
以下のコマンドを実行して.zshrc という名前のファイルを作成します。

```
vi .zshrc
```

テキストファイルの編集画面となるので、  
このファイルに以下の文を追加します。

```
export PATH="$PATH:フラッターSDKの場所/bin"
```

この文の"フラッターSDKの場所"の部分は、"先程保存したFlutterSDKのフォルダ/SDK"として下さい。

上で例の通りルートディレクトリに作ったdevelopmentフォルダに保存した場合は、  
以下の文となります。

```
export PATH="$PATH:Users/自分の名前/development/flutter/bin"
```

"自分の名前"の部分はルートディレクトリで表示される自分の名前を設定します。  
例：ターミナルにて yamadataro@yamadataronoMac-Book-Air ~ % と書かれていたら  
以下となります。

```
export PATH="$PATH:Users/yamadataro/development/flutter/bin"
```

入力後、:wqを打ち込み保存し編集画面を終了します。

次にパスの有効化のため以下のコマンドを打ち込み実行します。

```bash
source .zshrc
```

パスが通ったか確認のため以下のコードを打ち、  
Flutter SDK のあるフォルダ(末尾がflutter/bin)が表示されるかチェックします。

```dart
echo $PATH
```

再度確認のため以下のコマンドを打ち、flutter コマンドが実行可能かチェックします。

```
which flutter
```

末尾がflutter/bin/flutterのコードが表示されればOKです。

以上でFlutter SDK の導入は完了です！

### Android Studio の導入

コードを書く作業やAndroidの仮想端末(エミュレータ)の使用ができるように  
Android Studio を導入します。

[こちらのページ](https://developer.android.com/studio?gclid=CjwKCAjw3K2XBhAzEiwAmmgrAkSDK8x_IGKI-1YURBC4iDOq4cWmU66H-GIV9IvDRZYh8UzXa2CIORoCxYUQAvD_BwE&gclsrc=aw.ds)を開き、以下の画像の赤枠のボタンをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-8.22.45-1024x524.png)

ライセンスの確認画面となるので、確認の上チェックボックスにチェックを入れ、  
以下の赤枠のボタンをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-8.23.11-1024x273.png)

ダウンロードしたdmg ファイルを開き、  
Android Studio のアイコンを Application フォルダにドラッグ＆ドロップします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-16.38.56-1024x637.png)

ドックからAndroid Studio を開きます。

Android Studio の設定をインポートするか問われます。  
今回は引き継がないので下を選択します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-16.43.43.png)

以下の画像のように利用に関するデータ収集に協力するか問われるので、  
NO (左のボタン)かYES(右のボタン)かを選択します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-16.44.56-1024x568.png)

以下の画像のように

セットアップウィザードが開きます。  
Nextを選択します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-16.47.43-1024x771.png)

以下の画像のようにセットアップのタイプ選択を求められます。  
今回はStandardを選択し、Nextをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-16.49.31-1024x769.png)

以下の画像のようにテーマ選択画面となります。  
お好みのテーマを選択し、Nextをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-16.54.11-1024x774.png)

今までの設定の確認画面となるので、  
確認の上Nextをクリックします。

次に以下の画像のようにライセンスの確認画面となります。  
確認し問題なければ下方にあるAcceptにチェックを入れます。  
android-sdk-arm-dbt-licenseの方も選択して確認し、問題なければAcceptにチェックを入れます。  
全て完了の後、Finishをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-16.56.44-1024x769.png)

ダウンロードが開始され、完了後Finishを押してAndroid Studioの導入は完了となります。

### Xcodeの導入

iOSアプリの申請やiPhoneの仮想端末(シミュレータ)の使用ができるようにするために、  
Xcodeを導入します。

macOS のApp StoreにてXcodeを検索しインストールします。  
（インストールに多少時間がかかります。）

Xcode を開こうとすると、ライセンス確認のダイアログが表示されます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-13.41.17.png)

内容を確認の上、agreeを押すとパスワードの入力を求められるので、  
PCのログインパスワードを入力します。

自動でXcodeが開かないので、ドックのアイコンをクリックすると、Rosettaをインストールするか問われるのでinstallを押下します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-13.45.04.png)

またパスワード入力を求められるので、PCのログインパスワードを入力し、インストールします。

再度ドックのアイコンをクリックすると下記画像が表示されます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-13.51.07-1024x592.png)

以上でXcodeの導入は無事完了となります！

### flutter doctor でのチェックとエラー対応

flutterの設定が完了しているかチェックするコマンド、`flutter doctor -v`を用いてチェックしながら、  
エラー対応を行っていきます。

`flutter doctor -v`の実行結果は以下の通りです。  
（ターミナルで実行します。実行場所はどこでも構いません。）

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-17.10.56_-847x1024.png)

3つほどエラーが出ているので一つ一つ解説していきます。

#### cmdline-tools component is missing の解消

コマンドラインツールが無い、という内容のエラーです。  
以下の手順でコマンドラインツールをインストールします。

Android Studioを開き、左上のAndroidStudio → Preferencesを選択します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-17.24.08.png)

Appearance & Behavior > System Settings > Android SDK  
を開きます。  
SDK Toolsのタブを選択し、  
Android SDK Command-line Tools (latest)のチェックボックスにチェックを入れ、  
OKを押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-17.28.01-1024x742.png)

容量に関する確認ダイアログが出るので確認の上OKを押下します。  
インストール後Finishを押して完了です。

再度 `flutter doctor -v` を行い、  
cmdline-tools component is missingのエラーが消えていれば対応は完了です。

#### Android license status is unknown の解消

ライセンスへの確認が不十分、というエラーです。

以下のコマンドをターミナルで打ち込み実行します。  
（実行場所はどこでも構いません。）

```bash
flutter doctor --android-licenses
```

"Review licenses that have not been accepted (y/N)?"  
と尋ねられます。  
”ライセンスの確認をしますが、よろしいですか？”と効かれているので  
キーボードでyを打ち込みEnterを押します。

その後ライセンス文が表示され、”Accept? (y/N)”と聞かれるので、  
問題なければ yを打ち込みEnterを押します。

ライセンスの確認が何度か繰り返されるので対応します。

"All SDK package licenses accepted"と出れば確認は完了です。

再度 `flutter doctor -v` を行い、  
Android license status is unknownのエラーが消えていれば対応は完了です。

#### **CocoaPods not installed** の解消

iOS のライブラリの依存関係を管理するツールのCocoapod がインストールされていない、  
というエラーです。

以下のコマンドを打ち込みcocoapod のインストールを行います。

```bash
sudo gem install cocoapods
```

パスワード入力を求められるので、PCのログインパスワードを入力します。

また、Apple Silicon 製 Mac での対応として以下のコマンドを実行します。

```bash
sudo gem uninstall ffi && sudo gem install ffi -- --enable-libffi-alloc
```

ffiの削除に対して本当に削除して良いか問われるので、yで回答します。

再度 `flutter doctor -v` を行い、  
CocoaPods not installed のエラーが消えていれば対応は完了です。

以上の対応でflutter doctor のエラーは全て消えたはずです。  
お疲れさまでした！

### 初めてのアプリケーションの作成と仮想端末での実行

初めてのアプリケーションの作成とiOS/Androidの仮想端末での実行をしてみましょう。

#### 初めてのアプリケーションの作成

ターミナルを開き、  
Flutterのプロジェクト(アプリケーションに関するファイルがまとめられたフォルダ)  
を保存したいフォルダに移動します。

ユーザーネームのフォルダ > deveropment > projectsフォルダに保存したい場合は、  
ターミナルを新しく開き、

```bash
cd ~/development/projects
```

と打ち込み実行します。

次に以下のコマンドを打ち、my\_app という名前のFlutter プロジェクトを作成します。

```bash
flutter create my_app
```

これで初めてのFlutterプロジェクトが作成されました！

#### iOSの仮想端末での実行

iOSの仮想端末（シミュレータ）にてアプリを実行してみましょう。

ターミナルにて以下のコマンドを実行し作成したFlutterプロジェクトのフォルダに移動します。

```bash
cd my_app
```

次に以下のコマンドを実行し、シミュレータを起動します。

```bash
open -a Simulator
```

ではいよいよアプリを実行してみましょう。  
以下のコマンドを実行します。

```bash
flutter run
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-19.03.15-503x1024.png)

おめでとうございます！初めてのアプリが実行できました！

flutter create で作られるアプリは通称カウンターアプリと呼ばれます。  
その名の通り、プラスボタンを押すことで真ん中の数字がカウントアップされるアプリです。

シミュレータのアイコンから下の画像のように選択することで、  
起動するシミュレータの機種を変更することが可能です。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-20.06.00-1024x938.png)

#### Android の仮想端末での実行

Androidの仮想端末（エミュレータ）にてアプリを実行してみましょう。

iOSのシミュレータが実行中の場合は閉じるボタンで閉じておきます。

ターミナルで現在の場所が作成したFlutterプロジェクトでない場合は、  
以下のコマンドを実行し作成したFlutterプロジェクトのフォルダに移動します。

```bash
cd my_app
```

次にAndroid Studioを開き、More Actions > Virtual Device Manager を選択します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-19.09.43-1024x766.png)

エミュレータの一覧画面です。  
エミュレータの下矢印をクリック > Wipe Data を選択します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-19.20.05-1024x308.png)

次に横向き三角の実行ボタンを押し、エミュレータを起動します。  
（初回はマイクへの接続を求められるのでOKを押下します。）

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-19.21.58-1024x179.png)

ではいよいよアプリを実行してみましょう。  
ターミナルにて以下のコマンドを実行します。

```bash
flutter run
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-19.24.29-565x1024.png)

おめでとうございます！Androidでも初めてのアプリが実行できました！

### エディタの設定

実際にコードを編集するエディタの設定を行います。  
Android Studio と Visual Studio Code それぞれで解説していきます。

#### Android Studio の場合

Android Studio の場合のセットアップ方法を解説します。

Android Studio の初期画面のPlugins を選択し、  
Flutter プラグインをインストールします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-19.57.58-1024x781.png)

いくつか確認のダイアログが出てくるので、確認の上ボタンを押し次へ進みます。

インストール後Android Studioを再起動すると、  
以下のように初期画面が変わります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-20.00.54-1024x767.png)

New Flutter Project を選択すると、新しいFlutterプロジェクトを作成できます。

openを選択し、前の節で作成したmy\_appのフォルダを選択してopenしてみましょう。

以下の編集画面を開くことができます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-20.05.42-1024x595.png)

赤枠のボタンを押すことでエミュレータの選択画面を開くことができます。

エミュレータを実行した状態で、赤枠左側の緑の三角ボタンを押すことで  
Flutterアプリケーションを実行することができます。

以上がAndroid Studio のセットアップ方法でした。

#### Visual Studio Code の場合

Visual Studio Code (以下 VS Code)の場合のセットアップ方法を解説します。

[こちらのページ](https://code.visualstudio.com/)を開きDownload Mac Universal をクリックします。

Zipファイルがダウンロードできるのでダウンロードします。

ターミナルで任意のフォルダに移動し、以下のコマンドを実行します。

```
unzip ~/Downloads/VSCode-darwin-universal.zip
```

VSCode-darwin-universal.zipの部分は  
ダウンロードしたファイル名を入力して下さい。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-20.30.03-1024x501.png)

解凍してできたVisual Studio Code.appをアプリケーションフォルダに  
ドラッグ&ドロップします。

アプリケーションフォルダから今移動したVS Codeのアプリを開きます。

セットアップが開始されます。  
まずは以下の画像のようにテーマの設定です。  
右4つのテーマから好きなテーマを選択します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-20.32.16-1024x769.png)

その他のGet Started の内容は今回のセットアップの内容から外れるので省略します。  
時間のある時に確認を行って下さい。

以下の画像の赤枠のボタンをクリックすると、  
拡張機能の選択、インストール画面となります。  
左上の検索バーで"Flutter"を検索し、Flutterの拡張機能を表示します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-20.46.43-1024x770.png)

Installを押下し、Flutterの拡張機能をインストールします。

インストールが完了したら左上のFile > Openで先程作成したmy\_appのフォルダを選択し  
開きましょう。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/08/スクリーンショット-2022-08-05-20.57.38-1024x772.png)

画面右下の赤枠の部分をクリックすると、アプリを実行する端末の選択が表示されます。  
エミュレータを選択するとエミュレータを立ち上げることができます。

エミュレータを起動した状態でキーボードのF5のボタンを押すと  
アプリを実行する事ができます。

以上でVisual Studio Codeのセットアップは完了です！

## まとめ

本記事ではM2 Mac端末でのFlutterを使えるようにする方法（環境構築方法）  
について解説しました。

Android Studio のセットアップだけでなく、  
Visual Studio Code のセットアップ方法についても解説しました。

いかがだったでしょうか？

結論M2だからといって、M1の際の対応より必要なことが増えることはありませんでしたが、  
今回それが確認できたことが一つ意義となったかと思います。

ぜひ本記事を参考に環境構築をしてみて下さい。

本記事があなたのアプリ開発の一助となれば幸いです。  

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/8/5）

M2 Mac の環境構築の記事でした。

というわけで、M2のMacBook Air を手に入れました！  
今までの作業環境はiMac(24インチ 2021年モデル)だったので、  
外での作業ができず、たまにある外出の機会で対応ができなかったため、  
今後の機会の拡大のために購入をしました。

届いてまだ3日目、といった状態ですがすでに良さを味わっています。

まず、ミッドナイトの配色がめっちゃ良いです。  
高級感というか特別感があって、机の上に置いていてとてもテンションが上がります。

また、macOS 12.3 で追加されたユニバーサルコントロールがとても良いです。  
ユニバーサルコントロールはmacOS や iPadOSの端末同士を近づけるだけでサブディスプレイのように2つの端末間のデータ移動を可能にする機能です。  
自分はこの機能を使い、  
家ではMacBook Airをサブディスプレイとして活用することとしたところ、  
単純に情報を表示できる場所が一画面増えたので、とても快適になりました。

重さは思ったより少し重いかな、と思いましたが、使っていくうちに気にならなくなるかな、  
と思います。

M2の性能面の検証はこれからなので、何かあればまた伝えようと思います。

ぜひこちらもお楽しみにしていただければと思います。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。