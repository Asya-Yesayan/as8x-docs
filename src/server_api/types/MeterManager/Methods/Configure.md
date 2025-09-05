---
title: MeterManager.Configure(IParametersService) մեթոդ
---

```c#
protected virtual void Configure(IParametersService parametersService)
```

Լռությամբ ստեղծում և կոնֆիգուրացնում է համակարգի հիմնական մետրիկաները ([Histogram](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.histogram-1)-ներ, [Gauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.observablegauge-1)-ներ, [UpDownCounter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.updowncounter-1)-ներ)։

Հավաքագրվող մետրիկաների ցուցակին ծանոթանալու համար տե՛ս հետևյալ [հղումը](../../otlp_parameters.md):

**Պարամետրեր**

| Անվանում | Նկարագրություն |
|--|--|
| parametersService | [IParametersService](../../../../server_api/services/IParametersService.md) դասի օբյեկտ։ |
