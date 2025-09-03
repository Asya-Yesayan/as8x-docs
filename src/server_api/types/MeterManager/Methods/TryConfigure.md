---
title: MeterManager.TryConfigure(IParametersService) մեթոդ
---

```c#
public void TryConfigure(IParametersService parametersService)
```

Այս մեթոդը նախատեսված է մետրիկաների արտահանումը կազմակերպելու համար։ 

**Կարևոր**

Մետրիկաների արտահանումը տեղի է ունենում միայն [OTLPENABLED](../../../../server_api/types/otlp_parameters.md#otlpenabled) պարամետրի միացված լինելու դեպքում։

**Պարամետրեր**

* `parametersService` - [IParametersService](../../../../server_api/services/IParametersService.md) դասի օբյեկտ։
