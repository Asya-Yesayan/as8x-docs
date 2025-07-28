---
title: LoginService.AuthenticateAsync(string, HttpClient, ILogger, X509Certificate2, short, string, string, string, CancellationToken) մեթոդ
---

```c#
public Task<Exception> AuthenticateAsync(string serviceAddress, HttpClient httpClient, 
                                         ILogger logger, X509Certificate2 x509Certificate2, 
                                         short apiClientId, string username, string password, 
                                         string configurationName = "", 
                                         CancellationToken cancellationToken = default)
```

Նույնականացնում է օգտագործողի մուտքանունով և գաղտնաբառով, պահանջվում է սերտիֆիկատի առկայություն ([API Client](../../api_client.md))։

Նույնականացման ձախողման դեպքում վերադարձնում է առաջացած սխալը, հակառակ դեպքում վերադարձնում է null:

**Պարամետրեր**

* `serviceAddress` - 8X սերվիսի հասցեն։
* `httpClient` - [HttpClient](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient) դասի օբյեկտ, որը նախատեսված է նույնականացման և նույնականացումից հետո Http հարցումներ կատարելու համար է։
  Օբյեկտը հարկավոր է բաց պահել քանի դեռ կատարվում են հարցումներ։
* `logger` - [ILogger](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.ilogger) դասի օբյեկտ, որը օգտագործվում է հարցումների և արդյունքների լոգավորման համար լոգավորման համար։  
  Կարող է փոխանցվել `null`։
* `x509Certificate2` - Սերտիֆիկատ, որն օգտագործվում է կլիենտ ծրագրի նույնականացման համար:
* `apiClientId` - Կլիենտ ծրագրի id-ն (API Client Id)։
* `username` - Օգտագործողի մուտքանունը։
* `password` - Օգտագործողի գաղտնաբառը։
* `configurationName` - Այս պարամետրի արժեքը փոխանցվում է [ConfigurationName](ConfigurationName.md) հատկությանը:
  Այն ինֆորմատիվ բնույթ է կրում։
* `cancellationToken` - Ընդհատման օբյեկտ։
