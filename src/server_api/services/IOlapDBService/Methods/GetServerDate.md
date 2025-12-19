---
title: IOlapDBService.GetServerDate() մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Util.GetServerDate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/GetServerDate.html)

**Դաս՝** [IOlapDBService](../IOlapDBService.md)

```c#
public Task<DateTime> GetServerDate();
```

Վերադարձնում է SQL սերվերի ընթացիկ ամսաթիվը/ժամը կանչելով SQL-ի [GetDate](https://learn.microsoft.com/en-us/sql/t-sql/functions/getdate-transact-sql) ֆունկցիան։
