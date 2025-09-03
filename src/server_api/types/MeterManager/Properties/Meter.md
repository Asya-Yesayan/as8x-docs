---
title: MeterManager.Meter հատկություն
---

```c#
protected internal Meter Meter { get; } = meterFactory.Create(Settings.GetServiceName());
```

Վերադարձնում է [Meter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter) դասի օբյեկտ, որը հնարավորություն է տալիս ապահովել մետրիկաների հետ աշխատանքը։
