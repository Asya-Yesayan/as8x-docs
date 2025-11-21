---
title: LoggerService.InformationForContext մեթոդ
---

```c#
public void InformationForContext<T>(string messageTemplate, 
                                     params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| T | T | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts), որը գրանցվում է SourceContext թեգում։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրության ձևանմուշը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրության ձևանմուշում տեղադրվող արժեքների բազմությունը։ |

**Օրինակ**

```c#
this.loggerService.InformationForContext<OrderService>(
            "Order {OrderId} processed with total {Total}", 
            orderId, total);
```
