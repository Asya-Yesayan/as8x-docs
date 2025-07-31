---
title: IParametersService.OperEnd մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [OperEnd()](#iparametersserviceoperend-մեթոդ) | Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [OperEnd(short)](#iparametersserviceoperendshort-մեթոդ) | Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |

### IParametersService.OperEnd() մեթոդ

```c#
public Task<DateTime> OperEnd()
```

Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։

### IParametersService.OperEnd(short) մեթոդ  

```c#
public Task<DateTime> OperEnd(short suid)
```

Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։

**Պարամետրեր**

* `suid` - Օգտագործողի ներքին համար (կոդ)։

