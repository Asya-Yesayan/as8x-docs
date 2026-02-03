---
title: EnqueueAsync(DPRType, string, bool, ProcessDPRRequest, CancellationToken)
nav_exclude: true
---

# DataProcessingRequestRoutes.EnqueueAsync(DPRType, string, bool, ProcessDPRRequest, CancellationToken) մեթոդ

```c#
public Task<DPRProcessEnqueueResponse> EnqueueAsync(DPRType type, 
                                                    string name, 
                                                    bool enableUIRequest, 
                                                    ProcessDPRRequest request, 
                                                    CancellationToken cancellationToken = default)
```

Հերթի է դնում [DPR](../../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը և վերադարձնում է `DPRProcessEnqueueResponse` դասի օբյեկտ, որը պարունակում է հերթի դրված [DPR](../../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի տվյալները (ներքին անուն, սատարում է չեղարկումը թե ոչ...) և Id՝ [DPR](../../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման ընթացքին հետևելու համար։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| type            | DPRType              | -              | DPR-ի տեսակը, որը նշվում է [DPR ատրիբուտում](../../../../server_api/Types/attributes/DPRAttribute.md)։  <br> **DPRType.Report** - Հաշվետվությունների տվյալների մշակման հարցում <br>  **DPRType.OLAP** - Օլապ տվյալների մշակման հարցում <br>  **DPRType.JobElement** - Առաջադրանքների տվյալների մշակման հարցում <br> **DPRType.Other** - Այլ տվյալների մշակման հարցում |
| name            | string               | -              | DPR-ի ներքին անունը։ |
| enableUIRequest | bool                 | -              | DPR-ի կատարման ընթացքում սերվիսից կլիենտ հաղորդագրություն ուղարկելու, հաղորդագրության պատասխանը ստանալու և այն սերվիսում մշակելու համար հնարավորության միացման հայտանիշ։ |
| request         | ProcessDPRRequest    | -              | DPR-ի կատարման համար անհրաժեշտ պարամետրերը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
