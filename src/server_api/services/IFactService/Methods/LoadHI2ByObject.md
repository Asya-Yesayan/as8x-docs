---
title: IFactService.LoadHI2ByObject(string, int, long, DateTime?, DateTime?, string) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.LoadHI2FactByObject](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/LoadHI2FactByObject.html)

**Դաս՝** [IFactService](../../IFactService.md)

```c#
public Task<List<Fact>> LoadHI2ByObject(string accounting, 
                                        int objectIsn, 
                                        long glAccISN = -1, 
                                        DateTime? beginDate = null, 
                                        DateTime? endDate = null, 
                                        string operation = "");
```

Վերադարձնում է հաշվառվող օբյեկտով ստեղծված HI2 գործառույթների ցուցակը տրված ժամանակահատվածում։

Նշված պարամետրերով գործառույթների բացակայության դեպքում վերադառնում է դատարկ ցուցակ։ Վերադարձվող ցուցակի յուրաքանչյուր տարր գործառույթ տիպի օբյեկտ է։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| accounting      | string               | -              | Հաշվառման կոդը։ |
| objectIsn       | int                  | -              | Հաշվառող փաստաթղթի ներքին նույնականացման համար։ |
| glAccISN        | long                 | -1             | Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| beginDate       | DateTime?            | null           | Ժամանակաշրջանի սկզբի ամսաթիվ։ |
| endDate         | DateTime?            | null           | ժամանակաշրջանի վերջին ամսաթիվ։ |
| operation       | string               | ""             | Գործողությունների կոդերի ցանկ։ <br> Եթե ցանկը սկսվում է “+” նշանով, ապա հաշվի են առնվում գործողությունների բոլոր կոդերը, որոնք թվարկվում են նրանից հետո։ <br> “-“ նշանի դեպքում անտեսվում են այն գործողությունները, որոնց կոդերը թվարկված են ցանկի մեջ։ Գործողությունների կոդերը թվարկվում են մեկը մյուսի հետևից բացատների միջոցով։ <br> Ցանկը նաև կարող է պարունակել առանց նշանի միակ տարր: |
  
