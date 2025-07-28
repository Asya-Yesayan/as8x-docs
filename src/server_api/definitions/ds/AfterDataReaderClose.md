---
title: DataSource.AfterDataReaderClose(DataSourceArgs<P>, CancellationToken) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [OnEachRow](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnEachRow.html) + [Valid](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Valid_Data.html)

```c#
protected virtual Task AfterDataReaderClose(DataSourceArgs<P> args, CancellationToken stoppingToken)
```

Մեթոդը կանչվում է միջուկի կողմից SQL հարցման կատարման ավարտից հետո, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն փակ է: 

Տե՛ս [AfterDataReaderCloseMode](AfterDataReaderCloseMode.md)։

Տե՛ս [օրինակը](../ds_guide_row_processing.md#օրինակ-1-1)։
