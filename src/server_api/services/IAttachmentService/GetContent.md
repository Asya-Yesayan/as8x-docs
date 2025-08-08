---
title: IAttachmentService.GetContent(int, string) մեթոդ
---

## Նկարագիր

**Դաս՝** [IAttachmentService](../IAttachmentService.md)

```c#
public Task<StorageInfo> GetContent(int isn, 
                                    string fileName)
```

Բեռնում է փաստաթղթին կցված ֆայլի պարունակությունը տվյալների պահոցից և պահում սերվերային պահոցում [ընթացիկ սեսսիայի կոնտեյներում](../IStorageService/Container.md)։ 

Վերադարձնում է ֆայլի նույնականացուցիչը սերվերային պահոցում։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար։
* `fileName` - Կցված ֆայլի անունը՝ ներառյալ ֆայլի ընդլայնումը։