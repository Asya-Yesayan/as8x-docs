---
title: Enqueue
parent: "Մեթոդներ"
grand_parent: "IProcessServerClient"
---

# IProcessServerClient.Enqueue(DPR.Descriptor, object, bool, IServiceProvider, Dictionary<int, UIRequestResultBase>, string, bool) մեթոդ

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Task<ProcessEnqueueResponse> Enqueue(DPR.Descriptor dpr, 
                                            object param, 
                                            bool enableUIRequest,
                                            IServiceProvider serviceProvider,
                                            Dictionary<int, UIRequestResultBase> uiResponse, 
                                            string sessionGuid,
                                            bool isUnicode = false)
```

Հերթի է դնում [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարումը և վերադարձնում է Id՝ [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման ընթացքին հետևելու համար։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| dpr             | DPR.Descriptor       | -              | [DPR-ի մետատվյալները նկարագրող դասի օբյեկտ](../../../Types/DPR_Descriptor.md)։ |
| param           | object               | -              | [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման համար անհրաժեշտ պարամետրերը նկարագրող դասի օբյեկտ։ |
| enableUIRequest | bool                 | -              | Սերվիսից կլիենտ հաղորդագրություն ուղարկելու, հաղորդագրության պատասխանը ստանալու և այն սերվիսում մշակելու համար հնարավորության միացման հայտանիշ։ |
| serviceProvider | IServiceProvider     | -              | [IServiceProvider](https://learn.microsoft.com/en-us/dotnet/api/system.iserviceprovider) դասի օբյեկտ, որը օգտագործվում է մեթոդի աշխատանքի համար անհրաժեշտ սերվիսները [ինյեկցիա](../../../../Project/injection.md) անելու համար։ |
| uiResponse      | Dictionary<int, UIRequestResultBase> | -              | — |
| sessionGuid     | string               | -              | Այն [սեսսիայի](../../../Types/SessionInfo.md) id-ն, որում հերթի է դրվում DPR-ը։ Սովորաբար այս պարամետրին տրվում է ընթացիկ սեսսիայի id-ն, որը կարելի է ստանալ [ISessionInfoService](../../ISessionInfo/ISessionInfoService.md).[CurrentSessionGuid](../../ISessionInfo/Properties/CurrentSessionGuid.md) հատկության միջոցով։ |
| isUnicode       | bool                 | false          | Ցույց է տալիս, թե DPR-ի կատարման պրոգրեսում տվյալները պետք է ցուցադրվեն `Unicode` կոդավորմամբ թե ոչ։ `false` արժեքի դեպքում տվյալները ցուցադրվում են `ANSI` կոդավորմամբ։ |