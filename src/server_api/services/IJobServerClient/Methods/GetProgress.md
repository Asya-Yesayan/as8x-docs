---
title: IProcessServerClient.GetProgress(Guid) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Task<object> GetProgress(Guid id)
```

Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md), [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման պրոգրեսը։

Եթե նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջանում է սխալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [Փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md) կամ [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքի id-ն։ |
