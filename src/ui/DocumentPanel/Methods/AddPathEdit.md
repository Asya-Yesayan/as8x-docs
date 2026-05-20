---
title: AddPathEdit
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddPathEdit(string, string, short, DialogType, bool, string, string, HorizontalAlignment) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public BrowsePathEditExt AddPathEdit(string name,
                                     string caption,
                                     short length,
                                     DialogType dialogType,
                                     bool isRequired = false,
                                     string dialogFilter = null,
                                     string dataItemName = null,
                                     HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left)
```

Փաստաթղթի վահանակում ավելացնում է ֆայլի կամ թղթապանակի ուղու ընտրման դաշտ (**BrowsePathEditExt**) և վերադարձնում է այն։ Դաշտի լայնությունը հաշվարկվում է տրված առավելագույն երկարության հիման վրա, եթե հորիզոնական դասավորման ռեժիմը **Stretch** չէ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի գլխագիրը։ |
| length | short | — | Դաշտում թույլատրելի նիշերի առավելագույն քանակը։ |
| dialogType | DialogType | — | Ուղու ընտրման երկխոսության տիպը (ֆայլ, թղթապանակ կամ ֆայլերի պահպանում)։ |
| isRequired | bool | false | **true** արժեքի դեպքում դաշտը պարտադիր լրացման է։ |
| dialogFilter | string | null | Ֆայլերի ընտրման դիալոգի զտիչը։ **null** արժեքի դեպքում ցուցադրվում են բոլոր ֆայլերի տիպերը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |