---
title: SessionInfoCacheService.Get(string) մեթոդ
---

```c#
public SessionInfo Get(string sessionGuid)
```

Վերադարձնում է քեշավորված [սեսսիայի նկարագրությունը](../../types/SessionInfo.md)՝ ըստ ներքին նույնականացման համարի (**guid**)։ Քեշում բացակայության դեպքում վերադարձնում է null:

**Պարամետրեր**


| Անվանում | Տեսակ | Նկարագրություն |
|-----------|-------|-----------------|
| sessionGuid | string | [Սեսսիայի](../../types/SessionInfo.md) ներքին նույնականացման համարը (guid)։ |
