---
title: IPermanentStorageService.UploadBlobAsync մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [UploadBlobAsync(string, string, byte\[\], CancellationToken)](#ipermanentstorageserviceuploadblobasyncstring-string-byte-cancellationtoken-մեթոդ) | Պահպանում է `value` պարամետրի պարունակությունը մշտական ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ |
| [UploadBlobAsync(string, Stream, BlobProperties, CancellationToken)](#ipermanentstorageserviceuploadblobasyncstring-stream-blobproperties-cancellationtoken-մեթոդ) | Պահպանում է `value` պարամետրի պարունակությունը մշտական ֆայլերի պահոցի [Container](../Properties/Container.md) հատկությամբ նշված թղթապանակում՝ `blobName` պարամետրում նշված ֆայլում։ |
| [UploadBlobAsync(string, string, Stream, BlobProperties, CancellationToken)](#ipermanentstorageserviceuploadblobasyncstring-string-stream-blobproperties-cancellationtoken-մեթոդ) | Պահպանում է `stream` պարամետրի պարունակությունը մշտական ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ |

### IPermanentStorageService.UploadBlobAsync(string, string, byte[], CancellationToken) մեթոդ  

#### Նկարագիր

**Դաս՝** [IPermanentStorageService](../../IPermanentStorageService.md)

```c#
public Task<bool> UploadBlobAsync(string container, 
                                  string blobName, 
                                  byte[] value, 
                                  CancellationToken cancellationToken = default)
```

Պահպանում է `value` պարամետրի պարունակությունը մշտական ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| container       | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| value           | byte[]               | -              | Ֆայլի պարունակությունը որպես byte-երի զանգված։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |

### IPermanentStorageService.UploadBlobAsync(string, Stream, BlobProperties, CancellationToken) մեթոդ

#### Նկարագիր

**Դաս՝** [IPermanentStorageService](../../IPermanentStorageService.md)

```c#
public Task<bool> UploadBlobAsync(string blobName, 
                                  Stream stream, 
                                  BlobProperties properties = null, 
                                  CancellationToken cancellationToken = default)
```

Պահպանում է `value` պարամետրի պարունակությունը մշտական ֆայլերի պահոցի [Container](../Properties/Container.md) հատկությամբ նշված թղթապանակում՝ `blobName` պարամետրում նշված ֆայլում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| stream          | Stream               | -              | Ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| properties      | BlobProperties       | null           | Ֆայլի հատկությունները։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |

### IPermanentStorageService.UploadBlobAsync(string, string, Stream, BlobProperties, CancellationToken) մեթոդ  

#### Նկարագիր

**Դաս՝** [IPermanentStorageService](../../IPermanentStorageService.md)

```c#
public Task<bool> UploadBlobAsync(string containerOrBucketName, 
                                  string blobName, 
                                  Stream stream, 
                                  BlobProperties properties = null, 
                                  CancellationToken cancellationToken = default)
```

Պահպանում է `stream` պարամետրի պարունակությունը մշտական ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| containerOrBucketName | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| stream          | Stream               | -              | Ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| properties      | BlobProperties       | null           | Ֆայլի հատկությունները։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |

