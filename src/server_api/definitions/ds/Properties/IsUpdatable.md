---
title: DataSource.IsUpdatable հատկություն
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Data.UpdateSQL](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDATA/UpdateSQL.html)

**Դաս՝** [DataSource](../../ds.md)

```c#
public virtual bool IsUpdatable
{
    get { return false; }
}
```

Տվյալների աղբյուրում նոր տող ավելացնելու, ջնջելու կամ թարմացնելու հնարավորությունը ապահովելու համար անհրաժեշտ է գերբեռնել այս հատկությունը՝ վերադարձնելով **true** արժեք և [MakeSQLCommand](../Methods/MakeSQLCommand.md) մեթոդի `args` պարամետրի `IsUpdate` հատկության **true** արժեքի դեպքում ձևավորվող sql հարցման տեքստում ավելացնել ֆիլտրում ըստ տվյալների աղբյուրի տողի նույննականացուցիչի՝ `args.ISN`։ 
Սովորաբար տողի նույննականացուցիչ հանդիսանում է փաստաթղթի ISN, բայց կարող է նաև լինել այլ արժեք։
