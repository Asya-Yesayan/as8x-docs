---
title: DataSource.AfterDataReaderClose մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnEachRow](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnEachRow.html) + [Valid](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Valid_Data.html)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AfterDataReaderClose(DataSourceArgs&lt;P&gt;, CancellationToken)](#datasourceafterdatareaderclosedatasourceargs-cancellationtoken-մեթոդ) | Մեթոդը կանչվում է միջուկի կողմից SQL հարցման կատարման ավարտից հետո, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն փակ է: |
| [AfterDataReaderClose(DataSourceArgs&lt;P&gt;, R)](#datasourceafterdatareaderclosedatasourceargs-r-մեթոդ) | Մեթոդը կանչվում է միջուկի կողմից SQL հարցման կատարման ավարտից հետո ամեն մի հաշվարկված տողի համար, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն փակ է: |

### DataSource.AfterDataReaderClose(DataSourceArgs&lt;P&gt;, CancellationToken) մեթոդ

```c#
protected virtual Task AfterDataReaderClose(DataSourceArgs<P> args, CancellationToken stoppingToken)
```

Մեթոդը կանչվում է միջուկի կողմից SQL հարցման կատարման ավարտից հետո, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն փակ է: 

Տե՛ս [AfterDataReaderCloseMode](AfterDataReaderCloseMode.md)։

Տե՛ս [օրինակը](../ds_guide_row_processing.md#օրինակ-1-1)։

### DataSource.AfterDataReaderClose(DataSourceArgs&lt;P&gt;, R) մեթոդ

```c#
protected virtual Task<bool> AfterDataReaderClose(DataSourceArgs<P> args, R row)
```

Մեթոդը կանչվում է միջուկի կողմից SQL հարցման կատարման ավարտից հետո ամեն մի հաշվարկված տողի համար, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն փակ է: 

Մեթոդը վերադարձնում է bool տիպի արժեք, որը ցույց է տալիս թե ընթացիկ տողը պետք է ընդգրկվի տվյալների աղբյուրի տողերի վերջնական ցուցակում, թե ոչ։

Տե՛ս [AfterDataReaderCloseMode](AfterDataReaderClose.md)։

Տե՛ս [օրինակը](../ds_guide_row_processing.md#օրինակ-2-1)։

