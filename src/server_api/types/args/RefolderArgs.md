---
title: "RefolderArgs դաս"
---

Այս դասը պարունակում է փաստաթղթերի վերաինդեքսավորման համար անհրաժեշտ տվյալներ և օգտագործվում է [DocumentOperationService](../../services/DocumentOperationService.md)-ի [Refolder](../../services/DocumentOperationService/Refolder.md) մեթոդում։

```c#
public class RefolderArgs : DocumentOperationArgs
{
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; } = null;
    public List<string> DocTypes { get; set; }
}
```

* `StartDate` - Ինդեքսավորվում են միայն տվյալ ամսաթվից հետո ստեղծված փաստաթղթերը։
* `EndDate` - Ինդեքսավորվում են միայն տվյալ ամսաթվից առաջ ստեղծված փաստաթղթերը։
* `DocTypes` - Ինդեքսավորվող փաստաթղթերի տեսակների (ներքին անունների) ցուցակ։