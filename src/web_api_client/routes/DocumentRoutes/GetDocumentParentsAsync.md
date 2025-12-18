---
title: DocumentRoutes.GetDocumentParentsAsync(int, DocumentParentsRequestModel, CancellationToken) մեթոդ
---

```c#
public Task<List<DocumentResponseInfo>> GetDocumentParentsAsync(int isn, 
                                                                DocumentParentsRequestModel model, 
                                                                CancellationToken cancellationToken = default)
```

Վերադարձնում է `List<DocumentResponseInfo>` տիպի օբյեկտ, որը պարունակում փաստաթղթի ծնող փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը:

Եթե փաստաթուղթը չի ունենում ծնողներ, ապա ֆունկցիան վերադարձնում է դատարկ ցուցակ։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Զավակ փաստաթղթի ներքին նույնականացման համարը: |
| model           | DocumentParentsRequestModel | -              | `DocumentParentsRequestModel` տիպի օբյեկտ, որը նախատեսված է վերադարձվող ծնող փաստաթղթերը ֆիլտրելու համար։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
