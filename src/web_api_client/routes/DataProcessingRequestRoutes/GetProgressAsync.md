---
title: DataProcessingRequestRoutes.GetProgressAsync(Guid, CancellationToken) մեթոդ
---

```c#
public Task<DPRProgress> GetProgressAsync(Guid id, 
                                          CancellationToken cancellationToken = default)
```

Վերադարձնում է [EnqueueAsync](EnqueueAsync.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/definitions/dpr.md)-ի կատարման պրոգրեսը։

Եթե նշված id-ով DPR-ի կատարման առաջադրանք գոյություն չունի, ապա առաջանում է սխալ։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [DPR](../../../server_api/definitions/dpr.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [EnqueueAsync](EnqueueAsync.md) մեթոդի կանչի արդյունքում։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
