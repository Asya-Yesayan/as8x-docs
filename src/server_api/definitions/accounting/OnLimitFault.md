---
title: IAccountingOnLimitFault.OnLimitFault(int, decimal, decimal, bool, Document.Document) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [OnLimitFault](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnLimitFault.html)

```c#
public Task<bool> OnLimitFault(int isn, decimal overrunning, decimal overrunningLinked = -1, bool isDeleting = false, Document.Document baseDocument = null);
```

Մեթոդը կանչվում է միջուկի կողմից [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։

[HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակում գրանցված հաշվառումների սահմանաչափերի խախտման ժամանակ լրացուցիչ մշակումներ իրականացնելու համար [հաշվառումը նկարագրող դասը](../accounting.md) պետք է իրականացնի `IAccountingOnLimitFault` ինտերֆեյսը։

**Պարամետրեր**

* `isn` - Հաշվառման օբյեկտի ներքին նույնականացման համար։
* `overrunning` - Սահմանաչապերից դուրս գալու գումարի չափ։ Եթե արժեքը բացասական է, ապա խախտվել է ստորին սահմանաչափը, դրականի դեպքում՝ վերին սահմանաչափը։
* `overrunningLinked` - Կից հաշվառման սահմանաչափերից դուրս գալու գումարի չափ։ Լռությամբ արժեքը **-1** է։
* `isDeleting` - Ցույց է տալիս, որ սահմանաչափի խախտումը առաջացել է փաստաթղթի ջնջման ժամանակ։ Լռությամբ արժեքը **false** է։
* `baseDocument` - Հաշվառումը ստեղծող փաստաթղթը նկարագրող դասը։ Լռությամբ արժեքը **null** է։
