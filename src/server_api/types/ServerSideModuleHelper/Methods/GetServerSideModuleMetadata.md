---
title: ServerSideModuleHelper.GetServerSideModuleMetadata(IDBService, string) մեթոդ
---

```c#
public static Task<ServerSideModuleMetadata> GetServerSideModuleMetadata(IDBService dbService, string name)
```

Վերադարձնում է սերվերային մոդուլի [նկարագրությունը](../../ServerSideModuleMetadata/ServerSideModuleMetadata.md)՝ ըստ ներքին անվան (կոդի)։ Տրված ներքին անունով [սերվերային մոդուլի](../../../../extensions/definitions/server_side_module.md) բացակայության դեպքում առաջանում է սխալ։

Տե՛ս օգտագործման [օրինակը](../../ServerSideModuleMetadata/Methods/TryGetType.md):

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|----------|----------|----------|
| dbService | [IDBService](../../../services/IDBService.md) | - | [IDBService](../../../services/IDBService.md) դասի օբյեկտ, որը անհրաժեշտ է մեթոդին Sql միացում դեպի ընթացիկ տվյալների պահոց ստանալու և Sql հարցումներ կատարելու համար։  |
| name | string | - | [Սերվերային մոդուլի](../../../../extensions/definitions/server_side_module.md) ներքին անունը (կոդը)։ |