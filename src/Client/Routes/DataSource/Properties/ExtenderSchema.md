---
title: DataSource.ExtenderSchema հատկություն
---

```c#
public ExtenderSchemaEx ExtenderSchema { get; set; }
```

Վերադարձնում կամ նշանակում է [տվյալների աղբյուրի ընդլայնման](../../../extensions/Definitions/DataSourceExtender/DataSourceExtender.md) նկարագրությունը, որը պարունակում է ընդլայնման ներքին անունը, պարամետրերի ու սյուների հատկությունները։

Այս հատկությանը արժեք փոխանցելու դեպքում տվյալների աղբյուրը կատարելիս նաև հաշվարկվում է ընդլայնումը։

Այս հատկությունը լրացվում է [GetSchemaAsync](../../Extender/Methods/GetSchemaAsync.md) մեթոդի կանչով՝ փոխանցելով ընդլայնման ներքին անունը։

```c#
ds.ExtenderSchema = await apiClient.Extender.GetSchemaAsync("CreatDocExtended");
```

Տե՛ս [օրինակը](../../../Examples/DataSource.md#օրինակ-2)։