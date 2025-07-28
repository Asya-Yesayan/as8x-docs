---
title: LoginService.AuthenticateAsync(string, HttpClient, ILogger, short, string, string, string, CancellationToken) մեթոդ
---

```c#
public Task<Exception> AuthenticateAsync(string serviceAddress, HttpClient httpClient, 
                                         ILogger logger, short apiClientId, string secret, 
                                         string username, string configurationName = "", 
                                         CancellationToken cancellationToken = default)
```

Նույնականացնում է ինտեգրման ծրագրի համար ստեղծված բանալիով ([API Client](../../api_client.md))։

Նույնականացման ձախողման դեպքում վերադարձնում է առաջացած սխալը, հակառակ դեպքում վերադարձնում է null:

**Պարամետրեր**

* `serviceAddress` - 8X սերվիսի հասցեն։
* `httpClient` - [HttpClient](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient) դասի օբյեկտ, որը նախատեսված է նույնականացման և նույնականացումից հետո Http հարցումներ կատարելու համար է։
  Օբյեկտը հարկավոր է բաց պահել քանի դեռ կատարվում են հարցումներ։
* `logger` - [ILogger](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.ilogger) դասի օբյեկտ, որը օգտագործվում է հարցումների և արդյունքների լոգավորման համար լոգավորման համար։  
  Կարող է փոխանցվել `null`։
* `apiClientId` - Կլիենտ ծրագրի id-ն (API Client Id)։
* `secret` - Կլիենտ ծրագրի բանալի (API Client Secret)։
* `username` - Օգտագործողի մուտքանունը (ներքին անունը)։
* `configurationName` - Այս պարամետրի արժեքը փոխանցվում է [ConfigurationName](ConfigurationName.md) հատկությանը:
  Այն ինֆորմատիվ բնույթ է կրում։
* `cancellationToken` - Ընդհատման օբյեկտ։

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../examples/LoginService.md)։