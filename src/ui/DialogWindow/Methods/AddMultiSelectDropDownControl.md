---
title: AddMultiSelectDropDownControl
nav_exclude: true
---

# DialogWindow.AddMultiSelectDropDownControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddMultiSelectDropDownControl(string, string, IDropDownView, bool, bool)](#dialogwindowaddmultiselectdropdowncontrolstring-string-idropdownview-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է թռուցիկ ընտրացանկից բազմակի ընտրությամբ դաշտ։ |
| [AddMultiSelectDropDownControl(LayoutGroup, string, string, IDropDownView, bool, bool)](#dialogwindowaddmultiselectdropdowncontrollayoutgroup-string-string-idropdownview-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է թռուցիկ ընտրացանկից բազմակի ընտրությամբ դաշտ։ |

### DialogWindow.AddMultiSelectDropDownControl(string, string, IDropDownView, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MultiSelectDropDownControl AddMultiSelectDropDownControl(string name, string caption, IDropDownView idv,
                                                                bool isRequired = false, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է թռուցիկ ընտրացանկից բազմակի ընտրությամբ դաշտ (**MultiSelectDropDownControl**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| idv | IDropDownView | — | Թռուցիկ ընտրացանկի դիտելու ձևի նկարագրությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

**Վերադարձնում է**

Ստեղծված **MultiSelectDropDownControl** դաշտը։

### DialogWindow.AddMultiSelectDropDownControl(LayoutGroup, string, string, IDropDownView, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MultiSelectDropDownControl AddMultiSelectDropDownControl(LayoutGroup container, string name, string caption,
                                                                IDropDownView idv, bool isRequired = false, bool storeValue = true);
```

Նշված դասավորման խմբում ավելացնում է թռուցիկ ընտրացանկից բազմակի ընտրությամբ դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| idv | IDropDownView | — | Թռուցիկ ընտրացանկի դիտելու ձևի նկարագրությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

**Վերադարձնում է**

Ստեղծված **MultiSelectDropDownControl** դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
