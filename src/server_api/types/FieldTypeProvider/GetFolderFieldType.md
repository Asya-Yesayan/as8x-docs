---
title: FieldTypeProvider.GetFolderFieldType(string, short, bool) մեթոդ
---

```c#
public static FolderFieldType GetFolderFieldType(string name, short length, bool isNullable = false)
```

Վերադարձնում է [FolderFieldType](../system_types.md#folderfieldtype) դասի օբյեկտ քեշից կամ ստեղծում նորը քեշում բացակայության դեպքում և քեշավորում։

**Պարամետրեր**

* `name` - Թղթապանակի ներքին անուն, որի առավելագույն թույլատրելի երկարությունը 20 նիշ է։
* `length` - Թղթապանակի բանալու երկարություն։
* `isNullable` - Կարող է ընդունել null արժեք, թե ոչ։ Լռությամբ արժեքը **false** է։
