---
title: IKernelService.GetTurnHI2(string, int, int, DateTime, DateTime, string, int) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Kernel.GetTurnHI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/GetTurnHI2.html)

**Դաս՝** [IKernelService](../IKernelService.md)

```c#
public Task<(decimal DbTurn, decimal DbTurnAMD, decimal CrTurn, decimal CrTurnAMD)> GetTurnHI2(
    string accounting, 
    int isn, 
    int isnGl, 
    DateTime startDate, 
    DateTime endDate, 
    string codeOper = "", 
    int baseIsn = -1)
```

Վերադարձնում է փաստաթղթի [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցվող հաշվառման դեբետային և կրեդիտային շրջանառության արժեքները ըստ տրված կուտակող օբյեկտի և տրված ժամանակաշրջանի համար։

Վերադարձնում է կորտեժ`
* `DbTurn` - Դեբետային շրջանառության արժեքը։
* `DbTurnAMD` - Դեբետային շրջանառության արժեքը դրամային համարժեքը։
* `CrTurn` - Կրեդիտային շրջանառության արժեքը։
* `CrTurnAMD` - Կրեդիտային շրջանառության արժեքը դրամային համարժեքը։

**Պարամետրեր**

| Անվանում    | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|-------------|--------------|----------------|----------------|
| accounting  | string       |    -            | Հաշվառման կոդ (ներքին անուն): |
| isn         | int          |   -            | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| isnGl       | int          |    -            | Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| startDate   | DateTime     |    -            | Ժամանակաշրջանի սկզբի ամսաթիվ։ |
| endDate     | DateTime     |   -             | Ժամանակաշրջանի վերջին ամսաթիվ։ |
| codeOper    | string       | ""             | Հաշվառման գործողության կոդը, որի շրջանառությունները կվերադարձվի։ |
| baseIsn     | int          | -1             | Հիմքային փաստաթղթի ներքին նույնականացման համար։ |

