---
title: AddButtonEdit
nav_exclude: true
---

# DialogWindow.AddButtonEdit մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddButtonEdit(string, string, short, bool, short, bool, StringRestriction)](#dialogwindowaddbuttoneditstring-string-short-bool-short-bool-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է կոճակով տեքստային մուտքագրման դաշտ։ |
| [AddButtonEdit(LayoutGroup, string, string, short, bool, short, bool, StringRestriction)](#dialogwindowaddbuttoneditlayoutgroup-string-string-short-bool-short-bool-stringrestriction-մեթոդ) | Նշված դասավորման խմբում ավելացնում է կոճակով տեքստային մուտքագրման դաշտ։ |

### DialogWindow.AddButtonEdit(string, string, short, bool, short, bool, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public ButtonEditExt AddButtonEdit(string name, string caption, short length,
                                   bool isRequired = false, short estimatedButtonsCount = 1, bool storeValue = true,
                                   StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Երկխոսության պատուհանում ավելացնում է կոճակով տեքստային մուտքագրման դաշտ (**ButtonEditExt**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Մուտքագրման տեքստի առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը, որի հիման վրա հաշվարկվում է դաշտի լայնությունը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Տողի վալիդացիայի սահմանափակումը (օրինակ՝ հայերեն ANSI-ի փոխարկելի, ռուսերեն ANSI-ի փոխարկելի կամ նույնականացուցիչ)։ |

**Վերադարձնում է**

Ստեղծված **ButtonEditExt** դաշտը։

### DialogWindow.AddButtonEdit(LayoutGroup, string, string, short, bool, short, bool, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public ButtonEditExt AddButtonEdit(LayoutGroup container, string name, string caption, short length,
                                   bool isRequired = false, short estimatedButtonsCount = 1, bool storeValue = true,
                                   StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Նշված դասավորման խմբում ավելացնում է կոճակով տեքստային մուտքագրման դաշտ (**ButtonEditExt**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Մուտքագրման տեքստի առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Տողի վալիդացիայի սահմանափակումը։ |

**Վերադարձնում է**

Ստեղծված **ButtonEditExt** դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
