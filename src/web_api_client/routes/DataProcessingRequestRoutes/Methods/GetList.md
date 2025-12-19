---
title: DataProcessingRequestRoutes.GetList մեթոդ
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetList()](#dataprocessingrequestroutesgetlist-մեթոդ) | Վերադարձնում է համակարգում առկա բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, սատարում է չեղարկումը թե ոչ...)։ |
| [GetList(DPRType)](#dataprocessingrequestroutesgetlistdprtype-մեթոդ) | Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։ |

### DataProcessingRequestRoutes.GetList() մեթոդ

```c#
public IEnumerable<DPRInfo> GetList()
```

Վերադարձնում է համակարգում առկա բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, սատարում է չեղարկումը թե ոչ...)։

### DataProcessingRequestRoutes.GetList(DPRType) մեթոդ

```c#
public IEnumerable<DPRInfo> GetList(DPRType type)
```

Վերադարձնում է համակարգում առկա նշված `type` տիպի բոլոր DPR-ների մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| type            | DPRType              | -              | DPR-ի տեսակը, որը նշվում է [DPR ատրիբուտում](../../../server_api/types/attributes/DPRAttribute.md)։  <br> **DPRType.Report** - Հաշվետվությունների տվյալների մշակման հարցում <br>  **DPRType.OLAP** - Օլապ տվյալների մշակման հարցում <br>  **DPRType.JobElement** - Առաջադրանքների տվյալների մշակման հարցում <br> **DPRType.Other** - Այլ տվյալների մշակման հարցում |
