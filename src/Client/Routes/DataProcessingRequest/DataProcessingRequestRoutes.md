---
title: DataProcessingRequestRoutes դաս
---

## Ներածություն

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Enqueue(DPRType, string, bool, ProcessDPRRequest)](Methods/Enqueue.md) | Հերթի է դնում [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը և վերադարձնում է `DPRProcessEnqueueResponse` դասի օբյեկտ, որը պարունակում է հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի տվյալները (ներքին անուն, սատարում է չեղարկումը թե ոչ...) և Id՝ [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման ընթացքին հետևելու համար։ |
| [EnqueueAsync(DPRType, string, bool, ProcessDPRRequest, CancellationToken)](Methods/EnqueueAsync.md) | Հերթի է դնում [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը և վերադարձնում է `DPRProcessEnqueueResponse` դասի օբյեկտ, որը պարունակում է հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի տվյալները (ներքին անուն, սատարում է չեղարկումը թե ոչ...) և Id՝ [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման ընթացքին հետևելու համար։ |
| [GetList()](Methods/GetList.md#dataprocessingrequestroutesgetlist-մեթոդ) | Վերադարձնում է համակարգում առկա բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, սատարում է չեղարկումը թե ոչ...)։ |
| [GetList(DPRType)](Methods/GetList.md#dataprocessingrequestroutesgetlistdprtype-մեթոդ) | Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |
| [GetListAsync(CancellationToken)](Methods/GetListAsync.md#dataprocessingrequestroutesgetlistasynccancellationtoken-մեթոդ) | Վերադարձնում է համակարգում առկա բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |
| [GetListAsync(DPRType, CancellationToken)](Methods/GetListAsync.md#dataprocessingrequestroutesgetlistasyncdprtype-cancellationtoken-մեթոդ) | Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |
| [GetObject(DPRType, string)](Methods/GetObject.md) | Վերադարձնում է DPR-ի մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ, սատարում է չեղարկումը թե ոչ)՝ ըստ տեսակի և ներքին անվան։ |
| [GetObjectAsync(DPRType, string, CancellationToken)](Methods/GetObjectAsync.md) | Վերադարձնում է DPR-ի մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ, սատարում է չեղարկումը թե ոչ)՝ ըստ տեսակի և ներքին անվան։ |
| [GetResult(Guid, bool)](Methods/GetResult.md) | Վերադարձնում է [Enqueue(DPRType, string, bool, ProcessDPRRequest)](Methods/Enqueue.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման արդյունքը։ |
| [GetResultAsync(Guid, bool, CancellationToken)](Methods/GetResultAsync.md) | Վերադարձնում է [EnqueueAsync(DPRType, string, bool, ProcessDPRRequest, CancellationToken)](Methods/EnqueueAsync.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման արդյունքը։ |
| [GetProgress(Guid)](Methods/GetProgress.md) | Վերադարձնում է [Enqueue(DPRType, string, bool, ProcessDPRRequest)](Methods/Enqueue.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման պրոգրեսը։ |
| [GetProgressAsync(Guid, CancellationToken)](Methods/GetProgressAsync.md) | Վերադարձնում է [EnqueueAsync(DPRType, string, bool, ProcessDPRRequest, CancellationToken)](Methods/EnqueueAsync.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման պրոգրեսը։ |
| [Stop(Guid)](Methods/Stop.md) | Ընդհատում է նախապես հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը։ |
| [StopAsync(Guid, CancellationToken)](Methods/StopAsync.md) | Ընդհատում է նախապես հերթի դրված [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը։ |

