---
title: AddMultiFilterControl
nav_exclude: true
---

# DialogWindow.AddMultiFilterControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddMultiFilterControl(string, string, MultiFilterTypes, string, bool, IDropDownView, bool, bool, bool, bool)](#dialogwindowaddmultifiltercontrolstring-string-multifiltertypes-string-bool-idropdownview-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է բազմատեսակ ֆիլտրման դաշտ։ |
| [AddMultiFilterControl(LayoutGroup, string, string, MultiFilterTypes, string, bool, IDropDownView, bool, bool, bool, bool)](#dialogwindowaddmultifiltercontrollayoutgroup-string-string-multifiltertypes-string-bool-idropdownview-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է բազմատեսակ ֆիլտրման դաշտ։ |

### DialogWindow.AddMultiFilterControl(string, string, MultiFilterTypes, string, bool, IDropDownView, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MultiFilterControl AddMultiFilterControl(string name, string caption, MultiFilterTypes supportedFilterTypes,
                                                string treeId = "", bool isFullTree = false, IDropDownView idv = null,
                                                bool isRequired = false, bool storeValue = true,
                                                bool showComment = true, bool isExpanded = false);
```

Երկխոսության պատուհանում ավելացնում է բազմատեսակ ֆիլտրման դաշտ (**MultiFilterControl**), որը կարող է աշխատել ինչպես ծառային, այնպես էլ դիտելու ձևի վրա հիմնված տվյալների աղբյուրների հետ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| supportedFilterTypes | MultiFilterTypes | — | Դաշտի կողմից աջակցվող ֆիլտրի տիպերի հավաքածուն։ |
| treeId | string | "" | Ծառի սահմանման ներքին անունը, որը աջակցվում է դաշտի կողմից։ |
| isFullTree | bool | false | Որոշում է, արդյոք ծառը ամբողջական (full) ծառ է։ |
| idv | IDropDownView | null | Դիտելու ձևը, որը աջակցվում է դաշտի կողմից։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| showComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |


### DialogWindow.AddMultiFilterControl(LayoutGroup, string, string, MultiFilterTypes, string, bool, IDropDownView, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MultiFilterControl AddMultiFilterControl(LayoutGroup container, string name, string caption,
                                                MultiFilterTypes supportedFilterTypes,
                                                string treeId = "", bool isFullTree = false, IDropDownView idv = null,
                                                bool isRequired = false, bool storeValue = true,
                                                bool showComment = true, bool isExpanded = false);
```

Նշված դասավորման խմբում ավելացնում է բազմատեսակ ֆիլտրման դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| supportedFilterTypes | MultiFilterTypes | — | Դաշտի կողմից աջակցվող ֆիլտրի տիպերի հավաքածուն։ |
| treeId | string | "" | Ծառի սահմանման ներքին անունը։ |
| isFullTree | bool | false | Որոշում է, արդյոք ծառը ամբողջական ծառ է։ |
| idv | IDropDownView | null | Դիտելու ձևը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| showComment | bool | true | Որոշում է, արդյոք ցուցադրվի մեկնաբանությունը։ |
| isExpanded | bool | false | Որոշում է, արդյոք ծառի հանգույցները լինեն բացված։ |

