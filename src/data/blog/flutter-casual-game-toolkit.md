---
title: "Flutter で ゲーム を作ろう!【Flutter Casual Game Toolkit】"
slug: "flutter-casual-game-toolkit"
description: ""
pubDatetime: "2022-05-20"
author: "Aoi"
tags: ["Package"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutter で ゲーム を作ってみたい！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      ゲーム用の設定ってとても難しそうだわ、、、
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

簡単にできる方法ってないのかしら？

本記事ではそんな要望、疑問にお答えします！

Flutter での ゲーム開発に役立つツールキット、
【Flutter Casual Game Toolkit】の紹介を行います。
あなたがゲーム開発に踏み出す手助けをします。

ぜひ読んでみてください！

## Flutterでのゲーム開発

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      そもそもFlutter でゲームって作れるの？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doctor.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      作れます！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

ボードゲームや、パズルゲームなどを作るのはFlutterは得意です！

そもそもゲームには2つのカテゴリーがあります。
アーケード風ゲームと、アプリ風ゲームです。

**アーケード風ゲーム** は、シューティングゲームや、レースゲームなど、
アクション、動きの多いゲームで、
ジョイスティックのような継続的な入力を必要とするゲームのことです。

**アプリ風ゲーム** は ボードゲームやカードゲーム、パズルゲームやストラテジーゲームのような
カジュアルゲームを意味しています。
カードのタップや数字や文字の入力など、ユーザーの瞬間的な入力に反応するゲームです。

Flutterはこの2つでいうと、アプリ風ゲームを作ることが得意です。

例えば、PLANETS はアニメーションするパネルを正しい位置に揃える、
スライドパズルゲームです。
今年始めに行われたFlutterのハッカソン、
Flutter Puzzle Hack で最優秀作品賞を獲った作品となっています。

https://fph-planets.web.app/#/

他にも様々なゲームが作られています。
以下でリンクを列挙します。

[Chess Variants - Omnichess](https://play.google.com/store/apps/details?id=club.omnichess)
[4 Pics 1 Word](https://play.google.com/store/apps/details?id=de.lotum.whatsinthefoto.us)
[Kelimelik](https://play.google.com/store/apps/details?id=com.he2apps.kelimelik&hl=en)
[Orbit – A gravity puzzle game](https://play.google.com/store/apps/details?id=au.net.interconnected.orbit)
[Tic Tac Toe Puzzle Game](https://play.google.com/store/apps/details?id=dev.flutter.tictactoe)
[Tomb Toad](https://play.google.com/store/apps/details?id=com.crescentmoongames.tombtoad)

Flutterでゲームを作れること、わかっていただけましたでしょうか？
次の章では、実際にFlutterでアプリ風ゲームを作るのに役立つ、
ツールキットを紹介します。

以降ではアプリ風ゲームをカジュアルゲームと表現します。

## Flutter Casual Game Toolkit

https://docs.flutter.dev/resources/games-toolkit

Flutter Casual Game Toolkit は 2022年のGoogle I/O で発表されました。
モバイルでのカジュアルゲーム開発を加速させる、
新規および既存のリソースをまとめたものです。

2022年5月20日現在、以下のようなリソースが存在します。

- テンプレートアプリのリポジトリ
- ゲーム制作の解説動画
- iOS/Android でリリース済みの3目並べゲームのソースコード

それぞれについて解説していきます。

### テンプレートアプリのリポジトリ

https://github.com/flutter/samples/tree/main/game_template

上記がテンプレートアプリのリポジトリです。

このアプリには以下のような機能が含まれています。

- メインメニュー
- 効果音やBGM
- 広告
- アプリ内課金
- アチーブメントとリーダーボード
- Crashlyticsのサポート

テンプレートアプリでは上記の機能を実現するため、
以下のようなパッケージが使われています。

- provider
- google_mobile_ads
- in_app_purchase
- audioplayers
- crashlytics
- game_services

このゲームテンプレートはあなたがこのアプリで**お金を稼ぐ**ことを想定しています。
そのため、広告やアプリ内課金が搭載されています。

### ゲーム制作の解説動画

https://www.youtube.com/watch?v=zGgeBNiRy-8&t=3s

Flutter Casual Game Toolkit 並びにテンプレートアプリについて紹介した動画です。

前半ではFlutterでのゲーム開発について話し、
後半ではテンプレートアプリのソースコードを見ながら、解説を行っています。

この動画さえ見ればテンプレートアプリについて理解が深まります。

### iOS/Android でリリース済みの3目並べゲームのソースコード

https://github.com/filiph/tictactoe

[Tic Tac Toe Puzzle Game](https://play.google.com/store/apps/details?id=dev.flutter.tictactoe) (iOSは[こちら](https://apps.apple.com/us/app/tic-tac-toe-puzzle-game/id1611729977))のソースコードが公開されています。
（上記リンク）

上で紹介したテンプレートを使って作成されており、
アプリ内課金機能や音声周りが実装されています。

### カジュアル ゲーム作成までのロードマップ

カジュアルゲーム作成までのロードマップは以下のように紹介されています。

1. [ゲーム制作の解説動画](https://youtu.be/zGgeBNiRy-8)を視聴する
2. [テンプレートアプリのリポジトリ](https://github.com/flutter/samples/tree/main/game_template)をクローンする
3. Flutter Game コミュニティのDiscordチャンネルに参加する
4. AdMobやFirebase等のセッティングを行う
5. ゲームを書き始める
6. Google 及び Apple ストアへデプロイを行う

基本となるテンプレートが用意されているので、
それを改造しながらアプリを作れるのは非常に良いです。

是非参考にしてみてください！

Flutter Game コミュニティのDiscordチャンネルは英語でハードルが高い、
そんな方にオススメなのが、Flutter大学です。

日本のFlutterコミュニティとして、200名以上の規模を持ったコミュニティで、
日々Flutterの最新情報や技術情報について意見交換がなされています。

参加は以下のリンクから可能となっています。
ぜひ検討してみてください。

https://flutteruniv.com/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事では、Flutter での ゲーム開発に役立つツールキット、
【Flutter Casual Game Toolkit】の紹介を行いました。

いかがだったでしょうか？
ゲーム作ってみたくなりましたか？

テンプレートがかなりしっかりと用意されているので、
ゲームを作成するにあたってとても手助けになるかと思います。

[Casual Game Toolkit](https://docs.flutter.dev/resources/games-toolkit) のページには他にも様々なリソースが紹介されています。
是非参考にしてみてください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/5/20）

Flutter Casual Game Toolkit の紹介記事でした。

ゲーム、楽しいですよね。

自分は30になった今でも、ゲームにハマって遊び続けています。
どのくらいハマったかというと、
そのゲームの戦績を記録するアプリをリリースするぐらいにはハマりました。

そのアプリを作ろうと思ったのがちょうど1年前のことです。
今ではその経験が生き、アプリ開発のお仕事をもらえるようになりました。

間違いなく、自分の人生はゲームによって変わったと言えます。

いつか、誰かの人生を変えるくらい素敵なゲームを作りたいものですね。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。