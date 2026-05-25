---
title: AddControlsFromSchema
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddControlsFromSchema(IEnumerable&lt;string&gt;) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected void AddControlsFromSchema(IEnumerable<string> suppressFor = null)
```

Փաստաթղթի սխեմայի հիման վրա ավելացնում է վահանակում բոլոր դաշտերը, **memo**-ները, պատկերները և աղյուսակները։ Բացառվում են այն տարրերը, որոնք արդեն գրանցված են վահանակում, թաքնված են սխեմայում կամ ընդգրկված են **suppressFor** ցուցակում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| suppressFor | IEnumerable&lt;string&gt; | null | Բացառվող դաշտերի, **memo**-ների, պատկերների կամ աղյուսակների ներքին անունների ցուցակը։ |
