---
title: AddCheckEdit
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---
# DocumentPanel&lt;T&gt;.AddCheckEdit(string, string, string, bool, HorizontalAlignment) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public CheckEditExt AddCheckEdit(string name,
                                 string caption,
                                 string dataItemName = null,
                                 bool isThreeState = false,
                                 HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left)
```

Փաստաթղթի վահանակում ավելացնում է նշիչ (CheckBox) դաշտ (**CheckEditExt**) և վերադարձնում է այն։ Դաշտը կարող է սատարել երեք վիճակ՝ նշված, չնշված և անորոշ։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի գլխագիրը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| isThreeState | bool | false | **true** արժեքի դեպքում դաշտը սատարում է երեք վիճակ (նշված, չնշված, անորոշ), հակառակ դեպքում՝ միայն երկու վիճակ (նշված, չնշված)։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |