---
title: IParametersService.REPSTART մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [REPSTART()](#iparametersservicerepstart-մեթոդ) | Վերադարձնում է **REPSTART** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի սկզբի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [REPSTART(short)](#iparametersservicerepstartshort-մեթոդ) | Վերադարձնում է **REPSTART** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի սկզբի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |

### IParametersService.REPSTART() մեթոդ

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task<DateTime> REPSTART()
```

Վերադարձնում է **REPSTART** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի սկզբի ամսաթիվը ընթացիկ օգտագործողի համար։

### IParametersService.REPSTART(short) մեթոդ  

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task<DateTime> REPSTART(short suid)
```

Վերադարձնում է **REPSTART** ներքին անունով [ամսաթիվ տիպի](../../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի սկզբի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։

**Պարամետրեր**

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| suid | short | - | Օգտագործողի ներքին համար (կոդ)։ |
