---
title: AddNumPairControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddNumPairControl(string, string, bool, string, string, string, HorizontalAlignment) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public NumPairControl AddNumPairControl(string name,
                                        string caption,
                                        bool isRequired,
                                        string separator = null,
                                        string comment = null,
                                        string dataItemName = null,
                                        HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left)
```

Փաստաթղթի վահանակում ավելացնում է թվային զույգի դաշտ (**NumPairControl**) և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| separator | string | null | Թվային զույգի երկու մասերի միջև ցուցադրվող բաժանարարի տեքստը։ |
| comment | string | null | Դաշտին կից մեկնաբանության տեքստը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
