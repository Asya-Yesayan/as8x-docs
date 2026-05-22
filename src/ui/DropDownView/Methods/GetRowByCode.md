---
title: GetRowByCode
parent: "Մեթոդներ"
grand_parent: "DropDownView"
---

# DropDownView.GetRowByCode(string value) մեթոդ

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual R GetRowByCode(string value)
```

Վերադարձնում է բացվող ցուցակի դիտելու ձևի՝ տրված կոդին համապատասխանող տողը։

Տողերը դեռ բեռնված չլինելու դեպքում առաջանում է **InvalidOperationException** տիպի սխալ։ Կոդի բացակայության դեպքում վերադարձնում է **null**։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | string | - | Որոնվող կոդի արժեքը։ |

**Վերադարձնում է**

Տրված կոդին համապատասխանող տողը, կամ **null**՝ կոդը չգտնելու դեպքում։
