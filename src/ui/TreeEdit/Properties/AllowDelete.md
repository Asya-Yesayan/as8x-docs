---
title: AllowDelete
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.AllowDelete հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual bool AllowDelete { get; internal set; }
```

Սահմանում է ծառի ընթացիկ տողի հեռացման իրավասությունը։ Հատկությունը արժեքավորվում է ConfigureFromDefinition մեթոդի կանչի արդյունքում՝ ծառի նկարագրության (TreeDefinition) AllowDelete հատկության հիման վրա։

Հատկության true արժեքի դեպքում ծառ-տեղեկատուի կոնտեքստային մենյուում ցուցադրվում է **«Հեռացնել»** կոնտեքստային ֆունկցիան, որի կատարման արդյունքում բացվող պատուհանը սահմանվում է Delete մեթոդով։
