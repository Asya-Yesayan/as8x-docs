---
title: Get
parent: "Մեթոդներ"
grand_parent: "SessionInfoCacheService

---

# SessionInfoCacheService.Get(string) մեթոդ

```c#
public SessionInfo Get(string sessionGuid)
```

Վերադարձնում է քեշավորված [սեսսիայի նկարագրությունը](../../../Types/SessionInfo.md)՝ ըստ ներքին նույնականացման համարի (**guid**)։ Քեշում բացակայության դեպքում վերադարձնում է null:

**Պարամետրեր**


| Անվանում | Տեսակ | Նկարագրություն |
|-----------|-------|-----------------|
| sessionGuid | string | [Սեսսիայի](../../../Types/SessionInfo.md) ներքին նույնականացման համարը (guid)։ |
