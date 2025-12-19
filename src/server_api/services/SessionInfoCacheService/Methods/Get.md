---
title: SessionInfoCacheService.Get(string) մեթոդ
---

```c#
public SessionInfo Get(string sessionGuid)
```

Վերադարձնում է քեշավորված [սեսսիայի նկարագրությունը](../../../examples/SessionInfo.md)՝ ըստ ներքին նույնականացման համարի (**guid**)։ Քեշում բացակայության դեպքում վերադարձնում է null:

**Պարամետրեր**


| Անվանում | Տեսակ | Նկարագրություն |
|-----------|-------|-----------------|
| sessionGuid | string | [Սեսսիայի](../../../examples/SessionInfo.md) ներքին նույնականացման համարը (guid)։ |
