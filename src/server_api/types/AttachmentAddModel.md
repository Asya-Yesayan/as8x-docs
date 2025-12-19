---
layout: page
title: "AttachmentAddModel դաս" 
---

Դասը պարունակում է փաստաթղթին նոր ֆայլ կցելու տվյալներ։

Օգտագործվում է [IAttachmentService](../services/IAttachmentService.md).[Add](../services/IAttachmentService/Methods/Add.md) մեթոդով փաստաթղթին ֆայլ կցելիս։

Տե՛ս [օրինակը](../examples/IAttachmentService.md)։

```c#
public class AttachmentAddModel
{
    public AttachmentIdentifier Identifier { get; set; }
    public string Comment { get; set; } = string.Empty;
    public AttachmentTypes Type { get; set; }
    public StorageInfo FileContentStorageInfo { get; set; }
    public string DocumentType { get; set; } = string.Empty;
}
```

## Հատկություններ

| Անվանում               | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն   |
| ---------------------- | -------------------- | --------------- | ------ |
| Identifier             | AttachmentIdentifier |       -          | Փաստաթղթի ներքին նույնականացման համարը (ISN), որին կցվելու է ֆայլը և կցվող ֆայլի անունը՝ ներառյալ ընդլայնումը։ |
| Comment                | string               | string.Empty    | Կցվող ֆայլի մեկնաբանությունը։  |
| Type                   | AttachmentTypes      |      -           | Ֆայլի Կցման ձևը (ֆայլ կամ հղում)։    |
| FileContentStorageInfo | StorageInfo          |      -           | Ֆայլի նույնականացուցիչ սերվերային պահոցում։  |
| DocumentType           | string               | string.Empty    | Փաստաթղթի տեսակ (ներքին անուն)։   |

