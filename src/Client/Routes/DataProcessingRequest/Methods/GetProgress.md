---
title: DataProcessingRequestRoutes.GetProgress(Guid) մեթոդ
---

```c#
public DPRProgress GetProgress(Guid id)
```

Վերադարձնում է [Enqueue](Enqueue.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման պրոգրեսը։

Եթե նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջանում է սխալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [Enqueue](Enqueue.md) մեթոդի կանչի արդյունքում։ |
