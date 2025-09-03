---
title: MeterManager սերվիս
---

## Ներածություն

Այս դասը նախատեսված է մետրիկաների հավաքագրումը ապահովելու համար։

## Մեթոդներ
| Անվանում | Նկարագրություն |
|----------|----------------|
| [TryConfigure](Methods/TryConfigure.md) | [OTLPENABLED](../otlp_parameters.md#otlpenabled) պարամետրի **true** արժեքի դեպքում կանչում է [Configure](Methods/Configure.md) մեթոդը, որը ստեղծում և կոնֆիգուրացնում է համակարգի հիմնական մետրիկաները ([Histogram](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.histogram-1)-ներ, [Gauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.observablegauge-1)-ներ, [UpDownCounter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.updowncounter-1)-ներ)։ |
| [Configure](Methods/Configure.md) | Լռությամբ ստեղծում և կոնֆիգուրացնում է համակարգի հիմնական մետրիկաները ([Histogram](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.histogram-1)-ներ, [Gauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.observablegauge-1)-ներ, [UpDownCounter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.updowncounter-1)-ներ)։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Configuration](Properties/Configuration.md) | Վերադարձնում է [IConfiguration](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.configuration.iconfiguration) դասի օբյեկտ, որը հնարավորություն է տալիս ստանալ ծրագրի կարգավորումները, կոնֆիգուրացիան։ |
| [Meter](Properties/Meter.md) | Վերադարձնում է [Meter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter) դասի օբյեկտ, որը հնարավորություն է տալիս ապահովել մետրիկաների հետ աշխատանքը։ |
| [GlobalTags](Properties/GlobalTags.md) | Վերադարձնում է մետրիկաներում ավելացվող հիմնական tag-երի անունների և արժեքների ցուցակը (ծրագրի, սերվերի, տվյալների բազայի, մեքենայի անունները, օգտագործողի համարը...)։ |