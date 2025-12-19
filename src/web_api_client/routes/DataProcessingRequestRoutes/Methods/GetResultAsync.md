---
title: DataProcessingRequestRoutes.GetResultAsync(Guid, bool, CancellationToken) մեթոդ
---

```c#
public Task<T> GetResultAsync<T>(Guid id, 
                                 bool delete, 
                                 CancellationToken cancellationToken = default)
```

Վերադարձնում է [EnqueueAsync](EnqueueAsync.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/definitions/dpr.md)-ի կատարման արդյունքը։

Եթե կատարումը դեռ չի ավարտվել կամ նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջանում է սխալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [DPR](../../../server_api/definitions/dpr.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [EnqueueAsync](EnqueueAsync.md) մեթոդի կանչի արդյունքում։ |
| delete          | bool                 | -              | DPR-ի կատարման առաջադրանքի քեշից մաքրման հայտանիշ։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
