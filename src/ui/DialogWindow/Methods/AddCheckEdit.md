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

#### Օրինակ

```c#
// երկխոսության պատուհանում ավելացնում է Ակտիվ է անվանումով նշիչ դաշտ
var checkEdit = AddCheckEdit("isActive", "Ակտիվ է");
```

### DialogWindow.AddCheckEdit(LayoutGroup, string, string, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public CheckEditExt AddCheckEdit(LayoutGroup container, string name, string caption,
                                 bool storeValue = true, bool isThreeState = false);
```

Նշված դասավորման խմբում (LayoutGroup) ավելացնում է նշիչ (CheckBox) դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը (LayoutGroup), որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| isThreeState | bool | false | **true** արժեքի դեպքում դաշտը աջակցում է երեք վիճակ՝ նշված, չնշված և չորոշված։ |

#### Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// նշված դասավորման խմբում ավելացնում է Ակտիվ է նշիչ դաշտ
var checkEdit = AddCheckEdit(group, "isActive", "Ակտիվ է");
```
