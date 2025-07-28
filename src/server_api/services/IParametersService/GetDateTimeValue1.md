---
title: IParametersService.GetDateTimeValue(string, short) մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsKernel.GetParam](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/GetParam.html)

```c#
public Task<DateTime?> GetDateTimeValue(string paramId, short suid)
```

Վերադարձնում է ամսաթիվ տիպի ([DATE](../../types/system_types.md#datefieldtype), [DATELONG](../../types/system_types.md#datefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**

* `paramId` - Պարամետրի ներքին անուն (id)։
* `suid` - Օգտագործողի ներքին համար (կոդ)։
