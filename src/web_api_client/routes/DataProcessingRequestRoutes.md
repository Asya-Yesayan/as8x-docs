---
title: DataProcessingRequestRoutes դաս
---

## Ներածություն

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Enqueue(DPRType, string, bool, ProcessDPRRequest)](DataProcessingRequestRoutes/Enqueue.md) | Հերթի է դնում [DPR](../../server_api/definitions/dpr.md)-ի կատարումը և վերադարձնում է `DPRProcessEnqueueResponse` դասի օբյեկտ, որը պարունակում է հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի տվյալները (ներքին անուն, սատարում է չեղարկումը թե ոչ...) և Id՝ [DPR](../../server_api/definitions/dpr.md)-ի կատարման ընթացքին հետևելու համար։ |
| [EnqueueAsync(DPRType, string, bool, ProcessDPRRequest, CancellationToken)](DataProcessingRequestRoutes/EnqueueAsync.md) | Հերթի է դնում [DPR](../../server_api/definitions/dpr.md)-ի կատարումը և վերադարձնում է `DPRProcessEnqueueResponse` դասի օբյեկտ, որը պարունակում է հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի տվյալները (ներքին անուն, սատարում է չեղարկումը թե ոչ...) և Id՝ [DPR](../../server_api/definitions/dpr.md)-ի կատարման ընթացքին հետևելու համար։ |
| [GetList()](DataProcessingRequestRoutes/GetList.md#dataprocessingrequestroutesgetlist-մեթոդ) | Վերադարձնում է համակարգում առկա բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, սատարում է չեղարկումը թե ոչ...)։ |
| [GetList(DPRType)](DataProcessingRequestRoutes/GetList.md#dataprocessingrequestroutesgetlistdprtype-մեթոդ) | Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |
| [GetListAsync(CancellationToken)](DataProcessingRequestRoutes/GetListAsync.md#dataprocessingrequestroutesgetlistasynccancellationtoken-մեթոդ) | Վերադարձնում է համակարգում առկա բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |
| [GetListAsync(DPRType, CancellationToken)](DataProcessingRequestRoutes/GetListAsync.md#dataprocessingrequestroutesgetlistasyncdprtype-cancellationtoken-մեթոդ) | Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |
| [GetObject(DPRType, string)](DataProcessingRequestRoutes/GetObject.md) | Վերադարձնում է DPR-ի մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ, սատարում է չեղարկումը թե ոչ)՝ ըստ տեսակի և ներքին անվան։ |
| [GetObjectAsync(DPRType, string, CancellationToken)](DataProcessingRequestRoutes/GetObjectAsync.md) | Վերադարձնում է DPR-ի մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ, սատարում է չեղարկումը թե ոչ)՝ ըստ տեսակի և ներքին անվան։ |
| [GetResult(Guid, bool)](DataProcessingRequestRoutes/GetResult.md) | Վերադարձնում է [Enqueue(DPRType, string, bool, ProcessDPRRequest)](DataProcessingRequestRoutes/Enqueue.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարման արդյունքը։ |
| [GetResultAsync(Guid, bool, CancellationToken)](DataProcessingRequestRoutes/GetResultAsync.md) | Վերադարձնում է [EnqueueAsync(DPRType, string, bool, ProcessDPRRequest, CancellationToken)](DataProcessingRequestRoutes/EnqueueAsync.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարման արդյունքը։ |
| [GetProgress(Guid)](DataProcessingRequestRoutes/GetProgress.md) | Վերադարձնում է [Enqueue(DPRType, string, bool, ProcessDPRRequest)](DataProcessingRequestRoutes/Enqueue.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարման պրոգրեսը։ |
| [GetProgressAsync(Guid, CancellationToken)](DataProcessingRequestRoutes/GetProgressAsync.md) | Վերադարձնում է [EnqueueAsync(DPRType, string, bool, ProcessDPRRequest, CancellationToken)](DataProcessingRequestRoutes/EnqueueAsync.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարման պրոգրեսը։ |
| [Stop(Guid)](DataProcessingRequestRoutes/Stop.md) | Ընդհատում է նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարումը։ |
| [StopAsync(Guid, CancellationToken)](DataProcessingRequestRoutes/StopAsync.md) | Ընդհատում է նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարումը։ |