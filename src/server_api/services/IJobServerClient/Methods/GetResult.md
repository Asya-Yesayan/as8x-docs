---
title: IProcessServerClient.GetResult(Guid) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Task<object> GetResult(Guid id)
```

Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../../definitions/Document.md), [տվյալների աղբյուրի](../../definitions/ds.md) կամ [DPR](../../definitions/dpr.md)-ի կատարման արդյունքը։

Եթե կատարումը դեռ չի ավարտվել կամ նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջանում է սխալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [Փաստաթղթի](../../definitions/Document.md), [տվյալների աղբյուրի](../../definitions/ds.md) կամ [DPR](../../definitions/dpr.md)-ի կատարման առաջադրանքի id-ն։ |
