---
title: LoginController.AuthenticateWithCertificate(CertificateAuthenticateRequest request) մեթոդ
---

```c#
[HttpPost("WithCertificate")]
public Task<CertificateAuthenticateResponse> AuthenticateWithCertificate([FromBody] CertificateAuthenticateRequest request)
```

Նույնականացնում է այն օգտագործողին, որը ստեղծվել է սերտիֆիկատով վավերացվող [Api կլիենտների](../../../Client/api_client.md) համար։

Տե՛ս օգտագործման [օրինակը](https://www.postman.com/asya-01/armsoft/example/33237126-d89ae17b-6323-4ef7-a123-b11f6a0d92e9)։

## Պարամետրեր

### Body պարամետրեր

| Անվանում | Տեսակ | **Պարտադիր/Ոչ պարտադիր** | **Նկարագրություն** |
| --- | --- | --- | --- |
| **ApiClientId** | short | Պարտադիր | Այն [Api կլիենտ](../../../Client/api_client.md) ծրագրի id-ն, որում ստեղծվել է նույնականացվող օգտագործողը։  <br>Նշված id-ով կլիենտ ծրագրի բացակայության դեպքում առաջանում է սխալ։ |
| **Certificate** | byte\[\] | Պարտադիր | [Api կլիենտը](../../../Client/api_client.md) ստեղծելիս տրված սերտիֆիկատի պարունակությունը: սերտիֆիկատի անվավերության դեպքում առաջանում է սխալ։ |
| **Username** | string | Պարտադիր | Օգտագործողի մուտքանունը։ |
| **Password** | string | Պարտադիր | Օգտագործողի գաղտնաբառը։ |
| RequestTime | DateTime? | Ոչ պարտադիր | Նույնականացման հարցման կատարման ամսաթիվը/ժամանակը։ |
| TimeZoneId | string | Ոչ պարտադիր | Այն [ժամային գոտու անունը](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones#time-zones), որից կատարվել է նույնականացման հարցումը (օրինակ՝ "Caucasus Standard Time", "SA Western Standard Time", ...)։ |
| LogComment | string | Ոչ պարտադիր | Բարեհաջող նույնականացման դեպքում [SYSLOG](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/SYSLOG.html) աղյուսակում գրանցվող հաղորդագրությունը։ |
| ComputerName | string | Ոչ պարտադիր | Օգտագործողի համակարգչի անունը։ |

## Վերադարձվող արժեք

Նույնականացված օգտագործողի տվյալները։

| Անվանում | Տեսակ | Նկարագրություն |
| --- | --- | --- |
| EncryptedGeneratedKey | string |  |
| SUID | integer | Ներքին համարը (կոդ)։ |
| Username | string | Մուտքանունը։ |
| Name | string | Անունը։ |
| IsAdmin | bool | Ադմինիստրատոր հանդիսանալու հայտանիշ։ |
| DbName | string | Տվյալների պահոցի անունը, որին միացված է օգտագործողը։ |
| Server | string | Տվյալների պահոցը պարունակող սերվերի անունը։ |
| SessionGuid | guid | Օգտագործողի համակարգ մուտք գործման արդյունքում բացված [սեսսիայի](../../../server_api/Types/SessionInfo.md) id-ն։ |
| Token | string | Տոկեն, որը նախատեսված է օգտագործողի կողմից դեպի սերվիս api կանչերի նույնականացման համար։ |
| RefreshToken | string | Հիմնական տոկենի վավերականության ժամկետի լրացումից հետո տրվող թարմացման տոկենը։ |
| MustChangePassword | bool | Համակարգ մուտք գործելուց հետո օգտագործողը պետք է փոխի գաղտնաբառը, թե ոչ։ |
| PasswordState | integer | Գաղտնաբառի վիճակը։  <br>• 0 - Գաղտնաբառը վավեր է։  <br>• 1 - Գաղտնաբառը նշանակվել է ադմինիստրատորի կողմից և ենթակա է փոփոխման:  <br>• 2 - Գաղտնաբառը ժամկետանց է։ |
