---
title: IExtensionMeterProvider ինտերֆեյս
---

## Ներածություն

Այս ինտերֆեյսը անհրաժեշտ է իրականացնել կազմակերպության սեփական նկարագրությունները պարունակող assembly-ում մետրիկաներ (gauge, counter...) կոնֆիգուրացնելու, հաշվարկելու համար: 

Մետրիկաները ստեղծող և հաշվարկող մեթոդները կգործարկվեն համակարգի կողմից միայն այն դեպքում, երբ [OTLPENABLED](../otlp/parameters.md#otlpenabled) համակարգային պարամետրի արժեքը true է։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Configure(IParametersService, Meter)](Methods/Configure.md) | Այս մեթոդը նախատեսված է կազմակերպության սեփական նկարագրությունները պարունակող assembly-ում մետրիկաներ ստեղծելու, կոնֆիգուրացնելու համար՝ օգտագործելով [Meter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter) պարամետրը։ |
| [CalculateGauges(IDBService)](Methods/CalculateGauges.md) | Այս մեթոդը նախատեսված է սեփական նկարագրությունները պարունակող assembly-ում ստեղծված մետրիկաների արժեքների հաշվարկի համար։ <br> Մեթոդը ավտոմատ կերպով կանչվում է համակարգի կողմից՝ [appsettings.json](../../../Project/appsettings_json.md) կոնֆիգուրացիոն ֆայլի [OTLP:Metrics։PeriodicExporting:ExportIntervalMilliseconds](../../../Project/appsettings_json.md#otlp) դաշտում սահմանված արտահանման պարբերականությամբ։ |

## Օրինակ

```c#
using System;
using System.Diagnostics;
using System.Diagnostics.Metrics;
using ArmSoft.AS8X.Core;
using ArmSoft.AS8X.Core.OpenTelemetry;

public class TestExtensionMeterProvider : IExtensionMeterProvider
{
    private int activeSessionsCount;

    // մետրիկանում օգտագործվող tag-երի ցուցակը
    private static readonly TagList commonTags = new TagList
    {
        { "host_name", Environment.MachineName },
    };

    public void Configure(IParametersService parametersService, Meter meter)
    {
        // ստեղծվում է gauge, որում գրանցվող արժեքը անհրաժեշտ է վերադարձնել 
        // observeValue պարամետրում նշված մեթոդով:
        meter.CreateObservableGauge(
            name: "sqlserver_active_sessions",
            observeValue: GetActiveSessionsCount,
            unit: null,
            description: "Number of currently active SQL sessions."
        );

        // ստեղծվում է counter, որը գրանցում է api/Test/Message (GetTestMessage) կանչերի քանակը
        this.testApiExecutionCounter = meter.CreateCounter<int>(
            name: "test_api_execution_count",
            unit: null,
            description: "Counts the number of Test API executions.",
            tags: commonTags
        );

        // ստեղծվում է histogram, որը գրանցում է api/Test/Message (GetTestMessage) կանչի տևողությունը
        this.testApiDurationHistogram = meter.CreateHistogram<double>(
            name: "test_api_duration_ms",
            unit: "ms",
            description: "Records the duration of Test API calls in milliseconds.",
            tags: commonTags
        );
    }

    // Configure մեթոդում ստեղծված counter-ը ավելացնում է 1-ով։
    // Կանչվելու է api/Test/Message (GetTestMessage) API-ում՝ կատարումների քանակը գրանցելու համար:
    public void RegisterTestApiExecution()
    {
        this.testApiExecutionCounter.Add(1);
    }

    // Configure մեթոդում ստեղծված histogram-ում ավելացնում է api կանչի կատարման տևողությունը։
    // Կանչվելու է api/Test/Message (GetTestMessage) API-ում։
    public void RecordApiDuration(double milliseconds)
    {
        this.testApiDurationHistogram.Record(milliseconds);
    }

    // Կարևոր - մետրիկաներում գրանցվող արժեքների հաշվարկը անհրաժեշտ է կատարել 
    // CalculateGauges մեթոդում, իսկ CreateObservableGauge-ի observeValue 
    // պարամետրում վերադարձնել նախապես հաշվարկված մետրիկայի արժեքը:
    public void CalculateGauges(IDBService dbService)
    {
        // ստեղծում և կատարում է Sql հարցում, որը վերադարձնում է Sql-ում 
        // ակտիվ սեսսիաների քանակը
        using var command = dbService.CreateCommand();
        command.CommandText = "SELECT COUNT(*) FROM sys.dm_exec_sessions WHERE status = 'running'";
        this.activeSessionsCount = (int)command.ExecuteScalar();
    }

    private Measurement<int> GetActiveSessionsCount()
    {
        // վերադարձնում է Measurement<int> տիպի օբյեկտ, որը ստանում է մետրիկայի 
        // արժեքը և tag-երի ցուցակը
        return new Measurement<int>(this.activeSessionsCount, commonTags);
    }
}
```

```c#
[HttpGet("Message")]
public async Task<string> GetTestMessage([FromServices] IExtensionMeterProvider extensionMeterProvider)
{   
    // ստեղծում է Stopwatch՝ կատարման տևողության չափման համար։
    var stopwatch = Stopwatch.StartNew();

    // կանչում է RegisterTestApiExecution մեթոդը, որը api-ի կանչերի քանակի counter-ը մեծացնում է 1-ով։
    ((TestExtensionMeterProvider)extensionMeterProvider).RegisterTestApiExecution();

    await Task.Delay(10);

    //կանգնեցնում է Stopwatch-ը։
    stopwatch.Stop();
    
    // կանչում է RecordApiDuration մեթոդը` փոխանցելով կանչի կատարման ընդհանուր տևողությունը, որը գրանցվելու է histogram-ում։
    ((TestExtensionMeterProvider)extensionMeterProvider).RecordApiDuration(stopwatch.Elapsed.TotalMilliseconds);
    return "Some test message";
}
```