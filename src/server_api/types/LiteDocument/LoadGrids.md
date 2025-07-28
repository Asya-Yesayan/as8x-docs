---
title: LiteDocument.LoadGrids(IDBService, ArchiveInfo) մեթոդ
---

```c#
public Task LoadGrids(IDBService dBService, ArchiveInfo archiveInfo = null)
```

Բեռնում է փաստաթղթի աղյուսակները տվյալների պահոցից և ավելացնում փաստաթղթում։

**Պարամետրեր**

* `dBService` - [IDBService](../../services/IDBService.md) դասի օբյեկտ տվյալների պահոցի հետ կապը հաստատելու համար։
* `archiveInfo` - ArchiveInfo դասի օբյեկտ, որը պարունակում է արխիվացված փաստաթուղթը պարունակող տվյալների պահոցի անունը և [IDBService](../../services/IDBService.md) դասի օբյեկտ՝ այդ պահոցի հետ Sql միացում ապահովելու համար։
