---
title: IParametersService.GetStringValue մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.Param](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/Param.html)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetStringValue(string)](#iparametersservicegetstringvaluestring-մեթոդ) | Վերադարձնում է տող տիպի ([C](../../../types/system_types.md), [CH](../../../types/system_types.md), [FOLDER](../../../types/system_types.md), [AMACC](../../../types/system_types.md), [TREE](../../../types/system_types.md), [FULLTREE](../../../types/system_types.md), [PATH](../../../types/system_types.md), [FILE](../../../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetStringValue(string, short)](#iparametersservicegetstringvaluestring-short-մեթոդ) | Վերադարձնում է տող տիպի ([C](../../../types/system_types.md), [CH](../../../types/system_types.md), [FOLDER](../../../types/system_types.md), [AMACC](../../../types/system_types.md), [TREE](../../../types/system_types.md), [FULLTREE](../../../types/system_types.md), [PATH](../../../types/system_types.md), [FILE](../../../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |

### IParametersService.GetStringValue(string) մեթոդ

#### Նկարագիր

**Դաս՝** [IParametersService](../../IParametersService.md)

```c#
public Task<string> GetStringValue(string paramId)
```

Վերադարձնում է տող տիպի ([C](../../../types/system_types.md), [CH](../../../types/system_types.md), [FOLDER](../../../types/system_types.md), [AMACC](../../../types/system_types.md), [TREE](../../../types/system_types.md), [FULLTREE](../../../types/system_types.md), [PATH](../../../types/system_types.md), [FILE](../../../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id): |

### IParametersService.GetStringValue(string, short) մեթոդ  

#### Նկարագիր

**Դաս՝** [IParametersService](../../IParametersService.md)

```c#
public Task<string> GetStringValue(string paramId, 
                                   short suid)
```

Վերադարձնում է տող տիպի ([C](../../../types/system_types.md), [CH](../../../types/system_types.md), [FOLDER](../../../types/system_types.md), [AMACC](../../../types/system_types.md), [TREE](../../../types/system_types.md), [FULLTREE](../../../types/system_types.md), [PATH](../../../types/system_types.md), [FILE](../../../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id): |
| suid | short | - | Օգտագործողի ներքին համար (կոդ)։ |
