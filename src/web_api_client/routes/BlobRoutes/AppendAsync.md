---
title: BlobRoutes.AppendAsync(string, string, byte[], int, CancellationToken) մեթոդ
---

```c#
public Task<bool> AppendAsync(string container, string blobName, byte[] value, int size, CancellationToken cancellationToken = default)
```

Ավելացնում է `value` պարամետրի պարունակությունը `file` պարամետրում նշված ֆայլի վերջում։

**Պարամետրեր**

* `container` - Կոնտեյների անունը։ 
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը, որին կավելանա երկրորդ ֆայլը։
* `value` - Ավելացվող ֆայլի պարունակությունը որպես byte-երի զանգված։
* `size` - Ավելացվող ֆայլի երկարությունը։
* `cancellationToken` - Ընդհատման օբյեկտ:
