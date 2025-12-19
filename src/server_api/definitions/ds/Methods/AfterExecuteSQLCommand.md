---
title: DataSource.AfterExecuteSQLCommand(DataSourceArgs<P>, SqlDataReader) մեթոդ
---

## Նկարագիր

**Դաս՝** [DataSource](../../ds.md)

```c#
protected virtual void AfterExecuteSQLCommand(DataSourceArgs<P> args, 
                                              SqlDataReader reader)
```

Մեթոդը կանչվում է միջուկի կողմից SQL հարցման սկսելուց հետո, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն բաց է: 
Նախատեսված է `reader`-ից սյունակների դիրքերի ստացման համար [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader).[GetOrdinal](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader.getordinal) մեթոդով։

Տե՛ս [օրինակը](../../ds_guide_row_processing.md)։
