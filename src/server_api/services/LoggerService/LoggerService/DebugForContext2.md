---
title: LoggerService.DebugForContext մեթոդ
---

```c#
public void DebugForContext<T>(Exception exception, string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| T | T | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts), որը գրանցվում է SourceContext թեգում։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |
