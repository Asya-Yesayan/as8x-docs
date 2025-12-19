---
title: DataSource.Execute(P, HashSet<string>, IExtender, CancellationToken) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OpenCursor](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDATA/OpenCursor.html)

**Դաս՝** [DataSource](../ds.md)

```c#
public Task<DataSourceResult<R>> Execute(P param, 
                                         HashSet<string> columns = null, 
                                         IExtender extender = null, 
                                         CancellationToken stoppingToken = default)
```

Կատարում է տվյալների աղբյուրը։

**Պարամետրեր**

| Անվանում      | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն    |
| ------------- | ------------- | --------------- | -------- |
| param         |  P             |   -              | Տվյալների աղբյուրի պարամետրերը նկարագրող դասի օբյեկտ։  |
| columns       |  HashSet<string>             | null            | Տվյալների աղբյուրի վերադարձվող սյուների անվանումների ցուցակը։ |
| extender      | IExtender              | null            | Տվյալների աղբյուրի ընդլայնումը։  |
| stoppingToken | CancellationToken              | default         | ընդհատման օբյեկտը։  


Տե՛ս [օրինակը](../../examples/ds.md#2-տիպիզացված-կատարում)։

<!-- ### GetExecutionPhases

```c#
public virtual IEnumerable<DataSourceExecutionPhase> GetExecutionPhases()
```

Վերադարձնում է տվյալների աղբյուրի կատարման փուլերը։ -->

