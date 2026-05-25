---
title: AddButtonEdit
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddButtonEdit(string, string, bool, short, string, short, HorizontalAlignment, StringRestriction) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public ButtonEditExt AddButtonEdit(string name,
                                   string caption,
                                   bool isRequired,
                                   short length,
                                   string dataItemName = null,
                                   short estimatedButtonsCount = 1,
                                   HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                   StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI)
```

Փաստաթղթի վահանակում ավելացնում է տեքստային մուտքագրման դաշտ (**ButtonEditExt**) և վերադարձնում է այն։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| length | short | — | Մուտքագրման տեքստի առավելագույն երկարությունը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| estimatedButtonsCount | short | 1 | Դաշտին կից կոճակների ակնկալվող քանակը, որի հիման վրա հաշվարկվում է դաշտի լայնությունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |
