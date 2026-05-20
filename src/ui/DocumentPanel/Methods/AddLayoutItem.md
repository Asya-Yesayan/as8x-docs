---
title: AddLayoutItem
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddLayoutItem(string, Control, string, HorizontalAlignment, bool) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected internal LayoutItemWithRequired AddLayoutItem(string name,
                                                        Control control,
                                                        string caption,
                                                        HorizontalAlignment horizontalAlignment,
                                                        bool addIsRequiredBinding = true)
```

Տրված դաշտի շուրջ ստեղծում է դասավորման տարր (**LayoutItemWithRequired**) և վերադարձնում է այն՝ գլխագրով և պարտադիր լինելու հայտանիշի կապով։ **caption** պարամետրի **null** արժեքի դեպքում դասավորման տարր չի ստեղծվում, դաշտի հորիզոնական դասավորման ռեժիմը նշանակվում է տրված արժեքով և վերադարձվում է **null**։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | — | Դասավորման տարրի ներքին անունը։ |
| control | Control | — | Փաթաթվող դաշտը։ |
| caption | string | — | Դասավորման տարրի գլխագիրը։ **null** արժեքի դեպքում դասավորման տարր չի ստեղծվում։ |
| horizontalAlignment | HorizontalAlignment | — | Դասավորման տարրի հորիզոնական դասավորման ռեժիմը։ |
| addIsRequiredBinding | bool | true | **true** արժեքի դեպքում դասավորման տարրը կապվում է դաշտի **IsRequired** հատկության հետ։ |