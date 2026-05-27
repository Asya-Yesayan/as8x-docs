---
title: AddDynamicTreeDropDownControl
nav_exclude: true
---

# DialogWindow.AddDynamicTreeDropDownControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddDynamicTreeDropDownControl(string, string, string, string, bool, bool, bool, bool, bool, bool)](#dialogwindowadddynamictreedropdowncontrolstring-string-string-string-bool-bool-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է դինամիկ popup տեսակի ընտրացանկով ծառային դաշտ՝ ծառի սահմանումից ընտրված ծնող հանգույցի զավակ հանգույցները ցուցադրելու համար։ |
| [AddDynamicTreeDropDownControl(LayoutGroup, string, string, string, string, bool, bool, bool, bool, bool, bool)](#dialogwindowadddynamictreedropdowncontrollayoutgroup-string-string-string-string-bool-bool-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է դինամիկ popup տեսակի ընտրացանկով ծառային դաշտ՝ ծնող հանգույցի զավակների ցուցադրմամբ։ |
| [AddDynamicTreeDropDownControl(string, string, string, List&lt;TreeElementModel&gt;, bool, short, bool, bool, bool, bool, bool)](#dialogwindowadddynamictreedropdowncontrolstring-string-string-listtreeelementmodel-bool-short-bool-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է դինամիկ popup տեսակի ընտրացանկով ծառային դաշտ՝ ծրագրային եղանակով տրված հանգույցների ցուցակով։ |
| [AddDynamicTreeDropDownControl(LayoutGroup, string, string, string, List&lt;TreeElementModel&gt;, bool, short, bool, bool, bool, bool, bool)](#dialogwindowadddynamictreedropdowncontrollayoutgroup-string-string-string-listtreeelementmodel-bool-short-bool-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է դինամիկ popup տեսակի ընտրացանկով ծառային դաշտ՝ ծրագրային եղանակով տրված հանգույցների ցուցակով։ |

### DialogWindow.AddDynamicTreeDropDownControl(string, string, string, string, bool, bool, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TreeDropDownControl AddDynamicTreeDropDownControl(string name, string caption, string treeId, string parentNode,
                                                         bool isFullTree, bool selectRootsOnly = false,
                                                         bool isRequired = false, bool storeValue = true,
                                                         bool showComment = true, bool isExpanded = false);
```

Երկխոսության պատուհանում ավելացնում է դինամիկ ծառային դաշտ՝ popup տեսակի ընտրացանկով։ Ընտրացանկում ցուցադրվում են ծառի սահմանումից **parentNode** հանգույցի զավակ հանգույցները։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| treeId | string | — | Ծառի ներքին անունը։ |
| parentNode | string | — | Ծառի սահմանումից այն ծնող հանգույցը, որի զավակ հանգույցները պետք է ցուցադրվեն։ |
| isFullTree | bool | — | Որոշում է, արդյոք ծառը ամբողջական (full) ծառ է։ |
| selectRootsOnly | bool | false | **true** արժեքի դեպքում թույլատրվում է ընտրել միայն արմատային հանգույցները։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| showComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |

#### Օրինակ

```c#
// երկխոսության պատուհանում ավելացնում է դինամիկ ծառային դաշտ՝ «Departments» ծառի «test» հանգույցի զավակներով
var tree = AddDynamicTreeDropDownControl("dept", "Ստորաբաժանում", "Departments", "test", isFullTree: false);
```

### DialogWindow.AddDynamicTreeDropDownControl(LayoutGroup, string, string, string, string, bool, bool, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TreeDropDownControl AddDynamicTreeDropDownControl(LayoutGroup container, string name, string caption, string treeId,
                                                         string parentNode, bool isFullTree,
                                                         bool selectRootsOnly = false, bool isRequired = false,
                                                         bool storeValue = true, bool showComment = true,
                                                         bool isExpanded = false);
```

Նշված դասավորման խմբում ավելացնում է դինամիկ popup տեսակի ընտրացանկով ծառային դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| treeId | string | — | Ծառի ներքին անունը։ |
| parentNode | string | — | Ծնող հանգույցը, որի զավակները պետք է ցուցադրվեն։ |
| isFullTree | bool | — | Որոշում է, արդյոք ծառը ամբողջական ծառ է։ |
| selectRootsOnly | bool | false | Միայն արմատային հանգույցների ընտրման թույլատվությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| showComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |

#### Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// երկխոսության պատուհանում ավելացնում է դինամիկ ծառային դաշտ՝ «Departments» ծառի «test» հանգույցի զավակներով
var tree = AddDynamicTreeDropDownControl(group, "dept", "Ստորաբաժանում", "Departments", "test", isFullTree: false);
```

### DialogWindow.AddDynamicTreeDropDownControl(string, string, string, List&lt;TreeElementModel&gt;, bool, short, bool, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TreeDropDownControl AddDynamicTreeDropDownControl(string name, string caption, string treeId,
                                                         List<TreeElementModel> treeElements, bool isFullTree,
                                                         short codeLength, bool selectRootsOnly = false,
                                                         bool isRequired = false, bool storeValue = true,
                                                         bool showComment = true, bool isExpanded = false);
```

Երկխոսության պատուհանում ավելացնում է դինամիկ ծառային դաշտ՝ popup տեսակի ընտրացանկով, որտեղ ծառի հանգույցները տրվում են ծրագրային եղանակով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| treeId | string | — | Ծառի ներքին անունը։ |
| treeElements | List&lt;TreeElementModel&gt; | — | Ծառի հանգույցների ցուցակը։ |
| isFullTree | bool | — | Որոշում է, արդյոք ծառը ամբողջական ծառ է։ |
| codeLength | short | — | Ծառի հանգույցի կոդի երկարությունը։ |
| selectRootsOnly | bool | false | Միայն արմատային հանգույցների ընտրման թույլատվությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| showComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |

#### Օրինակ

```c#
// ծառի հանգույցների ցուցակը ձևավորվում է ծրագրային եղանակով
List<TreeElementModel> nodes = BuildDepartmentNodes();

// երկխոսության պատուհանում ավելացնում է դինամիկ ծառային դաշտ՝ տրված հանգույցներով
var tree = AddDynamicTreeDropDownControl("dept", "Ստորաբաժանում", "Departments", nodes, isFullTree: false, codeLength: 10);
```

### DialogWindow.AddDynamicTreeDropDownControl(LayoutGroup, string, string, string, List&lt;TreeElementModel&gt;, bool, short, bool, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TreeDropDownControl AddDynamicTreeDropDownControl(LayoutGroup container, string name, string caption,
                                                         string treeId, List<TreeElementModel> treeElements,
                                                         bool isFullTree, short codeLength,
                                                         bool selectRootsOnly = false, bool isRequired = false,
                                                         bool storeValue = true, bool showComment = true,
                                                         bool isExpanded = false);
```

Նշված դասավորման խմբում ավելացնում է դինամիկ popup տեսակի ընտրացանկով ծառային դաշտ՝ ծրագրային եղանակով տրված հանգույցների ցուցակով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| treeId | string | — | Ծառի ներքին անունը։ |
| treeElements | List&lt;TreeElementModel&gt; | — | Ծառի հանգույցների ցուցակը։ |
| isFullTree | bool | — | Որոշում է, արդյոք ծառը ամբողջական ծառ է։ |
| codeLength | short | — | Ծառի հանգույցի կոդի երկարությունը։ |
| selectRootsOnly | bool | false | Միայն արմատային հանգույցների ընտրման թույլատվությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| showComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |

#### Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// ծառի հանգույցների ցուցակը ձևավորվում է ծրագրային եղանակով
List<TreeElementModel> nodes = BuildDepartmentNodes();

// նշված խմբում ավելացնում է դինամիկ ծառային դաշտ՝ տրված հանգույցներով
var tree = AddDynamicTreeDropDownControl(group, "dept", "Ստորաբաժանում", "Departments", nodes, isFullTree: false, codeLength: 10);
```
