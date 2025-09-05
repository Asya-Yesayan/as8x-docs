---
title: MeterManager.TryConfigure(IParametersService) մեթոդ
---

```c#
public void TryConfigure(IParametersService parametersService)
```

[OTLPENABLED](../../otlp_parameters.md#otlpenabled) պարամետրի **true** արժեքի դեպքում կանչում է [Configure](Configure.md) մեթոդը, որը ստեղծում և կոնֆիգուրացնում է համակարգի հիմնական մետրիկաները։

**Պարամետրեր**

| Անվանում | Նկարագրություն |
|--|--|
| parametersService | [IParametersService](../../../../server_api/services/IParametersService.md) դասի օբյեկտ։ |
