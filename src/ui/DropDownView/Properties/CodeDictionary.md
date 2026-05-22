---
title: CodeDictionary
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.CodeDictionary հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public Dictionary<string, int> CodeDictionary { get; protected set; }
```

Վերադարձնում է բացվող ցուցակի դիտելու ձևի կոդերի՝ ըստ տողի ինդեքսի համապատասխանեցման բառարանը։

Բառարանը լրացվում է [ReloadRows](../Methods/ReloadRows.md) մեթոդի կանչից հետո, երբ [CodeIsUnique](CodeIsUnique.md) հատկության արժեքը **true** է։ Կոնստրուկտորում նախնական արժեքը **null** է։
