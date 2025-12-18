---
title: IAttachmentService.Get(int, string) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsAttachmentCollection.Item

**Դաս՝** [IAttachmentService](../IAttachmentService.md)

```c#
public Task<AttachmentModel> Get(int isn, 
                                 string fileName)
```

Վերադարձնում է փաստաթղթին [կցված ֆայլի տվյալները](../../types/AttachmentModel.md)՝ ըստ ֆայլի անվան և փաստաթղթի ներքին նույնականացման համարի (ISN)։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Փաստաթղթի ներքին նույնականացման համար։ |
| fileName        | string               | -              | Ֆայլի անունը՝ ներառյալ ֆայլի ընդլայնումը։ |
