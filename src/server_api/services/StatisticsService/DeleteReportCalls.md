---
title: StatisticsService.DeleteReportCalls(DateTime, DateTime, short?) մեթոդ
---
 
## Նկարագիր
 
**Դաս՝** [StatisticsService](../StatisticsService.md)
 
```c#
public Task DeleteReportCalls(DateTime staretDate, DateTime endDate, short? userId = null)
```

Հեռացնում է նշված ժամանակահատվածում տրված օգտագործողի կողմից կանչված հաշվետվությունների վիճակագրությունը տվյալների պահոցից։
 
**Պարամետրեր**
 
* `staretDate` - ժամանակահատվածի սկզբի ամսաթիվ։
* `endDate` - ժամանակահատվածի վերջին ամսաթիվ։
* `userId` - Օգտագործողի ներքին համար (կոդ)։
 
 