---
title: "IProcessServerClient սերվիս"
---

## Ներածություն

IProcessServerClient դասը նախատեսված է [փաստաթղթի](../Definitions/Document/Document.md), [տվյալների աղբյուրի](../Definitions/DataSource/DataSource.md), [DPR](../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը հերթի դնելու, կատարման պրոգրեսը, արդյունքը ստանալու, կատարումը ընդհատելու ֆունկցիոնալությունը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Enqueue(DPR.Descriptor, object, bool, IServiceProvider, Dictionary<int, UIRequestResultBase>, string, bool)](IProcessServerClient/Enqueue.md) | Հերթի է դնում [DPR](../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը և վերադարձնում է Id՝ [DPR](../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման ընթացքին հետևելու համար։ |
| [GetProgress(Guid)](IProcessServerClient/GetProgress.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../Definitions/Document/Document.md), [տվյալների աղբյուրի](../Definitions/DataSource/DataSource.md), [DPR](../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման պրոգրեսը։ |
| [GetResult(Guid)](IProcessServerClient/GetResult.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../Definitions/Document/Document.md), [տվյալների աղբյուրի](../Definitions/DataSource/DataSource.md) կամ [DPR](../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման արդյունքը։ |
| [Stop(Guid, object)](IProcessServerClient/Stop.md) | Ընդհատում է նախապես հերթի դրված [փաստաթղթի](../Definitions/Document/Document.md), [տվյալների աղբյուրի](../Definitions/DataSource/DataSource.md) կամ [DPR](../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը։ |
| [ForceStop(Guid, string)](IProcessServerClient/ForceStop.md) | Փորձում է ընդհատել նախապես հերթի դրված [փաստաթղթի](../Definitions/Document/Document.md), [տվյալների աղբյուրի](../Definitions/DataSource/DataSource.md) կամ [DPR](../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը։ |
| [Delete(Guid)](IProcessServerClient/Delete.md) | Հեռացնում է [փաստաթղթի](../Definitions/Document/Document.md), [տվյալների աղբյուրի](../Definitions/DataSource/DataSource.md) կամ [DPR](../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքը։ |
| [GetProcess(Guid)](IProcessServerClient/GetProcess.md) | Վերադարձնում է նախապես հերթի դրված [փաստաթղթի](../Definitions/Document/Document.md), [տվյալների աղբյուրի](../Definitions/DataSource/DataSource.md) կամ [DPR](../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքի օբյեկտը։ |
| [GetInfo(string)](IProcessServerClient/GetInfo.md) | Վերադարձնում է նշված id-ով [սեսսիայի](../Types/SessionInfo.md) բոլոր [փաստաթղթի](../Definitions/Document/Document.md), [տվյալների աղբյուրի](../Definitions/DataSource/DataSource.md), [DPR](../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքների ինֆորմացիաների ցուցակը։ |
