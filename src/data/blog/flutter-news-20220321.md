---
title: "Flutterニュース 【2022年3月第3週】"
slug: "flutter-news-20220321"
author: "Aoi"
description: ""
pubDatetime: "2022-03-21"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="http://34.145.4.125/wp-content/themes/cocoon-master/images/man.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutterの最新情報をキャッチアップしたい！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年3月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter公式TwitterにてGDEによるノウハウ共有が始まる

https://twitter.com/FlutterDev/status/1503445862785200135

Flutter公式Twitterにて、Flutter GDEによる、
Stack Overflow の回答の共有が始まりました。

GDEとは、Google Developer Expertの略称で、
Googleのテクノロジーに対して豊富な経験があり、
拡散力があり、専門知識があるとGoogleに認められた人物のことです。

Stack Overflowは、プログラミングに関するQ&Aサイトです。
[https://ja.stackoverflow.com/](https://ja.stackoverflow.com/)

現在まで以下のようなノウハウが共有されています。

- iOS アプリのビルドエラーの対処法
- アプリのテーマを動的に変更する方法
- ヒントとして現れる波線を非表示にする方法
- リストから重複した要素を削除する方法
- Firebease × Flutterの電話番号認証のiOSでの検証方法

今後数週間、このようなノウハウの共有が行われるそうです。

### アダプティブとレスポンシブの比較 | Decoding Flutter

https://www.youtube.com/watch?v=HD5gYnspYzk&list=PLjxrf2q8roU1fRV40Ec8200rX6OuQkmnl

マルチプラットフォームのFlutterで考慮すべき重要な概念である、
アダプティブとレスポンシブについて解説した動画が公式よりアップロードされました。

Android, iOSだけでなく、WebやDesktopにもコードを対応しなければならない、となった時、

- プラットフォーム依存の機能をどうするか？（アダプティブ）、
- 画面レイアウトをどうするか？（レスポンシブ）

について考えなければなりません。

これについて、動画内で解決策を含め解説されています。

### ScaffoldMessenger（今週のウィジェット）

https://www.youtube.com/watch?v=lytQi-slT5Y&list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG

今週のウィジェット(Widget of the Week)にScaffoldMessengerの動画が追加されました。

画面遷移の直前に出したSnackBarを
遷移後の画面でも表示する際に利用されるWidgetです。

基本的な使い方が動画で解説されています。

### runAppの内部コードの深掘り動画(The Boring Flutter Development Show)

https://youtu.be/e5RhcvWqJAo

Flutterでコードを書く際、一番最初に書く`runApp`のコード、
このコードが内部で何をおこなっているのか、
`runApp`の実装コードを深掘りして理解しよう、という趣旨の動画が、
公式にてアップロードされました。

50分近い動画ですが、解説を交えつつコードリーディングされています。

## Flutterに関する話題

### card_stack_widget パッケージ

https://pub.dev/packages/card_stack_widget

カードを積み重ねたようなUIを実現できるパッケージ、
card_stack_widgetがRedditで話題になっていました。

スワイプで消す方向などの設定も可能です。

### etch パッケージ

https://pub.dev/packages/etch

シンプルかつ宣言的にCustomPaintを扱えるようにするパッケージ、etchが
Redditで話題になっていました。

Widgetとして簡単に円や正方形などの図形を描くことが可能です。

### iconify_flutter パッケージ

https://pub.dev/packages/iconify_flutter

100以上のオープンソースのアイコンが使えるようになるパッケージが
Redditで話題となっていました。

Flutterで用意されているアイコン以外のアイコンを使いたい、
という時に、候補に上がるかと思います。

## Flutterに関する記事

### **Flutter の描画の仕組みを理解する**

https://zenn.dev/seya/articles/f7ebcd8335eee7

Flutterの描画の仕組みについて深掘りした記事が話題となりました。

Flutterの内部での描画の仕組みについてとても丁寧にまとめられています。

### 伸縮、固定が可能なHeaderの作成方法

https://guillaume.bernos.dev/quick-flutter-design-3-music-app/

上限までスクロールすると伸びて、スクロール中は上に一部が表示される、
そんなAppBarの実装方法についての解説記事です。

実際の動作は記事内にgif画像があるので参照ください。
サンプルコード、GitHubも公開されています。

### Riverpodを使ったFlutterのアーキテクチャの提案

https://codewithandrea.com/articles/flutter-app-architecture-riverpod-introduction/

Flutter × Riverpod のアーキテクチャとして、
Riverpod Architectureの提案記事です。

MVC, MVVM, Clean Architectureなど、
様々なアーキテクチャとの比較がなされています。

Riverpod Architectureについては、
概念の紹介のみで具体的な実装方法は現在更新中です。

## Flutterに関する動画

### Providerを使った状態管理アプリ|Step by Step for Beginners Shopping Cart

https://www.youtube.com/watch?v=_my1IHfn0xk

Providerを使った状態管理の方法を学べる動画です。

カウンターアプリを例に挙げ、
シンプルにProviderを使った状態の表示、共有、更新を学べます。

### Flutter × Appwrite の解説動画

https://www.youtube.com/watch?v=2d6evFfOX5Q

Firebaseのオープンソースの代替手段として注目のAppwriteと、
Flutterを組み合わせて使ってみた動画が話題になっていました。

導入の仕方から、Authentication、データベースの使用まで10分弱で端的にまとまっています。

## Flutter大学メンバーがリリースしたアプリ

### Thanxtory 感謝のサードプレイス

https://apps.apple.com/jp/app/thanxtory/id1613315043

[ヒロシュー](https://twitter.com/hiroshu_diary)さんにより、
感謝のサードプレイスアプリ『Thanxtory』がリリースされました！

誰かへの感謝の気持ちを投稿し、共有する、そんなSNSアプリとなっています。
共有された感謝の投稿に対するいいね機能等も用意されています。

週4回行われている質問相談会の質問Zoomにほぼ毎回、
積極的に参加されているのが印象的でした。

### Stammpy! ふらり旅行支援アプリ

https://apps.apple.com/jp/app/stammpy/id1612801895

https://play.google.com/store/apps/details?id=jp.asapsoftware.buttercup

kanaiさんにより、
ふらり旅行支援アプリ、『Stammpy!』がリリースされました！

地元の人が登録したオススメの観光地情報を見て旅行を楽しむことのできるアプリです。
地図での場所の参照もできて、旅行にぴったりのアプリとなっています。

技術面ではFlutterのノーコードツール、FlutterFlowを使って実装したそうです。
新しい技術を積極的に取り入れる姿、見習いたいですね。

## Flutter大学のメンバーによる記事

今週Flutter大学メンバーが書いたFlutter関連の記事を紹介します。

### NoCodeサービス FlutterFlowを使ってみての感想

https://qiita.com/haapyturn/items/7abc72dd61bc461da465

上で紹介した、Stammpy!のアプリを作成するにあたって使ったノーコードツール、
FlutterFlowについて、使ってみた感想の記事です。

メリット、デメリットについて、実際にアプリをリリースした方の目線で書かれています。

### **Flutterのパッケージのカスタマイズ**

https://zenn.dev/hiroshu/articles/9eb3da0f8bdd1f

Flutterのパッケージを自分好みにカスタマイズして使うための方法について
まとめられた記事です。

実例を用いて、端的に方法についてまとめられています。

### **あれもこれもFlutterで開発されてるって、マ？？**

https://zenn.dev/kooooons/articles/814cc48f6b927a

Flutterで作成されたアプリを紹介している記事です。

記事内で十数個のアプリが紹介されています。
Flutterで作成されたアプリを参考にしたい際に有用な記事です。

## 週刊Flutter大学の記事

週刊Flutter大学で先週アップロードした記事を紹介します。

https://blog.flutteruniv.com/flutternews-20220314/

https://blog.flutteruniv.com/flutter-skeleton-template/

https://blog.flutteruniv.com/flutter-widget-stepper/

https://blog.flutteruniv.com/flutteruniversity-jointdevelopment-7/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、2022年3月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/3/21）

今週のFlutterニュースの記事では、
Flutterメンバーによってリリースされたアプリを２つも紹介することができました。

個人開発でリリースまでできるのは、本当にすごいことだと思います。
改めて、リリース本当におめでとうございます。

個人開発で課題になるのは何だと思いますか？
技術面はもちろんあるかもですが、
自分はモチベーションを如何に保つか、だと思っています。

個人開発は自分でスケジュールを組むことができて自由な反面、
作成の期限も自由なので、「作らなければいけない」という外部からの制約がありません。

人によるかと思いますが、外からの制約がないと、
モチベーションを維持するのって難しいと個人的に思います。
作成期限を長く設定していればなおさらのことです。

対策は、２つあると思っています。

一つは、モチベーションが続く期間内で作り上げてしまうことです。
短期間、一挙集中で作ることで、
モチベーションが切れる前に作りきってしまうという対策です。

もう一つは周りを巻き込んで作ることです。
周りに「○日までに作成する！」と宣言したり、
作成過程を周りに見てもらうことで、外からの制約を作ることができ、
モチベーションの維持につながります。

Flutter大学ではSlackのtimesだったり、
個人開発の進捗報告会などで、進捗を報告したりなど、
周りを巻き込む方法が多く用意されています。

もしあなたが個人開発のモチベーションに悩んでいるなら、オススメですよ。
ぜひ参加してみてください。

Flutter大学への参加はこちらから

https://flutteruniv.com/

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。