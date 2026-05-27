---
title: AddTabbedGroup
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddTabbedGroup(string, DXTabControl, string) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public LayoutGroup AddTabbedGroup(string name,
                                  DXTabControl tc,
                                  string header)
```

Թաբին ավելացնում է նոր թաբ (**DXTabItem**) և վերադարձնում է դրա պարունակության դասավորման խումբը։ Ստեղծված թաբը գրանցվում է [DXTabItems](../Properties/DXTabItems.md) ցուցակում, իսկ **Enter** ստեղնի սեղմման մշակիչը կարգավորվում է ֆոկուսը հաջորդ դաշտի վրա տեղափոխելու համար։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Թաբի ներքին անունը։ |
| tc | DXTabControl | - | Թաբը, որին ավելացվում է թաբը։ |
| header | string | - | Թաբի վերնագիրը։ |
