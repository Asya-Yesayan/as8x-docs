---
title: LoggerService.Information(ILogger, string) մեթոդ
---

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
