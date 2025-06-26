---
title: "【Flutter】 IconButton 使ってみた！【Material 3】"
slug: "flutter-iconbutton"
description: ""
pubDatetime: "2022-09-07"
author: "Aoi"
tags: ["Widget"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

**「 IconButton の使い方を知りたい！」**

本記事ではそんな要望にお答えします。

Flutter でアイコンをボタン化する`Widget`、
`IconButton Widget`について解説します。

Flutter 3.3 で追加されたMaterial3 対応についても解説していきます。

ぜひ読んでみて下さい！

## 基本的な使い方

`IconButton Widget`の基本的な使い方について解説していきます。

`IconButton Widget`は以下のようにして使用します。

```dart
IconButton(
  icon: const Icon(Icons.volume_up),
  onPressed: () {
    // ボタンが押された際の動作を記述する
  },
）
```

icon プロパティに設定したいアイコンを`Icon` `Widget`にて設定します。
`onPressed`プロパティにて、アイコンが押された際の動作を設定します。

### カスタマイズ

`IconButton` ウィジェットの `iconSize`プロパティにてアイコンのサイズを変更することが可能です。
また、`IconButton` ウィジェットの `color`プロパティにてアイコンの色を設定することが可能です。

`IconButton` ウィジェット の`icon`プロパティの
`Icon`ウィジェットにてsizeとcolorを設定していた場合、
`Icon`ウィジェットの設定が優先されます。

`padding`プロパティでアイコン周りの`padding`を設定可能です。
また、`splashRadius`プロパティにて、アイコンを押した時の波紋の大きさを設定可能です。

`splashRadius`と`padding`を両方設定した場合、アイコンボタンが大きくなる方に設定されます。

`splashRadius`は後述するMaterial3対応(`MaterialApp内でのuseMaterial3の有効化)
をすると、無効化されます。

## Material3に対する対応

Flutter3.3で発表された、Flutterでの`IconButton`のMaterial3対応について紹介します。

Material3 への対応項目として、2つ紹介します。

- デザイン反映のための`style`プロパティ
- トグルボタン化のための`isSelected`と`selectedIcon`プロパティ

Material 3の`IconButton`についての記述は、[こちら](https://m3.material.io/components/icon-buttons/overview)をご覧ください。

### 準備

Material3 をアプリで有効化するために、
`MaterialApp`内の`theme`プロパティに追加する`ThemeData`にて、
`useMaterial3`プロパティを`true`にします。

また、Material3で追加されたダイナミックカラーでの色設定の代わりとして、
基準となる色を`colorSchemeSeed`プロパティにて設定します。

```dart
MaterialApp(
      theme: ThemeData(
        colorSchemeSeed: const Color(0xff6750a4),
        useMaterial3: false,
      ),
      home: const MyHomePage(),
    );
```

### デザイン反映

Material 3では標準とcontainedの2種類のボタンが存在します。

下記画像で、一番上が標準、下3つがcontainedです。

![](https://blog.flutteruniv.com/wp-content/uploads/2022/09/スクリーンショット-2022-09-07-8.38.00.png)

containedの`IconButton`を実装するために設定するのが、
`style`プロパティです。

`style`プロパティに`IconButton.styleFrom()`を設定し、
`styleFrom`の中で色などさまざまな設定を行うことで、
上記画像のボタンを実現可能となります。

上記画像の実装コードは以下の通りです。

```dart
@override
  Widget build(BuildContext context) {
    final ColorScheme colors = Theme.of(context).colorScheme;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Icon Button Sample'),
      ),
      body: Center(
        child: Column(
          children: [
            // standard タイプ
            IconButton(icon: const Icon(Icons.filter_drama), onPressed: () {}),

            // 'Filled' タイプ
            IconButton(
                icon: const Icon(Icons.filter_drama),
                onPressed: () {},
                style: IconButton.styleFrom(
                  foregroundColor: colors.onPrimary,
                  backgroundColor: colors.primary,
                  disabledBackgroundColor: colors.onSurface.withOpacity(0.12),
                  hoverColor: colors.onPrimary.withOpacity(0.08),
                  focusColor: colors.onPrimary.withOpacity(0.12),
                  highlightColor: colors.onPrimary.withOpacity(0.12),
                )),

            // Filled Tonal タイプ
            IconButton(
              icon: const Icon(Icons.filter_drama),
              onPressed: () {},
              style: IconButton.styleFrom(
                foregroundColor: colors.onSecondaryContainer,
                backgroundColor: colors.secondaryContainer,
                disabledBackgroundColor: colors.onSurface.withOpacity(0.12),
                hoverColor: colors.onSecondaryContainer.withOpacity(0.08),
                focusColor: colors.onSecondaryContainer.withOpacity(0.12),
                highlightColor: colors.onSecondaryContainer.withOpacity(0.12),
              ),
            ),

            // 外形線タイプ
            IconButton(
              icon: const Icon(Icons.filter_drama),
              onPressed: () {},
              style: IconButton.styleFrom(
                focusColor: colors.onSurfaceVariant.withOpacity(0.12),
                highlightColor: colors.onSurface.withOpacity(0.12),
                side: BorderSide(color: colors.outline),
              ),
            ),
          ],
        ),
      ),
    );
  }
```

`styled`プロパティは前述の`useMaterial3`を有効化した際にのみ設定が反映されます。

### トグルボタン化

トグルボタン(ボタンを押したらボタンの色が変わるボタン)として
`IconButton`を利用するのに有用なプロパティとして、
`isSelected`と`selectedIcon`プロパティがあります。

`isSelected`プロパティにて、ボタンが選択されたかどうかを管理し、
`selectedIcon`プロパティで`isSelected`プロパティが`true`の際のアイコンを管理します。

設定例は以下のようになります。

```dart
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State createState() => _MyHomePageState();
}

class _MyHomePageState extends State {
  bool selected = false;
  @override
  Widget build(BuildContext context) {
    final ColorScheme colors = Theme.of(context).colorScheme;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Icon Button Sample'),
      ),
      body: Center(
        child: IconButton(
          icon: const Icon(Icons.settings_outlined),
          onPressed: () {
            setState(() {
              selected = !selected;
            });
          },
          isSelected: selected,
          selectedIcon: const Icon(Icons.settings),
        ),
      ),
    );
  }
}
```

![](https://blog.flutteruniv.com/wp-content/uploads/2022/09/20220907_toggle2.gif)

`isSelected`と`selectedIcon`プロパティは前述の`useMaterial3`を有効化した際にのみ設定が反映されます。

## まとめ

Flutter でアイコンをボタン化する`Widget`、
`IconButton Widget`について解説しました。

Flutter 3.3 で追加されたMaterial3 対応についても解説していきました。

いかがだったでしょうか？

こちらのページでは、
今回紹介した2つのMaterial3対応を組み合わせた場合のサンプルコードが紹介されています。
あわせてご確認ください。

本記事があなたのアプリ開発の一助となれば幸いです。

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/9/7）

ただ今、岐阜県高山市に来ています。

担当していた案件が一つ区切りを迎えたこともあり、
ワーケーションとして日本のいろいろなところを巡りながら仕事をしよう！
と思い立ったからです。

記事を書く、という分には、
パソコン一台あればできるのがとても良いですね。

場所にとらわれずに色々な作業ができて、良さをとても感じています。

9月中旬まで色々なところを巡りながら
記事を書いていきます。

そちらも楽しみにしていただければ幸いです。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。