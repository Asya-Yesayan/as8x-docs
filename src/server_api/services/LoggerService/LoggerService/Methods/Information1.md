---
title: LoggerService.Information(ILogger, string, object[]) մեթոդ
---

```c#
public void Information(ILogger logger, 
                        string messageTemplate, 
                        params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրությունը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրությունում տեղադրվող արժեքների բազմությունը։ |

**Օրինակ**

```c#
string configFile = "appsettings.json";
this.loggerService.Information(Log.Logger, "Configuration {ConfigFile} loaded successfully.", configFile);
```
