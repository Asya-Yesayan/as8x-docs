---
title: GetNumPairFieldType
nav_exclude: true
---

# FieldTypeProvider.GetNumPairFieldType(NumericFieldType, NumericFieldType, string, bool) մեթոդ

```c#
public static NumPairFieldType GetNumPairFieldType(NumericFieldType numericField1, NumericFieldType numericField2, string comment, bool isNullable = false)
```

Վերադարձնում է [NumPairFieldType](../../system_types.md#numericpositivefieldtype) դասի օբյեկտ քեշից կամ ստեղծում նորը քեշում բացակայության դեպքում և քեշավորում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| numericField1   | NumericFieldType     | -              | NumericFieldType դասի օբյեկտ։ |
| numericField2   | NumericFieldType     | -              | NumericFieldType դասի օբյեկտ։ |
| comment         | string               | -              | Երկու արժեքների բաժանարար տեքստը։ Չփոխանցելու դեպքում կիրառվում է / նշանը։ |
| isNullable      | bool                 | false          | Կարող է ընդունել null արժեք, թե ոչ։ Լռությամբ արժեքը **false** է։ |
