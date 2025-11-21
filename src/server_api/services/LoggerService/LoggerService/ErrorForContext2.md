---
title: LoggerService.ErrorForContext(string, object, Exception, string) մեթոդ
---

```c#
public void ErrorForContext(string contextPropertyName, 
                            object contextValue, 
                            Exception exception, 
                            string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| contextPropertyName | string | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#correlation), որը գրանցվում է այս պարամետրում նշված անունով թեգում։ |
| contextValue | object | - | Լոգի իրադարձության [կոնտեքսում](https://github.com/serilog/serilog/wiki/Writing-Log-Events#correlation) գրանցվող արժեքը։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |
