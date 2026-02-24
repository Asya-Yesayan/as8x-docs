---
title: GetNumericFieldType
nav_exclude: true
---

# FieldTypeProvider.GetNumericFieldType(short, short, bool, string, bool) մեթոդ

```c#
public static NumericFieldType GetNumericFieldType(short fieldLength, short fractionalPartLength = 0,
                                                   bool useCurrencyFormat = false, string csType = "", bool isNullable = false)
```

Վերադարձնում է [NumericFieldType](../../system_types.md#numericfieldtype) դասի օբյեկտ քեշից կամ ստեղծում նորը քեշում բացակայության դեպքում և քեշավորում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| fieldLength     | short                | -              | Թվի նիշերի ընդհանուր քանակ։ Նիշերի առավելագույն քանակը կարող է լինել 19 (ներառյալ կետի նշանը)։ |
| fractionalPartLength | short                | 0              | Նիշերի քանակը կետից հետո, այսինքն կոտորակային մասի երկարությունը։ Կետից հետո նիշերի առավելագույն քանակը կարող է լինել 4։ |
| useCurrencyFormat | bool                 | false          | 1 արժեքի դեպքում դաշտի մեջ ցույց են տրվում հազարականների բաժանող ստորակետները։ Լռությամբ արժեքը 0։ |
| csType          | string               | ""             | — |
| isNullable      | bool                 | false          | Կարող է ընդունել null արժեք, թե ոչ։ Լռությամբ արժեքը **false** է։ |
