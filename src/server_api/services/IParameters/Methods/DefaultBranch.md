---
title: IParametersService.DefaultBranch մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [DefaultBranch()](#iparametersservicedefaultbranch-մեթոդ) | Վերադարձնում է **DEFBRANCH** ներքին անունով [տող տիպի](../../Types/system_types.md#stringfieldtype) պարամետրի արժեքը, որը ցույց է տալիս ընթացիկ օգտագործողի համար առաջարկվող գրասենյակի կոդը։ |
| [DefaultBranch(short)](#iparametersservicedefaultbranchshort-մեթոդ) | Վերադարձնում է **DEFBRANCH** ներքին անունով [տող տիպի](../../Types/system_types.md#stringfieldtype) պարամետրի արժեքը, որը ցույց է տալիս `suid` ներքին համարով օգտագործողի համար առաջարկվող գրասենյակի կոդը։ |

### IParametersService.DefaultBranch() մեթոդ

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService/IParametersService.md)

```c#
public Task<string> DefaultBranch()
```

Վերադարձնում է **DEFBRANCH** ներքին անունով [տող տիպի](../../Types/system_types.md#stringfieldtype) պարամետրի արժեքը, որը ցույց է տալիս ընթացիկ օգտագործողի համար առաջարկվող գրասենյակի կոդը։

### IParametersService.DefaultBranch(short) մեթոդ  

#### Նկարագիր

**Դաս՝** [IParametersService](../IParametersService/IParametersService.md)

```c#
public Task<string> DefaultBranch(short suid)
```

Վերադարձնում է **DEFBRANCH** ներքին անունով [տող տիպի](../../Types/system_types.md#stringfieldtype) պարամետրի արժեքը, որը ցույց է տալիս `suid` ներքին համարով օգտագործողի համար առաջարկվող գրասենյակի կոդը։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| suid | short | - | Օգտագործողի ներքին համար (կոդ)։ |
