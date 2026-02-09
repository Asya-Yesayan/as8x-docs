---
title: "IExecutionProgress"
parent: "Սերվիսներ"
nav_order: 2
has_toc: false
---

# IExecutionProgress դաս

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Add(int, string)](Methods/Add.md#iexecutionprogressaddint-string-մեթոդ) | Ավելացնում է նոր փուլ կատարման պրոգրեսում։ |
| [Add(string)](Methods/Add.md#iexecutionprogressaddstring-մեթոդ) | Ավելացնում է նոր փուլ կատարման պրոգրեսում: |
| [Break()](Methods/Break.md) | Ավելացնում է դատարկ նոր տող [տեքստային հաշվետվությունում](../../Types/TextReport.md): |
| [Refresh(string)](Methods/Refresh.md) | Թարմացնում է կատարման պրոգրեսի ընթացիկ փուլը՝ ցուցադրելով տրված անվանումը։ |
| [DefineReport(string, string, bool)](Methods/DefineReport.md) | Ստեղծում է տեքստային հաշվետվություն՝ 120 լայնությամբ հատվածով (ֆրագմենտով)։ Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում [տեքստային հաշվետվությունը](../../Types/TextReport.md) մնում է անփոփոխ։ |
| [RecordHeader(string)](Methods/RecordHeader.md) | Ավելացնում է նոր գլխագիր տող [տեքստային հաշվետվության](../../Types/TextReport.md) վերին հատվածում։ Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում [տեքստային հաշվետվությունը](../../Types/TextReport.md) մնում է անփոփոխ։ |
| [RecordFooter(string)](Methods/RecordFooter.md) | Ավելացնում է նոր տող [տեքստային հաշվետվության](../../Types/TextReport.md) ստորին հատվածում։ Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում [տեքստային հաշվետվությունը](../../Types/TextReport.md) մնում է անփոփոխ։ |
| [RecordInformation(IEnumerable&lt;string&gt;, int, string, int, Dictionary&lt;string, object&gt;)](Methods/RecordInformation.md#iexecutionprogressrecordinformationienumerable-int-string-int-dictionarystring-object-մեթոդ) | Ավելացնում է նոր տողեր [տեքստային հաշվետվությունում](../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով և Information լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](../../Types/TextReport.md) մնում է անփոփոխ։ |
| [RecordInformation(string, int, string, int, Dictionary&lt;string, object&gt;)](Methods/RecordInformation.md#iexecutionprogressrecordinformationstring-int-string-int-dictionarystring-object-մեթոդ) | Ավելացնում է նոր տող [տեքստային հաշվետվությունում](../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությունով և Information լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](../../Types/TextReport.md) մնում է անփոփոխ։ |
| [RecordError(IEnumerable&lt;string&gt;, Exception, int, string, int, Dictionary&lt;string, object&gt;)](Methods/RecordError.md#iexecutionprogressrecorderrorienumerable-exception-int-string-int-dictionarystring-object-մեթոդ) | Ավելացնում է նոր տողեր [տեքստային հաշվետվությունում](../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով, սխալի հաղորդագրությամբ և Error լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](../../Types/TextReport.md) մնում է անփոփոխ։ |
| [RecordError(string, Exception, int, string, int, Dictionary&lt;string, object&gt;)](Methods/RecordError.md#iexecutionprogressrecorderrorstring-exception-int-string-int-dictionarystring-object-մեթոդ) | Ավելացնում է նոր տող [տեքստային հաշվետվությունում](../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությունով, սխալի հաղորդագրությամբ և Error լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](../../Types/TextReport.md) մնում է անփոփոխ։ |
| [SaveToStorageAndClose()](Methods/SaveToStorageAndClose.md) | Փակում է հաշվետվությունը և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../IStorage/Properties/Container.md): |
| [SaveToStorageAsText(StorageInfo, bool, bool, bool)](Methods/SaveToStorageAsText.md) | Պահպանում է [տեքստային հաշվետվության](../../Types/TextReport.md) պարունակությունը ֆայլի մեջ։ |
| [RecordWarning(IEnumerable&lt;string&gt;, int, string, int, Dictionary&lt;string, object&gt;)](Methods/RecordWarning.md#iexecutionprogressrecordwarningienumerable-int-string-int-dictionarystring-object-մեթոդ) | Ավելացնում է նոր տողեր [տեքստային հաշվետվությունում](../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով և Warning լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](../../Types/TextReport.md) մնում է անփոփոխ։ |
| [RecordWarning(string, int, string, int, Dictionary&lt;string, object&gt;)](Methods/RecordWarning.md#iexecutionprogressrecordwarningstring-int-string-int-dictionarystring-object-մեթոդ) | Ավելացնում է նոր տող [տեքստային հաշվետվությունում](../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ <br> Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությունով և Warning լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](../../Types/TextReport.md) մնում է անփոփոխ։ |

