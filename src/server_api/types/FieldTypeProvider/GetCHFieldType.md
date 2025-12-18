---
title: FieldTypeProvider.GetCHFieldType(string, short, short, bool) մեթոդ
---

```c#
public static CHFieldType GetCHFieldType(string name, short length, short commentLength = 0, bool isNullable = false)
```

Վերադարձնում է [CHFieldType]../system_types.md#chfieldtype) դասի օբյեկտ քեշից կամ ստեղծում նորը քեշում բացակայության դեպքում և քեշավորում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| name            | string               | -              | Ծառ-տեղեկատուի կամ թղթապանակի ներքին անունը, որը համարվում է մեկնաբանության աղբյուր։ |
| length          | short                | -              | Թույլատրելի նիշերի քանակը։ Առավելագույնը 512։ |
| commentLength   | short                | 0              | Դաշտի կողքից գրվող տեքստի նիշերի քանակ։ Լռությամբ արժեքը **0** է, այլ կերպ ասած ուղեկցող տեքստը բացակայում է։ |
| isNullable      | bool                 | false          | Կարող է ընդունել null արժեք, թե ոչ։ Լռությամբ արժեքը **false** է։ |
