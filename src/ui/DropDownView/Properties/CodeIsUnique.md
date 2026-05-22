---
title: CodeIsUnique
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.CodeIsUnique հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public abstract bool CodeIsUnique { get; }
```

Սահմանում է բացվող ցուցակի դիտելու ձևի կոդերի եզակիության հատկությունը։

Հատկության true արժեքի դեպքում [Validate](../Methods/Validate.md) և [GetRowByCode](../Methods/GetRowByCode.md) մեթոդներում կոդի որոնումը կատարվում է [CodeDictionary](CodeDictionary.md) բառարանի միջոցով, և տողերի վերբեռնումից հետո լրացվում է CodeDictionary-ը։
