---
title: IFactService.LastDate(string, int, DateTime?, string) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsAccounting.LastFactDate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/AsAccounting/LastFactDate.html)

```c#
public Task<DateTime?> LastDate(string accountingCode, 
                                int isn, 
                                DateTime? upToDate, 
                                string operation = "");
```

Վերադարձնում է վերջին գործառնության ամսաթիվը նշված հաշվառումից։ 

Եթե գործառնությունը չի գտնվել, ապա վերադառնում է null:

**Պարամետրեր**

* `accountingCode` - Հաշվառման կոդը։
* `isn` - Հաշվառման օբյեկտի ներքին նույնականացման համար, որի համար փնտրում է վերջին գործողության ամսաթիվը։
* `upToDate` - Տրված լինելու դեպքում վերջին գործողության ամսաթիվը փնտրվում է մինչև նշված ամսաթիվը։ 
  Հակառակ դեպքում փնտրում է ամենավերջին գործողության ամսաթիվը։
* `operation` - Տրված լինելու դեպքում փնտրվում է հենց այս գործողության կոդով վերջին ամսաթիվը։ 
  Հակառակ դեպքում բոլոր գործողությունների վերջին ամսաթիվը։
