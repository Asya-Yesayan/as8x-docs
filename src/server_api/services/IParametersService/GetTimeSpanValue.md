---
title: IParametersService.GetTimeSpanValue մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.Param](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/Param.html)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetTimeSpanValue(string)](#iparametersservicegettimespanvaluestring-մեթոդ) | Վերադարձնում է ժամ տիպի ([TIME](../../types/system_types.md#timefieldtype), [TIMELONG](../../types/system_types.md#timefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetTimeSpanValue(string, short)](#iparametersservicegettimespanvaluestring-short-մեթոդ) | Վերադարձնում է ժամ տիպի ([TIME](../../types/system_types.md#timefieldtype), [TIMELONG](../../types/system_types.md#timefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |

### IParametersService.GetTimeSpanValue(string) մեթոդ

```c#
public Task<TimeSpan> GetTimeSpanValue(string paramId)
```

Վերադարձնում է ժամ տիպի ([TIME](../../types/system_types.md#timefieldtype), [TIMELONG](../../types/system_types.md#timefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**

* `paramId` - Պարամետրի ներքին անուն (id):

### IParametersService.GetTimeSpanValue(string, short) մեթոդ  

```c#
public Task<TimeSpan> GetTimeSpanValue(string paramId, short suid)
```

Վերադարձնում է ժամ տիպի ([TIME](../../types/system_types.md#timefieldtype), [TIMELONG](../../types/system_types.md#timefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**

* `paramId` - Պարամետրի ներքին անուն (id):
* `suid` - Օգտագործողի ներքին համար (կոդ)։

