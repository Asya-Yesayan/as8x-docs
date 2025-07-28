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
| [GetInfo](ISessionInfoService/GetInfo.md) | Վերադարձնում է ընթացիկ [սեսսիայի մասին ինֆորմացիան](../types/SessionInfo.md)։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CurrentSessionGuid](ISessionInfoService/CurrentSessionGuid.md) | Վերադարձնում է ընթացիկ [սեսսիայի](../types/SessionInfo.md) ներքին նույնականացման համարը (Guid)։ |

<!-- ##

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CurrentSessionGuid](ISessionInfoService/CurrentSessionGuid.md) | Ավելացնում է նոր [սեսսիա](../types/SessionInfo.md) տվյալների պահոցի `SESSIONINFO` աղյուսակում և քեշում։ |
| [Delete](ISessionInfoService/Delete.md) | Հեռացնում է ընթացիկ [սեսսիան](../types/SessionInfo.md) տվյալների պահոցի `SESSIONINFO` աղյուսակից և քեշից։ |
| [DeleteExpirations](ISessionInfoService/DeleteExpirations.md) | Հեռացնում է բոլոր ժամկետանց սեսսիաները տվյալների պահոցի `SESSIONINFO` աղյուսակից և քեշից։ |
| [GetInfo](ISessionInfoService/GetInfo.md) | Վերադարձնում է ընթացիկ [սեսսիայի մասին ինֆորմացիան](../types/SessionInfo.md)։ |
| [GetInfos](ISessionInfoService/GetInfos.md) | Վերադարձնում է տվյալների պահոցի `SESSIONINFO` աղյուսակում պահված բոլոր [սեսսիաների մասին ինֆորմացիան](../types/SessionInfo.md) և ավելացնում քեշում։ |
| [Update](ISessionInfoService/Update.md) | Թարմացնում է ընթացիկ սեսսիայի ինֆորմացիան։ |

### Add

```c#
public Task Add(SessionInfo sessionInfo)
```

Ավելացնում է նոր [սեսսիա](../../types/SessionInfo.md) տվյալների պահոցի `SESSIONINFO` աղյուսակում և քեշում։

Նոր սեսսիա ավտոմատ կերպով բացվում է ծրագիր մուտք գործելիս։

**Պարամետրեր**

* `sessionInfo` - Ավելացվող [սեսսիայի ինֆորմացիան](../../types/SessionInfo.md)։

### Delete

```c#
public Task Delete()
```

Հեռացնում է ընթացիկ [սեսսիան](../../types/SessionInfo.md) տվյալների պահոցի `SESSIONINFO` աղյուսակից և քեշից։

Ընթացիկ սեսսիան ավտոմատ կերպով հեռացվում է ծրագրից դուրս գալուց։

### DeleteExpirations

```c#
public Task<List<string>> DeleteExpirations()
```

Հեռացնում է բոլոր ժամկետանց սեսսիաները տվյալների պահոցի `SESSIONINFO` աղյուսակից և քեշից։

Վերադարձնում է հեռացված [սեսսիաների](../../types/SessionInfo.md) ներքին նույնականացման համարների (Guid-ների) ցուցակը։ 

### GetInfos

```c#
public List<SessionInfo> GetInfos()
```

Վերադարձնում է տվյալների պահոցի `SESSIONINFO` աղյուսակում պահված բոլոր [սեսսիաների մասին ինֆորմացիան](../../types/SessionInfo.md) և ավելացնում քեշում։

### GetInfo

```c#
public SessionInfo GetInfo(string sessionGuid)
```

Վերադարձնում է նշված ներքին նույնականացման համարով [սեսսիայի մասին ինֆորմացիան](../../types/SessionInfo.md) քեշից։

Քեշում բացակայության դեպքում բեռնում է սեսսիայի մասին ինֆորմացիան տվյալների պահոցի `SESSIONINFO` աղյուսակից և ավելացնում քեշում։

**Պարամետրեր**

* `sessionGuid` - Սեսսիայի ներքին նույնականացման համարը (Guid)։

### Update

```c#
public Task Update(SessionInfoModel sessionInfo)
```

Թարմացնում է ընթացիկ սեսսիայի ինֆորմացիան։

**Պարամետրեր**

* `sessionInfo` - Թարմացումը պարունակող ինֆորմացիան։
-->
