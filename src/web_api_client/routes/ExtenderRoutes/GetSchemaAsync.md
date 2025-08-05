---
title: ExtenderRoutes.GetSchemaAsync(string, CancellationToken) մեթոդ
---

```c#
public Task<ExtenderSchema> GetSchemaAsync(string extenderName, 
                                           CancellationToken cancellationToken = default)
```

Վերադարձնում է տվյալների աղբյուրի ընդլայնման նկարագրությունը, որը պարունակում է ընդլայնման ներքին անունը, պարամետրերի ու սյուների հատկությունները։

**Պարամետրեր**

* `extenderName` - Տվյալների աղբյուրի ընդլայնման ներքին անունը։
* `cancellationToken` - Ընդհատման օբյեկտ:

Մեթոդի վերադարձված արժեքը անհրաժեշտ է վերագրել [տվյալների աղբյուր](../DataSource.md)-ի [ExtenderSchema](../DataSource/ExtenderSchema.md) հատկությանը, որի արդյունքում տվյալների աղբյուրը կատարելիս կհաշվարկվի նաև ընդլայնումը։

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../examples/DataSource.md#օրինակ-2)։
