---
title: "TraceService"
nav_exclude: true
---

# TraceService սերվիս

TraceService-ը նախատեսված է trace-ների հետ աշխատանքը ապահովելու համար, որոնց միջոցով հնարավոր է գրանցել գործողությունների կատարման տևողությունները։ 

## Համակարգում առկա trace-եր

Համակարգում տրվել է հնարավորություն որոշ համակարգային նկարագրությունների գործողությունների tracing-ի, որը կարգավորվում է պարամետրերի միջոցով:
* OTLPDOCSTRACING - պարամետրում նշվում են այն փաստաթղթերի ներքին անունները, որոնց համար պետք է արձանգրվի գրանցման տևողությունը։ Trace-ում գրանցվում են փաստաթղթի գրանցման հիմնական իրադարձությունների (Folders, DefaultComment, AfterCommit, ․․․), ընդլայման իրադարձությունների (PreFolders, PostFolders, PostBeforeCommit, ․․․) կատարման տևողությունները։
* OTLPDOCOTHMTRENABLED - Պարամետրի true արժեքի դեպքում գրանցվում են համակարգում առկա բոլոր փաստաթղթերի բեռնման տևողությունները։ Trace-ում գրանցվում են փաստաթղթի բեռնման հիմնական իրադարձությունների (AfterLoad, ...), ընդլայման իրադարձությունների (PreFolders, PostFolders, PostBeforeCommit, ․․․) կատարման տևողությունները։
* OTLPDSTRACING - պարամետրում նշվում են այն տվյալների աղբյուրների ներքին անունները, որոնց համար պետք է գրանցվի կատարման տևողությունը։ Trace-ում գրանցվում են տվյալների աղբյուրի հիմնական իրադարձությունների (AfterDataReaderClose, ProccessRow, MakeSQLCommand, ․․․), ընդլայման իրադարձությունների (BeforeProcess, ProccessRow, ․․․) կատարման տևողությունները։
* OTLPDPRTRACING - պարամետրում նշվում են այն տվյալների մշակման հարցումների (DPR) ներքին անունները, որոնց համար պետք է գրանցվի կատարման տևողությունը։ Trace-ում գրանցվում են տվյալների մշակման հարցման (DPR) հիմնական իրադարձությունների (AfterDataReaderClose, ProccessRow, MakeSQLCommand, ․․․), ընդլայման իրադարձությունների (BeforeProcess, ProccessRow, ․․․) կատարման տևողությունները։

Վերևում նշված պարամետրերի կարգավորման, ինչպես նաև TraceService-ի մեթոդների կանչի ժամանակ ավելացվում են նաև լռությամբ tag-եր (`Server`, `Database`, `CustomerId`, `ServiceVersion`, `Application`, `MachineName`):

## Հատկություններ

| Անվանում | Նկարագրություն |
|---------|----------------|
| [CurrentActivityId](Properties/CurrentActivityId.md) | Վերադարձնում է [ընթացիկ Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity.current)-ի Id-ն։  |

## Մեթոդներ

| Անվանում | Նկարագրություն |
|---------|----------------|
| [StartRootActivity(string)](Methods/StartRootActivity.md) | Ստեղծում և սկսում է նոր 1-ին մակարդակի [Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity#remarks)՝ նախապես ընդհատելով [ընթացիկ Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity.current)-ն։ |
| [Start(string)](Methods/Start.md#traceservicestartstring-մեթոդ) | Ստեղծում և սկսում է նոր [Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity#remarks)` այն կապելով [ընթացիկ Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity.current)-ին։ |
| [Start(string, string)](Methods/Start.md#traceservicestartstring-string-մեթոդ) | Ստեղծում և սկսում է նոր [Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity#remarks)՝ այն կապելով նշված [ծնող Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity.parent#system-diagnostics-activity-parent)-ին։ |
| [SetErrorTag(Activity, string)](Methods/SetErrorTag.md#traceserviceseterrortagactivity-exception-մեթոդ) | Կապակցում է [Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception) տիպի սխալը տրված Activity-ին։ |
| [SetErrorTag(Activity, Exception)](Methods/SetErrorTag.md#traceserviceseterrortagactivity-string-մեթոդ) | Ստեղծում է [Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception) դասի օբյեկտ՝ **errorText** սխալի հաղորդագրությամբ, կապակցում է տրված Activity-ին։ |


