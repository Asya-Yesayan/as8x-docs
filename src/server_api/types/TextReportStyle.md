---
layout: page
title: "TextReportStyle" 
tags: [AsRepViewer, textReport]
nav_exclude: true
---

# TextReportStyle

Այս enum-ը նախատեսված է տեքստային հաշվետվությունում (TextReport) ավելացող տողի ոճավորման համար։

Պարունակում է HTML թեգերի բազմություն, որոնք կարելի է ավելացնել տեքստին [TextReport](TextReport.md).[ApplyStyle](TextReport/Methods/ApplyStyle.md) մեթոդի միջոցով։

```c#
public enum TextReportStyle
{
    Normal = 0,
    Bold = 1,
    Italic = 2,
    Strikethru = 8,
    Underline = 16
}
```

**Արժեքների բազմություն**

| Անվանում   | Արժեք | Նկարագրություն                         |
| ---------- | ----- | -------------------------------------- |
| Normal     | 0     | Ոչ մի թեգ տեքստին չի ավելանում։        |
| Bold       | 1     | Թավ տեքստ։ Օրինակ` **տեքստ**։          |
| Italic     | 2     | Շեղատառ տեքստ։ Օրինակ` *տեքստ*։        |
| Strikethru | 8     | Վրագծված տեքստ։ Օրինակ` ~~տեքստ~~`։    |
| Underline  | 16    | Ընդգծված տեքստ։ Օրինակ` <u>տեքստ</u>`։ |
