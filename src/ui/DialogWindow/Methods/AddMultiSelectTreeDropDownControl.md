---
title: AddMultiSelectTreeDropDownControl
nav_exclude: true
---

# DialogWindow.AddMultiSelectTreeDropDownControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddMultiSelectTreeDropDownControl(string, string, string, bool, bool, bool, bool, bool)](#dialogwindowaddmultiselecttreedropdowncontrolstring-string-string-bool-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ՝ բազմակի ընտրությամբ։ |
| [AddMultiSelectTreeDropDownControl(LayoutGroup, string, string, string, bool, bool, bool, bool, bool)](#dialogwindowaddmultiselecttreedropdowncontrollayoutgroup-string-string-string-bool-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ՝ բազմակի ընտրությամբ։ |

### DialogWindow.AddMultiSelectTreeDropDownControl(string, string, string, bool, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MultiSelectTreeDropDownControl AddMultiSelectTreeDropDownControl(string name, string caption, string treeId,
                                                                        bool isFullTree, bool selectRootsOnly = false,
                                                                        bool isRequired = false, bool storeValue = true,
                                                                        bool isExpanded = false);
```

Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ, որը թույլ է տալիս ընտրել ծառի մի քանի հանգույց միաժամանակ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| treeId | string | — | Ծառի ներքին անունը։ |
| isFullTree | bool | — | Որոշում է, արդյոք ծառը ամբողջական ծառ է։ |
| selectRootsOnly | bool | false | Միայն արմատային հանգույցների ընտրման թույլատվությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |


#### Օրինակ

```c#
// երկխոսության պատուհանում ավելացնում է ծառային դաշտ՝ մի քանի հանգույց ընտրելու հնարավորությամբ
var tree = AddMultiSelectTreeDropDownControl("depts", "Ստորաբաժանումներ", "Departments", isFullTree: false);
```

### DialogWindow.AddMultiSelectTreeDropDownControl(LayoutGroup, string, string, string, bool, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MultiSelectTreeDropDownControl AddMultiSelectTreeDropDownControl(LayoutGroup container, string name, string caption,
                                                                        string treeId, bool isFullTree,
                                                                        bool selectRootsOnly = false,
                                                                        bool isRequired = false, bool storeValue = true,
                                                                        bool isExpanded = false);
```

Նշված դասավորման խմբում ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ՝ բազմակի ընտրությամբ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| treeId | string | — | Ծառի ներքին անունը։ |
| isFullTree | bool | — | Որոշում է, արդյոք ծառը ամբողջական ծառ է։ |
| selectRootsOnly | bool | false | Միայն արմատային հանգույցների ընտրման թույլատվությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |

#### Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// նշված դասավորման խմբում ավելացնում է բազմակի ընտրությամբ ծառային դաշտ
var tree = AddMultiSelectTreeDropDownControl(group, "depts", "Ստորաբաժանումներ", "Departments", isFullTree: false);
```

