---
title: Exists
parent: "Մեթոդներ"
grand_parent: "ISessionInfoService"
---

# ISessionInfoService.Exists(string) մեթոդ

```c#
public bool Exists(string guid)
```

Ստուգում է նշված [սեսսիայի](../../../Types/SessionInfo.md) առկայությունը սերվիսի քեշում։ Սեսսիայի բացակայության դեպքում բեռնում է բոլոր սեսսիաների նկարագրությունները տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակից և թարմացնում է քեշը։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| guid | string | - | [Սեսսիայի](../../../Types/SessionInfo.md) ներքին նույնականացման համարը (guid)։ |