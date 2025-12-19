---
title: StatisticsService.DeleteReportCalls(DateTime, DateTime, short?) մեթոդ
---
 
## Նկարագիր
 
**Դաս՝** [StatisticsService](../../StatisticsService.md)
 
```c#
public Task DeleteReportCalls(DateTime staretDate, DateTime endDate, short? userId = null)
```

Հեռացնում է նշված ժամանակահատվածում տրված օգտագործողի կողմից կանչված հաշվետվությունների վիճակագրությունը տվյալների պահոցից։
 
**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| staretDate      | DateTime             | -              | ժամանակահատվածի սկզբի ամսաթիվ։ |
| endDate         | DateTime             | -              | ժամանակահատվածի վերջին ամսաթիվ։ |
| userId          | short?               | null           | Օգտագործողի ներքին համար (կոդ)։ |
 
 