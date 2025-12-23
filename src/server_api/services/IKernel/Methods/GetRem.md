---
title: IKernelService.GetRem(string, int, DateTime?) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Kernel.GetRem](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/AccManagement/GetRem.html)

**Դաս՝** [IKernelService](../IKernelService.md)

```c#
public Task<(decimal CRem, decimal NCRem)> GetRem(string accounting, 
                                                  int isn, 
                                                  DateTime? remDate = null)
```

Վերադարձնում է փաստաթղթի հաշվառման մնացորդը նշված ամսաթվի դրությամբ։

Վերադարձնում է կորտեժ`
* `CRem` - Մնացորդը։
* `NCRem` - Մնացորդի դրամային համարժեքը։ 
  Այս թիվը ձևավորվում է մնացորդի ձևավորման ժամանակ, այլ ոչ թե վերահաշվարկվում մեթոդի կանչի ժամանակ։

**Պարամետրեր**


| Անվանում    | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|-------------|--------------|----------------|----------------|
| accounting  | string       |     -           | Հաշվառման կոդ (ներքին անուն): |
| isn         | int          |      -          | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| remDate     | DateTime?    | null           | Մնացորդը բերելու ամսաթիվը։ Եթե պարամետրը փոխանցված չէ, ապա բերվում է վերջնական մնացորդը։ |

