---
title: AddDocument
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.AddDocument(string docType) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void AddDocument(string docType)
```

Սահմանում է դիտելու ձևի «Ավելացնել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ IsDocumentBased հատկության true արժեքի դեպքում։

Մեթոդը չմշակելու դեպքում բացվում է դիտելու ձևի ընթացիկ տողում պարունակվող փաստաթղթի պատուհանը։

«Ավելացնել» կոնտեքստային ֆունկցիայի վարքագիծը կարգավորվում է AllowAdd, IsAddEnabled, IsDocumentBased հատկությունների միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| docType | string | - | Այն փաստաթղթի ներքին նույնականացման համարը (isn), որի համար կանչվել է «Ավելացնել» կոնտեքստային ֆունկցիան։ |

![Add_Function](../../images/DataView/Add_Function.png)

