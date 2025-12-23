---
title: LoginService.AuthenticateAsync մեթոդ
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AuthenticateAsync(string, HttpClient, ILogger, short, string, string, string, CancellationToken)](#loginserviceauthenticateasyncstring-httpclient-ilogger-short-string-string-string-cancellationtoken-մեթոդ) | Նույնականացնում է ինտեգրման ծրագրի համար ստեղծված բանալիով ([API Client](../../../api_client.md))։ |
| [AuthenticateAsync(string, HttpClient, ILogger, X509Certificate2, short, string, string, string, CancellationToken)](#loginserviceauthenticateasyncstring-httpclient-ilogger-x509certificate2-short-string-string-string-cancellationtoken-մեթոդ)| Նույնականացնում է օգտագործողի մուտքանունով և գաղտնաբառով, պահանջվում է սերտիֆիկատի առկայություն ([API Client](../../../api_client.md))։ |

### LoginService.AuthenticateAsync(string, HttpClient, ILogger, short, string, string, string, CancellationToken) մեթոդ

```c#
public Task<Exception> AuthenticateAsync(string serviceAddress, 
                                         HttpClient httpClient, 
                                         ILogger logger, 
                                         short apiClientId, 
                                         string secret, 
                                         string username, 
                                         string configurationName = "", 
                                         CancellationToken cancellationToken = default)
```

Նույնականացնում է ինտեգրման ծրագրի համար ստեղծված բանալիով ([API Client](../../../api_client.md))։

Նույնականացման ձախողման դեպքում վերադարձնում է առաջացած սխալը, հակառակ դեպքում վերադարձնում է null:

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| serviceAddress  | string               | -              | 8X սերվիսի հասցեն։ |
| httpClient      | HttpClient           | -              | [HttpClient](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient) դասի օբյեկտ, որը նախատեսված է նույնականացման և նույնականացումից հետո Http հարցումներ կատարելու համար է։ Օբյեկտը հարկավոր է բաց պահել քանի դեռ կատարվում են հարցումներ։ |
| logger          | ILogger              | -              | [ILogger](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.ilogger) դասի օբյեկտ, որը օգտագործվում է հարցումների և արդյունքների լոգավորման համար լոգավորման համար։ Կարող է փոխանցվել `null`։  |
| apiClientId     | short                | -              | Կլիենտ ծրագրի id-ն (API Client Id)։ |
| secret          | string               | -              | Կլիենտ ծրագրի բանալի (API Client Secret)։ |
| username        | string               | -              | Օգտագործողի մուտքանունը (ներքին անունը)։ |
| configurationName | string               | ""             | Այս պարամետրի արժեքը փոխանցվում է [ConfigurationName](../Properties/ConfigurationName.md) հատկությանը: Այն ինֆորմատիվ բնույթ է կրում։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../../Examples/LoginService.md)։

### LoginService.AuthenticateAsync(string, HttpClient, ILogger, X509Certificate2, short, string, string, string, CancellationToken) մեթոդ

```c#
public Task<Exception> AuthenticateAsync(string serviceAddress, 
                                         HttpClient httpClient, 
                                         ILogger logger, 
                                         X509Certificate2 x509Certificate2, 
                                         short apiClientId, 
                                         string username, 
                                         string password, 
                                         string configurationName = "", 
                                         CancellationToken cancellationToken = default)
```

Նույնականացնում է օգտագործողի մուտքանունով և գաղտնաբառով, պահանջվում է սերտիֆիկատի առկայություն ([API Client](../../../api_client.md))։

Նույնականացման ձախողման դեպքում վերադարձնում է առաջացած սխալը, հակառակ դեպքում վերադարձնում է null:

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| serviceAddress  | string               | -              | 8X սերվիսի հասցեն։ |
| httpClient      | HttpClient           | -              | [HttpClient](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient) դասի օբյեկտ, որը նախատեսված է նույնականացման և նույնականացումից հետո Http հարցումներ կատարելու համար է։ Օբյեկտը հարկավոր է բաց պահել քանի դեռ կատարվում են հարցումներ։ |
| logger          | ILogger              | -              |  [ILogger](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.ilogger) դասի օբյեկտ, որը օգտագործվում է հարցումների և արդյունքների լոգավորման համար լոգավորման համար։  Կարող է փոխանցվել `null`։ |
| x509Certificate2 | X509Certificate2     | -              | Սերտիֆիկատ, որն օգտագործվում է կլիենտ ծրագրի նույնականացման համար: |
| apiClientId     | short                | -              | Կլիենտ ծրագրի id-ն (API Client Id)։ |
| username        | string               | -              | Օգտագործողի մուտքանունը։ |
| password        | string               | -              | Օգտագործողի գաղտնաբառը։ |
| configurationName | string               | ""             | Այս պարամետրի արժեքը փոխանցվում է [ConfigurationName](../Properties/ConfigurationName.md) հատկությանը: Այն ինֆորմատիվ բնույթ է կրում։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |
