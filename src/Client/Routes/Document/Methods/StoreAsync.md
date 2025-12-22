---
title: DocumentRoutes.StoreAsync(DocumentStoreRequestModel, CancellationToken) մեթոդ
---

```c#
public Task<DocumentModel> StoreAsync(DocumentStoreRequestModel model, 
                                      CancellationToken cancellationToken = default)
```

Կատարում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| model           | DocumentStoreRequestModel | -              | Գրանցվող փաստաթղթի տվյալները ([փաստաթղթի ստուգման մակարդակ](../../../server_api/Types/DocumentCheckLevel.md), isn, գրանցվող դաշտերի արժեքներ...)։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
