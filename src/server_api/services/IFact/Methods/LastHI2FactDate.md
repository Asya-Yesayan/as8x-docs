---
title: LastHI2FactDate
parent: "Մեթոդներ"
grand_parent: "IFactService"
---

# IFactService.LastHI2FactDate(string, int, int, DateTime?, string) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.LastHI2FactDate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/LastHI2FactDate.html)

**Դաս՝** [IFactService](../IFactService.md)

```c#
public Task<DateTime?> LastHI2FactDate(string accountingCode, 
                                       int isn, 
                                       int glIsn, 
                                       DateTime? upToDate, 
                                       string operation = "");
```

Վերադարձնում է հաշվառվող օբյեկտի համար նշանակված վերջին HI2 գործառույթի ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| accountingCode  | string               | -              | Հաշվառման կոդը։ |
| isn             | int                  | -              | Հաշվառվող օբյեկտի ներքին նույնականացմամ համար։ |
| glIsn           | int                  | -              | Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| upToDate        | DateTime?            | -              | Տրված լինելու դեպքում վերջին գործողության ամսաթիվը փնտրվում է մինչև նշված ամսաթիվը։ Հակառակ դեպքում փնտրում է ամենավերջին գործողության ամսաթիվը։ |
| operation       | string               | ""             | Տրված լինելու դեպքում փնտրվում է հենց այս գործողության կոդով վերջին ամսաթիվը։ Հակառակ դեպքում բոլոր գործողությունների վերջին ամսաթիվը։ |
