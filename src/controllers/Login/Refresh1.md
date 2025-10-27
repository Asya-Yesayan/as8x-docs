---
title: LoginController.Refresh(RefreshRequest) մեթոդ
---

```c#
[Produces("text/plain")]
[HttpPost("[action]")]
public Task<RefreshResponse> Refresh([FromBody] RefreshRequest refreshRequest)
```

Թարմացնում է տրված նույնականացված օգտագործողի նույնականացման տվյալները։ Վերադարձված տոկենների վավերականության ժամկետը սահմանվում է [appsettings.json](../../project/appsettings_json.md) կոնֆիգուրացիոն ֆայլի [<b>JwtConfig</b>](../../project/appsettings_json.md#jwtconfig) սեկցիայի միջոցով։

Տե՛ս օգտագործման [օրինակը](https://www.postman.com/asya-01/armsoft/example/33237126-4082f95c-c601-4d8f-8c42-8d2dcdd39e8b)։

## Պարամետրեր

Body պարամետրեր

| Անվանում | Տեսակ | Պարտադիր/Ոչ պարտադիր | Նկարագրություն |
| --- | --- | --- | --- |
| Token | string | Պարտադիր | Օգտագործողի գործող տոկենը։ |
| RefreshToken | string | Պարտադիր | Օգտագործողի թարմացման տոկենը։ |
| RequestTime | DateTime? | Ոչ պարտադիր | Հարցման կատարման ամսաթիվը/ժամանակը։ |
| TimeZoneId | string | Ոչ պարտադիր | Այն [ժամային գոտու անունը](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones#time-zones), որից կատարվել է հարցումը (օրինակ՝ "Caucasus Standard Time", "SA Western Standard Time", ...)։ |

## Վերադարձվող արժեք

Օգտագործողի թարմացված նույնականացման տվյալները։

| Անվանում | Տեսակ | Նկարագրություն |
| --- | --- | --- |
| Token | string | Թարմացված տոկենը, որը նախատեսված է օգտագործողի կողմից դեպի սերվիս api կանչերի նույնականացման համար։ |
| SessionIsClosed | bool | Սեսսաիայի ակտիվության հայտանիշ։ |