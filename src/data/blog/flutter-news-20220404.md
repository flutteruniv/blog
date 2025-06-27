---
title: "Flutter ニュース 【2022年4月第1週】"
slug: "flutter-news-20220404"
author: "Aoi"
description: ""
pubDatetime: "2022-04-04"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutterの最新情報をキャッチアップしたい！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年3月第5週〜4月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 2.10.4 リリース

https://twitter.com/FlutterReleases/status/1508489140563857415

Flutterのstable版として、2.10.4がリリースされました。

主にバグ修正となります。
Flutter Web × Freezedパッケージでクラッシュする問題等が解消されたそうです。

### 今週のWidget: StatefulBuilder

https://youtu.be/syvT63CosNE

Flutter公式のWidget紹介動画シリーズ、Widget of the Weekが更新され、
StatefulBuilderが紹介されました。

StatefulBuilderを使うと、特定の場所のみリビルドすることが可能となり、
パフォーマンスの向上が見込めます。

## Flutterに関する話題

### Mondroid : Flutter製のオープンソースのMongodb クライアント

https://www.reddit.com/r/FlutterDev/comments/tpu9tl/mondroid_open_source_mongodb_client_w_flutter/

mongodb（モンゴDB、ドキュメント指向データベース）をモバイルから扱える、
オープンソースのクライアントとして、Mondroid が話題となっていました。

Flutterで作られており、アプリのGitHubリポジトリのリンクが紹介されています。

### Android 12のオーバースクロールへの対処法

https://www.reddit.com/r/FlutterDev/comments/ttq5p0/pro_tip_androidoverscrollindicatorstretch/

Android 12を搭載した端末では、
オーバースクロールの際の効果が特殊です。（[参考](https://developer.android.google.cn/about/versions/12/overscroll?hl=ja)）

これをFlutterで有効化する方法が紹介されています。

### extended_phone_number_input パッケージ

https://pub.dev/packages/extended_phone_number_input

電話番号の前に着く国際電話識別番号を簡単に設定できるようにするパッケージ、extended_phone_number_inputパッケージがRedditで話題になっていました。

国際化対応して、電話番号の認証する場合に有用です。

### open_api_freezed_dio_builder パッケージ

https://pub.dev/packages/openapi_freezed_dio_builder

OpenApiのyamlファイルから、
Dart のクライアントライブラリファイルを自動生成するパッケージ、
open_api_freezed_dio_builderがRedditで話題となっていました。（[Reddit](https://www.reddit.com/r/FlutterDev/comments/tuglxn/new_package_use_openapi_freezed_dio_builder_to/)）

web上でyamlファイルとdartファイルの対比を見れるサンプルも紹介されています。

## Flutterに関する記事

### 九州大学の非公式アプリを一カ月で作ってみた。

https://qiita.com/kaedeee/items/d573d85c9d52eb82e841

過去問やニュースを取得できる、九州大学の非公式アプリについての記事です。

Flutterで、1ヶ月で作られたそうです。
時短でき、情報が多い、ということに注目して、Flutterを選定したとのことです。

### Flutter Goldenをシンプルにする、Alchemistを使おう

https://guillaume.bernos.dev/use-alchemist-to-simplify-goldens/

Golden testをより使いやすくするパッケージ、
Alchemistについて書かれた記事です。

実行環境に応じたGoldenを生成することができ、
CIに特化したGoldenを生成できるそうです。

### GoRouterでのFlutter画面遷移: Go vs Push

https://codewithandrea.com/articles/flutter-navigation-gorouter-go-vs-push/

Flutter、go_routerのgoとpushの違いについての記事です。

goはjump,pushはstackのイメージとのことです。
gif付きでわかりやすく解説されています。

### Flutter Navigator 2.0を理解しよう

https://blog.codemagic.io/flutter-navigator2/

Flutterの画面遷移手法である、Navigator2.0、こちらの解説記事です。

基本的な使い方から、RouterDelegateの設定など少し難しい部分の解説まで
しっかりと行われています。

### ネイティブのコードを呼び出す、Flutterの自作プラグインの作成方法

https://dartling.dev/how-to-create-a-custom-plugin-in-flutter-to-call-native-platform-code

Flutterで、ネイティブの機能を使ったプラグインの作成方法について書かれた記事です。

ネイティブとのデータのやりとり等について、丁寧に解説されています。

## Flutterに関する動画

### 無限スクロールビュー

https://youtu.be/rj4lWOcMON0

Flutterで無限スクロールを実装する方法についての解説記事です。

5分弱でサクッと学ぶことができます。

この無限スクロールの実装方法について、週刊Flutter大学でも記事を作成しました。
こちらも合わせてご覧ください。

https://blog.flutteruniv.com/flutter-infinity-scroll/

### 35 Flutter Tips, それはあなたの心を揺さぶるでしょう！

https://youtu.be/mhxoXm8lWIo

Flutter開発に役立つ情報を紹介している動画です。

Pubspecのファイルのネスト化など、
35個もの情報を約11分で紹介されています。

## Flutter大学メンバーがリリースしたアプリ

### Hash ~大学生限定コミュニティ~

https://apps.apple.com/jp/app/hash/id1614642150

ひろたかさんにより、
大学生限定コミュニティアプリ、『Hash』がリリースされました！

学生生活で気になる話題や言ってみたいところなど、
さまざまな興味に応じてコミュニティを作成、閲覧ができるアプリだそうです。

Flutter大学の質問相談会、質問Zoomにたくさん参加し、
アプリの改善をしていたのがとても印象的でした。

### MinimalCoord ~ミニマリスト向けファンションShareアプリ~

https://apps.apple.com/jp/app/minimalcoord/id1609353352

https://play.google.com/store/apps/details?id=com.hikaru.minimal_coord

ひかるさんにより、
ミニマリスト向けファンションShareアプリ『MinimalCoord』がリリースされました！

ミニマリストユーザーがいかに少ない服でオシャレをできるかシェアし合うアプリだそうです。

投稿型アプリに必須のブロック機能の追加など、
学んだことをZennに記事投稿している姿が印象的でした。

## Flutter大学メンバーによる記事

### 初心者　flutter×ブロックチェーンに挑戦する

https://qiita.com/dongri727/items/54c6c9d91246233f5473

https://qiita.com/dongri727/items/af2fced633c9669c5aac

Flutterとブロックチェーンを利用して、
電子投票アプリを作る過程について書かれた記事です。

現在まさに作成途中だそうで、試行錯誤しながら作成しているとのこと。
作成にあたっての詰まるポイントや解決策など、参考になりそうです。

### Widgetについて学んでみる

https://qiita.com/JunichiHashimoto/items/f8f61d9724376d76c93e

https://qiita.com/JunichiHashimoto/items/e324b5c674b3b3425f17

https://qiita.com/JunichiHashimoto/items/cf984325507601c22ec6

flutter_slidableパッケージや、CheckBoxListTile Widgetなど、
色々なWidgetの実装について書かれた記事です。

それぞれサンプルコードも用意されていて、実装例を見ることができます。

### FireStoreの値を取得する

https://qiita.com/JunichiHashimoto/items/7b9dc5d6576a9a4ffe21

FireStoreの値の取得について書かれた記事です。

とてもシンプルにFireStoreの値の取得方法についてDartのサンプルコードが記述されています。

### 【Flutter】GoogleMapの表示からgeolocatorで現在地を取得まで

https://zenn.dev/wakanao/articles/3820bcd67e4130

FlutterでのGoogleMapの表示からgeolocatorで現在地の取得までについて書かれた記事です。

スクリーンショットを多く用いて、丁寧に解説されています。

### **【Flutter】コピペでできる！GoogleMap+カードの滑らかなUIの作り方**

https://zenn.dev/wakanao/articles/bc50ca942eb450

GoogleMapとカードの滑らかなUIの作り方について解説された記事です。

サンプルコードも紹介されているため、
紹介されているようなUIを作成したい際にかなり有用な記事です。

### **【Flutter】結局初心者って何からするん？**

https://zenn.dev/kooooons/articles/f7f2922452b421

Flutter初心者がやるべきことについて、
アプリをリリースしている筆者の目線で紹介している記事です。

Flutterを触り始めた初心者が最初にやるべきことから、
困った時の相談の方法まで、しっかりとまとめられています。

### **【Flutter】ButtonやダイアログをPushした際、まとめて閉じたり、戻る方法**

https://zenn.dev/hikaru24/articles/5cb12e712c0dc0

Flutterでダイアログ等から画面を戻る際、
ダイアログを表示した画面よりさらに前の画面に戻る方法について書かれた記事です。

戻る方法のコードが端的に紹介されています。

### **【Flutter】OSやデバイスにあったアプリアイコンをコマンド一発で生成する【flutter_launcher_icons】**

https://zenn.dev/susatthi/articles/20220401-060335-flutter-launcher-icons

flutter_lancher_iconsを用いた、アプリのランチャーアイコンの作成方法について
書かれた記事です。

Android と iOSだったり、開発環境と本番環境だったり、
それぞれの環境に応じたアイコンの作成方法について、丁寧に紹介されています。

### **【Flutter】最後にちょっとだけ実装してみませんか？**

https://zenn.dev/ryota_iwamoto/articles/improve_flutter_app_ux

Flutterでアプリを作成した際のワンポイントとして追加すると良い機能について
紹介している記事です。

振動機能など、追加するとワンランクアップするようなものを紹介されています。

## Flutter逆引き辞典の追加ページ

https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary

4月1日より、Flutter逆引き辞典の更新が開始されました。
寄せられた質問に一問一答形式で回答しています。

先週の追加ページは以下になります。

- [ダイアログでもホットリロードがしたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/001-dialog-hot-reload)
- [popして戻ってきたときに処理を実行したい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/002-await-push)
- [StatefulWidgetをつかいたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/003-want-to-use-stateful-widget)

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutternews-20220328/

https://blog.flutteruniv.com/report_fukuoka_meeting_202203/

https://blog.flutteruniv.com/flutter-infinity-scroll/

https://blog.flutteruniv.com/flutter-tutorial-logic/

https://blog.flutteruniv.com/fluttteruniversity-questionnaire-202203/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、
2022年3月第5週〜4月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/4/4）

今週のFlutterニュースでした。

この場を借りて、Flutter大学のニュースを一つ紹介させてください。

**Flutter大学HPがリニューアルされました！**

https://flutteruniv.com/

以前のHPに比べ、見やすく、わかりやすくなっています。

内部的な話を紹介すると、なんとこのHP、Flutter Webでの作成となっています。
Flutter大学の有料メンバーなら、こちらの実装コードを見ることも可能です。

ぜひ上のリンクから、Flutter大学の新しいHPを覗いてみてください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。