---
title: DataSource.BeforeExecuteSQLCommand(DataSourceArgs<P>, CancellationToken) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnOpen](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnOpen.html)

```c#
protected virtual Task BeforeExecuteSQLCommand(DataSourceArgs<P> args, 
                                               CancellationToken stoppingToken)
```

Մեթոդը կանչվում է միջուկի կողմից [MakeSqlCommand](MakeSQLCommand.md) մեթոդի ավարտից հետո, Նախատեսված է տվյալների աղբյուրի կատարումից առաջ նախապատրաստական աշխատանքներ կատարելու համար:
