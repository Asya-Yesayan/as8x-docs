---
title: IParametersService.GetDecimalValue(string) մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsKernel.Param](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/Param.html)

```c#
public Task<decimal> GetDecimalValue(string paramId)
```

Վերադարձնում է կոտորակային թիվ տիպի ([N](../../types/system_types.md#numericfieldtype), [NP](../../types/system_types.md#numericpositivefieldtype), [SUMMA](../../types/system_types.md#amountfieldtype), [SUMMAP](../../types/system_types.md#amountpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**

* `paramId` - Պարամետրի ներքին անուն (id)։
