---
title: DataProcessingRequest.DPRType հատկություն
---

## Նկարագիր

Համարժեքը 4x-ում։ [DataProcessingRequest.SysType](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/DataProcessingRequest.html#systype)

```c#
public DPRType DPRType { get; }
```

Վերադարձնում է տվյալների մշակման հարցման (`DPR`-ի) տեսակը, որը լրացված է նկարագրվող դասի վրա [DPR ատրիբուտի](../../types/attributes/DPRAttribute.md) մեջ։

* **DPRType.Report** - Հաշվետվությունների տվյալների մշակման հարցում
* **DPRType.OLAP** - Օլապ տվյալների մշակման հարցում
* **DPRType.JobElement** - Առաջադրանքների տվյալների մշակման հարցում
* **DPRType.Other** - Այլ տվյալների մշակման հարցում

