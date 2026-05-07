---
title: GetDynamicValue
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.GetDynamicValue(object row, string columnName) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public object GetDynamicValue(object row, string columnName)
```

Վերադարձնում է `ExtendableRow`-ի դինամիկ column-ի արժեքը:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| row | object | - | Row-ի օբյեկտը: Կasting-վում է `ExtendableRow`-ի: `null` կամ ոչ-`ExtendableRow`-ը կնետի `InvalidCastException`: |
| columnName | string | - | Դինամիկ column-ի անունը (case-sensitive): Extension-ի կամ custom հաշվարկի column-ի անունը: |

**Վերադարձնում է**

Column-ի արժեքը կամ `null`:

