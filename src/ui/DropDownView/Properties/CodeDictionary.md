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

Վերադարձնում կամ նշանակում է DropDownView-ի կոդերի և դրանց համապատասխանող տողերի ինդեքսների Dictionary-ն։ Dictionary-ն լրացվում է [ReloadRows](../Methods/ReloadRows.md) մեթոդի կանչից հետո, երբ [CodeIsUnique](CodeIsUnique.md) հատկության արժեքը **true** է։

Օգտագործվում է [GetRowByCode](../Methods/GetRowByCode.md) մեթոդի կողմից՝ կոդի հիման վրա տողի արագ որոնում իրականացնելու նպատակով։
