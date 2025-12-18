---
title: IProcessServerClient.GetProgress(Guid) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Task<object> GetProgress(Guid id)
```

Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../../definitions/document.md), [տվյալների աղբյուրի](../../definitions/ds.md), [DPR](../../definitions/dpr.md)-ի կատարման պրոգրեսը։

Եթե նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջանում է սխալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [Փաստաթղթի](../../definitions/document.md), [տվյալների աղբյուրի](../../definitions/ds.md) կամ [DPR](../../definitions/dpr.md)-ի կատարման առաջադրանքի id-ն։ |
