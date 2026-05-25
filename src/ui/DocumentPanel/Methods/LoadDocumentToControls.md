---
title: LoadDocumentToControls
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.LoadDocumentToControls() մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void LoadDocumentToControls()
```

Սահմանում է փաստաթղթի արժեքները վահանակի դաշտերի մեջ բեռնելու գործողությունները։

Մեթոդը չմշակելու դեպքում տվյալների աղբյուրի հետ կապված յուրաքանչյուր դաշտի համար արժեքը կարդացվում է փաստաթղթի սխեմայի համապատասխան տարրից (դաշտ, **memo**, պատկեր կամ աղյուսակ) և վերագրվում է դաշտին՝ [SetControlValue](SetControlValue.md) մեթոդի միջոցով։
