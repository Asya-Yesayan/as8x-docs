---
title: BeforeStore
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.BeforeStore(StoreRequest) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual bool BeforeStore(StoreRequest sr)
```

Սահմանում է փաստաթղթի պահպանումից առաջ կատարվող գործողությունները և թույլատվության ստուգումը։

Մեթոդը չմշակելու դեպքում վերադարձնում է **true**՝ թույլատրելով պահպանումը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| sr | StoreRequest | - | Պահպանման հարցումի օբյեկտը։ |

**Վերադարձնում է**

**true** արժեքի դեպքում պահպանումը շարունակվում է, **false** արժեքի դեպքում՝ ընդհատվում։
