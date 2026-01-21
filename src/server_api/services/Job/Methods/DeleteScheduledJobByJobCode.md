---
title: JobService.DeleteScheduledJobByJobCode(string, int, CancellationToken) մեթոդ
---

```c#
public Task DeleteScheduledJobByJobCode(string jobCode, 
                                        int suid, 
                                        CancellationToken stoppingToken = default)
```

Հեռացնում է հերթագրված առաջադրանքը` ըստ առաջադրանքի կոդի։ Կատարման ընթացքում գտնվող կամ ավարտված առաջադրանքը հեռացնել հնարավոր չէ։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| scheduledId | int | - | Առաջադրանքի կոդը։ |
| suid | int | - | Այն օգտագործողի համարը, որը ներառվելու է JOBEXECUTION աղյուսակում գրանցվող ընդհատման պատճառի հաղորդագրությունում։ |
| stoppingToken | CancellationToken | default | Հեռացումը ընդհատելու համար նախատեսված տոկեն։ |
