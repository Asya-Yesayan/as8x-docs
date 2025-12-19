---
title: IStorageService.DeleteBlobAsync մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** modRestService.DeleteFileFromBlobStorage

**Դաս՝** [IStorageService](../IStorageService.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [DeleteBlobAsync(string, string, CancellationToken)](#istorageservicedeleteblobasyncstring-string-cancellationtoken-մեթոդ) | Հեռացնում է ֆայլը ժամանակավոր ֆայլերի պահոցից` ըստ անվան և կոնտեյների։ |
| [DeleteBlobAsync(string, CancellationToken)](#istorageservicedeleteblobasyncstring-cancellationtoken-մեթոդ) | Հեռացնում է ֆայլը [ընթացիկ սեսիայի կոնտեյներից](Container.md)։ |

### IStorageService.DeleteBlobAsync(string, string, CancellationToken) մեթոդ

```c#
public virtual Task<bool> DeleteBlobAsync(string container, 
                                          string blobName, 
                                          CancellationToken cancellationToken = default)
```

Հեռացնում է ֆայլը ժամանակավոր ֆայլերի պահոցից` ըստ անվան և կոնտեյների։ 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| container       | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |

### IStorageService.DeleteBlobAsync(string, CancellationToken) մեթոդ

```c#
public virtual Task<bool> DeleteBlobAsync(string blobName, 
                                          CancellationToken cancellationToken = default)
```

Հեռացնում է ֆայլը [ընթացիկ սեսիայի կոնտեյներից](Container.md)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |

