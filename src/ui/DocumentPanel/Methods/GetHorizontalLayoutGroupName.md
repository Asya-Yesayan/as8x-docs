---
title: GetHorizontalLayoutGroupName
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.GetHorizontalLayoutGroupName(string) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public string GetHorizontalLayoutGroupName(string name)
```

Վերադարձնում է տրված ներքին անունից բխող հորիզոնական դասավորման խմբի անունը։ Անվան ձևավորման համար օգտագործվում է **`HLG_`** նախածանցը (օրինակ՝ **`amount`** անունից կազմվում է **`HLG_amount`**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |