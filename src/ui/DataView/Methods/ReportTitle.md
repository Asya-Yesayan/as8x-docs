---
title: ReportTitle
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.ReportTitle() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual string ReportTitle()
```

Վերադարձնում է DataView-ի հիմնական վերնագիրը՝ `Caption`-ը:

Override-ի դեպքում կարելի է dynamic caption վերադարձնել: Կոչվում է
`CaptionToolTip`-ի, `TitleString`-ի, `ComposeTitle`-ի կողմից:

**Վերադարձնում է**

DataView-ի caption-ը:

