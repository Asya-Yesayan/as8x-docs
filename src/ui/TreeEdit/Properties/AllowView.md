---
title: AllowView
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.AllowView հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual bool AllowView { get; internal set; }
```

Սահմանում է ծառի ընթացիկ տողի դիտման իրավասությունը։ Հատկությունը արժեքավորվում է ConfigureFromDefinition մեթոդի կանչի արդյունքում՝ ծառի նկարագրության (TreeDefinition) AllowView հատկության հիման վրա։

Հատկության true արժեքի դեպքում ծառ-տեղեկատուի կոնտեքստային մենյուում ցուցադրվում է **«Դիտել/Խմբագրել»** կոնտեքստային ֆունկցիան՝ դիտման ռեժիմով (readonly)։
