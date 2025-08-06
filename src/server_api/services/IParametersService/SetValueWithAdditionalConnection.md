---
title: IParametersService.SetValueWithAdditionalConnection(string, object) մեթոդ  
---

```c#
public Task SetValueWithAdditionalConnection(string name, 
                                             object value)
```

Փոխում է համակարգային պարամետրի արժեքը [լրացուցիչ sql միացման](../IDBService/CreateAdditionalConnection.md) միջոցով։ Եթե պարամետրը ըստ օգտագործողի է, ապա պարամետրի արժեքը փոփոխվում է միայն ընթացիկ օգտագործողի համար ([USERPARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/User%20Params.html) աղյուսակում), հակառակ դեպքում սահմանվում է պարամետրի լռությամբ արժեքը ([PARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Params.html) աղյուսակում)։

Եթե պարամետրի նշանակված արժեքը չի համապատասխանում նրա տիպին կամ պարամետրը սահմանված չէ, ապա առաջանում է սխալ։

Քեշավորվող պարամետրի արժեքը տրանզակցիայում փոխելիս առաջանում է սխալ։

**Պարամետրեր**

* `name` - Պարամետրի ներքին անուն (id)։ 
* `value` - Վերագրվող արժեք։
