---
title: ForceStop(Guid, string)
parent: "Մեթոդներ"
grand_parent: "IProcessServerClient"
---

# IProcessServerClient.ForceStop(Guid, string) մեթոդ

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Task<bool> ForceStop(Guid id, 
                            string message)
```

Փորձում է ընդհատել նախապես հերթի դրված [փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md) կամ [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը։

Վերադարձնում Է `bool` տիպի արժեք, որը ցույց է տալիս ընդհատումը հաջողվեց թե ոչ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [Փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md) կամ [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքի id-ն։ |
| message         | string               | -              | Այն սխալի հաղորդագրությունը, որը կվերադարձվի եթե ընդհատման ընթացքում առաջացել է սխալ։ |
