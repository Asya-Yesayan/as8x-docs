---
title: IParametersService.SetValue(string, object) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.SetParam](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/SetParam.html) ?

```c#
public Task SetValue(string name, 
                     object value)
```

Փոխում է համակարգային պարամետրի արժեքը։ Եթե պարամետրը կտրված է ըստ օգտագործողի, ապա պարամետրի արժեքը փոփոխվում է միայն ընթացիկ օգտագործողի համար ([USERPARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/User%20Params.html) աղյուսակում), հակառակ դեպքում սահմանվում է պարամետրի լռությամբ արժեքը ([PARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Params.html) աղյուսակում)։

Եթե պարամետրի նշանակված արժեքը չի համապատասխանում նրա տիպին կամ պարամետրը սահմանված չէ, ապա առաջանում է սխալ։

Եթե պարամետրը քեշավորվող է և պարամետրի արժեքը փոխվում է տրանզակցիայում, ապա առաջանում է սխալ։

**Պարամետրեր**

* `name` - Պարամետրի ներքին անուն (id)։ 
* `value` - Վերագրվող արժեք։
