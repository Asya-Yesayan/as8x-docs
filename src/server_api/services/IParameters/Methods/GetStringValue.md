---
title: IParametersService.GetStringValue մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.Param](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/Param.html)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetStringValue(string)](#iparametersservicegetstringvaluestring-մեթոդ) | Վերադարձնում է տող տիպի ([C](../../../Types/system_types.md#stringfieldtype), [CH](../../../Types/system_types.md#chfieldtype), [FOLDER](../../../Types/system_types.md#folderfieldtype), [AMACC](../../../Types/system_types.md#amaccfieldtype), [TREE](../../../Types/system_types.md#treefieldtype), [FULLTREE](../../../Types/system_types.md#treefieldtype), [PATH](../../../Types/system_types.md#pathfieldtype), [FILE](../../../Types/system_types.md#filefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetStringValue(string, short)](#iparametersservicegetstringvaluestring-short-մեթոդ) | Վերադարձնում է տող տիպի ([C](../../../Types/system_types.md#stringfieldtype), [CH](../../../Types/system_types.md#chfieldtype), [FOLDER](../../../Types/system_types.md#folderfieldtype), [AMACC](../../../Types/system_types.md#amaccfieldtype), [TREE](../../../Types/system_types.md#treefieldtype), [FULLTREE](../../../Types/system_types.md#treefieldtype), [PATH](../../../Types/system_types.md#pathfieldtype), [FILE](../../../Types/system_types.md#filefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |

### IParametersService.GetStringValue(string) մեթոդ

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task<string> GetStringValue(string paramId)
```

Վերադարձնում է տող տիպի ([C](../../../Types/system_types.md#stringfieldtype), [CH](../../../Types/system_types.md#chfieldtype), [FOLDER](../../../Types/system_types.md#folderfieldtype), [AMACC](../../../Types/system_types.md#amaccfieldtype), [TREE](../../../Types/system_types.md#treefieldtype), [FULLTREE](../../../Types/system_types.md#treefieldtype), [PATH](../../../Types/system_types.md#pathfieldtype), [FILE](../../../Types/system_types.md#filefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id): |

### IParametersService.GetStringValue(string, short) մեթոդ  

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task<string> GetStringValue(string paramId, 
                                   short suid)
```

Վերադարձնում է տող տիպի ([C](../../../Types/system_types.md#stringfieldtype), [CH](../../../Types/system_types.md#chfieldtype), [FOLDER](../../../Types/system_types.md#folderfieldtype), [AMACC](../../../Types/system_types.md#amaccfieldtype), [TREE](../../../Types/system_types.md#treefieldtype), [FULLTREE](../../../Types/system_types.md#treefieldtype), [PATH](../../../Types/system_types.md#pathfieldtype), [FILE](../../../Types/system_types.md#filefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id): |
| suid | short | - | Օգտագործողի ներքին համար (կոդ)։ |
