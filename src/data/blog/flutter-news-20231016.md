---
title: "Flutter ニュース 【2023年10月第3週】"
slug: "flutter-news-20231016"
author: "Aoi"
description: ""
pubDatetime: 2023-10-16T10:00:00.000Z
tags: ["ニュース"]
---

**Flutterの最新情報をキャッチアップしたい！**

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2023年10月第3週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.13.7 リリース！

https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel#flutter-313-changes

FlutterのStable チャンネルにてVersion 3.13.7が利用可能となりました。

Xcode 15, iOS 17での実行時エラーに対応したとのことです。

詳細は上のリンクから。

### Observable Flutter: FlutterFlow

https://www.youtube.com/live/RF8ungZH0A4?si=Fv7ehjPRfA1kZUO3

Flutter公式チャンネルでObservable<Flutter>というライブ配信が行われました。

Flutterのノーコードツール、FlutterFlowを用いてマルバツゲームを実装しようという、  
ライブコーディングの動画となっています。

### firebase\_auth (Package of the Week)

https://youtu.be/Qw3IjnhTl5w?si=1cuyAeFGnUUJwrlp

Flutter の公式YouTube チャンネルにてFlutterのパッケージを紹介する動画シリーズ、  
Package of the Weekが更新されました。

今回はFirebaseを使った認証機能を提供する、firebase\_authパッケージについての紹介動画になります。

## Flutterに関する話題

### The Journey of Building and Marketing an App: How I went from an idea to a published app with over 12k users - All for free!

https://www.reddit.com/r/FlutterDev/comments/177ras5/the\_journey\_of\_building\_and\_marketing\_an\_app\_how/

12,000ものユーザーを集めたゲーム情報アプリの作成、マーケティングのノウハウについて書かれた記事、ソースコード、アプリの紹介の投稿がRedditで話題となっていました。

ローカライゼーションを利用したユーザー獲得の仕方について紹介がされています。

### A demo app with complex animation using flutter\_animate

https://www.reddit.com/r/FlutterDev/comments/176kij4/a\_demo\_app\_with\_complex\_animation\_using\_flutter/

複雑なアニメーションを実装したデモアプリの紹介記事がRedditで話題となっていました。

アニメーションを直感的に実装できるパッケージ、flutter\_animateを用いて作成されたとのことです。

### flutter\_credit\_card パッケージ

https://pub.dev/packages/flutter\_credit\_card

Flutter にクレジットカードのUIと入力用のフィールド等をアニメーション付きで提供するflutter\_credit\_cardパッケージがアップデートされた、との投稿がRedditで話題となっていました。

pub.devのページ内で使用時のUI、アニメーションを見ることが可能です。

## Flutterに関する記事

### \[Flutter\] レビュワーに配慮のあるコードを書こう

https://qiita.com/isekiryu/items/1e44171120428c3bdab1

レビュワーに負担をかけないよう、プルリクエスト時のコード差分の表示を減らす、整える方法についての記事です。

Flutterで出てきがちな生成ファイルについて、.gitignoreや.gitattributesを用いる方法が紹介されています。

### \[Flutter\]Flutterでの依存関係図の自動生成が便利だった件について

https://qiita.com/isekiryu/items/8311756735234c4e445a

riverpod\_graphというパッケージを使ったコードの依存関係の視覚化に関する記事です。

riveroid\_graphの使い方と使用後のイメージが記事内で紹介されています。

## Flutter大学メンバーによる記事

今週Flutter大学メンバーが書いた記事は以下になります！

[Serverpod Authentication の行間を読む〜遷移](https://zenn.dev/flutteruniv_dev/articles/51b7d6c65b2066)

## まとめ

本記事ではFlutterニュースとして、  
2023年10月第3週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2023/10/16）

Redditで 『Flutterエンジニアが ネイティブの勉強をすることは、果たして良いことなのか？』  
という投稿が話題になっていたので、これについて自分の考えを述べたいと思います。

何かを学ぶことについて悪いことなんてほとんどないので、  
ネイティブの書き方を学ぶことも悪いことではないと思います。

ただ、どのように学ぶか、は工夫が必要かな、と思ってます。

Flutterエンジニアがネイティブのコードを書くことを要求される時、必要な知識は以下の3つだと考えます。

*   ネイティブ言語の文法
*   実装したい機能の実装方法
*   MethodChannelを利用したFlutterとの繋ぎ方

ここを重点的に学ぶために本を読む、とか使いたい機能だけを持った小さなアプリを作る、等の学び方は良い学び方だと思います。

逆に、ネイティブで個人開発で大きなアプリを作ってみたり、  
設計方法について学ぶ、というのは、Flutterでアプリを作るためにネイティブを利用する、という点からは少し外れてしまうように思います。  
（もちろんこの方法で学べることは貴重な財産となりますが、Flutterでアプリを作る、という点からするとちょっとやりすぎに思えます。）

将来的にFlutter専門のエンジニア(ネイティブを補助的に使えるエンジニア)となりたいか、Flutterもネイティブも十分に書けるエンジニアとなりたいかによって、勉強方法は変わってくると思います。  
自戒を込めて、ネイティブの勉強方法はしっかりと考えて取り組むべきだな、と思いました。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。