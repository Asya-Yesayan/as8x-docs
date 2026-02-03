---
title: GetContent(int, string)
parent: "Մեթոդներ"
grand_parent: "IAttachmentService"
---

# IAttachmentService.GetContent(int, string) մեթոդ

## Նկարագիր

**Դաս՝** [IAttachmentService](../../IAttachment/IAttachmentService.md)

```c#
public Task<StorageInfo> GetContent(int isn, 
                                    string fileName)
```

Բեռնում է փաստաթղթին կցված ֆայլի պարունակությունը տվյալների պահոցից և պահում սերվերային պահոցում [ընթացիկ սեսսիայի կոնտեյներում](../../IStorage/Properties/Container.md)։ 

Վերադարձնում է ֆայլի նույնականացուցիչը սերվերային պահոցում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Փաստաթղթի ներքին նույնականացման համար։ |
| fileName        | string               | -              | Կցված ֆայլի անունը՝ ներառյալ ֆայլի ընդլայնումը։ |
