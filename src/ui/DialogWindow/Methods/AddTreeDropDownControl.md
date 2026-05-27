---
title: AddTreeDropDownControl
nav_exclude: true
---

# DialogWindow.AddTreeDropDownControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddTreeDropDownControl(string, string, string, bool, bool, bool, bool, bool, bool)](#dialogwindowaddtreedropdowncontrolstring-string-string-bool-bool-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ (**TreeDropDownControl**)՝ տրված ծառի սահմանման հիման վրա։ |
| [AddTreeDropDownControl(LayoutGroup, string, string, string, bool, bool, bool, bool, bool, bool)](#dialogwindowaddtreedropdowncontrollayoutgroup-string-string-string-bool-bool-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ՝ տրված ծառի սահմանման հիման վրա։ |

### DialogWindow.AddTreeDropDownControl(string, string, string, bool, bool, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TreeDropDownControl AddTreeDropDownControl(string name, string caption, string treeId, bool isFullTree,
                                                  bool selectRootsOnly = false, bool isRequired = false,
                                                  bool storeValue = true, bool showComment = true,
                                                  bool isExpanded = false);
```

Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ (**TreeDropDownControl**)՝ տրված ծառի սահմանման հիման վրա։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| treeId | string | — | Ծառի ներքին անունը։ |
| isFullTree | bool | — | Որոշում է, արդյոք ծառը ամբողջական (full) ծառ է։ |
| selectRootsOnly | bool | false | **true** արժեքի դեպքում թույլատրվում է ընտրել միայն արմատային հանգույցները։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| showComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |


#### Օրինակ

```c#
// երկխոսության պատուհանում ավելացնում է «Departments» ծառի popup ընտրացանկով դաշտ
var tree = AddTreeDropDownControl("dept", "Ստորաբաժանում", "Departments", isFullTree: false);
```

### DialogWindow.AddTreeDropDownControl(LayoutGroup, string, string, string, bool, bool, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TreeDropDownControl AddTreeDropDownControl(LayoutGroup container, string name, string caption, string treeId,
                                                  bool isFullTree, bool selectRootsOnly = false,
                                                  bool isRequired = false, bool storeValue = true,
                                                  bool showComment = true, bool isExpanded = false);
```

Նշված դասավորման խմբում (LayoutGroup) ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ՝ տրված ծառի սահմանման հիման վրա։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը (LayoutGroup), որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| treeId | string | — | Ծառի ներքին անունը։ |
| isFullTree | bool | — | Որոշում է, արդյոք ծառը ամբողջական (full) ծառ է։ |
| selectRootsOnly | bool | false | **true** արժեքի դեպքում թույլատրվում է ընտրել միայն արմատային հանգույցները։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| showComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |

#### Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// նշված դասավորման խմբում ավելացնում է ծառային popup ընտրացանկով դաշտ
var tree = AddTreeDropDownControl(group, "dept", "Ստորաբաժանում", "Departments", isFullTree: false);
```

