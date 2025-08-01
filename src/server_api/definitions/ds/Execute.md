---
title: DataSource.Execute(P, HashSet<string>, IExtender, CancellationToken) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OpenCursor](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDATA/OpenCursor.html)

```c#
public Task<DataSourceResult<R>> Execute(P param, HashSet<string> columns = null, IExtender extender = null, CancellationToken stoppingToken = default)
```

Կատարում է տվյալների աղբյուրը` որպես մուտքային պարամետրեր ստանալով տվյալների աղբյուրի՝
* `param` - պարամետրերը նկարագրող դասի օբյեկտ,
* `columns` - վերադարձվող սյուների անվանումների ցուցակը,
* `extender` - տվյալների աղբյուրի ընդլայնումը,
* `stoppingToken` - ընդհատման օբյեկտը։

Տե՛ս [օրինակը](../../examples/ds.md#2-տիպիզացված-կատարում)։

<!-- ### GetExecutionPhases

```c#
public virtual IEnumerable<DataSourceExecutionPhase> GetExecutionPhases()
```

Վերադարձնում է տվյալների աղբյուրի կատարման փուլերը։ -->

