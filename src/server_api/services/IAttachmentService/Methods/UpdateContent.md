---
title: IAttachmentService.UpdateContent(AttachmentContentModel) մեթոդ
---

## Նկարագիր

**Դաս՝** [IAttachmentService](../../../examples/IAttachmentService.md)

```c#
public Task<DateTime> UpdateContent(AttachmentContentModel attachmentContent)
```

Փոխում է փաստաթղթին կցված ֆայլի պարունակությունը:

Փաստաթղթին կարելի է կցել առավելագույնը 10 մբ ծավալով ֆայլ։

Տե՛ս [օրինակը](../../../examples/IAttachmentService.md)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| attachmentContent | AttachmentContentModel | -              | [Կցված ֆայլի պարունակության փոփոխման տվյալներ](../../../types/AttachmentContentModel.md)՝ փաստաթղթի ISN, ֆայլի անունը, նոր պարունակությամբ ֆայլի նույնականացուցիչը սերվերային պահոցում։ |

<!-- **Կարևոր**

Փաստաթղթին կցված ֆայլը թարմացնելու համար անհրաժեշտ է նոր ֆայլը նախապես պահպանել [ընթացիկ սեսսիայի կոնտեյներ](../../IStorageService.md)-ում [IStorageService](../../IStorageService.md).[UploadTempBlobAsync](../../IStorageService.md) մեթոդով։ -->
