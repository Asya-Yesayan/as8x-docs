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
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| type            | string               | -              | Փաստաթղթի ներքին անունը (տեսակը)։ |
| createRequestModel | DocumentCreateRequestModel | -              | Ստեղծվող փաստաթղթի տվյալներ (ծնող փաստաթղթերի isn-ների ցուցակ, [ստեղծման աղբյուր](../../../server_api/types/DocumentOrigin.md)...): |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
