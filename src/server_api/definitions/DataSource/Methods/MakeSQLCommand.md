---
title: DataSource.MakeSQLCommand(DataSourceArgs<P>, CancellationToken) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [SQL](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/SQL.html)

**Դաս՝** [DataSource](../DataSource.md)

```c#
protected virtual Task<SqlCommand> MakeSQLCommand(DataSourceArgs<P> args, 
                                                  CancellationToken stoppingToken)
```

Մեթոդը կանչվում է միջուկի կողմից, այն հարկավոր է մշակել և վերադարձնել sql-based տվյալների աղբյուրի sql հարցման կատարող [SqlCommand](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand)-ը։

Տե՛ս [ձեռնարկում](../ds_guide.md) [Sql հարցման ձևավորում](../ds_guide.md#sql-հարցման-ձևավորում)։
