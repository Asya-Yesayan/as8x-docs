---
title: AddDXTabControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddDXTabControl(string, LayoutGroup) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public DXTabControl AddDXTabControl(string name,
                                    LayoutGroup container)
```

Փաստաթղթի վահանակում ավելացնում է թաբ (**DXTabControl**) և վերադարձնում է այն։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Թաբի ներքին անունը։ |
| container | LayoutGroup | - | Ծնող դասավորման խումբը։ **null** արժեքի դեպքում թաբը ավելացվում է վահանակի հիմնական դասավորման տարրին։ |
