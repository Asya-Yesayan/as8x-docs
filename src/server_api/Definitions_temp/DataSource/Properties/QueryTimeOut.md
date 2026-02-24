---
title: QueryTimeOut
parent: "Հատկություններ"
grand_parent: "Տվյալների աղբյուր"
---

# DataSource.QueryTimeOut հատկություն

## Նկարագիր

**Համարժեքը 4x-ում՝** Data.QueryTimeout

**Դաս՝** [DataSource](../DataSource.md)

```c#
public int QueryTimeOut { get; set; } = -1;
```

Վերադարձնում կամ արժեքավորում է տվյալների աղբյուրի [MakeSqlCommand](../Methods/MakeSQLCommand.md)-ում ձևավորված Sql հարցման կատարման առավելագույն ժամանակը (վայրկյաններով): Եթե -1 է կամ փոքր է [սեսսիայի](../../../Types/SessionInfo.md) **DsQueryTimeout** հատկության արժեքից, ապա կիրառվում է վերջինիս արժեքը։