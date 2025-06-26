---
title: "【Flutter】 BorderRadiusの使い方"
slug: "border-radius"
description: ""
pubDatetime: "2023-03-26"
author: "shimano"
tags: ["UI/レイアウト"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

## BorderRadius

FlutterのBorderRadiusは、四角形の角を丸めるために使用されます。

#### BorderRadiusの種類

- `circular`: 全ての角を指定された半径で丸めます。
- `only`: 特定の角を指定された半径で丸めます。
- `vertical`: 上下の角をそれぞれ別々の半径で丸めます。
- `horizontal`: 左右の角をそれぞれ別々の半径で丸めます。

### `circular`

```
Container(
  decoration: BoxDecoration(
    borderRadius: BorderRadius.circular(50),
    color: Colors.blue,
  ),
  height: 100,
  width: 100,
);
```

上記の例では、Containerの四角形の角が、半径50の円弧で丸められています。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2023/03/スクリーンショット-2023-03-26-14.51.10-1.png" alt="" width="300">

### `only`

```
Container(
  decoration: BoxDecoration(
    borderRadius: BorderRadius.only(
      topLeft: Radius.circular(20.0),
      bottomRight: Radius.circular(20.0),
    ),
    color: Colors.blue,
  ),
  height: 100,
  width: 100,
);
```

上記の例では、四角形の左上と右下の角が半径20の円弧で丸められています。`BorderRadius.only`メソッドは、指定された角だけを丸めるために使用されます。上記の例では、`topLeft`と`bottomRight`の角が丸められ、他の角は丸められていません。

<img src="https://blog.flutteruniv.com/wp-content/uploads/2023/03/スクリーンショット-2023-03-26-15.02.23.png" alt="" width="300">

`BorderRadius.only`メソッドには、以下のようなパラメーターがあります。

- `topLeft`: 左上の角を丸める半径を指定します。
- `topRight`: 右上の角を丸める半径を指定します。
- `bottomLeft`: 左下の角を丸める半径を指定します。
- `bottomRight`: 右下の角を丸める半径を指定します。

### `vertical`

```
Container(
  decoration: BoxDecoration(
    borderRadius: BorderRadius.vertical(
      top: Radius.circular(40.0),
      bottom: Radius.circular(20.0),
    ),
    color: Colors.blue,
  ),
  height: 100,
  width: 100,
);
```

<img src="https://blog.flutteruniv.com/wp-content/uploads/2023/03/スクリーンショット-2023-03-26-15.05.37.png" alt="" width="300">

上記の例では、四角形の上の角が半径40下の角が半径20の円弧で丸められています。`BorderRadius.vertical`メソッドは、上下の角だけを丸めるために使用されます。上記の例では、`top`と`bottom`の角が丸められ、他の角は丸められていません。

`BorderRadius.vertical`メソッドには、以下のようなパラメーターがあります。

- `top`: 上の角を丸める半径を指定します。
- `bottom`: 下の角を丸める半径を指定します。

### `horizontal`

```
Container(
  decoration: BoxDecoration(
    borderRadius: BorderRadius.horizontal(
      left: Radius.circular(40.0),
      right: Radius.circular(20.0),
    ),
    color: Colors.blue,
  ),
  height: 100,
  width: 100,
);
```

<img src="https://blog.flutteruniv.com/wp-content/uploads/2023/03/スクリーンショット-2023-03-26-15.13.57.png" alt="" width="300">

上記の例では、四角形の左の角が半径40右の角が半径20の円弧で丸められています。`BorderRadius.horizontal`メソッドは、左右の角だけを丸めるために使用されます。上記の例では、`left`と`right`の角が丸められ、他の角は丸められていません。

`BorderRadius.horizontal`メソッドには、以下のようなパラメーターがあります。

- `left`: 左の角を丸める半径を指定します。
- `right`: 右の角を丸める半径を指定します。

これらのパラメーターを使用して、必要な角だけを丸めることができます。例えば、上下の角だけを丸めたい場合は、`BorderRadius.vertical`メソッドを使用することもできます。

これらのメソッドを使用して、四角形を必要に応じてカスタマイズすることができます。