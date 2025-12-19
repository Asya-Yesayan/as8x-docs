---
title: IProcessServerClient.GetInfo(string) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Task<List<ProcessInfoModel>> GetInfo(string sessionGuid)
```

Վերադարձնում է նշված id-ով [սեսսիայի](../../../examples/SessionInfo.md) բոլոր [փաստաթղթի](../../../definitions/document.md), [տվյալների աղբյուրի](../../../definitions/ds.md), [DPR](../../../definitions/dpr.md)-ի կատարման առաջադրանքների ինֆորմացիաների ցուցակը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| sessionGuid     | string               | -              | Այն [սեսսիայի](../../../examples/SessionInfo.md) id-ն, որի կատարման առաջադրանքները պետք է վերադարձվեն։ Սովորաբար այս պարամետրին տրվում է ընթացիկ սեսսիայի id-ն, որը կարելի է ստանալ [ISessionInfoService](../../ISessionInfoService.md).[CurrentSessionGuid](../../ISessionInfoService/Properties/CurrentSessionGuid.md) հատկության միջոցով։ |