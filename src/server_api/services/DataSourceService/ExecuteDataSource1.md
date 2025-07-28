---
title: DataSourceService.ExecuteDataSource(Type, Dictionary<string, object>, CancellationToken) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [OpenCursor](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDATA/OpenCursor.html)

```c#
public Task<List<T>> ExecuteDataSource<T>(Type dsType, Dictionary<string, object> parameters, CancellationToken cancellationToken = default)
```

Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։

**Պարամետրեր**

* `dsType` - Տվյալների աղբյուրի տիպը։
* `parameters` - Տվյալների աղբյուրի պարամետրերի ցանկը:
* `cancellationToken` - Ընդհատման օբյեկտ:
* `T` - Տվյալների աղբյուրի տողը նկարագրող դասը:

Օգտագործման օրինակին ծանոթանալու համար [տե՛ս](../../examples/ds.md#չտիպիզացված-կատարում):
