---
title: DownloadToFile(string, string, string, bool)
nav_exclude: true
---

# BlobRoutes.DownloadToFile(string, string, string, bool) մեթոդ

```c#
public void DownloadToFile(string container, 
                           string blobName,
                           string file, 
                           bool deleteBlob = true)
```

Բեռնում է նշված կոնտեյների նշված ֆայլը և ավելացնում `file` պարամետրում նշված ֆայլում։

`file` պարամետրում նշված ճանապարհով ֆայլի գոյություն չունենալու դեպքում, ստեղծվում է այն և ավելացնում բեռնված ֆայը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| container       | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| file            | string               | -              | Ֆայլի ճանապարհը, որտեղ պահելու է բեռնված ֆայլը։ |
| deleteBlob      | bool                 | true           | Ցույց է տալիս, արդյոք `blobName` պարամետրում նշված ֆայլը բեռնումից հետո պետք է հեռացվի, թե ոչ։ |
