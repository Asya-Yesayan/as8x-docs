---
title: "RefolderArgs դաս"
---

Այս դասը պարունակում է փաստաթղթերի վերաինդեքսավորման համար անհրաժեշտ տվյալներ և օգտագործվում է [DocumentOperationService](../../Services/DocumentOperation/DocumentOperationService.md)-ի [Refolder](../../Services/DocumentOperation/Methods/Refolder.md) մեթոդում։

```c#
public class RefolderArgs : DocumentOperationArgs
{
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; } = null;
    public List<string> DocTypes { get; set; }
}
```

## Հատկություններ

| Անվանում  | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն    |
| --------- | ------------- | --------------- | ------|
| StartDate |    DateTime?           |       -          | Ինդեքսավորվում են միայն տվյալ ամսաթվից հետո ստեղծված փաստաթղթերը։ |
| EndDate   |    DateTime?           |       null          | Ինդեքսավորվում են միայն տվյալ ամսաթվից առաջ ստեղծված փաստաթղթերը։ |
| DocTypes  |    List<string>           |       -          | Ինդեքսավորվող փաստաթղթերի տեսակների (ներքին անունների) ցուցակ։    |
