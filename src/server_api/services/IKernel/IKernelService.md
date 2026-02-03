---
title: "IKernelService"
parent: "Սերվիսներ"
nav_order: 2
---

# IKernelService սերվիս

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetExchangeRate(string, DateTime, DateTime?)](Methods/GetExchangeRate.md) | Վերադարձնում է արտարժույթի ՀՀ ԿԲ փոխարժեքը։ |
| [GetRem(string, int, DateTime?)](Methods/GetRem.md) | Վերադարձնում է փաստաթղթի հաշվառման մնացորդը նշված ամսաթվի դրությամբ։ |
| [GetRemHI2](Methods/GetRemHI2.md) | Վերադարձնում է փաստաթղթի [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցվող հաշվառման մնացորդը նշված ամսաթվի դրությամբ։ |
| [GetTurn(string, int, DateTime, DateTime, string)](Methods/GetTurn.md) | Վերադարձնում է փաստաթղթի հաշվառման դեբետային և կրեդիտային շրջանառության արժեքները տրված ժամանակաշրջանի համար։ |
| [GetTurnHI2(string, int, int, DateTime, DateTime, string, int)](Methods/GetTurnHI2.md) | Վերադարձնում է փաստաթղթի [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցվող հաշվառման դեբետային և կրեդիտային շրջանառության արժեքները ըստ տրված կուտակող օբյեկտի և տրված ժամանակաշրջանի համար։ |
| [GetTurnFull(string, int, DateTime, DateTime)](Methods/GetTurnFull.md) | Վերադարձնում է փաստաթղթի հաշվառման դեբետային և կրեդիտային շրջանառության արժեքները տրված ժամանակաշրջանի համար, ինչպես նաև սկզբնական և վերջնական մնացորդները։ |
| [GetTurnBetween(string, int, DateTime, DateTime, string, bool)](Methods/GetTurnBetween.md) | Վերադարձնում է փաստաթղթի հաշվառվման ամենօրյա շրջանառությունների ցուցակ նշված ժամանակահատվածի համար։ |
| [LastOpDate(string, int, DateTime?, string, int)](Methods/LastOpDate.md) | Վերադարձնում է փաստաթղթի հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։ |
| [LastOpDate2(string, int, DateTime?, bool, string, string)](Methods/LastOpDate2.md) | Վերադարձնում է փաստաթղթի հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդերով մինչև նշված ամսաթիվը ներառյալ։ |
| [LastHI2OpDate(string, int, int, DateTime?, string)](Methods/LastHI2OpDate.md#ikernelservicelasthi2opdatestring-int-int-datetime-string-մեթոդ) | Վերադարձնում է փաստաթղթի [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցվող հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։ |
| [LastHI2OpDate(List&lt;string&gt;, int, int, DateTime?, string)](Methods/LastHI2OpDate.md#ikernelservicelasthi2opdateliststring-int-int-datetime-string-մեթոդ) | Վերադարձնում է փաստաթղթի [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցվող հաշվառման վերջին նշանակված գործողության ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդերով մինչև նշված ամսաթիվը ներառյալ։ |
| [UserPositionAndMask(byte, byte, short)](Methods/UserPositionAndMask.md) | Վերադարձնում է համակարգի օգտագործողի դիրքի համարը և դիմակը։ |