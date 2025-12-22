---
title: IProcessServerClient.Delete(Guid) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Task Delete(Guid id)
```

Հեռացնում է [փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md) կամ [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքը։

Եթե նշված id-ով կատարման առաջադրանք գոյություն չունի կամ առաջադրանքը դեռ ավարտված չէ, ապա առաջանում է սխալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [Փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md) կամ [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքի id-ն։ |
