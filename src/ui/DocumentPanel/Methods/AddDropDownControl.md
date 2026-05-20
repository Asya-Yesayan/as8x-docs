---
title: AddDropDownControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddDropDownControl(string, string, bool, IDropDownView, string, bool, HorizontalAlignment) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public DropDownControl AddDropDownControl(string name,
                                          string caption,
                                          bool isRequired,
                                          IDropDownView idv,
                                          string dataItemName = null,
                                          bool allowAdditionButtons = false,
                                          HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left)
```

Փաստաթղթի վահանակում ավելացնում է բացվող ցուցակ (**DropDownControl**) և վերադարձնում է այն։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի գլխագիրը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| idv | IDropDownView | — | Բացվող ցուցակի տեսքի օբյեկտը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| allowAdditionButtons | bool | false | **true** արժեքի դեպքում դաշտին ավելացվում են լրացուցիչ կոճակներ։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |