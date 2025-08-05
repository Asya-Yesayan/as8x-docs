---
title: IKernelService.LastOpDate(string, int, DateTime?, string, int) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.LastOpDate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/LastOpDate.html)

```c#
public Task<DateTime?> LastOpDate(string accCode, 
                                  int isn, 
                                  DateTime? upToDate, 
                                  string op = "", 
                                  int discardISN = -1)
```

Վերադարձնում է փաստաթղթի հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։

**Պարամետրեր**

* `accCode` - Հաշվառման կոդ (ներքին անուն):
* `isn` - Հաշվառվող օբյեկտի ներքին նույնականացման համար։
* `upToDate` - Ամսաթիվը, մինչև որը կատարվում է որոնումը։ 
  Եթե պարամետրը տրված չէ, ապա վերադառնում է տվյալ հաշվառման մեջ վերջին գործողության ամսաթիվը։
* `op` - 	Հաշվառման որոնվող գործողություն։
* `discardISN` - Փաստաթղթի ներքին նույնականացման համար, որի գործողությունները չեն դիտարկվում։
