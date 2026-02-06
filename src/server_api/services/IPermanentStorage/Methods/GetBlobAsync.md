---
title: GetBlobAsync
parent: "Մեթոդներ"
grand_parent: "IPermanentStorageService"
---

# IPermanentStorageService.GetBlobAsync(string, string, CancellationToken) մեթոդ

## Նկարագիր

**Դաս՝** [IPermanentStorageService](../IPermanentStorageService.md)

```c#
public virtual Task<Stream> GetBlobAsync(string container, 
                                         string blobName, 
                                         CancellationToken cancellationToken = default)
```

Վերադարձնում է ֆայլի պարունակությունը մշտական ֆայլերից պահոցից՝ որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream):

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| container       | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |

<!-- ### GetTempBlobUrlAsync

```c#
public Task<string> GetTempBlobUrlAsync(string fileExtension, out string blobName);
```

Վերադարձնում է [Container](#container) հատկությամբ սահմանված ենթաթղթապանակում գոյություն չունեցող, պատահականության սկզբունքով ընտրված ֆայլի անուն՝ նշված ընդլայնմամբ և ֆայլի ամբողջական ճանապարհը։

**Օրինակ** `C:\\Storage\\Files\\76dfc298-66c0-4b41-8981-434582400aeb\\lsrbuqgy.jay.txt`:

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| fileExtension   | string               | -              | Ֆայլի ընդլայնումը։ |
| blobName        | string               | -              | Վերադարձնում է ֆայլի անունը՝ նշված ընդլայնմամբ։  |

-->
