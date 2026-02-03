---
title: "IFactService"
parent: "Սերվիսներ"
nav_order: 2
---

# IFactService սերվիս

## Ներածություն

IFactService դասը նախատեսված է հաշվառման գործառնությունների (Fact) հետ աշխատանքը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Exists(int, int, string, string, bool)](Methods/Exists.md) | Ստուգում է նշված հաշվառող կամ հիմք փաստաթղթով գործառույթների առկայությանը։ |
| [LastDate(string, int, DateTime?, string)](Methods/LastDate.md) | Վերադարձնում է վերջին գործառնության ամսաթիվը նշված հաշվառումից։ |
| [LastHI2FactDate(string, int, int, DateTime?, string)](Methods/LastHI2FactDate.md) | Վերադարձնում է հաշվառվող օբյեկտի համար նշանակված վերջին HI2 գործառույթի ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։ |
| [LoadByBase(int, string, string, bool)](Methods/LoadByBase.md) | Վերադարձնում է հիմքային փաստաթղթով ստեղծված գործառույթների ցուցակը։ |
| [LoadByObject(string, int, DateTime, DateTime, string)](Methods/LoadByObject.md) | Վերադարձնում է հաշվառվող օբյեկտով ստեղծված գործառույթների ցուցակը տրված ժամանակահատվածում։ |
| [LoadByTrans(int, int, string, string)](Methods/LoadByTrans.md) | Վերադարձնում է հիմքային փաստաթղթով և գործարքի համարով ստեղծված գործառույթների ցուցակը։ |
| [LoadHI2ByBase(int, string, string, long)](Methods/LoadHI2ByBase.md) | Վերադարձնում է հիմքային փաստաթղթով ստեղծված HI2 գործառույթների ցուցակը։ |
| [LoadHI2ByObject(string, int, long, DateTime?, DateTime?, string)](Methods/LoadHI2ByObject.md) | Վերադարձնում է հաշվառվող օբյեկտով ստեղծված HI2 գործառույթների ցուցակը տրված ժամանակահատվածում։ |
| [SetAccDeb(Fact, string, bool)](Methods/SetAccDeb.md) | Նշանակում է գործառնության դեբետային հաշիվը։ |
| [SetAccCrd(Fact, string, bool)](Methods/SetAccCrd.md) | Նշանակում է գործառնության կրեդիտային հաշիվը։ |

