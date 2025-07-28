---
title: DataSource.IsSQLBased հատկություն
---

## Նկարագիր

Համարժեքը 4x-ում։ [Data.ArrayBased](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDATA/ArrayBased.html)

```c#
public virtual bool IsSQLBased
{
    get { return true; }
}
```

Տվյալների աղբյուրը ըստ տվյալների բեռնման աղբյուրի լինում է 2 տեսակի՝
- sql-based (տվյալները ստացվում են տվյալների բազայից՝ sql հարցման միջոցով),
- array-based (տվյալները ստացվում են այլ աղբյուրներից և ավելացվում տվյալների աղբյուրի [տողերի](Rows.md) զանգվածին):
  
Տեսակը որոշվում է այս հատկության միջոցով, որի լռությամբ արժեքը **true** է։
