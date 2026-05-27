---
title: StoredValues
nav_exclude: true
---

# DialogWindow.StoredValues հատկություն

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public IReadOnlyList<StoreValueDescriptor> StoredValues { get; }
```

Վերադարձնում է երկխոսության պատուհանի պահպանվող արժեքների նկարագրությունների ցուցակը։ 

## Օրինակ

```c#
// անցնում է պահպանվող արժեքների նկարագրություններով և ստանում համապատասխան դաշտերը
foreach (var storedValue in StoredValues)
{
    var control = GetControl(storedValue.Name);
}
```
