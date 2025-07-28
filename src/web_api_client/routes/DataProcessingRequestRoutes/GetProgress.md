---
title: DataProcessingRequestRoutes.GetProgress(Guid) մեթոդ
---

```c#
public DPRProgress GetProgress(Guid id)
```

Վերադարձնում է [Enqueue](Enqueue.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/definitions/dpr.md)-ի կատարման պրոգրեսը։

Եթե նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջացնում է սխալ։

**Պարամետրեր**

* `id` - [DPR](../../../server_api/definitions/dpr.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [Enqueue](DPR](../../../server_api/definitions/dpr.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [Enqueue.md) մեթոդի կանչի արդյունքում։
