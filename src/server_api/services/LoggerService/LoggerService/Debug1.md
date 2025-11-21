---
title: LoggerService.Debug(ILogger, string, object[]) մեթոդ
---

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
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրության ձևանմուշը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրության ձևանմուշում տեղադրվող արժեքների բազմությունը։ |

**Օրինակ**

```c#
public void ProcessPayment(string user, decimal amount)
{
    this.loggerService.Debug(Log.Logger, "ProcessPayment called for user {User} with amount {Amount}", user, amount);
}
```
