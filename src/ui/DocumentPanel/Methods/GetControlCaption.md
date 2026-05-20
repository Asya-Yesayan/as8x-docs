---
title: GetControlCaption
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.GetControlCaption(Control) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected string GetControlCaption(Control control)
```

Վերադարձնում է տրված դաշտի դասավորման գլխագիրը։
Տրված դաշտին համապատասխանող դասավորման տարրի բացակայության դեպքում առաջանում է **InvalidOperationException** տիպի սխալ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| control | Control | — | Դաշտը, որի գլխագիրը պետք է վերադարձվի։ |

**Վերադարձնում է**

Դաշտի դասավորման գլխագրի տեքստը։
