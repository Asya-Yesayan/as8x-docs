---
title: Download(string, string)
nav_exclude: true
---

# BlobRoutes.Download(string, string) մեթոդ

```c#
public Stream Download(string container, 
                       string blobName)
```

Բեռնում է նշված կոնտեյների նշված ֆայլը և վերադարձնում ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| container       | string               | -              | Կոնտեյների անունը։ |
| blobName        | string               | -              | Ֆայլի անունը` ներառյալ ֆայլի ընդլայնումը։ |
