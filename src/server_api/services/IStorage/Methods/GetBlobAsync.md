---
title: IStorageService.GetBlobAsync(string, string, CancellationToken) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** modRestService.DownloadFromBlobStorageToFile

**Դաս՝** [IStorageService](../IStorageService/IStorageService.md)

```c#
public virtual Task<Stream> GetBlobAsync(string container, 
                                         string blobName, 
                                         CancellationToken cancellationToken = default)
```

Վերադարձնում է ֆայլի պարունակությունը ժամանակավոր ֆայլերի պահոցից` որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream):

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| container       | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |
