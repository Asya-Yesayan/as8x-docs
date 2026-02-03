---
title: Stop(Guid, object)
parent: "Մեթոդներ"
grand_parent: "IProcessServerClient"
---

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Task Stop(Guid id, 
                 object param)
```

Ընդհատում է նախապես հերթի դրված [փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md) կամ [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը։

Եթե կատարումը արդեն ավարտվել է, ապա [հեռացնում է](../../IDocument/Methods/Delete.md) կատարման առաջադրանքը։

Եթե նշված id-ով կատարման առաջադրանք գոյություն չունի, ապա առաջանում է սխալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| id              | Guid                 | -              | [Փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md) կամ [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքի id-ն։ |
| param           | object               | -              | Օգտագործվում է ընդհատման համար լրացուցիչ պարամետրերի փոխանցման համար։ Այս պահին միայն [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md) կատարման առաջադրանքին հնարավոր է փոխանցել `bool` տիպի պարամետր, որով որոշվում է կատարման առաջադրանքից ընդհատումից հետո տվյալների աղբյուրի տողերը պետք է հավելյալ մշակվեն [AfterDataReaderClose](../../../Definitions/DataSource/Methods/AfterDataReaderClose.md) մեթոդի միջոցով թե ոչ։ `true` արժեքի դեպքում տողերը հավելյալ չեն մշակվում։ |
