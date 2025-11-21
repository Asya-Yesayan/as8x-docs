---
title: LoggerService.DebugForContext մեթոդ
---

```c#
public void DebugForContext<T>(string messageTemplate, params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| T | T | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts), որը գրանցվում է SourceContext թեգում։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրության ձևանմուշը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրության ձևանմուշում տեղադրվող արժեքների բազմությունը։ |

**Օրինակ**

```c#
this.loggerService.DebugForContext<UserController>("Request {Method} {Path}", "POST", "/api/User");
```
