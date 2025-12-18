---
title: BankMeterManager.Configure(IParametersService) մեթոդ
---

```c#
protected override void Configure(IParametersService parametersService)
```

Ստեղծում և կոնֆիգուրացնում է ՀԾ-Բանկին յուրահատուկ և համակարգի [հիմնական մետրիկաները](../../../../../server_api/types/MeterManager/Methods/Configure.md):

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| parametersService | IParametersService   | -              | parametersService | [IParametersService](../../../../server_api/services/IParametersService.md) դասի օբյեկտ։ |

## ՀԾ-Բանկի պրոյեկտում մետրիկաների ավելացման օրինակ

Նշված օրինակում`
* [BankMeterManager](../BankMeterManager.md) դասի Configure մեթոդում բազային դասի [Meter](../../../../../server_api/types/MeterManager/Properties/Meter.md) հատկությունից կանչվում է [CreateObservableGauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter.createobservablegauge#system-diagnostics-metrics-meter-createobservablegauge-1(system-string-system-func((system-collections-generic-ienumerable((system-diagnostics-metrics-measurement((-0))))))-system-string-system-string)) մեթոդը՝ փոխանցելով ստեղծվող [ObservableGauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.observablegauge-1) տիպի մետրիկայի id-ն, **նախապես հաշվարկված տվյալները** և [ավելացվող tag](../../../../../server_api/types/MeterManager/Properties/GlobalTags.md)-երը վերադարձնող ֆունկցիան, մետրիկայի չափման միավորը և նկարագրությունը, 
* գրանցվող տվյալների հաշվարկը տեղի է ունենում [BackgroundService](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.backgroundservice)-ի միջոցով, որը հաշվարկում է .NET ThreadPool-ի ծանրաբեռնվածության տոկոսը։

```c#
public class BankMeterManager(IMeterFactory meterFactory, IConfiguration configuration, IServiceScopeFactory serviceScopeFactory,
                              DocumentCacheService<LiteDocument> liteDocumentCacheService,
                              DocumentCacheService<RODocument> roDocumentCacheService)
            : MeterManager(meterFactory, configuration, liteDocumentCacheService, roDocumentCacheService)
{
    internal double ThreadPoolUtilization { get; set; }

    protected override void Configure(IParametersService parametersService)
    {
        base.Configure(parametersService);
        this.Meter.CreateObservableGauge(
                   name: "threadpool_utilization",
                   observeValues: GetThreadPoolUtilization,
                   unit: "percent",
                   description: "Current utilization of the .NET ThreadPool threads"
                                    );

    }

    private IEnumerable<Measurement<double>> GetThreadPoolUtilization()
    {
        yield return new Measurement<double>(this.ThreadPoolUtilization, this.GlobalTags);
    }
}
```

```c#
public class CompanySpecificMeterUpdaterService : BackgroundService
{
    private readonly CompanySpecificMeterManager meterManager;

    public CompanySpecificMeterUpdaterService(CompanySpecificMeterManager meterManager)
    {
        this.meterManager = meterManager;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            ThreadPool.GetMaxThreads(out int maxWorkerThreads, out _);
            ThreadPool.GetAvailableThreads(out int availableWorkerThreads, out _);

            int busyThreads = maxWorkerThreads - availableWorkerThreads;
            double utilization = (double)busyThreads / maxWorkerThreads * 100;

            this.meterManager.ThreadPoolUtilization = utilization;

            await Task.Delay(TimeSpan.FromMinutes(5), stoppingToken);
        }
    }
}
```
