---
title: "Flutter ニュース 【2022年6月第4週】"
description: ""
pubDatetime: 2022-06-27T10:00:00.000Z
categories: ["news"]
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/man.png)

Flutterの最新情報をキャッチアップしたい！

そんなあなたに送る、 Flutterニュース 。

本記事ではFlutterニュースとして、2022年6月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行います。

読むだけでFlutterの最新情報がキャッチアップできます。 ぜひ読んでみてください！

## Flutter公式情報

### Flutter 3.0.3 リリース！

https://twitter.com/FlutterReleases/status/1539717404737011714

Flutter のstable チャンネルで3.0.3がリリースされました。

[こちら](https://github.com/flutter/flutter/wiki/Hotfixes-to-the-Stable-Channel)によると、以下の内容が修正されたとのことです。

*   enum と switch での推定の向上
*   ファイナライズできるオブジェクトの初期化の際にコンパイラがクラッシュする問題の修正

### Google Mobile Ads SDK Flutter プラグイン 1.3.0アップデート

https://twitter.com/FlutterDev/status/1539669550337331202

Google公式の広告設定SDK である、Google Mobile Ads SDK の  
Flutter プラグイン が1.3.0にアップデートされました。

パーソナライズド広告に対する同意をリクエストするツールが提供され、  
Apple の [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency)（ATT）要件に  
Google Mobile Ads SDK だけで対応できるようになったようです。

詳しくは[こちら](https://developers.google.com/admob/flutter/eu-consent)をご覧ください。

### mason (Package of the Week)

https://youtu.be/qjA0JFiPMnQ

Flutter公式がFlutterのパッケージを紹介する動画シリーズ、  
Package of the Weekが更新されました。

今回はDartで作られたコード自動生成ツールであるmasonについての動画となっています。

こちらについては週刊Flutter大学でも記事で紹介しています。  
併せてご確認下さい。

https://blog.flutteruniv.com/flutter-mason/

### Full-stack Dart (The Boring Flutter Development Show)

https://youtu.be/AaQzV1LTmo0

Flutter 公式のライブコーディングの様子などを提供する動画シリーズ、  
The Boring Flutter Development Showが更新されました。

今回はFull-Stack Dart と題打ち、  
サーバーのようなバックエンドもDartで作成する方法について  
カウンターアプリを作りながら紹介しています。

## Flutterに関する話題

### 姿勢検出による Flutter での 腕立て伏せカウンター

https://youtu.be/DiXtFyzyDH4

Flutterで体勢を検知し、  
腕立て伏せの回数をカウントするアプリの動画がRedditで話題となっていました。

[google\_mlkit\_pose\_detection](https://pub.dev/packages/google_mlkit_pose_detection) プラグインを使用し、実装したとのことです。

### MeMax

https://github.com/K-Rafiki/memes\_max

Flutterで作られた[インターネットミーム集](https://play.google.com/store/apps/details?id=com.eyriscrafts.memesmax)のアプリのソースコードが公開されていました。

状態管理手法としてProvider を使用して作られているとのことです。

### オープンソースのシンプルな日記アプリ

https://www.reddit.com/r/FlutterDev/comments/vh7hw9/i\_made\_a\_simple\_gratitude\_journal\_app/

Flutter で作られた感謝を記録する日記アプリのソースコードが公開されていました。

状態管理手法としてGetXを使用して作成されているとのことでした。

### rate パッケージ

https://www.reddit.com/r/FlutterDev/comments/vgxzs4/ive\_just\_created\_my\_first\_package\_a\_5\_star\_rating/

５つ星のレーティングに役立つWidgetを提供するパッケージ、  
rateについての投稿がRedditで話題となっていました。

[こちら](https://pub.dev/packages/rate)のパッケージの紹介ページにて、  
動作などをGIFで見ることが可能です。

### selectable\_list パッケージ

https://pub.dev/packages/selectable\_list

Flutterで選択するとその選択肢で折りたたまれるリストを実装できるパッケージ、  
selectable\_list パッケージがRedditで話題となっていました。

パッケージの紹介ページにて、  
具体的な動作、サンプルアプリの動作などをGIFで見ることが可能です。

### DartのimportをソートするVScodeのExtension

https://www.reddit.com/r/FlutterDev/comments/vg28op/i\_made\_a\_vscode\_extension\_to\_sort\_your\_dart/

Dart のimport をソートするVScode のExtention がRedditで話題となっていました。

setting.jsonにて自分の好きなソート順を設定することが可能だとのことです。

### ReactNative vs Flutter

[https://gist.github.com/tkrotoff/93f5278a4e8df7e5f6928eff98684979](https://gist.github.com/tkrotoff/93f5278a4e8df7e5f6928eff98684979)

ReactNative と Flutter の比較として、  
StackOverflow の質問数など、様々な調査を行った結果がまとめられている  
GistがRedditで話題となっていました。

StackOverflow の質問数は顕著にFlutterが上回っており、  
Flutterの人気が伺えます。

### Estado 状態管理ライブラリ

https://www.reddit.com/r/FlutterDev/comments/vkjrtn/estado\_a\_simple\_lightweight\_flutter\_agnostic/

Flutterの状態管理ライブラリ、Estadoについての投稿がRedditで話題ととなっていました。

Provider のようにWidgetツリーの上の方でProviderをラップすること無しで、  
MVVM ベースの状態管理が実現できる、とのことです。

## Flutterに関する記事

### Flutter の Android アプリでAPKファイルサイズが突然倍くらいになったが、実は問題なくてむしろ推奨された動作だった件

https://qiita.com/kunichiko/items/28270306a7c19cc695f5

Flutter アプリのAndoroid にインストールするために生成されたAPKファイルの  
サイズの増加について、調査結果をまとめた記事です。

なぜ増加したのか、増加は問題がないのかについて、丁寧に調査結果が述べられています。

### **Flutterを学習してから個人開発アプリをリリースするまでの道のり**

https://zenn.dev/maguroburger/articles/9ffaa882a45b4f

Flutter を使って個人開発にてアプリをリリースするまでの経緯についてまとめられた記事です。

Flutter との出会いから、勉強方法、アプリの作成方法まで、  
アプリリリースまでの経緯がまとめられています。

### リアルタイム現在位置表示付きGoogle Mapを実装したFlutterアプリ

https://medium.com/flutter-community/flutter-google-map-with-live-location-tracking-uber-style-12da38771829

Flutterでマップにリアルタイムで現在位置を示し、  
目的地までの道のりを表示する方法について書かれた記事です。

Uber Eats の配達員のリアルタイム進捗表示のような表示が実現できます。  
記事内のGIFで実装の動画を見ることが可能です。

## Flutterに関する動画

### music player UI

https://youtu.be/mf2CoM7btfQ

アプリのUI をコードで作成するチュートリアル動画です。

Music Player のUI を題材に、  
パッケージを導入すること無くニューモーフィズムを設定する方法などが紹介されています。

## Flutter大学メンバーによる記事

### 【Flutter】HeroWidgetでリッチな画面遷移を実装する

https://qiita.com/onishitaisei/items/25f8250997b28536c90d

Hero Widget を使った画面遷移について紹介している記事です。

基本的な使い方から、活用例まで紹介されており、  
実際のアニメーションをGIF 付きで解説されています。

### 【Flutter✖️Firebase】電話番号認証を実装する

https://qiita.com/onishitaisei/items/7724e9faba369ec3979f

FlutterとFirebase を使って電話番号認証を実装する方法について解説された記事です。

モバイル、Web それぞれの設定から、  
実際の実装コードサンプルまで丁寧に紹介されています。

### 【Flutter】go\_routerで「○秒後にリダイレクト」を表現してみた。

https://qiita.com/onishitaisei/items/edafaf0471c00297cdcf

アプリやWeb でよくある 「○秒後に自動で画面遷移します」を、  
Flutter と 画面遷移パッケージであるgo\_routerを使って実装する方法について、  
解説された記事です。

Timer やカウンターを上手く使ったサンプルコードが記事内で紹介されています。

### **x-codeのキャッシュ消したら、buildできない!**

https://zenn.dev/joo\_hashi/articles/36a818c7d68f5e

X code のキャッシュを削除してしまい、  
ビルドできなくなってしまった筆者の経験談についての記事です。

最終的にビルドできるようにするまでの対応策についてまとめられています。

### **FlutterでGoogle Loginできない?**

https://zenn.dev/joo\_hashi/articles/ac37e2bc51359c

Android での Google Sign In の設定方法についての記事です。

SHA-1 の鍵の設定方法等つまづきポイントについてまとめられています。

### **Flutter超入門編を終えての簡単なUI作成**

https://zenn.dev/anji\_dev/articles/59d908070ddbe6

Flutter大学のFlutter 超入門編の動画を学び終えたアウトプットとして、  
自作のアプリの紹介をしている記事です。

自分で考えたUIを実現しており、  
アプリのソースコードも紹介されています。

### **AppStoreConnectアップロード時のエラー「App Store Connect Operation Error」の対処**

https://zenn.dev/at44444444/articles/7cca365fa37a21

AppStoreConnect にアプリデータをアップロードする際に詰まった点について、  
解決策とともに紹介された記事です。

App Icon 周りのハマりポイントが端的に紹介されており、  
解決に使ったパッケージも紹介されています。

### **GetXでFirebase Auth使ってみた!**

https://zenn.dev/joo\_hashi/articles/9e466d4e5d9a0c

Flutterでの状態管理手法であるGetX と、  
Firebase Authの組み合わせ方法について解説された記事です。

Android , iOS , Web それぞれで実行結果が紹介されています。

## 週刊Flutter大学の記事

先週週刊Flutter大学に追加された記事は以下になります。

https://blog.flutteruniv.com/flutter-news-20220620/

https://blog.flutteruniv.com/flutter-monarch/

https://blog.flutteruniv.com/flutter-mason/

## まとめ

![](http://blog.flutteruniv.com/wp-content/uploads/2022/03/新聞-1024x683.jpeg)

本記事ではFlutterニュースとして、  
2022年6月第4週に話題になったFlutter関連の情報や、  
アップされた記事、YouTube動画の紹介を行いました。

この記事が、みなさんのFlutterアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？  
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、  
以下の画像リンクから。

[![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/Flutter大学バナー.png)](//flutteruniv.com)

## 編集後記（2022/6/27）

６月も終わりに近づき、2022年も半年が経とうとしています。

区切りの時期ということで、Flutter大学でも一つのイベントが終わろうとしています。

第8期共同開発が、6月末で一区切りを迎えます。

自分も参加しているのですが、3ヶ月やっていたプロジェクトがいざ終わるとなると、  
少しさみしい気持ちになりますね。

さて、この共同開発の集大成としての成果発表が7月1日、21:00 ~ 行われます！

Flutter大学のYouTube ライブでも見られる予定となっていますので、  
お時間の合う方はぜひ見に来てください！

https://www.youtube.com/channel/UCReuARgZI-BFjioA8KBpjsw/videos

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。  
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。  
ぜひぜひフォローをお願いいたします。