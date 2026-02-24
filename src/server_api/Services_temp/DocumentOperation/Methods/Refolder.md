---
title: Refolder
parent: "Մեթոդներ"
grand_parent: "DocumentOperationService"
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsUtil.ReindexDocs](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ReindexDocs.html)

**Դաս՝** [DocumentOperationService](../../DocumentOperation/DocumentOperationService.md)

```c#
public Task Refolder(RefolderArgs args, 
                     TextReport.TextReport report, 
                     CancellationToken stoppingToken = default)
```

Կատարում է փաստաթղթերի վերաինդեքսավորում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| args            | RefolderArgs         | -              | [RefolderArgs](../../../Types/Args/RefolderArgs.md) դասի օբյեկտ։ |
| report          | TextReport.TextReport | -              | [Տեքստային հաշվետվություն](../../../Types/TextReport.md), որտեղ լրացվում են մեթոդի կատարման ընթացքում առաջացած սխալների մասին հաղորդագրությունները։ |
| stoppingToken   | CancellationToken    | default        | Ընդհատման օբյեկտ: |
