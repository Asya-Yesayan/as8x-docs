---
title: AddDynamicTreeDropDownControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddDynamicTreeDropDownControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddDynamicTreeDropDownControl(string, string, string, string, bool, bool, string, bool, HorizontalAlignment, bool)](#documentpaneladddynamictreedropdowncontrolstring-string-string-string-bool-bool-string-bool-horizontalalignment-bool-մեթոդ) | Փաստաթղթի վահանակում ավելացնում է դինամիկ ծառային բացվող ցուցակ (**TreeDropDownControl**)՝ տրված ծնող հանգույցով, որի ենթահանգույցները ցուցադրվում են ցուցակում և վերադարձնում է այն։ |
| [AddDynamicTreeDropDownControl(string, string, string, List&lt;TreeElementModel&gt;, bool, bool, short, string, bool, HorizontalAlignment, bool)](#documentpaneladddynamictreedropdowncontrolstring-string-string-listtreeelementmodel-bool-bool-short-string-bool-horizontalalignment-bool-մեթոդ) | Փաստաթղթի վահանակում ավելացնում է դինամիկ ծառային բացվող ցուցակ (**TreeDropDownControl**)՝ տրված հանգույցների ցուցակով, որոնք ձևավորում են ծառի կառուցվածքը և վերադարձնում է այն։ |

### DocumentPanel.AddDynamicTreeDropDownControl(string, string, string, string, bool, bool, string, bool, HorizontalAlignment, bool) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public TreeDropDownControl AddDynamicTreeDropDownControl(string name,
                                                        string caption,
                                                        string treeId,
                                                        string parentNode,
                                                        bool isFullTree,
                                                        bool isRequired,
                                                        string dataItemName = null,
                                                        bool selectRootsOnly = false,
                                                        HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                                        bool isExpanded = false)
```

Փաստաթղթի վահանակում ավելացնում է դինամիկ ծառային բացվող ցուցակ (**TreeDropDownControl**)՝ տրված ծնող հանգույցով, որի ենթահանգույցները ցուցադրվում են ցուցակում և վերադարձնում է այն։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| treeId | string | - | Ծառի ներքին անունը (id)։ |
| parentNode | string | - | Ծառի ծնող հանգույցի ներքին անունը, որի ենթահանգույցները պետք է ցուցադրվեն։ |
| isFullTree | bool | - | **true** արժեքի դեպքում ցուցադրվում է ամբողջական ծառը, **false** արժեքի դեպքում՝ սահմանված ենթաբազմությունը։ |
| isRequired | bool | - | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| selectRootsOnly | bool | false | **true** արժեքի դեպքում թույլատրված է ընտրել միայն ծառի արմատային հանգույցները։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
| isExpanded | bool | false | **true** արժեքի դեպքում ծառի հանգույցները բացված տեսքով են ցուցադրվում։ |

### DocumentPanel.AddDynamicTreeDropDownControl(string, string, string, List&lt;TreeElementModel&gt;, bool, bool, short, string, bool, HorizontalAlignment, bool) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public TreeDropDownControl AddDynamicTreeDropDownControl(string name,
                                                        string caption,
                                                        string treeId,
                                                        List<TreeElementModel> treeElements,
                                                        bool isFullTree,
                                                        bool isRequired,
                                                        short codeLength,
                                                        string dataItemName = null,
                                                        bool selectRootsOnly = false,
                                                        HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                                        bool isExpanded = false)
```

Փաստաթղթի վահանակում ավելացնում է դինամիկ ծառային բացվող ցուցակ (**TreeDropDownControl**)՝ տրված հանգույցների ցուցակով, որոնք ձևավորում են ծառի կառուցվածքը և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| treeId | string | - | Ծառի ներքին անունը (id)։ |
| treeElements | List&lt;TreeElementModel&gt; | - | Ծառի հանգույցների ցուցակը։ |
| isFullTree | bool | - | **true** արժեքի դեպքում ցուցադրվում է ամբողջական ծառը, **false** արժեքի դեպքում՝ սահմանված ենթաբազմությունը։ |
| isRequired | bool | - | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| codeLength | short | - | Ծառի հանգույցի կոդի երկարությունը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| selectRootsOnly | bool | false | **true** արժեքի դեպքում թույլատրված է ընտրել միայն ծառի արմատային հանգույցները։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
| isExpanded | bool | false | **true** արժեքի դեպքում ծառի հանգույցները բացված տեսքով են ցուցադրվում։ |
