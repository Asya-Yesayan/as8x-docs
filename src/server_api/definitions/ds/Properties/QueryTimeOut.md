---
title: DataSource.QueryTimeOut հատկություն
---

## Նկարագիր

**Համարժեքը 4x-ում՝** Data.QueryTimeout

**Դաս՝** [DataSource](../../ds.md)

```c#
public int QueryTimeOut { get; set; } = -1;
```

Վերադարձնում կամ արժեքավորում է տվյալների աղբյուրի [MakeSqlCommand](MakeSQLCommand.md)-ում ձևավորված Sql հարցման կատարման առավելագույն ժամանակը (վայրկյաններով): Եթե -1 է կամ փոքր է [սեսսիայի](../../../types/SessionInfo.md) **DsQueryTimeout** հատկության արժեքից, ապա կիրառվում է վերջինիս արժեքը։