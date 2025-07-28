---
title: DataProcessingRequestRoutes.EnqueueAsync(DPRType, string, bool, JobDPRRequest, CancellationToken) մեթոդ
---

```c#
public Task<DPRJobEnqueueResponse> EnqueueAsync(DPRType type, string name, 
                                                bool enableUIRequest, JobDPRRequest request, 
                                                CancellationToken cancellationToken = default)
```

Հերթի է դնում [DPR](../../../server_api/definitions/dpr.md)-ի կատարումը և վերադարձնում է `DPRJobEnqueueResponse` դասի օբյեկտ, որը պարունակում է հերթի դրված [DPR](../../../server_api/definitions/dpr.md)-ի տվյալները (ներքին անուն, սատարում է չեղարկումը թե ոչ...) և Id՝ [DPR](../../../server_api/definitions/dpr.md)-ի կատարման ընթացքին հետևելու համար։

**Պարամետրեր**

* `type` - DPR-ի տեսակը, որը նշվում է [DPR ատրիբուտում](../../../server_api/types/attributes/DPRAttribute.md)։
  * **DPRType.Report** - Հաշվետվությունների տվյալների մշակման հարցում
  * **DPRType.OLAP** - Օլապ տվյալների մշակման հարցում
  * **DPRType.JobElement** - Առաջադրանքների տվյալների մշակման հարցում
  * **DPRType.Other** - Այլ տվյալների մշակման հարցում
* `name` - DPR-ի ներքին անունը։
* `enableUIRequest` - DPR-ի կատարման ընթացքում սերվիսից կլիենտ հաղորդագրություն ուղարկելու, հաղորդագրության պատասխանը ստանալու և այն սերվիսում մշակելու համար հնարավորության միացման հայտանիշ։
* `request` - DPR-ի կատարման համար անհրաժեշտ պարամետրերը։
* `cancellationToken` - Ընդհատման օբյեկտ:
