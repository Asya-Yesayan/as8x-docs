---
title: GetFolderFieldType(string, short, bool)
nav_exclude: true
---

# FieldTypeProvider.GetFolderFieldType(string, short, bool) մեթոդ

```c#
public static FolderFieldType GetFolderFieldType(string name, short length, bool isNullable = false)
```

Վերադարձնում է [FolderFieldType](../../system_types.md#folderfieldtype) դասի օբյեկտ քեշից կամ ստեղծում նորը քեշում բացակայության դեպքում և քեշավորում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| name            | string               | -              | Թղթապանակի ներքին անուն, որի առավելագույն թույլատրելի երկարությունը 20 նիշ է։ |
| length          | short                | -              | Թղթապանակի բանալու երկարություն։ |
| isNullable      | bool                 | false          | Կարող է ընդունել null արժեք, թե ոչ։ Լռությամբ արժեքը **false** է։ |
