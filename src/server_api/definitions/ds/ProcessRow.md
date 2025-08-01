---
title: DataSource.ProcessRow(DataSourceArgs&lt;P&gt;, R, SqlDataReader) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnEachRow](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnEachRow.html) + [Valid](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Valid_Data.html)

```c#
protected virtual bool ProcessRow(DataSourceArgs<P> args, R row, SqlDataReader reader)
```

Մեթոդը կանչվում է միջուկի կողմից [MakeSqlCommand](MakeSqlCommand.md) մեթոդում ձևավորված SQL հարցման կատարման ընթացքում, երբ հարցման տվյալները կարդացող [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը դեռ բաց է:

Մեթոդը վերադարձնում է bool տիպի արժեք, որը ցույց է տալիս թե ընթացիկ տողը պետք է ընդգրկվի տվյալների աղբյուրի տողերի վերջնական ցուցակում, թե ոչ։

Տե՛ս [օրինակը](../ds_guide_row_processing.md#processrow)։
