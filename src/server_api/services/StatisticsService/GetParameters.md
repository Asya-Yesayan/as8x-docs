---
title: StatisticsService․GetParameters(string) մեթոդ
---
 
## Նկարագիր
 
**Դաս՝** [StatisticsService](../StatisticsService.md)
 
```c#
public Task<List<ReportParametersModel>> GetParameters(string reportCallId)
```

Վերադարձնում է նշված id-ով կանչված հաշվետվության [պարամետրերի նկարագրությունների](../../types/ReportParametersModel.md) ցուցակը։ 

**Պարամետրեր**
 
* `reportCallId` - Տվյալների աղբյուրի `REPORTCALLS` աղյուսակում գրանցված գրառման id-ն։