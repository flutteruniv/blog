---
title: "Flutter Puzzle Hack 入賞作品レビュー！"
author: "Aoi"
description: ""
pubDatetime: 2022-04-29T13:28:29.000Z
categories: ["flutter"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)

Flutter Puzzle Hack の結果が気になる！

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/woman.png)

どんな作品が入賞したのかしら？

本記事では今年始めに実施されたFlutterのハッカソンイベント、  
Flutter Puzzle Hack の入賞作品をレビューしていきます。

以下の賞について、最優秀作品をそれぞれ取り上げて紹介します。

*   Animation / Design (アニメーション、デザイン)
*   Execution (実行性)
*   Creative (独創性)
*   Multiplatform (マルチプラットフォーム)

短い時間でどんな作品が入賞したのか確認することができますので、  
ぜひ読んで見てください！

## Best Animation / Design ~ Retro Slide Puzzle ~

https://youtu.be/REIwW3kcjGc

Animation / Design (アニメーション、デザイン)の最優秀作品は、  
"**Retro Slide Puzzle**" でした！

リンク： [https://ashishbeck.github.io/slide\_puzzle/#/](https://ashishbeck.github.io/slide_puzzle/#/)  
GitHub : [https://github.com/ashishbeck/slide\_puzzle](https://github.com/ashishbeck/slide_puzzle)

### 特徴

#### アニメーション

Animation / Design で入賞しているだけあって、  
とにかくアニメーションが特徴的です。

Game Start時のアニメーションや、  
パズル外のアニメーションも設定されています。  
もちろん、パズルをプレイ時のアニメーションもスムーズな形で設定されています。

一部アニメーションは[Rive](https://rive.app/)を使って作ったとのことです。

上の動画や実際に触ってみてアニメーションの凄さを実感してみてください。

#### 解の表示機能

一番驚いたのは、Solve ボタンを押下した時の動きです。  
Solve ボタンを押すとパズルの一つの解をアニメーションで実行してくれます。

パズルの解を求める、というだけでもかなり凄いことです。  
このパズルの解の導出のコードは、Pythonを使って書いたとのことでした。

#### 操作性

肝心のパズルの操作性もとても良いです。

通常のクリックでの操作の他、ドラッグでのパネル移動や、  
キーボードのカーソルキーでの移動にも対応しています。

２つのパネルをまとめて移動する、なんてことも可能となっています。

#### 状態管理手法

状態管理手法についてです。

GitHubを見る限り、ProviderとChangeNotifierProviderを使って構成されているようでした。

ChangeNotifier継承のクラスはProviderという名前で  
providers.dart一つのファイルにまとまっています。

#### その他機能

他にも以下のような機能が実装されています。

*   Firebase と連携したランキング機能
*   パズル画像の変更機能
*   3×３パズルへの変更機能
*   画面サイズに対する動的なサイズ変更

また、Webだけでなく、AndroidやiOSでも実行可能とのことです。

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doctor.png)

２ヶ月ちょっとの期間で作ったとは思えないほどのクオリティで、驚きました！

とにかく細かいところのアニメーションがとても素晴らしいです！

触ってみて、こんなこともできるのか、と何度も驚かされました。

ぜひ一度触ってみることをオススメします！

## Best Execution ~ PLANETS ~

https://youtu.be/fZcdObp-4co

Execution (実行性)の最優秀作品は、  
"**PLANETS**" でした！

リンク： [https://fph-planets.web.app/#/](https://fph-planets.web.app/#/)  
GitHub : [https://github.com/jyotirmoy-paul/planets](https://github.com/jyotirmoy-paul/planets)

### 特徴

#### アニメーションでのパズル

PLANETSのパズルは、画像やテキストタイルのパズルではなく、  
アニメーションを切り取ったタイルで行うパズルとなっています。

[Rive](https://rive.app/)で作成したアニメーションを、CustomClipperを用いて一つ一つのタイルにしています。

各タイルのアニメーションの同期もしっかりと行われていて、  
違和感のないパズルを楽しめます。

#### 9種類のアニメーションと、３つの難易度

PLANETSはその名の通り惑星をテーマにしており、  
9つの惑星（Pruteを含む）のアニメーションでパズルを楽しむことができます。

このそれぞれでEasy(3x3),Normal(4x4),Hard(5x5) の難易度が選べ、  
合計で27種類のパズルを遊ぶことが可能となっています。

#### Auto Solve 機能

Retro Slide Puzzle と同様に PLANETSでも自動での解答機能がついています。

こちらの自動解答のロジックはすべてDartで書かれており、  
アプリ内で動いているのが特徴的です。

#### 状態管理手法

状態管理手法としては、blocを使用して作成されています。

Puzzle関連のロジックや、ダッシュボード画面のロジック等の分離に役立っているようです。

上記のGitHubにてコードを確認することが可能です。

#### その他機能

他にも以下のような機能が実装されています。

*   ダッシュボード画面でのホバー時のアニメーション減速機能。
*   キーボードショートカット
*   パズル結果評価機能
*   結果シェア機能

また、Webだけでなく、AndroidやiOSでも実行可能とのことです。

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doctor.png)

アニメーションでパズルを実行する、というアイデアと、それの実現が本当に凄いです！

Auto Solve機能もすべてDartで書かれている、というのがとても良いなと思いました。

ダッシュボードのアニメーションも考え込まれていて、  
さすが賞を取るだけあるな、と思わされました！

## Most Creative ~ The Werewolves Escape ~

Creative(独創性)の最優秀作品は、  
"**The Werewolves Escape**"でした！

リンク： [https://puzzle.wolfiz.com/#/splash](https://puzzle.wolfiz.com/#/splash)

### 特徴

#### 箱入り娘形式のパズル

The Werewolves Escape のパズルは１〜９の数パネルのスライドパズルではありません。

日本では『箱入り娘』と呼ばれる形式のパズルとなっています。

不時着した青年を、狼男等のモンスターがたくさんいる森から脱出させる、  
というストーリーでゲームを遊ぶことができます。

#### アニメーション

パズルの全てのタイルに独立したアニメーションが設定されています。

このアニメーションにより画像にはない緊迫感が生まれています。

アニメーションは[Rive](https://rive.app/)によって作成したとのことです。

#### 認証とランキング機能

このアプリにはメールアドレス、パスワードによる認証と、  
ユーザーネームによるランキング機能が実装されています。

バックエンドはFirebaseを使って実装したとのことです。

#### 状態管理手法

状態管理手法としては、getXを使用して作成されている、とのことです。

#### その他機能

他にも以下のような機能が実装されています。

*   キーボードでの操作機能
*   パズルのリセット機能
*   How To Use のMovie

またこちらも、Webだけでなく、AndroidやiOSでも実行可能とのことです。

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doctor.png)

オープニングムービーやバックグラウンドミュージックなど、  
構築されている世界観がとても良いアプリです！

箱入り娘パズルを採用しているのも、まさしく独創性あふれるアイデアで、  
とても面白いと思いました！

## Best Multiplatform~ **Slideparty** ~

https://youtu.be/2pusZqdpOdw

Multiplatform (マルチプラットフォーム)の最優秀作品は、  
"**Slideparty**"でした！

リンク： [https://slideparty.vercel.app/#/](https://slideparty.vercel.app/#/)  
GitHub : [https://github.com/definev/slideparty](https://github.com/definev/slideparty)

### 特徴

#### プラットフォームによらないマルチプレイ

このアプリの最大の特徴は、マルチプレイが可能なことです。

ただのマルチプレイではなく、  
友達がどのプラットフォームでも遊ぶことができるマルチプレイとなっています。

リアルタイムに同期して相手のプレイを見ることができます。

#### バックエンドもDart

次の特徴として、バックエンドもDartなことが挙げられます。

Shelfと呼ばれるライブラリを使い、Web Socketを使ったサーバーを構築しているそうです。

#### Auto Solve 機能

Slide Party の 3つあるゲームモードの一つ、  
シングルプレイモードでは、Auto Solve機能が搭載されています。

4×4以上では、周りを固定して、3×3にして解く、というロジックで作成されているそうです。

こちらの自動解答のロジックもすべてDartで書かれており、  
アプリ内で動いているのが特徴的です。

#### 状態管理手法と構成

状態管理手法としては、hooks + riverpod が使用されています。

また、単一のリポジトリでの構成ではなく、  
Auto Solveのメソッド等を別リポジトリで管理するなどして、  
複数のリポジトリにまたがってアプリが構成されています。

#### その他機能

他にも以下のような機能が実装されています。

*   キーボードでの最大４人同時操作機能
*   クリア時のアニメーション(複数)
*   マルチプレイ時の妨害スキル
*   画面サイズに対するレスポンシブ対応

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doctor.png)

スライドパズルをマルチプレイで遊べるようにする、  
という難しいテーマを見事に実現したアプリになっています！

しかも複数の種類の端末でのマルチプレイの実現、  
というマルチプラットフォーム賞にふさわしい機能をもったアプリではないでしょうか。  
本当に凄いです！

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事では今年始めに実施されたFlutterのハッカソンイベント、  
Flutter Puzzle Hack の入賞作品をレビューしていきました。

本当にどのアプリも個性的でアイデアに溢れていて、  
とても素晴らしいものばかりでした。

以下のページでは入賞作品を始め応募された作品を見ることができます。

https://flutterhack.devpost.com/project-gallery

GitHub等を見れる作品も多いので、実力アップのためにもぜひ覗いてみてください！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/4/2９）

Flutter Puzzle Hack の入賞作品のレビュー記事でした。

編集後記では、個人的に好きなアプリを一つ紹介したいと思います。

https://youtu.be/dddu75aOGkE

リンク : [https://slidez.dsi.dev/](https://slidez.dsi.dev/)

3Dで操作できるだけでなく、ARの機能まで搭載しているアプリとなります。  
惜しくも賞は逃したようですが、最初に見た時のインパクトが凄かったです。

個人的に、このような自分の付けたい機能を盛りに盛ったアプリは好きです。

入賞作品以外にも面白いアプリが沢山あるかと思います。

あなたも是非お気に入りのアプリを探してみてください！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。