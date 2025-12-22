---
title: LoggerService.ErrorForContext(Exception, string, object[]) մեթոդ
---

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
