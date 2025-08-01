---
title: "IJobServerClient սերվիս"
---

## Ներածություն

IJobServerClient դասը նախատեսված է [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md), [DPR](../definitions/dpr.md)-ի կատարումը հերթի դնելու, կատարման պրոգրեսը, արդյունքը ստանալու, կատարումը ընդհատելու ֆունկցիոնալությունը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Enqueue(DPR.Descriptor, object, bool, IServiceProvider, Dictionary<int, UIRequestResultBase>, string, bool)](IJobServerClient/Enqueue.md) | Հերթի է դնում [DPR](../definitions/dpr.md)-ի կատարումը և վերադարձնում է Id՝ [DPR](../definitions/dpr.md)-ի կատարման ընթացքին հետևելու համար։ |
| [GetJobProgress(Guid)](IJobServerClient/GetJobProgress.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md), [DPR](../definitions/dpr.md)-ի կատարման պրոգրեսը։ |
| [GetJobResult(Guid)](IJobServerClient/GetJobResult.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարման արդյունքը։ |
| [Stop(Guid, object)](IJobServerClient/Stop.md) | Ընդհատում է նախապես հերթի դրված [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարումը։ |
| [ForceStop(Guid, string)](IJobServerClient/ForceStop.md) | Փորձում է ընդհատել նախապես հերթի դրված [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարումը։ |
| [Delete(Guid)](IJobServerClient/Delete.md) | Հեռացնում է [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարման առաջադրանքը։ |
| [GetJob(Guid)](IJobServerClient/GetJob.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարման առաջադրանքի օբյեկտը։ |
| [GetJobsInfo(string)](IJobServerClient/GetJobsInfo.md) | Վերադարձնում է նշված id-ով [սեսսիայի](../types/SessionInfo.md) բոլոր [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md), [DPR](../definitions/dpr.md)-ի կատարման առաջադրանքների ինֆորմացիաների ցուցակը։ |
