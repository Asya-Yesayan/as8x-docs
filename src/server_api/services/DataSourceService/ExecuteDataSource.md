---
title: DataSourceService.ExecuteDataSource մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OpenCursor](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDATA/OpenCursor.html)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [ExecuteDataSource(string, Dictionary&lt;string, object&gt;, CancellationToken)](#datasourceserviceexecutedatasourcestring-dictionarystring-object-cancellationtoken-մեթոդ) | Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։ |
| [ExecuteDataSource(Type, Dictionary&lt;string, object&gt;, CancellationToken)](#datasourceserviceexecutedatasourcetype-dictionarystring-object-cancellationtoken-մեթոդ) | Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։ |

### DataSourceService.ExecuteDataSource(string, Dictionary&lt;string, object&gt;, CancellationToken) մեթոդ

```c#
public Task<List<T>> ExecuteDataSource<T>(string dsName, Dictionary<string, object> parameters, CancellationToken cancellationToken = default)
```

Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։

**Պարամետրեր**

* `dsName` - Տվյալների աղբյուրի ներքին անունը:
* `parameters` - Տվյալների աղբյուրի պարամետրերի ցանկը:
* `cancellationToken` - Ընդհատման օբյեկտ:
* `T` - Տվյալների աղբյուրի տողը նկարագրող դասը։

Օգտագործման օրինակին ծանոթանալու համար [տե՛ս](../../examples/ds.md#չտիպիզացված-կատարում):

### DataSourceService.ExecuteDataSource(Type, Dictionary&lt;string, object&gt;, CancellationToken) մեթոդ

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

