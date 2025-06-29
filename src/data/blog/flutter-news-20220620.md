---
title: "Flutter ニュース 【2022年6月第3週】"
slug: "flutter-news-20220620"
author: "Aoi"
description: ""
pubDatetime: "2022-06-20"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/man.webp" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutterの最新情報をキャッチアップしたい！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年6月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutterに関する話題

### fade_out_particle パッケージ

https://pub.dev/packages/fade_out_particle

Flutterでオシャレなフェードアウトを実装するパッケージ、
fade_out_particle WidgetがRedditで話題となっていました。

パッケージ詳細ページに動作のgifが紹介されています。

こちらについては週刊Flutter大学でも記事化しています。
併せてご確認下さい。

https://blog.flutteruniv.com/flutter-package-fade-out-particle/

### Flutter Furniture App

https://www.reddit.com/r/FlutterDev/comments/vbth7z/flutter_furniture_app/

認証、カート、お気に入り機能、支払い方法の設定などの機能を持った家具アプリを、
Flutterで作成したサンプルについての投稿です。

SupabaseやGetXを使って作成されており、ソースコードも公開されています。

### Realm のFlutter SDK Beta サポート

https://realm.io/realm-flutter/

オブジェクト指向データベースであるRealmの
Flutter SDK Beta版がサポート開始となりました。

公式サイトにてQuick Start等のドキュメントを確認することが可能です。

### Mason Bricks

https://www.reddit.com/r/FlutterDev/comments/vfm976/mason_bricks/

テンプレート生成ツールである[mason](https://pub.dev/packages/mason)の
テンプレートサンプル(Bricks)を５つ用意したリポジトリがRedditで話題になっていました。

FromJson ,ToJson だったりを用意したモデル用のDartファイル生成のサンプル等が用意されています。

### Shader パッケージ Ver 1.0 リリース

https://www.reddit.com/r/FlutterDev/comments/vf2jyl/package_shader_now_ready_for_production/

Flutter で GLSLの shader を取り扱えるようにするパッケージ、shaderが
version 1 系にアップデートされました。

ドキュメントが充実され、ローカルでのコンパイルの方法についても紹介されています。

### Monarch 100%オープンソース化

https://monarchapp.io/blog/newsletter-03

Flutter で 複数のサイズの端末のチェックや
テキストスケール等の検証ができるツール、
[Monarch](https://monarchapp.io/) が100% オープンソースになる、との告知投稿がRedditで話題となっていました。

リンクのニュースレターにはMonarchを紹介する動画が掲載されています。

### progressive_time_picker プラグイン

https://pub.dev/packages/progressive_time_picker

Flutterで時刻を取得する際に使用するTimePickerのプラグイン、
progressive_time_picker がRedditで話題となっていました。

開始と終了の時刻を選択でき、
マルチプラットフォーム対応しているとのことです。

## Flutterに関する記事

### Flutter: BLOCs at Scale | 1— The State Machine

https://itnext.io/flutter-blocs-at-scale-1-the-state-machine-fce5f086d7b9

Flutterの状態管理手法であるBLOCについて書かれた記事が
Redditで話題となっていました。

BLOCでの設計について、実戦で扱えるようにするアプローチが記載されています。

### Flutter iOS アプリに対するCI/CD と β版デプロイ

https://medium.com/mindful-engineering/github-actions-ci-cd-and-automate-beta-deployments-for-your-flutter-ios-apps-c9cdc8dcf097

GitHub Actions でiOS 向けにCI/CDを行う方法についての記事です。

サンプルとなるGitHub Actions用のyaml ファイル記載内容が紹介されており、
TestFlightへのアップロードを自動で行うようにできるとのことです。

## Flutterに関する動画

### Flutter Web アプリをGitHub Pages にデプロイする方法

https://youtu.be/QQaH06ULpfM

GitHub PagesにFlutterのWeb アプリをデプロイする方法について紹介されている動画です。

2分という短い時間で、Pageのデプロイ方法を簡単に知ることができます。

### Slide To WIdget チュートリアル

https://youtu.be/B6f5tayCtUU

スライドアクションで決定したりアンロックしたりする機能を実装できるパッケージ、
[slide_to_act](https://pub.dev/packages/slide_to_act)についての解説動画です。

基本的な使い方からカスタマイズの方法まで詳しく解説されています。

## Flutter大学の動画

Flutter大学のYouTubeチャンネルにて更新された動画を紹介します。

- [【Flutterの教科書】⑤ WebAPIと連携してフリー画像検索アプリを作ろう【後編】](https://youtu.be/S8AEyv2cKL8)
- [【Flutterの教科書】⑥ WebAPIと連携してフリー画像検索アプリを作ろう【改善編】](https://youtu.be/ZP2QW7hPN2s)

## Flutter大学メンバーがリリースしたアプリ

### TrashOut 〜 収集ゴミ通知アプリ 〜

https://apps.apple.com/jp/app/trashout/id1629862636?ign-itscg=30200&ign-itsct=apps_box_link

https://play.google.com/store/apps/details?id=com.me.trash_out

オサナイさんにより、収集ゴミ通知アプリ、『TrashOut』がリリースされました！

週、曜日、ゴミの種類を登録することで対象の日に該当する
ゴミの種類を通知してくれるアプリとのことです！

引っ越したばかりの時に役立ちそうですし、
あまり出さないゴミもアプリに登録しておくことで必要なときに参照できるので、
とても役に立ちそうです！

## Flutter大学メンバーによる記事

### 初心者 flutter x firestoreの複合クエリに挑戦する2 未記入項目の処理

https://qiita.com/dongri727/items/7ce2a55fd3c40aa9ddc1

Flutter × Firestore でのアプリ開発に関して悩んだ点を記録した記事です。

複数の入力項目を設けて未入力でも可、としたときにどうすればよいか、
筆者の検討結果が記載されています。

### **【Flutter】大学生のためのコミュニティアプリ「Hash」をリリースしたので気づいたことをまとめてみる**

https://zenn.dev/nukosan/articles/1c0eb3aca728ad

Flutter で作ったアプリについての紹介と使った技術に関する記事です。

投稿型のアプリでブロック機能を実装するにはどうすればよいかについて、
サンプルコード付きで解説されています。

### **【Flutter】ローカル DB パッケージの Isar Database のテストのはまり所と解決策**

https://zenn.dev/susatthi/articles/20220613-055442-flutter-isar-test

Isar Databaseを使用したアプリでのテストについて、
課題と解決方法についてまとめて解説された記事です。

課題とはまり所について、段階を追って解決策を詳細に解説されています。

### **FlutterアプリとFirebaseを連携させるときに困ったあれこれ**

https://zenn.dev/nukosan/articles/e5108ab30ff0a4

Flutter × Firebase で発生したエラーの解決策について解説された記事です。

エラーと解決方法についてエラーコードの紹介とともに端的にまとめられています。

### **【Flutter】ネットワークから取得した画像をキャッシュして表示を高速化する【cached_network_image】**

https://zenn.dev/susatthi/articles/20220615-160504-flutter-cached-network-image-test

ネットワークから取得した画像をキャッシュして表示を高速化するパッケージ、
cached_network_imageパッケージの使用方法等についてまとめられた記事です。

記事中に掲載されたgifでこのパッケージの優位性がとてもわかり易く紹介されています。
また、実装だけでなくテストをどうすればよいかについても解説されています。

### **GetXのプロジェクトをコマンドで作成する**

https://zenn.dev/joo_hashi/articles/8fcc659bd44b04

GetX のプロジェクトをコマンドラインから作成する、get cli の
使用の体験談について書かれた記事です。

スクリーンショット付きで使用してどんなプロジェクトが作成されるのか解説されています。

### **Flutterでモバイルアプリ開発を始めたキッカケ**

https://zenn.dev/at44444444/articles/8c9362f12854db

筆者が個人開発でアプリをリリースするまでの経験談についてまとめられた記事です。

個人開発でアプリをリリースするにあたり、
困ったことや解決策について紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220613/

https://blog.flutteruniv.com/flutter-package-fade-out-particle/

## まとめ


本記事ではFlutterニュースとして、
2022年6月第3週に話題になったFlutter関連の情報や、
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/6/20）

今週もたくさんのニュースを紹介しました。

今週自分が興味惹かれたニュースはMason についてのニュースです。

Mason は簡単に言うとFlutter対応のテンプレート生成ツールです。
以下の動画でチュートリアルが紹介されています。

https://youtu.be/G4PTjA6tpTU

見る限りpubspec.yaml 等も調整できそうでとても良さそうです。

自分は記事を書くために週に2~3個プロジェクトを新規作成するため、
新規作成→静的解析のパッケージインストールをテンプレート化できると、
とても良いな、と思っています。

実際にできるのかどうかは検証してみないとわからないため、
検証して、できれば記事化してみようと思います。

検証結果はどちらにしろ[Twitter](https://twitter.com/Aoi_Umigishi)でつぶやこうと思うので、
気になる方はぜひフォローしてお待ち下さい！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
