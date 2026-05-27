---
title: AddMultiSelectDropDownControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddMultiSelectDropDownControl(string, string, bool, IDropDownView, string, HorizontalAlignment) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public MultiSelectDropDownControl AddMultiSelectDropDownControl(string name,
                                                                string caption,
                                                                bool isRequired,
                                                                IDropDownView idv,
                                                                string dataItemName = null,
                                                                HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left)
```

Փաստաթղթի վահանակում ավելացնում է բազմակի ընտրությամբ բացվող ցուցակ (**MultiSelectDropDownControl**) և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| isRequired | bool | - | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| idv | IDropDownView | - | Բացվող ցուցակի տեսքի օբյեկտը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
