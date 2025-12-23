---
title: IDocumentService.StoreFact(Document, Fact) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.StoreFact](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/StoreFact.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task StoreFact(Document document, 
                      Fact fact)
```

Գրանցում է փաստաթղթի հաշվառումը տվյալների պահոցում:
Մեթոդը պետք է կանչել փաստաթղթի [Action](../../../Definitions/Document/Methods/Action.md) իրադարձության մշակիչից։  
Այս մեթոդի կանչից հետո հաշվառումները անմիջապես չեն գրանցվում տվյալների պահոցում, դրանց գրանցումը կատարվում է միմիայն [Action](../../../Definitions/Document/Methods/Action.md) իրադարձության մշակիչի ավարտից հետո։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../../Definitions/Document/Document.md)։ |
| fact            | Fact                 | -              | Գրանցման ենթակա հաշվառում։ |
