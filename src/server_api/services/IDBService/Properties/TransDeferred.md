---
title: IDBService.TransDeferred հատկություն
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.DeferredTrans](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/TransactionManagment/DeferredTrans.html)

**Դաս՝** [IDBService](../../IDBService.md)

```c#
public bool TransDeferred { get; set; }
```

Վերադարձնում կամ նշանակում է Fact տիպի օբյեկտների տվյալների պահոցում հետաձգված գրանցման հայտանիշը։
Նախնական արժեքը **true** է։

**true** արժեքի դեպքում [DocumentService](../../IDocumentService.md).[StoreFact](../../IDocumentService/Methods/StoreFact.md) մեթոդի կանչի արդյունքում հաշվառումները պահվում են փաստաթղթի [StoredFacts](../../../definitions/document/Properties/StoredFacts.md) ցուցակում և գրանցվում տվյալների պահոցում փաստաթղթի գրանցման հետ միասին։ 
**false** արժեքրի դեպքում՝ գրանցվում են անմիջապես։
