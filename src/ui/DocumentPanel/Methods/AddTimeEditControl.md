---
title: AddTimeEditControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddTimeEditControl(string, string, bool, bool, string, HorizontalAlignment) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public TimeEditControl AddTimeEditControl(string name,
                                          string caption,
                                          bool isRequired,
                                          bool showSeconds = false,
                                          string dataItemName = null,
                                          HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left)
```

Փաստաթղթի վահանակում ավելացնում է ժամի մուտքագրման դաշտ (**TimeEditControl**) և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| isRequired | bool | - | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| showSeconds | bool | false | **true** արժեքի դեպքում ցուցադրվում են նաև վայրկյանները (`hh:mm:ss`), հակառակ դեպքում՝ միայն ժամ և րոպե (`hh:mm`)։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
