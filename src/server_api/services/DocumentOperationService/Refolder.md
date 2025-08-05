---
title: DocumentOperationService.Refolder(RefolderArgs, TextReport.TextReport, CancellationToken) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsUtil.ReindexDocs](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ReindexDocs.html)

```c#
public Task Refolder(RefolderArgs args, 
                     TextReport.TextReport report, 
                     CancellationToken stoppingToken = default)
```

Կատարում է փաստաթղթերի վերաինդեքսավորում։

**Պարամետրեր**

* `args` - [RefolderArgs](../../types/args/RefolderArgs.md) դասի օբյեկտ։
* `report` - [Տեքստային հաշվետվություն](../types/TextReport.md), որտեղ լրացվում են մեթոդի կատարման ընթացքում առաջացած սխալների մասին հաղորդագրությունները։
* `stoppingToken` - Ընդհատման օբյեկտ: