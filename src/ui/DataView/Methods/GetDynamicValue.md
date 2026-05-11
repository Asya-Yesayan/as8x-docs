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

Վերադարձնում է դիտելու ձևի cell-ի արժեքը՝ ըստ փոխանցված տողի և սյան անվան։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| row | object | - | Դիտելու ձևի տողը։ |
| columnName | string | - | Սյան ներքին անունը։ |