---
title: DataProcessingRequestRoutes.GetResultAsync(Guid, bool, CancellationToken) մեթոդ
---

```c#
public Task<T> GetResultAsync<T>(Guid id, 
                                 bool delete, 
                                 CancellationToken cancellationToken = default)
```

Վերադարձնում է [EnqueueAsync](EnqueueAsync.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/definitions/dpr.md)-ի կատարման արդյունքը։

Եթե կատարումը դեռ չի ավարտվել կամ նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջացնում է սխալ։

**Պարամետրեր**

* `id` - [DPR](../../../server_api/definitions/dpr.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [EnqueueAsync](DPR](../../../server_api/definitions/dpr.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [EnqueueAsync.md) մեթոդի կանչի արդյունքում։
* `delete` - DPR-ի կատարման առաջադրանքի քեշից մաքրման հայտանիշ։
* `cancellationToken` - Ընդհատման օբյեկտ:
