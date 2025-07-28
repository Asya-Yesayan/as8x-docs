---
title: DataProcessingRequestRoutes դաս
---

## Ներածություն

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Enqueue](DataProcessingRequestRoutes/Enqueue.md) | Հերթի է դնում [DPR](../../server_api/definitions/dpr.md)-ի կատարումը և վերադարձնում է `DPRJobEnqueueResponse` դասի օբյեկտ, որը պարունակում է հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի տվյալները (ներքին անուն, սատարում է չեղարկումը թե ոչ...) և Id՝ [DPR](../../server_api/definitions/dpr.md)-ի կատարման ընթացքին հետևելու համար։ |
| [EnqueueAsync](DataProcessingRequestRoutes/EnqueueAsync.md) | Հերթի է դնում [DPR](../../server_api/definitions/dpr.md)-ի կատարումը և վերադարձնում է `DPRJobEnqueueResponse` դասի օբյեկտ, որը պարունակում է հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի տվյալները (ներքին անուն, սատարում է չեղարկումը թե ոչ...) և Id՝ [DPR](../../server_api/definitions/dpr.md)-ի կատարման ընթացքին հետևելու համար։ |
| [GetList](DataProcessingRequestRoutes/GetList.md) | Վերադարձնում է համակարգում առկա բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, սատարում է չեղարկումը թե ոչ...)։ |
| [GetListAsync](DataProcessingRequestRoutes/GetListAsync.md) | Վերադարձնում է համակարգում առկա բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |
| [GetList](DataProcessingRequestRoutes/GetList1.md) | Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |
| [GetListAsync](DataProcessingRequestRoutes/GetListAsync1.md) | Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |
| [GetObject](DataProcessingRequestRoutes/GetObject.md) | Վերադարձնում է DPR-ի մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ, սատարում է չեղարկումը թե ոչ)՝ ըստ տեսակի և ներքին անվան։ |
| [GetObjectAsync](DataProcessingRequestRoutes/GetObjectAsync.md) | Վերադարձնում է DPR-ի մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ, սատարում է չեղարկումը թե ոչ)՝ ըստ տեսակի և ներքին անվան։ |
| [GetResult](DataProcessingRequestRoutes/GetResult.md) | Վերադարձնում է [Enqueue](DataProcessingRequestRoutes/Enqueue.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարման արդյունքը։ |
| [GetResultAsync](DataProcessingRequestRoutes/GetResultAsync.md) | Վերադարձնում է [EnqueueAsync](DataProcessingRequestRoutes/EnqueueAsync.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարման արդյունքը։ |
| [GetProgress](DataProcessingRequestRoutes/GetProgress.md) | Վերադարձնում է [Enqueue](DataProcessingRequestRoutes/Enqueue.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարման պրոգրեսը։ |
| [GetProgressAsync](DataProcessingRequestRoutes/GetProgressAsync.md) | Վերադարձնում է [EnqueueAsync](DataProcessingRequestRoutes/EnqueueAsync.md) մեթոդի միջոցով նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարման պրոգրեսը։ |
| [Stop](DataProcessingRequestRoutes/Stop.md) | Ընդհատում է նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարումը։ |
| [StopAsync](DataProcessingRequestRoutes/StopAsync.md) | Ընդհատում է նախապես հերթի դրված [DPR](../../server_api/definitions/dpr.md)-ի կատարումը։ |