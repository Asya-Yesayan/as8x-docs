---
title: BlobRoutes.Download(string, string) մեթոդ
---

```c#
public Stream Download(string container, string blobName)
```

Բեռնում է նշված կոնտեյների նշված ֆայլը և վերադարձնում ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): 

**Պարամետրեր**

* `container` - Կոնտեյների անունը։ 
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `cancellationToken` - Ընդհատման օբյեկտ:
