---
title: IExtensionMeterProvider.Configure(IParametersService, Meter) մեթոդ
---

```c#
public void Configure(IParametersService parametersService, Meter meter)
```

Այս մեթոդը նախատեսված է կազմակերպության սեփական նկարագրությունները պարունակող assembly-ում մետրիկաներ ստեղծելու, կոնֆիգուրացնելու համար՝ օգտագործելով [Meter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter) պարամետրը։

**Պարամետրեր**

| Անվանում | Տեսակ | Նկարագրություն |
|----------|----------|----------|
| parametersService | [IParametersService](../../services/IParametersService.md) | [IParametersService](../../services/IParametersService.md) դասի օբյեկտ: |
| meter | [Meter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter) | [Meter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter) դասի օբյեկտ, որը հնարավորություն է տալիս ապահովել մետրիկաների հետ աշխատանքը (ստեղծել, կոնֆիգուրացնել․․․)։ |