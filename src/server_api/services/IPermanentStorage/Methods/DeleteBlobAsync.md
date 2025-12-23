---
title: IPermanentStorageService.DeleteBlobAsync մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [DeleteBlobAsync(string, string, CancellationToken)](#ipermanentstorageservicedeleteblobasyncstring-string-cancellationtoken-մեթոդ) | Հեռացնում է ֆայլը մշտական ֆայլերի պահոցից՝ ըստ անվան և կոնտեյների։ |
| [DeleteBlobAsync(string, CancellationToken)](#ipermanentstorageservicedeleteblobasyncstring-cancellationtoken) |  Հեռացնում է ֆայլը մշտական ֆայլերի պահոցի [Container](../Properties/Container.md) հատկությամբ նշված թղթապանակից։|

### IPermanentStorageService.DeleteBlobAsync(string, string, CancellationToken) մեթոդ

#### Նկարագիր

**Դաս՝** [IPermanentStorageService](../IPermanentStorageService.md)

```c#
public virtual Task<bool> DeleteBlobAsync(string container, 
                                          string blobName, 
                                          CancellationToken cancellationToken = default)
```

Հեռացնում է ֆայլը մշտական ֆայլերի պահոցից՝ ըստ անվան և կոնտեյների։ 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| container       | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |

### IPermanentStorageService.DeleteBlobAsync(string, CancellationToken)  

#### Նկարագիր

**Դաս՝** [IPermanentStorageService](../IPermanentStorageService.md)

```c#
public virtual Task<bool> DeleteBlobAsync(string blobName, 
                                          CancellationToken cancellationToken = default)
```

Հեռացնում է ֆայլը մշտական ֆայլերի պահոցի [Container](../Properties/Container.md) հատկությամբ նշված թղթապանակից։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |

