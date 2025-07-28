---
title: IAccountingOnHI2LimitFault.OnLimitFault(int, int, bool, Document.Document) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [OnLimitFault](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnLimitFault.html)

```c#
public Task OnLimitFault(int isn, int glIsn, bool isDeleting = false, Document.Document baseDocument = null);
```

Մեթոդը կանչվում է միջուկի կողմից [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։

[HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցված հաշվառումների սահմանաչափերի խախտման ժամանակ լրացուցիչ մշակումներ իրականացնելու համար [հաշվառումը նկարագրող դասը](../accounting.md) պետք է իրականացնի `IAccountingOnHI2LimitFault` ինտերֆեյսը։

**Պարամետրեր**

* `isn` - Հաշվառման օբյեկտի ներքին նույնականացման համար։
* `glIsn` - Հաշվառման երկրորդ օբյեկտի ներքին նույնականացման համար։ Այս պարամետրը անհրաժեշտ է [HIREST2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hirest2.html) աղյուսակում սահմանաչափերի ստուգման համար։
* `isDeleting` - Ցույց է տալիս, որ սահմանաչափի խախտումը առաջացել է փաստաթղթի ջնջման ժամանակ։ Լռությամբ արժեքը **false** է։
* `baseDocument` - Հաշվառումը ստեղծող փաստաթղթը նկարագրող դասը։ Լռությամբ արժեքը **null** է։
