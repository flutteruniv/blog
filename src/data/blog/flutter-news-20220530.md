---
title: "Flutter ニュース 【2022年5月第3週】"
slug: "flutter-news-20220530"
author: "Aoi"
description: ""
pubDatetime: "2022-05-23"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)
Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年5月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.0.1 アップデート

https://twitter.com/FlutterReleases/status/1527496382445142017

Flutter 3が先々週にリリースされたばかりですが、
新しいアップデート、3.0.1がリリースされました。

[こちら](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel)によると、テキストに放射状のグラデーションを設定した際に、
想定通りに描画されない不具合が解消された、とのことです。

### Flutterで独自のゲームを作ろう

https://youtu.be/zGgeBNiRy-8

Google I/O 2022で発表された Flutter Casual Game Toolkitに、
テンプレートアプリの紹介、解説動画が追加されました。

こちらについて、週刊Flutter大学でも記事を出しています。
併せてご確認ください。

https://blog.flutteruniv.com/flutter-casual-game-toolkit/

## Flutterに関する話題

### CI/CD ツールを使用しているかについてのアンケート

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-23-16.22.12-1024x642.png)

[https://www.reddit.com/r/FlutterDev/comments/us74r2/are_you_using_a_cicd_tool_for_your_flutter_project/](https://www.reddit.com/r/FlutterDev/comments/us74r2/are_you_using_a_cicd_tool_for_your_flutter_project/)

RedditでのFlutterでCI/CDを使っているか？のアンケートの投稿がありました。

約4割が使っている、とのことでした。

関連した話題として、先週、Flutter大学内の共同勉強会にて、
『明日から構築できるFlutter CI入門』というテーマの勉強会が開かれました。

アーカイブ動画はFlutter大学の有料会員ならいつでも視聴可能です。
Flutter大学への入会はこちらから。

https://flutteruniv.com/

### FlutterでiPod を再現したアプリのリポジトリ

![](https://blog.flutteruniv.com/wp-content/uploads/2022/05/スクリーンショット-2022-05-23-8.53.15-505x1024.png)

[https://github.com/retromp3/retro](https://github.com/retromp3/retro)

Flutter で昔懐かしのiPodを再現したアプリのリポジトリです。

クローンしてアプリを実行することで、
実際に触ることができます。
コントローラーを円を描くように触ってカーソルを動かす機能など、
きちんと再現されています。

### smooth_video_progress パッケージ

https://www.reddit.com/r/FlutterDev/comments/uttwrs/finally_a_package_for_smooth_progress_bars_for/

video_player のvideoの進見具合を表すバーを、
よりスムーズに実装できるパッケージ、smooth_video_progressの紹介の投稿です。

pub.devのパッケージ紹介ページにて通常実装とパッケージ使用時の比較のGIFが掲載されています。

### shader パッケージ

https://pub.dev/packages/shader

Flutterでシェーダーをテスト実行できるようにするパッケージ、
shaderパッケージがRedditで話題となっていました。

製作者のホストしているサーバーを使っているため、
本番製品としての使用はできないとのことです。
テスト利用としてGLSLコードを使ったグラフィック作成を試すことができます。

## Flutterに関する記事

### Flutterの「謎の鳥」について紹介する

https://qiita.com/YuQinta/items/f9860fa4d4a602a0c028

Fluttetrのマスコットキャラクターである青い鳥、”Dash"について紹介されている記事です。

"Dash"の性別や、禁則事項など、
マル秘情報が多く記載されています。

### Twitter API v2.0をラッピングしたDart/Flutterライブラリを開発しました

https://zenn.dev/kato_shinya/articles/released-twitter-api-v2-dart

Dart/Flutter でTwitter API v2.0 を簡単に扱う事ができるようラッピングした
ライブラリの紹介を開発者の目線で書かれた記事です。

Google I/O のFlutterに関して講演もしている [Tim Sneath](https://twitter.com/timsneath) さんから、
メッセージ、RTされていたりとGoogleも注目しているライブラリのようです。
日本の方がDart/Flutter関連で注目されているのはとても嬉しいことですね！

### **FlutterでMaterial Design 3に対応する**

https://zenn.dev/enoiu/articles/6b754d37d5a272

FlutterでMaterial Design 3 (Material you)に対応する方法についての記事です。

自作アプリのMaterial Design 3対応で行ったことを記事化されていて、
実践的な視点で対応方法が書かれています。

### **個人開発でReactとFlutterを同時に使うとどうなるか**

https://zenn.dev/mrasu/articles/eaa018100ad741

一つの個人開発サービスをReact とFlutterで同時開発した際の経験談について書かれた記事です。

良かった点と面倒だった点について書かれています。
Web も アプリも 実装したい、という際に参考になるかと思います。

### Dart/Flutterでの例外処理の扱い方ガイド

https://quickbirdstudios.com/blog/handling-exceptions-flutter-dart/

Flutterでの例外処理(exception)をいつ、どうやって使うべきか？
という内容について解説された記事です。

基本的な例外処理の方法から、
いつ使うべきかのフローチャートまで記載されています。

### Flutter 3でのLinuxのデスクトップアプリへの対応方法

https://ubuntu.com/blog/bring-multi-platform-apps-to-linux-desktop-with-flutter-3

Flutter 3で追加されたLinuxサポートについて解説された記事です。

アプリの立ち上げ方からFirebase Auth との連携についてまで書かれています。

### Flutterで画面遷移後にリストの任意の位置までスクロールする方法

https://www.vincentjouanne.dev/how-to-scroll-to-an-item-in-list-after-a-redirection-with-flutter/

画面遷移をした時に任意の位置まで画面を
自動的にスクロールさせる方法について書かれた記事です。

[scrollable_positioned_list](https://pub.dev/packages/scrollable_positioned_list)を使った方法が紹介されています。

## Flutterに関する動画

### Provider と ChangeNotifierProviderの違い

https://youtu.be/PGclZ6nw8WU

Provider パッケージのProvider とChangeNotifierProviderの違いについて
紹介されている動画です。

4分弱の短い時間で違いについて理解することができます。

## Flutter大学メンバーがリリースしたアプリ

### もくもくフォト ~雲の名前付けアプリ~

https://play.google.com/store/apps/details?id=jp.taka.coludphoto.colud_photo

たかくさんにより、雲の名前付けアプリ、『もくもくフォト』
がリリースされました！

雲の写真を撮って、名前をつけてコレクションするシンプルなアプリです。

デザインが凝られていて、とても素敵なアプリです！

### 習慣化記録 ~日々の積み上げをシンプルに記録して見える化~

https://play.google.com/store/apps/details?id=com.Yuto.habitual_records

https://apps.apple.com/jp/app/%E7%BF%92%E6%85%A3%E5%8C%96%E8%A8%98%E9%8C%B2/id1624851041

ゆーとさんにより、日々の積み上げをシンプルに記録して見える化するアプリ、
『習慣化記録』がリリースされました！

シンプルに、目標に対して日々行った時間、回数を記録することで、
その記録がグラフで見える化されるアプリとなっています。

グラフ画面の見た目がとても良く、目標達成のための助けになるかと思います！

### 聞いてよ！クマさん ~ストレス解消・癒やしのアプリ~

https://play.google.com/store/apps/details?id=com.appforet.kikukkuma

モーリーさんにより、ストレス解消・癒やしのアプリ、『聞いてよ！クマさん』
がFlutter製のAndroid アプリとしてリリースされました！

悩みをクマさんに話し、その悩みを書いた紙を様々な方法で処理することで、という
ストレス解消をするアプリとなっています。

Riveを使ったアニメーションがいろいろな場所で使われており、
触っていてとても楽しいアプリとなっています！

## Flutter大学メンバーによる記事

### **Flutter 3.0.0 から `flutter test --coverage` でエラーが発生する件**

https://zenn.dev/susatthi/articles/20220516-144819-flutter-coverage-error

Flutter 3 にアップデートした後、
`flutter test --coverage` を実行した際に発生するエラーについて、
対処法含め記載された記事です。

Flutter 3を使っていると起こり得るエラーのため、
発表から2週間以内でエラーの対処法まで記載いただいたのは本当にありがたいです。

### **Flutter×Flaskで物体検出するアプリ作ってみた!**

https://zenn.dev/wakanao/articles/80a59ce3f27580

Flutter と、Python を扱うためのフレームワークであるFlaskを組み合わせ、
物体検出するアプリを作成する方法について書かれた記事です。

サーバーサイド側の実装についても触れられており、
機械学習処理を実装したい際に参考になります。

### **【git submodule】複数のFlutterプロジェクトの共通コードをサブモジュール化する方法**

https://zenn.dev/kboy/articles/084e7c85c14f79

Flutterで2つ以上のリポジトリで共通しているコードを、
サブモジュール化する方法について書かれた記事です。

Flutter大学のWebアプリ、モバイルアプリ、管理画面、Flutter Work等、
4つのリポジトリでの共通コードをサブモジュール化した方法について解説されています。

### [Git] 駆け出しエンジニアが最近実務で使ったコマンド

https://zenn.dev/hikaru24/articles/9e9cb38b4ba123

最近Flutterエンジニアになった筆者が使い始めたgitコマンドについて書かれた記事です。

gitはチーム開発をするにはほぼ必須と言って良いぐらい使われており、
チーム開発を始める方の参考になる記事となっています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220516/

https://blog.flutteruniv.com/flutter-firebase/

https://blog.flutteruniv.com/flutter-casual-game-toolkit/

https://blog.flutteruniv.com/flutteruniversity-coworking-space/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、
2022年5月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/5/23）

本記事内でマスコットキャラクターである"Dash"についての記事を紹介しました。

こういう小ネタ記事は好きなので、
今後も紹介していきたいですね。

マスコットキャラクターに関する小ネタといえば、
キティちゃんを「キティちゃん」と呼んで、
「わたしとあなた初対面よね？キティ"さん"でしょ？言葉には気をつけてね。」
と怒られるというネタがとても印象に残っています。
（この話、もちろんネタで公式のキティちゃんが言ったわけではありません。）

本記事のように"Dash"と呼び捨てにしたり、
"Dash ちゃん"と呼んだら、「"さん"をつけろ！」と怒られたりするのでしょうか、、、？
気難しくないことを祈っております。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。