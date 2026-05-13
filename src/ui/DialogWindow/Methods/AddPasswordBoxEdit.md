---
title: AddPasswordBoxEdit
nav_exclude: true
---

# DialogWindow.AddPasswordBoxEdit մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddPasswordBoxEdit(string, string, short, bool)](#dialogwindowaddpasswordboxeditstring-string-short-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է գաղտնաբառի մուտքագրման դաշտ։ |
| [AddPasswordBoxEdit(LayoutGroup, string, string, short, bool)](#dialogwindowaddpasswordboxeditlayoutgroup-string-string-short-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է գաղտնաբառի մուտքագրման դաշտ։ |

### DialogWindow.AddPasswordBoxEdit(string, string, short, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public PasswordBoxEditExt AddPasswordBoxEdit(string name, string caption, short length, bool isRequired = false);
```

Երկխոսության պատուհանում ավելացնում է գաղտնաբառի մուտքագրման դաշտ (**PasswordBoxEditExt**), որի մուտքագրված նիշերը էկրանին ցուցադրվում են քողարկված։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Գաղտնաբառի առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |

**Վերադարձնում է**

Ստեղծված **PasswordBoxEditExt** դաշտը։

### DialogWindow.AddPasswordBoxEdit(LayoutGroup, string, string, short, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public PasswordBoxEditExt AddPasswordBoxEdit(LayoutGroup container, string name, string caption, short length,
                                             bool isRequired = false);
```

Նշված դասավորման խմբում ավելացնում է գաղտնաբառի մուտքագրման դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Գաղտնաբառի առավելագույն երկարությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |

**Վերադարձնում է**

Ստեղծված **PasswordBoxEditExt** դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
