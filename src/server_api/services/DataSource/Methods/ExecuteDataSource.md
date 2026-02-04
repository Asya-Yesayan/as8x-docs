---
title: ExecuteDataSource
parent: "Մեթոդներ"
grand_parent: "DataSourceService"
---

# DataSourceService.ExecuteDataSource մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [OpenCursor](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDATA/OpenCursor.html)

**Դաս՝** [DataSourceService](../DataSourceService.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [ExecuteDataSource(string, Dictionary&lt;string, object&gt;, CancellationToken, bool)](#datasourceserviceexecutedatasourcestring-dictionarystring-object-cancellationtoken-bool-մեթոդ) | Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։ |
| [ExecuteDataSource(Type, Dictionary&lt;string, object&gt;, CancellationToken, bool)](#datasourceserviceexecutedatasourcetype-dictionarystring-object-cancellationtoken-bool-մեթոդ) | Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։ |

### DataSourceService.ExecuteDataSource(string, Dictionary&lt;string, object&gt;, CancellationToken, bool) մեթոդ

```c#
public Task<List<T>> ExecuteDataSource<T>(string dsName, 
                                          Dictionary<string, object> parameters, 
                                          CancellationToken cancellationToken = default,
                                          bool suppressProgress = true)
```

Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| dsName          | string               | -              | Տվյալների աղբյուրի ներքին անունը: |
| parameters      | Dictionary<string, object> | -              | Տվյալների աղբյուրի պարամետրերի ցանկը: |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
| suppressProgress | bool              | true         | Կատարման պրոգրեսի չարժեքավորման հայտանիշ։  |

Օգտագործման օրինակին ծանոթանալու համար [տե՛ս](../../../Examples/ds.md#չտիպիզացված-կատարում):

### DataSourceService.ExecuteDataSource(Type, Dictionary&lt;string, object&gt;, CancellationToken, bool) մեթոդ

```c#
public Task<List<T>> ExecuteDataSource<T>(Type dsType, 
                                          Dictionary<string, object> parameters, 
                                          CancellationToken cancellationToken = default,
                                          bool suppressProgress = true)
```

Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| dsType          | Type                 | -              | Տվյալների աղբյուրի տիպը։ |
| parameters      | Dictionary<string, object> | -              | Տվյալների աղբյուրի պարամետրերի ցանկը: |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
| suppressProgress | bool              | true         | Կատարման պրոգրեսի չարժեքավորման հայտանիշ։  |

Օգտագործման օրինակին ծանոթանալու համար [տե՛ս](../../../Examples/ds.md#չտիպիզացված-կատարում):

