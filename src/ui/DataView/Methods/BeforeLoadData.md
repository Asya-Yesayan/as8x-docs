---
title: BeforeLoadData
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.BeforeLoadData(BeforeLoadDataEventArgs args) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void BeforeLoadData(BeforeLoadDataEventArgs args)
```

Կոչվում է data loading-ից անմիջապես առաջ:

Լռությամբ կիրառում է `Columns.SortOrder()`-ի sorting-ը panel-ի վրա,
եթե panel-ը դեռ sorted չէ: Override-ն կարող է կատարել նախնական UI կարգավորումներ:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | BeforeLoadDataEventArgs | - | `args.DialogApplied` — `true` եթե dialog-ն կիրառվել է: |

