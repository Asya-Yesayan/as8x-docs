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
| [OnAdd(OnAddEventArgs)](accounting/Methods/OnAdd.md) | Մեթոդը կանչվում է միջուկի կողմից [DocumentService](../services/IDocumentService.md) դասի [StoreFact](../services/IDocumentService/Methods/StoreFact.md) մեթոդով հաշվառումները գրանցելիս։ |
| [OnDelete(OnDeleteEventArgs)](accounting/Methods/OnDelete.md) | OnDelete մեթոդը կանչվում է միջուկի կողմից [DocumentService](../services/IDocumentService.md) դասի [HiDelete](../services/IDocumentService/Methods/HiDelete.md), [HiDeleteAll](../services/IDocumentService/Methods/HiDeleteAll.md) մեթոդներով հաշվառումները ջնջելիս կամ փաստաթուղթը [Delete](../services/IDocumentService/Methods/Delete.md) մեթոդով իր հաշվառումների հետ ջնջելիս։ |
| [IAccountingOnLimitFault.OnLimitFault(int, decimal, decimal, bool, Document.Document)](accounting/Methods/OnLimitFault.md#iaccountingonlimitfaultonlimitfaultint-decimal-decimal-bool-documentdocument-մեթոդ) | Մեթոդը կանչվում է միջուկի կողմից [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։ |
| [IAccountingOnHI2LimitFault.OnLimitFault(int, int, bool, Document.Document)](accounting/Methods/OnLimitFault.md#iaccountingonhi2limitfaultonlimitfaultint-int-bool-documentdocument-մեթոդ) | Մեթոդը կանչվում է միջուկի կողմից [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։ |
