---
title: LoginController.AuthenticateWithSecret(short, SecretAuthenticateRequest) մեթոդ
---

```c#
[HttpPost("WithSecret")]
[Authorize("ApiClientSecret")]
public Task<AuthenticateResponse> AuthenticateWithSecret([Required][FromHeader] short apiClientId,
                                                               [FromBody] SecretAuthenticateRequest request)
```

Նույնականացնում է այն օգտագործողին, որը ստեղծվել է բանալիով վավերացվող [Api կլիենտ](../../web_api_client/api_client.md) ծրագրի միջոցով։

Տե՛ս օգտագործման [օրինակը](https://www.postman.com/asya-01/armsoft/example/33237126-4bbeb85b-c497-4439-8f07-1943d228ba90)։

## Պարամետրեր

## Header պարամետրեր

| Անվանում | Տեսակ | **Պարտադիր/Ոչ պարտադիր** | **Նկարագրություն** |
| --- | --- | --- | --- |
| **apiClientId** | short | Պարտադիր | Այն [Api կլիենտ](../../web_api_client/api_client.md) ծրագրի id-ն, որում ստեղծվել է նույնականացվող օգտագործողը։  <br>Նշված id-ով կլիենտ ծրագրի բացակայության դեպքում առաջանում է սխալ։ |
| **x-api-key** | short | Պարտադիր | Նույնականացման բանալի անունը, որը նշվել է [Api կլիենտ](../../web_api_client/api_client.md) ստեղծելիս։ Արժեքը լրացնելուց պետք է նայել պատճենել ApiClientSecret նախդիրը։ Օրինակ՝ "ApiClientSecret ZSGQD3zUZeEy7RdRayZaywaS7KrSbO16MdsHyrjT6WK4vbUv2lxgLcweD1NqYYbFRCcxNrkNrQRXMAc4VIPwdq1vAq23kqdAiTSaGxc6zKekW3baem3dmWGUh679pPdOP6Q": |

## Body պարամետրեր

| Անվանում | Տեսակ | **Պարտադիր/Ոչ պարտադիր** | **Նկարագրություն** |
| --- | --- | --- | --- |
| Username | string | Ոչ պարտադիր | Օգտագործողի մուտքանունը։  <br>[Api կլիենտ](../../web_api_client/api_client.md) ծրագրի [մանիֆեստում](../../web_api_client/api_client.md#մանիֆեստ) **IsUsernameRequired** հայտանիշի **true** արժեքի և UserName-ի բացակայության դեպքում առաջանում է սխալ։  <br>Նշված չլինելու դեպքում օգտագործողի մուտքանուն համարվելու է [մանիֆեստի](../../web_api_client/api_client.md#մանիֆեստ) **Users** զանգվածի առաջին տարրը (կիրառելի է մանիֆեստում **IsUsernameRequired** հայտանիշի **false** արժեքի դեպքում)։ |
| RequestTime | DateTime? | Ոչ պարտադիր | Նույնականացման հարցման կատարման ամսաթիվը/ժամանակը։ |
| TimeZoneId | string | Ոչ պարտադիր | Այն [ժամային գոտու անունը](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones#time-zones), որից կատարվել է նույնականացման հարցումը (օրինակ՝ "Caucasus Standard Time", "SA Western Standard Time", ...)։ |
| LogComment | string | Ոչ պարտադիր | Բարեհաջող նույնականացման դեպքում [SYSLOG](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/SYSLOG.html) աղյուսակում գրանցվող հաղորդագրությունը։ |

## Վերադարձվող արժեք

Նույնականացված օգտագործողի տվյալները։

| Անվանում | Տեսակ | Նկարագրություն |
| --- | --- | --- |
| SUID | integer | Ներքին համարը (կոդ)։ |
| Username | string | Մուտքանունը։ |
| Name | string | Անունը։ |
| IsAdmin | bool | Ադմինիստրատոր հանդիսանալու հայտանիշ։ |
| DbName | string | Տվյալների պահոցի անունը, որին միացված է օգտագործողը։ |
| Server | string | Տվյալների պահոցը պարունակող սերվերի անունը։ |
| SessionGuid | guid | Օգտագործողի համակարգ մուտք գործման արդյունքում բացված [սեսսիայի](../../server_api/types/SessionInfo.md) id-ն։ |
| Token | string | Տոկեն, որը նախատեսված է օգտագործողի կողմից դեպի սերվիս api կանչերի նույնականացման համար։ |
| RefreshToken | string | Հիմնական տոկենի վավերականության ժամկետի լրացումից հետո տրվող թարմացման տոկենը։ |
| MustChangePassword | bool | Համակարգ մուտք գործելուց հետո օգտագործողը պետք է փոխի գաղտնաբառը, թե ոչ։ |
| PasswordState | integer | Գաղտնաբառի վիճակը։  <br>• 0 - Գաղտնաբառը վավեր է։  <br>• 1 - Գաղտնաբառը նշանակվել է ադմինիստրատորի կողմից և ենթակա է փոփոխման:  <br>• 2 - Գաղտնաբառը ժամկետանց է։ |
