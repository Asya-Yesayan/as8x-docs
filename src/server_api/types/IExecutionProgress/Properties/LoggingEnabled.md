---
title: IExecutionProgress.LoggingEnabled հատկություն
---

## Նկարագիր

**Դաս՝** [IExecutionProgress](../IExecutionProgress.md)

```c#
public bool LoggingEnabled { get; }
```

Հատկությունը որոշում է [IExecutionProgress](../IExecutionProgress.md)-ի տողեր ավելացնող մեթոդների ([RecordError](RecordError.md), [RecordInformation](RecordInformation.md), [RecordHeader](RecordHeader.md), ...) հաղորդագրությունները գրանցում են [Seq](https://datalust.co/)-ում, թե ավելացվում՝ [տեքստային հաշվետվությունում](../TextReport.md)։
