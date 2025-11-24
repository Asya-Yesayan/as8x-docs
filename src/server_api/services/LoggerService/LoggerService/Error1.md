---
title: LoggerService.Error(ILogger, string, object[]) մեթոդ
---

```c#
public void Error(ILogger logger, 
                  string messageTemplate, 
                  params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրությունը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրությունում տեղադրվող արժեքների բազմությունը։ |
