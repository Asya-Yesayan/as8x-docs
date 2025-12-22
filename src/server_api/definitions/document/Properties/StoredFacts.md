---
title: Document.StoredFacts հատկություն
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.StoredFacts](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/StoredFacts.html)

**Դաս՝** [Document](../../Document.md)

```c#
public List<Fact> StoredFacts { get; internal set; }
```

Վերադարձնում է փաստաթղթի ժամանակավոր պահված հաշվառումների գրառումների ցուցակը, որոնք ավելանում են [DocumentService](../../../Services/IDocument/IDocumentService.md).[StoreFact](../../../Services/IDocument/Methods/StoreFact.md) մեթոդով։

[IDBService](../../../Services/IDB/IDBService.md).[TransDeferred](../../../Services/IDB/Properties/TransDeferred.md) հատկության `true` արժեքի դեպքում հաշվառումները պահվում են ժամանակավոր այս հատկությունում և գրանցվում տվյալների պահոցում [IDocumentService](../../../Services/IDocument/IDocumentService.md).[Store](../../../Services/IDocument/Methods/Store.md) մեթոդով փաստաթուղթը գրանցելիս, հակառակ դեպքում գրանցվում են տվյալների պահոցում անմիջապես։

