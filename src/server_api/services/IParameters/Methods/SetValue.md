---
title: IParametersService.SetValue(string, object) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.Param](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/Param.html)

**Դաս՝** [IParametersService](../IParametersService/IParametersService.md)

```c#
public Task SetValue(string name, 
                     object value)
```

Փոխում է համակարգային պարամետրի արժեքը։ Եթե պարամետրը ըստ օգտագործողի է, ապա պարամետրի արժեքը փոփոխվում է միայն ընթացիկ օգտագործողի համար ([USERPARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/User%20Params.html) աղյուսակում), հակառակ դեպքում սահմանվում է պարամետրի լռությամբ արժեքը ([PARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Params.html) աղյուսակում)։

Եթե պարամետրի նշանակված արժեքը չի համապատասխանում նրա տիպին կամ պարամետրը սահմանված չէ, ապա առաջանում է սխալ։

Քեշավորվող պարամետրի արժեքը տրանզակցիայում փոխելիս առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| name | string | - | Պարամետրի ներքին անուն (id)։ |
| value | object | - | Վերագրվող արժեք։ |
