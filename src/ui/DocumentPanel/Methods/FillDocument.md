---
title: FillDocument
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.FillDocument(StoreRequest) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void FillDocument(StoreRequest sr)
```

Սահմանում է դաշտերի արժեքները փաստաթղթի դաշտերին վերագրելու գործողությունները։
Մեթոդը չմշակելու դեպքում տվյալների աղբյուրի հետ կապված յուրաքանչյուր դաշտի ընթացիկ արժեքը կարդացվում է [GetControlValue](GetControlValue.md) մեթոդի միջոցով և վերագրվում է փաստաթղթի սխեմայի համապատասխան տարրին (դաշտ, **memo** կամ պատկեր)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| sr | StoreRequest | — | Պահպանման հարցումի օբյեկտը։ |
