---
title: LoginService դաս
---

## Ներածություն

LoginService դասը նախատեսված է 8X սերվիսին միացման ժամանակ նույնականացնելու համար։ 
Դասը նաև ապահովում է նույնականացման [թոքենի](LoginService/Methods/GetToken.md) արդի լինելը։

8X սերվիսին որևէ ծրագրից միանալու համար անհրաժեշտ է նախապես սահմանել [API Client](../api_client.md)։

Նույնականացումից հետո օգտագործվում է [ApiClient](../types/ApiClient.md) ստեղծելու և դրա միջոցով սերվիսին հարցումներ կատարելու համար։

Տե՛ս օգտագործման [օրինակը](../examples/LoginService.md)։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AuthenticateAsync(string, HttpClient, ILogger, short, string, string, string, CancellationToken)](LoginService/Methods/AuthenticateAsync.md#loginserviceauthenticateasyncstring-httpclient-ilogger-short-string-string-string-cancellationtoken-մեթոդ) | Նույնականացնում է ինտեգրման ծրագրի համար ստեղծված բանալիով ([API Client](../api_client.md))։ |
| [AuthenticateAsync(string, HttpClient, ILogger, X509Certificate2, short, string, string, string, CancellationToken)](LoginService/Methods/AuthenticateAsync.md#loginserviceauthenticateasyncstring-httpclient-ilogger-x509certificate2-short-string-string-string-cancellationtoken-մեթոդ) | Նույնականացնում է օգտագործողի մուտքանունով և գաղտնաբառով, պահանջվում է սերտիֆիկատի առկայություն ([API Client](../api_client.md))։ |
| [GetToken(TimeSpan?)](LoginService/Methods/GetToken.md) | Նույնականացումից հետո վերադարձնում է ստեղծված թոքենը։ |
| [Logout()](LoginService/Methods/Logout.md) | Դուրս է հանում ընթացիկ օգտագործողին համակարգից, փակում օգտագործողի [սեսսիան](../../server_api/types/SessionInfo.md) և հեռացնում [սեսսիայի](../../server_api/types/SessionInfo.md) ընթացքում առաջացած ժամանակավոր ֆայլերը, ընդհատում է ընթացիկ առաջադրանքները։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AuthenticationMode](LoginService/Properties/AuthenticationMode.md) | Նույնականացումից հետո վերադարձնում է նույնականացման եղանակը։ |
| [IsLoggedIn](LoginService/Properties/IsLoggedIn.md) | Նույնականացումից հետո ցույց է տալիս, արդյոք նույնականացված է, թե ոչ։ |
| [Username](LoginService/Properties/Username.md) | Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի մուտքանունը։ |
| [Name](LoginService/Properties/Name.md) | Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի անունը։ |
| [IsAdmin](LoginService/Properties/IsAdmin.md) | Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի ադմինիստրատոր հանդիսանալու հայտանիշը։ |
| [DbName](LoginService/Properties/DbName.md) | Նույնականացումից հետո վերադարձնում է հիմնական տվյալների պահոցի անունը։ |
| [Server](LoginService/Properties/Server.md) | Նույնականացումից հետո վերադարձնում է [տվյալների պահոցը](LoginService/Properties/DbName.md) պարունակող սերվերի անունը։ |
| [SessionGuid](LoginService/Properties/SessionGuid.md) | Նույնականացումից հետո վերադարձնում է օգտագործողի համակարգ մուտք գործման արդյունքում բացված [սեսսիայի](../../server_api/types/SessionInfo.md) id-ն։ |
| [ServiceUrlData](LoginService/Properties/ServiceUrlData.md) | Նույնականացումից հետո վերադարձնում է սերվիսի միացման վերաբերյալ տվյալներ (Host Name, Port, Tls, Url)։ |
| [ServiceAddress](LoginService/Properties/ServiceAddress.md) | Նույնականացումից հետո վերադարձնում է սերվիսի հասցեն։ |
| [ConfigurationName](LoginService/Properties/ConfigurationName.md) | Նույնականացումից հետո վերադարձնում է [AuthenticateAsync](LoginService/Methods/AuthenticateAsync.md) կանչին փոխանցված համապատասխան պարամետրը։ |
| [Suid](LoginService/Properties/Suid.md) | Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի ներքին համարը (կոդ)։ |
| [TokenValidToUTC](LoginService/Properties/TokenValidToUTC.md) | Նույնականացումից հետո վերադարձնում է ստեղծված թոքենի վավերականության ավարտի ամսաթիվը/ժամանակը։ |
| [RefreshTokenValidToUTC](LoginService/Properties/RefreshTokenValidToUTC.md) | Նույնականացումից հետո վերադարձնում է ստեղծված թարմացման թոքենի վավերականության ավարտի ամսաթիվը/ժամանակը։ |
| [MustChangePassword](LoginService/Properties/MustChangePassword.md) | Նույնականացումից հետո ցույց է տալիս, արդյոք օգտագործողը պարտավոր է փոխել իր գաղտնաբառը։ |
| [PasswordState](LoginService/Properties/PasswordState.md) | Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի գաղտնաբառի վիճակը։ |

