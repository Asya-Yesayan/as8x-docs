---
title: FieldTypeProvider.GetFileFieldType(string, bool) մեթոդ
---

```c#
public static FileFieldType GetFileFieldType(string fileTypes, bool isNullable = false)
```

Վերադարձնում է FileFieldType դասի օբյեկտ քեշից կամ ստեղծում նորը քեշում բացակայության դեպքում և քեշավորում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| fileTypes       | string               | -              | ?? |
| isNullable      | bool                 | false          | Կարող է ընդունել null արժեք, թե ոչ։ Լռությամբ արժեքը **false** է։ |
