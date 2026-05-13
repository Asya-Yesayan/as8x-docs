---
title: AddDropDownCommentControl
nav_exclude: true
---

# DialogWindow.AddDropDownCommentControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddDropDownCommentControl(string, string, IDropDownView, bool, bool, short, short, short, HorizontalAlignment, StringRestriction)](#dialogwindowadddropdowncommentcontrolstring-string-idropdownview-bool-bool-short-short-short-horizontalalignment-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է թռուցիկ ընտրացանկով և մեկնաբանության տողով դաշտ։ |
| [AddDropDownCommentControl(LayoutGroup, string, string, IDropDownView, bool, bool, short, short, short, HorizontalAlignment, StringRestriction)](#dialogwindowadddropdowncommentcontrollayoutgroup-string-string-idropdownview-bool-bool-short-short-short-horizontalalignment-stringrestriction-մեթոդ) | Նշված դասավորման խմբում ավելացնում է թռուցիկ ընտրացանկով և մեկնաբանության տողով դաշտ։ |

### DialogWindow.AddDropDownCommentControl(string, string, IDropDownView, bool, bool, short, short, short, HorizontalAlignment, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DropDownCommentControl AddDropDownCommentControl(string name, string caption, IDropDownView idv,
                                                        bool isRequired = false, bool storeValue = true,
                                                        short codeLength = Constants.Common.LenComment,
                                                        short commentLength = 0, short estimatedButtonsCount = 1,
                                                        HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                                        StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Երկխոսության պատուհանում ավելացնում է թռուցիկ ընտրացանկով դաշտ՝ կոդի և մեկնաբանության տողերով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| idv | IDropDownView | — | Տվյալների աղբյուրի թռուցիկ ընտրացանկի նկարագրությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| codeLength | short | Constants.Common.LenComment | Կոդի դաշտի երկարությունը։ |
| commentLength | short | 0 | Մեկնաբանության դաշտի երկարությունը։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դիրքավորումը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Տողի վալիդացիայի սահմանափակումը։ |

**Վերադարձնում է**

Ստեղծված **DropDownCommentControl** դաշտը։

### DialogWindow.AddDropDownCommentControl(LayoutGroup, string, string, IDropDownView, bool, bool, short, short, short, HorizontalAlignment, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DropDownCommentControl AddDropDownCommentControl(LayoutGroup container, string name, string caption,
                                                        IDropDownView idv, bool isRequired = false, bool storeValue = true,
                                                        short codeLength = Constants.Common.LenComment,
                                                        short commentLength = 0, short estimatedButtonsCount = 1,
                                                        HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                                        StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Նշված դասավորման խմբում ավելացնում է թռուցիկ ընտրացանկով և մեկնաբանության տողով դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| idv | IDropDownView | — | Տվյալների աղբյուրի թռուցիկ ընտրացանկի նկարագրությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| codeLength | short | Constants.Common.LenComment | Կոդի դաշտի երկարությունը։ |
| commentLength | short | 0 | Մեկնաբանության դաշտի երկարությունը։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դիրքավորումը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Տողի վալիդացիայի սահմանափակումը։ |

**Վերադարձնում է**

Ստեղծված **DropDownCommentControl** դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
