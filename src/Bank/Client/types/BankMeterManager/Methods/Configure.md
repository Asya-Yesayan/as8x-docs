---
title: BankMeterManager.Configure(IParametersService) մեթոդ
---

```c#
protected override void Configure(IParametersService parametersService)
```

Այս մեթոդը նախատեսված է մետրիկաների արտահանումը կազմակերպելու համար։ 

```c#
protected override void Configure(IParametersService parametersService)
{
    base.Configure(parametersService);
    bool? cbMessagesEnabled = this.Configuration.GetValue<bool?>("OTLP:Metrics:Messages:Enabled");
    if (cbMessagesEnabled != null && cbMessagesEnabled.Value)
    {
        this.CBMessagesGauge = this.Meter.CreateObservableGauge(
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
    IEnumerable<(int Count, Dictionary<string, object> Tags)> result = this.CardTransferMetrics;
    foreach (var (count, tags) in result)
    {
        foreach (var tag in this.GlobalTags)
        {
            tags[tag.Key] = tag.Value;
        }
        yield return new Measurement<int>(count, tags);
    }
}
```

Նշված օրինակում կանչվում է բազային դասի Configure մեթոդը, որը կոնֆիգուրացնում է որոշ լոգեր։ Ստուգում է **OTLP:Metrics:Messages:Enabled** կոնֆիգուրացիայի առկայությունը և **true** արժեքի դեպքում բազային դասի [Meter](MeterManager.md#meter) հատկությունից կանչում է [CreateObservableGauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter.createobservablegauge)։ Նշված մեթոդը ստեղծում է [ObservableGauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.observablegauge-1) տիպի մետրիկա՝ փոխանցելով մետրիկայի id-ն, տվյալները հաշվարկող ֆունկցիան և նկարագրությունը։ 


**Պարամետրեր**
