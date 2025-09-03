---
title: MeterManager սերվիս
---

## Ներածություն

Այս դասը նախատեսված է մետրիկաների հավաքագրումը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [TryConfigure](Methods/TryConfigure.md) | Այս մեթոդը նախատեսված է մետրիկաների արտահանումը կազմակերպելու համար։ |
| [Configure](Methods/Configure.md) | * հերթում սպասող, կատարվող և ավարտված երկար տևող հարցումների քանակը ([OTLPPROCMETERENABLED](../../../../server_api/types/otlp_parameters.md#otlpprocmeterenabled) պարամետրի **true** արժեքի դեպքում)։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Configuration](Properties/Methods/Configuration.md) | Վերադարձնում է [IConfiguration](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.configuration.iconfiguration) դասի օբյեկտ, որը հնարավորություն է տալիս ստանալ ծրագրի կարգավորումները, կոնֆիգուրացիան։ |
| [Meter](Properties/Methods/Meter.md) | Վերադարձնում է [Meter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter) դասի օբյեկտ, որը հնարավորություն է տալիս ապահովել մետրիկաների հետ աշխատանքը։ |
| [GlobalTags](Properties/Methods/GlobalTags.md) | Վերադարձնում է մետրիկաներում ավելացվող հիմնական tag-երի անունների և արժեքների ցուցակը (ծրագրի, սերվերի, տվյալների բազայի, մեքենայի անունները, օգտագործողի համարը...)։ |