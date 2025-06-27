---
title: "Flutter 3 での変化点の要約"
slug: "flutter-3-release-note"
author: "Aoi"
description: ""
pubDatetime: "2022-05-12"
tags: ["ニュース"]
layout: "../../layouts/BlogPost.astro"
---

<div class="speech-bubble-container">
  <div class="speech-bubble-avatar">
    <img src="http://34.145.4.125/wp-content/themes/cocoon-master/images/b-man.png" alt="Speaker" />
  </div>
  <div class="speech-bubble">
    <div class="speech-bubble-content">
      Flutter 3 での 変化点を知りたい！
    </div>
    <div class="speech-bubble-arrow arrow-left"></div>
  </div>
</div>

本記事ではそんな要望にお答えします。

2022年5月12日に行われたFlutter 3のアップデート内容について、
リリースノートのブログを適宜情報を加えながら要約して紹介します。

本記事を読めば、日本語でFlutter 3についての理解を深められるはずです。

ぜひ読んでみてください！

## 参考記事

本記事の大元となる記事はこちらです。

https://medium.com/flutter/whats-new-in-flutter-3-8c74a5bc32d0

細かいニュアンス等はこちらの記事で読んだほうが理解しやすいので、
気になる方はぜひこちらを読んでみてください。

以下、要約となります。

## 導入

Flutter のstable リリースの時が来ました。
**Flutter 3**について発表できることを非常に誇りに思います！
たった3ヶ月前に、[WindowsへのFlutterのサポートを発表したばかりでした](https://qiita.com/Umigishi-Aoi/items/0ce8cc90c1c5fd680038)。
本日、Windowsに追加して、macOSとLinuxに対するFlutter の Stable サポートを発表します！

Flutter コントリビューターの懸命な働きに感謝します。
5248ものプルリクエストがマージされました。

このリリースで、いくつかのエキサイティングな発表があります。
この発表には、macOSとLinuxのFlutterサポート、
重要なパフォーマンスの向上、
モバイルとウェブのアップデート、
等々が含まれます。
付け加えて、古いバージョンのWindowsに対するサポートの削減や、
いくつかの破壊的変更をお知らせします。
それでは早速紹介していきましょう！

## 全てのデスクトッププラットフォームへの対応

Linux と macOSの対応がStable となり、以下の機能が含まれます。

### カスケードメニューとmacOSのシステムメニューバーへのサポート

P`latformMenuBar` Widgetにて、
macOSでプラットフォームで描画されたメニューバーを作れるようになります。
これは、プラットフォーム独自のメニューの挿入と、
macOSのアプリケーションメニューでの表示の管理をサポートします。

カスケードメニューとは、メニューの中で更に詳細のメニューを出すメニューのことです。
元記事でデモのGifが掲載されているので、併せてご確認ください。

### すべてのデスクトッププラットフォームでの国際的なテキスト入力に対する、完全サポート

中国語や日本語、韓国語のような、テキスト入力システム(IMEs)を利用する言語を含む、
国際的なテキスト入力が全てのデスクトッププラットフォームで完全対応されます。
これにはSogou やGoogle 日本語入力のようなサードパーティの入力システムも含みます。

### すべてのデスクトッププラットフォームでのアクセシビリティ

Flutter for Windows , macOS, Linux にて、
画面読み上げやアクセス可能なナビゲーション、色の変更など、
アクセシビリティサービスがサポートされます。

### macOSでのユニバーサルなバイナリがデフォルトに

Flutter 3 似て、 FlutterのmacOS デスクトップアプリは、
現存のIntelベースのMacと、Apple最新のApple Silliconのデバイス、
両者に対するネイティブなサポートと共に、ユニバーサルなバイナリにてビルドされます。

### 開発に対しWindows 7/8 が非推奨に

Flutter 3のリリースによって、開発に推奨されるWindowsのバージョンを
Windows 10 に引き上げます。
Windows 7 , 8 , 8.1 のような古いバージョンでの開発を廃止しない一方で、
これらのバージョンはMicrosoftによってもはやサポートされていなく、
これらのリリースに対し限定的なテストを提供します。
古いバージョンに対しては、引き続き"best effort "のサポートを提供し続け、
ユーザーにはアップグレードを進めます。

注：Windows 7, 8 上で実行されるFlutter アプリに対するサポートは提供し続けます。
今回の変更は言及された開発環境のみ影響します。

## モバイルのアップデート

モバイルプラットフォームに対するアップデートは以下です。

### 折りたたみスマホに対するサポート

Flutter 3のリリースにより、折りたたみのモバイルデバイスがサポートされます。
Microsoftが先頭に立ったコラボレーションにより、
新たな機能やWidgetにより、折りたたみデバイスに対して
ダイナミックで楽しい経験をすることができます。

今回のアップデートの一部として、
`MediaQuery`に`DisplayFeatures`のリストが含まれるようになりました。
`DisplayFeatures`はヒンジやカットアウトのようなデバイスの要素の境界や状態を表します。
追加して、`DisplayFeatureSubScreen` Widgetは`DisplayFeatures`の境界にかぶらないようにWidgetを配置します。このWidgetはフレームワークのデフォルトのダイアログやポップアップに統合されていて、意識せずともFlutterに反映されるようになっています。
Demo アプリのリンクは[こちら](https://docs.microsoft.com/en-us/dual-screen/flutter/samples)。

### iOS の可変リフレッシュレートへの対応

Flutterは今、iPhone 13 Pro , iPad Proに含まれているProMotion ディスプレイでの、
iOSデバイスの可変リフレッシュレートに対応します。
これらのデバイスでは、今までは60hzが限界でしたが、
120hzに達するリフレッシュレートでFlutterアプリを描画することが可能となります。
この結果、スクロールのような速いアニメーション中でもよりスムーズな体験を提供します。
詳細は[こちら](https://docs.google.com/document/d/1O-ot6MydAl5pAr_XGnpR-Qq5A5CPDF6edaPu8xQtgCQ/edit?resourcekey=0-LlXeGtGRC67XL4NrGoc91A)。

### iOS のリリースの単純化

iOSアプリのリリースをより単純化するため、
`flutter build ipa` コマンドに新たなオプションが追加されました。
AppStore や TestFlight にアップロードしようとする際、
Xcodeのアーカイブ(`.xarchive`ファイル)とapp bundle(`.ipa`ファイル)を作成するため、
`flutter build ipa` を実行します。
オプションとして、`--export-method ad-hoc`, `--export- method development` ,
`--export-method enterprise`を追加できるようになります。
一度app bundle が作成されたら、Apple Transport macOS appや
コマンドラインでの`xcrun altool`（App Store Connect API キーの認証手順に対しては `man altool` を実行）を通してAppleへアップロードします。
アップロード後、Test Flightや、AppStoreであなたのアプリがリリースされ、
利用可能となります。
表示名やアプリアイコンなど、Xcode プロジェクトの初期設定の後、
アプリをリリースするのにもはやXcodeを開く必要はありません。

`--export-method ad-hoc`, `--export- method development` ,
`--export-method enterprise`により、
AppStoreやTest Flight以外の配布先を選択できるようになったようです。

### Gradle バージョンのアップデート

Flutter ツールを利用して新たなプロジェクトを作るのなら、
生成ファイルがGradle と Android Gradle プラグインの
最新バージョンを使用していることを注意する必要があります。
現行のプロジェクトに対しては、Gradleのバージョンを7.4に、
Android Gradle プラグインのバージョンを7.1.2に手動で上げる必要があります。

### 32-bit iOS/ iOS 9 / iOS 10のサポートの終了間近

2022年2月の2.10 のstable リリースの際に、告知したように、32-bit のiOSデバイスや、
iOS バージョン9, 10のFlutterのサポートが終了予定です。
この変更は、iPhone 4S, iPhone 5, iPhone 5G, 第2、第3、第4世代のiPadに影響します。
Flutter 3はこれらのiOSバージョンとデバイスをサポートする最後のstable リリースとなります。
詳細は[こちら](https://docs.google.com/document/d/1cc5EOsuTlbf4dTDTwmkD3aKjS8XEbVCIqi9BFct9XHM/edit?resourcekey=0-Iv0gXDx7nSDCe3YDfxDKqw)。

## Web のアップデート

Web アプリへのアップデートは以下となります。

### 画像デコーディング

Flutter web は現在、ブラウザでサポートされているImageDecorder APIを
自動的に検知し、利用しています。
現在、最もChromimum - basedなブラウザ(Chrome, Edge, Opera, Samsung Browser など)にこのAPIを追加しています。

新たなAPIはブラウザのビルトインの画像コーデックを利用し、
非同期的にメインスレッドから切り離して画像をデコードします。
この画像デコーディングのスピードアップは2倍にもなり、
決してメインスレッドをブロックせず、
画像に寄って以前発生していた全てのジャンクを排除します。

### Web アプリのライフサイクル

新たなFlutter Web アプリに対するライフサイクルAPI は、
Flutterアプリの自動実行プロセスを、ホスティングしているHTML ページから
管理するための柔軟性を提供します。
また、Lighthouseがアプリのパフォーマンスを解析するのを助けます。
以下のような頻度高く要求されるシナリオを含む、多くのユースケースに適用されます。

- スプラッシュスクリーン
- ローディングインディケーター
- Flutterアプリの前に表示されるプレーンHTMLのインタラクティブなランディングページ

詳細は[こちら](https://docs.flutter.dev/development/platform-integration/web/initialization)。

## ツールのアップデート

FlutterとDartのツールのアップデートは以下となります。

### lint パッケージの更新

lint パッケージのVersion 2.0 がリリースされました。

https://pub.dev/packages/flutter_lints/versions/2.0.0

https://pub.dev/packages/lints/versions/2.0.0

Flutter 3 で`flutter create `によって生成されるアプリは自動的にv2.0のlintが設定されます。
現行のアプリやパッケージ、プラグインでも、
Flutterの世界で最も最新で偉大なベストプラクティスに追従した
v2.0 へのマイグレーションが推奨されます。
このアップグレードは、`flutter pub upgrade --major-versions flutter_lints`にて実行されます。

v2.0 で新しく追加されたlint のワーニングの殆どは、自動で修正されます。
`pubspec.yaml`でパッケージのバージョンをアップグレードした後、
`dart fix --apply` 実行することで、ほとんどのlint のワーニングが自動的に修正されます。
（いくつかのワーニングは手動で修正が必要です。）
`package: flutter_lints`を使用していない場合は、
[マイグレーションガイド](https://docs.flutter.dev/release/breaking-changes/flutter-lints-package#migration-guide)に沿ってマイグレーションが可能です。

### パフォーマンスの向上

部分再描画をサポートするAndroid デバイスにて、部分再描画できるようになりました。
この変更をローカルでテストした結果、
Pixel 4 XL デバイスの`backdrop_fileter_perf`ベンチマーク上で、
90番目のパーセンタイルと99番目のパーセンタイルでフレームのラスタライゼーション時間が
平均で5倍短縮されました。
一つの長方形のdirtyな領域があった際の部分再描画は、
iOS, 最新のAndroid デバイスで利用可能です。

単純な場合の不透明度のアニメーションのパフォーマンスがさらに[向上](https://github.com/flutter/engine/pull/30957)されました。
特に、`Opacity` Widget が単一の描画プリミティブを含む場合、
`Opacity`によって通常呼び出される` saveLayer`メソッドが省略されます。
この最適化の効果を測定するために構築されたベンチマークでは、
ラスタライゼーションの時間は[一桁も向上しました](https://flutter-flutter-perf.skia.org/e/?begin=1643063115&end=1644004520&keys=X32827d8819e8271e025f50e77bf2bec0&requestType=0&xbaroffset=27447)。
未来のリリースでは、この最適化を他のより多くのシナリオに適用することを
計画しています。

エンジンのラスターとUIスレッドは今、
Android とiOSで、他のスレッド
（例えば、Dart VM のバックグラウンドでのガーベッジコレクションスレッド）
より高い優先度で実行しています。
ベンチマークでは[〜20%](https://flutter-flutter-perf.skia.org/e/?begin=1644581114&end=1644647407&keys=X3999dc0a0c89054eaa9f66bcff27d882&num_commits=50&request_type=1&xbaroffset=27549)ビルド時間が短縮されています。

Flutter 3のリリース前、ラスターキャッシュに対するアドミッションポリシーは、
一つのピクチャーに対する描画オペレーションの回数を見るだけで、
オペレーション数が数回以上のものはキャッシュの良い候補になると仮定していました。
残念なことにこの結果実際にとても早く描画するために、
ピクチャーをキャッシュするのにエンジンがメモリを消費することとなりました。
今回のリリースで、ピクチャーの描画の複雑さを、
それが含む描画オペレーションのコストをベースに推定する[メカニズム](https://github.com/flutter/engine/pull/31417)を導入しました。
これを使うことによりラスターキャッシュのアドミッションポリシーは
ベンチマーク上でのパフォーマンスの減衰はなしで[メモリ使用量を減少](https://flutter-flutter-perf.skia.org/e/?begin=1644790212&end=1646044276&keys=X4c7dd4e4903a38523816c00b31d4d787&requestType=0&xbaroffset=27636)させました。

iOSでの小さな数のアニメーションフレーム落ちを引き起こす、
[フレームスケジューリングのバグ](https://github.com/flutter/engine/pull/31513)の修正が行われました。

### インペラー

iOSや他のプラットフォームでの初期設定でのジャンクに対処することの解決策のために、
チームは懸命に働いています。
Flutter 3のリリースで、iOSで[インペラー](https://github.com/flutter/engine/tree/main/impeller)と呼ばれる実験的な描画バックエンドを
見ることができます。
インペラーは[より小さな、単純なシェーダーのセット](https://github.com/flutter/flutter/issues/77412)を、
アプリが実行時にコンパイルしないように、
（これがFlutterのジャンクの大きな原因となっています。）
エンジンがビルドする時間でプレコンパイルします。
インペラーはまだ製品化されておらず、完成にはほど遠い状態です。
Flutterの機能すべてにインペラーは実装されていませんが、
進捗を共有している[flutter/gallery](https://github.com/flutter/gallery)のでの忠実度とパフォーマンスについては、
十分に満足しています。
特に、Gallery アプリの画面遷移アニメーションで一番悪いフレームが[20倍早く](https://flutter-flutter-perf.skia.org/e/?begin=1650297849&end=1651261748&queries=sub_result%3Dworst_frame_rasterizer_time_millis%26test%3Dnew_gallery_impeller_ios__transition_perf%26test%3Dnew_gallery_ios__transition_perf&requestType=0)なりました。

インペラーはiOSの元で利用可能です。
`--enavle-impeller `オプションを` flutter run`につけて実行するか、
`Info.plist`に`FLTEnableImpeller`フラグを`true`にセットすることで、
インペラーを試すことができます。
インペラーの開発はFlutter のmaster チャンネルで続け、
未来のリリースでさらなるアップデートを提供できることを望みます。

### Android でのインライン 広告

あなたが[google_mobile_ads](https://pub.dev/packages/google_mobile_ads)パッケージを利用する時、
スクロールや画面遷移によって、ユーザーとって重要なインタラクションで、
よりよいパフォーマンスとなるべきです。
これは特に新興市場で人気のあるデバイスにて気づくことができます。
一番いい方法は、コードの変更を要求されないことです！

Flutter は Android View、一般的に[プラットフォームビュー](https://docs.flutter.dev/development/platform-integration/platform-views)と
呼ばれるViewを非同期で構成するようになりました。
これは、FlutterのラスタースレッドがAndroid Viewが、
描画されるのを待つ必要が無くなったことを意味します。
その代わりに、Flutterエンジンが画面上でそれを管理するOpenGL テクスチャ を使って、
Viewを配置します。

## その他エキサイティングなアップデート

Flutter エコシステムでのその他のアップデートは以下です。

### Material 3

Flutter 3 では、次世代のMaterial DesignであるMaterial Design 3をサポートします。
Flutter 3 は Material 3に対しオプトインのサポートを行います。
（ダイナミックカラーや更新されたカラーシステム、
タイポグラフィーのようなMaterial Youの機能を含み、
多くのコンポーネントや、
新しいタッチリプルデザインや伸縮のオーバースクロールの効果のような、
Android 12で導入された新たなビジュアルの効果をアップデートをします。）
Material 3の機能について、
新しい"[Take your Flutter app from Boring to Beautiful](https://codelabs.developers.google.com/codelabs/flutter-boring-to-beautiful#0)" CodeLabにて試すことができます。
これらの新しい機能のオプトインの仕方や、
どのコンポーネントがMaterial 3をサポートしたかについての詳細は
[API ドキュメント](https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html)を見てください。
現在の進行状況は、[Material 3 Umbrella issue](https://github.com/flutter/flutter/issues/91605)にあります。

### Theme extensions

Flutter で `ThemeExtension`というコンセプトのもと、
どんなものでも Material ライブラリーの`ThermData` を追加できるようになりました。
Dart的な意味で `ThemeData`をextend し、
`copywith` と `lerp`、他のメソッドを再実装することにより、
`ThemeData.extensions` を指定することができます。
また、パッケージ開発者によっては、`ThemeExtensions`を提供することも可能です。
詳細は[こちら](https://docs.google.com/document/d/1LbD4JqBgAfHex02oR3r2jyu9lTBBNBmyec2ovT59Kr8/edit)。
サンプルは[こちら](https://github.com/guidezpl/flutter/blob/master/examples/api/lib/material/theme/theme_extension.1.dart)。

この内容については週刊Flutter大学で記事化しています。
以下の記事を併せてご確認ください。

https://blog.flutteruniv.com/flutter-themeextension/

### 広告

パブリッシャーにとって重要なのは、パーソナライズされた広告に対する同意の要求と、
Apple's App Tracking Transparency (ATT)の要求の対応です。

これらに要求をサポートするため、Googleは、
以前あったオープンソースのConsent SDK の代替として、
User Messaging Platform(UMF) SDK を提供します。
Flutterに対するGMA SDK の次期リリースでは、
パブリッシャーがユーザーの同意を獲得できるよう、
UMP SDK に対するサポートを追加します。
詳細は[こちら](https://pub.dev/packages/google_mobile_ads)。

## 破壊的変更

Flutterを成長させ、向上させ続ける中で、
破壊的変更の数を最小限に抑えることを目標としています。
Flutter 3のリリースでは、以下の破壊的変更があります。

- [v2.10 以降非推奨のAPI](https://docs.flutter.dev/release/breaking-changes/2-10-deprecations)
- [Page transitionがZoomPageTransitionsBuilder に置き換え](https://docs.flutter.dev/release/breaking-changes/page-transition-replaced-by-ZoomPageTransitionBuilder)
- [useDeleteButtonTooltip のdeleteButtonTooltipMessageへのマイグレート](https://docs.flutter.dev/release/breaking-changes/chip-usedeletebuttontooltip-migration)
- [ThemeData の toggleableActiveColor propertyが非推奨に](https://docs.flutter.dev/release/breaking-changes/toggleable-active-color)

これらのAPIを利用している場合は、[マイグレーションガイド](https://docs.flutter.dev/release/breaking-changes)を確認ください。

## まとめ

本記事では2022年5月12日に行われたFlutter 3のアップデート内容について、
リリースノートのブログを適宜情報を加えながら要約して紹介します。

この他にも、Dartの方でenumの向上等のアップデートがなされています。

詳細は以下をご確認ください。

https://medium.com/dartlang/dart-2-17-b216bfc80c5d

Flutter 3 にアップグレードするのはパフォーマンスの向上からいっても良いことばかりです。
ぜひ本記事を読んで、アップデートを検討してみてください！

Flutterを一緒に学んでみませんか？
Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、
以下の画像リンクから。

## 編集後記（2022/5/12）

基調講演の要約記事に続き、
Flutter 3 のリリースノートの解説記事でした。

ほとんど英訳の記事ですが、このような記事を出すのには理由があります。
すこしでも日本でFlutterに興味を持つ人を増やしたい、
その際の言語の壁をできるだけ取り払いたい、
そう考えているからです。

Flutterでは簡単にアプリを作ることができます。
もちろん追求すれば難しい部分はありますが、導入の窓口としてはかなり広いです。

Flutterでアプリを作ることが特殊技能でない時代が来て、
日本がそのトップリードの国になったら良いと強く思っています。

そのためにはFlutterを学ぶ人の人口を増やす必要があります。
英語ができない人でも学べるようにする必要があります。

本記事のような英訳の記事が、その一役を担えたら、と思い、
アップデートのたびにこのような記事を書いています。

Flutter のアップデートは一種のお祭りのようなものです。
お祭りを盛り上げる山車の一個に本記事がなれたらよいなと思っています。

ぜひ、このお祭りを楽しんでください。

週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。
記事の更新情報は[Flutter大学Twitter](https://twitter.com/FlutterUniv)にて告知します。
ぜひぜひフォローをお願いいたします。