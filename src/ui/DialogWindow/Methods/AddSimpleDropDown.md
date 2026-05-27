---
title: AddSimpleDropDown
nav_exclude: true
---

# DialogWindow.AddSimpleDropDown մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddSimpleDropDown(string, string, short, short, bool, short, bool, HorizontalAlignment, StringRestriction)](#dialogwindowaddsimpledropdownstring-string-short-short-bool-short-bool-horizontalalignment-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է պարզ popup տեսակի ընտրացանկով դաշտ։ |
| [AddSimpleDropDown(LayoutGroup, string, string, short, short, bool, short, bool, HorizontalAlignment, StringRestriction)](#dialogwindowaddsimpledropdownlayoutgroup-string-string-short-short-bool-short-bool-horizontalalignment-stringrestriction-մեթոդ) | Նշված դասավորման խմբում ավելացնում է պարզ popup տեսակի ընտրացանկով դաշտ։ |

### DialogWindow.AddSimpleDropDown(string, string, short, short, bool, short, bool, HorizontalAlignment, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public SimpleDropDown AddSimpleDropDown(string name, string caption, short codeLength,
                                        short commentLength = Constants.Common.LenComment,
                                        bool isRequired = false, short estimatedButtonsCount = 1,
                                        bool storeValue = true,
                                        HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                        StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Երկխոսության պատուհանում ավելացնում է պարզ popup տեսակի ընտրացանկով դաշտ (**SimpleDropDown**), որը չի օգտագործում տվյալների աղբյուր և թույլ է տալիս ձեռքով մուտքագրել կամ ընտրել կոդ ու մեկնաբանություն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| codeLength | short | — | Կոդի առավելագույն երկարությունը։ |
| commentLength | short | Constants.Common.LenComment | Մեկնաբանության առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորվածության ուղղությունը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |

#### Օրինակ

```c#
// երկխոսության պատուհանում ավելացնում է պարզ popup ընտրացանկ՝ առանց տվյալների աղբյուրի
var dropDown = AddSimpleDropDown("type", "Տեսակ", 10);
```

### DialogWindow.AddSimpleDropDown(LayoutGroup, string, string, short, short, bool, short, bool, HorizontalAlignment, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public SimpleDropDown AddSimpleDropDown(LayoutGroup container, string name, string caption,
                                        short codeLength, short commentLength = Constants.Common.LenComment,
                                        bool isRequired = false, short estimatedButtonsCount = 1, bool storeValue = true,
                                        HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                        StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Նշված դասավորման խմբում ավելացնում է պարզ popup տեսակի ընտրացանկով դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| codeLength | short | — | Կոդի առավելագույն երկարությունը։ |
| commentLength | short | Constants.Common.LenComment | Մեկնաբանության առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորվածության ուղղությունը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |

#### Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// նշված դասավորման խմբում ավելացնում է պարզ popup ընտրացանկ
var dropDown = AddSimpleDropDown(group, "type", "Տեսակ", 10);
```

