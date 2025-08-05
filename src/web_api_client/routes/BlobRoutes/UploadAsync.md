---
title: BlobRoutes.UploadAsync(string, string, byte[], CancellationToken) մեթոդ
---

```c#
public Task<bool> UploadAsync(string container, 
                              string blobName, 
                              byte[] value, 
                              CancellationToken cancellationToken = default)
```

Պահպանում է `value` պարամետրի պարունակությունը նշված կոնտեյների նշված ֆայլում։ 

**Պարամետրեր**

* `container` - Կոնտեյների անունը։ 
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `value` - Ֆայլի պարունակությունը որպես byte-երի զանգված։
* `cancellationToken` - Ընդհատման օբյեկտ:
