---
title: AddTextEdit
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddTextEdit(string, string, bool, short, string, HorizontalAlignment, StringRestriction) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public TextEditExt AddTextEdit(string name,
                               string caption,
                               bool isRequired,
                               short length,
                               string dataItemName = null,
                               HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                               StringRestriction stringRestriction = StringRestriction.CanBeConvertedToArmenianANSI)
```

Փաստաթղթի վահանակում ավելացնում է տեքստային մուտքագրման դաշտ (**TextEditExt**) և վերադարձնում է այն։ Դաշտի լայնությունը հաշվարկվում է տրված առավելագույն երկարության հիման վրա, եթե հորիզոնական դասավորման ռեժիմը **Stretch** չէ։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի գլխագիրը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| length | short | — | Դաշտում թույլատրելի նիշերի առավելագույն քանակը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
| stringRestriction | StringRestriction | StringRestriction.CanBeConvertedToArmenianANSI | Դաշտում լրացվող արժեքի կոդավորման սահմանափակում (Armenian ansi, Russian ansi): |