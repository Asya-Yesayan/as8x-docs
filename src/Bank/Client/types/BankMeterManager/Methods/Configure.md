---
title: BankMeterManager.Configure(IParametersService) մեթոդ
---

```c#
protected override void Configure(IParametersService parametersService)
```

Ստեղծում և կոնֆիգուրացնում է ՀԾ-Բանկին յուրահատուկ և համակարգի [հիմնական մետրիկաները](../../../../../server_api/types/MeterManager/Methods/Configure.md):

**Պարամետրեր**

* `parametersService` - [IParametersService](../../../../server_api/services/IParametersService.md) դասի օբյեկտ։

## Օրինակ

```c#
protected override void Configure(IParametersService parametersService)
{
    base.Configure(parametersService);
    bool? messagesEnabled = this.Configuration.GetValue<bool?>("OTLP:Metrics:Messages:Enabled");
    if (messagesEnabled != null && messagesEnabled.Value)
    {
        this.MessagesGauge = this.Meter.CreateObservableGauge(
            "armsoft_messages_queue",
            GetMessagesMetric,
            null,
            "Messages"
        );
    }
}
```

```c#
private IEnumerable<Measurement<int>> GetMessagesMetric()
{
    ///...
}
```

Նշված օրինակում կանչվում է բազային դասի [Configure](../../../../../server_api/types/MeterManager/Methods/Configure.md) մեթոդը, որը կոնֆիգուրացնում է համակարգի հիմնական մետրիկաները։ Ստուգում է **OTLP:Metrics:Messages:Enabled** կոնֆիգուրացիայի առկայությունը և **true** արժեքի դեպքում բազային դասի [Meter](../../../../../server_api/types/MeterManager/Properties/Meter.md) հատկությունից կանչում է [CreateObservableGauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter.createobservablegauge) մեթոդը։ Նշված մեթոդը ստեղծում է [ObservableGauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.observablegauge-1) տիպի մետրիկա՝ փոխանցելով մետրիկայի id-ն, տվյալները հաշվարկող ֆունկցիան և նկարագրությունը։ 
