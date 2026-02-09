---
title: LastOpDate
parent: "Մեթոդներ"
grand_parent: "IKernelService"
---

# IKernelService.LastOpDate մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [LastOpDate(string, int, DateTime?, string, int)](#ikernelservicelastopdatestring-int-datetime-string-int-մեթոդ)| Վերադարձնում է փաստաթղթի հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։ |
| [LastOpDate2(string, int, DateTime?, bool, string, string)](#ikernelservicelastopdate2string-int-datetime-bool-string-string-մեթոդ)| Վերադարձնում է փաստաթղթի հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդերով մինչև նշված ամսաթիվը ներառյալ։ |

### IKernelService.LastOpDate(string, int, DateTime?, string, int) մեթոդ

**Համարժեքը 4x-ում՝** [AsKernel.LastOpDate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/LastOpDate.html)

**Դաս՝** [IKernelService](../IKernelService.md)

```c#
public Task<DateTime?> LastOpDate(string accCode, 
                                  int isn, 
                                  DateTime? upToDate, 
                                  string op = "", 
                                  int discardISN = -1)
```

Վերադարձնում է փաստաթղթի հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։

**Պարամետրեր**

| Անվանում     | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|-------------|---------------|----------------|----------------|
| accCode     | string        | -            | Հաշվառման կոդ (ներքին անուն)։ |
| isn         | int           | -            | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| upToDate    | DateTime?     | -           | Ամսաթիվը, մինչև որը կատարվում է որոնումը։ Եթե պարամետրը տրված չէ, ապա վերադառնում է տվյալ հաշվառման մեջ վերջին գործողության ամսաթիվը։ |
| op          | string        | ""             | Հաշվառման որոնվող գործողություն։ |
| discardISN  | int           | -1             | Փաստաթղթի ներքին նույնականացման համար, որի գործողությունները չեն դիտարկվում։ |

### IKernelService.LastOpDate2(string, int, DateTime?, bool, string, string) մեթոդ

**Համարժեքը 4x-ում՝** [AsKernel.LastOpDate2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/LastOpDate2.html)

**Դաս՝** [IKernelService](../IKernelService.md)

```c#
public Task<DateTime?> LastOpDate2(string accountings, 
                                   int isn, 
                                   DateTime? upToDate, 
                                   bool inOp = true, 
                                   string ops = "", 
                                   string dbcr = "")
```

Վերադարձնում է փաստաթղթի հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդերով մինչև նշված ամսաթիվը ներառյալ։

Ի տարբերություն [LastOpDate](LastOpDate.md) մեթոդի, այս մեթոդը կարող է ֆիլտրել ներառող կամ բացառող գործողությունների կոդերով։

**Պարամետրեր**

| Անվանում     | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|-------------|---------------|----------------|----------------|
| accountings | string        | -            | Հաշվառումների կոդերի ցուցակ ստորակետով բաժանված։ |
| isn         | int           | -            | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| upToDate    | DateTime?     | -            | Ամսաթիվը, մինչև որը կատարվում է որոնումը։ Եթե պարամետրը տրված չէ, ապա վերադառնում է տվյալ հաշվառման մեջ վերջին գործողության ամսաթիվը։ |
| inOp        | bool          | true           | Ցույց է տալիս, թե արդյոք որոնվող գործողությունը պետք է լինի `ops`-ից, թե չլինի `ops`-ից։ |
| ops         | string        | ""             | Հաշվառման որոնվող գործողությունների ցանկ։ Գործողությունների կոդերը ստորակետով բաժանված։ |
| dbcr        | string        | ""             | Դեբետային("D") կամ կրեդիտային("C") գործողությունների որոնման ֆիլտր։ Դատարկ արժեքի դեպքում դիտարկվում են բոլոր գործողությունները։ |
