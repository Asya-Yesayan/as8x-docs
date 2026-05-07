---
title: ReportTitle
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.ReportTitle(IEnumerable<StoredValueInfo> storedValueInfos) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual string ReportTitle(IEnumerable<StoredValueInfo> storedValueInfos)
```

Ստեղծում է վերնագիր՝ ներառելով `storedValueInfos` արժեքները:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| storedValueInfos | IEnumerable<StoredValueInfo> | - | Պահված արժեքների հավաքածու: Եթե `null` կամ դատարկ է՝ վերադարձնում է `ReportTitle()`-ը: Հակառակ դեպքում ֆորմատ՝ `"{ReportTitle()}` {value1}, {value2}"`: |

**Վերադարձնում է**

Ֆորմատավորված վերնագիրը:

