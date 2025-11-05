---
title: IParametersService.OperEnd մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [OperEnd()](#iparametersserviceoperend-մեթոդ) | Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [OperEnd(short)](#iparametersserviceoperendshort-մեթոդ) | Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |

### IParametersService.OperEnd() մեթոդ

## Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task<DateTime> OperEnd()
```

Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։

### IParametersService.OperEnd(short) մեթոդ  

## Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task<DateTime> OperEnd(short suid)
```

Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։

**Պարամետրեր**

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| suid | short | - | Օգտագործողի ներքին համար (կոդ)։ |
