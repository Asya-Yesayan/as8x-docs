---
title: DebugForContext
nav_exclude: true
---

# LoggerService.DebugForContext մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [DebugForContext(string)](#loggerservicedebugforcontextstring-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts): |
| [DebugForContext(string, object[])](#loggerservicedebugforcontextstring-object-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts): |
| [DebugForContext(Exception, string)](#loggerservicedebugforcontextexception-string-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts): |
| [DebugForContext(Exception, string, object[])](#loggerservicedebugforcontextexception-string-object-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts): |
| [DebugForContext(string, object, Exception, string)](#loggerservicedebugforcontextstring-object-exception-string-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts): |

### LoggerService.DebugForContext(string) մեթոդ

```c#
public void DebugForContext<T>(string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| T | T | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts), որը գրանցվում է SourceContext թեգում։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |

**Օրինակ**

```c#
this.loggerService.DebugForContext<PaymentService>("Payment initialized.");
```

### LoggerService.DebugForContext(string, object[]) մեթոդ

```c#
public void DebugForContext<T>(string messageTemplate, params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| T | T | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts), որը գրանցվում է SourceContext թեգում։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրությունը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրությունում տեղադրվող արժեքների բազմությունը։ |

**Օրինակ**

```c#
this.loggerService.DebugForContext<UserController>("Request {Method} {Path}", "POST", "/api/User");
```

### LoggerService.DebugForContext(Exception, string) մեթոդ

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

### LoggerService.DebugForContext(Exception, string, object[]) մեթոդ

```c#
public void DebugForContext<T>(Exception exception, 
                               string messageTemplate, 
                               params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| T | T | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts), որը գրանցվում է SourceContext թեգում։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրությունը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրությունում տեղադրվող արժեքների բազմությունը։ |

### LoggerService.DebugForContext(string, object, Exception, string) մեթոդ

```c#
public void DebugForContext(string contextPropertyName, 
                            object contextValue, 
                            Exception exception, 
                            string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| contextPropertyName | string | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#correlation), որը գրանցվում է այս պարամետրում նշված անունով թեգում։ |
| contextValue | object | - | Լոգի իրադարձության [կոնտեքսում](https://github.com/serilog/serilog/wiki/Writing-Log-Events#correlation) գրանցվող արժեքը։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |