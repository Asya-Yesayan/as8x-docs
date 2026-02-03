---
title: DownloadToFileAsync(string, string, string, bool, CancellationToken)
nav_exclude: true
---

# BlobRoutes.DownloadToFileAsync(string, string, string, bool, CancellationToken) մեթոդ

```c#
public Task DownloadToFileAsync(string container, 
                                string blobName,
                                string file, 
                                bool deleteBlob = true,
                                CancellationToken cancellationToken = default)
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
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
