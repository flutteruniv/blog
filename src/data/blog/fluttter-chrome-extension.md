---
title: "Chromeの 拡張機能 をFlutterで作ろう！"
slug: "fluttter-chrome-extension"
author: "Aoi"
description: ""
pubDatetime: "2022-03-23"
tags: ["開発ツール"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="/images/wp-content/themes/cocoon-master/images/ojisan.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Chromeの 拡張機能 も、Flutterで作れないかな？
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

実は、作れるんです！

本記事ではChromeの拡張機能をFlutterを使って作る方法について解説します。

以下の画像のような形で、Chromeの拡張機能としてアプリを立ち上げることが可能となります。

![](/images/wp-content/uploads/2022/03/拡張機能の実行例-1-1024x937.png)

ぜひ本記事を読んで挑戦してみてください！

本記事の大部分は、以下の記事を参考にしています。

https://cswithiyush.hashnode.dev/lets-build-a-chrome-extension-using-flutter

## Chromeの拡張機能を作成する手順

![](/images/wp-content/uploads/2022/02/コーディング男性.jpeg)

### 準備

WebでビルドできるFlutterプロジェクトを用意します。
以下のコマンドを実行し、エラーなく実行できるか確認してみてください。

```
flutter run -d chrome
```

本記事ではFlutter プロジェクトを作成した時にできる、
カウンターアプリを拡張機能に埋め込むことを目標に進めていきます。

### index.htmlの修正

Flutterプロジェクトのwebディレクトリ内にある、index.htmlを書き換えます。

![](/images/wp-content/uploads/2022/03/ファイル位置1-1024x846.png)

2行目にある`<html>`を以下のコードに書き換えてください。

```

```

ここで設定したheight(高さ)とwidth(幅)の大きさで、
拡張機能がポップアップします。

お好みの大きさに調整してください。

次に、39行目〜102行目の`<script> ~ </script>`タグを以下のコードに書き換えてください。

```

```

完成したindex.htmlのコードは以下の通りとなります。（コメントは削除しています。）

```

  extension_sample2

```

<title>~</title>の部分はあなたが設定した名前となります。

### manifest.jsonの修正

index.htmlと同様webディレクトリにある、manifest.jsonを書き換えます。

コード全体を以下のコードに置き換えてください。

```
{
    "name": "flutter_chrome_extension",
    "description": "flutter_chrome_extension",
    "version": "1.0.0",
    "content_security_policy": {
        "extension_pages": "script-src 'self' ; object-src 'self'"
    },
    "action": {
        "default_popup": "index.html",
        "default_icon": "/icons/Icon-192.png"
    },
    "manifest_version": 3
}
```

nameで設定した名前が拡張機能の名前となります。
また、default_iconで設定したアイコンがブラウザで表示される
拡張機能のアイコンとなります。

拡張機能のための設定は以上となります。

### ビルド

作成したアプリを拡張機能としてビルドします。

ターミナルで作成したアプリのルートディレクトリに移動し、以下のコマンドを実行してください。

```
flutter build web --web-renderer html --csp
```

### Chromeの拡張機能への追加

作成したアプリをChromeの拡張機能へ追加します。

Chromeを開き、アドレスバーにて以下のアドレスを実行してください。

```
chrome://extensions/
```

右上の3つのドット→設定→拡張機能
でも同様のページが開きます。

拡張機能のページが開いたら、右上のデベロッパーモードをオンにします。

![](/images/wp-content/uploads/2022/03/デベロッパーモード-1024x938.png)

オンにすると、拡張機能の検索バーの下に、3つボタンが出てきます。
その中の「パッケージ化されていない拡張機能を読み込む」を押してください。

![](/images/wp-content/uploads/2022/03/拡張機能の読み込み-1024x936.png)

ファイル選択のポップアップが出てくるので、
作成したFluttterプロジェクトのbuildディレクトリにある、
webフォルダを選択して決定してください。

![](/images/wp-content/uploads/2022/03/フォルダ選択-1024x595.png)

以上で追加は完了です。

ブラウザ右上のパズルのピースのアイコンをクリックすると、
作成した拡張機能が候補として出てきます。

![](/images/wp-content/uploads/2022/03/拡張機能の位置-1024x934.png)

作成した拡張機能の横のピンマークをクリックすると、ブラウザに常時表示されるようになります。

表示されたアイコンをクリックすると作成したアプリが立ち上がります。

![](/images/wp-content/uploads/2022/03/拡張機能の実行例-1024x937.png)

おめでとうございます！
以上が一連の手順となります。

## まとめ

![](/images/wp-content/uploads/2022/03/猫パソコン.jpeg)

本記事ではChromeの拡張機能をFlutterを使って作る方法について解説しました。

設定もかなり簡単で、すぐに応用できるかと思います。

あなたもぜひ自分のオリジナルアプリをChromeの拡張機能として作成してみてください。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://www.yayocode.com/2021/07/how-to-create-google-chrome-extension.html

## 編集後記(2022/3/23)

今回は拡張機能の作り方の紹介でしたが、実際どんな機能をつけたら良いでしょうか？

例えば電卓とか良さそうですよね。
ウェブ上でちょっとした計算をしたい、そんな時に使えそうです。

あとはメモアプリ。
コピペしておきたい内容をメモするのに良さそうです。

ちょっとしたゲームを拡張機能で作ってみるのも面白そうです。
昔流行った、糸通しのようなゲームがブラウザで、
ちょっとした待ち時間に遊べたら楽しいと思います。

考えてみると、色々と思いつきそうです。
あなたは、どんなアプリを作成してみたいですか？

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。