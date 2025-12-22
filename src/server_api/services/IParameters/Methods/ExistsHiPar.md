---
title: IParametersService.ExistsHiPar(string, DateTime, bool, string) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.ExistsHiPar](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/ExistsHiPar.html)

**Դաս՝** [IParametersService](../IParametersService/IParametersService.md)

```c#
public Task<bool> ExistsHiPar(string paramID, 
                              DateTime date, 
                              bool softGet, 
                              string searchValue = null)
```

Ստուգում է ժամանակագրական պարամետրի նշանակված արժեքի առկայությունը:

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramID | string | - | Պարամետրի ներքին անուն (id)։ |
| date | DateTime | - | Պարամետրի որոնման ամսաթիվ։ |
| softGet | bool | - | **true** արժեքի դեպքում մեթոդը ստուգում է `date` ամսաթվի դրությամբ պարամետրի որևէ արժեքի նշանակված լինելը, հակառակ դեպքում՝ միմիայն `date` ամսաթվին նշանակված արժեքի գոյությունը։ |
| searchValue | string | null | Փոխանցված լինելու դեպքում որոնում է այդ արժեքը։ |
