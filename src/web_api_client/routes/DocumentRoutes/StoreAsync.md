---
title: DocumentRoutes.StoreAsync(DocumentStoreRequestModel, CancellationToken) մեթոդ
---

```c#
public Task<DocumentModel> StoreAsync(DocumentStoreRequestModel model, CancellationToken cancellationToken = default)
```

Կատարում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։

**Պարամետրեր**

* `model` - Գրանցվող փաստաթղթի տվյալները ([փաստաթղթի ստուգման մակարդակ](../../../server_api/types/DocumentCheckLevel.md), isn, գրանցվող դաշտերի արժեքներ...)։
* `cancellationToken` - Ընդհատման օբյեկտ:
