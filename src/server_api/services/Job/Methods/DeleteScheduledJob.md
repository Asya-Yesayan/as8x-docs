---
title: JobService.DeleteScheduledJob(int, int, CancellationToken) մեթոդ
---

```c#
public Task DeleteScheduledJob(int scheduledId, 
                               int suid, 
                               CancellationToken stoppingToken = default)
```

Հեռացնում է հերթագրված առաջադրանքը։ Կատարման ընթացքում գտնվող կամ ավարտված առաջադրանքը հեռացնել հնարավոր չէ։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| scheduledId | int | - | Հերթագրված առաջադրանքի id-ն։ |
| suid | int | - | Այն օգտագործողի համարը, որը ներառվելու է JOBEXECUTION աղյուսակում գրանցվող ընդհատման պատճառի հաղորդագրությունում։ |
| stoppingToken | CancellationToken | default | Հեռացումը ընդհատելու համար նախատեսված տոկեն։ |
