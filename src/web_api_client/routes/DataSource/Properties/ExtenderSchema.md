---
title: DataSource.ExtenderSchema հատկություն
---

```c#
public ExtenderSchemaEx ExtenderSchema { get; set; }
```

Վերադարձնում կամ նշանակում է [տվյալների աղբյուրի ընդլայնման](../../../extensions/Definitions/ds_extender.md) նկարագրությունը, որը պարունակում է ընդլայնման ներքին անունը, պարամետրերի ու սյուների հատկությունները։

Այս հատկությանը արժեք փոխանցելու դեպքում տվյալների աղբյուրը կատարելիս նաև հաշվարկվում է ընդլայնումը։

Այս հատկությունը լրացվում է [GetSchemaAsync](../ExtenderRoutes/GetSchemaAsync.md) մեթոդի կանչով՝ փոխանցելով ընդլայնման ներքին անունը։

```c#
ds.ExtenderSchema = await apiClient.Extender.GetSchemaAsync("CreatDocExtended");
```

Տե՛ս [օրինակը](../../examples/DataSource.md#օրինակ-2)։