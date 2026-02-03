---
layout: page
title: Հաշվառում
parent: "Համակարգային նկարագրություններ"
nav_order: 2
---

# Accounting նկարագրություն

## Ներածություն

Եթե փաստաթղթի համար հարկավոր է վարել որևիցե տվյալի ժամանակագրական հաշվառում, ապա այն պետք է նկարագրել համակարգում:

8X համակարգում հաշվառում նկարագրելու համար հարկավոր է ունենալ
* .as ընդլայնմամբ ֆայլ սկրիպտերում [ACCOUNTING](#accounting-նկարագրություն) նկարագրությամբ։ Այն անհրաժեշտ է ներմուծել տվյալների բազա `Syscon` գործիքի միջոցով։
* .cs ընդլայնմամբ ֆայլ, որը պարունակում է սերվերում աշխատող տրամաբանությունը։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [OnAdd(OnAddEventArgs)](../Accounting/Methods/OnAdd.md) | Մեթոդը կանչվում է միջուկի կողմից [DocumentService](../../Services/IDocument/IDocumentService.md) դասի [StoreFact](../../Services/IDocument/Methods/StoreFact.md) մեթոդով հաշվառումները գրանցելիս։ |
| [OnDelete(OnDeleteEventArgs)](../Accounting/Methods/OnDelete.md) | OnDelete մեթոդը կանչվում է միջուկի կողմից [DocumentService](../../Services/IDocument/IDocumentService.md) դասի [HiDelete](../../Services/IDocument/Methods/HiDelete.md), [HiDeleteAll](../../Services/IDocument/Methods/HiDeleteAll.md) մեթոդներով հաշվառումները ջնջելիս կամ փաստաթուղթը [Delete](../../Services/IDocument/Methods/Delete.md) մեթոդով իր հաշվառումների հետ ջնջելիս։ |
| [IAccountingOnLimitFault.OnLimitFault(int, decimal, decimal, bool, Document.Document)](Methods/OnLimitFault.md#iaccountingonlimitfaultonlimitfaultint-decimal-decimal-bool-documentdocument-մեթոդ) | Մեթոդը կանչվում է միջուկի կողմից [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։ |
| [IAccountingOnHI2LimitFault.OnLimitFault(int, int, bool, Document.Document)](Methods/OnLimitFault.md#iaccountingonhi2limitfaultonlimitfaultint-int-bool-documentdocument-մեթոդ) | Մեթոդը կանչվում է միջուկի կողմից [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) աղյուսակում գրանցված հաշվառման սահմանաչափերի խախտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։ |
