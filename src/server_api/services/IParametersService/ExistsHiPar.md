---
title: IParametersService.ExistsHiPar(string, DateTime, bool, string) մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsKernel.ExistsHiPar](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/ExistsHiPar.html)

```c#
public Task<bool> ExistsHiPar(string paramID, 
                              DateTime date, 
                              bool softGet, 
                              string searchValue = null)
```

Ստուգում է ժամանակագրական պարամետրի նշանակված արժեքի առկայությունը:

**Պարամետրեր**

* `paramID` - Պարամետրի ներքին անուն (id)։
* `date` - Պարամետրի որոնման ամսաթիվ։
* `softGet` - **true** արժեքի դեպքում մեթոդը ստուգում է `date` ամսաթվի դրությամբ պարամետրի որևէ արժեքի նշանակված լինելը, հակառակ դեպքում՝ միմիայն `date` ամսաթվին նշանակված արժեքի գոյությունը։
* `searchValue` - Փոխանցված լինելու դեպքում որոնում է այդ արժեքը։
