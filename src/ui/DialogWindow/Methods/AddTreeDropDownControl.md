---
title: AddTreeDropDownControl
nav_exclude: true
---

# DialogWindow.AddTreeDropDownControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddTreeDropDownControl(string, string, string, bool, bool, bool, bool, bool, bool)](#dialogwindowaddtreedropdowncontrolstring-string-string-bool-bool-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է թռուցիկ ընտրացանկով ծառային դաշտ։ |
| [AddTreeDropDownControl(LayoutGroup, string, string, string, bool, bool, bool, bool, bool, bool)](#dialogwindowaddtreedropdowncontrollayoutgroup-string-string-string-bool-bool-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է թռուցիկ ընտրացանկով ծառային դաշտ։ |

### DialogWindow.AddTreeDropDownControl(string, string, string, bool, bool, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TreeDropDownControl AddTreeDropDownControl(string name, string caption, string treeId, bool isFullTree,
                                                  bool selectRootsOnly = false, bool isRequired = false,
                                                  bool storeValue = true, bool showComment = true,
                                                  bool isExpanded = false);
```

Երկխոսության պատուհանում ավելացնում է թռուցիկ ընտրացանկով ծառային դաշտ (**TreeDropDownControl**)՝ տրված ծառի սահմանման հիման վրա։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| treeId | string | — | Ծառի սահմանման ներքին անունը։ |
| isFullTree | bool | — | Որոշում է, արդյոք ծառը ամբողջական (full) ծառ է։ |
| selectRootsOnly | bool | false | **true** արժեքի դեպքում թույլատրվում է ընտրել միայն արմատային հանգույցները։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| showComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |

**Վերադարձնում է**

Ստեղծված **TreeDropDownControl** դաշտը։

### DialogWindow.AddTreeDropDownControl(LayoutGroup, string, string, string, bool, bool, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public TreeDropDownControl AddTreeDropDownControl(LayoutGroup container, string name, string caption, string treeId,
                                                  bool isFullTree, bool selectRootsOnly = false,
                                                  bool isRequired = false, bool storeValue = true,
                                                  bool showComment = true, bool isExpanded = false);
```

Նշված դասավորման խմբում ավելացնում է թռուցիկ ընտրացանկով ծառային դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| treeId | string | — | Ծառի սահմանման ներքին անունը։ |
| isFullTree | bool | — | Որոշում է, արդյոք ծառը ամբողջական ծառ է։ |
| selectRootsOnly | bool | false | Միայն արմատային հանգույցների ընտրման թույլատվությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| showComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |

**Վերադարձնում է**

Ստեղծված **TreeDropDownControl** դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
