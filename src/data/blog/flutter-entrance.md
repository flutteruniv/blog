---
layout: "../../layouts/BlogPost.astro"
title: "Flutter入門 ~ 環境構築から初心者向け学習方法まで ~ 【動画付き】"
description: ""
pubDatetime: "2022-04-27"
author: Aoi
slug: "flutter-entrance"
featured: false
draft: false
tags: ["初心者向け", "Flutter"]
ogImage: ""
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)
Flutter、最近話題だけど、どうやって始めたらいいんだろう？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)
Flutterの初心者向けの勉強の方法を知りたいわ！

本記事ではそんな疑問、要望にお答えします。

Flutterの入門の仕方として最初にやるべき環境構築の方法について動画付きで解説します。
また、初心者向けの学習方法についても紹介します。

この記事を読めば、Flutterを始めたい人が何をやればいいのか、
一気通貫でわかります。

しかも学ぶだけならかかるお金は**０円**です。
無料で準備、基礎を身につける方法について解説します。

初心者必見の内容となっています。
ぜひ読んでみてください！

## Flutterとは

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/パソコン.jpeg)

Flutterとは、「**アプリケーション作成のためのフレームワーク**」です。

モバイルアプリだったりWebアプリだったりを一つのコードで作成できるツールが、
Flutterです。

Flutterとは何かについて、より詳しい内容は以下の記事、動画にて解説しています。
併せてぜひ確認してみてください。

https://blog.flutteruniv.com/flutter-explanation/

https://www.youtube.com/watch?v=-G7nW26N7_4&t=4s

### Flutter の始め方

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)
アプリケーション作ってみたいけど、何から始めれば良いの？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doctor.png)
まずはあなたのお使いのPCでFlutterが使えるようにする、

Flutterの**環境構築**をしましょう！

Flutterでアプリケーションを作り始めるためには、
あなたのPCにてFlutterが使える状態にする必要があります。

これを、**Flutterの環境構築をする**、と言います。

次の章から、動画付きでFlutterの環境構築をしていきましょう。

## 環境構築

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

Flutterの環境構築の方法について解説していきます。

本記事では、**Apple M1チップ** (Pro, Max等問わず)搭載のMac PCを対象に、
環境構築の方法について解説します。

Windows PCをお使いの方については、
[こちら](https://youtu.be/6J-KK1Ft9NY)の動画で環境構築の方法について解説していますので、御覧ください。

また、Intel 製チップを搭載したMac PCをお使いの方については、
[こちら](https://youtu.be/kpvVENfDCRc)の動画を御覧ください。

解説動画は以下の動画になります。

https://youtu.be/I6TpDuSFbTc

こちらの動画に沿って、本記事では解説を行っていきます。

### Android Studio のダウンロード

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=57s)。

[こちら](https://developer.android.com/studio)から、Android Studio をダウンロードします。

Download Android Studio と書かれたボタンを押すと、利用規約が出てきます。
利用規約を読んだ上で、文末にある同意のチェックボックスにチェックを入れ、
**Mac with Apple chip** と書かれたボタンをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-15.20.43.png)

任意のフォルダを選択し、ダウンロードをしましょう。

### Xcode のインストール

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=106s)。

[AppStore](https://apps.apple.com/jp/app/xcode/id497799835?mt=12)から、Xcodeをインストールします。
インストールにかなりの時間がかかるため、インストール中に次の手順を行います。

### Android Studio のセットアップ

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=127s)。

Android Studio のダウンロードが終わった後、セットアップを行います。

ダウンロードしたdmgファイルを開くと、以下の画面がでてきます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-16.11.36-1024x627.png)

このファイル上でAndroid Studio.app をApplicationsにドラッグ＆ドロップし、
ApplicationsフォルダにAndroid Studio.appを配置しましょう。

次に、Android Studio.appを開きます。

開こうとすると出てくる以下のダイアログでは、
以前設定したAndroid Studioの設定を再設定するか問われています。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-16.18.50.png)

初めてAndroid Studio を設定する場合は、
"Do not import settings"をチェックしてOKを押しましょう。

Android Studio が立ち上がると、以下のダイアログが出てきます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-16.22.33.png)

Googleのデータ収集に協力するか、と問われています。
協力する場合は"Send usage statistics to Google"を、
しない場合は"Don't send"を選択しましょう。

次に以下のSetup Wizardの画面が開かれます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-16.34.49.png)

上記画面でNextをクリックします。
すると次の画面になります。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-16.36.14.png)

インストール方法についての画面です。
今回はStandardを選択し、Nextをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-16.37.29.png)

UIテーマの選択画面です。
ダークモードかライトモード、好きな方を選択の上Nextをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-16.39.13_2.png)

今までの設定の確認画面です。
確認の上、Nextをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-16.42.22.png)

Android SDK に関するライセンスの確認画面です。
内容確認の上、各項目で同意する場合はAcceptにチェックを入れ、
Finishをクリックします。

ダウンロード画面が開かれます。
ダウンロード後、Finishをクリックします。

お疲れさまでした！
以上でAndroid Studioのセットアップは一旦完了となります。

### Flutter SDK（ソフトウェア開発キット） のダウンロード

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=222s)。

#### Flutter SDK のダウンロード

[こちら](https://docs.flutter.dev/get-started/install/macos)からFlutter のSDK (ソフトウェア開発キット)をダウンロードします。
以下画像赤枠をクリックし必要なファイルをダウンロードします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-16.49.27.png)

ダウンロードしたファイルをダブルクリックし、解凍します。

#### flutter フォルダの配置

解凍してできたflutterフォルダを任意の場所に配置します。
以下では、ユーザーフォルダ（ユーザー名のフォルダ）に、
developmentフォルダに配置する例を記載します。

ターミナルを開き、ターミナルに以下のコマンド打って、
ユーザーフォルダにdevelopmentフォルダを作成します。

```
mkdir ~/development
```

以下のコマンドでdevelopment フォルダに移動します。

```
cd ~/development
```

以下のコマンドでdevelopmentフォルダを開きます。

```
open .
```

Finderでdevelopmentフォルダが開かれました。

先に解答したflutterフォルダを、developmentフォルダにドラッグ＆ドロップで配置します。
flutterフォルダの配置手順は以上となります。

### パスを通す

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=354s)。

flutterで利用するコマンドは今配置したflutterフォルダ内にあります。
PC上のどのフォルダでもflutterのコマンドを利用できるようにするために、
パスを通す、という設定を行います。

#### シェルの確認

以下のコマンドで、使用しているシェルの種類を確認します。

```
echo $SHELL
```

bashと表示された場合は、以下の文章で出てくる.zshrcを.bashrcに読み替えて対応してください。
zshと表示された場合は特に対応不要です。

#### .zshrcファイルの作成

ユーザーフォルダにて以下のコマンドを打ち、`.zshrc`ファイルを作成します。

```
touch .zshrc
```

上記手順でターミナル上でdevelopmentフォルダにいる場合は、
一度ターミナルを立ち上げ直すか、
以下のコマンドを打つことでユーザールートへ移動可能です。

```
cd ..
```

以下のコマンドを打ち、`.zshrc`ファイルを開きます。

```
open .zshrc
```

ユーザーフォルダをFinderで開き、
" ⌘ + Shift + . "を押して隠しファイルを表示させ、
.zshrcファイルをダブルクリックすることでもファイルを開くことが可能です。

開かれた.zshrcファイルに以下の文言を追加します。
(flutterフォルダまでのパスの部分は自分の配置したflutterフォルダまでのパスを設定してください)

```
export PATH="$PATH:[flutterフォルダまでのパス]/bin"
```

ユーザーネームが"yamadataro",上記手順でdevelopmentフォルダに
flutterフォルダを配置した場合は、以下のようになります。

```
export PATH="$PATH:/Users/yamadataro/development/flutter/bin"
```

動画の通り、Finderからflutterフォルダをドラッグ&ドロップすることでも設定可能です。

"⌘ + S"を押下でファイルを保存した後、.zshrcフォルダは閉じてください。

ターミナルを再起動後、ユーザーフォルダにて以下のコマンドを打ちます。

```
which flutter
```

パスが表示されれば、パスの設定は完了です。

### flutter doctor の実行

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=601s)。

以下のコマンドを実行しFlutterの設定を行っていきます。

```
flutter doctor
```

以下のダイアログが表示された場合はインストールを押し、ツールをインストールします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-17.55.12.png)

利用規約のダイアログが表示されるため、内容確認後同意の上、同意するを押します。
インストール完了後、完了を押します。

上記対応後、もう一度 `flutter doctor`を実行します。

`"Bad CPU type in executable"`

と表示された場合は、次のM1 Mac 特有の設定を行います。

### M1 Mac 特有の設定

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=640s)。

[こちら](https://github.com/flutter/flutter/wiki/Developing-with-Flutter-on-Apple-Silicon)に記載の、x86_64の命令をApple Silicon (M1 チップ)で利用できるようにする、
Rossetaのインストールのコマンドを実行します。

```
sudo softwareupdate --install-rosetta --agree-to-license
```

実行後、PCのパスワードを求められるので、入力します。

以上でRossetaのインストールが実行されM1 Mac 特有の設定は完了となります。

### Android SDK Command Line Toolsの設定

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=723s)。

再度、`flutter doctor `を実行します。
`flutter doctor` 実行後、x , ! となっている項目を修正していきます。

`"cmdline-tools component is missing"`

と表示された場合は、まず、AndroidStudioを開きます。

左上のAndroid Studio からPreferencesを開き、
Appearance & Behavior → System Settings → Android SDK と進んでいきます。

SDK Tools のタブをクリックし、
Android SDK Command-line Tools(latest)にチェックを入れ、
右下のOKを押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-18.20.26.png)

再度、`flutter doctor `を実行し、先程表示された"`cmdline-tools~` "が消えていることを確認します。

### Android Licenseの設定

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=885s)。

`flutter doctor `で出てくる、以下のワーニング文を修正していきます。

`"Some Android licenses not accepted."`

以下のコマンドを実行します。

```
flutter doctor --android-licenses
```

"Review licenses that have not been accepted (y/N)?"
と、「了承していないライセンスを表示しますか？」と言う内容が表示されるので、
了承の意でyを入力します。

ライセンス文が表示されるので、内容確認の上、了承の意でyを押していきます。

`"All SDK package licenses accepted"`と表示されれば対応完了です。

もう一度 `flutter doctor` を実行し、
`"Some Android licenses not accepted."`が消えていることを確認してください。

### Xcode の設定

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=952s)。

`flutter doctor `で出てくる、以下のエラー文を修正していきます。

`"Xcode installation is incomple"`

Xcodeのインストールが完了していることを確認後、Xcodeを開いてください。

以下のようにライセンスに関するダイアログが表示されるため、
内容確認の上、了承の意でAgreeを押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-18.49.17.png)

PCのパスワードを求められるので、入力し、OKを押します。

インストールが完了するとXcodeが開きます。

もう一度`flutter doctor`を行い、
`"Xcode installation is incomple"`が消えていることを確認してください。

### cocoapodsのインストール

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=1010s)。

`flutter doctor `で出てくる、以下のエラー文を修正していきます。

`"CocoaPods not installed"`

以下のコマンドを実行し、CocoaPodsをインストールします。

```
sudo gem install cocoapods
```

パスワード入力を求められるため、PCのパスワードを入力してください。

インストール後、もう一度`flutter doctor`を行い、
`"CocoaPods not installed"`が消えていることを確認してください。

以上で、`flutter doctor` のエラーは消えているはずです。
お疲れさまでした！

### Android StudioにFlutterプラグインを入れる

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=1080s)。

Android Studio にFlutterプラグインを導入します。

Android Studio を開き、Plugins から Flutterを探し、インストールを押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.01.54.png)

以下のダイアログが表示された場合は、内容確認の上同意の意でAcceptを押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.05.00.png)

以下のダイアログでDartプラグインを導入するか問われるため、Installを押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.06.34.png)

インストールが完了すると、Restart IDE の表示で、
Android Studio を再起動するよう求められるため、
Restart IDE をクリックし再起動を行います。

以上で環境設定は完了となります！
次からは実際にアプリケーションが実行できるか確かめて行きましょう！

### Flutterプロジェクトの作成

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=1103s)。

新規のFlutterプロジェクトを作成してみましょう。

Android Studio を開きます。
以下の画像の、"New Flutter Project"をクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.09.48.png)

すると、次の画面が開かれます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.13.53.png)

Nextをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.15.14.png)

Project name 等の設定画面となります。
Project nameに任意の名前を入力し、Finishを押してください。

ファイル保存場所やOrganizationなど設定したい場合は適宜設定してください。

上記完了後、Flutterプロジェクトが作成されます。
以下の画像のように、左上のAndroidをクリックし、Projectを選択してください。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.18.14-1024x552.png)

おめでとうございます！
これで初めてのFlutterプロジェクトができました！

libフォルダ内main.dartのコードが、デフォルトのFlutterアプリのコードとなります。
ぜひ確認してみてください。

### iOSシミュレータを起動

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=1151s)。

iOSのシミュレータでアプリを実行してみましょう！

以下の画像のように、画面真ん中上辺りのデバイス選択欄にて、
"Open iOS Simulator"を選択します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.44.14-1024x558.png)

すると、iOSのデバイスを模したシミュレータが立ち上がります。

デバイス選択欄に起動したデバイスが表示されていることを確認の上、
デバイス選択欄の少し右にある、緑の三角のボタンをクリックします。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.48.55.png)

しばらく待つと、、、

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.50.39-1024x555.png)

おめでとうございます！
iOSのシミュレータで初めてのFlutterアプリが立ち上がりました！

### Androidエミュレータの起動

動画の該当箇所は[こちら](https://www.youtube.com/watch?v=I6TpDuSFbTc&t=1183s)。

続いて、Android のエミュレータでもアプリを実行してみましょう！

画面右上のDevice Manager ボタン(以下の画像の赤枠)から
Device Managerを開きます。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.54.21.png)

画面左のDevice Manager内、 Create Deviceから、
Android エミュレータのデバイスを新規作成します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-19.59.38.png)

作成するエミュレータのハードウェアを選択しNextを押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-20.02.13.png)

APIレベルを選択し、Nextを押します。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-20.03.10.png)

必要に応じてエミュレータの名前を変更し、Finishを押します。

これで、エミュレータが新規作成できました。
Device Managerに戻り、以下画像赤枠の三角ボタンを押し、
作成したエミュレータを立ち上げましょう。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-20.05.22.png)

エミュレータが立ち上がったら、
iOSの時と同様に、画面右上の緑三角ボタンでアプリを実行してみましょう。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/04/スクリーンショット-2022-04-27-20.08.11-1024x585.png)

おめでとうございます！
Android のエミュレータでもアプリの実行ができました！

以上で環境構築、ならびに最初のアプリの実行確認は完了となります！
お疲れさまでした！

次の章では、実際にどのように学習を進めていけばよいのかについて解説していきます。

## 初心者向け学習方法

![](http://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング女性.jpeg)

### 最初に学ぶこと ~ UI の組み方 ~

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)
Flutterの環境構築はできたけれど、何から手をつけて良いのかわからないわ！

どうやったらFlutterでアプリケーションが作れるようになるのかしら？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doctor.png)
Flutterの初心者向け学習教材として、**Flutter大学のYouTube**があります！

**無料**公開されていて、**誰でも**学ぶことができるんです！

Flutter の環境構築が終わったあなたが次にすべきことは、
FlutterのUI(ユーザーインターフェース、ユーザーが触る部分)の組み方を学ぶことです。

UIの組み方がわかれば、
あなたが作りたいと思うアプリケーションの実現に一歩近づくはずです。

そんなUIの組み方を学ぶのにぴったりなのが、**Flutter大学のYouTube**です！

Flutter大学のYouTube教材は**無料**で、**誰でも**、**日本語**で見ることが可能となっています。

以下の基礎編の再生リストを見て一緒に実戦することで、
Flutterの基礎的なUIの組み方を学ぶことができます。

https://www.youtube.com/watch?v=EJOA0plae_s&list=PLuLRJz1UnJzEDjRr1XkqyOzFzUi3Df4B0&index=2

初心者の導入としては、これ以上無いくらいピッタリの教材となっています。

ぜひ見て学習してみてください！

### UIの組み方を学んだら ~ Dartの基礎と、Firebase ~

UIの組み方を学んだあなたにオススメしたい教材が２つあります。

Dartの基礎教材と、
バックエンドサービスであるFirebaseとの連携方法について解説した、
YouTubeの動画教材です。

それぞれ解説していきます。

#### Dartの基礎教材

１つ目が、Dart基礎について書かれたZennの本です。

https://zenn.dev/kboy/books/a5b8b502dcdac4

この本にて、Dartの必要最低限の基本文法を学ぶことができます。

ちょっと、アプリケーションにオリジナリティを加えたい、
そんな時にこの知識がしっかりとした基盤となってくれるはずです。

#### Firebaseとの連携方法について解説した動画教材

2つ目が、Firebaseとの連携を軸により実践的な内容を紹介した、
Flutter大学 YouTubeの Flutter実戦編です。

https://www.youtube.com/watch?v=VZ9wcJ920XA&list=PLuLRJz1UnJzEYLFd1ihJit1E6dYol8VC5

アプリケーションを作ろうと考えた時に、
必要となってくるのがデータの保存だったり、共有だったりの仕組みです。

Flutter実践編の動画では、これらについて無料で、誰でも学ぶことができます。

少し難易度高く感じるかもしれませんが、役に立つこと間違いなしです！

Dartの基礎と、実践編の動画はどちらを先に学んでも構いません。
並行して学ぶのもありです。

ぜひ学んでみてください！

### 実戦 ~ アプリケーションを作成しよう ~

ここまで学んだら、いよいよアプリケーションの作成にとりかかりましょう。

「え、もう？」

と思われるかもしれません。
これには理由があります。

結局の所、**実戦が一番力がつく**からです。

アプリケーションの作成を始めたあなたは、
どう作ればよいか、わからないことにぶつかることでしょう。

これに関して自分で調べ、乗り越えることこそが、
学習において一番力がつきます。

大変に思うかもしれませんが、ぜひ実戦してみてください！

### 挫折しそうな時には、、、

アプリケーション作成を実戦していると、
どうしてもわからないことにぶつかり、挫折しそうになることがあるかもしれません。

一人で作成している孤独感に、負けそうになるかもしれません。

そんな方にオススメなのが、Flutter大学です。

Flutter大学では、アプリ開発をサポートするさまざまな取組がなされています。

代表的なものとして、
わからないことを現役Flutterエンジニアに聞く場としての週4回の質問Zoomがあります。

またFlutterを学んだり、実務で使ったりしている人が集まる、
コミュニティとしての役割も大きな魅力です。

[こちら](https://flutteruniv.com/)からぜひ入会し、自分のアプリケーション作成に役立ててみてください。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

入会プランごとに利用可能なサービスが異なります。
詳しくは上記リンクから内容確認ください。

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事では、Flutterの入門の仕方として最初にやるべき環境構築の方法について、
動画付きで解説しました。
また、初心者向けの学習方法についても紹介しました。

本記事の内容を実践すれば、
Flutter学習のとても良いスタートダッシュを切れること間違いなしです。

ぜひ実践して、いっしょにFlutterを学びましょう！

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/4/27）

本記事では実践編としてアプリケーション作成をしよう、と記載しました。

最初のアプリケーション作成で失敗、挫折しないためには、
いくつかポイントがあります。
本編集後記では、アプリを５本、半年で作成した筆者の目線で、
これらのポイントについて解説しようと思います。

##### 小さいアプリケーションを作成すること

最初のポイントは小さいアプリケーションを作成することです。
最初から大きい、分量の多いアプリケーションを作成しようとすると、
わからないことが多く、手が回らなくなってしまいます。
自分の手の回る範囲の小さいアプリケーションを最初は挑戦しましょう。

##### 短い期間で作成すること

次のポイントは、短い期間で作成することです。
アプリケーションの作成に長い時間をかけてしまうと、
ついサボってしまったり、モチベーションの維持が難しいです。
期間を決めて、この期間でぜったいに完成させるんだ！という
意気込みで作成することをオススメします。

##### やることリストをつくること

最後に紹介するポイントはやることリストを作ることです。
アプリを作っていて、この機能もつけなきゃ、あの機能もつけなきゃ、
と、作りながら仕様が増えていくことがあると思います。
これをしてしまうと、完成がどんどん遠のいてしまい、
結果、挫折につながってしまいます。
最初に全体像を想像して、やることリストに書き出すことで、
あとはやるだけの状態になります。
仕様が増えることもなく、終わりが見えているため、
モチベーションの維持にとても良いです。
最初に全体像のやることリストを用意するのは本当にオススメです。

アプリケーション作成は本当に楽しいです。
Flutterはこの楽しさを強く支えていると自分は思います。

ぜひFlutterに入門して、アプリケーション作成をしてみてください！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。