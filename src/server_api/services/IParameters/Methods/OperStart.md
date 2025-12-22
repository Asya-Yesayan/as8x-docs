---
title: IParametersService.OperStart մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [OperStart()](#iparametersserviceoperstart-մեթոդ) | Վերադարձնում է **OPERSTART** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի սկզբի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [OperStart(short)](#iparametersserviceoperstartshort-մեթոդ) | Վերադարձնում է **OPERSTART** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի սկզբի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |

### IParametersService.OperStart() մեթոդ

## Նկարագիր

**Դաս՝** [IParametersService](../IParametersService/IParametersService.md)

```c#
public Task<DateTime> OperStart()
```

Վերադարձնում է **OPERSTART** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի սկզբի ամսաթիվը ընթացիկ օգտագործողի համար։

### IParametersService.OperStart(short) մեթոդ  

## Նկարագիր

**Դաս՝** [IParametersService](../IParametersService/IParametersService.md)

```c#
public Task<DateTime> OperStart(short suid)
```

Վերադարձնում է **OPERSTART** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի սկզբի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| suid | short | - | Օգտագործողի ներքին համար (կոդ)։ |
