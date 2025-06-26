---
title: "Flutter チュートリアル ~ロジックの組み方を学ぼう~"
description: ""
pubDatetime: "2022-04-01"
author: "Aoi"
tags: ["ウィジェット"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---



UIは組めるようになったけど、ロジックとか、状態管理とか難しいんだよなぁ





いい練習になる教材はないかしら？




本記事では、そんな悩みにお答えします。



Flutterで UIが組めるようになった人のためのチュートリアルとして、本記事では三目並べゲームの作成方法を通し、基本的なロジックの組み方について解説します。



完成系はこちらです。




https://dartpad.dartlang.org/?id=a2bd77692fee9e5368365a56e57c0c60




三目並べゲームをプレイでき、右側のボタンを押すと、その手番まで戻るタイムトラベル機能が付いています。



このゲームを通して、Flutterのロジックの組み方や、基本的な状態管理を学んでいきましょう！




本記事は以下のReactのチュートリアルをFlutterで置き換えたものです。Reactの経験者の方は、Flutterでの書き方の参考になると思います。




https://ja.reactjs.org/tutorial/tutorial.html





準備







本記事では、こちらのDartPadのコードをベースとして解説していきます。



DartPadでも進めることができますが、おすすめはAndroid Studio もしくは VScodeを使うことです。



ショートカットキーなどを使ってエラー対応等ができるためです。



Android Studio でも、VScodeでもどちらでも構いません。ぜひご自分の環境でこのチュートリアルを進めてみてください。




Android Studio もしくは VScodeで進める場合は、以下のGitHubリポジトリをクローンし、startプロジェクトのコードを書き換えながら進めることをお勧めします。（もしくは、startプロジェクトのmain.dartのコードを自分のFlutterプロジェクトのmain.dartにコピペしてください。）アプリの実行はChromeでしか確認していないため、Chromeで実行してください。




https://github.com/Umigishi-Aoi/flutter_tutorial_tic_tac_toe_game





また、このチュートリアルはコピー&ペーストでなく、手打ちで行うことをお勧めします。コードの書き方を覚えることができ、理解も進むはずです。



途中で詰まった場合は、章の最後にその章の完成コード配置していますので、それと見比べて、修正してみて下さい。



startプロジェクトの解説



startプロジェクトのmain.dart (DartPadの場合は表示されているコード)を見てください。



既に色々なコードが書かれていますね。このコードについて概要を解説していきます。



概要



まずは概要として、このコードがどのような構成になっているのかを紹介します。



このコードには大きく分けて3つのWidgetがあります。Game, Boad, Squareの3つです。



各WidgetとUIの関係性は次の図の通りです。







コードを見ると、GameがBoardを呼び出し、BoardがGridViewでSquareを9つ並べているのが分かると思います。



まずは、Gameの子WidgetがBoardで、さらにBoardの子WidgetがSquareになっている、という関係性が掴めればOKです。



Step1.データの受け渡しの練習



今回のチュートリアルで基本となる、情報の伝搬、親Widgetから子Widgetへのデータの受け渡しを練習してみましょう。



Startプロジェクトを少し書き換えて、各マス目に、自分の位置の番号を表示させてみます。



各マス目の番号の情報は、Boardクラスbuildメソッド内の以下のコードのiとなります。



            children: List.generate(
              9,
              (int i) => const Square(),
            ),




=> はアロー関数といいます。ここでは詳細は省きます。詳しくは、以下の記事をご覧ください。




https://www.choge-blog.com/programming/dart-arrow/





このiをマス目であるSquareに渡し、iの値をマス目に表示させてみましょう。



まず、渡すためにはSquare側で受け取る準備が必要です。



Square側で、以下のようにvalueというフィールド（変数）を宣言してみてください。



class Square extends StatelessWidget {
  const Square({
    Key? key,
  }) : super(key: key);

  final String value; //追加




すると、コンストラクタであるSquare()でエラーが出るはずです。



これは、フィールドはあるけれど、コンストラクタで受け取るコードが書いてないよ、というエラーです。以下のようにコンストラクタに追記しましょう。



class Square extends StatelessWidget {
  const Square({
    Key? key,
    required this.value, //追加
  }) : super(key: key);

  final String value;




Mac端末でVScodeの場合は、赤線にカーソルを合わせ、"⌘ + . " →"generate constractor"でもOKです。




できましたでしょうか？これで、Squareが値を受け取る準備ができました。



フィールドを宣言する→コンストラクタに追記する、が、値を受け取るためのフィールドの追加の一連の流れとなります。



ぜひ覚えておきましょう。



ここまでできると、今度はBoardの方でエラーが出ているはずです。



このエラーは、「Square()でvalueの値を要求しているのに、入っていないよ！」という内容です。



以下のBoardクラスのbuildメソッドを以下のように書き換えて、Squareに番号を渡してあげましょう。



  @override
  Widget build(BuildContext context) {
    const status = 'Next Player: X';
    return Column(
      children: [
        const Text(status),
        SizedBox(
          height: 34 * 3,
          width: 34 * 3,
          child: GridView.count(
            shrinkWrap: true,
            crossAxisCount: 3,
            children: List.generate(
              9,
              (int i) => Square(value: '$i'), //書き換える
            ),
          ),
        ),
      ],
    );
  }




後々の都合上、valueはString型となっています。一方で、iはint型です。型を合わせる必要があるため、'$i'という書き方となっています。




これでエラーは無くなりました。ただ、まだ数字は表示されません。



Squareで受け取った値を表示するロジックを書いていないからです。



Squareのbuildメソッドを以下のように書き換えて、valueを表示するようにしましょう。



  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        height: 34,
        width: 34,
        decoration: BoxDecoration(
          border: Border.all(color: const Color.fromRGBO(9, 9, 9, 1), width: 1),
        ),
        child: Center( //const削除
          child: Text(
            value, //修正
            style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold), //const追加
          ),
        ),
      ),
    );
  }



/







できましたでしょうか？



以上が親Widgetから子Widgetへとデータを受け渡す方法となります。



ここまでの全体のコードはこちら。



Step_a.タップに反応するようにしよう




この章では、startプロジェクトをベースにコードを書き換えていきます。startプロジェクトはこちら




三目並べのゲームではマス目へのタップへの反応が不可欠です。練習として、各マス目をタップすると表示が変わるように、コードを書き換えてみましょう。



まずはどのようにしたら実装できるか、考え方を説明します。



タップされたら値が変わる、ということは、変わる値、つまり状態を持っている必要がありますね。



状態をもつ、ということはStatefulWidgetを使えばよさそうです。



ということで、SquareをStatefulWidgetに書き換えてみましょう。




Mac端末でVSコードを使用している方は、StatelessWidgetの上で"⌘ + ."を、AndroidStudioを使用している方は"option + enter"を押すと簡単にStatefulWidgetに書き換えられます。




class Square extends StatefulWidget {
  const Square({
    Key? key,
  }) : super(key: key);

  @override
  State<Square> createState() => _SquareState();
}

class _SquareState extends State<Square> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        height: 34,
        width: 34,
        decoration: BoxDecoration(
          border: Border.all(color: const Color.fromRGBO(9, 9, 9, 1), width: 1),
        ),
        child: const Center(
          child: Text(
            '',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}



できましたでしょうか？



次に、状態を_valueというフィールドで持たせてみます。_SquareStateクラスに以下のように書き加えてください。



class _SquareState extends State<Square> {
  String _value = ''; //追加

  @override
  Widget build(BuildContext context) {



これで、Squareが_valueという状態を持つことができました。Squareクラスのbuildメソッドを以下のコードのようにして、Squareで表示する値を_valueに設定しましょう。



   @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        height: 34,
        width: 34,
        decoration: BoxDecoration(
          border: Border.all(color: const Color.fromRGBO(9, 9, 9, 1), width: 1),
        ),
        child: Center( //const 削除
          child: Text(
            _value, //変更
            style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold), //const 追加
          ),
        ),
      ),
    );
  }



これでSquareが状態である_valueをマス目に表示するようになりました。



では、マス目をクリックしたら値が変わるようにするにはどうすればいいでしょうか？今回はGestureDetectorのonTapでそのロジックを設定します。



以下のようにSquareクラスのbuildメソッドを書き換えてください。



  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => setState(() { //追加
        _value = 'X';  //追加
      }), //追加
      child: Container(
//残りは変更ありません



ここでポイントとなるのはsetStateです。



setStateをすると、そのメソッドを持つStatefulWidgetが再描画(リビルド)されます。



今回の例でいうと、



タップ → _value が Xに置き換わる→ setStateで再描画される → Xが表示されるといった流れとなります。



上記コードを実行して、マス目を触ってみてください。触ったマス目でXが表示されるはずです。



以上がタップに反応するようにする方法でした。



ここまでの全体のコードはこちら。



３目並べ基本ロジックの作成







基本はわかりましたでしょうか？ここからいよいよ三目並べの作成に入っていきます。



最終的な目標は、手順を戻せる、タイムトラベル機能の実装ですが、この章では単純に三目並べが遊べるところまでを目標にしたいと思います。



Step2.親から子に状態を渡そう



まず、三目並べで遊べるようにするには何が必要か考えてみましょう。一番必要なのは、３つ揃った時に勝敗を判定するロジックですよね。



これを可能にするためには、各マスがもつ値の情報が必要です。前の章で、Squareに値の状態を持たせることはやりましたね。これを引っ張ってくればできそうですが、親から子に値を渡すのとは違い、子から親に値を渡すのは複雑で、難しいです。



なので、このように考えます。




親Widget(Board)が９つのマス目の値の情報を状態として持ち、子Widget(Square)に渡して表示します。








親が9つのマス目の値の情報を持つことで、これを精査すれば勝敗を決めることができます。




ここでは、"Step1.データの受け渡しの練習"で作成したコードをベースに作成していきます。"Step1.データの受け渡しの練習"で作成したコードはこちら。




実際にコードで見てみましょう。



まず、Board Widgetを StatefulWidgetに変えましょう。



class Board extends StatefulWidget {
  const Board({
    Key? key,
  }) : super(key: key);

  @override
  State<Board> createState() => _BoardState();
}

class _BoardState extends State<Board> {
  @override
  Widget build(BuildContext context) {
    const status = 'Next Player: X';
    return Column(
      children: [
        const Text(status),
        SizedBox(
          height: 34 * 3,
          width: 34 * 3,
          child: GridView.count(
            shrinkWrap: true,
            crossAxisCount: 3,
            children: List.generate(
              9,
              (int i) => Square(value: '$i'),
            ),
          ),
        ),
      ],
    );
  }
}



次に、状態として9個のマス目の値を定義しましょう。今回のように順序づけて9個の値を管理する際にはListを使うと良いです。



以下のように状態を定義しましょう。



class _BoardState extends State<Board> {
  List<String?> _squares = List.generate(9, (index) => null);




squaresが保持する状態です。 List.generate(9, (index) => null)で要素数9のリストを生成し初期値としてnullを与えています。 




String? は、nullでも良いString型の値を定義するときに用いられる書き方です。このnull safetyの書き方については、以下の記事を読んでみてください。




https://zenn.dev/kboy/articles/ae607839cd4573





今、Squareにはiの値をそのまま渡していました。これを、状態のsquaresの各indexの値を渡すように設定しましょう。



以下のようにBoardクラスのbuildメソッドのコードを書き換えてください。



  @override
  Widget build(BuildContext context) {
    const status = 'Next Player: X';
    return Column(
      children: [
        const Text(status),
        SizedBox(
          height: 34 * 3,
          width: 34 * 3,
          child: GridView.count(
            shrinkWrap: true,
            crossAxisCount: 3,
            children: List.generate(
              9,
              (int i) => Square(value: _squares[i]), //書き換える
            ),
          ),
        ),
      ],
    );
  }




上のブロックで話したnull safetyの関係でエラーが発生しています。Squareを以下のように書き換えてください。



class Square extends StatelessWidget {
  const Square({
    Key? key,
    required this.value,
  }) : super(key: key);

  final String? value; //書き換える

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        height: 34,
        width: 34,
        decoration: BoxDecoration(
          border: Border.all(color: const Color.fromRGBO(9, 9, 9, 1), width: 1),
        ),
        child: Center(
          child: Text(
            value ?? '',//書き換える
            style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}




※ value ?? '' は??の左が null の時、右の値とする、という表現です。




以上で、親であるBoard から子であるSquareに状態を渡すことができました。



ここまでの全体のコードはこちら。



Step3.親から子にメソッドを渡そう



マス目をクリックした際の挙動を設定していきましょう。上の章では、Squareの中でonTapでSquareの状態を変更してsetStateして再描画しましたね。



ただ、今回は状態を持っているのはBoardです。けれど、onTapがあるのは子のSquareです。子のSquareから親のBoardの状態を変更するにはどうすれば良いでしょうか？



解決策は、Boardに状態変更するメソッド（関数）を定義し、そのメソッドを子のSquareに渡して呼び出してもらうようにすることです。



親から子へは値だけではなく、メソッドも渡すことが可能です。



実際にコードで見てみましょう。



まずは受け取る側の準備からです。値の受け渡しの時と同様に、Squareにメソッドを宣言し、コンストラクタに追記しましょう。



class Square extends StatelessWidget {
  const Square({
    Key? key,
    required this.onTap,//追加
    required this.value,
  }) : super(key: key);

  final void Function() onTap;  //追加
  final String? value;



現在、BoardでSquareを設定している部分でエラーが出ていると思います。Boardクラスのbuildメソッドのエラーの部分を以下のように書き換え、Squareにメソッドを渡しましょう。



              (int i) => Square(
                onTap: () => handleClick(i), //追加
                value: _squares[i],
              ),



まだhandleClickのメソッドを定義していないため、エラーが出ていると思います。



buildメソッドの前に以下のようにhandleClickを定義しましょう。



class _BoardState extends State<Board> {
  List<String?> squares = List.generate(9, (index) => null);

//追加ここから
  void handleClick(int i) {
    final squares = _squares.sublist(0);
    squares[i] = 'X';
    setState(() {
      _squares = squares;
    });
  }
//ここまで

  @override
  Widget build(BuildContext context) {
//残りは変更ありません




最後に、Square で受け取った onTap メソッドをGestureDetectorのonTapに設定しましょう。Squareクラスのbuildメソッドを書き換えます。



  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap, //追加
      child: Container(
//残りは変更ありません



以上で設定は完了です。ここまでできたらアプリを実行して、マス目をタップしてみてください。



先ほどと同様にXが表示されるはずです。



ここまでの全体のコードはこちら。



Step4.XとOを交互に表示しよう



今までのコードではXしか表示できませんでした。コードを改造して、XとOを交互に表示できるようにしましょう。



考え方はこうです。まず、次の手番がXかOかを管理する状態を用意します。XかOかなので、true or falseを返すbool型の状態にするのが良いでしょう。この状態を見てtrueならXを、falseならOを表示させます。最後に手番の後に状態を反転させます。



これなら、XとOが交互に表示されるようになりそうです。それでは、実装していきましょう。



まずBoardにXかOかを管理する状態を用意します。



class _BoardState extends State<Board> {
  List<String?> _squares = List.generate(9, (index) => null);
  bool _xIsNext = true; //追加



次にBoardクラスのhandleClickを以下のように書き換え、_xIsNextがtrueならXを、falseならOを表示させ、表示後、_xIsNextを反転させます。



  void handleClick(int i) {
    final squares = _squares.sublist(0);
    squares[i] = _xIsNext ? 'X' : 'O'; //書き換える
    setState(() {
      _squares = squares;
      _xIsNext = !_xIsNext; //追加
    });
  }



これにより、XとOが交互に表示されるようになりました。



Next Playerの表示も変わるようにしましょう。以下のようにBoardクラスのbuildメソッドを書き換えてみてください。



  @override
  Widget build(BuildContext context) {
    final status = 'Next Player: ${_xIsNext ? 'X' : 'O'}';  //書き換え
    return Column(
      children: [
        Text(status),  //const削除
        SizedBox(
//残りは変更ありません



これで、XとOの手番の変化を実装できました。



ここまでの全体のコードはこちら。



Step5.ゲーム勝者の判定をしよう



いよいよ、この章の最後となります。ゲーム勝者の判定ロジックを作成しましょう。



コードベースで解説していきます。



以下のコードをファイル末尾に貼り付けてください。



//1
String? calculateWinner(List<String?> squares) {
  //2
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < lines.length; i++) {
    //3
    final indexs = lines[i];
    //4
    if (squares[indexs[0]] != null &&
        squares[indexs[0]] == squares[indexs[1]] &&
        squares[indexs[0]] == squares[indexs[2]]) {
      return squares[indexs[0]];
    }
  }
  return null;
}




ポイントを解説していきます。



//1引数としてマス目の中身のリストを持ち、揃った中身を返す（揃ってなければnullを返す）関数を作成します。



//2







3つ揃うパターンのインデックスのリストです。上の画像と比較すると、リストの3つの数字の組み合わせが画像上で３つ揃っていることがわかると思います。



//33つ揃うパターンのインデックスのリストから、一つのパターンを取り出しています。



//4ここが勝敗判定のキモです。3つ揃うパターンのインデックスを使って、マス目の中身がそもそもあるか、3つとも同じになっているかをチェックしています。trueの場合は、揃っている中身(XかO)を返します。



図にまとめるとこうなります。







この関数を使って勝敗の判定をアプリに反映していきましょう。



Board クラスのbuildメソッドを以下のように書き換えてください。



  @override
  Widget build(BuildContext context) {
    final winner = calculateWinner(_squares);
    String status;
    if (winner != null) {
      status = 'Winner: $winner';
    } else {
      status = 'Next player: ${_xIsNext ? 'X' : 'O'}';
    }
   return Column(
//残りは変更ありません



calculateWinner(_squares)の結果に応じて、勝者を表示できるようになりました。



ただ、今の状態だと勝敗が着いた後もマスにXやOを置けてしまいます。



BoardクラスのhandleClickを以下のように書き換えて、勝敗が着いた場合やマス目が既に埋まっている場合には、すぐにreturnして関数を終わらせるようにしましょう。



  void handleClick(int i) {
    final squares = _squares.sublist(0);
    if (calculateWinner(squares) != null || squares[i] != null) {
      return;
    }
    squares[i] = _xIsNext ? 'X' : 'O';
    setState(() {
      _squares = squares;
      _xIsNext = !_xIsNext;
    });
  }



おめでとうございます！



これで基本的な三目並べゲームができました！そしてFlutterの基本的なロジックの組み方についても学ぶことができました。



ここまでの全体のコードはこちら。



タイムトラベル機能の実装







ここからは応用編です。以前の着手まで、「時間を巻き戻す」、タイムトラベル機能を実装しましょう。



Step6.「盤面の状態の記録」の状態の定義



タイムトラベル機能実装の考え方は、「各手番での盤面の状態を記録しておき、ボタン操作に応じてその盤面を反映するようにする」です。



今回は、ボタン操作はGame Widgetの中で行うようにします。そのためには、「盤面の状態の記録」にボタンがアクセスできるようにしなければいけません。よって、「盤面の状態の記録」の状態はGame が持っている必要があります。



図で表すと、以下のようになります。







この図のように、盤面の状態の記録から盤面を取り出し、Boardに渡すことで、好きな盤面を表現することができます。



早速、Game を StatfulWidgetに書き換え、「盤面の状態の記録」の状態を_historyとして定義しましょう。



class Game extends StatefulWidget {
  const Game({Key? key}) : super(key: key);

  @override
  State<Game> createState() => _GameState();
}

class _GameState extends State<Game> {
  List<Map<String, List<String?>>> _history = [
    {'squares': List.generate(9, (index) => null)}
  ];
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Board(),
              Padding(
                padding: const EdgeInsets.only(left: 20),
                child: Column(children: const []),
              ),
            ],
          ),
        ),
      ),
    );
  }
}



ここで、次にやることを整理します。



Boardで状態を受け取る準備をしましょう。



盤面の状態をGameが管理するようになったので、BoardがSquareの状態を管理するようになった時と同様に、GameからBoardへ盤面の状態を変更するメソッドを渡す必要があります。



なので、Boardでは、状態だけでなくメソッドも受け取る準備をしなければいけません。



また、BoardからSquareに渡したメソッド、handleClickには、次がXの番か、Oの番かを表す状態_xIsNextが含まれていました。



今回はhandleClickはGameが持つため、_xIsNextもGameで管理するようにしましょう。



NextPlayerの表示も_xIsNextを使っていました。この表示の部分もGameに移してしまいましょう。



こうすると、Boardはもはや状態を持たなくなります。そのため、StatelessWidgetに書き換えてしまいましょう。



やることを整理すると以下のようになります。




_xIsNextをGameに移すNextPlayerの表示部分をGameに移すBoardをStatelessWidgetに変えるBoardで状態を受け取る準備をするBoardでメソッドを受け取る準備をする




一つ一つやっていきます。途中出るエラーについては後々修正していきますので、気にせずに手順を進めてください。



_xIsNextをGameに移す



class _BoardState extends State<Board> {
  List<String?> _squares = List.generate(9, (index) => null);
//_xIsNextを削除

  //この部分は変更ありません
}

class Game extends StatefulWidget {
  const Game({Key? key}) : super(key: key);

  @override
  State<Game> createState() => _GameState();
}

class _GameState extends State<Game> {
  List<Map<String, List<String?>>> _history = [
    {'squares': List.generate(9, (index) => null)}
  ];
    bool _xIsNext = true;//追加
  @override
  Widget build(BuildContext context) {
//残りは変更ありません



NextPlayerの表示部分をGameに移す



class _BoardState extends State<Board> {
  List<String?> _squares = List.generate(9, (index) => null);

//変更ありません

  @override
  Widget build(BuildContext context) {
//削除
    return SizedBox(  //Column()とTextを削除
      height: 34 * 3,
      width: 34 * 3,
      child: GridView.count(
        shrinkWrap: true,
        crossAxisCount: 3,
        children: List.generate(
          9,
          (int i) => Square(
            onTap: () => handleClick(i),
            value: _squares[i],
          ),
        ),
      ),
    );
  }
}

class Game extends StatefulWidget {
  const Game({Key? key}) : super(key: key);

  @override
  State<Game> createState() => _GameState();
}

class _GameState extends State<Game> {
  final List<Map<String, List<String?>>> _history = [
    {'squares': List.generate(9, (index) => null)}
  ];
  final bool _xIsNext = true;
  @override
  Widget build(BuildContext context) {
//追加ここから
    final history = _history;
    final current = history[history.length - 1];
    final winner = calculateWinner(current['squares']!);

    String status;

    if (winner != null) {
      status = 'Winner: $winner';
    } else {
      status = 'Next player: ${_xIsNext ? 'X' : 'O'}';
    }
//ここまで
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Board(),
              Padding(
                padding: const EdgeInsets.only(left: 20),
                child: Column(
                  children: [//const削除 、Padding()追加
                    Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Text(status),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}



ここでcurrentは最新の盤面情報を表しています。このcurrentを用いて勝敗を判定しています。(currentがMap型であることに注意です。)



BoardをStatelessWidgetに変える



class Board extends StatelessWidget {
  const Board({
    Key? key,
  }) : super(key: key);

  List<String?> _squares = List.generate(9, (index) => null);
//残りは変更ありません



Boardで状態を受け取る準備をする



_squaresをsquareに変え、状態を受け取ります。



class Board extends StatelessWidget {
  const Board({
    Key? key,
    required this.squares,//追記
  }) : super(key: key);

   final List<String?> squares;//修正

//handleClickの修正なし
  void handleClick(int i) {
    final squares = _squares.sublist(0);
    if (calculateWinner(squares) != null || squares[i] != null) {
      return;
    }
    squares[i] = _xIsNext ? 'X' : 'O';
    setState(() {
      _squares = squares;
      _xIsNext = !_xIsNext;
    });
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 34 * 3,
      width: 34 * 3,
      child: GridView.count(
        shrinkWrap: true,
        crossAxisCount: 3,
        children: List.generate(
          9,
          (int i) => Square(
            onTap: () => handleClick(i),
            value: squares[i], //修正
          ),
        ),
      ),
    );
  }
}



Boardでメソッドを受け取る準備をする



BoardにonTapを定義して、メソッドを受け取る準備をします。



class Board extends StatelessWidget {
  const Board({
    Key? key,
    required this.onTap,  //追加
    required this.squares,
  }) : super(key: key);

  final void Function(int i) onTap;//追加
  final List<String?> squares;

  void handleClick(int i) {
    final squares = _squares.sublist(0);
    if (calculateWinner(squares) != null || squares[i] != null) {
      return;
    }
    squares[i] = _xIsNext ? 'X' : 'O';
    setState(() {
      _squares = squares;
      _xIsNext = !_xIsNext;
    });
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 34 * 3,
      width: 34 * 3,
      child: GridView.count(
        shrinkWrap: true,
        crossAxisCount: 3,
        children: List.generate(
          9,
          (int i) => Square(
            onTap: () => onTap(i),//修正
            value: squares[i],
          ),
        ),
      ),
    );
  }
}



お疲れ様でした！以上でBoardで状態とメソッドを受け取る準備はできました。



次にGame側でBoardに状態とメソッドを受け渡す処理を書きましょう。handleClickをGameに移動させ、以下のようにコードを書き換えます。



class _GameState extends State<Game> {
  List<Map<String, List<String?>>> _history = [
    {'squares': List.generate(9, (index) => null)}
  ];
  bool _xIsNext = true;

//移動、修正
  void handleClick(int i) {
    final history = _history;
    final current = history[history.length - 1];
    final squares = current['squares']!.sublist(0);

    if (calculateWinner(squares) != null || squares[i] != null) {
      return;
    }
    squares[i] = _xIsNext ? 'X' : 'O';
    history.add({'squares': squares});
    setState(() {
      _history = history;
      _xIsNext = !_xIsNext;
    });
  }

  @override
  Widget build(BuildContext context) {
    final history = _history;
    final current = history[history.length - 1];
    final winner = calculateWinner(current['squares']!);

    String status;

    if (winner != null) {
      status = 'Winner: $winner';
    } else {
      status = 'Next player: ${_xIsNext ? 'X' : 'O'}';
    }

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Board(//const削除、中身を追加
                onTap: handleClick,
                squares: current['squares']!,
              ),
              Padding(
                padding: const EdgeInsets.only(left: 20),
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Text(status),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}



handleClickの中身が変わっていることに注意してください。



以上でエラーがなくなり、元の通りアプリを実行すると三目並べゲームが遊べる状態となります。頑張って変更していった割に変化が少なく思うかも知れませんが、安心してください、タイムトラベル機能の導入のためには大きな前進です。



導入まで後ちょっとです、頑張りましょう！



ここまでの全体のコードはこちら。



Step7.過去の着順を表示する



過去の着順を表示するためのボタンを作成していきます。



着順が増えるたびにボタンを増やすにはどうすればいいでしょうか？



一つの答えは、Listのメソッドであるmapを用いて、「盤面の状態の記録」である_historyの要素ごとにボタンを作成し、リスト化して表示する、です。



言葉では伝わりにくいので、コードで示します。Gameのbuildメソッドを以下のように書き換えてください。



  @override
  Widget build(BuildContext context) {
    final history = _history;
    final current = history[history.length - 1];
    final winner = calculateWinner(current['squares']!);

//追加ここから
    final moves = history.map((squares) {
      final step = history.indexOf(squares);
      final desc = step != 0 ? 'Go to move #$step' : 'Go to game start';
      return ElevatedButton(onPressed: () {}, child: Text(desc));
    }).toList();
//ここまで
    String status;

    if (winner != null) {
      status = 'Winner: $winner';
    } else {
      status = 'Next player: ${_xIsNext ? 'X' : 'O'}';
    }

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Board(
                onTap: handleClick,
                squares: current['squares']!,
              ),
              Padding(
                padding: const EdgeInsets.only(left: 20),
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Text(status),
                    ),
                    Column(//Column()を追加
                      children: moves,
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }



ポイントは、追記したmovesの部分です。mapを使って、historyのそれぞれの要素に対し、ElevatedBottonを生成し、最後にリスト化しています。



少しテクニカルですが、このような書き方もできるのだ、と覚えておくと良いでしょう。



今の状態でアプリを実行してみると、マス目を押すごとにボタンが追加されていきます。



ただ、ボタンを押しても何も起きません。次の章でボタンを押してタイムトラベルできるようにしましょう。



ここまでの全体のコードはこちら。



Step8. タイムトラベル機能の実装



長かったチュートリアルもいよいよ最後です！



タイムトラベル機能を実装しましょう。



タイムトラベル機能のためには今が何手目の状態を見ているのかを表す状態を導入します。



Gameへ以下のように_stepNumberを追加してください。



class _GameState extends State<Game> {
  List<Map<String, List<String?>>> _history = [
    {'squares': List.generate(9, (index) => null)}
  ];
  int _stepNumber = 0;//追加
  bool _xIsNext = true;
//残りは変更ありません



次に、Game内でjumpToメソッドを定義して、_stepNumberがこのメソッドで更新されるようにします。また、_stepNumberの値が偶数だった場合には次の手番はXなので、_xIsNextをtrueにします。



 void handleClick(int i) {
//変更ありません
  }
//追加
  void jumpTo(int step) {
    setState(() {
      _stepNumber = step;
      _xIsNext = (step % 2) == 0;
    });
  }

  @override
  Widget build(BuildContext context) {
//残りは変更ありません



このjumpToメソッドを、前章で設定したElevatedButtonに反映しましょう。



Gameのbuildメソッドを以下のように更新してください。



  @override
  Widget build(BuildContext context) {
    final history = _history;
    final current = history[history.length - 1];
    final winner = calculateWinner(current['squares']!);

    final moves = history.map((squares) {
      final step = history.indexOf(squares);
      final desc = step != 0 ? 'Go to move #$step' : 'Go to game start';
      return ElevatedButton(onPressed: () => jumpTo(step), child: Text(desc)); //書き換える
    }).toList();

    String status;
//残りは変更ありません



次に、_stepNumberが、マス目をクリックするたび更新されるように、handleClickを書き換えましょう。



書き換えたGame内のコードは以下のようになります。



  void handleClick(int i) {
    final history = _history.sublist(0, _stepNumber + 1); //書き換える
    final current = history[history.length - 1];
    final squares = current['squares']!.sublist(0);

    if (calculateWinner(squares) != null || squares[i] != null) {
      return;
    }
    squares[i] = _xIsNext ? 'X' : 'O';
    history.add({'squares': squares});
    setState(() {
      _history = history;
      _stepNumber = history.length - 1;//追加
      _xIsNext = !_xIsNext;
    });
  }



上の書き換えの部分について解説します。「時間の巻き戻し」をした場合、新しい_stepNumberより先の記録は要らなくなります。なので、subListを使って、_stepNumberより先の記録を破棄しています。



いよいよ本当に最後です。_stepNumberの盤面を表示させるようにGame内のbuildメソッドの中身を書き換えましょう。



  @override
  Widget build(BuildContext context) {
    final history = _history;
    final current = history[_stepNumber];//書き換える
    final winner = calculateWinner(current['squares']!);

//残りは変更ありません



おめでとうございます！



これでタイムトラベル機能が実装できました！アプリを実行し、マス目をいくつかクリックした後に右側のボタンを押してみてください。



その着手の盤面が表示される、タイムトラベルが可能となっていることがわかります。



完成したコードはこちら。



まとめ







Flutterで UIが組めるようになった人のためのチュートリアルとして、本記事では三目並べゲームの作成方法を通し、基本的なロジックの組み方について解説しました。



本記事で作成した三目並べは以下のような機能を持っています。




三目並べが遊べる決着がついた時に勝者が表示される着手の履歴を見ることができ、その着手まで戻ることができる。




かなり長く、歯応えのあるチュートリアルだったかと思います。



けれども、このチュートリアルを終えたあなたは、Flutter力、プログラミング力がきっと上がっているはずです。



次はあなただけの自作アプリに挑戦してみてください。きっと以前よりロジックの組み立てがしやすいですよ。



本記事があなたのアプリ開発の一助となれば、幸いです。




Flutterを一緒に学んでみませんか？Flutter エンジニアに特化した学習コミュニティ、Flutter大学への入会は、以下の画像リンクから。










編集後記（2022/4/1）




本日、4/1、Flutter大学がリニューアルされました！



特にHPが一新されて、よりわかりやすく、親しみやすくなっています。ぜひ覗いてみてください。




https://flutteruniv.com/




このリニューアルを記念してのチュートリアル記事だったのですが、いかがでしたでしょうか？



ここまで読まれている方は少ないかもしれませんね。



書いている私としてもかなり歯応えのある記事となりました。



この記事が誰かの役に立つことを、心から祈っています。





週刊Flutter大学では、Flutterに関する技術記事、Flutter大学についての紹介記事を投稿していきます。記事の更新情報はFlutter大学Twitterにて告知します。ぜひぜひフォローをお願いいたします





