---
title: DataProcessingRequestRoutes.GetListAsync մեթոդ
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetListAsync(CancellationToken)](#dataprocessingrequestroutesgetlistasynccancellationtoken-մեթոդ) | Վերադարձնում է համակարգում առկա բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |
| [GetListAsync(DPRType, CancellationToken)](#dataprocessingrequestroutesgetlistasyncdprtype-cancellationtoken-մեթոդ)| Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |

### DataProcessingRequestRoutes.GetListAsync(CancellationToken) մեթոդ

```c#
public Task<IEnumerable<DPRInfo>> GetListAsync(CancellationToken cancellationToken = default)
```

Վերադարձնում է համակարգում առկա բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։

**Պարամետրեր**

* `cancellationToken` - Ընդհատման օբյեկտ:

### DataProcessingRequestRoutes.GetListAsync(DPRType, CancellationToken) մեթոդ

```c#
public Task<IEnumerable<DPRInfo>> GetListAsync(DPRType type, 
                                               CancellationToken cancellationToken = default)
```

Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։

**Պարամետրեր**

* `type` - DPR-ի տեսակը, որը նշվում է [DPR ատրիբուտում](../../../server_api/types/attributes/DPRAttribute.md)։
  * **DPRType.Report** - Հաշվետվությունների տվյալների մշակման հարցում
  * **DPRType.OLAP** - Օլապ տվյալների մշակման հարցում
  * **DPRType.JobElement** - Առաջադրանքների տվյալների մշակման հարցում
  * **DPRType.Other** - Այլ տվյալների մշակման հարցում
* `cancellationToken` - Ընդհատման օբյեկտ:

