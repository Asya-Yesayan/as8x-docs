---
title: "IProcessServerClient սերվիս"
---

## Ներածություն

IProcessServerClient դասը նախատեսված է [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md), [DPR](../definitions/dpr.md)-ի կատարումը հերթի դնելու, կատարման պրոգրեսը, արդյունքը ստանալու, կատարումը ընդհատելու ֆունկցիոնալությունը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Enqueue(DPR.Descriptor, object, bool, IServiceProvider, Dictionary<int, UIRequestResultBase>, string, bool)](IJobServerClient/Methods/Enqueue.md) | Հերթի է դնում [DPR](../definitions/dpr.md)-ի կատարումը և վերադարձնում է Id՝ [DPR](../definitions/dpr.md)-ի կատարման ընթացքին հետևելու համար։ |
| [GetProgress(Guid)](IJobServerClient/Methods/GetProgress.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md), [DPR](../definitions/dpr.md)-ի կատարման պրոգրեսը։ |
| [GetResult(Guid)](IJobServerClient/Methods/GetResult.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարման արդյունքը։ |
| [Stop(Guid, object)](IJobServerClient/Methods/Stop.md) | Ընդհատում է նախապես հերթի դրված [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարումը։ |
| [ForceStop(Guid, string)](IJobServerClient/Methods/ForceStop.md) | Փորձում է ընդհատել նախապես հերթի դրված [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարումը։ |
| [Delete(Guid)](../../controllers/Document/Methods/Delete.md) | Հեռացնում է [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարման առաջադրանքը։ |
| [GetProcess(Guid)](IJobServerClient/Methods/GetProcess.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարման առաջադրանքի օբյեկտը։ |
| [GetInfo(string)](IJobServerClient/Methods/GetInfo.md) | Վերադարձնում է նշված id-ով [սեսսիայի](../types/SessionInfo.md) բոլոր [փաստաթղթի](../definitions/document.md), [տվյալների աղբյուրի](../definitions/ds.md), [DPR](../definitions/dpr.md)-ի կատարման առաջադրանքների ինֆորմացիաների ցուցակը։ |
