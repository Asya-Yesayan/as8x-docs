---
title: BlobRoutes.AppendAsync(string, string, byte[], int, CancellationToken) մեթոդ
---

```c#
public Task<bool> AppendAsync(string container, 
                              string blobName, 
                              byte[] value, 
                              int size, 
                              CancellationToken cancellationToken = default)
```

Ավելացնում է `value` պարամետրի պարունակությունը `file` պարամետրում նշված ֆայլի վերջում։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| container       | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը, որին կավելանա երկրորդ ֆայլը։ |
| value           | byte[]               | -              | Ավելացվող ֆայլի պարունակությունը որպես byte-երի զանգված։ |
| size            | int                  | -              | Ավելացվող ֆայլի երկարությունը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
