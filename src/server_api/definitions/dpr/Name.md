---
title: DataProcessingRequest.Name հատկություն
---

## Նկարագիր

Համարժեքը 4x-ում։ [DataProcessingRequest.Name](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/DataProcessingRequest.html#name)

```c#
public string Name { get; }
```

Վերադարձնում է տվյալների մշակման հարցման (`DPR`-ի) ներքին անունը: 

Եթե [DPR ատրիբուտում](../../types/attributes/DPRAttribute.md) `Name` դաշտը լրացված է և դատարկ չէ, ապա վերադարձնում է այդ արժեքը, հակառակ դեպքում վերադարձնում է DPR-ը նկարագրող դասի անունը։
