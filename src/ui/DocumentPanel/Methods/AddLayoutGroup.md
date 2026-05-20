---
title: AddLayoutGroup
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddLayoutGroup(string, LayoutGroup, LayoutGroupView, Orientation, string) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public LayoutGroup AddLayoutGroup(string name,
                                  LayoutGroup container,
                                  LayoutGroupView view,
                                  Orientation orientation,
                                  string header = "")
```

Փաստաթղթի վահանակում ավելացնում է դասավորման խումբ (**LayoutGroup**) և վերադարձնում է այն։ **container** պարամետրի **null** արժեքի դեպքում խումբը ավելացվում է վահանակի հիմնական դասավորման տարրին, հակառակ դեպքում՝ տրված խմբի ենթատարրերին։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | — | Խմբի ներքին անունը։ |
| container | LayoutGroup | — | Ծնող դասավորման խումբը։ **null** արժեքի դեպքում խումբը ավելացվում է վահանակի հիմնական դասավորման տարրին։ |
| view | LayoutGroupView | — | Խմբի ցուցադրման ռեժիմը։ |
| orientation | Orientation | — | Խմբի ենթատարրերի դասավորության ուղղվածությունը։ |
| header | string | "" | Խմբի վերնագիրը։ |