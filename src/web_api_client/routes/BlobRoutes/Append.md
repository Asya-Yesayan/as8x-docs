---
title: BlobRoutes.Append(string, string, byte[], int) մեթոդ
---

```c#
public bool Append(string container, 
                   string blobName, 
                   byte[] value, 
                   int size)
```

Ավելացնում է `value` պարամետրի պարունակությունը `file` պարամետրում նշված ֆայլի վերջում։

**Պարամետրեր**

* `container` - Կոնտեյների անունը։ 
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը, որին կավելանա երկրորդ ֆայլը։
* `value` - Ավելացվող ֆայլի պարունակությունը որպես byte-երի զանգված։
* `size` - Ավելացվող ֆայլի երկարությունը։
