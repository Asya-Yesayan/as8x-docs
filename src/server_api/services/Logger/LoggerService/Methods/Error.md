---
title: Error
nav_exclude: true
---

# LoggerService.Error մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Error(ILogger, string)](#loggerserviceerrorilogger-string-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, string, object[])](#loggerserviceerrorilogger-string-object-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, Exception, string)](#loggerserviceerrorilogger-exception-string-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, Exception, string, object[])](#loggerserviceerrorilogger-exception-string-object-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |

### LoggerService.Error(ILogger, string) մեթոդ

```c#
public void Error(ILogger logger, 
                  string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |

### LoggerService.Error(ILogger, string, object[]) մեթոդ

```c#
public void Error(ILogger logger, 
                  string messageTemplate, 
                  params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրությունը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրությունում տեղադրվող արժեքների բազմությունը։ |

### LoggerService.Error(ILogger, Exception, string) մեթոդ

```c#
public void Error(ILogger logger, 
                  Exception exception, 
                  string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |

### LoggerService.Error(ILogger, Exception, string, object[]) մեթոդ

```c#
public void Error(ILogger logger, 
                  Exception exception, 
                  string messageTemplate, 
                  params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրությունը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրությունում տեղադրվող արժեքների բազմությունը։ |