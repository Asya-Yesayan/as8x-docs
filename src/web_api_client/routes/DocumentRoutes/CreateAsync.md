---
title: DocumentRoutes.CreateAsync(string, DocumentCreateRequestModel, CancellationToken) մեթոդ
---

```c#
public Task<DocumentModelSimple> CreateAsync(string type, 
                                             DocumentCreateRequestModel createRequestModel, 
                                             CancellationToken cancellationToken = default)
```

Ստեղծում է նշված ներքին անունով (տեսակի) փաստաթղթի նոր օբյեկտ և վերադարձնում ստեղծված փաստաթղթի տվյալները (դաշտերի, աղյուսակների անունների  արժեքների ցուցակ..)։

**Պարամետրեր**

* `type` - Փաստաթղթի ներքին անունը (տեսակը)։
* `createRequestModel` - Ստեղծվող փաստաթղթի տվյալներ (ծնող փաստաթղթերի isn-ների ցուցակ, [ստեղծման աղբյուր](../../../server_api/types/DocumentOrigin.md)...):
* `cancellationToken` - Ընդհատման օբյեկտ:
