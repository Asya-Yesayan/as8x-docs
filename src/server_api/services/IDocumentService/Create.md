---
title: IDocumentService.Create մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.CreateDoc](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/CreateDoc.html)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Create(List\<int\>, DocumentOrigin)](#idocumentservicecreatelistint-documentorigin-մեթոդ) | Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ։ |
| [Create(int, DocumentOrigin)](#idocumentservicecreateint-documentorigin-մեթոդ) | Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ։ |
| [Create(string, List\<int\>, Type, DocumentOrigin)](#idocumentservicecreatestring-listint-type-documentorigin-մեթոդ) | Ստեղծում է նշված ներքին անունով (տեսակի) փաստաթղթի նոր օբյեկտ։ |

### IDocumentService.Create(List&lt;int&gt;, DocumentOrigin) մեթոդ

```c#
public Task<T> Create<T>(List<int> parentsISN = null, 
                         DocumentOrigin origin = DocumentOrigin.AsService
                         ) where T : Document
```
<!-- public Task<T> Create<T>(List<int> parentsISN = null, DocumentOrigin origin = DocumentOrigin.AsService, params object[] parameters) where T : Document -->

Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ։

**Պարամետրեր**

* `T` - Փաստաթղթի նկարագրված դաս 8X-ում, [Document](../../definitions/document.md) դասի ժառանգ։
* `parentsISN` - Փաստաթղթի ծնող փաստաթղթերի ISN-ների ցուցակ:
* `origin` - [Փաստաթղթի ստեղծման աղբյուրը](../../types/DocumentOrigin.md):
<!-- * `parameters` - Արգումենտների զանգված, որոնք փոխանցվում են փաստաթղթի կոնստրուկտորին և պիտի թվով, հերթականությամբ, տիպերով համընկնեն կանչվող կոնստրուկտորի շարահյուսությանը։
Չփոխանցելու դեպքում փաստաթղթի նոր օբյեկտը ստեղծվելու է պարամետրեր չպարունակող կոնստրուկտորի միջոցով։ -->

### IDocumentService.Create(int, DocumentOrigin) մեթոդ

```c#
public Task<T> Create<T>(int parentISN, 
                         DocumentOrigin origin = DocumentOrigin.AsService
                         ) where T : Document
```
<!-- public Task<T> Create<T>(int parentISN, DocumentOrigin origin = DocumentOrigin.AsService, params object[] parameters) where T : Document -->

Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ։

**Պարամետրեր**

* `T` - Փաստաթղթի նկարագրված դաս 8X-ում, [Document](../../definitions/document.md) դասի ժառանգ։
* `parentISN` - Փաստաթղթի ծնող փաստաթղթի ISN-ը:
* `origin` - [Փաստաթղթի ստեղծման աղբյուրը](../../types/DocumentOrigin.md):
<!-- * `parameters` - Արգումենտների զանգված, որոնք փոխանցվում են փաստաթղթի կոնստրուկտորին և պիտի թվով, հերթականությամբ, տիպերով համընկնեն կանչվող կոնստրուկտորի շարահյուսությանը։
Չփոխանցելու դեպքում փաստաթղթի նոր օբյեկտը ստեղծվելու է պարամետրեր չպարունակող կոնստրուկտորի միջոցով։ -->

### IDocumentService.Create(string, List&lt;int&gt;, Type, DocumentOrigin) մեթոդ

```c#
public Task<Document> Create(string typeName, 
                             List<int> parentISN = null, 
                             Type instanceType = null, 
                             DocumentOrigin origin = DocumentOrigin.AsService)
```
<!-- public Task<Document> Create(string typeName, List<int> parentISN = null, Type instanceType = null, DocumentOrigin origin = DocumentOrigin.AsService, params object[] parameters) -->

Ստեղծում է նշված ներքին անունով (տեսակի) փաստաթղթի նոր օբյեկտ։

**Պարամետրեր**

* `typeName` - Փաստաթղթի ներքին անուն (տեսակ)։
* `parentsISN` - Փաստաթղթի ծնող փաստաթղթերի ISN-ների ցուցակ:
* `instanceType` - Փաստաթղթի նկարագրված դաս 8X-ում, [Document](../../definitions/document.md) դասի ժառանգ։։
* `origin` - [Փաստաթղթի ստեղծման աղբյուրը](../../types/DocumentOrigin.md):
<!-- * `parameters` - Արգումենտների զանգված, որոնք փոխանցվում են փաստաթղթի կոնստրուկտորին և պիտի թվով, հերթականությամբ, տիպերով համընկնեն կանչվող կոնստրուկտորի շարահյուսությանը։
Չփոխանցելու դեպքում փաստաթղթի նոր օբյեկտը ստեղծվելու է պարամետրեր չպարունակող կոնստրուկտորի միջոցով։ -->

