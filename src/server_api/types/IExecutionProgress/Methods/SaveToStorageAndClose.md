---
title: IExecutionProgress.SaveToStorageAndClose() մեթոդ
---

## Նկարագիր

**Դաս՝** [IExecutionProgress](../../IExecutionProgress.md)

```c#
public Task<StorageInfo> SaveToStorageAndClose();
```

Փակում է [տեքստային հաշվետվությունը](../../TextReport.md) և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../../../services/IPermanentStorageService/Properties/Container.md):

Վերադարձնում է հաշվետվությունը պարունակող [կոնտեյների](../../../services/IPermanentStorageService/Properties/Container.md) և ֆայլի անունները։

Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում հաշվետվությունը մնում է անփոփոխ։ 
