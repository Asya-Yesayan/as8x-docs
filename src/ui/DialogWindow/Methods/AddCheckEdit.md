---
title: AddCheckEdit
nav_exclude: true
---

# DialogWindow.AddCheckEdit մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddCheckEdit(string, string, bool, bool)](#dialogwindowaddcheckeditstring-string-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է նշիչ (CheckBox) դաշտ։ |
| [AddCheckEdit(LayoutGroup, string, string, bool, bool)](#dialogwindowaddcheckeditlayoutgroup-string-string-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է նշիչ (CheckBox) դաշտ։ |

### DialogWindow.AddCheckEdit(string, string, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public CheckEditExt AddCheckEdit(string name, string caption, bool storeValue = true, bool isThreeState = false);
```

Երկխոսության պատուհանում ավելացնում է նշիչ (CheckBox) դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| isThreeState | bool | false | **true** արժեքի դեպքում դաշտը աջակցում է երեք վիճակ՝ նշված, չնշված և չորոշված։ |

**Վերադարձնում է**

Ստեղծված **CheckEditExt** դաշտը։

### DialogWindow.AddCheckEdit(LayoutGroup, string, string, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public CheckEditExt AddCheckEdit(LayoutGroup container, string name, string caption,
                                 bool storeValue = true, bool isThreeState = false);
```

Նշված դասավորման խմբում ավելացնում է նշիչ (CheckBox) դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| isThreeState | bool | false | **true** արժեքի դեպքում դաշտը աջակցում է երեք վիճակ։ |

**Վերադարձնում է**

Ստեղծված **CheckEditExt** դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
