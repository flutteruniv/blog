---
title: "【Flutter】TextFieldの文字色を変える方法"
slug: "textfield-color"
description: ""
pubDatetime: "2023-03-13"
author: "kboy"
tags: ["UI/レイアウト"]
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

TextFieldの文字色を変えるときは、以下のようにTextStyleを渡してcolorを当てます！

```
TextField(
                      style: TextStyle(
                        color: Colors.blue,
                      ),
                    ),
```