---
title: AddSimpleDropDown
nav_exclude: true
---

# DialogWindow.AddSimpleDropDown մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddSimpleDropDown(string, string, short, short, bool, short, bool, HorizontalAlignment, StringRestriction)](#dialogwindowaddsimpledropdownstring-string-short-short-bool-short-bool-horizontalalignment-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է պարզ թռուցիկ ընտրացանկով դաշտ։ |
| [AddSimpleDropDown(LayoutGroup, string, string, short, short, bool, short, bool, HorizontalAlignment, StringRestriction)](#dialogwindowaddsimpledropdownlayoutgroup-string-string-short-short-bool-short-bool-horizontalalignment-stringrestriction-մեթոդ) | Նշված դասավորման խմբում ավելացնում է պարզ թռուցիկ ընտրացանկով դաշտ։ |

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

Երկխոսության պատուհանում ավելացնում է պարզ թռուցիկ ընտրացանկով դաշտ (**SimpleDropDown**), որը չի օգտագործում տվյալների աղբյուր և թույլ է տալիս ձեռքով մուտքագրել կամ ընտրել կոդ ու մեկնաբանություն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| codeLength | short | — | Կոդի առավելագույն երկարությունը։ |
| commentLength | short | Constants.Common.LenComment | Մեկնաբանության առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դիրքավորումը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Տողի վալիդացիայի սահմանափակումը։ |

**Վերադարձնում է**

Ստեղծված **SimpleDropDown** դաշտը։

### DialogWindow.AddSimpleDropDown(LayoutGroup, string, string, short, short, bool, short, bool, HorizontalAlignment, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public SimpleDropDown AddSimpleDropDown(LayoutGroup container, string name, string caption,
                                        short codeLength, short commentLength = Constants.Common.LenComment,
                                        bool isRequired = false, short estimatedButtonsCount = 1, bool storeValue = true,
                                        HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                        StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Նշված դասավորման խմբում ավելացնում է պարզ թռուցիկ ընտրացանկով դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| codeLength | short | — | Կոդի առավելագույն երկարությունը։ |
| commentLength | short | Constants.Common.LenComment | Մեկնաբանության առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դիրքավորումը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Տողի վալիդացիայի սահմանափակումը։ |

**Վերադարձնում է**

Ստեղծված **SimpleDropDown** դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
