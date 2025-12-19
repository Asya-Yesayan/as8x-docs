---
title: MeterManager.TryConfigure(IParametersService) մեթոդ
---

```c#
public void TryConfigure(IParametersService parametersService)
```

[OTLPENABLED](../../../../extensions/types/args/TemplateSubstitutionEventArgs/Properties/Parameters.md) պարամետրի **true** արժեքի դեպքում կանչում է [Configure](Configure.md) մեթոդը, որը ստեղծում և կոնֆիգուրացնում է համակարգի հիմնական մետրիկաները։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| parametersService | IParametersService   | -              | [IParametersService](../../../../server_api/services/IParametersService.md) դասի օբյեկտ։ |
