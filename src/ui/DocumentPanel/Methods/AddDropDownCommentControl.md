---
title: AddDropDownCommentControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddDropDownCommentControl(string, string, bool, IDropDownView, short, short, string, short, HorizontalAlignment, StringRestriction) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public DropDownCommentControl AddDropDownCommentControl(string name,
                                                       string caption,
                                                       bool isRequired,
                                                       IDropDownView idv,
                                                       short length = Constants.Common.LenComment,
                                                       short commentLength = 0,
                                                       string dataItemName = null,
                                                       short estimatedButtonsCount = 1,
                                                       HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                                       StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI)
```

Փաստաթղթի վահանակում ավելացնում է մեկնաբանությամբ բացվող ցուցակ (**DropDownCommentControl**) և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| idv | IDropDownView | - | Բացվող ցուցակի դիտելու ձևը։ |
| length | short | Constants.Common.LenComment | «Կոդ» սյան թույլատրելի նիշերի առավելագույն քանակը։ |
| commentLength | short | 0 | «Անվանում» սյան թույլատրելի նիշերի առավելագույն քանակը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը, որի հիման վրա հաշվարկվում է դաշտի լայնությունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |
