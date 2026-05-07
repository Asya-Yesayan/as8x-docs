---
title: AddRow
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.AddRow(R row) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
protected void AddRow(R row)
```

Thread-safe կերպով ավելացնում է `row`-ը Rows հավաքածուին:

Dispatcher.BeginInvoke-ով post-ում է UI thread-ին: Background thread-ից
կանչելու համար (progress flow): `Wait()`-ը sync-ացնում է:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| row | R | - | Ավելացվող row-ը: Ոչ-`null`: |

