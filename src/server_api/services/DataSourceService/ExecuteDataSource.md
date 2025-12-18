---
title: DataSourceService.ExecuteDataSource մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OpenCursor](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDATA/OpenCursor.html)

**Դաս՝** [DataSourceService](../DataSourceService.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [ExecuteDataSource(string, Dictionary&lt;string, object&gt;, CancellationToken)](#datasourceserviceexecutedatasourcestring-dictionarystring-object-cancellationtoken-մեթոդ) | Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։ |
| [ExecuteDataSource(Type, Dictionary&lt;string, object&gt;, CancellationToken)](#datasourceserviceexecutedatasourcetype-dictionarystring-object-cancellationtoken-մեթոդ) | Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։ |

### DataSourceService.ExecuteDataSource(string, Dictionary&lt;string, object&gt;, CancellationToken) մեթոդ

```c#
public Task<List<T>> ExecuteDataSource<T>(string dsName, 
                                          Dictionary<string, object> parameters, 
                                          CancellationToken cancellationToken = default)
```

Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| dsName          | string               | -              | Տվյալների աղբյուրի ներքին անունը: |
| parameters      | Dictionary<string, object> | -              | Տվյալների աղբյուրի պարամետրերի ցանկը: |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |

Օգտագործման օրինակին ծանոթանալու համար [տե՛ս](../../examples/ds.md#չտիպիզացված-կատարում):

### DataSourceService.ExecuteDataSource(Type, Dictionary&lt;string, object&gt;, CancellationToken) մեթոդ

```c#
public Task<List<T>> ExecuteDataSource<T>(Type dsType, 
                                          Dictionary<string, object> parameters, 
                                          CancellationToken cancellationToken = default)
```

Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| dsType          | Type                 | -              | Տվյալների աղբյուրի տիպը։ |
| parameters      | Dictionary<string, object> | -              | Տվյալների աղբյուրի պարամետրերի ցանկը: |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |

Օգտագործման օրինակին ծանոթանալու համար [տե՛ս](../../examples/ds.md#չտիպիզացված-կատարում):

