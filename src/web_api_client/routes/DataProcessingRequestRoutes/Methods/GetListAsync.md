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

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |

### DataProcessingRequestRoutes.GetListAsync(DPRType, CancellationToken) մեթոդ

```c#
public Task<IEnumerable<DPRInfo>> GetListAsync(DPRType type, 
                                               CancellationToken cancellationToken = default)
```

Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| type            | DPRType              | -              | DPR-ի տեսակը, որը նշվում է [DPR ատրիբուտում](../../../server_api/types/attributes/DPRAttribute.md)։  <br> **DPRType.Report** - Հաշվետվությունների տվյալների մշակման հարցում <br>  **DPRType.OLAP** - Օլապ տվյալների մշակման հարցում <br>  **DPRType.JobElement** - Առաջադրանքների տվյալների մշակման հարցում <br> **DPRType.Other** - Այլ տվյալների մշակման հարցում |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |

