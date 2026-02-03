---
title: InsertScheduleAndSteps(ScheduledJob)
parent: "Մեթոդներ"
grand_parent: JobService
---

# JobService.InsertScheduleAndSteps(ScheduledJob) մեթոդ

```c#
public Task<int> InsertScheduleAndSteps(ScheduledJob job)
```

Հերթագրում է տրված առաջադրանքը և վերադարձնում է հերթագրված առաջադրանքի id-ն։ Հերթագրման ձախողման դեպքում վերադարձնում է -1։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| job | [ScheduledJob](../../../Types/ScheduledJob.md) | - | Հերթագրման ենթակա առաջադրանքի նկարագրությունը։ |
