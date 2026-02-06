---
title: ExistsInDB
parent: "Մեթոդներ"
grand_parent: "ISessionInfoService"
---

# ISessionInfoService.ExistsInDB(string) մեթոդ

```c#
public Task<bool> ExistsInDB(string guid)
```

Ստուգում է նշված [սեսսիայի](../../../Types/SessionInfo.md) առկայությունը տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| guid | string | - | [Սեսսիայի](../../../Types/SessionInfo.md) ներքին նույնականացման համարը (guid)։ |