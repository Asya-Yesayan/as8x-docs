---
title: IExecutionProgress դաս
---

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Add(int, string)](IExecutionProgress/Add.md) | Ավելացնում է նոր փուլ կատարման պրոգրեսում։ |
| [Add(string)](IExecutionProgress/Add1.md) | Ավելացնում է նոր փուլ կատարման պրոգրեսում: |
| [Refresh(string)](IExecutionProgress/Refresh.md) | Թարմացնում է կատարման պրոգրեսի ընթացիկ փուլը՝ ցուցադրելով տրված անվանումը։ |
| [DefineReport(string, string, bool)](IExecutionProgress/DefineReport.md) | Ստեղծում է տեքստային հաշվետվություն՝ 120 լայնությամբ հատվածով (ֆրագմենտով)։ Մեթոդի կրկնակի կանչի դեպքում առաջանում է սխալ։ |
| [AddHeader(string)](IExecutionProgress/AddHeader.md) | Ավելացնում է նոր գլխագիր տող տեքստային հաշվետվության վերին հատվածում։ Առաջադրանքի կատարման ժամանակ մեթոդի կանչը անտեսվում է։ |
| [AddFooter(string)](IExecutionProgress/AddFooter.md) | Ավելացնում է նոր տող տեքստային հաշվետվության ստորին հատվածում։ Առաջադրանքի կատարման ժամանակ մեթոդի կանչը անտեսվում է։ |
| [AddRow(string)](IExecutionProgress/AddRow.md) | Ավելացնում է նոր տող տեքստային հաշվետվությունում, եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ Առաջադրանքի ընթացքում կանչի դեպքում միայն Seq-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությամբ և Information լոգավորման մակարդակով, իսկ տեքստային հաշվետվությունը մնում է անփոփոխ։ |
| [AddInformationEvent(IEnumerable&lt;string&gt;)](IExecutionProgress/AddInformationEvent.md) | Ավելացնում է նոր տողեր տեքստային հաշվետվությունում, եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն Seq-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով և Information լոգավորման մակարդակով, իսկ տեքստային հաշվետվությունը մնում է անփոփոխ։ |
| [AddErrorEvent(string, Exception)](IExecutionProgress/AddErrorEvent.md) | Ավելացնում է նոր տող տեքստային հաշվետվությունում, եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն Seq-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությամբ, սխալի հաղորդագրությամբ և Error լոգավորման մակարդակով։ |
| [SaveToStorageAndClose()](IExecutionProgress/SaveToStorageAndClose.md) | Փակում է հաշվետվությունը և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../services/IStorageService/Container.md): |
| [SaveToStorageAsText(StorageInfo, bool, bool, bool)](IExecutionProgress/SaveToStorageAsText.md) | Պահպանում է տեքստային հաշվետվության պարունակությունը ֆայլի մեջ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CancellationRequest](IExecutionProgress/CancellationRequest.md) | Վերադարձնում է կատարման պրոգրեսի չեղարկման օբյեկտը։ |
| [CurrentPhase](IExecutionProgress/CurrentPhase.md) | Սահմանում կամ վերադարձնում է կատարման պրոգրեսի ընթացիկ կատարման փուլ։ |
| [HasError](IExecutionProgress/HasError.md) | Սահմանում կամ վերադարձնում է արժեք, որը ցույց է տալիս՝ արդյոք առաջադրանքի կատարման ընթացքում տեղի է ունեցել սխալ։ |