---
title: GetISN
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.GetISN(object row) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual int GetISN(object row)
```

Վերադարձնում է տրված row-ի ISN արժեքը:

Կանչվում է `EditDocument`-ի, `DeleteDocument`-ի,
`LoadUpdatedRows`-ի կողմից:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| row | object | - | Row-ի օբյեկտը, որը implements `IRowWithISN`: `null` կամ ոչ-ISN row-ը կնետի `InvalidCastException`: |

**Վերադարձնում է**

Փաստաթղթի ISN (internal serial number):

