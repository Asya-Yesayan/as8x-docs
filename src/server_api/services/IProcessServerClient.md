---
title: "IProcessServerClient սերվիս"
---

## Ներածություն

IProcessServerClient դասը նախատեսված է [փաստաթղթի](../definitions/Document.md), [տվյալների աղբյուրի](../definitions/ds.md), [DPR](../definitions/dpr.md)-ի կատարումը հերթի դնելու, կատարման պրոգրեսը, արդյունքը ստանալու, կատարումը ընդհատելու ֆունկցիոնալությունը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Enqueue(DPR.Descriptor, object, bool, IServiceProvider, Dictionary<int, UIRequestResultBase>, string, bool)](IProcessServerClient/Enqueue.md) | Հերթի է դնում [DPR](../definitions/dpr.md)-ի կատարումը և վերադարձնում է Id՝ [DPR](../definitions/dpr.md)-ի կատարման ընթացքին հետևելու համար։ |
| [GetProgress(Guid)](IProcessServerClient/GetProgress.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../definitions/Document.md), [տվյալների աղբյուրի](../definitions/ds.md), [DPR](../definitions/dpr.md)-ի կատարման պրոգրեսը։ |
| [GetResult(Guid)](IProcessServerClient/GetResult.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../definitions/Document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարման արդյունքը։ |
| [Stop(Guid, object)](IProcessServerClient/Stop.md) | Ընդհատում է նախապես հերթի դրված [փաստաթղթի](../definitions/Document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարումը։ |
| [ForceStop(Guid, string)](IProcessServerClient/ForceStop.md) | Փորձում է ընդհատել նախապես հերթի դրված [փաստաթղթի](../definitions/Document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարումը։ |
| [Delete(Guid)](IProcessServerClient/Delete.md) | Հեռացնում է [փաստաթղթի](../definitions/Document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարման առաջադրանքը։ |
| [GetProcess(Guid)](IProcessServerClient/GetProcess.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../definitions/Document.md), [տվյալների աղբյուրի](../definitions/ds.md) կամ [DPR](../definitions/dpr.md)-ի կատարման առաջադրանքի օբյեկտը։ |
| [GetInfo(string)](IProcessServerClient/GetInfo.md) | Վերադարձնում է նշված id-ով [սեսսիայի](../types/SessionInfo.md) բոլոր [փաստաթղթի](../definitions/Document.md), [տվյալների աղբյուրի](../definitions/ds.md), [DPR](../definitions/dpr.md)-ի կատարման առաջադրանքների ինֆորմացիաների ցուցակը։ |
