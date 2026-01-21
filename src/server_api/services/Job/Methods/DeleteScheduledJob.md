---
title: JobService.DeleteScheduledJob(int, int, CancellationToken) մեթոդ
---

```c#
public Task DeleteScheduledJob(int scheduledId, 
                               int suid, 
                               CancellationToken stoppingToken = default)
```

Հեռացնում է հերթագրված առաջադրանքը՝ ըստ հերթագրման համարի։ Կատարման ընթացքում գտնվող կամ ավարտված առաջադրանքը հեռացնել հնարավոր չէ։

Հերթագրման id-ն հնարավոր է ստանալ job.fSCHEDULEDID Sql աղյուսակի fSCHEDULEDID սյունից կամ «Ադմինիստրատորի աշտ» -> «Համակարգային աշխատանքներ» -> «Առաջադրանքներ» -> «Հերթագրված առաջադրանքներ» դիտելու ձևի Հերթագրման NN սյունից։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| scheduledId | int | - | Առաջադրանքի հերթագրման համարը։ |
| suid | int | - | Այն օգտագործողի համարը, որը ներառվելու է JOBEXECUTION աղյուսակում գրանցվող ընդհատման պատճառի հաղորդագրությունում։ |
| stoppingToken | CancellationToken | default | Հեռացումը ընդհատելու համար նախատեսված տոկեն։ |
