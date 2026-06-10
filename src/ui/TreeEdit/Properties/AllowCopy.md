---
title: AllowCopy
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.AllowCopy հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual bool AllowCopy { get; internal set; }
```

Սահմանում է ծառի ընթացիկ տողի պատճենման իրավասությունը։ Հատկության լռությամբ արժեքը true է. ConfigureFromDefinition մեթոդը այն ուղղակիորեն true է սահմանում՝ անկախ ծառի սահմանումից։

Հատկության true արժեքի դեպքում ծառ-տեղեկատուի կոնտեքստային մենյուում ցուցադրվում է **«Պատճենել»** կոնտեքստային ֆունկցիան, որի կատարման արդյունքում բացվող պատուհանը սահմանվում է CreateCopy մեթոդով։
