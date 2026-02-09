---
title: ErrorForContext
nav_exclude: true
---

# LoggerService.ErrorForContext մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [ErrorForContext(string)](#loggerserviceerrorforcontextstring-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts): |
| [ErrorForContext(string, object[])](#loggerserviceerrorforcontextstring-object-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts): |
| [ErrorForContext(string, object, Exception, string)](#loggerserviceerrorforcontextstring-object-exception-string-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts): |
| [ErrorForContext(Exception, string, object[])](#loggerserviceerrorforcontextexception-string-object-մեթոդ)| Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts): |

### LoggerService.ErrorForContext(string) մեթոդ

```c#
public void ErrorForContext<T>(string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| T | T | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts), որը գրանցվում է SourceContext թեգում։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |

### LoggerService.ErrorForContext(string, object[]) մեթոդ

```c#
public void ErrorForContext<T>(string messageTemplate, 
                               params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| T | T | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts), որը գրանցվում է SourceContext թեգում։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրությունը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրությունում տեղադրվող արժեքների բազմությունը։ |

### LoggerService.ErrorForContext(string, object, Exception, string) մեթոդ

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

### LoggerService.ErrorForContext(Exception, string, object[]) մեթոդ

```c#
public void ErrorForContext<T>(Exception exception, 
                               string messageTemplate, 
                               params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| T | T | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts), որը գրանցվում է SourceContext թեգում։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրությունը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրությունում տեղադրվող արժեքների բազմությունը։ |

**Օրինակ**

```c#
public void ProcessOrder(int orderId)
{
    try
    {
        // Some logic
        throw new Exception("Database connection failed.");
    }
    catch (Exception ex)
    {
        this.loggerService.ErrorForContext<OrderService>(
            ex,
            "Error processing order {OrderId}",
            orderId);
    }
}
```