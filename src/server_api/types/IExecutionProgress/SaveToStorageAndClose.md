---
title: IExecutionProgress.SaveToStorageAndClose() մեթոդ
---

```c#
public Task<StorageInfo> SaveToStorageAndClose();
```

Փակում է հաշվետվությունը և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../../services/IStorageService/Container.md):

Վերադարձնում է հաշվետվությունը պարունակող [կոնտեյների](../../services/IStorageService/Container.md) և ֆայլի անունները։

Առաջադրանքի կատարման ժամանակ մեթոդի կանչը անտեսվում է։
