---
title: DataSource.SupportsSnapshotIsolation հատկություն
---

```c#
public virtual bool SupportsSnapshotIsolation
{
   get { return false; }
}
```

Վերադարձնում է տվյալների աղբյուրի հարցման կատարման իզոլյացիայի մակարդակը [snapshot](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/sql/snapshot-isolation-in-sql-server) է, թե [ReadCommitted](https://learn.microsoft.com/en-us/dotnet/api/system.data.isolationlevel#fields):

<!-- ### AddRow

```c#
protected void AddRow(R row)
```

Ավելացնում է տող տվյալների աղբյուրի տողերի ցուցակում` որպես մուտքային R պարամետր ստանալով տվյալների աղբյուրի սյուները նկարագրող դասը։ -->

<!-- ### Execute

```c#
public Task<DataSourceResult<R>> Execute(DataSourceArgs<P> args, CancellationToken stoppingToken, IExtender extender = null)
```

Կատարում է տվյալների աղբյուրը` որպես մուտքային պարամետրեր ստանալով տվյալների աղբյուրի՝
* args - DataSourceArgs<P> դասի օբյեկտ՝ որպես P փոխանցելով պարամետրերը նկարագրող դասը, որը պարունակում է տվյալների աղղբյուրի պարամետրերը, վերադարձվող սյուների անվանումների ցուցակը և մետատվյալներ,
* stoppingToken - չեղարկման տոկենը,
* extender - տվյալների աղբյուրի ընդլայնումը,

Տե՛ս [օրինակը](../../examples/ds.md#2-տիպիզացված-կատարում)։ -->
