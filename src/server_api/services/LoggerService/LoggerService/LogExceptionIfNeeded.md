---
title: LoggerService.LogExceptionIfNeeded(Exception) մեթոդ
---

```c#
public void LogExceptionIfNeeded(Exception exception)
```

Լոգավորում է տրված սխալ անհրաժեշտ լոգավորման մակարդակով։ InvisibleException, UnloggedException տեսակի սխալները չեն լոգավորվում։

RESTException տեսակի սխալները լոգավորվում են Error կամ Debug լոգավորման մակարդակով՝ կախված սխալի Status code-ից, իսկ մնացած բոլոր սխալները լոգավորվում են Error լոգավորման մակարդակով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| exception | Exception | - | Լոգում գրանցվող [սխալը](https://learn.microsoft.com/en-us/dotnet/api/system.exception)։ |
