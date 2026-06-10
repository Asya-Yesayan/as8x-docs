---
title: AllowAddNode
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.AllowAddNode հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual bool AllowAddNode { get; internal set; }
```

Սահմանում է ծառի տողի ավելացման իրավասությունը։ Հատկությունը արժեքավորվում է ConfigureFromDefinition մեթոդի կանչի արդյունքում՝ ծառի նկարագրության (TreeDefinition) AllowAddNode հատկության հիման վրա։

Հատկության true արժեքի դեպքում ծառ-տեղեկատուի կոնտեքստային մենյուում ցուցադրվում է **«Ավելացնել»** կոնտեքստային ֆունկցիան, որի կատարման արդյունքում բացվող պատուհանը սահմանվում է Add մեթոդով։
