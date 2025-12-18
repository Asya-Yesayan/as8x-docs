---
title: IExecutionProgress.LoggingAdditionalData հատկություն
---

## Նկարագիր

**Դաս՝** [IExecutionProgress](../IExecutionProgress.md)

```c#
public Dictionary<string, object> LoggingAdditionalData { get; }
```

Եթե [IExecutionProgress](../IExecutionProgress.md) տիպի օբյեկտը ստեղծվել է առաջադրանքի կատարման ընթացքում, ապա հատկությունը վերադարձնում է առաջադրանքներին յուրահատուկ թեգ/արժեքների ցուցակը, որոնք ավելացվել են կատարման ընթացքում գրանցվող լոգի իրադարձություններում, հակառակ դեպքում՝ null:

Առաջադրանքի լոգավորման ընթացքում կիրառվող թեգեր`
* **JobExecutionId**
* **JobCode**
* **JobStep**
* **JobStepName**
