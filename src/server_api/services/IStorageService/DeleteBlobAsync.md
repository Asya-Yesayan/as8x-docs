---
title: IStorageService.DeleteBlobAsync մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ modRestService.DeleteFileFromBlobStorage

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [DeleteBlobAsync(string, string, CancellationToken)](#istorageservicedeleteblobasyncstring-string-cancellationtoken-մեթոդ) | Հեռացնում է ֆայլը ժամանակավոր ֆայլերի պահոցից` ըստ անվան և կոնտեյների։ |
| [DeleteBlobAsync(string, CancellationToken)](#istorageservicedeleteblobasyncstring-cancellationtoken-մեթոդ) | Հեռացնում է ֆայլը [ընթացիկ սեսիայի կոնտեյներից](Container.md)։ |

### IStorageService.DeleteBlobAsync(string, string, CancellationToken) մեթոդ

```c#
public virtual Task<bool> DeleteBlobAsync(string container, string blobName, CancellationToken cancellationToken = default)
```

Հեռացնում է ֆայլը ժամանակավոր ֆայլերի պահոցից` ըստ անվան և կոնտեյների։ 

**Պարամետրեր**

* `container` - Կոնտեյների անունը։ 
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `cancellationToken` - Ընդհատման օբյեկտ։

### IStorageService.DeleteBlobAsync(string, CancellationToken) մեթոդ

```c#
public virtual Task<bool> DeleteBlobAsync(string blobName, CancellationToken cancellationToken = default)
```

Հեռացնում է ֆայլը [ընթացիկ սեսիայի կոնտեյներից](Container.md)։

**Պարամետրեր**

* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `cancellationToken` - Ընդհատման օբյեկտ։

