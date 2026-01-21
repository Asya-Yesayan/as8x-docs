---
title: JobService սերվիս
---

## Ներածություն

JobService դասը նախատեսված է առաջադրանքների հետ աշխատանքը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [DeleteScheduledJob(int, int, CancellationToken)](Methods/DeleteScheduledJob.md) | Հեռացնում է հերթագրված առաջադրանքը՝ ըստ հերթագրման համարի։ |
| [DeleteScheduledJobByJobCode(string, int, CancellationToken)](Methods/DeleteScheduledJobByJobCode.md) | Հեռացնում է հերթագրված առաջադրանքը` ըստ առաջադրանքի կոդի։ |
| [GetScheduledJobStateName(int)](Methods/GetScheduledJobStateName.md) | Վերադարձնում է հերթագրված առաջադրանքի վիճակը։ |
| [InsertScheduleAndSteps(ScheduledJob)](Methods/InsertScheduleAndSteps.md) | Հերթագրում է տրված առաջադրանքը և վերադարձնում է հերթագրված առաջադրանքի id-ն։ |