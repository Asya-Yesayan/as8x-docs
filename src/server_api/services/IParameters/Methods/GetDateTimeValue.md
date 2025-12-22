---
title: IParametersService.GetDateTimeValue մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.Param](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/Param.html)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetDateTimeValue(string)](#iparametersservicegetdatetimevaluestring-մեթոդ) | Վերադարձնում է ամսաթիվ տիպի ([DATE](../../Types/system_types.md#datefieldtype), [DATELONG](../../Types/system_types.md#datefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetDateTimeValue(string, short)](#iparametersservicegetdatetimevaluestring-short-մեթոդ) | Վերադարձնում է ամսաթիվ տիպի ([DATE](../../Types/system_types.md#datefieldtype), [DATELONG](../../Types/system_types.md#datefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |

### IParametersService.GetDateTimeValue(string) մեթոդ

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService/IParametersService.md)

```c#
public Task<DateTime?> GetDateTimeValue(string paramId)
```

Վերադարձնում է ամսաթիվ տիպի ([DATE](../../Types/system_types.md#datefieldtype), [DATELONG](../../Types/system_types.md#datefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id)։ |

### IParametersService.GetDateTimeValue(string, short) մեթոդ  

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService/IParametersService.md)

```c#
public Task<DateTime?> GetDateTimeValue(string paramId, 
                                        short suid)
```

Վերադարձնում է ամսաթիվ տիպի ([DATE](../../Types/system_types.md#datefieldtype), [DATELONG](../../Types/system_types.md#datefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id)։ |
| suid | short | - | Օգտագործողի ներքին համար (կոդ)։ |
