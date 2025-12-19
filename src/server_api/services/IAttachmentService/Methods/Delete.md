---
title: IAttachmentService.Delete(int, string) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsAttachmentCollection.Remove](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/AsAttachmentCollection/Remove.html)

**Դաս՝** [IAttachmentService](../IAttachmentService.md)

```c#
public Task Delete(int isn, 
                   string fileName)
```

Հեռացնում է փաստաթղթին կցված ֆայլը՝ ըստ ֆայլի անվան և փաստաթղթի ներքին նույնականացման համարի (ISN)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Փաստաթղթի ներքին նույնականացման համար։ |
| fileName        | string               | -              | Ֆայլի անունը՝ ներառյալ ֆայլի ընդլայնումը։ |
