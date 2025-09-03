---
title: MeterManager.TryConfigure(IParametersService) մեթոդ
---

```c#
public void TryConfigure(IParametersService parametersService)
```

[OTLPENABLED](../../otlp_parameters.md#otlpenabled) պարամետրի **true** արժեքի դեպքում կանչում է [Configure](Configure.md) մեթոդը, որը ստեղծում և կոնֆիգուրացնում է համակարգի հիմնական մետրիկաները ([Histogram](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.histogram-1)-ներ, [Gauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.observablegauge-1)-ներ, [UpDownCounter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.updowncounter-1)-ներ)։

**Պարամետրեր**

* `parametersService` - [IParametersService](../../../../server_api/services/IParametersService.md) դասի օբյեկտ։
