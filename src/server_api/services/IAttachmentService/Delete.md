---
title: IAttachmentService.Delete(int, string) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsAttachmentCollection.Remove](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/AsAttachmentCollection/Remove.html)

```c#
public Task Delete(int isn, string fileName)
```

Հեռացնում է փաստաթղթին կցված ֆայլը՝ ըստ ֆայլի անվան և փաստաթղթի ներքին նույնականացման համարի (ISN)։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար։
* `fileName` - Ֆայլի անունը՝ ներառյալ ֆայլի ընդլայնումը։
