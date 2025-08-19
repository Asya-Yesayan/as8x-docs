---
title: "StatisticsService սերվիս"
---

## Ներածություն

StatisticsService դասը նախատեսված է օգտագործողի գործողությունների (հաշվետվությունների, ֆունկցիաների կանչեր...) վիճակագրության հավաքագրման համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [DeleteReportCalls(DateTime, DateTime, short?)](StatisticsService/DeleteReportCalls.md) | Հեռացնում է նշված ժամանակահատվածում տրված օգտագործողի կողմից կանչված հաշվետվությունների վիճակագրությունը տվյալների պահոցից։ |
| [GetParameters(string)](StatisticsService/GetParameters.md) | Վերադարձնում է նշված id-ով կանչված հաշվետվության [պարամետրերի նկարագրությունների](../types/ReportParametersModel.md) ցուցակը։  |
| [StoreReportCallsAndParams(ReportCallsStoreModel)](StatisticsService/StoreReportCallsAndParams.md)| Գրանցում է ընթացիկ օգտագործողի կողմից կանչված հաշվետվության և հաշվետվության պարամետրերի վիճակագրությունը տվյալների պահոցում։ |

