---
title: IStorageService.DeleteBlobAsync(string, CancellationToken) մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ modRestService.DeleteContainerFromBlobStorage ?

```c#
public virtual Task<bool> DeleteBlobAsync(string blobName, CancellationToken cancellationToken = default)
```

Հեռացնում է ֆայլը [ընթացիկ սեսիայի կոնտեյներից](Container.md)։

**Պարամետրեր**

* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `cancellationToken` - Ընդհատման օբյեկտ։
