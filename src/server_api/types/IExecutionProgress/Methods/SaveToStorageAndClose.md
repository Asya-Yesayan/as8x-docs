---
title: SaveToStorageAndClose()
parent: "Մեթոդներ"
grand_parent: "IExecutionProgress"
---

# IExecutionProgress.SaveToStorageAndClose() մեթոդ

## Նկարագիր

**Դաս՝** [IExecutionProgress](../../IExecutionProgress.md)

```c#
public Task<StorageInfo> SaveToStorageAndClose();
```

Փակում է [տեքստային հաշվետվությունը](../../TextReport.md) և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../../../Services/IStorage/Properties/Container.md):

Վերադարձնում է հաշվետվությունը պարունակող [կոնտեյների](../../../Services/IStorage/Properties/Container.md) և ֆայլի անունները։

Առաջադրանքի կատարման ընթացքում մեթոդի կանչի դեպքում հաշվետվությունը մնում է անփոփոխ։ 
