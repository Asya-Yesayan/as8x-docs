---
title: DataSource.AfterDataReaderClose(DataSourceArgs<P>, R) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [OnEachRow](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnEachRow.html) + [Valid](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Valid_Data.html)

```c#
protected virtual Task<bool> AfterDataReaderClose(DataSourceArgs<P> args, R row)
```

Մեթոդը կանչվում է միջուկի կողմից SQL հարցման կատարման ավարտից հետո ամեն մի հաշվարկված տողի համար, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն փակ է: 

Մեթոդը վերադարձնում է bool տիպի արժեք, որը ցույց է տալիս թե ընթացիկ տողը պետք է ընդգրկվի տվյալների աղբյուրի տողերի վերջնական ցուցակում, թե ոչ։

Տե՛ս [AfterDataReaderCloseMode](AfterDataReaderClose.md)։

Տե՛ս [օրինակը](../ds_guide_row_processing.md#օրինակ-2-1)։
