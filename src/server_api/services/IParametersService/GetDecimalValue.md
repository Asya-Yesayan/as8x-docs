---
title: IParametersService.GetDecimalValue մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.Param](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/Param.html)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetDecimalValue(string)](#iparametersservicegetdecimalvaluestring-մեթոդ) | Վերադարձնում է կոտորակային թիվ տիպի ([N](../../types/system_types.md#numericfieldtype), [NP](../../types/system_types.md#numericpositivefieldtype), [SUMMA](../../types/system_types.md#amountfieldtype), [SUMMAP](../../types/system_types.md#amountpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։  |
| [GetDecimalValue(string, short)](#iparametersservicegetdecimalvaluestring-short-մեթոդ) | Վերադարձնում է կոտորակային թիվ տիպի ([N](../../types/system_types.md#numericfieldtype), [NP](../../types/system_types.md#numericpositivefieldtype), [SUMMA](../../types/system_types.md#amountfieldtype), [SUMMAP](../../types/system_types.md#amountpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։  |

### IParametersService.GetDecimalValue(string) մեթոդ

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task<decimal> GetDecimalValue(string paramId)
```

Վերադարձնում է կոտորակային թիվ տիպի ([N](../../types/system_types.md#numericfieldtype), [NP](../../types/system_types.md#numericpositivefieldtype), [SUMMA](../../types/system_types.md#amountfieldtype), [SUMMAP](../../types/system_types.md#amountpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id)։ |

### IParametersService.GetDecimalValue(string, short) մեթոդ  

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task<decimal> GetDecimalValue(string paramId, 
                                     short suid)
```

Վերադարձնում է կոտորակային թիվ տիպի ([N](../../types/system_types.md#numericfieldtype), [NP](../../types/system_types.md#numericpositivefieldtype), [SUMMA](../../types/system_types.md#amountfieldtype), [SUMMAP](../../types/system_types.md#amountpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։  
Տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id): |
| suid | short | - | Օգտագործողի ներքին համար (կոդ)։ |
