---
title: BlobRoutes.DownloadToFile(string, string, string, bool) մեթոդ
---

```c#
public void DownloadToFile(string container, 
                           string blobName,
                           string file, 
                           bool deleteBlob = true)
```

Բեռնում է նշված կոնտեյների նշված ֆայլը և ավելացնում `file` պարամետրում նշված ֆայլում։

`file` պարամետրում նշված ճանապարհով ֆայլի գոյություն չունենալու դեպքում, ստեղծվում է այն և ավելացնում բեռնված ֆայը։

**Պարամետրեր**

* `container` - Կոնտեյների անունը։ 
* `blobName` - Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։
* `file` - Ֆայլի ճանապարհը, որտեղ պահելու է բեռնված ֆայլը։
* `deleteBlob` - Ցույց է տալիս, արդյոք `blobName` պարամետրում նշված ֆայլը բեռնումից հետո պետք է հեռացվի, թե ոչ։
