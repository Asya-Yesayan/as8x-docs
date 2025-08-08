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
Մեթոդը պետք է կանչել փաստաթղթի [Action](../../definitions/document/Action.md) իրադարձության մշակիչից։  
Այս մեթոդի կանչից հետո հաշվառումները անմիջապես չեն գրանցվում տվյալների պահոցում, դրանց գրանցումը կատարվում է միմիայն [Action](../../definitions/document/Action.md) իրադարձության մշակիչի ավարտից հետո։

**Պարամետրեր**

* `document` - [Փաստաթղթի օբյեկտ](../../definitions/document.md)։
* `fact` - Գրանցման ենթակա հաշվառում։
