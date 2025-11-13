---
title: IExecutionProgress սերվիս
---

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Add](IExecutionProgress/Add.md) | Ավելացնում է նոր փուլ կատարման պրոգրեսում։ |
| [Add](IExecutionProgress/Add1.md) | Ավելացնում է նոր փուլ կատարման պրոգրեսում: |
| [Refresh](IExecutionProgress/Refresh.md) | Թարմացնում է կատարման պրոգրեսի ընթացիկ փուլը՝ ցուցադրելով տրված անվանումը։ |
| [DefineReport](IExecutionProgress/DefineReport.md) | Ստեղծում է տեքստային հաշվետվություն՝ 120 լայնությամբ հատվածով (ֆրագմենտով)։ Մեթոդի կրկնակի կանչի դեպքում առաջանում է սխալ։ |
| [AddHeader](IExecutionProgress/AddHeader.md) | Ավելացնում է նոր գլխագիր տող տեքստային հաշվետվության վերին հատվածում։ Առաջադրանքի կատարման ժամանակ մեթոդի կանչը անտեսվում է։ |
| [AddFooter](IExecutionProgress/AddFooter.md) | Ավելացնում է նոր տող տեքստային հաշվետվության ստորին հատվածում։ Առաջադրանքի կատարման ժամանակ մեթոդի կանչը անտեսվում է։ |
| [AddRow](IExecutionProgress/AddRow.md) | Ավելացնում է նոր տող տեքստային հաշվետվությունում։ Եթե մեթոդը կանչվել է առաջադրանքի կատարման ժամանակ, ապա Seq-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությամբ և Information լոգավորման մակարդակով։ |
| [AddInformationEvent](IExecutionProgress/AddInformationEvent.md) | Ավելացնում է նոր տողեր տեքստային հաշվետվությունում։ Եթե մեթոդը կանչվել է առաջադրանքի կատարման ժամանակ, ապա Seq-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով և Information լոգավորման մակարդակով։ |
| [AddErrorEvent](IExecutionProgress/AddErrorEvent.md) | Ավելացնում է նոր տող տեքստային հաշվետվությունում։ Եթե մեթոդը կանչվել է առաջադրանքի կատարման ժամանակ, ապա Seq-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությամբ, սխալի հաղորդագրությամբ և Error լոգավորման մակարդակով։ |
| [SaveToStorageAndClose](IExecutionProgress/SaveToStorageAndClose.md) | Փակում է հաշվետվությունը և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../../services/IStorageService/Container.md): |
| [SaveToStorageAsText](IExecutionProgress/SaveToStorageAsText.md) | Պահպանում է տեքստային հաշվետվության պարունակությունը ֆայլի մեջ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CancellationRequest](IExecutionProgress/CancellationRequest.md) | Վերադարձնում է կատարման պրոգրեսի չեղարկման օբյեկտը։ |
| [CurrentPhase](IExecutionProgress/CurrentPhase.md) | Սահմանում կամ վերադարձնում է կատարման պրոգրեսի ընթացիկ կատարման փուլ։ |
| [HasError](IExecutionProgress/HasError.md) | Սահմանում կամ վերադարձնում է արժեք, որը ցույց է տալիս՝ արդյոք առաջադրանքի կատարման ընթացքում տեղի է ունեցել սխալ։ |