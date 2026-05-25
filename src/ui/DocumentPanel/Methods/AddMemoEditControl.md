---
title: AddMemoEditControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddMemoEditControl(string, string, bool, short, string, HorizontalAlignment, StringRestriction) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public MemoEditControl AddMemoEditControl(string name,
                                          string caption,
                                          bool isRequired,
                                          short length,
                                          string dataItemName = null,
                                          HorizontalAlignment horizontalAlignment = HorizontalAlignment.Stretch,
                                          StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI)
```

Փաստաթղթի վահանակում ավելացնում է մեծ տեքստային դաշտ (**MemoEditControl**), որը թույլ է տալիս մուտքագրել բազմատող տեքստ և վերադարձնում է այն։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| length | short | — | Մուտքագրման տեքստի առավելագույն երկարությունը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Stretch | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |
