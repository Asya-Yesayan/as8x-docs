---
title: LoggerService.InformationForContext մեթոդ
---

```c#
public void InformationForContext<T>(string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| T | T | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts), որը գրանցվում է SourceContext թեգում։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ | 

**Օրինակ**

```c#
this.loggerService.InformationForContext<OrderService>(
            "OrderService started processing an order.");
```
