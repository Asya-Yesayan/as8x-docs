---
title: AddSimpleDropDown
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddSimpleDropDown(string, string, bool, short, short, string, short, HorizontalAlignment, StringRestriction) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public SimpleDropDown AddSimpleDropDown(string name,
                                       string caption,
                                       bool isRequired,
                                       short codeLength,
                                       short commentLength = Constants.Common.LenComment,
                                       string dataItemName = null,
                                       short estimatedButtonsCount = 1,
                                       HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                       StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI)
```

Փաստաթղթի վահանակում ավելացնում է պարզ բացվող ցուցակ (**SimpleDropDown**) և վերադարձնում է այն։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի գլխագիրը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| codeLength | short | — | Կոդի դաշտում թույլատրելի նիշերի առավելագույն քանակը։ |
| commentLength | short | Constants.Common.LenComment | Մեկնաբանության դաշտում թույլատրելի նիշերի առավելագույն քանակը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը, որի հիման վրա հաշվարկվում է դաշտի լայնությունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |