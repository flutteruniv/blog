---
title: "【2023年4月12日】今週のFlutterニュース"
slug: "flutter-news-20230412"
author: "kboy"
description: ""
pubDatetime: "2023-04-12"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

こんにちはkboyです。

もともと担当していたaoiさんが体調不良により記事執筆を続けられなくなってしまい、今週のFlutterニュースをしばらくお休みしていましたが、今後は私kboyの方が担当していきたいと思います。

続けるのが大変なのはわかっていますので、無理なく30分くらいで書ける量で、新たに記事を参照しすぎずに、本当に自分が1週間でよく遭遇したエラーやFlutterニュースにスポットを当てて書いていければと思ってます。

そのうち、この手の最新情報はAIが書けるようになると思うので、実体験ベースも混ぜて人間らしい記事を目指していければと思います笑

それではいきます。すぐ終わりますけどねw

## 今週の公式情報

4月6日にFlutter 3.7.10がリリースされました。

こちらはXcode14.3でビルドできなくなったり、アーカイブできなくなった問題に対してのhotfixだそうです。

https://twitter.com/FlutterReleases/status/1643664849325391901?s=20

zennにて[Xcode 14.3にアップデートしたらarchive(flutter build ipa)ができなくなった問題の対処法](https://zenn.dev/flutteruniv_dev/articles/528e9a2552b0cb)という記事を書いたのですが、この問題に対する対応のようです。

また、5月10日に開かれるGoogleIOまで1ヶ月を切りました。

https://twitter.com/FlutterDev/status/1645517035445649412?s=20

Flutterに関する情報も必ずあると思うので、要チェックですね！

## 今週のピックアップ

今週の個人的なピックアップですが、なんといってもXcode14.3問題です。

この問題のうち、アーカイブできない問題ですが、`source="$(readlink "${source}")" `をxcodeで検索かけて、 `source="$(readlink -f "${source}")"`に入れ替えるだけで、一応直りました。

![](https://storage.googleapis.com/zenn-user-upload/798a7aec6406-20230401.png)

また、podfileについては以下を付け加えるというのがワークアラウンドとして紹介されてましたね。

```
post_install do |installer|
 installer.generated_projects.each do |project|
   project.targets.each do |target|
     target.build_configurations.each do |config|
       config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '13.0'
     end
  end
 end
end
```

この手の全部のpodのsettingに対して**IPHONEOS_DEPLOYMENT_TARGET**を指定するっていう修正は、実はあるあるで、これまでの同じ修正したことがある方は多いと思います。

私も、何回かこの修正をやったことがありまして、2年半前から運用しているFlutter大学アプリではもちろんこの修正はすでに入ってました。

とはいえ、最近はpodfileに修正をあんまり入れなくても、ビルドが通らない系エラーに遭遇することは減ったんじゃないかなと感じてます。Flutterの進化を感じますね。

## まとめ

今週はこんな感じで終わります。

無理ないペースでサクッと一週間で注目のFlutterニュースを紹介して続けていければと思っています！

では！