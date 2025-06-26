---
title: "Flutter/Dartで GitHub Copilot 使ってみた！"
slug: "flutter-dart-github-copilot"
author: "Aoi"
description: ""
pubDatetime: "2022-07-15"
tags: ["開発ツール"]
layout: "../../layouts/BlogPost.astro"
---

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/ojisan.png)
GitHub Copilot って Flutter/Dartで使えるのかな？

![](https://blog.flutteruniv.com/wp-content/themes/cocoon-master/images/obasan.png)
使えるのならどんな事ができるのか知りたいわ！

本記事ではそんな疑問、要望にお答えします。

GitHub が提供する、AIによるコード作成補助ツールである GitHub Copilot について、
導入方法の解説とFlutter/Dartでの使用例について解説します！

GitHub Copilot は有料コンテンツで、導入には賛否両論あるツールですが、
いざ使う、となったときにこの記事が役に立てばと思い記事化します。

ぜひ参考にしてみて下さい！

## 導入方法

本記事ではVisual Studio Code(以下 VS Code)の環境での導入方法を解説します。
前提としてGitHub アカウントが必要となるのでご注意下さい。

### アカウント設定

https://github.com/features/copilot

上記ページを開き、Start my free trial をクリックします。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-15.45.50-1024x830.png" alt="" width="300">

次の画面で注意事項を読み、
月額プランか年額プランかを選択し、緑のボタンを押します。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-15.51.26-701x1024.png" alt="" width="300">

支払い情報の入力欄です。

下記画面で、名前、住所を入力します。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-15.52.59-971x1024.png" alt="" width="300">

次の画面で支払い方法の選択と、必要情報を入力し、緑のボタンを押します。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-16.11.21-878x1024.png" alt="" width="300">

最後に確認画面となります。緑のボタンを押して完了です。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-16.14.41_-1024x852.png" alt="" width="300">

支払情報を入力した後、以下の設定画面となります。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-16.22.34-1024x865.png" alt="" width="300">

- **Suggestions matching public code**

GitHub の Public のコードと一致するものがあったら
それを提案コードとして表示するか？の設定です。

- **Allow GitHub to use my code snippets for product improvements **

自分のコードスニペットをGitHubに送信して、製品の向上に役立てるか、
という内容です。

上記に回答し、緑のボタンを押して完了します。

### VS Code の設定

VS Code の設定をしていきます。

VS Code の画面左側のExtensions のアイコンから Extensionsを開き、
検索バーで"copilot"と検索します。

出てきたGitHub Copilot のExtensionsを選択し、 installを押します。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-16.44.38-1024x422.png" alt="" width="300">

VS Code で GitHubにサインインしていない場合は画面右下にサインインを促す
ダイアログボックスが表示されます。
こちらでサインインを行い、GitHub,VS Code側での認証を行えば完了です。

お疲れさまでした！
以上でGitHub Copilotを使う準備は完了です！

## Dart で実際に使ってみた!

Dart で GitHub Copilot を実際に使ってみます。

使い方は簡単です。
クラス定義でクラス名を入力すると、それに合った提案をCopilotがしてくれるので、
採用する場合はTabキーを押して採用するだけです。

Counter クラスを作ってみた結果がこちらです。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/20220715_copilot_counter.gif)

メソッドもいけます。
うるう年判定のメソッドを作成してみた結果がこちらです。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/07/20220715_copilot_leepyear.gif)

なんと、`Widget`もいけます。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-17.41.57-1024x766.png" alt="" width="300">

ちょっと難しく、GitHubからデータを取ってくるメソッドも
提案コードを用意してくれます。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-17.45.10-1024x478.png" alt="" width="300">

レスポンスコードも用意してくれるのがありがたいですね。

`StatefulWidget` は無理かな、と思っていたら、

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-17.54.42.png" alt="" width="300">

Stateのコードを書くとなんと提案コードをここまで出してくれました。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2022/07/スクリーンショット-2022-07-15-17.55.36-794x1024.png" alt="" width="300">

textThemeのdisplay1は既に使われていないので、エラーとなります。
このように、提案されたコードが古くエラーが発生するので、
提案コードそのまま採用するのはちょっと難しそうです。

以上、GitHub Copilot 使ってみたでした！

## まとめ

本記事では、GitHub が提供する、AIによるコード作成補助ツールである GitHub Copilot について、
導入方法の解説とFlutter/Dartでの使用例について解説しました。

いかがだったでしょうか？

最初に述べたように、GitHub Copilotはその使用に関して賛否両論あるツールです。

今回使ってみた感想としても、色んな意味で「本当にこのコードで大丈夫かな？」と、
疑問を持ちながら使用するのが良さそうだと感じました。

ただ、便利なのは間違いないです。

使用の際は十分に注意して、使用してみて下さい！

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 参考

https://0115765.com/archives/5632

## 編集後記（2022/7/15）

GitHub Copilotについての記事でした。

Copilot に限らず、世の中には自動化ツールだったり、便利ツールが溢れています。

こういうツールについて使おうとすると必ず”そんな楽をしてどうする”、
という批判の声が出てきます。

自分は楽をすることに関しての批判については、"楽をして何が悪い"、
と思っています。

物事を楽に、便利にすることの背後には想像できないほどの
人類の英知や努力があると思っています。

"楽をすることが悪"という意見は、
それらを無にする意見となるのであまり好きではないです。

あることを楽にしたとして、その後にも絶対に苦労する部分は現れると思っています。
そうやって少しずつ人類が成長していくのはとても素敵なことだと思うのです。

Copilotも今は批判があるし、まだまだ問題もあるかも知れませんが、
いつか解決されて人類の進歩として刻まれるといいな、と思っています。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。