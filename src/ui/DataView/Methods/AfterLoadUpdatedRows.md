---
title: AfterLoadUpdatedRows
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.AfterLoadUpdatedRows(List<R> rows) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
protected virtual void AfterLoadUpdatedRows(List<R> rows)
```

Նախատեսված է սերվերից ստացված թարմացված տողերի լրացուցիչ մշակման համար՝ նախքան դրանք դիտելու ձևում ցուցադրելը։

Կանչվում է [LoadUpdatedRows](LoadUpdatedRows.md) մեթոդից՝ [GetUpdatedRows](GetUpdatedRows.md) մեթոդով սերվերից թարմացված տողերը ստանալուց անմիջապես հետո։ 

Մեթոդը չմշակելու դեպքում ոչ մի գործողություն չի կատարվում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| rows | List<R> | - | Սերվերից ստացված թարմացված տողերը։ |
