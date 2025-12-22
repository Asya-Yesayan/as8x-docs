---
title: DataProcessingRequestRoutes.Stop(Guid) մեթոդ
---

```c#
public void Stop(Guid id)
```

Ընդհատում է նախապես հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը։

Եթե նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջանում է սխալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [Enqueue](Enqueue.md) մեթոդի կանչի արդյունքում։ |
