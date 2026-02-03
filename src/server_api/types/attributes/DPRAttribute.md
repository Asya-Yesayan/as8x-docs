---
layout: page
title: "DPRAttribute դաս"
nav_exclude: true
---

# DPRAttribute դաս

DPR ատրիբուտը նախատեսված է [DPR](../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ը նկարագրող դասի վրա դնելու համար։

```c#
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
public class DPRAttribute
```

## Հատկություններ

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `Name` | string | DPR-ը նկարագրող դասի անունը։ | DPR-ի ներքին անունը։ |
| `DPRType` |  | - | DPR-ի տեսակը։ <br> **DPRType.Report** - Հաշվետվությունների տվյալների մշակման հարցում: <br> **DPRType.OLAP** - Օլապ տվյալների մշակման հարցում: <br> **DPRType.JobElement** - Առաջադրանքների տվյալների մշակման հարցում: <br> **DPRType.Other** - Այլ տվյալների մշակման հարցում:    |
| `ArmenianCaption` | string | - | DPR-ի հայերեն անվանումը: |
| `EnglishCaption` | string | - | DPR-ի անգլերեն անվանումը: |
| `IsCancellationSupported` | FeatureAvailability | Enabled | Թույլատրված է արդյոք DPR-ի ընդհատումը UI-ից։ <br> **FeatureAvailability.Enabled** - Թույլատրված է DPR-ի ընդհատումը UI-ից: <br> **FeatureAvailability.Disabled** - Արգելված է DPR-ի ընդհատումը UI-ից:  |

**Օրինակ**

```c#
[DPR(DPRType = DPRType.Other, ArmenianCaption = "Փաստաթղթի դաշտերի խմբագրում", EnglishCaption = "Document's fields' edition", 
     IsCancellationSupported = FeatureAvailability.Disabled)]
public class EditDocumentsFields : DataProcessingRequest<EditFieldsResponse, EditFieldsRequest>
{
    //...
}
```