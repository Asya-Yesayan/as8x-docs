---
title: LoggerService սերվիս
---
## Ներածություն

Սերվիսը տալիս է լոգերի գրանցման հնարավորություն՝ տարբեր լոգավորման մակարդակներով, կոնտեքստով և թեգերով։ Գրանցվող լոգերում ավելացվում են **ApiClientId**, **UserId** թեգերը, իսկ առաջադրանքների կատարման ընթացքում կանչելիս նաև **JobExecutionId**, **JobCode**, **JobStep**, **JobStepName** թեգերը։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [LogExceptionIfNeeded(Exception)](LoggerService/LogExceptionIfNeeded.md) | Լոգավորում է տրված սխալ անհրաժեշտ լոգավորման մակարդակով։ InvisibleException, UnloggedException տեսակի սխալները չեն լոգավորվում։ |
| [Debug(ILogger, string)](LoggerService/Debug.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, string, object[])](LoggerService/Debug1.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, Exception, string)](LoggerService/Debug2.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [Debug(ILogger, Exception, string, object[])](LoggerService/Debug3.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով։ |
| [DebugForContext(string)](LoggerService/DebugForContext.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [DebugForContext(string, object[])](LoggerService/DebugForContext1.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [DebugForContext(Exception, string)](LoggerService/DebugForContext2.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [DebugForContext(Exception, string, object[])](LoggerService/DebugForContext3.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [Error(ILogger, string)](LoggerService/Error.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, string, object[])](LoggerService/Error1.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, Exception, string)](LoggerService/Error2.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [Error(ILogger, Exception, string, object[])](LoggerService/Error3.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով։ |
| [ErrorForContext(string)](LoggerService/ErrorForContext.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [ErrorForContext(string, object[])](LoggerService/ErrorForContext1.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [Information(ILogger, string)](LoggerService/Information.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով։ |
| [Information(ILogger, string, object[])](LoggerService/Information1.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով։ |
| [DebugForContext(string, object, Exception, string)](LoggerService/DebugForContext4.md) | Գրանցում է լոգի իրադարձություն՝ Debug լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [ErrorForContext(string, object, Exception, string)](LoggerService/ErrorForContext2.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [ErrorForContext(Exception, string, object[])](LoggerService/ErrorForContext3.md) | Գրանցում է լոգի իրադարձություն՝ Error լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [InformationForContext(string, object, string)](LoggerService/InformationForContext2.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#correlation)։ |
| [InformationForContext(string)](LoggerService/InformationForContext.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |
| [InformationForContext(string, object[])](LoggerService/InformationForContext1.md) | Գրանցում է լոգի իրադարձություն՝ Information լոգավորման մակարդակով և տրված [կոնտեքստով](https://github.com/serilog/serilog/wiki/Writing-Log-Events#source-contexts)։ |