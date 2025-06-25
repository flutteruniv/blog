---
title: "Flutter ニュース 【2022年4月第4週】"
description: ""
pubDatetime: 2022-04-25T10:00:00.000Z
categories: ["news"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)

Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年4月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 2.10.5 リリース

https://twitter.com/flutterreleases/status/1516140054183387140?s=21&t=WEtw-LXiuc5mCw-a7N0qgw

Flutter のバージョン2.10.5 が Stable チャンネルにてリリースされました。

[こちら](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel)によると、Flutter Web でのデバッグで変数が現れない問題が解消された、とのことです。

### Flutter Puzzle Hack 結果発表！

https://twitter.com/FlutterDev/status/1517204619209830400

今年始めに開催されたFlutterのハッカソン、Flutter Puzzle Hackの結果が発表されました。

Tweet内リンクから各賞の受賞作品、優秀作品を見ることができます。

## Flutterに関する話題

### Flutter + Flame + Steam

https://www.reddit.com/r/FlutterDev/comments/u6sr9c/flutter\_flame\_steam/

ゲーム配信プラットフォームであるSteamとFlutter, Flameを連携させる  
パッケージの紹介の投稿がRedditで話題になっていました。

モバイルだけでなくデスクトップ向けゲームもFlutterで作る時代が来るかもしれないですね。

### Sprite Widget パッケージ

https://www.reddit.com/r/FlutterDev/comments/u9eb2u/high\_quality\_games\_with\_flutter\_yes\_you\_can/

Flutterで複雑なアニメーションや2D ゲームを作るパッケージとして、  
Sprite Widget が話題となっていました。

Game Engineとしては Flame が有名ですが、  
こちらはServerpodがスポンサーについており、選択肢になってきそうです。

### State Machine BloC パッケージ

https://pub.dev/packages/state\_machine\_bloc

bloc の拡張としてのパッケージ, state\_machine\_bloc がReddit上で話題になっていました。

State Machineを利用することにより、バグの削減、メンテナンス性の向上ができるとのことです。

## Flutterに関する記事

### Go Router とProviderを利用した認証フロー

https://blog.ishangavidusha.com/flutter-authentication-flow-with-go-router-and-provider

Go\_RouterとProviderを使って認証フローを実装しよう、という記事です。

認証されていない時のログイン画面へのリダイレクトを実装する、  
具体的なコードが記載されています。

### Null Safetyに関する最低限の手引き

https://itnext.io/a-minimalist-guide-to-null-safety-a4c2c34c5ef8

Null Safety について、シンプルにまとめられた記事です。

なぜNull Safetyが必要なのか、という点から具体的な使用例までしっかりとまとめられています。

### Dartでmap の キーと値のペアを更新する方法

https://codewithandrea.com/tips/dart-map-update-method/

Dart  でMapのインスタンスに対し、  
値を持つキーだけ値を更新する方法について書かれた記事です。

Mapのupdateメソッドの使い方を解説しています。

### Flutter Gems アップデート

https://medium.com/@fluttergems/flutter-gems-april22-update-1200-new-packages-12-new-categories-brand-new-ui-more-fc3cc7c430ca

Flutter Gems というFlutterのパッケージ紹介サイトが4/22にアップデートされました。  
アップデート内容を解説した記事となります。

1200以上のパッケージが追加され、カテゴリ分けも増えるとのことです。

### StateNotifier のサブクラス内ではtry-catchよりもAsyncValue.guardを使おう

https://codewithandrea.com/tips/async-value-guard-try-catch/

AsyncValue.guardの紹介記事です。

簡単な例を通し、try - catchでAsyncValue error を取り扱うより  
コードを短く済ませることができる、ということが解説されています。

### Flutter アプリケーションでGlobalなテーマの定義方法

https://kcl.hashnode.dev/how-to-define-a-flutter-theme

FlutterでThemeをどうやって反映するか、について解説された記事です。

ボタンやテキストなど様々な部品に対して、  
Themeで外見を設定していく方法が書かれています。

### ボイラープレートなコードを削減する、GraphQLのコードジェネレータを使おう

https://budde377.medium.com/use-graphql-codegen-to-reduce-boilerplate-code-783410f1a543

Graph QL の コードジェネレーターについて書かれた記事です。

Graph QL コードジェネレーターの紹介と、  
最近あったアップデートによる機能向上について書かれています。

### Flutter アプリをFirebase App distribution に GitHub Actions を使って  
デプロイする方法

https://guillaume.bernos.dev/how-to-deploy-to-firebase-app-distribution/

Firebase App distribution にFlutter アプリを GitHub Actions を使って  
デプロイする方法について書かれた記事です。

main ブランチ に push した時に、  
自動的にFirebase App distribution を通してAndroid アプリを  
配布する方法が書かれています。

## Flutter大学メンバーがリリースしたアプリ

### Guitar Scale Finder ~ギター用スケール確認アプリ~

https://apps.apple.com/jp/app/guitar-scale-finder/id1618947092?l=en&platform=iphone

sekitatsさんにより、ギター用スケール確認アプリ、『Guitar Scale Finder』  
がリリースされました！

ギターソロを考える際に重要になってくるスケール（音階）について、  
ギター上でどこにどの音が位置しているか、ひと目でわかるようにしているアプリです。

各キーに対して様々な種類のスケールが用意されており、  
このアプリにて網羅的に確認することが可能です！

## Flutter大学メンバーによる記事

### DartのStreamをFirebaseで使う?

https://qiita.com/JunichiHashimoto/items/13544d565f7da9ee0ed5

Stream , Provider ,Firebase を使ったサンプルアプリのコードを紹介した記事です。

コード内にコメントで解説をつけて、サンプルアプリの作り方を解説されています。

### 新規Flutter Project main.dart書き換え用 VSCode向け Snippet (スニペット)

https://qiita.com/Umigishi-Aoi/items/be5ac0b09bc95e065ac5

VSCode 向けの Snippets について紹介した記事です。

新規でFlutter を立ち上げた際にmain.dart のコメントを消したり、書き換えたりの面倒臭さを、  
このSnippet(辞書登録のようなもの)を導入することで、解消することができます。

### **FlutterにOpenApiを入れて、api開発を楽にしよう。**

https://zenn.dev/manabu/articles/13e6e608c787dc

Flutter にOpenApiを導入する方法について解説された記事です。

バックエンドとしてFirebaseを使う方が多いかと思いますが、  
自作のバックエンドを導入する際に有用なOpenApiの導入方法について、  
丁寧に解説されています。

Flutter大学の勉強会では、こちらの記事をベースに導入のライブコーディングが行われました。  
アーカイブ動画はFlutter大学のコミュニティプラン以上のメンバーなら視聴可能です。

Flutter大学への入会は以下のリンクから。

https://flutteruniv.com/

### **【Flutter】選択ダイアログでエラーが出るときはSimpleDialogを使おう**

https://zenn.dev/susatthi/articles/20220419-094541-flutter-simple-dialog

選択ダイアログを使う際のエラーの解消方法について書かれた記事です。

解決策であるSimpleDialogの利用方法について、  
解説とサンプルコードが記載されています。

### **【Flutter】カスタムフォントの導入方法**

https://zenn.dev/susatthi/articles/20220419-143426-flutter-custom-fonts

Flutterでのカスタムフォントの使用方法について解説された記事です。

記事内で各フォントの検証用のアプリが紹介されており、  
このアプリでフォント、フォントウェイトに対する見え方の確認ができます。

### **【Flutter】リストの要素を横にスライドさせたい(iPhoneのメール的な)\[2022/04/20時点\]**

https://zenn.dev/ryota\_iwamoto/articles/slidable\_list\_like\_iphone\_mail

リストビューの要素をスライドできるようにする方法について解説している記事です。

flutter\_slidable パッケージを利用した方法について解説されています。

### **Dart＆Flutterのコードを改善する42の簡単な方法**

https://zenn.dev/sekitats/articles/cd9c5f9f4f9c1f

Dart/Flutterのコードを書く際に便利な役立ち情報を42個紹介している記事です。

英語の6つの元記事をコメント付きで一つの記事にまとめられています。

### 【Flutter】4つの多言語化パッケージを試してみた【徹底比較】

https://zenn.dev/susatthi/articles/20220422-140216-flutter-localizations

Flutter の多言語化パッケージを４つ比較している記事です。

４つのパッケージを実際に利用された上で、  
各パッケージの特徴を表にしてまとめています。

## Flutter逆引き辞典の追加ページ

https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary

先週の追加ページは以下になります。

*   [少しずつ進んでいくWidgetを作りたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/018-step-up)
*   [ボタンの文字色を見やすくしたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/019-compute-luminance)
*   [重い処理でもUIの動きを止めたくない](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/020-compute)
*   [長さの最大値を制限したい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/021-constraints)
*   [郵便番号から住所を補完したい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/022-postal_code_to_address)
*   [複数選択できるタグをつくりたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/023-select-multi-tag)
*   [Widgetを自由に動かしたい](https://zenn.dev/pressedkonbu/books/flutter-reverse-lookup-dictionary/viewer/024-movable-widget)

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220418/

https://blog.flutteruniv.com/flutter-button-color-materialstateproperty/

https://blog.flutteruniv.com/flutter-package-edge-detection/

https://blog.flutteruniv.com/flutteruniversity-indie-development-presentation/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、  
2022年4月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/4/25）

4/23の土曜日にFlutter大学で月１で開催されているオフ会、  
通称UTAGEが開かれました！

ゲームをしたり、粉ものを焼いて食べたり、  
とても楽しい時間を過ごせました。

インターネットのオフ会自体、初めて参加したのですが、  
やはりネット上で会うのと実際に会うのは違いますね。

とてもいい経験になりました。

今後も定期的に参加していきたいと思います！

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。