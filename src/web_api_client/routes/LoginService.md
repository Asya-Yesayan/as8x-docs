---
title: LoginService դաս
---

## Ներածություն

LoginService դասը նախատեսված է 8X սերվիսին միացման ժամանակ նույնականացնելու համար։ 
Դասը նաև ապահովում է նույնականացման [թոքենի](LoginService/GetToken.md) արդի լինելը։

8X սերվիսին որևէ ծրագրից միանալու համար անհրաժեշտ է նախապես սահմանել [API Client](../api_client.md)։

Նույնականացումից հետո օգտագործվում է [ApiClient](../types/ApiClient.md) ստեղծելու և դրա միջոցով սերվիսին հարցումներ կատարելու համար։

Տե՛ս օգտագործման [օրինակը](../examples/LoginService.md)։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AuthenticateAsync](LoginService/AuthenticateAsync.md) | Նույնականացնում է ինտեգրման ծրագրի համար ստեղծված բանալիով ([API Client](../api_client.md))։ |
| [AuthenticateAsync](LoginService/AuthenticateAsync1.md) | Նույնականացնում է օգտագործողի մուտքանունով և գաղտնաբառով, պահանջվում է սերտիֆիկատի առկայություն ([API Client](../api_client.md))։ |
| [GetToken](LoginService/GetToken.md) | Նույնականացումից հետո վերադարձնում է ստեղծված թոքենը։ |
| [Logout](LoginService/Logout.md) | Դուրս է հանում ընթացիկ օգտագործողին համակարգից, փակում օգտագործողի [սեսսիան](../../server_api/types/SessionInfo.md) և հեռացնում [սեսսիայի](../../server_api/types/SessionInfo.md) ընթացքում առաջացած ժամանակավոր ֆայլերը, ընդհատում է ընթացիկ առաջադրանքները։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AuthenticationMode](LoginService/AuthenticationMode.md) | Նույնականացումից հետո վերադարձնում է նույնականացման եղանակը։ |
| [IsLoggedIn](LoginService/IsLoggedIn.md) | Նույնականացումից հետո ցույց է տալիս, արդյոք նույնականացված է, թե ոչ։ |
| [Username](LoginService/Username.md) | Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի մուտքանունը։ |
| [Name](LoginService/Name.md) | Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի անունը։ |
| [IsAdmin](LoginService/IsAdmin.md) | Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի ադմինիստրատոր հանդիսանալու հայտանիշը։ |
| [DbName](LoginService/DbName.md) | Նույնականացումից հետո վերադարձնում է հիմնական տվյալների պահոցի անունը։ |
| [Server](LoginService/Server.md) | Նույնականացումից հետո վերադարձնում է [տվյալների պահոցը](LoginService/DbName.md) պարունակող սերվերի անունը։ |
| [SessionGuid](LoginService/SessionGuid.md) | Նույնականացումից հետո վերադարձնում է օգտագործողի համակարգ մուտք գործման արդյունքում բացված [սեսսիայի](../../server_api/types/SessionInfo.md) id-ն։ |
| [ServiceUrlData](LoginService/ServiceUrlData.md) | Նույնականացումից հետո վերադարձնում է սերվիսի միացման վերաբերյալ տվյալներ (Host Name, Port, Tls, Url)։ |
| [ServiceAddress](LoginService/ServiceAddress.md) | Նույնականացումից հետո վերադարձնում է սերվիսի հասցեն։ |
| [ConfigurationName](LoginService/ConfigurationName.md) | Նույնականացումից հետո վերադարձնում է [AuthenticateAsync](ConfigurationName](LoginService/ConfigurationName.md) | Նույնականացումից հետո վերադարձնում է [AuthenticateAsync.md) կանչին փոխանցված համապատասխան պարամետրը։ |
| [Suid](LoginService/Suid.md) | Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի ներքին համարը (կոդ)։ |
| [TokenValidToUTC](LoginService/TokenValidToUTC.md) | Նույնականացումից հետո վերադարձնում է ստեղծված թոքենի վավերականության ավարտի ամսաթիվը/ժամանակը։ |
| [RefreshTokenValidToUTC](LoginService/RefreshTokenValidToUTC.md) | Նույնականացումից հետո վերադարձնում է ստեղծված թարմացման թոքենի վավերականության ավարտի ամսաթիվը/ժամանակը։ |
| [MustChangePassword](LoginService/MustChangePassword.md) | Նույնականացումից հետո ցույց է տալիս, արդյոք օգտագործողը պարտավոր է փոխել իր գաղտնաբառը։ |
| [PasswordState](LoginService/PasswordState.md) | Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի գաղտնաբառի վիճակը։ |

