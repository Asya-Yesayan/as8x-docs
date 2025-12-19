---
title: JobService սերվիս
---

## Ներածություն

JobService դասը նախատեսված է առաջադրանքների հետ աշխատանքը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetScheduledJobStateName(int)](Methods/GetScheduledJobStateName.md) | Վերադարձնում է հերթագրված առաջադրանքի վիճակը։ |
| [DeleteScheduledJob(int, int, CancellationToken)](Methods/DeleteScheduledJob.md) | Հեռացնում է հերթագրված առաջադրանքը։ |
| [InsertScheduleAndSteps(ScheduledJob)](Methods/InsertScheduleAndSteps.md) | Հերթագրում է տրված առաջադրանքը և վերադարձնում է հերթագրված առաջադրանքի id-ն։ |