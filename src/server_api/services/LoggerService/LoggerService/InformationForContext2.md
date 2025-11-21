---
title: LoggerService.InformationForContext(string, object, string) մեթոդ
---

```c#
public void InformationForContext(string contextPropertyName, 
                                  object contextValue, 
                                  string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#correlation)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| contextPropertyName | string | - | Լոգի իրադարձության [կոնտեքսը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#correlation), որը գրանցվում է այս պարամետրում նշված անունով թեգում։ |
| contextValue | object | - | Լոգի իրադարձության [կոնտեքսում](https://github.com/serilog/serilog/wiki/Writing-Log-Events#correlation) գրանցվող արժեքը։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |

**Օրինակ**

```c#
this.loggerService.InformationForContext("Order", order, "Order processed successfully.");
```
