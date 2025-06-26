---
title: "【速報】 Google I/O 2023にてFlutter3.10のリリース発表。Dart 3.0に。"
description: ""
pubDatetime: "2023-05-11"
author: "kboy"
tags: ["パッケージ"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---


日本時間の2023年5月11日2時からGoogle I/Oが開催され、いくつかのFlutterに関する内容が発表されました。本記事ではFlutter関連情報に特化して、解説やコメントをしていきたいと思います。



Flutter 3.10リリース！



公式のツイートのピックアップの印象として、全体的に描画パフォーマンスが向上してそうな予感です。




https://twitter.com/FlutterDev/status/1656401212764307456?s=20




Dart3来ました



Flutter.3.10からDartが3.0になりました。



https://medium.com/dartlang/announcing-dart-3-53f065a10635



ちなみにDart3.0の変更に関する日本語速報は以下の記事が速かったので要チェックです！



https://www.awarefy.dev/blog/google-io-2023-flutter-dart-update/



私の方でも変更点をまとめます！



100% sound null safety



100%じゃなかったんだ！っていう感想なのですが、この前まで94%くらいだったみたいです。



以下は、null safetyまでの道のり。







interfaceとbase、finalのclassが作れるように



abstractしか今までなかったのですが、interfaceとbase、finalなどが追加されました。各々の用途は以下をチェックです！



https://dart.dev/language/class-modifiers



僕の感想としては、依然abstractが直感的には使いやすそうだなと思います。baseとinterfaceはインスタンス化できるらしいですが、そういうケースってありますかね？そこは誰かと議論したいです！



tuple的な機能がデフォルト実装



他にはtuple的な機能であるRecordsが実装されました。



前からtupleっていうサードパーティのpackageがあって、僕も使ったことがあるのですが、dartにデフォルトに実装されたいみたいです。DartではtupleじゃなくてRecordsって呼ぶらしい。



https://dart.dev/language/records



複数の値をサクッとreturnしたい際に使えそうですね。



ただ、返す値が増え過ぎた場合はクラスを作るのがオブジェクト指向らしい実装だとは思うので、乱用注意です。



Imepeller来てる👀



今までoptionだったImpellerは今回からデフォルトのレンダラーになりました！



以下は前からあるデモアプリです！




https://youtu.be/6Hb3QiH_yps




早くFlutter大学アプリにも実装してヌルヌルさを確認したいですね！



↓こちらは前からありますが、実際に滑らかさをチェックしたい場合はこちらのアプリをチェックです。



https://flutter.gskinner.com/wonderous/



Material 3



次からuseMaterial3はデフォルトがtrueになるらしくて、Material3がスタンダードになった感じです。



僕の方ではまだMaterial3を触れてないので詳しい言及は避けますが、下記記事で色々スクショもあるので要チェックです！



https://medium.com/flutter/whats-new-in-flutter-3-10-b21db2c38c73



詳しくは公式のYouTubeをチェック




https://www.youtube.com/watch?v=yRlwOdCK7Ho




Google I/O全体のまとめにおすすめなのは以下の動画。




https://www.youtube.com/watch?v=QpBTM0GO6xI




まとめ



以上、Google I/O 2023で発表されたFlutter 3.10及びDart 3.0のざっくりとしたまとめでした！



Flutterの進化が止まらないですね！
