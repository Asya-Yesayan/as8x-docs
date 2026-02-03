---
title: Error(ILogger, Exception, string)
parent: "Մեթոդներ"
grand_parent: "LoggerService"
---

# LoggerService սերվիս

## Ներածություն

Սերվիսը տալիս է լոգերի գրանցման հնարավորություն՝ տարբեր լոգավորման մակարդակներով, կոնտեքստով և թեգերով։ Գրանցվող լոգերում ավելացվում են **ApiClientId**, **UserId** թեգերը:

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [LogExceptionIfNeeded(Exception)](LoggerService/Methods/LogExceptionIfNeeded.md) | Լոգավորում է տրված սխալ անհրաժեշտ լոգավորման մակարդակով։ InvisibleException, UnloggedException տեսակի սխալները չեն լոգավորվում։ |
| [Debug(ILogger, string)](LoggerService/Methods/Debug.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, string, object[])](LoggerService/Methods/Debug1.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, Exception, string)](LoggerService/Methods/Debug2.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, Exception, string, object[])](LoggerService/Methods/Debug3.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [DebugForContext(string)](LoggerService/Methods/DebugForContext.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [DebugForContext(string, object[])](LoggerService/Methods/DebugForContext1.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [DebugForContext(Exception, string)](LoggerService/Methods/DebugForContext2.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [DebugForContext(Exception, string, object[])](LoggerService/Methods/DebugForContext3.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [Error(ILogger, string)](LoggerService/Methods/Error.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, string, object[])](LoggerService/Methods/Error1.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, Exception, string)](LoggerService/Methods/Error2.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, Exception, string, object[])](LoggerService/Methods/Error3.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [ErrorForContext(string)](LoggerService/Methods/ErrorForContext.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [ErrorForContext(string, object[])](LoggerService/Methods/ErrorForContext1.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [Information(ILogger, string)](LoggerService/Methods/Information.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով։ |
| [Information(ILogger, string, object[])](LoggerService/Methods/Information1.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով։ |
| [DebugForContext(string, object, Exception, string)](LoggerService/Methods/DebugForContext4.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [ErrorForContext(string, object, Exception, string)](LoggerService/Methods/ErrorForContext2.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [ErrorForContext(Exception, string, object[])](LoggerService/Methods/ErrorForContext3.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [InformationForContext(string, object, string)](LoggerService/Methods/InformationForContext2.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#correlation)։ |
| [InformationForContext(string)](LoggerService/Methods/InformationForContext.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [InformationForContext(string, object[])](LoggerService/Methods/InformationForContext1.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |"

---

# LoggerService.Error(ILogger, Exception, string) մեթոդ

```c#
public void Error(ILogger logger, 
                  Exception exception, 
                  string messageTemplate)
```

Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| logger | ILogger | - | ILogger դասի օբյեկտ, որի միջոցով կատարվում է լոգավորումը։ |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
| messageTemplate | string | - | Լոգի իրադարձությունում գրանցվող հաղորդագրությունը։ |
