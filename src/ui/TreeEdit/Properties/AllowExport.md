---
title: AllowExport
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.AllowExport հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual bool AllowExport { get; internal set; }
```

Սահմանում է ծառի արտահանման իրավասությունը։ Հատկությունը արժեքավորվում է ConfigureFromDefinition մեթոդի կանչի արդյունքում՝ ծառի նկարագրության (TreeDefinition) AllowExport հատկության հիման վրա։

Հատկության true արժեքի դեպքում հասանելի են դառնում ծառի տվյալների արտահանման կոնտեքստային ֆունկցիաները (**«Արտահանել xlsx»**, **«Արտահանել PDF»** և համանմանները)։
