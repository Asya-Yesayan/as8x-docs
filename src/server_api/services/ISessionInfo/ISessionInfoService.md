---
title: "ISessionInfoService սերվիս"
---

## Ներածություն

ISessionInfoService դասը նախատեսված է [սեսսիաների](../Types/SessionInfo.md) հետ աշխատանքը ապահովելու համար։
Հնարավոր է ստանալ ընթացիկ օգտագործողի տվյալներ, ինչպես նաև ընթացիկ պարամետրերի արժեքներ։

<!-- ## Հատկություններ

### CurrentSessionGuid

```c#
public string CurrentSessionGuid { get }
```

Վերադարձնում է ընթացիկ [սեսսիայի](../Types/SessionInfo.md) ներքին նույնականացման համարը (Guid): -->

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetInfo()](ISessionInfoService/GetInfo.md) | Վերադարձնում է ընթացիկ [սեսսիայի մասին ինֆորմացիան](../Types/SessionInfo.md)։ |
| [Exists(string)](ISessionInfoService/Exists.md) | Ստուգում է նշված [սեսսիայի](../Types/SessionInfo.md) առկայությունը սերվիսի քեշում։ |
| [ExistsInDB(string)](ISessionInfoService/ExistsInDB.md) | Ստուգում է նշված [սեսսիայի](../Types/SessionInfo.md) առկայությունը տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CurrentSessionGuid](Properties/CurrentSessionGuid.md) | Վերադարձնում է ընթացիկ [սեսսիայի](../Types/SessionInfo.md) ներքին նույնականացման համարը (Guid)։ |

<!-- ##

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CurrentSessionGuid](Properties/CurrentSessionGuid.md) | Ավելացնում է նոր [սեսսիա](../Types/SessionInfo.md) տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում և քեշում։ |
| [Delete](ISessionInfoService/Delete.md) | Հեռացնում է ընթացիկ [սեսսիան](../Types/SessionInfo.md) տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակից և քեշից։ |
| [DeleteExpirations](ISessionInfoService/DeleteExpirations.md) | Հեռացնում է բոլոր ժամկետանց սեսսիաները տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակից և քեշից։ |
| [GetInfo()](ISessionInfoService/GetInfo.md) | Վերադարձնում է ընթացիկ [սեսսիայի մասին ինֆորմացիան](../Types/SessionInfo.md)։ |
| [GetInfos](ISessionInfoService/GetInfos.md) | Վերադարձնում է տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում պահված բոլոր [սեսսիաների մասին ինֆորմացիան](../Types/SessionInfo.md) և ավելացնում քեշում։ |
| [Update](ISessionInfoService/Update.md) | Թարմացնում է ընթացիկ սեսսիայի ինֆորմացիան։ |

### Add

```c#
public Task Add(SessionInfo sessionInfo)
```

Ավելացնում է նոր [սեսսիա](../../Types/SessionInfo.md) տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում և քեշում։

Նոր սեսսիա ավտոմատ կերպով բացվում է ծրագիր մուտք գործելիս։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| sessionInfo     | SessionInfo          | -              | Ավելացվող [սեսսիայի ինֆորմացիան](../../Types/SessionInfo.md)։ |

### Delete

```c#
public Task Delete()
```

Հեռացնում է ընթացիկ [սեսսիան](../../Types/SessionInfo.md) տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակից և քեշից։

Ընթացիկ սեսսիան ավտոմատ կերպով հեռացվում է ծրագրից դուրս գալուց։

### DeleteExpirations

```c#
public Task<List<string>> DeleteExpirations()
```

Հեռացնում է բոլոր ժամկետանց սեսսիաները տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակից և քեշից։

Վերադարձնում է հեռացված [սեսսիաների](../../Types/SessionInfo.md) ներքին նույնականացման համարների (Guid-ների) ցուցակը։ 

### GetInfos

```c#
public List<SessionInfo> GetInfos()
```

Վերադարձնում է տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում պահված բոլոր [սեսսիաների մասին ինֆորմացիան](../../Types/SessionInfo.md) և ավելացնում քեշում։

### GetInfo

```c#
public SessionInfo GetInfo(string sessionGuid)
```

Վերադարձնում է նշված ներքին նույնականացման համարով [սեսսիայի մասին ինֆորմացիան](../../Types/SessionInfo.md) քեշից։

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
