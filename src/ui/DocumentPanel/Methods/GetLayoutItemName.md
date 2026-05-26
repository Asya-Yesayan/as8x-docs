---
title: GetLayoutItemName
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.GetLayoutItemName(string) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected static string GetLayoutItemName(string name)
```

Վերադարձնում է տրված ներքին անունից բխող դասավորման տարրի անունը։ Անվան ձևավորման համար օգտագործվում է **`LI_`** նախածանցը (օրինակ՝ **`amount`** անունից կազմվում է **`LI_amount`**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |