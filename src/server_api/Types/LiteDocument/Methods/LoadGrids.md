---
title: LoadGrids
nav_exclude: true
---

# LiteDocument.LoadGrids(IDBService, ArchiveInfo) մեթոդ

```c#
public Task LoadGrids(IDBService dBService, ArchiveInfo archiveInfo = null)
```

Բեռնում է փաստաթղթի աղյուսակները տվյալների պահոցից և ավելացնում փաստաթղթում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| dBService       | IDBService           | -              | [IDBService](../../../Services/IDB/IDBService.md) դասի օբյեկտ տվյալների պահոցի հետ կապը հաստատելու համար։ |
| archiveInfo     | ArchiveInfo          | null           | ArchiveInfo դասի օբյեկտ, որը պարունակում է արխիվացված փաստաթուղթը պարունակող տվյալների պահոցի անունը և [IDBService](../../../Services/IDB/IDBService.md) դասի օբյեկտ՝ այդ պահոցի հետ Sql միացում ապահովելու համար։ |
