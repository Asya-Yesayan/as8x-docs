---
title: IProcessServerClient.GetProcess(Guid) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Process GetProcess(Guid id)
```

Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md) կամ [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքի օբյեկտը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [Փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md) կամ [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքի id-ն։ |
