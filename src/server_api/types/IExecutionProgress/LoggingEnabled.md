---
title: IExecutionProgress.LoggingEnabled հատկություն
---

```c#
public bool LoggingEnabled { get; }
```

Հատկությունը ցույց է տալիս՝ արդյոք IExecutionProgres տիպի օբյեկտը ստեղծվել է առաջադրանքի կատարման ընթացքում։ true արժեքի դեպքում IExecutionProgress-ի տողեր ավելացնող մեթոդները ([RecordError](RecordError.md), [RecordInformation](RecordInformation.md), [RecordHeader](RecordHeader.md)) հաղորդագրությունները գրանցում են Seq-ում, հակառակ դեպքում` տեքստային հաշվետվությունում։
