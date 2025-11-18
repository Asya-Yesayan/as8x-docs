---
title: JobService սերվիս
---

## Ներածություն

JobService դասը նախատեսված է առաջադրանքների հետ աշխատանքը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetScheduledJobStateName(int)](GetScheduledJobStateName.md) | Վերադարձնում է հերթագրված առաջադրանքի վիճակը։ |
| [DeleteScheduledJob(int, int, CancellationToken)](DeleteScheduledJob.md) | Հեռացնում է հերթագրված առաջադրանքը։ |
| [InsertScheduleAndSteps(ScheduledJob)](InsertScheduleAndSteps.md) | Հերթագրում է տրված առաջադրանքը և վերադարձնում է հերթագրված առաջադրանքի id-ն։ |