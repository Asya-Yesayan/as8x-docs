---
title: AddThreeStateBoolComboBox
nav_exclude: true
---

# DialogWindow.AddThreeStateBoolComboBox մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddThreeStateBoolComboBox(string, string, bool)](#dialogwindowaddthreestateboolcomboboxstring-string-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է երեք վիճակ ընդունող **ComboBoxEditExt** դաշտ։ |
| [AddThreeStateBoolComboBox(LayoutGroup, string, string, bool)](#dialogwindowaddthreestateboolcomboboxlayoutgroup-string-string-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է երեք վիճակ ընդունող ընտրացանկ։ |

### DialogWindow.AddThreeStateBoolComboBox(string, string, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public ComboBoxEditExt AddThreeStateBoolComboBox(string name, string caption, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է երեք վիճակ ընդունող **ComboBoxEditExt** դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |


### DialogWindow.AddThreeStateBoolComboBox(LayoutGroup, string, string, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public ComboBoxEditExt AddThreeStateBoolComboBox(LayoutGroup container, string name, string caption,
                                                 bool storeValue = true);
```

Նշված դասավորման խմբում (LayoutGroup) ավելացնում է երեք վիճակ ընդունող **ComboBoxEditExt** դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

