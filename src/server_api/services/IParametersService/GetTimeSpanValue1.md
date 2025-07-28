---
title: IParametersService.GetTimeSpanValue(string, short) մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsKernel.GetParam](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/GetParam.html)

```c#
public Task<TimeSpan> GetTimeSpanValue(string paramId, short suid)
```

Վերադարձնում է ժամ տիպի ([TIME](../../types/system_types.md#timefieldtype), [TIMELONG](../../types/system_types.md#timefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**

* `paramId` - Պարամետրի ներքին անուն (id):
* `suid` - Օգտագործողի ներքին համար (կոդ)։
