---
title: Accounting նկարագրություն
---

## Ներածություն

Եթե փաստաթղթի համար հարկավոր է վարել որևիցե տվյալի ժամանակագրական հաշվառում, ապա այն պետք է նկարագրել համակարգում:

8X համակարգում հաշվառում նկարագրելու համար հարկավոր է ունենալ
* .as ընդլայնմամբ ֆայլ սկրիպտերում [ACCOUNTING](#accounting-նկարագրություն) նկարագրությամբ։ Այն անհրաժեշտ է ներմուծել տվյալների բազա `Syscon` գործիքի միջոցով։
* .cs ընդլայնմամբ ֆայլ, որը պարունակում է սերվերում աշխատող տրամաբանությունը։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [OnAdd](accounting/OnAdd.md) | Մեթոդը կանչվում է միջուկի կողմից [DocumentService](../services/IDocumentService.md) դասի [StoreFact](../services/IDocumentService/StoreFact.md) մեթոդով հաշվառումները գրանցելիս։ |
| [OnDelete](accounting/OnDelete.md) | OnDelete մեթոդը կանչվում է միջուկի կողմից [DocumentService](../services/IDocumentService.md) դասի [HiDelete](../services/IDocumentService/HiDelete.md), [HiDeleteAll](../services/IDocumentService/HiDeleteAll.md) մեթոդներով հաշվառումները ջնջելիս կամ փաստաթուղթը [Delete](../services/IDocumentService/Delete.md) մեթոդով իր հաշվառումների հետ ջնջելիս։ |
| [OnLimitFault](accounting/OnLimitFault.md) | Մեթոդը կանչվում է միջուկի կողմից [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։ |
| [OnLimitFault](accounting/OnLimitFault1.md) | Մեթոդը կանչվում է միջուկի կողմից [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։ |
