---
title: IParametersService.SetHiPar(string, DateTime, int, string, string, DateTime?) մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsKernel.HiPar](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/HiPar.html)

```c#
public Task SetHiPar(string parID, DateTime changeDate, 
                     int isn, string newValue, 
                     string errMsg = "", DateTime? creationDate = null)
```

Գրանցում է ժամանակագրական պարամետրի նոր արժեք տրված ամսաթվով:

**Պարամետրեր**

* `parID` - Պարամետրի ներքին անուն (id)։
* `changeDate` - Նոր արժեքի նշանակման ամսաթիվ։
* `isn` - Նոր արժեքը նշանակող հիմքային փաստաթղթի ներքին նույնականացման համար։
* `newValue` - Նոր արժեք։
* `errMsg` - Կրկնվող տվյալների առկայության դեպքում ցույց տրվող սխալի հաղորդագրություն: 
  Եթե արժեք տրված չէ, ապա կառաջանա ստանդարտ սխալի հաղորդագրություն։ 
  Կրկնությունը ստուգվում է ըստ պարամետրի ներքին անվան, արժեքի նշանակման ամսաթվի և հիմքային փաստաթղթի (`parID`, `changeDate`, `isn`)։
* `creationDate` - Արժեքի ստեղծման ամսաթիվ։
