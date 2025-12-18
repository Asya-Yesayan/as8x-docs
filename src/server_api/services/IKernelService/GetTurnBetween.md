---
title: IKernelService.GetTurnBetween(string, int, DateTime, DateTime, string, bool) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Kernel.GetTurnBetween](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/GetTurnBetween.html)

**Դաս՝** [IKernelService](../IKernelService.md)

```c#
public Task<List<(DateTime Date, decimal DbTurn, decimal DbTurnAMD, 
                  decimal CrTurn, decimal CrTurnAMD)>> GetTurnBetween(
    string accounting, 
    int isn, 
    DateTime startDate, 
    DateTime endDate, 
    string codeOper = "", 
    bool bNotShowSameClAccTurn = false)
```

Վերադարձնում է փաստաթղթի հաշվառվման ամենօրյա շրջանառությունների ցուցակ նշված ժամանակահատվածի համար։

Վերադարձնում է կորտեժների ցուցակ՝
* `Date` - Միջակայքից ամսաթիվ, որով առկա է շրջանառություն։
* `DbTurn` - Դեբետային շրջանառությունը նշված ամսաթվով։
* `DbTurnAMD` - Դեբետային շրջանառության դրամային համարժեքը նշված ամսաթվով։
* `CrTurn` - Կրեդիտային շրջանառությունը նշված ամսաթվով։
* `CrTurnAMD` - Կրեդիտային շրջանառության դրամային համարժեքը նշված ամսաթվով։

**Պարամետրեր**

| Անվանում                  | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|---------------------------|--------------|----------------|----------------|
| accounting                | string       |    -            | Հաշվառման կոդ (ներքին անուն): |
| isn                       | int          |     -           | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| startDate                 | DateTime     |     -           | Ժամանակաշրջանի սկզբի ամսաթիվ։ |
| endDate                   | DateTime     |    -            | Ժամանակաշրջանի վերջին ամսաթիվ։ |
| codeOper                  | string       | ""             | Հաշվառման գործողության կոդը, որի շրջանառությունները կվերադարձվի։ |
| bNotShowSameClAccTurn     | bool         | false          | true արժեքի դեպքում ֆիլտրվում են և չեն վերադարձվում հաճախորդի սեփական հաշիվների միջև գործողությունները։ |
