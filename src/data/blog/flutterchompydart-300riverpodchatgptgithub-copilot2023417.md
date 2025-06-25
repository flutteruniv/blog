---
title: "【Flutterニュース】Chompy終了、Dart 3.0.0リリース情報、最高のriverpod解説動画、ChatGPTとGitHub Copilotの実践レビューほか【2023年4月17日】"
description: ""
pubDatetime: 2023-04-17T10:25:22.000Z
categories: ["flutter", "news"]
---

  
最近見つけたいろんなFlutterのニュースを、個人的に興味あるやつからどんどん紹介していきます！

## Chompyが終了

Flutterで作られてたフードデリバリーアプリのChompy終了しましたね！

https://twitter.com/kumamo\_tone/status/1646504694976761860?s=20

ユーザーとしては、コロナ真っ只中の2020年に、クーポンでめちゃくちゃ安く注文しまくったのを覚えています。

また、Flutterアプリとしては、2020年の段階でユーザーが沢山いて、高機能で、UIUXも良かったので日本トップのFlutterアプリと言っても過言ではなかったと思います。

今はFlutterアプリが増えてきましたが、Flutter1系の時から日本のFlutter界をリードしてくれました。

私も「**Flutterって結局ネイティブより動き良くないんでしょ？**」って言われたらChompyアプリを見せて、**そんなことないよ**と言い返してましたw

ありがとう。Chompy。

## 見つけた興味深い記事

パフォーマンス比較の記事を可茂IT塾が出していたのでシェアです。

[https://www.kamo-it.org/blog/hooks-dropdown/](https://www.kamo-it.org/blog/hooks-dropdown/)

StatefulWidgetとrivepodだとConsumerで再描画範囲を絞れるので後者の方がパフォーマンスが良いという結論になってます。

ツッコミどころとしては、**StatefulWidgetでもうちょい再描画する範囲を狭めれば、パフォーマンスの差はもうちょい小さくなるのでは？**と思いましたが、それにしても同じ状況をStatefulWidgetとStatelessWidgetの組み合わせだけで作り出すのは相当指南の技かと思いますので、まあproviderとかriverpodの方がパフォーマンス良くしやすいというふうには思います。

注意なのは、riverpodもFlutterの仕組みの上で作られた状態管理packageなので、厳密にはriverpod使わなくても同じ状況を作ることができるという点です。ただ、それはめんどくさいのでフレームワーク化してくれてるのがriverpodということですね。

## ルビーDogニキのriverpod動画がわかりやすい

動画第三弾まで出てて、あと１つ待ちです。

Flutter大学のriverpod苦手勢たちが、全裸待機中でございます。

https://youtu.be/0HVru4WtdWo

↑めちゃくちゃ分かりやすいです。

僕にはないセンスを感じて嫉妬します笑

## テックフォードアカデミーのFlutter講師、交代

https://twitter.com/masaki\_hideout/status/1645594336640507905?s=20

2022年10月から2023年3月の半年間だけ私kboyがバンタンテックフォードアカデミーのFlutter講師を担当してたのですが、2023年4月からはMasakiさんに交代しました！

MasakiさんはFlutter大学も有効活用してFlutterエンジニアになった人の１人で、現在はフリーランスエンジニアとしてFlutterエンジニアをしています。この講師経験も活かしてさらなる成長をしてくれると思います！

もちろん、彼の教え子も成長するでしょう！

## Dart 3.0.0のリリースが近い

Dart3のchangelogが更新されました

https://www.reddit.com/r/FlutterDev/comments/12ic76k/dart\_300\_in\_dart\_change\_log/

まだFlutterのstableに入ってないけど、GoogleIOで発表されるかも？

## 個人的に最近得た知見、NavigationRails

NavigationRails初めて使いました。

Flutter大学のFlutterWebに実装してます。

https://youtu.be/y9xchtVTtqQ

[https://api.flutter.dev/flutter/material/NavigationRail-class.html](https://api.flutter.dev/flutter/material/NavigationRail-class.html)

## Flutter Web、CanvasKitのパフォーマンスが改善されたらしい

https://twitter.com/RydMike/status/1645819417702420481?s=20

webのパフォーマンスが改善されたみたいです。

Skiaなので、htmlレンダラーでbuildしてるFlutter大学webには影響なさそう。

CanvasKit(Skia)にすると、Firebase storageにある画像が出ない問題がまだあるので、まだ個人的にはHTMLレンダラーかなーと思います。

#### 関連記事

[https://recruit.gmo.jp/engineer/jisedai/blog/flutter2-canvaskit-performance/](https://recruit.gmo.jp/engineer/jisedai/blog/flutter2-canvaskit-performance/)

[https://engineering.nifty.co.jp/blog/11365](https://engineering.nifty.co.jp/blog/11365)

[https://docs.flutter.dev/perf/impeller](https://docs.flutter.dev/perf/impeller)

## ハッカソンに参加したよ

Flutter大学の主催でFlutterハッカソンを開催しました。

僕も1チームとして文鳥ボーイという名前で参加させてもらいました。最高でしたね。

[https://flutteruniv.connpass.com/event/278170/](https://flutteruniv.connpass.com/event/278170/)

## 今週の雑感、ChatGPTとGithub Copilot

ここ１、２週間で、ChatGPT(GPT4)とGitHub Copilotを積極的に使ってみました。

それぞれメリットデメリットを挙げてみます。

### ChatGPT

##### メリット

*   stripeのドキュメントは見るページが多くて、全体を理解するのに時間がかかるのだが、GPTに聞くと、具体的な自分のユースケースとドキュメントの架け橋をしてくれるイメージがあったのがよかった。
*   大量のコードを同じパターンで書き直す時に役立った（enumの命名規則を全部変える時など)

##### デメリット

*   まだ信用できない。信用はできないが、プロンプトが適切だと意外に合ってる。

##### デメリットへの対策

*   「正確度(accuracy)を出すように」というプロンプトを毎回つけるようにして、信用できるかどうかを判断するための材料にする

### GitHub Copilot

##### メリット

*   ごくたまに、今頭の中に浮かべていたそれだよそれ！ってコードを出すことがある。適切な変数名をつけて、その後改行したときに、その変数名と周りのコードから、「このロジックだろ？」みたいな提案が出てきた時は感動した。

##### デメリット

*   Flutter Dart本来のコード補完よりもGithub Copilotの補完が先に出てきて、それっぽいが存在しないメソッドとか提案してくる時はウザい
*   日本語のコメントを補完してくる時は、だいたい間違っているのでウザい
*   完全に信用できるクオリティになってしまったら、頭使わなくなって、自分の頭が悪くなりそうw

##### デメリットへの対策

*   ウザイのが出てきたらescキー押す。
*   ウザいけど使ってみないと良さがわからないので、一旦許容してる

## まとめ

今週のFlutterニュースでは、フードデリバリーアプリChompyの終了、パフォーマンス比較記事、リバーポッド動画の紹介、Dart 3.0.0リリースが近いこと、そしてChatGPTとGitHub Copilotの使用感を語りました。Flutter技術者たちにとって役立つ情報が満載です。  

**↑P.S GPT-4がこのまとめを書きました**。