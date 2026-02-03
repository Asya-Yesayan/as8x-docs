---
title: GetSchemaAsync(string, CancellationToken)
nav_exclude: true
---

# ExtenderRoutes.GetSchemaAsync(string, CancellationToken) մեթոդ

```c#
public Task<ExtenderSchema> GetSchemaAsync(string extenderName, 
                                           CancellationToken cancellationToken = default)
```

Վերադարձնում է տվյալների աղբյուրի ընդլայնման նկարագրությունը, որը պարունակում է ընդլայնման ներքին անունը, պարամետրերի ու սյուների հատկությունները։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| extenderName    | string               | -              | Տվյալների աղբյուրի ընդլայնման ներքին անունը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |

Մեթոդի վերադարձված արժեքը անհրաժեշտ է վերագրել [տվյալների աղբյուր](../../DataSource/DataSource.md)-ի [ExtenderSchema](../../DataSource/Properties/ExtenderSchema.md) հատկությանը, որի արդյունքում տվյալների աղբյուրը կատարելիս կհաշվարկվի նաև ընդլայնումը։

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../../Examples/DataSource.md#օրինակ-2)։
