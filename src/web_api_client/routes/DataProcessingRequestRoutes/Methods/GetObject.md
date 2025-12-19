---
title: DataProcessingRequestRoutes.GetObject(DPRType, string) մեթոդ
---

```c#
public DPRInfoExtended GetObject(DPRType type, 
                                 string name)
```

Վերադարձնում է DPR-ի մետատվյալները (ներքին անուն, հայերեն/անգլերեն անվանումներ, տեսակ, սատարում է չեղարկումը թե ոչ)՝ ըստ տեսակի և ներքին անվան։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| type            | DPRType              | -              | DPR-ի տեսակը, որը նշվում է [DPR ատրիբուտում](../../../../server_api/types/attributes/DPRAttribute.md)։  <br> **DPRType.Report** - Հաշվետվությունների տվյալների մշակման հարցում <br>  **DPRType.OLAP** - Օլապ տվյալների մշակման հարցում <br>  **DPRType.JobElement** - Առաջադրանքների տվյալների մշակման հարցում <br> **DPRType.Other** - Այլ տվյալների մշակման հարցում |
| name            | string               | -              | DPR-ի ներքին անունը։ |
