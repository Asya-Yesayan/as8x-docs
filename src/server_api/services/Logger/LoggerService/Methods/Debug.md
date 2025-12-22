---
title: LoggerService.Debug(ILogger, string) մեթոդ
---

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
