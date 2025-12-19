---
title: IExecutionProgress դաս
---

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Add(int, string)](IExecutionProgress/Add.md) | Ավելացնում է նոր փուլ կատարման պրոգրեսում։ |
| [Add(string)](IExecutionProgress/Add1.md) | Ավելացնում է նոր փուլ կատարման պրոգրեսում: |
| [Break()](IExecutionProgress/Break.md) | Ավելացնում է դատարկ նոր տող [տեքստային հաշվետվությունում](TextReport.md): |
| [Refresh(string)](IExecutionProgress/Refresh.md) | Թարմացնում է կատարման պրոգրեսի ընթացիկ փուլը՝ ցուցադրելով տրված անվանումը։ |
| [DefineReport(string, string, bool)](IExecutionProgress/DefineReport.md) | Ստեղծում է տեքստային հաշվետվություն՝ 120 լայնությամբ հատվածով (ֆրագմենտով)։ Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում [տեքստային հաշվետվությունը](TextReport.md) մնում է անփոփոխ։ |
| [RecordHeader(string)](IExecutionProgress/RecordHeader.md) | Ավելացնում է նոր գլխագիր տող [տեքստային հաշվետվության](TextReport.md) վերին հատվածում։ Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում [տեքստային հաշվետվությունը](TextReport.md) մնում է անփոփոխ։ |
| [RecordFooter(string)](IExecutionProgress/RecordFooter.md) | Ավելացնում է նոր տող [տեքստային հաշվետվության](TextReport.md) ստորին հատվածում։ Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում [տեքստային հաշվետվությունը](TextReport.md) մնում է անփոփոխ։ |
| [RecordInformation(IEnumerable&lt;string&gt;, int, string, int, Dictionary&lt;string, object&gt;)](IExecutionProgress/RecordInformation.md) | Ավելացնում է նոր տողեր [տեքստային հաշվետվությունում](TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով և Information լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](TextReport.md) մնում է անփոփոխ։ |
| [RecordInformation(string, int, string, int, Dictionary&lt;string, object&gt;)](IExecutionProgress/RecordInformation1.md) | Ավելացնում է նոր տող [տեքստային հաշվետվությունում](TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությունով և Information լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](TextReport.md) մնում է անփոփոխ։ |
| [RecordError(IEnumerable&lt;string&gt;, Exception, int, string, int, Dictionary&lt;string, object&gt;)](IExecutionProgress/RecordError.md) | Ավելացնում է նոր տողեր [տեքստային հաշվետվությունում](TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով, սխալի հաղորդագրությամբ և Error լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](TextReport.md) մնում է անփոփոխ։ |
| [RecordError(string, Exception, int, string, int, Dictionary&lt;string, object&gt;)](IExecutionProgress/RecordError1.md) | Ավելացնում է նոր տող [տեքստային հաշվետվությունում](TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությունով, սխալի հաղորդագրությամբ և Error լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](TextReport.md) մնում է անփոփոխ։ |
| [SaveToStorageAndClose()](IExecutionProgress/SaveToStorageAndClose.md) | Փակում է հաշվետվությունը և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../services/IStorageService/Container.md): |
| [SaveToStorageAsText(StorageInfo, bool, bool, bool)](IExecutionProgress/SaveToStorageAsText.md) | Պահպանում է [տեքստային հաշվետվության](TextReport.md) պարունակությունը ֆայլի մեջ։ |
| [RecordWarning(IEnumerable&lt;string&gt;, int, string, int, Dictionary&lt;string, object&gt;)](IExecutionProgress/RecordWarning1.md) | Ավելացնում է նոր տողեր [տեքստային հաշվետվությունում](TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով և Warning լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](TextReport.md) մնում է անփոփոխ։ |
| [RecordWarning(string, int, string, int, Dictionary&lt;string, object&gt;)](IExecutionProgress/RecordWarning.md) | Ավելացնում է նոր տող [տեքստային հաշվետվությունում](TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությունով և Warning լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](TextReport.md) մնում է անփոփոխ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CancellationRequest](IExecutionProgress/CancellationRequest.md) | Վերադարձնում է կատարման պրոգրեսով պրոցեսի [չեղարկման օբյեկտը](CancellationRequest.md)։ |
| [CurrentPhase](IExecutionProgress/CurrentPhase.md) | Սահմանում կամ վերադարձնում է կատարման պրոգրեսի ընթացիկ [կատարման փուլը](ProgressPhase.md)։ |
| [HasError](IExecutionProgress/HasError.md) | Սահմանում կամ վերադարձնում է արժեք, որը ցույց է տալիս՝ արդյոք առաջադրանքի կատարման ընթացքում տեղի է ունեցել սխալ։ |
| [LoggingEnabled](IExecutionProgress/LoggingEnabled.md) | Հատկությունը որոշում է IExecutionProgress-ի տողեր ավելացնող մեթոդների ([RecordError](IExecutionProgress/RecordError.md), [RecordInformation](IExecutionProgress/RecordInformation.md), [RecordHeader](IExecutionProgress/RecordHeader.md), ...) հաղորդագրությունները գրանցում են [Seq](https://datalust.co/)-ում, թե ավելացվում՝ [տեքստային հաշվետվությունում](TextReport.md)։ |
| [LoggingAdditionalData](IExecutionProgress/LoggingAdditionalData.md) | Եթե IExecutionProgress տիպի օբյեկտը ստեղծվել է առաջադրանքի կատարման ընթացքում, ապա հատկությունը վերադարձնում է առաջադրանքներին յուրահատուկ թեգ/արժեքների ցուցակը, որոնք ավելացվել են կատարման ընթացքում գրանցվող լոգի իրադարձություններում, հակառակ դեպքում՝ null: |
| [Source](IExecutionProgress/Source.md) | Վերադարձնում է կատարման պրոգրեսի [ստեղծման աղբյուրը](ExecutionSource.md)։ |
