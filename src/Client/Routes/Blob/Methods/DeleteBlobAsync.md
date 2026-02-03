---
title: DeleteBlobAsync(string, string, CancellationToken)
nav_exclude: true
---

# BlobRoutes.DeleteBlobAsync(string, string, CancellationToken) մեթոդ

```c#
public Task<bool> DeleteBlobAsync(string container, 
                                  string blobName, 
                                  CancellationToken cancellationToken = default)
```

Հեռացնում է ֆայլը պահոցից ըստ անվան և կոնտեյների։ 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| container       | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
