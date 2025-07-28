---
title: TextReport.ApplyStyle(string, TextReportStyle) մեթոդ
---

```c#
public static string ApplyStyle(string source, TextReportStyle style)
```

Ֆորմատավորում է նշված տեքստը՝ ավելացնելով հատուկ թեգեր, որի միջոցով տեքստը հնարավոր է դարձնել թավ, շեղատառ, վրագծված կամ ընդգծված։

Այս մեթոդը կիրառելուց առաջ անհրաժեշտ է հաշվետվության [UseFormatting](UseFormatting.md) հատկության արժեքը դնել `true`:

Ֆորմատավորված տեքստը ավելացվում է հաշվետվությանը [AddRow](AddRow.md), [AddHeader](AddHeader.md), [AddFooter](AddFooter.md) մեթոդների միջոցով։

**Պարամետրեր**

* `source` - Ֆորմատավորման ենթակա տեքստը։
* `style` - [Ավելացվող թեգի տեսակը](../TextReportStyle.md)։

**Օրինակ**

```c#
var report = new TextReport(storageService);
var formattedText = TextReport.ApplyStyle("Հաճախորդի հաշիվ", TextReportStyle.Bold);
report.AddRow(formattedText);
```
