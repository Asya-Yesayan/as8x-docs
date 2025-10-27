---
title: LoginController.Refresh(RefreshRequest) մեթոդ
---

```c#
[Produces("text/plain")]
[HttpPost("[action]")]
public Task<string> Refresh([FromBody] RefreshRequest refreshRequest)
```

Թարմացնում է տրված նույնականացված օգտագործողի նույնականացման տվյալները։ Վերադարձված տոկենների վավերականության ժամկետը սահմանվում է [appsettings.json](../../project/appsettings_json.md) կոնֆիգուրացիոն ֆայլի [<b>JwtConfig</b>](../../project/appsettings_json.md#jwtconfig) սեկցիայի միջոցով։

Տե՛ս օգտագործման [օրինակը](https://www.postman.com/asya-01/armsoft/example/33237126-00be2b64-b8e1-488f-aed6-1deb7e120b13)։

## Պարամետրեր

Body պարամետրեր

| Անվանում | Տեսակ | Պարտադիր/Ոչ պարտադիր | Նկարագրություն |
| --- | --- | --- | --- |
| Token | string | Պարտադիր | Օգտագործողի գործող տոկենը։ |
| RefreshToken | string | Պարտադիր | Օգտագործողի թարմացման տոկենը։ |
| RequestTime | DateTime? | Ոչ պարտադիր | Հարցման կատարման ամսաթիվը/ժամանակը։ |
| TimeZoneId | string | Ոչ պարտադիր | Այն [ժամային գոտու անունը](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones#time-zones), որից կատարվել է հարցումը (օրինակ՝ "Caucasus Standard Time", "SA Western Standard Time", ...)։ |

## Վերադարձվող արժեք

Օգտագործողի թարմացված տոկենը, որը նախատեսված է օգտագործողի կողմից դեպի սերվիս api կանչերի նույնականացման համար։
