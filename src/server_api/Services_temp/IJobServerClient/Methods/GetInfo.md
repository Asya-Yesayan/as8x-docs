---
title: GetInfo
parent: "Մեթոդներ"
grand_parent: "IProcessServerClient"
---

# IProcessServerClient.GetInfo(string) մեթոդ

## Նկարագիր

**Դաս՝** [IJobServerClient](../IJobServerClient.md)

```c#
public Task<List<ProcessInfoModel>> GetInfo(string sessionGuid)
```

Վերադարձնում է նշված id-ով [սեսսիայի](../../../Types/SessionInfo.md) բոլոր [փաստաթղթի](../../../Definitions/Document/Document.md), [տվյալների աղբյուրի](../../../Definitions/DataSource/DataSource.md), [DPR](../../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ի կատարման առաջադրանքների ինֆորմացիաների ցուցակը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| sessionGuid     | string               | -              | Այն [սեսսիայի](../../../Types/SessionInfo.md) id-ն, որի կատարման առաջադրանքները պետք է վերադարձվեն։ Սովորաբար այս պարամետրին տրվում է ընթացիկ սեսսիայի id-ն, որը կարելի է ստանալ [ISessionInfoService](../../ISessionInfo/ISessionInfoService.md).[CurrentSessionGuid](../../ISessionInfo/Properties/CurrentSessionGuid.md) հատկության միջոցով։ |