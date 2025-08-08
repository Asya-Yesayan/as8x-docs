---
title: IStorageService.UploadBlobAsync մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsUtil.UploadToStorage

**Դաս՝** [IStorageService](../IStorageService.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [UploadBlobAsync(string, string, byte\[\], CancellationToken)](#istorageserviceuploadblobasyncstring-string-byte-cancellationtoken-մեթոդ) | Պահպանում է `value` պարամետրի պարունակությունը ժամանակավոր ֆայլերի պահոցում` ըստ կոնտեյների և ֆայլի անվան։  |
| [UploadBlobAsync(string, Stream, BlobProperties, CancellationToken)](#istorageserviceuploadblobasyncstring-stream-blobproperties-cancellationtoken-մեթոդ) | Պահպանում է `stream` պարամետրի պարունակությունը [ընթացիկ սեսիայի կոնտեյների](Container.md) նշված ֆայլում։ |
| [UploadBlobAsync(string, string, Stream, BlobProperties, CancellationToken)](#istorageserviceuploadblobasyncstring-string-stream-blobproperties-cancellationtoken-մեթոդ)| Պահպանում է `stream` պարամետրի պարունակությունը ժամանակավոր ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ |

### IStorageService.UploadBlobAsync(string, string, byte[], CancellationToken) մեթոդ

```c#
public Task<bool> UploadBlobAsync(string container, 
                                  string blobName, 
                                  byte[] value, 
                                  CancellationToken cancellationToken = default)
```

Պահպանում է `value` պարամետրի պարունակությունը ժամանակավոր ֆայլերի պահոցում` ըստ կոնտեյների և ֆայլի անվան։ 

**Պարամետրեր**

* `container` - Կոնտեյների անունը, որտեղ պետք է պահպանվի ֆայլը։
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `value` - Ֆայլի պարունակությունը` որպես byte-երի զանգված։
* `cancellationToken` - Ընդհատման օբյեկտ։

### IStorageService.UploadBlobAsync(string, Stream, BlobProperties, CancellationToken) մեթոդ  

```c#
public Task<bool> UploadBlobAsync(string blobName, 
                                  Stream stream, 
                                  BlobProperties properties = null, 
                                  CancellationToken cancellationToken = default)
```

Պահպանում է `stream` պարամետրի պարունակությունը [ընթացիկ սեսիայի կոնտեյների](Container.md) նշված ֆայլում։ 

**Պարամետրեր**

* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `stream` - Ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream):
* `properties` - Ֆայլի հատկությունները։ 
* `cancellationToken` - Ընդհատման օբյեկտ։

### IStorageService.UploadBlobAsync(string, string, Stream, BlobProperties, CancellationToken) մեթոդ

```c#
public Task<bool> UploadBlobAsync(string containerOrBucketName, 
                                  string blobName, 
                                  Stream stream, 
                                  BlobProperties properties = null, 
                                  CancellationToken cancellationToken = default)
```

Պահպանում է `stream` պարամետրի պարունակությունը ժամանակավոր ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ 

**Պարամետրեր**

* `containerOrBucketName` - Կոնտեյների անունը։ 
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `stream` - Ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream):
* `properties` - Ֆայլի հատկությունները։ 
* `cancellationToken` - Ընդհատման օբյեկտ։

