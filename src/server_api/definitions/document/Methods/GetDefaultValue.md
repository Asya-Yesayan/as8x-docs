---
title: GetDefaultValue
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.GetDefaultValue(string) մեթոդ

## Նկարագիր

**Դաս՝** [Document](../Document.md)

```c#
public object GetDefaultValue(string name)
```

Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) լռությամբ (default) արժեքը: Եթե [փաստաթղթի նկարագրությունում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Defs/doc.html) նշված ներքին անունով դաշտը բացակայում է, ապա առաջանում է սխալ։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Փաստաթղթի դաշտի ներքին անունը։ |


