---
title: Document.StoredFacts հատկություն
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.StoredFacts](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/StoredFacts.html)

**Դաս՝** [Document](../../document.md)

```c#
public List<Fact> StoredFacts { get; internal set; }
```

Վերադարձնում է փաստաթղթի ժամանակավոր պահված հաշվառումների գրառումների ցուցակը, որոնք ավելանում են [DocumentService](../../../services/IDocumentService.md).[StoreFact](../../../services/IDocumentService/Methods/StoreFact.md) մեթոդով։

[IDBService](../../../services/IDBService.md).[TransDeferred](../../../services/IDBService/Properties/TransDeferred.md) հատկության `true` արժեքի դեպքում հաշվառումները պահվում են ժամանակավոր այս հատկությունում և գրանցվում տվյալների պահոցում [IDocumentService](../../../services/IDocumentService.md).[Store](../Methods/Store.md) մեթոդով փաստաթուղթը գրանցելիս, հակառակ դեպքում գրանցվում են տվյալների պահոցում անմիջապես։

