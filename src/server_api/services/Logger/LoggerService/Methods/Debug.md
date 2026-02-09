---
title: Debug
nav_exclude: true
---

# LoggerService.Debug մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Debug(ILogger, string)](#loggerservicedebugilogger-string-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, string, object[])](#loggerservicedebugilogger-string-object-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, Exception, string)](#loggerservicedebugilogger-exception-string-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, Exception, string, object[])](#loggerservicedebugilogger-exception-string-object-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |

### LoggerService.Debug(ILogger, string) մեթոդ

```c#
public void Debug(ILogger logger, 
                  string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |

**Օրինակ**

```c#
this.loggerService.Debug(Log.Logger, "Application started in debug mode.");
```

### LoggerService.Debug(ILogger, string, object[]) մեթոդ

```c#
public void Debug(ILogger logger, 
                  string messageTemplate, 
                  params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրությունը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրությունում տեղադրվող արժեքների բազմությունը։ |

**Օրինակ**

```c#
public void ProcessPayment(string user, decimal amount)
{
    this.loggerService.Debug(Log.Logger, "ProcessPayment called for user {User} with amount {Amount}", user, amount);
}
```

### LoggerService.Debug(ILogger, Exception, string) մեթոդ

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

### LoggerService.Debug(ILogger, Exception, string, object[]) մեթոդ

```c#
public void Debug(ILogger logger, 
                  Exception exception, 
                  string messageTemplate, 
                  params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրությունը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրությունում տեղադրվող արժեքների բազմությունը։ |