---
title: LoadByObject(string, int, DateTime, DateTime, string)
parent: "Մեթոդներ"
grand_parent: "IFactService"
---

# IFactService.LoadByObject(string, int, DateTime, DateTime, string) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.LoadFactByObject](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/LoadFactByObject.html)

**Դաս՝** [IFactService](../IFactService.md)

```c#
public Task<List<Fact>> LoadByObject(string accCode, 
                                     int objectIsn, 
                                     DateTime beginDate, 
                                     DateTime endDate, 
                                     string operation = "");
```

Վերադարձնում է հաշվառվող օբյեկտով ստեղծված գործառույթների ցուցակը տրված ժամանակահատվածում։

Նշված պարամետրերով գործառույթների բացակայության դեպքում վերադառնում է դատարկ ցուցակ։ Վերադարձվող ցուցակի յուրաքանչյուր տարր գործառույթ տիպի օբյեկտ է։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| accCode         | string               | -              | Հաշվառման կոդ: |
| objectIsn       | int                  | -              | Հաշվառող փաստաթղթի ներքին նույնականացման համար։ |
| beginDate       | DateTime             | -              | Ժամանակաշրջանի սկզբի ամսաթիվ։ |
| endDate         | DateTime             | -              | ժամանակաշրջանի վերջին ամսաթիվ։ |
| operation       | string               | ""             | Գործողությունների կոդերի ցանկ։ <br> Եթե ցանկը սկսվում է “+” նշանով, ապա հաշվի են առնվում գործողությունների բոլոր կոդերը, որոնք թվարկվում են նրանից հետո։ <br> “-“ նշանի դեպքում անտեսվում են այն գործողությունները, որոնց կոդերը թվարկված են ցանկի մեջ։ Գործողությունների կոդերը թվարկվում են մեկը մյուսի հետևից բացատների միջոցով։ <br> Ցանկը նաև կարող է պարունակել առանց նշանի միակ տարր: |
  
