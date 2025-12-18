---
title: IAccountingOnLimitFault.OnLimitFault մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnLimitFault](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnLimitFault.html)

**Դաս՝** [Accounting](../accounting.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [OnLimitFault(int, decimal, decimal, bool, Document.Document)](#iaccountingonlimitfaultonlimitfaultint-decimal-decimal-bool-documentdocument-մեթոդ) | Մեթոդը կանչվում է միջուկի կողմից [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։ |
| [OnLimitFault(int, int, bool, Document.Document)](#iaccountingonhi2limitfaultonlimitfaultint-int-bool-documentdocument-մեթոդ) | Մեթոդը կանչվում է միջուկի կողմից [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։ |

### IAccountingOnLimitFault.OnLimitFault(int, decimal, decimal, bool, Document.Document) մեթոդ

```c#
public Task<bool> OnLimitFault(int isn, 
                               decimal overrunning, 
                               decimal overrunningLinked = -1, 
                               bool isDeleting = false, 
                               Document.Document baseDocument = null);
```

Մեթոդը կանչվում է միջուկի կողմից [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։

[HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակում գրանցված հաշվառումների սահմանաչափերի խախտման ժամանակ լրացուցիչ մշակումներ իրականացնելու համար [հաշվառումը նկարագրող դասը](../accounting.md) պետք է իրականացնի `IAccountingOnLimitFault` ինտերֆեյսը։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Հաշվառման օբյեկտի ներքին նույնականացման համար։ |
| overrunning     | decimal              | -              | Սահմանաչապերից դուրս գալու գումարի չափ։ Եթե արժեքը բացասական է, ապա խախտվել է ստորին սահմանաչափը, դրականի դեպքում՝ վերին սահմանաչափը։ |
| overrunningLinked | decimal              | -1             | Կից հաշվառման սահմանաչափերից դուրս գալու գումարի չափ։ Լռությամբ արժեքը **-1** է։ |
| isDeleting      | bool                 | false          | Ցույց է տալիս, որ սահմանաչափի խախտումը առաջացել է փաստաթղթի ջնջման ժամանակ։ Լռությամբ արժեքը **false** է։ |
| baseDocument    | Document.Document    | null           | Հաշվառումը ստեղծող փաստաթղթը նկարագրող դասը։ Լռությամբ արժեքը **null** է։ |

### IAccountingOnHI2LimitFault.OnLimitFault(int, int, bool, Document.Document) մեթոդ

```c#
public Task OnLimitFault(int isn, 
                         int glIsn, 
                         bool isDeleting = false, 
                         Document.Document baseDocument = null);
```

Մեթոդը կանչվում է միջուկի կողմից [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։

[HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցված հաշվառումների սահմանաչափերի խախտման ժամանակ լրացուցիչ մշակումներ իրականացնելու համար [հաշվառումը նկարագրող դասը](../accounting.md) պետք է իրականացնի `IAccountingOnHI2LimitFault` ինտերֆեյսը։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Հաշվառման օբյեկտի ներքին նույնականացման համար։ |
| glIsn           | int                  | -              | Հաշվառման երկրորդ օբյեկտի ներքին նույնականացման համար։ Այս պարամետրը անհրաժեշտ է [HIREST2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hirest2.html) աղյուսակում սահմանաչափերի ստուգման համար։ |
| isDeleting      | bool                 | false          | Ցույց է տալիս, որ սահմանաչափի խախտումը առաջացել է փաստաթղթի ջնջման ժամանակ։ Լռությամբ արժեքը **false** է։ |
| baseDocument    | Document.Document    | null           | Հաշվառումը ստեղծող փաստաթղթը նկարագրող դասը։ Լռությամբ արժեքը **null** է։ |

