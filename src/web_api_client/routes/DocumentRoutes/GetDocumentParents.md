---
title: DocumentRoutes.GetDocumentParents(int, DocumentParentsRequestModel) մեթոդ
---

```c#
public List<DocumentResponseInfo> GetDocumentParents(int isn, 
                                                     DocumentParentsRequestModel model)
```

Վերադարձնում է `List<DocumentResponseInfo>` տիպի օբյեկտ, որը պարունակում փաստաթղթի ծնող փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը:

Եթե փաստաթուղթը չի ունենում ծնողներ, ապա ֆունկցիան վերադարձնում է դատարկ ցուցակ։

**Պարամետրեր**

* `isn` - Զավակ փաստաթղթի ներքին նույնականացման համարը:
* `model` - `DocumentParentsRequestModel` տիպի օբյեկտ, որը նախատեսված է վերադարձվող ծնող փաստաթղթերը ֆիլտրելու համար։
