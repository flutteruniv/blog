---
title: "【Flutter】TextFieldの文字色を変える方法"
author: "kboy"
description: ""
pubDatetime: 2023-03-13T22:39:30.000Z
categories: ["flutter"]
---

TextFieldの文字色を変えるときは、以下のようにTextStyleを渡してcolorを当てます！

```dart
                    TextField(
                      style: TextStyle(
                        color: Colors.blue,
                      ),
                    ),
```