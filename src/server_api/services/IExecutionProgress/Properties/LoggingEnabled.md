---
title: LoggingEnabled
nav_exclude: true
---

# IExecutionProgress.LoggingEnabled հատկություն

## Նկարագիր

**Դաս՝** [IExecutionProgress](../../IExecutionProgress.md)

```c#
public bool LoggingEnabled { get; }
```

Հատկությունը որոշում է [IExecutionProgress](../../IExecutionProgress.md)-ի տողեր ավելացնող մեթոդների ([RecordError](../Methods/RecordError.md), [RecordInformation](../Methods/RecordInformation.md), [RecordHeader](../Methods/RecordHeader.md), ...) հաղորդագրությունները գրանցում են [Seq](https://datalust.co/)-ում, թե ավելացվում՝ [տեքստային հաշվետվությունում](../../TextReport.md)։
