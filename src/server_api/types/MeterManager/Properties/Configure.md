---
title: MeterManager.Configure(IParametersService) մեթոդ
---

```c#
protected virtual void Configure(IParametersService parametersService)
```

Լռությամբ ստեղծում է մետրիկաներ ([Histogram](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.histogram-1)-ներ, [Gauge](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.observablegauge-1)-ներ, [UpDownCounter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.updowncounter-1)-ներ), որոնք գրանցում են՝
* [տվյալների աղբյուրների](../../../../server_api/definitions/ds.md) կատարման տևողությունները ([OTLPDSMETERENABLED](../../../../server_api/types/otlp_parameters.md#otlpdsmeterenabled) պարամետրի **true** արժեքի դեպքում),
* [տվյալների մշակման հարցումների](../../../../server_api/definitions/dpr.md) (DPR) կատարման տևողությունները ([OTLPDPRMETERENABLED](../../../../server_api/types/otlp_parameters.md#otlpdprmeterenabled) պարամետրի **true** արժեքի դեպքում),
* գրանցված [փաստաթղթերի](../../../../server_api/definitions/document.md) քանակը և գրանցման տևողությունները ([OTLPDOCSMETERENABLED](../../../../server_api/types/otlp_parameters.md#otlpdocsmeterenabled) պարամետրի **true** արժեքի դեպքում),
* քեշավորվող փաստաթղթերի ([LiteDocument](../../../../server_api/types/LiteDocument.md), [RODocument](../../../../server_api/types/RODocument.md)) քանակը ([OTLP:Metrics:CachedItemsCountEnabled](../../../../project/appsettings_json.md#otlp) կոնֆիգուրացիայի **true** արժեքի դեպքում),
* հերթում սպասող, կատարվող և ավարտված երկար տևող հարցումների քանակը ([OTLPPROCMETERENABLED](../../../../server_api/types/otlp_parameters.md#otlpprocmeterenabled) պարամետրի **true** արժեքի դեպքում)։

**Պարամետրեր**

* `parametersService` - [IParametersService](../../../../server_api/services/IParametersService.md) դասի օբյեկտ, որը արժեքավորվում է ավտոմատ կերպով։
