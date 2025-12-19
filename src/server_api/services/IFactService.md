---
title: "IFactService սերվիս"
---

## Ներածություն

IFactService դասը նախատեսված է հաշվառման գործառնությունների (Fact) հետ աշխատանքը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Exists(int, int, string, string, bool)](IFactService/Exists.md) | Ստուգում է նշված հաշվառող կամ հիմք փաստաթղթով գործառույթների առկայությանը։ |
| [LastDate(string, int, DateTime?, string)](IFactService/LastDate.md) | Վերադարձնում է վերջին գործառնության ամսաթիվը նշված հաշվառումից։ |
| [LastHI2FactDate(string, int, int, DateTime?, string)](IFactService/LastHI2FactDate.md) | Վերադարձնում է հաշվառվող օբյեկտի համար նշանակված վերջին HI2 գործառույթի ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։ |
| [LoadByBase(int, string, string, bool)](IFactService/LoadByBase.md) | Վերադարձնում է հիմքային փաստաթղթով ստեղծված գործառույթների ցուցակը։ |
| [LoadByObject(string, int, DateTime, DateTime, string)](IFactService/LoadByObject.md) | Վերադարձնում է հաշվառվող օբյեկտով ստեղծված գործառույթների ցուցակը տրված ժամանակահատվածում։ |
| [LoadByTrans(int, int, string, string)](IFactService/LoadByTrans.md) | Վերադարձնում է հիմքային փաստաթղթով և գործարքի համարով ստեղծված գործառույթների ցուցակը։ |
| [LoadHI2ByBase(int, string, string, long)](IFactService/LoadHI2ByBase.md) | Վերադարձնում է հիմքային փաստաթղթով ստեղծված HI2 գործառույթների ցուցակը։ |
| [LoadHI2ByObject(string, int, long, DateTime?, DateTime?, string)](IFactService/LoadHI2ByObject.md) | Վերադարձնում է հաշվառվող օբյեկտով ստեղծված HI2 գործառույթների ցուցակը տրված ժամանակահատվածում։ |
| [SetAccDeb(Fact, string, bool)](IFactService/SetAccDeb.md) | Նշանակում է գործառնության դեբետային հաշիվը։ |
| [SetAccCrd(Fact, string, bool)](IFactService/SetAccCrd.md) | Նշանակում է գործառնության կրեդիտային հաշիվը։ |

