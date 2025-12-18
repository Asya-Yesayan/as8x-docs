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
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| container       | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| value           | byte[]               | -              | Ֆայլի պարունակությունը որպես byte-երի զանգված։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
