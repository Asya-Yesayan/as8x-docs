---
title: IExecutionProgress դաս
---

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Add(int, string)](IExecutionProgress/Add.md) | Ավելացնում է նոր փուլ կատարման պրոգրեսում։ |
| [Add(string)](IExecutionProgress/Add1.md) | Ավելացնում է նոր փուլ կատարման պրոգրեսում: |
| [Break()](IExecutionProgress/Break.md) | Ավելացնում է դատարկ նոր տող տեքստային հաշվետվությունում: |
| [Refresh(string)](IExecutionProgress/Refresh.md) | Թարմացնում է կատարման պրոգրեսի ընթացիկ փուլը՝ ցուցադրելով տրված անվանումը։ |
| [DefineReport(string, string, bool)](IExecutionProgress/DefineReport.md) | Ստեղծում է տեքստային հաշվետվություն՝ 120 լայնությամբ հատվածով (ֆրագմենտով)։ Մեթոդի կրկնակի կանչի դեպքում առաջանում է սխալ։ |
| [RecordHeader(string)](IExecutionProgress/RecordHeader.md) | Ավելացնում է նոր գլխագիր տող տեքստային հաշվետվության վերին հատվածում։ Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում տեքստային հաշվետվությունը մնում է անփոփոխ։ |
| [RecordFooter(string)](IExecutionProgress/RecordFooter.md) | Ավելացնում է նոր տող տեքստային հաշվետվության ստորին հատվածում։ Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում տեքստային հաշվետվությունը մնում է անփոփոխ։ |
| [RecordInformation(IEnumerable&lt;string&gt;, int, string, int, Dictionary&lt;string, object&gt;)](IExecutionProgress/RecordInformation.md) | Ավելացնում է նոր տողեր տեքստային հաշվետվությունում, եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն Seq-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով և Information լոգավորման մակարդակով, իսկ տեքստային հաշվետվությունը մնում է անփոփոխ։ |
| [RecordInformation(string, int, string, int, Dictionary&lt;string, object&gt;)](IExecutionProgress/RecordInformation1.md) | Ավելացնում է նոր տող տեքստային հաշվետվությունում, եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն Seq-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությունով և Information լոգավորման մակարդակով, իսկ տեքստային հաշվետվությունը մնում է անփոփոխ։ |
| [RecordError(IEnumerable&lt;string&gt;, Exception, int, string, int, Dictionary&lt;string, object&gt;)](IExecutionProgress/RecordError.md) | Ավելացնում է նոր տողեր տեքստային հաշվետվությունում, եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն Seq-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով, սխալի հաղորդագրությամբ և Error լոգավորման մակարդակով, իսկ տեքստային հաշվետվությունը մնում է անփոփոխ։ |
| [RecordError(string, Exception, int, string, int, Dictionary&lt;string, object&gt;)](IExecutionProgress/RecordError1.md) | Ավելացնում է նոր տող տեքստային հաշվետվությունում, եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն Seq-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությունով, սխալի հաղորդագրությամբ և Error լոգավորման մակարդակով, իսկ տեքստային հաշվետվությունը մնում է անփոփոխ։ |
| [SaveToStorageAndClose()](IExecutionProgress/SaveToStorageAndClose.md) | Փակում է հաշվետվությունը և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../services/IStorageService/Container.md): |
| [SaveToStorageAsText(StorageInfo, bool, bool, bool)](IExecutionProgress/SaveToStorageAsText.md) | Պահպանում է տեքստային հաշվետվության պարունակությունը ֆայլի մեջ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CancellationRequest](IExecutionProgress/CancellationRequest.md) | Վերադարձնում է կատարման պրոգրեսով պրոցեսի [չեղարկման օբյեկտը](CancellationRequest.md)։ |
| [CurrentPhase](IExecutionProgress/CurrentPhase.md) | Սահմանում կամ վերադարձնում է կատարման պրոգրեսի ընթացիկ [կատարման փուլը](ProgressPhase.md)։ |
| [HasError](IExecutionProgress/HasError.md) | Սահմանում կամ վերադարձնում է արժեք, որը ցույց է տալիս՝ արդյոք առաջադրանքի կատարման ընթացքում տեղի է ունեցել սխալ։ |