---
title: DataSourceService.GetDataSource մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.Data](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/SysDefManagment/Data.html)

**Դաս՝** [DataSourceService](../DataSourceService.md)

```c#
public T GetDataSource<T>() where T : IDataSource
```

Ստեղծվում է տրված T տիպի տվյալների աղբյուրի դասի օբյեկտ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| T | T | - | Տվյալների աղբյուրի տիպը: |

Օգտագործման օրինակին ծանոթանալու համար [տե՛ս](../../examples/ds.md#տիպիզացված-կատարում):
