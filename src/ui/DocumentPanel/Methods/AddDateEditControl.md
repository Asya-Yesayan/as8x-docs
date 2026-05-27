---
title: AddDateEditControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddDateEditControl(string, string, bool, bool, string, HorizontalAlignment) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public DateEditControl AddDateEditControl(string name,
                                          string caption,
                                          bool isRequired,
                                          bool useLongDate = false,
                                          string dataItemName = null,
                                          HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left)
```

Փաստաթղթի վահանակում ավելացնում է ամսաթվային դաշտ (**DateEditControl**) և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| isRequired | bool | - | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| useLongDate | bool | false | **true** արժեքի դեպքում օգտագործվում է երկար ամսաթվային ֆորմատը (`dd/mm/yyyy`), հակառակ դեպքում՝ կարճ ֆորմատը (`dd/mm/yy`)։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
