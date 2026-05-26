---
title: Validate
parent: "Մեթոդներ"
grand_parent: "DropDownView"
---

# DropDownView.Validate(ref string value) մեթոդ

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual (bool, string) Validate(ref string value)
```

Սահմանում է DropDownView-ի համար տրված արժեքի վավերականության ստուգման գործողությունը։

null արժեքի դեպքում value պարամետրը չի փոփոխվում և վերադարձնում է (false, դատարկ տող)։

Մեթոդը չմշակելու դեպքում value-ն trim է արվում, ապա ստուգվում է ցուցակում։ Տողերը դեռ բեռնված չլինելու և [Validator](../Properties/Validator.md) հատկության առկայության դեպքում վավերականությունը ստուգվում է Validator-ի միջոցով, հակառակ դեպքում կանչվում է [ReloadRows](ReloadRows.md)։ [CodeIsUnique](../Properties/CodeIsUnique.md) հատկության true արժեքի դեպքում որոնումը կատարվում է CodeDictionary-ի միջոցով, հակառակ դեպքում՝ տողերի ցուցակի ամբողջական անցումով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | string | - | Ստուգվող կոդի արժեքը։ |

