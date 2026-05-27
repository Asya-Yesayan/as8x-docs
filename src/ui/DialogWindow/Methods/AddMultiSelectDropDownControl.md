---
title: AddMultiSelectDropDownControl
nav_exclude: true
---

# DialogWindow.AddMultiSelectDropDownControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddMultiSelectDropDownControl(string, string, IDropDownView, bool, bool)](#dialogwindowaddmultiselectdropdowncontrolstring-string-idropdownview-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկից բազմակի ընտրությամբ դաշտ։ |
| [AddMultiSelectDropDownControl(LayoutGroup, string, string, IDropDownView, bool, bool)](#dialogwindowaddmultiselectdropdowncontrollayoutgroup-string-string-idropdownview-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է popup տեսակի ընտրացանկից բազմակի ընտրությամբ դաշտ։ |

### DialogWindow.AddMultiSelectDropDownControl(string, string, IDropDownView, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MultiSelectDropDownControl AddMultiSelectDropDownControl(string name, string caption, IDropDownView idv,
                                                                bool isRequired = false, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկից բազմակի ընտրությամբ դաշտ (**MultiSelectDropDownControl**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| idv | IDropDownView | — | popup տեսակի ընտրացանկի դիտելու ձևի նկարագրությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |


#### Օրինակ

```c#
// երկխոսության պատուհանում ավելացնում է բազմակի ընտրությամբ ընտրացանկ՝ դիտելու ձևի վրա հիմնված
var idv = ViewHelper.CreateDropDownView("Currencies");

var control = AddMultiSelectDropDownControl("currencies", "Արժույթներ", idv);
```

### DialogWindow.AddMultiSelectDropDownControl(LayoutGroup, string, string, IDropDownView, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MultiSelectDropDownControl AddMultiSelectDropDownControl(LayoutGroup container, string name, string caption,
                                                                IDropDownView idv, bool isRequired = false, bool storeValue = true);
```

Նշված դասավորման խմբում ավելացնում է popup տեսակի ընտրացանկից բազմակի ընտրությամբ դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| idv | IDropDownView | — | popup տեսակի ընտրացանկի դիտելու ձևի նկարագրությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

#### Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// նշված դասավորման խմբում ավելացնում է բազմակի ընտրությամբ ընտրացանկ՝ դիտելու ձևի վրա հիմնված
var idv = ViewHelper.CreateDropDownView("Currencies");
var control = AddMultiSelectDropDownControl(group, "currencies", "Արժույթներ", idv);
```

