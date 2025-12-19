---
title: IPermanentStorageService.UploadTempBlobAsync(string, string, Stream, BlobProperties, CancellationToken) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IPermanentStorageService](../IPermanentStorageService.md)

```c#
public Task<bool> UploadTempBlobAsync(string fileExtension, 
                                      out string blobName, 
                                      Stream stream, 
                                      BlobProperties properties = null, 
                                      CancellationToken cancellationToken = default)
```

Պահպանում է `stream` պարամետրի պարունակությունը մշտական ֆայլերի պահոցի [Container](Container.md) հատկությամբ նշված թղթապանակում` տրված ընդլայնմամբ ֆայլում, որի անունը ձևավորվում է ավտոմատ։ 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| fileExtension   | string               | -              | Ֆայլի ընդլայնումը։ |
| blobName        | string               | -              | Վերադարձնում է ստեղծված ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| stream          | Stream               | -              | Ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| properties      | BlobProperties       | null           | Ֆայլի հատկությունները։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |
