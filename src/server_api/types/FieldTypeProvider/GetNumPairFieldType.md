---
title: FieldTypeProvider.GetNumPairFieldType(NumericFieldType, NumericFieldType, string, bool) մեթոդ
---

```c#
public static NumPairFieldType GetNumPairFieldType(NumericFieldType numericField1, NumericFieldType numericField2, string comment, bool isNullable = false)
```

Վերադարձնում է [NumPairFieldType](../system_types.md#numericpositivefieldtype) դասի օբյեկտ քեշից կամ ստեղծում նորը քեշում բացակայության դեպքում և քեշավորում։

**Պարամետրեր**

* `numericField1` - NumericFieldType դասի օբյեկտ։
* `numericField2` - NumericFieldType դասի օբյեկտ։
* `comment` - Երկու արժեքների բաժանարար տեքստը։ Չփոխանցելու դեպքում կիրառվում է / նշանը։
* `isNullable` - Կարող է ընդունել null արժեք, թե ոչ։ Լռությամբ արժեքը **false** է։
