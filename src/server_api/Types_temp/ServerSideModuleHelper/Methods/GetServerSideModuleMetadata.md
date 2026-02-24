---
title: GetServerSideModuleMetadata
nav_exclude: true
---

# ServerSideModuleHelper.GetServerSideModuleMetadata(IDBService, string) մեթոդ

```c#
public static Task<ServerSideModuleMetadata> GetServerSideModuleMetadata(IDBService dbService, string name)
```

Վերադարձնում է սերվերային մոդուլի [նկարագրությունը](../../ServerSideModuleMetadata/ServerSideModuleMetadata.md)՝ ըստ ներքին անվան (կոդի)։ Տրված ներքին անունով [սերվերային մոդուլի](../../../extensions/Definitions/ServerSideModule/server_side_module.md) բացակայության դեպքում առաջանում է սխալ։

Տե՛ս օգտագործման [օրինակը](../../ServerSideModuleMetadata/Methods/TryGetType.md#օրինակ):

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|----------|----------|----------|
| dbService | [IDBService](../../../Services/IDB/IDBService.md) | - | [IDBService](../../../Services/IDB/IDBService.md) դասի օբյեկտ, որը անհրաժեշտ է մեթոդին Sql միացում դեպի ընթացիկ տվյալների պահոց ստանալու և Sql հարցումներ կատարելու համար։  |
| name | string | - | [Սերվերային մոդուլի](../../../extensions/Definitions/ServerSideModule/server_side_module.md) ներքին անունը (կոդը)։ |