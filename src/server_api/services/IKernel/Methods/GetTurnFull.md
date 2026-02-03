---
title: GetTurnFull(string, int, DateTime, DateTime)
parent: "Մեթոդներ"
grand_parent: "IKernelService"
---

# IKernelService.GetTurnFull(string, int, DateTime, DateTime) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [Kernel.GetTurnFull](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/GetTurnFull.html)

**Դաս՝** [IKernelService](../IKernelService.md)

```c#
public Task<(decimal DbTurn, decimal DbTurnAMD, 
            decimal CrTurn, decimal CrTurnAMD, 
            decimal Rem, decimal RemAMD, 
            decimal StartRem, decimal StartRemAMD)> GetTurnFull(
    string accounting, 
    int isn, 
    DateTime startDate, 
    DateTime endDate)
```

Վերադարձնում է փաստաթղթի հաշվառման դեբետային և կրեդիտային շրջանառության արժեքները տրված ժամանակաշրջանի համար, ինչպես նաև սկզբնական և վերջնական մնացորդները։

Վերադարձնում է կորտեժ`
* `DbTurn` - Դեբետային շրջանառությունը։
* `DbTurnAMD` - Դեբետային շրջանառության դրամային համարժեքը։
* `CrTurn` - Կրեդիտային շրջանառությունը։
* `CrTurnAMD` - Կրեդիտային շրջանառության դրամային համարժեքը։
* `Rem` - Ժամանակաշրջանի վերջնական մնացորդը։
* `RemAMD` - Ժամանակաշրջանի վերջնական մնացորդի դրամային համարժեքը։
* `StartRem` - Ժամանակաշրջանի սկզբնական մնացորդը։
* `StartRemAMD` - Ժամանակաշրջանի սկզբնական մնացորդի դրամային համարժեքը։

**Պարամետրեր**


| Անվանում    | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|-------------|--------------|----------------|----------------|
| accounting  | string       |     -           | Հաշվառման կոդ (ներքին անուն): |
| isn         | int          |     -           | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| startDate   | DateTime     |     -           | Ժամանակաշրջանի սկզբի ամսաթիվ։ |
| endDate     | DateTime     |     -           | Ժամանակաշրջանի վերջին ամսաթիվ։ |

