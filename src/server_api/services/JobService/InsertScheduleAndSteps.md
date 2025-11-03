---
title: JobService.InsertScheduleAndSteps(ScheduledJob) մեթոդ
---

```c#
public Task<int> InsertScheduleAndSteps(ScheduledJob job)
```

Հերթագրում է տրված առաջադրանքը և վերադարձնում է հերթագրված առաջադրանքի id-ն։ Հերթագրման ձախողման դեպքում վերադարձնում է -1։

**Պարամետրեր**

| Անվանում | Տեսակ | **Նկարագրություն** |
| --- | --- | --- |
| job | [ScheduledJob](../../../types/ScheduledJob.md) | Հերթագրման ենթակա առաջադրանքի նկարագրությունը։ |
