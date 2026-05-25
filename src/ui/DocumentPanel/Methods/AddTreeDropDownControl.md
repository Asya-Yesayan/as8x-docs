---
title: AddTreeDropDownControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddTreeDropDownControl(string, string, string, bool, bool, string, bool, HorizontalAlignment, bool) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public TreeDropDownControl AddTreeDropDownControl(string name,
                                                  string caption,
                                                  string treeId,
                                                  bool isFullTree,
                                                  bool isRequired,
                                                  string dataItemName = null,
                                                  bool selectRootsOnly = false,
                                                  HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                                  bool isExpanded = false)
```

Փաստաթղթի վահանակում ավելացնում է ծառային բացվող ցուցակ (**TreeDropDownControl**) և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| treeId | string | - | Ծառի ներքին անունը (id)։ |
| isFullTree | bool | - | **true** արժեքի դեպքում ցուցադրվում է ամբողջական ծառը, **false** արժեքի դեպքում՝ սահմանված ենթաբազմությունը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| selectRootsOnly | bool | false | **true** արժեքի դեպքում թույլատրված է ընտրել միայն ծառի արմատային հանգույցները։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
| isExpanded | bool | false | **true** արժեքի դեպքում ծառի հանգույցները բացված տեսքով են ցուցադրվում։ |
