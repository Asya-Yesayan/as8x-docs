---
title: IParametersService.GetBooleanValue(string) մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsKernel.Param](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/Param.html)

```c#
public Task<bool> GetBooleanValue(string paramId)
```

Վերադարձնում է [տրամաբանական տիպի](../../types/system_types.md#booleanfieldtype) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**

* `paramId` - Պարամետրի ներքին անուն (id):
