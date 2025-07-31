---
title: IParametersService.REPEND մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [REPEND()](#iparametersservicerepend-մեթոդ) | Վերադարձնում է **REPEND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [REPEND(short)](#iparametersservicerependshort-մեթոդ) | Վերադարձնում է **REPEND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |

### IParametersService.REPEND() մեթոդ

```c#
public Task<DateTime> REPEND()
```

Վերադարձնում է **REPEND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։

### IParametersService.REPEND(short) մեթոդ  

```c#
public Task<DateTime> REPEND(short suid)
```

Վերադարձնում է **REPEND** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։

**Պարամետրեր**

* `suid` - Օգտագործողի ներքին համար (կոդ)։

