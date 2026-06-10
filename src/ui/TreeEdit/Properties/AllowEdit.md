---
title: AllowEdit
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.AllowEdit հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual bool AllowEdit { get; internal set; }
```

Սահմանում է ծառի ընթացիկ տողի խմբագրման իրավասությունը։ Հատկությունը արժեքավորվում է ConfigureFromDefinition մեթոդի կանչի արդյունքում՝ ծառի նկարագրության (TreeDefinition) AllowEdit հատկության հիման վրա։

Հատկության true արժեքի դեպքում ծառ-տեղեկատուի կոնտեքստային մենյուում ցուցադրվում է **«Դիտել/Խմբագրել»** կոնտեքստային ֆունկցիան, որի կատարման արդյունքում բացվող պատուհանը սահմանվում է Edit մեթոդով։
