---
title: IParametersService.GetHiPar(string, DateTime, bool, string, bool, DateTime?) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.GetHiPar](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/GetHiPar.html)

**Դաս՝** [IParametersService](../IParametersService/IParametersService.md)

```c#
public Task<(string Value, DateTime? SoftDate)> GetHiPar(
                      string paramID, 
                      DateTime date, 
                      bool softGet, 
                      string exceptionMessage = "", 
                      bool notThrowExeption = false, 
                      DateTime? maxCreationDate = null)
```

Վերադարձնում է ժամանակագրական պարամետրի արժեքը և նշանակման ամսաթիվը։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramID | string | - | Պարամետրի ներքին անուն (id)։ |
| date | DateTime | - | Պարամետրի որոնման ամսաթիվ։ |
| softGet | bool | - | **true** արժեքի դեպքում մեթոդը ստուգում է `date` ամսաթվի դրությամբ պարամետրի որևէ արժեքի նշանակված լինելը, հակառակ դեպքում՝ միմիայն `date` ամսաթվին նշանակված արժեքի գոյությունը։ |
| exceptionMessage | string | "" | Արժեքի չգտնելու դեպքում ցույց տրվող սխալի հաղորդագրությունը: Եթե արժեք տրված չէ, ապա կառաջանա ստանդարտ սխալի հաղորդագրություն։ |
| notThrowExeption | bool | false | `true` արժեքի դեպքում տվյալների պահոցում պարամետրի արժեքի բացակայության դեպքում վերադարձնում է դատարկ տող, հակառակ դեպքում առաջացնում է սխալ։ |
| maxCreationDate | DateTime? | null | Փոխանցված լինելու դեպքում մեթոդը փնտրում է արժեք, որի նշանակման ամսաթիվը չի գերազանցում փոխանցված ամսաթիվը: |
