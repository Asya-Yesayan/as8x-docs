---
layout: page
title: "AttachmentContentModel" 
---

Դասը պարունակում է փաստաթղթին կցված ֆայլի պարունակությունը փոխելու տվյալներ։

Օգտագործվում է [IAttachmentService](../services/IAttachmentService.md).[UpdateContent](../services/IAttachmentService/Methods/UpdateContent.md) մեթոդով փաստաթղթին կցված ֆայլը փոխելուց։

Տե՛ս [օրինակը](../examples/IAttachmentService.md#օրինակ-2)։

```c#
public class AttachmentContentModel 
{
    public AttachmentIdentifier Identifier { get; set; }
    public StorageInfo FileContentStorageInfo { get; set; }
}
```

## Հատկություններ

| Անվանում               | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն    |
| ---------------------- | -------------------- | --------------- | ---------- |
| Identifier             | AttachmentIdentifier |        -         | Փաստաթղթի ներքին նույնականացման համարը (ISN), որին կցված է ֆայլը և կցված ֆայլի անունը՝ ներառյալ ընդլայնումը։ |
| FileContentStorageInfo | StorageInfo          |       -          | Նոր պարունակությամբ ֆայլի նույնականացուցիչը սերվերային պահոցում։                                             |