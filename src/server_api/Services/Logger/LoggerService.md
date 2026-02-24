---
title: LoggerService
parent: "Սերվիսներ"
nav_order: 2
has_toc: false
nav_exclude: true
---

# LoggerService սերվիս

## Ներածություն

Սերվիսը տալիս է լոգերի գրանցման հնարավորություն՝ տարբեր լոգավորման մակարդակներով, կոնտեքստով և թեգերով։ Գրանցվող լոգերում ավելացվում են **ApiClientId**, **UserId** թեգերը:

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [LogExceptionIfNeeded(Exception)](LoggerService/Methods/LogExceptionIfNeeded.md) | Լոգավորում է տրված սխալ անհրաժեշտ լոգավորման մակարդակով։ InvisibleException, UnloggedException տեսակի սխալները չեն լոգավորվում։ |
| [Debug(ILogger, string)](LoggerService/Methods/Debug.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, string, object[])](LoggerService/Methods/Debug.md#loggerservicedebugilogger-string-object-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, Exception, string)](LoggerService/Methods/Debug.md#loggerservicedebugilogger-exception-string-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, Exception, string, object[])](LoggerService/Methods/Debug.md#loggerservicedebugilogger-exception-string-object-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [DebugForContext(string)](LoggerService/Methods/DebugForContext.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [DebugForContext(string, object[])](LoggerService/Methods/DebugForContext.md#loggerservicedebugforcontextstring-object-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [DebugForContext(Exception, string)](LoggerService/Methods/DebugForContext.md#loggerservicedebugforcontextexception-string-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [DebugForContext(Exception, string, object[])](LoggerService/Methods/DebugForContext.md#loggerservicedebugforcontextexception-string-object-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [Error(ILogger, string)](LoggerService/Methods/Error.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, string, object[])](LoggerService/Methods/Error.md#loggerserviceerrorilogger-string-object-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, Exception, string)](LoggerService/Methods/Error.md#loggerserviceerrorilogger-exception-string-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, Exception, string, object[])](LoggerService/Methods/Error.md#loggerserviceerrorilogger-exception-string-object-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [ErrorForContext(string)](LoggerService/Methods/ErrorForContext.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [ErrorForContext(string, object[])](LoggerService/Methods/ErrorForContext.md#loggerservice.errorforcontext-string-object[]-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [Information(ILogger, string)](LoggerService/Methods/Information.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով։ |
| [Information(ILogger, string, object[])](LoggerService/Methods/Information.md#loggerserviceinformationilogger-string-object-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով։ |
| [DebugForContext(string, object, Exception, string)](LoggerService/Methods/DebugForContext.md#loggerservicedebugforcontextstring-object-exception-string-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [ErrorForContext(string, object[])](LoggerService/Methods/ErrorForContext.md#loggerserviceerrorforcontextstring-object-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [ErrorForContext(string, object, Exception, string)](LoggerService/Methods/ErrorForContext.md#loggerserviceerrorforcontextstring-object-exception-string-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [ErrorForContext(Exception, string, object[])](LoggerService/Methods/ErrorForContext.md#loggerserviceerrorforcontextexception-string-object-մեթոդ) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [InformationForContext(string)](LoggerService/Methods/InformationForContext.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |