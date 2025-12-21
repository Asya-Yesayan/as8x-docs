---
title: IProcessServerClient.GetProcess(Guid) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Process GetProcess(Guid id)
```

Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../../definitions/Document.md), [տվյալների աղբյուրի](../../definitions/ds.md) կամ [DPR](../../definitions/dpr.md)-ի կատարման առաջադրանքի օբյեկտը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [Փաստաթղթի](../../definitions/Document.md), [տվյալների աղբյուրի](../../definitions/ds.md) կամ [DPR](../../definitions/dpr.md)-ի կատարման առաջադրանքի id-ն։ |
