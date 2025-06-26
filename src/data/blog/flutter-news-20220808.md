---
layout: "../../layouts/BlogPost.astro"
title: "Flutter ニュース 【2022年8月第1週】"
description: ""
pubDatetime: "2022-08-08"
author: Aoi
slug: "flutter-news-20220808"
featured: false
draft: false
tags: ["ニュース", "Flutter"]
ogImage: ""
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)
Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年8月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter デスクトップ アプリケーションを作成する

https://codelabs.developers.google.com/codelabs/flutter-github-client#0

Flutterでのデスクトップアプリケーションの作成をテーマにしたチュートリアルのCodeLabが、
Flutter公式Twitterで紹介されていました。

このCodeLabでGitHubでの認証やデータ取得の方法等を学ぶことができます。

### Flutter Gallery

https://github.com/flutter/gallery

Flutterで作られた、UIをサンプル付きで紹介しているアプリ、
Flutter GalleryのGitHubリポジトリがFlutter公式Twitter で紹介されていました。

Android アプリとして公開されているだけでなく、
[こちら](https://gallery.flutter.dev/#/)でWebアプリとしても公開されており、動作をすぐに確認することが可能です。

### LinearGradient (Widget of the Week)

https://youtu.be/gYNTcgZVcWw

Flutter 公式の`Widget` 紹介動画シリーズ、Widget of the Week の最新動画が更新されました。

今回は`Widget`ではありませんが、
位置によって徐々に色が変わるグラーデーションカラーを実装できる、
`LinearGradient`についての解説動画です。
`LinearGradient`は`Container`等の`BoxDecoration`で設定が可能です。

## Flutterに関する話題

### すべてのFlutter開発者が知っておくべきパッケージは？

https://www.reddit.com/r/FlutterDev/comments/wig622/packages_that_every_flutter_dev_should_know/

「すべてのFlutter開発者が知っておくべきパッケージは何か？」というテーマの投稿が
Redditで話題になっていました。

コメントにて各々が思う重要で知っておくべきパッケージが紹介されています。

### Fl-Query 0.2.0 リリース

https://www.reddit.com/r/FlutterDev/comments/wiar4s/flquery_020_released/

非同期のデータの管理を楽にするパッケージ、[Fl-Query](https://fl-query.vercel.app/)の0.2.0がリリースされました。

非同期のデータの管理について、
ボイラープレートなコードの解消と、再利用性の向上を目的として作成がされたとのことです。
投稿のコメントにてリリースノートが記載されています。

### flutter_auto_gui パッケージ

https://www.reddit.com/r/FlutterDev/comments/whujt6/flutter_auto_gui_a_flutter_package_allows_you/

マウス操作やキーボードの操作をFlutterのコードで行えるようにするパッケージ、
[flutter_auto_gui](https://pub.dev/packages/flutter_auto_gui)パッケージがRedditで話題となっていました。

現状Windowsのみ対応しています。
Pythonのコードでマウスやキーボードを操作する[PyAutoGui](https://pyautogui.readthedocs.io/en/latest/)に
インスパイアされて作成されたとのことです。

### showcaseview パッケージ

https://pub.dev/packages/showcaseview

チュートリアル等の表示として画面を暗転させて画面部品の一部だけ
目立たせて説明付きで表示するようなUI を実装できるパッケージ、
showcaseview パッケージがRedditで話題となっていました。

リンク先のGIFにて動作を確認することが可能です。

### Flutter製オープンソースメモアプリ: Noty

https://www.reddit.com/r/FlutterDev/comments/wg8q11/noty_open_source_note_app_made_with_flutter/

Flutterで作られたオープンソースのメモアプリ、Notyに関するRedditの投稿です。

Riverpod を用いて内部データベースでメモを保存する形式で作成されているとのことです。

### LeetCodeへのDartの追加

https://www.reddit.com/r/FlutterDev/comments/wf2z5n/dart_added_to_leetcode/

コーディング力向上を目的とした学習サイト、[LeetCode](https://leetcode.com/)にDartが追加されたことが、
Redditで話題となっていました。

LeetCodeで紹介されている問題の中で、Dartを選択することが可能となっています。

### Amplify Flutter AuthenticationのWeb,Desktop への対応

https://www.reddit.com/r/FlutterDev/comments/wegf6z/announcement_amplify_flutter_authentication/

AWS Amplify のFlutter での認証が、Web , Desktopに対応したとのことです。

投稿内リンクの開発者向けプレビューにて詳細を確認することができます。

## Flutterに関する記事

### VS Codeの中に何が入っている？ ~Flutter開発に対して~

https://itnext.io/whats-in-my-vscode-for-flutter-development-48ee88e0adaf

Flutter開発に役立つVS Code の拡張機能を紹介した記事です。

10個以上の拡張機能が記事内で紹介されています。

### Supabase Flutter SDK 1.0 リリース 開発者向けプレビュー

https://supabase.com/blog/2022/08/02/supabase-flutter-sdk-1-developer-preview?utm_source=reddit&utm_medium=social&utm_campaign=blog-content

オープンソースのFirebase 代替手段であるSupabaseのFlutter SDKの バージョン1.0 に対する
開発者プレビューです。

認証周りやデータ取得周りの変更点等がまとめられています。

### Dart クラスの階層構造

https://itnext.io/class-hierarchy-in-dart-ecacc28d0581

クラスの階層構造として、継承や`Interface`、`mixin`について解説した記事です。

人と開発者を例に、わかりやすく継承関係について述べられています。

## Flutter大学メンバーによる記事

### 初心者　MySQL8に挑戦する

https://qiita.com/dongri727/items/81409786b29a3ec14813

https://qiita.com/dongri727/items/447e59179e1fa2dfed4f

Flutter × MySQL の組み合わせに挑戦している筆者の体験談の記事シリーズです。

データの取得に悩まされながら健闘している様子が紹介されています。

### 初心者　flutter x ブロックチェーンに再三挑戦する

https://qiita.com/dongri727/items/1ee036f9e1352f17aa8a

Flutter × ブロックチェーンの組み合わせに挑戦している筆者の体験談をまとめた記事です。

ブロックチェーンを組み合わせて投票アプリを作成するとのことです。

### **【Flutter】go_router をタイプセーフに使う方法【go_router_builder】**

https://zenn.dev/susatthi/articles/20220801-135028-flutter-go-router-builder

go_router をタイプセーフに扱うためのパッケージ、go_router_builderについて紹介された記事です。

サンプルコードや使っていてハマりそうなポイントについて丁寧に解説がなされています。

### **Cloud Firestore ODM使ってみた!**

https://zenn.dev/joo_hashi/articles/a1811e00c877e6

Firestore とDart間の橋渡しコードを自動生成するFirestore ODM の使ってみた感想の記事です。

どのようなコマンドを打って、どのようなコードが生成されるのかについて記載がされています。

### **【Dart】Null Safety って何の意味があるの？**

https://zenn.dev/ryota_iwamoto/articles/what_is_null_safety

DartのNull Safety の意義について考察を行った結果をまとめた記事です。

Null Safety が無いとどうなるか、という話を紹介した上で、
筆者なりのNull Safetyのメリットを結論として紹介しています。

### **【Flutter】地図パッケージを比較してみた**

https://zenn.dev/odaken/articles/615f12930c7f5d

Flutter で使える地図パッケージ2種を比較検討を行った記事です。

使い勝手や料金等の項目ごとに2つのパッケージの検討がなされており、
まとめでは表を用いて比較結果が紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220801/

https://blog.flutteruniv.com/package_f_count/

https://blog.flutteruniv.com/flutter-build-environment-m2/

## まとめ

<img src="http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg" alt="" width="300">

本記事ではFlutterニュースとして、
2022年8月第1週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/8/8）

今週のFlutterニュースでした。

今週ピックアップしたいのはFlutter Galleryですね。
見た目が紹介されたコンポーネントの紹介アプリというのは、
初心者が参入するのにとても参考になるアプリかと思います。

Flutter のWidget のAPI 全てを紹介するアプリケーション、
しかも日本語対応しているアプリケーションを作れれば、
より日本のFlutterが盛り上がって良いなと、
Flutter Galleryを見て思いました。

作成は大変ですが、いつか作って公開したいものですね。

共感いただけるかた、作成に参加していただける方がいらっしゃれば、
ぜひTwitter等にてお声がけいただければと思います。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。