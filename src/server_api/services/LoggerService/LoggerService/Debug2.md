---
title: LoggerService.Debug(ILogger, Exception, string) մեթոդ
---

```c#
public void Debug(ILogger logger, 
                  Exception exception, 
                  string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |

**Օրինակ**

```c#
try
{
    // Some logic
    throw new FileNotFoundException("Config file missing.");
}
catch (Exception ex)
{
    this.loggerService.Debug(Log.Logger, ex, "Failed to load application configuration.");
}
```
