---
title: DataProcessingRequestRoutes.GetObjectAsync(DPRType, string, CancellationToken) մեթոդ
---

```c#
public Task<DPRInfoExtended> GetObjectAsync(DPRType type, 
                                            string name, 
                                            CancellationToken cancellationToken = default)
```

Վերադարձնում է DPR-ի մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ, սատարում է չեղարկումը թե ոչ)՝ ըստ տեսակի և ներքին անվան։

**Պարամետրեր**

* `type` - DPR-ի տեսակը, որը նշվում է [DPR ատրիբուտում](../../../server_api/types/attributes/DPRAttribute.md)։
  * **DPRType.Report** - Հաշվետվությունների տվյալների մշակման հարցում
  * **DPRType.OLAP** - Օլապ տվյալների մշակման հարցում
  * **DPRType.JobElement** - Առաջադրանքների տվյալների մշակման հարցում
  * **DPRType.Other** - Այլ տվյալների մշակման հարցում
* `name` - DPR-ի ներքին անունը։
* `cancellationToken` - Ընդհատման օբյեկտ:
