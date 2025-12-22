---
title: DataSource.CommandBehaviorFlag հատկություն
---

## Նկարագիր

**Դաս՝** [DataSource](../DataSource.md)

```c#
protected virtual CommandBehavior CommandBehaviorFlag
{
   get { return CommandBehavior.Default; }
}
```

Այս հատկության միջոցով ձևավորվում է [MakeSqlCommand](../Methods/MakeSQLCommand.md)-ում ձևավորված հարցման [ExecuteReaderAsync](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand.executereaderasync#microsoft-data-sqlclient-sqlcommand-executereaderasync(system-data-commandbehavior-system-threading-cancellationtoken))-ի մեթոդով կատարման ժամանակ `behavior` պարամետրի արժեքը։
