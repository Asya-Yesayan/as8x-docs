---
title: AddLine
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddLine(LayoutGroup, string, LineCaptionAlignment, string) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public HorizontalLineControl AddLine(LayoutGroup container,
                                     string caption = null,
                                     LineCaptionAlignment captionAlignment = 0,
                                     string name = null)
```

Փաստաթղթի վահանակում ավելացնում է հորիզոնական բաժանարար գիծ (**HorizontalLineControl**) և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| container | LayoutGroup | - | Ծնող դասավորման խումբը։ **null** արժեքի դեպքում գիծը ավելացվում է վահանակի հիմնական դասավորման տարրին։ |
| caption | string | null | Գծի վրա ցուցադրվող գլխագիրը։ |
| captionAlignment | LineCaptionAlignment | 0 | Գլխագրի հորիզոնական դասավորության ռեժիմը։ |
| name | string | null | Գծի ներքին անունը։ Դատարկ արժեքի դեպքում անունը ավտոմատ կերպով գեներացվում է։ |
