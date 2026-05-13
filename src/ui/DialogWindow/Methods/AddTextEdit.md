---
title: AddTextEdit
nav_exclude: true
---

# DialogWindow.AddTextEdit մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddTextEdit(string, string, short, bool, bool, StringRestriction)](#dialogwindowaddtexteditstring-string-short-bool-bool-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է տեքստային մուտքագրման դաշտ։ |
| [AddTextEdit(LayoutGroup, string, string, short, bool, bool, StringRestriction)](#dialogwindowaddtexteditlayoutgroup-string-string-short-bool-bool-stringrestriction-մեթոդ) | Նշված դասավորման խմբում ավելացնում է տեքստային մուտքագրման դաշտ։ |

### DialogWindow.AddTextEdit(string, string, short, bool, bool, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TextEditExt AddTextEdit(string name, string caption, short length,
                               bool isRequired = false, bool storeValue = true,
                               StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Երկխոսության պատուհանում ավելացնում է տեքստային մուտքագրման դաշտ (**TextEditExt**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Մուտքագրման տեքստի առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Տողի վալիդացիայի սահմանափակումը։ |

**Վերադարձնում է**

Ստեղծված **TextEditExt** դաշտը։

### DialogWindow.AddTextEdit(LayoutGroup, string, string, short, bool, bool, StringRestriction) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TextEditExt AddTextEdit(LayoutGroup container, string name, string caption, short length,
                               bool isRequired = false, bool storeValue = true,
                               StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI);
```

Նշված դասավորման խմբում ավելացնում է տեքստային մուտքագրման դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Մուտքագրման տեքստի առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Տողի վալիդացիայի սահմանափակումը։ |

**Վերադարձնում է**

Ստեղծված **TextEditExt** դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
