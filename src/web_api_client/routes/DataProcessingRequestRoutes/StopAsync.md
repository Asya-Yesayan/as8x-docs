---
title: DataProcessingRequestRoutes.StopAsync(Guid, CancellationToken) մեթոդ
---

```c#
public Task StopAsync(Guid id, 
                      CancellationToken cancellationToken = default)
```

Ընդհատում է նախապես հերթի դրված [DPR](../../../server_api/definitions/dpr.md)-ի կատարումը։

Եթե նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջանում է սխալ։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [DPR](../../../server_api/definitions/dpr.md)-ի կատարման առաջադրանքի id-ն, որը ստացվում է [EnqueueAsync](EnqueueAsync.md) մեթոդի կանչի արդյունքում։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
