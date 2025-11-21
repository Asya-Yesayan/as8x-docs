---
title: LoggerService.Error(ILogger, Exception, string, object[]) մեթոդ
---

```c#
public void Error(ILogger logger, 
                  Exception exception, 
                  string messageTemplate, 
                  params object[] propertyValues)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։

**Պարամետրեր**

| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող [հաղորդագրության ձևանմուշը](https://github.com/serilog/serilog/wiki/Writing-Log-Events#message-template-syntax)։ |
| propertyValues | object[] | - | Հաղորդագրության ձևանմուշում տեղադրվող արժեքների բազմությունը։ |
