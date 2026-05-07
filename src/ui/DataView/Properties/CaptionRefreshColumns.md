---
title: CaptionRefreshColumns
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.CaptionRefreshColumns հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual HashSet<string> CaptionRefreshColumns { get; }
```

Այն սյուների անուններն, որոնց caption-ները թարմացվում են dialog-ի կատարման ավարտից հետո:

Լռությամբ `null`: Override-ի դեպքում վերադարձնել column name-ների
`HashSet{string}`: Panel-ն dialog apply-ից հետո ստուգում է
այս հավաքածուն ու refresh-ում column header-ները:

