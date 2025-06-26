---
title: "【Flutter】 ドロップダウンボタン使ってみた！"
description: ""
pubDatetime: "2022-03-04"
author: "Aoi"
tags: ["ウィジェット"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---



Flutterでドロップダウン（プルダウン）のボタンってどうやって表示するんだろう？




今回はそんな疑問にお答えします！本記事では、ドロップダウン（プルダウン）のボタンの表示に役立つWidget、DropdownButton Widgetの紹介をします。



本記事を読むと、以下のようなUIが作成できます。







基本的な使い方から、詳細設定まで解説していきます！



ぜひ読んでみてください！



基本的な使い方



DropdownButton Widgetの基本的な使い方を紹介します。導入で紹介した画像のコードにて、解説していきます。



import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: SamplePage(),
    );
  }
}

//1
class SamplePage extends StatefulWidget {
  const SamplePage({Key? key}) : super(key: key);

  @override
  State<SamplePage> createState() => _SamplePageState();
}

class _SamplePageState extends State<SamplePage> {
  //2
  String? isSelectedItem = 'aaa';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('DropdownButton Sample'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            //3
            DropdownButton(
              //4
              items: const [
                //5
                DropdownMenuItem(
                  child: Text('aaa'),
                  value: 'aaa',
                ),
                DropdownMenuItem(
                  child: Text('bbb'),
                  value: 'bbb',
                ),
                DropdownMenuItem(
                  child: Text('ccc'),
                  value: 'ccc',
                ),
              ],
              //6
              onChanged: (String? value) {
                setState(() {
                  isSelectedItem = value;
                });
              },
              //7
              value: isSelectedItem,
            ),
            const SizedBox(
              height: 32,
            ),
            Text('$isSelectedItem が選択されました。')
          ],
        ),
      ),
    );
  }
}




以下、コードの解説となります。



//1DropdownButton Widgetでは、選択された選択肢によってドロップダウンボタンの表示を変えたいです。そのためには選択された選択肢を状態として保持する必要があるため、Stateful Widgetとしています。




Providerやriverpodなどの状態管理手法を使ってStatelessで書くことも可能です。




//2ドロップダウンボタンの選択された選択肢を保持する状態です。今回の例では選択肢のvalueをStringとしているため、Stringで定義しています。



//3DropdownButton Widgetの定義部分です。必須パラメータは以下の2つです。





items ・・・ドロップダウンボタンで表示する選択肢のリスト



onChanged ・・・選択肢が変更された時の挙動を定義するメソッド





//4ドロップダウンボタンで表示する選択肢のリストの定義部分です。DropdownMenuItemのリストである必要があります。



//5ドロップダウンボタンで表示する選択肢の定義部分です。DropdownMenuItemのchildに選択肢として表示したいWidgetを、valueに選択された時に用いる内部的な値を定義します。



//6選択肢が変更された時の挙動を定義するメソッドの定義部分です。変更された後の値がvalueに入ってきます。サンプルコードでは、isSelectedValueにvalueを代入し、SetStateすることで、選択された選択肢の更新を行なっています。



//7ドロップダウンボタンに表示する値の定義部分です。Stringで定義された値を設定します。サンプルコードでは、選択された選択肢をisSelectedValueで保持するため、そのままisSelectedValueを設定しています。



基本的な使い方は以上です。Text Widgetや ElevatedButton Widgetと比べると少し複雑ですが、上のサンプルコードを参考にすれば、簡単に書けると思います。



応用編



DropdownButton Widgetには様々な書き方、プロパティが用意されています。いくつか代表的なものを紹介します。



DropdownMenuItemの型



サンプルコードではDropdownButtonのvalueの型はStringでしたが、intやdoubleなどの数値を設定することも可能です。



int型の例



DropdownMenuItem<int>(
                  child: Text('1'),
                  value: 1,
                ),



またenumで設定した型の値を設定することも可能です。




DropdownMenuItemのvalueの型はitemsのリストの中で統一する必要があります。




ボタンの幅の変更



isExpandedプロパティをtrueにし、SizedBoxで囲みwidthに好きな幅を設定することで、ドロップダウンボタンの幅を設定することが可能です。



幅を160に設定した例



SizedBox(
              width: 160,
              child: DropdownButton(
                items: const [
                ・・・
                ],
                onChanged: (String? value) {
                  ・・・
                },
                value: isSelectedItem,
                isExpanded: true,
              ),
            ),







テキストスタイルの変更



DropdownButton Widgetでは、選択肢のテキストスタイルを一括で設定することが可能です。



styleプロパティにTextStyleを設定することで設定できます。



テキストを青字に設定した例



DropdownButton(
              items: const [
                ・・・
              ],
              onChanged: (String? value) {
                ・・・
              },
              value: isSelectedItem,
              style: const TextStyle(
                color: Colors.blue,
              ),
            ),







アイコンの変更



ドロップダウンボタンの三角形のアイコンについて、色や大きさ、アイコンの種類を変更することが可能です。



一つ一つ紹介し、サンプルコード、画像を提示します。



アイコンの色の変更



 iconEnabledColor プロパティにて、アイコンの色を変更することが可能です。



アイコンの大きさの変更



iconSize プロパティにてアイコンの大きさを変更することが可能です。



アイコンの種類の変更



icon プロパティにて、アイコンの種類を変更することが可能です。



上記を取り入れたサンプルコードは、以下となります。色をライトグリーン、大きさを48、アイコンを↓に変更した例です。



DropdownButton(
              items: const [
                ・・・
              ],
              onChanged: (String? value) {
                ・・・
              },
              value: isSelectedItem,
              iconEnabledColor: Colors.lightGreen,
              iconSize: 48,
              icon:const Icon(Icons.arrow_downward),
            ),







アンダーラインをつける



underline プロパティにてContainerを設定することで、アンダーラインを引くことが可能です。



黒色、太さ2のアンダーラインを設定した例



DropdownButton(
              items: const [
                ・・・
              ],
              onChanged: (String? value) {
                ・・・
              },
              value: isSelectedItem,
              underline: Container(
                height: 2,
                color: Colors.black,
              ),
            ),







リストに影をつける



elevation の値を調整することで、ドロップダウンボタンを押した時の影の具合を調整することができます。



elevationを16に設定したときのコード



DropdownButton(
              items: const [
                ・・・
              ],
              onChanged: (String? value) {
                ・・・
              },
              value: isSelectedItem,
              elevation: 16,
            ),



elevation の値、0とデフォルト（=8）と16の比較







ボタンを押せなくする



ボタンを押せなくする（非活動にする）方法を紹介します。



item プロパティ、またはonChangedプロパティにnullを設定することで、ボタンを押せなくする（非活動にする）ことができます。



以下、サンプルコードと画像です。



DropdownButton(
              items: null,
              onChanged: null,
              value: isSelectedItem,
            ),







まとめ



本記事ではドロップダウン（プルダウン）ボタンの実装方法として、DropdownButton Widgetの基本的な使い方を紹介しました。



また、様々な応用的な設定を紹介しました。



DropdownButton Widgetはアプリケーションを作成する際には必須と言っていいくらい、よく使うWidgetだと思います。



ぜひ本記事を参考にして使ってみてください。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










参考




https://www.youtube.com/watch?v=ZzQ_PWrFihg&t=9s




https://api.flutter.dev/flutter/material/DropdownButton-class.html



編集後記(2022/3/4)




今回はDropdownButton Widgetの紹介でした。



DropdownButton Widgetについて書こうと思ったきっかけは、参考資料に挙げているYouTube動画です。Widget of the Week というシリーズものの動画で、Flutter公式が定期的に公開しているWidgetについての紹介動画となります。



2022年3月現在でその数100本を超えています。凄いですよね。



Flutterでは、Widgetの知識 = Flutterの実力、と言って過言でないくらい、Widgetの知識は大事です。本ブログでも定期的にWidget、パッケージに関する紹介記事を書いていきますので、ぜひぜひ、お楽しみください。





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします。

