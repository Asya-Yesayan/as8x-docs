---
title: RecordInformation
parent: "Մեթոդներ"
grand_parent: "IExecutionProgress"
---

# IExecutionProgress.RecordInformation մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [RecordInformation(IEnumerable<string>, int, string, int, Dictionary<string, object>)](#iexecutionprogressrecordinformationienumerable-int-string-int-dictionarystring-object-մեթոդ)| Ավելացնում է նոր տողեր [տեքստային հաշվետվությունում](../../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ |
| [RecordInformation(string, int, string, int, Dictionary<string, object>)](#iexecutionprogressrecordinformationstring-int-string-int-dictionarystring-object-մեթոդ)| Ավելացնում է նոր տող [տեքստային հաշվետվությունում](../../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ |

### IExecutionProgress.RecordInformation(IEnumerable<string>, int, string, int, Dictionary<string, object>) մեթոդ

```c#
public void RecordInformation(IEnumerable<string> messages, 
                              int isn = -1, 
                              string rowDesc = "", 
                              int splitSize = -1,
                              Dictionary<string, object> loggingAdditionalData = null);
```

Ավելացնում է նոր տողեր [տեքստային հաշվետվությունում](../../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ 

Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրություններով և Information լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](../../../Types/TextReport.md) մնում է անփոփոխ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                                       |
| -------- | ------------- | --------------- | ---------------------------------------------------- |
| messages  | IEnumerable<string>        | -               | Ավելացվող տողերի տեքստերը։ |
| isn  | int        | -1               | Ավելացվող տողերին կապակցված փաստաթղթի ներքին նույնականացման համարը (isn)։ <br> Եթե արժեքը տրված է, ապա առաջադրանքի ժամանակ ավելացվող լոգի իրադարձությունում ավելացվում է ISN թեգը նշված արժեքով, իսկ այլ կանչերի դեպքում [տեքստային հաշվետվությունից](../../../Types/TextReport.md) հասանելի են դառնում փաստաթղթի կոնտեքստային ֆունկցիաները։ |
| rowDesc  | string        | ""               | Ավելացվող տողերի նկարագրությունը։ Եթե արժեքը տրված է, ապա առաջադրանքի ժամանակ ավելացվող լոգի իրադարձությունում ավելացվում է RowDescription թեգը նշված արժեքով: |
| splitSize  | int        | -1               | [Տեքստային հաշվետվությունում](../../../Types/TextReport.md) ավելացվող տողերի մասնատման երկարությունը։ Նշված լինելու դեպքում յուրաքանչյուր տող բաժանվում է նշված երկարությամբ մասերի և ավելացվում է նոր տողից։ |
| loggingAdditionalData  | Dictionary<string, object>        | null | Առաջադրանքի կատարման ընթացքում կանչի դեպքում լոգի իրարձությունում ավելացվող թեգ/արժեքների ցուցակը։ |

### IExecutionProgress.RecordInformation(string, int, string, int, Dictionary<string, object>) մեթոդ

```c#
public void RecordInformation(string message, 
                              int isn = -1, 
                              string rowDesc = "", 
                              int splitSize = -1,
                              Dictionary<string, object> loggingAdditionalData = null);
```

Ավելացնում է նոր տող [տեքստային հաշվետվությունում](../../../Types/TextReport.md), եթե մեթոդը չի կանչվել առաջադրանքի կատարման ժամանակ։ 

Առաջադրանքի կատարման ընթացքում կանչի դեպքում միայն [Seq](https://datalust.co/)-ում ավելացվում է նոր իրադարձություն՝ նշված հաղորդագրությունով և Information լոգավորման մակարդակով, իսկ [տեքստային հաշվետվությունը](../../../Types/TextReport.md) մնում է անփոփոխ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                                       |
| -------- | ------------- | --------------- | ---------------------------------------------------- |
| message  | string        | -               | Ավելացվող տողի տեքստը։ |
| isn  | int        | -1               | Ավելացվող տողին կապակցված փաստաթղթի ներքին նույնականացման համարը (isn)։ <br> Եթե արժեքը տրված է, ապա առաջադրանքի ժամանակ ավելացվող լոգի իրադարձությունում ավելացվում է ISN թեգը նշված արժեքով, իսկ այլ կանչերի դեպքում [տեքստային հաշվետվությունից](../../../Types/TextReport.md) հասանելի են դառնում փաստաթղթի կոնտեքստային ֆունկցիաները։ |
| rowDesc  | string        | ""               | Ավելացվող տողի նկարագրությունը։ Եթե արժեքը տրված է, ապա առաջադրանքի ժամանակ ավելացվող լոգի իրադարձությունում ավելացվում է RowDescription թեգը նշված արժեքով: |
| splitSize  | int        | -1               | [Տեքստային հաշվետվությունում](../../../Types/TextReport.md) ավելացվող տողի մասնատման երկարությունը։ Նշված լինելու դեպքում տողը բաժանվում է նշված երկարությամբ մասերի և յուրաքանչյուրը ավելացվում է նոր տողից։ |
| loggingAdditionalData  | Dictionary<string, object>        | null | Առաջադրանքի կատարման ընթացքում կանչի դեպքում լոգի իրարձությունում ավելացվող թեգ/արժեքների ցուցակը։ |
