---
title: Create(string, DocumentCreateRequestModel)
nav_exclude: true
---

# DocumentRoutes.Create(string, DocumentCreateRequestModel) մեթոդ

```c#
public DocumentModelSimple Create(string type, 
                                  DocumentCreateRequestModel createRequestModel)
```

Ստեղծում է նշված ներքին անունով (տեսակի) փաստաթղթի նոր օբյեկտ և վերադարձնում ստեղծված փաստաթղթի տվյալները (դաշտերի, աղյուսակների անունների  արժեքների ցուցակ..)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| type            | string               | -              | Փաստաթղթի ներքին անունը (տեսակը)։ |
| createRequestModel | DocumentCreateRequestModel | -              | Ստեղծվող փաստաթղթի տվյալներ (ծնող փաստաթղթերի isn-ների ցուցակ, [ստեղծման աղբյուր](../../../../server_api/Types/DocumentOrigin.md)...): |
