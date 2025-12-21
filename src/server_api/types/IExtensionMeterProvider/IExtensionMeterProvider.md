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
    private long transactionCount;
    private long activeSessionsCount;

    // մետրիկանում օգտագործվող tag-երի ցուցակը
    private static readonly TagList commonTags = new TagList
    {
        { "host_name", Environment.MachineName },
    };

    public void Configure(IParametersService parametersService, Meter meter)
    {
        // ստեղծվում է gauge, որում գրանցվող արժեքը անհրաժեշտ է վերադարձնել 
        // GetActiveSessionsCount մեթոդի միջոցով:
        meter.CreateObservableGauge(
            name: "sqlserver_active_sessions",
            observeValue: GetActiveSessionsCount,
            unit: null,
            description: "Number of currently active SQL sessions."
        );

        // ստեղծվում է gauge, որում գրանցվող արժեքը անհրաժեշտ է վերադարձնել 
        // GetTransactionCount մեթոդի միջոցով:
        meter.CreateObservableGauge(
            name: "sqlserver_transaction_count",
            observeValue: GetTransactionCount,
            unit: null,
            description: "Number of currently open SQL transactions."
        );
    }

    // Կարևոր - մետրիկաներում գրանցվող արժեքների հաշվարկը անհրաժեշտ է կատարել 
    // CalculateGauges մեթոդում, իսկ CreateObservableGauge-ի observeValue 
    // պարամետրում վերադարձնել նախապես հաշվարկված մետրիկայի արժեքը:
    public void CalculateGauges(IDBService dbService)
    {
        // ստեղծում և կատարում է Sql հարցում, որը վերադարձնում է Sql-ում 
        // ակտիվ տրանզակցիաների քանակը
        using var command = dbService.CreateCommand();
        command.CommandText = "SELECT COUNT(*) FROM sys.dm_tran_active_transactions";
        this.transactionCount = (long)command.ExecuteScalar();

        // ստեղծում և կատարում է Sql հարցում, որը վերադարձնում է Sql-ում 
        // ակտիվ սեսսիաների քանակը
        command.CommandText = "SELECT COUNT(*) FROM sys.dm_exec_sessions WHERE status = 'running'";
        this.activeSessionsCount = (long)command.ExecuteScalar();
    }

    private Measurement<long> GetTransactionCount()
    {
        // վերադարձնում է Measurement<long> տիպի օբյեկտ, որը ստանում է մետրիկայի 
        // արժեքը և tag-երի ցուցակը
        return new Measurement<long>(this.transactionCount, commonTags);
    }

    private Measurement<long> GetActiveSessionsCount()
    {
        // վերադարձնում է Measurement<long> տիպի օբյեկտ, որը ստանում է մետրիկայի 
        // արժեքը և tag-երի ցուցակը
        return new Measurement<long>(this.activeSessionsCount, commonTags);
    }
}
```