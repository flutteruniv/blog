---
layout: "../../layouts/BlogPost.astro"
title: "Flutter って何？ アプリ開発の常識を壊すスーパーツール！"
description: ""
pubDatetime: "2022-03-01"
author: Aoi
slug: "flutter-explanation"
featured: false
draft: false
tags: ["Flutter"]
ogImage: ""
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)
Flutter （フラッター）って最近よく聞くけど、何なんだろう？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)
聞いたことあるけどよくわからないのよねぇ

「Flutterは聞いたことあるけど、よくわからない、、、」

そんなあなたのために、本記事では、

- Flutterとは何か？
- Flutterを使う利点って？
- Flutterの将来性は？

について解説していきます。

結論を先に言います。

**Flutterは、アプリ開発の常識を壊すスーパーツールであり、利点も多く、将来性の塊です。**

数年後、何のアプリを作るにしろ、

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doya-man.png)
「それ、Flutterで作れば良くね？」

となる時代が来るかもしれません。

この記事を読んだ後、Flutterを使ってみたくなること間違いなしです！
ぜひ読んでみてください！

## Flutter とは何か？

![](https://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング女性.jpeg)

### Flutter とは

Flutterとは「**アプリケーション作成のためのフレームワーク**」です。

フレームワークとは『アプリケーションを開発するとき、その土台として機能させるソフトウェアのこと』です。

[大塚商会IT用語辞典より引用](https://www.otsuka-shokai.co.jp/words/framework.html#:~:text=%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF%E3%81%A8%E3%81%AF,%E6%A9%9F%E8%83%BD%E3%81%95%E3%81%9B%E3%82%8B%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%AE%E3%81%93%E3%81%A8%E3%80%82&text=%E3%80%8C%E6%9E%A0%E7%B5%84%E3%81%BF%E3%80%8D%E3%80%8C%E9%AA%A8%E7%B5%84%E3%81%BF%E3%80%8D%E3%80%8C,%E3%81%84%E3%81%8F%E3%81%AE%E3%81%8C%E4%B8%80%E8%88%AC%E7%9A%84%E3%80%82)

具体的な例で言うと、
皆さんが普段使っているモバイルアプリ（スマホアプリ）のようなアプリケーションを作成できるフレームワークです。

Flutterでコードを書く際に使うプログラミング言語を**Dart**(ダート)と言います。

### 特徴

あなたは、こう思ってはいませんか？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doya-woman.png)
モバイルアプリとウェブアプリ、作るツールもプログラミング言語も違うし、
同時になんて作れるわけない！

Flutterはその常識を壊します。

Flutterの一番の特徴は、作成対象のアプリケーションが一つでないこと、
**マルチプラットフォーム**であることです。

- モバイルアプリケーション
- ウェブアプリケーション
- デスクトップアプリケーション
- 組込みアプリケーション

Flutterでは上記を**全て作ることができます**。

モバイルアプリケーションひとつとっても、

- Android向け
- iOS向け

でフレームワーク、プログラミング言語が異なります。（注1）

これに加えてウェブアプリケーションやデスクトップアプリケーションも作れる、
と聞くと、驚きですよね。

しかも作れるだけではありません。
モバイル向けに作成したコードの大部分を流用してウェブ向けのアプリケーションを作成する、
なんてことも可能です。

「どんなプラットフォームに対しても単一のコードベースで
アプリケーションを作成できるフレームワーク」

それがFlutterです。

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)
モバイルアプリとウェブアプリ同時に作れるなんてすごい！

注1: React Native、Xamarinなど、iOSとAndroidなら両方作成できるフレームワークもあります。

## Flutter を使う利点って？

![](https://blog.flutteruniv.com/wp-content/uploads/2022/02/コーディング男性.jpeg)

Flutterを使う利点はたくさんあります。

本記事では抜粋して、以下の４つについて解説します。

- 開発体験が良い
- 導入が無料
- 直感的で簡単
- 開発コストの削減が可能

### 開発体験が良い

Flutterの利点、１つ目は開発体験が良いことです。

プログラミングを少し触ったことがある人で、こんな経験はないでしょうか？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)
プログラムを少し変えたいだけなのに、実行に時間がかかる、、、

プログラムを実行して見つけたちょっとしたミス。
これを修正しようと思ってプログラムを再実行すると、ちょっとの変更なのに1~2分かかってしまう。

この待ち時間、勿体無いですよね。

Flutterの**ホットリロード**という機能がこの待ち時間を解決してくれます。

下の動画をご覧ください。

コードの変更が瞬時にアプリケーションに反映されているのがわかると思います。

このように、コードの変更を瞬時に反映する機能が**ホットリロード**です。

待ち時間が少ないのはストレスレスですし、何より直感的で楽しいです。

ホットリロードによる待ち時間が少なさがFlutterの開発体験を良くしてくれます。

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/woman.png)
変更がすぐ反映されるのはとても楽しそう！

### 導入が無料

Flutterの利点、２つ目は導入が無料なことです。

Flutterでコードを書くためのエディターや、
Flutterを動かすのに必要なソフトウェアは完全に無料となっています。

なので、パソコンさえあれば、Flutterでの開発にかかるお金はありません。

（各モバイルアプリストアに作ったアプリを登録するのにお金がかかりますが、
これは他のプラットフォームでも同じです。）

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)
普段触っているようなアプリケーションが無料で作れるなんて、魅力的だね！

### 直感的で簡単

Flutterの利点、３つ目はコードを書くのが直感的で簡単なことです。

FlutterでアプリのUI(ユーザーインターフェース)を作成するにあたって重要になるのが**Widget**(ウィジェット)です。

WidgetとはFlutterのコードを構成する部品のことです。

例えば以下のようなWidgetがあります。

- テキストを表示するWidget
- 画像を表示するWidget
- ボタンを表示するWidget
- Widgetを縦(横)に並べるWidget
- Widgetに余白を与えるWidget
- ...

Flutterでは、このようなWidgetを積み木やパズルのように組み合わせることでUIを作成していきます。

実際のコードの書き方、Widgetの使い方については、
以下のYoutubeのチュートリアル動画がとても参考になります。
どのくらい簡単なのかわかると思うので、ぜひ見てみてください。

https://www.youtube.com/watch?v=EJOA0plae_s

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/woman.png)
パズルを組み立てるみたいに画面を作れるのね！

### 開発コストの削減が可能

Flutterの利点、4つ目は、開発コストの削減が可能なことです。

iOSとAndroidのモバイルアプリ開発を例に時間のコストと雇う技術者のコストを考えていきます。

#### 時間のコスト

![](https://blog.flutteruniv.com/wp-content/uploads/2022/02/スクリーンショット-2022-02-25-11.59.48-1024x731.png)

この図はアプリ開発にかかる合計時間を表した図です。

ネイティブ(マルチプラットフォームでない)の場合の開発では、iOSとAndroidそれぞれに時間がかかるため、2つアプリを作る時間が必要になります。

一方、Flutterはマルチプラットフォームのため、１つのアプリをiOS、Androidに適用させるので、
１つのアプリを作る時間で済みます。

このように、Flutterで開発することによって、開発時間の削減ができ、コストの削減が可能です。

#### 雇う技術者のコスト

Flutterでの開発ではFlutterの開発技術を持った開発者を雇います。

一方、ネイティブの開発では、iOSの開発技術と、Androidの開発技術、2つの技術を持った開発者を割り当てる必要があります。
２つの技術を持った技術者を雇う場合、それぞれ別の技術者を雇う場合、どちらの場合でも、１つの技術を持った技術者を雇うよりはコストがかかります。

このように、Flutterで開発することによって、雇う技術者のコストを削減できます。

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/doctor.png)
コスト削減できるなら、Flutterの導入価値ありそうですね！

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)
個人開発でもFlutterで時間短縮できそう！

## Flutter の将来性は？

![](https://blog.flutteruniv.com/wp-content/uploads/2022/02/プログラミング画像.jpeg)

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)
Flutterがすごいのはわかったけれど、将来的に使われるのかしら？

私は、Flutterは将来的に広く使われるフレームワークとなると考えています。
この根拠として以下の３つを解説していきます。

- Googleによるフレームワークであること
- 約3年で50万ものアプリケーションが作られたこと
- 大企業が導入し始めていること

### Google によるフレームワークであること

根拠の１つ目はGoogleによるフレームワークであることです。

GoogleはGAFAMと呼ばれる5つ世界的テクノロジー企業の一角です。

あなたが知りたいことを知るために使う検索エンジンや、
Google Chromeのようなウェブブラウザ、
スマートフォンのオペレーションシステムであるAndroidなど、
今の世の中になくてはならないものを作り続けている企業です。

このGoogleが主導して作成しているフレームワーク、
というだけでも将来性を信用できるかと思います。

### 約3年で50万ものアプリケーションが作られたこと

根拠の２つ目は約3年で50万ものアプリケーションが作られたことです。

以下の文章は2022年2月にGoogleが出した、Flutterの戦略文書の抜粋です。

Over the last year, Flutter has overtaken others to become the most popular toolkit for cross-platform mobile development, and as of February 2022, there are nearly 500,000 apps that use Flutter.

訳：昨年、Flutterは他のツールキットを追い抜き、モバイル開発クロスプラットフォームのツールキットの中で最も人気のあるツールキットとなり、また、2022年2月時点で500,000近くのアプリでFlutterが使われています。

[Flutter 2022 Strategy](https://docs.google.com/document/d/e/2PACX-1vTI9X2XHN_IY8wDO4epQSD1CkRT8WDxf2CEExp5Ef4Id206UOMopkYqU73FvAnnYG6NAecNSDo9TaEO/pub)

Flutterは2018年12月にバージョン1.0.0がリリースされた、比較的新しいフレームワークとなります。

それが、2022年2月現在までの約3年間で50万ものアプリケーションに使われているなんて驚きですよね。

このユーザーの増加傾向が急に止まることは考えにくいです。
これからFlutterはますます使われるようになっていくと考えられます。

### 大企業が導入し始めていること

最後の根拠は大企業が導入し始めていることです。

Flutterを導入している企業として、以下の企業が挙げられます。

- [BMW](https://flutter.dev/showcase/bmw)
- [TOYOTA](https://flutter.dev/showcase/toyota)
- [Alibaba](https://flutter.dev/showcase/alibaba-group)

どれも世界的な大企業ですよね。
今後もFlutterを導入する企業は増えていくと考えられます。

以上が、Flutterの将来性を示す根拠となります。

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/パソコン.jpeg)

本記事では、以下の解説を行いました。

- Flutterとは何か
- Flutterの利点
- Flutterの将来性

Flutterについて、興味を持っていただけましたでしょうか？

Flutter学習の始め方について知るには、下記記事がオススメです。

https://zenn.dev/kboy/articles/16181eaa6783d6

将来、Flutterさえ習得しておけば、どんなアプリケーションエンジニアとしても働ける時代が来ると信じております。

アプリ開発の常識を壊すスーパーツール、Flutter、
ぜひぜひ触ってみてください。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考：

Flutter
[https://flutter.dev/](https://flutter.dev/)

Flutter in 2022: strategy and roadmap
[https://medium.com/flutter/flutter-in-2022-strategy-and-roadmap-8c5eaf7c4275](https://medium.com/flutter/flutter-in-2022-strategy-and-roadmap-8c5eaf7c4275)

## 編集後記(2022/03/01)

今回はFlutterについての解説記事でした。

いかがでしたでしょうか？
触ってみたくなりましたか？

プログラミングを続ける秘訣は、「楽しいと思うこと」だと思います。
Flutterは記事内でも記載しましたが、コードを書いていて本当に楽しいです。
Flutterを触ってみればその楽しさにハマること間違いなしです。

Flutterという英単語は、「震える」という意味があり、
"My heart is fluttering"で「胸がときめく」という意味になります。

あなたもFlutterを触って、胸をときめかせてみませんか？

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。