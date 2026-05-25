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

Վերադարձնում է DropDownView-ի տրված կոդին համապատասխանող տողը։ Կոդին համապատասխանող տողի բացակայության դեպքում վերադարձվում է null։

Տողերը բեռնված չլինելու դեպքում առաջանում է **InvalidOperationException** տիպի սխալ։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | string | - | Որոնվող կոդի արժեքը։ |
