---
title: IKernelService.GetRemHI2(string, int, int, DateTime?)  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Kernel.GetRemHI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/GetRemHI2.html)

**Դաս՝** [IKernelService](../IKernelService.md)

```c#
public Task<(decimal CRem, decimal NCRem)> GetRemHI2(string accounting, 
                                                     int isn = -1, 
                                                     int isnGl = -1, 
                                                     DateTime? remDate = null)
```

Վերադարձնում է փաստաթղթի [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցվող հաշվառման մնացորդը նշված ամսաթվի դրությամբ։ 
Մնացորդը կա՛մ գումարային ըստ բոլոր կուտակող օբյեկտների է, կա՛մ միայն փոխանցված `isnGl`-ով։

Վերադարձնում է կորտեժ`
* `CRem` - Մնացորդը։
* `NCRem` - Մնացորդի դրամային համարժեքը։ 
  Այս թիվը ձևավորվում է մնացորդի ձևավորման ժամանակ, այլ ոչ թե վերահաշվարկվում մեթոդի կանչի ժամանակ։

**Պարամետրեր**

| Անվանում   | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|------------|--------------|----------------|----------------|
| accounting | string       |    -            | Հաշվառման կոդ (ներքին անուն): |
| isn        | int          | -1             | Հաշվառվող հիմնական օբյեկտի ներքին նույնականացման համար։ |
| isnGl      | int          | -1             | Հաշվառվող կուտակող օբյեկտի ներքին նույնականացման համար։ |
| remDate    | DateTime?    | null           | Մնացորդը բերելու ամսաթիվը։ Եթե պարամետրը փոխանցված չէ, ապա բերվում է վերջնական մնացորդը։ |

