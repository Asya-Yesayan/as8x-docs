---
layout: page
title: "AttachmentContentModel" 
---

Դասը պարունակում է փաստաթղթին կցված ֆայլի պարունակությունը փոխելու տվյալներ։

Օգտագործվում է [IAttachmentService](../Services/IAttachment/IAttachmentService.md).[UpdateContent](../Services/IAttachment/Methods/UpdateContent.md) մեթոդով փաստաթղթին կցված ֆայլը փոխելուց։

Տե՛ս [օրինակը](../Examples/IAttachmentService.md#օրինակ-2)։

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