---
title: FieldTypeProvider.GetStringFieldType(short, bool) մեթոդ
---

```c#
public static StringFieldType GetStringFieldType(short fieldLength, bool isNullable = false)
```

Վերադարձնում է [StringFieldType](../system_types.md#stringfieldtype) դասի օբյեկտ քեշից կամ ստեղծում նորը քեշում բացակայության դեպքում և քեշավորում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| fieldLength     | short                | -              | Տողային արժեքի մեջ առավելագույն նիշերի քանակ։ Առավելագույնը՝ 512։ |
| isNullable      | bool                 | false          | Կարող է ընդունել null արժեք, թե ոչ։ Լռությամբ արժեքը **false** է։ |

## Հատկություններ
