---
title: AddMemoEditControl
nav_exclude: true
---

# DialogWindow.AddMemoEditControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddMemoEditControl(string, string, short, bool, bool, HorizontalAlignment, StringRestriction)](#dialogwindowaddmemoeditcontrolstring-string-short-bool-bool-horizontalalignment-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է մեծ տեքստային (Memo) դաշտ։ |
| [AddMemoEditControl(LayoutGroup, string, string, short, bool, bool, HorizontalAlignment, StringRestriction)](#dialogwindowaddmemoeditcontrollayoutgroup-string-string-short-bool-bool-horizontalalignment-stringrestriction-մեթոդ) | Նշված դասավորման խմբում ավելացնում է մեծ տեքստային (Memo) դաշտ։ |

### DialogWindow.AddMemoEditControl(string, string, short, bool, bool, HorizontalAlignment, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MemoEditControl AddMemoEditControl(string name, string caption, short length = Constants.Common.LenFullCaption,
                                          bool isRequired = false, bool storeValue = true,
                                          HorizontalAlignment horizontalAlignment = HorizontalAlignment.Stretch,
                                          StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Երկխոսության պատուհանում ավելացնում է մեծ տեքստային (Memo) դաշտ, որը թույլ է տալիս մուտքագրել բազմատող տեքստ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | Constants.Common.LenFullCaption | Մուտքագրման տեքստի առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Stretch | Դաշտի հորիզոնական դասավորվածության ուղղությունը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |

#### Օրինակ

```c#
// երկխոսության պատուհանում ավելացնում է բազմատող տեքստային դաշտ՝ Նշումներ անվանումով 
var memo = AddMemoEditControl("notes", "Նշումներ");
```

### DialogWindow.AddMemoEditControl(LayoutGroup, string, string, short, bool, bool, HorizontalAlignment, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MemoEditControl AddMemoEditControl(LayoutGroup container, string name, string caption,
                                          short length = Constants.Common.LenFullCaption, bool isRequired = false,
                                          bool storeValue = true,
                                          HorizontalAlignment horizontalAlignment = HorizontalAlignment.Stretch,
                                          StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Նշված դասավորման խմբում ավելացնում է մեծ տեքստային (Memo) դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | Constants.Common.LenFullCaption | Մուտքագրման տեքստի առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Stretch | Դաշտի հորիզոնական դասավորվածության ուղղությունը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |

#### Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// նշված դասավորման խմբում ավելացնում է բազմատող տեքստային դաշտ՝ Նշումներ անվանումով 
var memo = AddMemoEditControl(group, "notes", "Նշումներ");
```
