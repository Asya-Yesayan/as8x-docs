---
title: DataProcessingRequestRoutes.GetResult(Guid, bool) մեթոդ
---

```c#
public T GetResult<T>(Guid id, 
                      bool delete)
```

Վերադարձնում է [Enqueue](Enqueue.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/definitions/dpr.md)-ի կատարման արդյունքը։

Եթե կատարումը դեռ չի ավարտվել կամ նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջացնում է սխալ։

**Պարամետրեր**

* `id` - [DPR](../../../server_api/definitions/dpr.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [Enqueue](DPR](../../../server_api/definitions/dpr.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [Enqueue.md) մեթոդի կանչի արդյունքում։
* `delete` - DPR-ի կատարման առաջադրանքի քեշից մաքրման հայտանիշ։
