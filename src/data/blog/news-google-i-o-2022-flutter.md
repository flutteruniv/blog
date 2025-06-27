---
title: "【速報】 Google I/O 2022 Flutter 基調講演 まとめ！"
slug: "news-google-i-o-2022-flutter"
author: "Aoi"
description: ""
pubDatetime: "2022-05-11"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/b-man.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Google I/O のFlutterの基調講演でどんな話がされたのか知りたい！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

本記事ではそんな要望にお答えします！

Google I/O とは、Googleが一年に一度開催する、
最新商品や最新情報のPRや、デベロッパーの交流を目的とした講演会です。

GoogleのプロダクトであるFlutterに関しても基調講演が開かれ、
Flutterの最新情報等がPRされました。

本記事では、2022年 Google I/O で行われた Flutterの基調講演の内容について、
まとめてお伝えします。

この記事を読むだけでFlutterの最新情報がまとめてわかります！

ぜひ読んでみてください！

## Flutter基調講演 内容

https://youtu.be/w_ezWG1yKQQ

上記基調講演の内容をまとめてお伝えします！

タイムスタンプ付きで記載するので、気になる部分は元動画をご確認ください。

### Flutter 3 リリース

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=97s)。

Flutter 3のリリースが発表され、本日リリースされました。

Mac OS と Linux へのStable リリースがメインの変更点となります。

### Mac OS と Linux 対応

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=310s)。

Mac OS と Linux へのStable リリースがFlutter 3にて行われました。

基調講演では、[Superlist](https://www.superlist.com/) がMac OS での利用例として紹介されていました。

### Apple Silicon (M1 Mac)に対する対応

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=508s)。

Flutter3にてネイティブでARM64 プロセッサー(M1 Macのプロセッサー)にて実行可能となりました。
Flutter アプリのコード解析やコンパイル時に、Rossetaによる変換をする必要がなくなりました。

これにより、flutter analyze 等 の速度が向上する、とのことです。

### Linux のパッケージ対応

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=660s)。

Linux に対して canonical の協力により、様々なパッケージが用意されています。

Ubuntuの見た目となるパッケージも用意されている、とのことです。

### Web のパフォーマンス向上

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=697s)。

Flutter 3 にて、Web での実行速度、パフォーマンスの向上がされた、とのことです。

### DevTool の更新

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=753s)。

Flutter 3のリリースと同時に、DevTool の更新がされるとのことです。

パフォーマンスToolにて、
どのWidgetがどれくらいFlameを使っているかを確認できたりなど、
様々な機能が追加されています。

### モバイルでの対応

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=840s)。

Flutter3にてモバイルに対し、
折りたたみデバイスへの対応、
Material 3 Widgetへの対応、
Android のプラットフォームビューの再構築が行われるとのことです。

### Put Flutter to Work

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=874s)。

現存のアプリケーションにたいしてFlutterを統合する補助としてのプロジェクト、
Put Flutter to Work が開始された、とのことです。

[GitHub](https://github.com/flutter/put-flutter-to-work) にて詳細が紹介されています。

### Dart のアップデート

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=1046s)。

Flutter 3と同時にDartのアップデートもされました。

enum にていままでfield やmethod, getterの実装が可能になります。
また、メソッドでの名前付き引数の宣言場所が自由となります。
さらにsuper で継承元のパラメータを継承していたのを、
引数にsuperをつけることで継承できるようになります。

### Firebaseによる公式サポート宣言

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=1171s)。

Firebaseが公式にFlutterに対してサポートすることがアナウンスされました。
FlutterFire のレポジトリがFirebase 傘下となり、
またFlutterFireに関するドキュメントもFirebaseの公式ドキュメントに追加されました。
(Flutter デベロッパーの62%がFirebaseを使用している、とのことです。)

さらに、Firebase Crashlystics が更新され、
エラーが起きた場所がDartのコードにて表示されるようになりました。

### ByteDance のでのFlutter利用に関する紹介

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=1436s)。

TikTokの運営会社であるByteDanceでのFlutter 利用に関する紹介がされました。

### Flutter Casual Game Kit

動画は[こちら](https://www.youtube.com/watch?v=w_ezWG1yKQQ&t=1624s)。

Flutter でゲームを作成するためのスターターキットとして、
Flutter Casual Game Kitが発表されました。

サンプルゲームや、学習教材、クレジットに関する情報が含まれている、
とのことです。

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事では、2022年 Google I/O で行われた Flutterの基調講演の内容について、
まとめてお伝えしました。

いかがだったでしょうか？

ワクワクする発表でいっぱいでしたね。

ぜひ本記事を参考にFlutter 3へのアップデート等を検討してみてください！

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/5/12）

Google I/Oでの発表内容に関する記事でした。

この発表を前に、ここ数日、心ここにあらずな状態でした。

自分も早速Flutter 3へのアップデートをしようと思います。

速報として記事を作成できてよかったです。

ぜひ、本記事のTwitterでの拡散、はてブ等をよろしくお願いします！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。