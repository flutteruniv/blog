---
title: "Flutter ニュース 【2022年4月第3週】"
slug: "flutter-news-20220418"
author: "Aoi"
description: ""
pubDatetime: "2022-04-18"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/man.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutterの最新情報をキャッチアップしたい！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年4月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### RepaintBoundary (Widget of the Week)

https://www.youtube.com/watch?v=cVAGLDuc2xE&list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG&index=2

Flutterの公式Widget紹介動画シリーズ、Widget of the Week が更新されました。

アニメーションなどでの再描画領域を制限する、RepaintBoundaryが紹介されています。

### MaterialStateProperties | Decoding Flutter

https://youtu.be/CylXr3AF3uU

Flutterについて深堀りしていく動画シリーズ、Decoding Flutterが更新されました。

今回は、ボタンにフォーカスされた時や、
ホバーされた時などの状態を管理する`MaterialState`についての解説動画です。
`MaterialState`に応じて色を変える、プロパティ設定が少なくて済む方法について解説されています。

## Flutterに関する話題

### path_animator パッケージ

https://pub.dev/packages/path_animator

Canvasで描いた線をアニメーションで表示するパッケージ、
path_animatorパッケージがRedditで話題になっていました。

CanvasのdrawPathメソッドのpathに、作成したAnimatedPathを渡すだけで実装可能です。

こちらについて、週刊Flutter大学でも記事にしています。
併せてご確認ください。

https://blog.flutteruniv.com/flutter_package_path_animator/

### sliding_clipped_nav_barパッケージ

https://pub.dev/packages/sliding_clipped_nav_bar

sliding_clipped_nav_barパッケージがRedditで話題になっていました。

BottomNavigationBarにアニメーションをつけ、
少しオシャレにすることが可能です。
パッケージ紹介ページにアニメーションのgifがあります。

## Flutterに関する記事

### Very good layered architecture in Flutter

https://verygood.ventures/blog/very-good-flutter-architecture

Flutterのプロジェクトのアーキテクチャについて書かれた記事がRedditで話題になっていました。

BloCを使ったアーキテクチャで、階層に分かれたアーキテクチャが紹介されています。

### VSCodeでDartのBuild Runnerを統合しよう

https://erayerdin.com/integrating-darts-build-runner-with-vscode-cl20eq19604zgy6nv47ir51ap

VScode で特定のファイルを保存したときに
自動でBuild Runner を走らせる方法について解説された記事です。

freezedなどのパッケージで使うbuild runnerをちょっとした設定で自動化できます。

### API データのローカルコピーを保存する、リポジトリパターンのデータレイヤーの実装

https://davidserrano.io/data-layer-in-flutter-use-the-repository-pattern-to-keep-a-local-copy-of-your-api-data

リポジトリパターンで、APIから取得したデータをローカルに保存するアプリケーションの
作成方法について書かれた記事です。

dioパッケージや、sqfliteパッケージなど、
さまざまなパッケージの使用例が一つにまとまっています。

## Flutterに関する動画

### RESPONSIVE DESIGN • Flutter Tutorial

https://youtu.be/MrPJBAOzKTQ

画面の大きさによってレイアウトを変える、
レスポンシブなデザインの作り方に関しての解説動画です。

Layout Builderを使った方法について学ぶことができます。

## Flutter大学メンバーがリリースしたアプリ

### サポコン ~ギタリスト用作曲支援アプリ~

https://apps.apple.com/jp/app/%E3%82%B5%E3%83%9D%E3%82%B3%E3%83%B3/id1617812361

https://play.google.com/store/apps/details?id=net.snootech.support_composer

栗田学さんによって、
ギタリストのための作曲支援アプリ、『サポコン』がリリースされました！

音楽を作曲するのにとても大事な要素となるコード進行の代表例の表示機能から、
実際にコード進行を作ってみて視聴できる機能まで用意されています。

Flutterの作りやすさにより、
両プラットフォームの対応をスピード感を持って作ることができたとのことです！

## Flutter大学メンバーによる記事

### FlutterでHTTPリクエストやってみる。

https://qiita.com/JunichiHashimoto/items/11b6b3df4925a808bcd3

FlutterでHTTPリクエストを実行するサンプルコードが紹介されています。

コードと実行結果を載せ、SNS風のUIを作成する部分まで記載されています。

### Flutter [Android Studio]FVMを超基礎的なことから設定していく

https://qiita.com/kagura1/items/02f65fdb7402478577f3

Flutter、Android StudioでFVMを設定する方法について書かれた記事です。

すでにFVMが適用されているプロジェクトに対し、
自分の環境でFVMを使用する方法について、詰まったポイントを中心に丁寧に解説されています。

### DartのStreamについて学んでみる

https://qiita.com/JunichiHashimoto/items/7ca7ec6cd2c9af0714eb

DartのStreamについて、学んだ内容を噛み砕いて解説している記事です。

FlutterではなくDartのプロジェクトとしてさまざまな検証を行った結果が記載されています。

### **BitriseからのSlack通知にBuildにかかった時間を表示させる**

https://zenn.dev/hndr/articles/76148b1aeaf8d4

FlutterアプリケーションのCI/CDを行っているBitrizeのSlack通知にて、
Buildにかかった時間を表示させる方法について解説されています。

環境変数に無い値をどうやって表示させるかについて、
試行錯誤した結果をわかりやすくまとめています。

### **【Flutter】Riverpodで部分再描画のConsumer()の使い方**

https://zenn.dev/kiiimii/articles/96d5dc181228b2

Riverpodで部分的な再描画を指示するための`Consumer()`の使い方について記載された記事です。

Providerパッケージでは良く使用されている`Consumer()`ですが、
これがRiverpodにも用意されていることを知らない方もいるのではないでしょうか。
こちらの使い方についてサンプルコードを元に詳しく解説されています。

### **【Flutter】カメラ機能を実装する**

https://zenn.dev/mamushi/articles/flutter_camera

Flutterでカメラ機能を実装する方法について解説された記事です。

カメラの起動から、写真の撮影、撮影した画像の表示までの機能の実装方法が書かれています。
実際の動きの画像から、サンプルのプロジェクトまで紹介されています。

### **【2022年】おすすめのロガーパッケージ4選【Flutter】**

https://zenn.dev/susatthi/articles/20220413-153500-flutter-logger

Flutterプロジェクトのログ出力をサポートするロガーパッケージについて、
オススメのものを４つ紹介している記事です。

それぞれの特徴について紹介の上、機能の比較の表まで用意されています。

### **【Flutter】初めてのRiverpod+Hooks+Freezed+Firebase**

https://zenn.dev/ryota_iwamoto/articles/first_develop_with_riverpod_freezed_hooks_firebase

表題の通り、Riverpod, Hooks, Freezed, Firebaseを組み合わせたアプリケーションの
作り方を紹介した記事です。

各機能について詳しく解説の上、作成した買い物リストアプリを紹介しています。

## Flutter逆引き辞典の追加ページ

https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary

先週の追加ページは以下になります。

- [Widgetを画像化したい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/011-widget-to-image)
- [ページをスクロールして切り替えたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/012-page-scroll)
- [スワイプでドロワーが出ないようにしたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/013-disable-drawer)
- [丸いボタンを作りたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/014-create-circle-button)
- [ネット画像をバイトデータに変換したい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/015-download-image)
- [ダイアログでもテキスト入力がしたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/016-input-text-on-dialog)
- [Flutterロゴで風車を作りたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/017-flutter-kazaguruma)

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220411/

https://blog.flutteruniv.com/flutter-drift/

https://blog.flutteruniv.com/flutter_package_path_animator/

https://blog.flutteruniv.com/flutteruniversity-youtube/

## まとめ


本記事ではFlutterニュースとして、
2022年4月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/4/18）

Flutterに関する動画でレスポンシブにする方法の動画を紹介しました。

アプリのレイアウトを考える時、
小さい端末でも大きい端末でもレイアウトの崩れなく
UIが表示できるよう、あなたは意識されていますでしょうか。

`MediaQuery`を使ったり`LayoutBuilder`を使ったり、
方法はさまざまありますが、複数の大きさの画面に対応しておくと
アプリのレビュー等でひっかからずに済むので、
なるべく早いうちから対応しておきたいものとなっています。

今回紹介した動画は簡単な例で実装方法を紹介されているので、
一度見ておくと実装に悩まずに済むかと思います。

ぜひ見てみてレスポンシブなアプリを作成してみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
