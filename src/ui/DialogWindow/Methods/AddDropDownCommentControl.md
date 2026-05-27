---
title: AddDropDownCommentControl
nav_exclude: true
---

# DialogWindow.AddDropDownCommentControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddDropDownCommentControl(string, string, IDropDownView, bool, bool, short, short, short, HorizontalAlignment, StringRestriction)](#dialogwindowadddropdowncommentcontrolstring-string-idropdownview-bool-bool-short-short-short-horizontalalignment-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով և մեկնաբանության տողով դաշտ։ |
| [AddDropDownCommentControl(LayoutGroup, string, string, IDropDownView, bool, bool, short, short, short, HorizontalAlignment, StringRestriction)](#dialogwindowadddropdowncommentcontrollayoutgroup-string-string-idropdownview-bool-bool-short-short-short-horizontalalignment-stringrestriction-մեթոդ) | Նշված դասավորման խմբում ավելացնում է popup տեսակի ընտրացանկով և մեկնաբանության տողով դաշտ։ |

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

Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով դաշտ՝ կոդի և մեկնաբանության տողերով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| idv | IDropDownView | — | Տվյալների աղբյուրի popup տեսակի ընտրացանկի նկարագրությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| codeLength | short | Constants.Common.LenComment | Կոդի դաշտի երկարությունը։ |
| commentLength | short | 0 | Մեկնաբանության դաշտի երկարությունը։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորվածության ուղղությունը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |

#### Օրինակ

```c#
// ստեղծում է popup ընտրացանկի դիտելու ձևը
var idv = ViewHelper.CreateDropDownView("Currencies");

// երկխոսության պատուհանում ավելացնում է կոդով և մեկնաբանությամբ ընտրացանկ
var control = AddDropDownCommentControl("currency", "Արժույթ", idv, isRequired: true);
```

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

Նշված դասավորման խմբում ավելացնում է popup տեսակի ընտրացանկով և մեկնաբանության տողով դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| idv | IDropDownView | — | Տվյալների աղբյուրի popup տեսակի ընտրացանկի նկարագրությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| codeLength | short | Constants.Common.LenComment | Կոդի դաշտի երկարությունը։ |
| commentLength | short | 0 | Մեկնաբանության դաշտի երկարությունը։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորվածության ուղղությունը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |

#### Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();
var idv = ViewHelper.CreateDropDownView("Currencies");

// նշված դասավորման խմբում ավելացնում է կոդով և մեկնաբանությամբ ընտրացանկ
var control = AddDropDownCommentControl(group, "currency", "Արժույթ", idv);
```
