---
title: RecordError
parent: "Մեթոդներ"
grand_parent: "IExecutionProgress"
---

# IExecutionProgress.RecordError մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [RecordError(IEnumerable<string>, Exception, int, string, int, Dictionary<string, object>)](#iexecutionprogressrecorderrorienumerable-exception-int-string-int-dictionarystring-object-մեթոդ)| Ավելացնում է նոր տողեր [տեքստային հաշվետվությունում](../../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ |
| [RecordError(string, Exception, int, string, int, Dictionary<string, object>)](#iexecutionprogressrecorderrorstring-exception-int-string-int-dictionarystring-object-մեթոդ)| Ավելացնում է նոր տող [տեքստային հաշվետվությունում](../../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ |

### IExecutionProgress.RecordError(IEnumerable<string>, Exception, int, string, int, Dictionary<string, object>) մեթոդ

```c#
public void RecordError(IEnumerable<string> messages, 
                        Exception exception = null, 
                        int isn = -1, 
                        string rowDesc = "",
                        int splitSize = -1, 
                        Dictionary<string, object> loggingAdditionalData = null);
```

Ավելացնում է նոր տողեր [տեքստային հաշվետվությունում](../../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։

Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով, սխալի հաղորդագրությամբ և Error լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](../../../Types/TextReport.md) մնում է անփոփոխ։

Մեթոդի կատարման արդյունքում [IExecutionProgress․HasError](../Properties/HasError.md) հատկության արժեքը դառնում է true:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                                       |
| -------- | ------------- | --------------- | ---------------------------------------------------- |
| messages  | IEnumerable<string>        | -               | Ավելացվող տողերի տեքստերը։ |
| exception  | Exception        | null | Առաջադրանքի կատարման ընթացքում կանչի դեպքում լոգի իրարձությունում ավելացվող սխալը։ |
| isn  | int        | -1               | Ավելացվող տողերին կապակցված փաստաթղթի ներքին նույնականացման համարը (isn)։ <br> Եթե արժեքը տրված է, ապա առաջադրանքի ժամանակ ավելացվող լոգի իրադարձությունում ավելացվում է ISN թեգը նշված արժեքով, իսկ այլ կանչերի դեպքում [տեքստային հաշվետվությունից](../../../Types/TextReport.md) հասանելի են դառնում փաստաթղթի կոնտեքստային ֆունկցիաները։ |
| rowDesc  | string        | ""               | Ավելացվող տողերի նկարագրությունը։ Եթե արժեքը տրված է, ապա առաջադրանքի ժամանակ ավելացվող լոգի իրադարձությունում ավելացվում է RowDescription թեգը նշված արժեքով: |
| splitSize  | int        | -1               | [Տեքստային հաշվետվությունում](../../../Types/TextReport.md) ավելացվող տողերի մասնատման երկարությունը։ Նշված լինելու դեպքում յուրաքանչյուր տող բաժանվում է նշված երկարությամբ մասերի և ավելացվում է նոր տողից։ |
| loggingAdditionalData  | Dictionary<string, object>        | null | Առաջադրանքի կատարման ընթացքում կանչի դեպքում լոգի իրարձությունում ավելացվող թեգ/արժեքների ցուցակը։ |

### IExecutionProgress.RecordError(string, Exception, int, string, int, Dictionary<string, object>) մեթոդ

```c#
public void RecordError(string message, 
                        Exception exception = null, 
                        int isn = -1, 
                        string rowDesc = "",
                        int splitSize = -1, 
                        Dictionary<string, object> loggingAdditionalData = null);
```

Ավելացնում է նոր տող [տեքստային հաշվետվությունում](../../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ 

Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությամբ, սխալի հաղորդագրությամբ և Error լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](../../../Types/TextReport.md) մնում է անփոփոխ։

Մեթոդի կատարման արդյունքում [IExecutionProgress․HasError](../Properties/HasError.md) հատկության արժեքը դառնում է true:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                                       |
| -------- | ------------- | --------------- | ---------------------------------------------------- |
| message  | string        | -               | Ավելացվող տողի տեքստը։ |
| exception  | Exception        | null | Առաջադրանքի կատարման ընթացքում կանչի դեպքում լոգի իրարձությունում ավելացվող սխալը։ |
| isn  | int        | -1               | Ավելացվող տողին կապակցված փաստաթղթի ներքին նույնականացման համարը (isn)։ <br> Եթե արժեքը տրված է, ապա առաջադրանքի ժամանակ ավելացվող լոգի իրադարձությունում ավելացվում է ISN թեգը նշված արժեքով, իսկ այլ կանչերի դեպքում [տեքստային հաշվետվությունից](../../../Types/TextReport.md) հասանելի են դառնում փաստաթղթի կոնտեքստային ֆունկցիաները։ |
| rowDesc  | string        | ""               | Ավելացվող տողի նկարագրությունը։ Եթե արժեքը տրված է, ապա առաջադրանքի ժամանակ ավելացվող լոգի իրադարձությունում ավելացվում է RowDescription թեգը նշված արժեքով: |
| splitSize  | int        | -1               | [Տեքստային հաշվետվությունում](../../../Types/TextReport.md) ավելացվող տողի մասնատման երկարությունը։ Նշված լինելու դեպքում տողը բաժանվում է նշված երկարությամբ մասերի և յուրաքանչյուրը ավելացվում է նոր տողից։ |
| loggingAdditionalData  | Dictionary<string, object>        | null | Առաջադրանքի կատարման ընթացքում կանչի դեպքում լոգի իրարձությունում ավելացվող թեգ/արժեքների ցուցակը։ |
