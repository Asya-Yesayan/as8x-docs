---
title: "StatisticsService"
parent: "Սերվիսներ"
nav_order: 2
has_toc: false
---

# StatisticsService սերվիս

## Ներածություն

StatisticsService դասը նախատեսված է օգտագործողի գործողությունների (հաշվետվությունների, ֆունկցիաների կանչեր...) վիճակագրության հավաքագրման, մշակման և տրամադրման համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [DeleteReportCalls(DateTime, DateTime, short?)](Methods/DeleteReportCalls.md) | Հեռացնում է նշված ժամանակահատվածում տրված օգտագործողի կողմից կանչված հաշվետվությունների վիճակագրությունը տվյալների պահոցից։ |
| [GetParameters(string)](Methods/GetParameters.md) | Վերադարձնում է նշված id-ով կանչված հաշվետվության [պարամետրերի նկարագրությունների](../../Types/ReportParametersModel.md) ցուցակը։  |
| [StoreReportCallsAndParams(ReportCallsStoreModel)](Methods/StoreReportCallsAndParams.md)| Գրանցում է ընթացիկ օգտագործողի կողմից կանչված հաշվետվության և հաշվետվության պարամետրերի վիճակագրությունը տվյալների պահոցում։ |

