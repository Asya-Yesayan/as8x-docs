---
title: Information
nav_exclude: true
---

# LoggerService.Information մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Information(ILogger, string)](#loggerserviceinformationilogger-string-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով։ |
| [Information(ILogger, string, object[])](#loggerserviceinformationilogger-string-object-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով։ |

### LoggerService.Information(ILogger, string) մեթոդ

```c#
public void Information(ILogger logger, string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |

**Օրինակ**

```c#
this.loggerService.Information(Log.Logger, "Configuration loaded successfully.");
```

### LoggerService.Information(ILogger, string, object[]) մեթոդ

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