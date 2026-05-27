---
title: AllowStoreValues
nav_exclude: true
---

# DialogWindow.AllowStoreValues հատկություն

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public bool AllowStoreValues { get; }
```

Վերադարձնում է **true**, եթե երկխոսության պատուհանում միացված է արժեքների պահպանման հնարավորությունը։

## Օրինակ

```c#
// արժեքների պահպանման հնարավորության դեպքում ավելացնում է պահպանման կոճակները
if (AllowStoreValues)
{
    AddStoreValuesButton();
}
```
