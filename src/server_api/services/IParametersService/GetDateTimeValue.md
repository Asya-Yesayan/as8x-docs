---
title: IParametersService.GetDateTimeValue(string) մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsKernel.Param](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/Param.html)

```c#
public Task<DateTime?> GetDateTimeValue(string paramId)
```

Վերադարձնում է ամսաթիվ տիպի ([DATE](../../types/system_types.md#datefieldtype), [DATELONG](../../types/system_types.md#datefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**

* `paramId` - Պարամետրի ներքին անուն (id)։
