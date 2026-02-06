---
title: UpdateContent
parent: "Մեթոդներ"
grand_parent: "IAttachmentService"
---

# IAttachmentService.UpdateContent(AttachmentContentModel) մեթոդ

## Նկարագիր

**Դաս՝** [IAttachmentService](../../IAttachment/IAttachmentService.md)

```c#
public Task<DateTime> UpdateContent(AttachmentContentModel attachmentContent)
```

Փոխում է փաստաթղթին կցված ֆայլի պարունակությունը:

Փաստաթղթին կարելի է կցել առավելագույնը 10 մբ ծավալով ֆայլ։

Տե՛ս [օրինակը](../../../Examples/IAttachmentService.md#օրինակ-2)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| attachmentContent | AttachmentContentModel | -              | [Կցված ֆայլի պարունակության փոփոխման տվյալներ](../../../Types/AttachmentContentModel.md)՝ փաստաթղթի ISN, ֆայլի անունը, նոր պարունակությամբ ֆայլի նույնականացուցիչը սերվերային պահոցում։ |

<!-- **Կարևոր**

Փաստաթղթին կցված ֆայլը թարմացնելու համար անհրաժեշտ է նոր ֆայլը նախապես պահպանել [ընթացիկ սեսսիայի կոնտեյներ](../../IStorage/IStorageService.md)-ում [IStorageService](../../../Services/IStorage/IStorageService.md).[UploadTempBlobAsync](../../../Services/IStorage/Methods/UploadTempBlobAsync.md) մեթոդով։ -->
