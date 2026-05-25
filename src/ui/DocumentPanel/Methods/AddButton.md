---
title: AddButton
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddButton(string, string, string, string, string, bool, HorizontalAlignment) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public SimpleButton AddButton(string name,
                              string imageURI = "",
                              string caption = "",
                              string labelCaption = "",
                              string tooltip = "",
                              bool isTabStop = false,
                              HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left)
```

Փաստաթղթի վահանակում ավելացնում է կոճակ (**SimpleButton**) և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Կոճակի ներքին անունը։ |
| imageURI | string | "" | Կոճակի վրա ցուցադրվող պատկերակի URL-ը։ |
| caption | string | "" | Կոճակի վրա ցուցադրվող տեքստը։ |
| labelCaption | string | "" | Կոճակին կից ցուցադրվող գլխագիրը։ |
| tooltip | string | "" | Կոճակի վրա մկնիկը պահելիս ցուցադրվող տեքստը (tooltip)։ |
| isTabStop | bool | false | **true** արժեքի դեպքում կոճակը հասանելի է **Tab** ստեղնի միջոցով նավիգացիայի համար։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Կոճակի հորիզոնական դասավորման ռեժիմը։ |
