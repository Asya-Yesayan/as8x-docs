---
title: GetStringValue
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.GetStringValue(string) մեթոդ

## Նկարագիր

**Դաս՝** [Document](../Document.md)

```c#
public string GetStringValue(string name)
```

Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) արժեքը՝ բերված string տիպի։ Եթե [փաստաթղթի նկարագրությունում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Defs/doc.html) նշված ներքին անունով դաշտը բացակայում է, ապա առաջանում է սխալ։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Փաստաթղթի դաշտի ներքին անունը։ |
