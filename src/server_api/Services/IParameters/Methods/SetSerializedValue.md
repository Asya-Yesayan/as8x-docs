---
title: SetSerializedValue
parent: "Մեթոդներ"
grand_parent: "IParametersService"
---

# IParametersService.SetSerializedValue(string, string, short, bool) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.SetParam](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/SetParam.html)

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Task SetSerializedValue(string parId, 
                               string value, 
                               short suid = -1, 
                               bool logChanges = false)
```

Փոխում է համակարգային պարամետրի արժեքը նշված օգտագործողի համար։ Եթե պարամետրը ըստ օգտագործողի է և `suid` պարամետրի արժեքը -1 է, ապա պարամետրի արժեքը փոփոխվում է միայն ընթացիկ օգտագործողի համար ([USERPARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/User%20Params.html) աղյուսակում)։

Եթե պարամետրի նշանակված արժեքը չի համապատասխանում նրա տիպին կամ պարամետրը սահմանված չէ, ապա առաջանում է սխալ։

Քեշավորվող պարամետրի արժեքը տրանզակցիայում փոխելիս առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| parId | string | - | Պարամետրի ներքին անուն (id)։ |
| value | string | - | Վերագրվող արժեք։ |
| suid | short | -1 | Օգտագործողի ներքին համար (կոդ)։ |
| logChanges | bool | false | Պարամետրերի պատմությունում փոփոխությունների գրանցելու հայտանիշ։ |
