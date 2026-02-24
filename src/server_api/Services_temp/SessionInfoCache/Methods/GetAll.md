---
title: GetAll
parent: "Մեթոդներ"
grand_parent: "SessionInfoCacheService

---

# SessionInfoCacheService սերվիս

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Get](Methods/Get.md) | Վերադարձնում է քեշավորված [սեսսիայի նկարագրությունը](../../Types/SessionInfo.md)՝ ըստ ներքին նույնականացման համարի (**guid**)։ |
| [GetAll](Methods/GetAll.md) | Վերադարձնում է բոլոր քեշավորված [սեսսիաների նկարագրությունների](../../Types/SessionInfo.md) ցուցակը։ |
| [GetActiveSessionsAndReset](Methods/GetActiveSessionsAndReset.md) | Վերադարձնում է բոլոր ակտիվ քեշավորված [սեսսիաների նկարագրությունների](../../Types/SessionInfo.md) ցուցակը և հեռացնում քեշից։ |
| [UpdateLastActiveDate](Methods/UpdateLastActiveDate.md) | Թարմացնում է նշված **guid**-ով [սեսսիայի](../../Types/SessionInfo.md) վերջին ակտիվության ամսաթիվը/ժամանակը: |
| [Exists](Methods/Exists.md) | Ստուգում է [սեսսիայի](../../Types/SessionInfo.md) առկայությունը քեշում՝ ըստ ներքին նույնականացման համարի (**guid**)։ |"

---

# SessionInfoCacheService.GetAll() մեթոդ

```c#
public List<SessionInfo> GetAll()
```

Վերադարձնում է բոլոր քեշավորված [սեսսիաների նկարագրությունների](../../../Types/SessionInfo.md) ցուցակը։
