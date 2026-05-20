---
title: IsReadOnlyControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.IsReadOnlyControl(Control) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected bool IsReadOnlyControl(Control control)
```

Վերադարձնում է **true**, եթե տրված դաշտը գտնվում է միայն կարդալու վիճակում։ Չմշակվող դաշտի տիպի դեպքում օգտագործվում է reflection՝ դաշտի **IsReadOnly** հատկության արժեքը ստանալու համար, իսկ դրա բացակայության դեպքում վերադարձվում է **false**։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| control | Control | — | Ստուգվող դաշտը։ |

**Վերադարձնում է**

**true** արժեքի դեպքում դաշտը միայն կարդալու վիճակում է, **false** արժեքի դեպքում՝ խմբագրման համար հասանելի։
