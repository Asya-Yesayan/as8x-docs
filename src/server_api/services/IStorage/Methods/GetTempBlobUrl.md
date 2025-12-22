---
title: IStorageService.GetTempBlobUrl(string, string) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IStorageService](../IStorageService/IStorageService.md)

```c#
public Task<string> GetTempBlobUrl(string fileExtension, 
                                   out string blobName)
```

Վերադարձնում է [ընթացիկ սեսիայի կոնտեյներում](Container.md) գոյություն չունեցող, պատահականության սկզբունքով ընտրված ֆայլի անուն՝ ներառյալ ընդլայնումը և ֆայլի ամբողջական ճանապարհը։

**Օրինակ** `C:\\Storage\\Files\\76dfc298-66c0-4b41-8981-434582400aeb\\lsrbuqgy.jay.txt`:

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| fileExtension   | string               | -              | Ֆայլի ընդլայնումը։ |
| blobName        | string               | -              | Վերադարձնում է ֆայլի անունը՝ նշված ընդլայնմամբ։ |
