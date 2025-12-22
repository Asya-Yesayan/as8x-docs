---
title: DataProcessingRequestRoutes.GetResult(Guid, bool) մեթոդ
---

```c#
public T GetResult<T>(Guid id, 
                      bool delete)
```

Վերադարձնում է [Enqueue](Enqueue.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման արդյունքը։

Եթե կատարումը դեռ չի ավարտվել կամ նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջանում է սխալ։

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [Enqueue](Enqueue.md) մեթոդի կանչի արդյունքում։ |
| delete          | bool                 | -              | DPR-ի կատարման առաջադրանքի քեշից մաքրման հայտանիշ։ |
