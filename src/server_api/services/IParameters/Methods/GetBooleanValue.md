---
title: IParametersService.GetBooleanValue մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.Param](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/Param.html)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetBooleanValue(string)](#iparametersservicegetbooleanvaluestring-մեթոդ) | Վերադարձնում է [տրամաբանական տիպի](../../../Types/system_types.md#booleanfieldtype) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetBooleanValue(string, short)](#iparametersservicegetbooleanvaluestring-short-մեթոդ) | Վերադարձնում է [տրամաբանական տիպի](../../../Types/system_types.md#booleanfieldtype) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |

### IParametersService.GetBooleanValue(string) մեթոդ

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task<bool> GetBooleanValue(string paramId)
```

Վերադարձնում է [տրամաբանական տիպի](../../../Types/system_types.md#booleanfieldtype) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id): |

### IParametersService.GetBooleanValue(string, short) մեթոդ  

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task<bool> GetBooleanValue(string paramId, 
                                  short suid)
```

Վերադարձնում է [տրամաբանական տիպի](../../../Types/system_types.md#booleanfieldtype) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id)։ |
| suid | short | - | Օգտագործողի ներքին համար (կոդ)։ |
