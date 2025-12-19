---
title: "ISessionInfoService սերվիս"
---

## Ներածություն

ISessionInfoService դասը նախատեսված է [սեսսիաների](../types/SessionInfo.md) հետ աշխատանքը ապահովելու համար։
Հնարավոր է ստանալ ընթացիկ օգտագործողի տվյալներ, ինչպես նաև ընթացիկ պարամետրերի արժեքներ։

<!-- ## Հատկություններ

### CurrentSessionGuid

```c#
public string CurrentSessionGuid { get }
```

Վերադարձնում է ընթացիկ [սեսսիայի](../types/SessionInfo.md) ներքին նույնականացման համարը (Guid): -->

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetInfo()](IJobServerClient/Methods/GetInfo.md) | Վերադարձնում է ընթացիկ [սեսսիայի մասին ինֆորմացիան](../types/SessionInfo.md)։ |
| [Exists(string)](IFactService/Methods/Exists.md) | Ստուգում է նշված [սեսսիայի](../types/SessionInfo.md) առկայությունը սերվիսի քեշում։ |
| [ExistsInDB(string)](../definitions/document/Properties/ExistsInDB.md) | Ստուգում է նշված [սեսսիայի](../types/SessionInfo.md) առկայությունը տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CurrentSessionGuid](ISessionInfoService/Properties/CurrentSessionGuid.md) | Վերադարձնում է ընթացիկ [սեսսիայի](../types/SessionInfo.md) ներքին նույնականացման համարը (Guid)։ |

<!-- ##

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CurrentSessionGuid](ISessionInfoService/Properties/CurrentSessionGuid.md) | Ավելացնում է նոր [սեսսիա](../types/SessionInfo.md) տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում և քեշում։ |
| [Delete](../../controllers/Document/Methods/Delete.md) | Հեռացնում է ընթացիկ [սեսսիան](../types/SessionInfo.md) տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակից և քեշից։ |
| [DeleteExpirations](ISessionInfoService/DeleteExpirations.md) | Հեռացնում է բոլոր ժամկետանց սեսսիաները տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակից և քեշից։ |
| [GetInfo()](IJobServerClient/Methods/GetInfo.md) | Վերադարձնում է ընթացիկ [սեսսիայի մասին ինֆորմացիան](../types/SessionInfo.md)։ |
| [GetInfos](ISessionInfoService/GetInfos.md) | Վերադարձնում է տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում պահված բոլոր [սեսսիաների մասին ինֆորմացիան](../types/SessionInfo.md) և ավելացնում քեշում։ |
| [Update](WebServicesManager/Methods/Update.md) | Թարմացնում է ընթացիկ սեսսիայի ինֆորմացիան։ |

### Add

```c#
public Task Add(SessionInfo sessionInfo)
```

Ավելացնում է նոր [սեսսիա](../examples/SessionInfo.md) տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում և քեշում։

Նոր սեսսիա ավտոմատ կերպով բացվում է ծրագիր մուտք գործելիս։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| sessionInfo     | SessionInfo          | -              | Ավելացվող [սեսսիայի ինֆորմացիան](../examples/SessionInfo.md)։ |

### Delete

```c#
public Task Delete()
```

Հեռացնում է ընթացիկ [սեսսիան](../examples/SessionInfo.md) տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակից և քեշից։

Ընթացիկ սեսսիան ավտոմատ կերպով հեռացվում է ծրագրից դուրս գալուց։

### DeleteExpirations

```c#
public Task<List<string>> DeleteExpirations()
```

Հեռացնում է բոլոր ժամկետանց սեսսիաները տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակից և քեշից։

Վերադարձնում է հեռացված [սեսսիաների](../examples/SessionInfo.md) ներքին նույնականացման համարների (Guid-ների) ցուցակը։ 

### GetInfos

```c#
public List<SessionInfo> GetInfos()
```

Վերադարձնում է տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում պահված բոլոր [սեսսիաների մասին ինֆորմացիան](../examples/SessionInfo.md) և ավելացնում քեշում։

### GetInfo

```c#
public SessionInfo GetInfo(string sessionGuid)
```

Վերադարձնում է նշված ներքին նույնականացման համարով [սեսսիայի մասին ինֆորմացիան](../examples/SessionInfo.md) քեշից։

Քեշում բացակայության դեպքում բեռնում է սեսսիայի մասին ինֆորմացիան տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակից և ավելացնում քեշում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| sessionGuid     | string               | -              | Սեսսիայի ներքին նույնականացման համարը (Guid)։ |

### Update

```c#
public Task Update(SessionInfoModel sessionInfo)
```

Թարմացնում է ընթացիկ սեսսիայի ինֆորմացիան։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| sessionInfo     | SessionInfoModel     | -              | Թարմացումը պարունակող ինֆորմացիան։ |
