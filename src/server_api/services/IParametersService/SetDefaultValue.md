---
title: IParametersService.SetDefaultValue(string, object, bool, bool) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.SetParam](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/SetParam.html)

```c#
public Task SetDefaultValue(string paramId, 
                            object value, 
                            bool logChanges = false, 
                            bool cleanUserParams = false)
```

Փոխում է համակարգային պարամետրի լռությամբ արժեքը ([PARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Params.html) աղյուսակում)։

Եթե պարամետրի նշանակված արժեքը չի համապատասխանում նրա տիպին կամ պարամետրը սահմանված չէ, ապա առաջանում է սխալ։

**Պարամետրեր**

* `parId` - Պարամետրի ներքին անուն (id)։ 
* `value` - Վերագրվող արժեք։
* `logChanges` - Պարամետրերի փոփոխությունների պատմությունում լոգավորման հայտանիշ։
* `cleanUserParams` - Պարամետրի բոլոր օգտագործողների արժեքների հեռացման հայտանիշ։