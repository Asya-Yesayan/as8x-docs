---
title: IExecutionProgress.LoggingEnabled հատկություն
---

```c#
public bool LoggingEnabled { get; }
```

Հատկությունը որոշում է IExecutionProgress-ի տողեր ավելացնող մեթոդների ([RecordError](RecordError.md), [RecordInformation](RecordInformation.md), [RecordHeader](RecordHeader.md), ...) հաղորդագրությունները գրանցում են Seq-ում, թե ավելացվում՝ տեքստային հաշվետվությունում։
