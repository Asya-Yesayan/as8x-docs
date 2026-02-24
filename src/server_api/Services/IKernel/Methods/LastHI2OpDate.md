---
title: LastHI2OpDate
parent: "Մեթոդներ"
grand_parent: "IKernelService"
---

# IKernelService.LastHI2OpDate մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [Kernel.LastHI2OpDate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/LasHI2OpDate.html)

**Դաս՝** [IKernelService](../IKernelService.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [LastHI2OpDate(string, int, int, DateTime?, string)](#ikernelservicelasthi2opdatestring-int-int-datetime-string-մեթոդ) | Վերադարձնում է փաստաթղթի [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցվող հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։ |
| [LastHI2OpDate(List&lt;string&gt;, int, int, DateTime?, string)](#ikernelservicelasthi2opdateliststring-int-int-datetime-string-մեթոդ) | Վերադարձնում է փաստաթղթի [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցվող հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդերով մինչև նշված ամսաթիվը ներառյալ։ |

### IKernelService.LastHI2OpDate(string, int, int, DateTime?, string) մեթոդ

```c#
public Task<DateTime?> LastHI2OpDate(string accCode, 
                                     int isn = -1, 
                                     int glIsn = -1, 
                                     DateTime? upToDate = null, 
                                     string op = "")
```

Վերադարձնում է փաստաթղթի [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցվող հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|----------------|----------------|----------------|
| accCode | string | - | Հաշվառման կոդ (ներքին անուն)։ |
| isn | int | -1 | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| glIsn | int | -1 | Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| upToDate | DateTime? | null | Ամսաթիվը, մինչև որը կատարվում է որոնումը։ Եթե պարամետրը տրված չէ, ապա վերադառնում է տվյալ հաշվառման մեջ վերջին գործողության ամսաթիվը։ |
| op | string | "" | Հաշվառման որոնվող գործողություն։ |

### IKernelService.LastHI2OpDate(List&lt;string&gt;, int, int, DateTime?, string) մեթոդ

```c#
public Task<DateTime?> LastHI2OpDate(List<string> accCodes, 
                                     int isn = -1, 
                                     int glIsn = -1, 
                                     DateTime? upToDate = null, 
                                     string op = "")
```

Վերադարձնում է փաստաթղթի [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցվող հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդերով մինչև նշված ամսաթիվը ներառյալ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|----------------|----------------|----------------|
| accCodes | List<string> | --- | Հաշվառումների կոդերի ցուցակ։ |
| isn | int | -1 | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| glIsn | int | -1 | Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| upToDate | DateTime? | null | Ամսաթիվը, մինչև որը կատարվում է որոնումը։ Եթե պարամետրը տրված չէ, ապա վերադառնում է տվյալ հաշվառման մեջ վերջին գործառույթի ամսաթիվը։ |
| op | string | "" | Հաշվառման որոնվող գործողություն։ |

