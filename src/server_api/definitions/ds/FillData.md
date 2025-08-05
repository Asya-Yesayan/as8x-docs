---
title: DataSource.FillData(DataSourceArgs<P>, CancellationToken) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Load](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Load.html)

```c#
protected virtual Task FillData(DataSourceArgs<P> args, 
                                CancellationToken stoppingToken)
```

Մեթոդը կանչվում է միջուկի կողմից array-based տվյալների աղբյուրի դեպքում։
նախատեսված է վերջնական [տողերի](Rows.md) ցուցակի ձևավորման համար։

Տե՛ս [ձեռնարկում](../ds_guide.md) [array-based տվյալների աղբյուրի նկարագրություն](ds_guide.md#array-based-տվյալների-աղբյուրի-նկարագրման-ձեռնարկ)։
