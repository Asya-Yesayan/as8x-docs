---
title: GetShortValue
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.GetShortValue(string) մեթոդ

## Նկարագիր

**Դաս՝** [Document](../Document.md)

```c#
public short GetShortValue(string name)
```

Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) արժեքը՝ բերված short տիպի։ Եթե [փաստաթղթի նկարագրությունում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Defs/doc.html) նշված ներքին անունով դաշտը բացակայում է, ապա առաջանում է սխալ։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Փաստաթղթի դաշտի ներքին անունը։ |


