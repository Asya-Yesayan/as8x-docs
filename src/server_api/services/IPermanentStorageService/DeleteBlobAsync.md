---
title: IPermanentStorageService.DeleteBlobAsync մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [DeleteBlobAsync(string, string, CancellationToken)](#ipermanentstorageservicedeleteblobasyncstring-string-cancellationtoken-մեթոդ) | Հեռացնում է ֆայլը մշտական ֆայլերի պահոցից՝ ըստ անվան և կոնտեյների։ |
| [DeleteBlobAsync(string, CancellationToken)](#ipermanentstorageservicedeleteblobasyncstring-cancellationtoken) |  Հեռացնում է ֆայլը մշտական ֆայլերի պահոցի [Container](Container.md) հատկությամբ նշված թղթապանակից։|

### IPermanentStorageService.DeleteBlobAsync(string, string, CancellationToken) մեթոդ

```c#
public virtual Task<bool> DeleteBlobAsync(string container, 
                                          string blobName, 
                                          CancellationToken cancellationToken = default)
```

Հեռացնում է ֆայլը մշտական ֆայլերի պահոցից՝ ըստ անվան և կոնտեյների։ 

**Պարամետրեր**

* `container` - Կոնտեյների անունը։ 
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `cancellationToken` - Ընդհատման օբյեկտ։

### IPermanentStorageService.DeleteBlobAsync(string, CancellationToken)  

```c#
public virtual Task<bool> DeleteBlobAsync(string blobName, 
                                          CancellationToken cancellationToken = default)
```

Հեռացնում է ֆայլը մշտական ֆայլերի պահոցի [Container](Container.md) հատկությամբ նշված թղթապանակից։

**Պարամետրեր**

* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `cancellationToken` - Ընդհատման օբյեկտ։

