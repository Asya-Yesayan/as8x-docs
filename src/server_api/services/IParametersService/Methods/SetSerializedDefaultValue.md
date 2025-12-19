---
title: IParametersService.SetSerializedDefaultValue(string, string, bool, bool) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.SetParam](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/SetParam.html)

**Դաս՝** [IParametersService](../../IParametersService.md)

```c#
public Task SetSerializedDefaultValue(string paramId, 
                                      string value, 
                                      bool logChanges = false, 
                                      bool cleanUserParams = false)
```

Փոխում է համակարգային պարամետրի լռությամբ արժեքը ([PARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Params.html) աղյուսակում)։

Եթե պարամետրի նշանակված արժեքը չի համապատասխանում նրա տիպին կամ պարամետրը սահմանված չէ, ապա առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| parId | - | - | Պարամետրի ներքին անուն (id)։ |
| value | string | - | Վերագրվող արժեք։ |
| logChanges | bool | false | Պարամետրերի պատմությունում փոփոխությունների գրանցելու հայտանիշ։ |
| cleanUserParams | bool | false | Պարամետրի բոլոր օգտագործողների արժեքների հեռացման հայտանիշ։ |
