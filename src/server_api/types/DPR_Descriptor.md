---
layout: page
title: "Descriptor" 
---
    
Այս դասը նախատեսված է [DPR](../definitions/dpr.md)-ի մետատվյալների նկարագրման համար։

Օգտագործվում է [IProcessServerClient](../services/IProcessServerClient.md).[Enqueue](../services/IProcessServerClient/Enqueue.md) մեթոդով [DPR](../definitions/dpr.md)-ի կատարումը հերթի դնելիս։

```c#    
public class Descriptor
{
    public string Name { get; private set; }
    public DPRType DPRType { get; private set; }
    public string ArmenianCaption { get; private set; }
    public string EnglishCaption { get; private set; }
    public Type Type { get; private set; }
    public byte[] TimeStamp { get; private set; }
    public bool IsDynamic { get; private set; }
    public FeatureAvailability IsCancellationSupported { get; private set; } = FeatureAvailability.Enabled;
}
```

## Հատկություններ

| Անվանում                | Տվյալների տիպ       | Լռությամբ արժեք             | Նկարագրություն |
| ----------------------- | ------------------- | --------------------------- | ----------- |
| Name                    | string              |          -                   | [DPR](../definitions/dpr.md)-ի ներքին անունը։  |
| DPRType                 | DPRType             |           -                  | [DPR](../definitions/dpr.md)-ի տեսակը։ |
| ArmenianCaption         | string              |          -                   | [DPR](../definitions/dpr.md)-ի հայերեն անվանումը։  |
| EnglishCaption          | string              |          -                   | [DPR](../definitions/dpr.md)-ի անգլերեն անվանումը։ |
| Type                    | Type                |            -                 | [DPR](../definitions/dpr.md)-ի տեսակը: <br> DPRType.Report - Հաշվետվությունների տվյալների մշակման հարցում, <br> DPRType.OLAP - Օլապ տվյալների մշակման հարցում, <br> DPRType.JobElement - Առաջադրանքների տվյալների մշակման հարցում, <br> DPRType.Other - Այլ տվյալների մշակման հարցում։ |
| TimeStamp               | byte[]              |           -                  | [DPR](../definitions/dpr.md)-ի վերջին փոփոխման ամսաթիվը/ժամանակը տվյալների պահոցում։ Ոչ դինամիկ նկարագրության դեպքում վերադարձնում է դատարկ զանգված։  |
| IsDynamic               | bool                |            -                 | Ցույց է տալիս, արդյոք [DPR](../definitions/dpr.md)-ը հանդիսանում է [կազմակերպության սեփական նկարագրություն](../../extensions/Definitions/dpr_new_guide.md), թե ոչ։ |
| IsCancellationSupported | FeatureAvailability | FeatureAvailability.Enabled | Ցույց է տալիս, արդյոք հնարավոր է դադարեցնել [DPR](../definitions/dpr.md)-ի կատարումը UI-ից։ |