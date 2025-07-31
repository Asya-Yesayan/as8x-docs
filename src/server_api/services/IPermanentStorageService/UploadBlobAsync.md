---
title: IPermanentStorageService.UploadBlobAsync մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [UploadBlobAsync(string, string, byte\[\], CancellationToken)](#ipermanentstorageserviceuploadblobasyncstring-string-byte-cancellationtoken-մեթոդ) | Պահպանում է `value` պարամետրի պարունակությունը մշտական ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ |
| [UploadBlobAsync(string, Stream, BlobProperties, CancellationToken)](#ipermanentstorageserviceuploadblobasyncstring-stream-blobproperties-cancellationtoken-մեթոդ) | Պահպանում է `value` պարամետրի պարունակությունը մշտական ֆայլերի պահոցի [Container](Container.md) հատկությամբ նշված թղթապանակում՝ `blobName` պարամետրում նշված ֆայլում։ |
| [UploadBlobAsync(string, string, Stream, BlobProperties, CancellationToken)](#ipermanentstorageserviceuploadblobasyncstring-string-stream-blobproperties-cancellationtoken-մեթոդ) | Պահպանում է `stream` պարամետրի պարունակությունը մշտական ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ |

### IPermanentStorageService.UploadBlobAsync(string, string, byte[], CancellationToken) մեթոդ  

```c#
public Task<bool> UploadBlobAsync(string container, string blobName, byte[] value, CancellationToken cancellationToken = default)
```

Պահպանում է `value` պարամետրի պարունակությունը մշտական ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ 

**Պարամետրեր**

* `container` - Կոնտեյների անունը։ 
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `value` - Ֆայլի պարունակությունը որպես byte-երի զանգված։
* `cancellationToken` - Ընդհատման օբյեկտ։

### IPermanentStorageService.UploadBlobAsync(string, Stream, BlobProperties, CancellationToken) մեթոդ

```c#
public Task<bool> UploadBlobAsync(string blobName, Stream stream, BlobProperties properties = null, CancellationToken cancellationToken = default)
```

Պահպանում է `value` պարամետրի պարունակությունը մշտական ֆայլերի պահոցի [Container](Container.md) հատկությամբ նշված թղթապանակում՝ `blobName` պարամետրում նշված ֆայլում։

**Պարամետրեր**

* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `stream` - Ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream):
* `properties` - Ֆայլի հատկությունները։ 
* `cancellationToken` - Ընդհատման օբյեկտ։

### IPermanentStorageService.UploadBlobAsync(string, string, Stream, BlobProperties, CancellationToken) մեթոդ  

```c#
public Task<bool> UploadBlobAsync(string containerOrBucketName, string blobName, Stream stream, BlobProperties properties = null, CancellationToken cancellationToken = default)
```

Պահպանում է `stream` պարամետրի պարունակությունը մշտական ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ 

**Պարամետրեր**

* `containerOrBucketName` - Կոնտեյների անունը։ 
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `stream` - Ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream):
* `properties` - Ֆայլի հատկությունները։ 
* `cancellationToken` - Ընդհատման օբյեկտ։

