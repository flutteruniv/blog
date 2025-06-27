---
title: "【Flutterニュース】Dart 3がもうすぐ来るぞ【2023年5月2日】"
slug: "flutter-news-20230502"
author: "kboy"
description: ""
pubDatetime: "2023-05-01"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

ゴールデンウィークいかがお過ごしですか？Flutterを勉強している人もいるかもしれませんので、そんな方のために今日もFlutterニュースを書いていきたいと思います！

## Flutter公式

今週の公式情報です。Flutterのベータの最新が出てました！

2023/2/18の3.8.0のベータからdart3.0.0は入ってますので、その調整かもしれませんね！

この後も取り上げますが、[来週5月10日のGoogleIO](https://io.google/2023/intl/ja/)ではFlutter3.8がstableになるかもですね！

https://twitter.com/flutterreleases/status/1651292613998149634?s=46

## auto_route

すささんは以下の理由でauto_routeに最近乗り換えたとのこと！

>ずっと [go_router](https://pub.dev/packages/go_router) と [go_router_builder](https://pub.dev/packages/go_router_builder) を使ってましたが、ボトムナビゲーションバーを表示したまま画面遷移するように `ShellRoute` を使って修正をしたら、[タブを行き来すると画面スタックがクリアされてしまう問題](https://github.com/flutter/flutter/issues/99124) が go_router では解決できませんでした。

[https://zenn.dev/flutteruniv_dev/articles/20230427-095829-flutter-auto-route](https://zenn.dev/flutteruniv_dev/articles/20230427-095829-flutter-auto-route)

Flutterはこのタブの状態管理あたりが、iOSネイティブ（Swift）よりも大変ですね。。！

## Dart3が話題

Flutter大学内でもDart3.0が話題になってきました！

![](http://34.145.4.125/wp-content/uploads/2023/05/CleanShot-2023-05-02-at-07.52.05@2x-1024x196.png)

<img src="http://34.145.4.125/wp-content/uploads/2023/05/CleanShot-2023-05-02-at-07.53.03@2x-1024x289.png" alt="" width="300">

ちなみにヤマタツさんの紹介してた記事はこちら。

[https://www.sandromaglione.com/techblog/records-and-patterns-dart-language](https://www.sandromaglione.com/techblog/records-and-patterns-dart-language)

僕kboyも5月27日の[大阪.dart](https://flutteruniv.connpass.com/event/282171/)でDart3.0について話そうと思うのでキャッチアップしようと思います。

## 記事書きました

ここからは個人的な話。先週、Flutter大学に対してstripeのプロモーションコードを入力できるような実装をしていたので、その知見を記事にまとめました！

[https://zenn.dev/flutteruniv_dev/articles/672ba75d3829ca](https://zenn.dev/flutteruniv_dev/articles/672ba75d3829ca)

## 今週読んだ記事

↓何回も調べてる気がしますが、またset mergeとupdateの違いを忘れたので調べてましたw

[https://stackoverflow.com/questions/46597327/difference-between-firestore-set-with-merge-true-and-update](https://stackoverflow.com/questions/46597327/difference-between-firestore-set-with-merge-true-and-update)

また、プラン変更時のプロモーションコードの入力欄をつくるためにExpansionPanelについて調べてたら[わかなお](https://twitter.com/wakanao_banana)くんの記事が出てきました。結構いい記事書いてます。

[https://zenn.dev/wakanao/articles/86830cc6f7a0e9](https://zenn.dev/wakanao/articles/86830cc6f7a0e9)

## 5月のカレンダー発表

最近僕がCanvaで手作りしているカレンダーが今月も発表されました。

オフラインイベントは、5月14日にUTAGE、大阪.dartが27日にあります！

https://twitter.com/FlutterUniv/status/1652823689019412480?s=20

共同勉強会は一旦ひと段落していて、少し休んでまた6月ごろから始まるかもです。

いまのうちに過去教材に追いついておきましょう！

[https://flutteruniv.com/materials](https://flutteruniv.com/materials_)

## まとめ

ということで、今週のFlutterニュースでした！

GWも頑張っていきましょう！Flutter大学ではプロモーションコード「GW2023」を入れると5月7日まで1100円引きになるキャンペーン中なのでチェックしてみてください。（キャンペーンは気まぐれでたまにしかやらないのでこの機会をお見逃しなく！）

https://twitter.com/FlutterUniv/status/1651377637330399234?s=20