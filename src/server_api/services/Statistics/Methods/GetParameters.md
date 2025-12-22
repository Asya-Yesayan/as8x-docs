---
title: StatisticsService․GetParameters(string) մեթոդ
---
 
## Նկարագիր
 
**Դաս՝** [StatisticsService](../StatisticsService/StatisticsService.md)
 
```c#
public Task<List<ReportParametersModel>> GetParameters(string reportCallId)
```

Վերադարձնում է նշված id-ով կանչված հաշվետվության [պարամետրերի նկարագրությունների](../../Types/ReportParametersModel.md) ցուցակը։ 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| reportCallId    | string               | -              | Տվյալների աղբյուրի [REPORTCALLS](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/REPORTCALLS.html) աղյուսակում գրանցված գրառման id-ն։ |
