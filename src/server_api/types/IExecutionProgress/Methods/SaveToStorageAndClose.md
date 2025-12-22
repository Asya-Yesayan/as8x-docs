---
title: IExecutionProgress.SaveToStorageAndClose() մեթոդ
---

## Նկարագիր

**Դաս՝** [IExecutionProgress](../IExecutionProgress.md)

```c#
public Task<StorageInfo> SaveToStorageAndClose();
```

Փակում է [տեքստային հաշվետվությունը](../TextReport.md) և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../../Services/IStorage/Container.md):

Վերադարձնում է հաշվետվությունը պարունակող [կոնտեյների](../../Services/IStorage/Container.md) և ֆայլի անունները։

Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում հաշվետվությունը մնում է անփոփոխ։ 
