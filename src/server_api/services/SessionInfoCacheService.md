---
title: SessionInfoCacheService սերվիս
---

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Get](IAttachmentService/Methods/Get.md) | Վերադարձնում է քեշավորված [սեսսիայի նկարագրությունը](../types/SessionInfo.md)՝ ըստ ներքին նույնականացման համարի (**guid**)։ |
| [GetAll](../../Bank/Client/Routes/LoanApplicationsRoutes/Methods/GetAll.md) | Վերադարձնում է բոլոր քեշավորված [սեսսիաների նկարագրությունների](../types/SessionInfo.md) ցուցակը։ |
| [GetActiveSessionsAndReset](SessionInfoCacheService/Methods/GetActiveSessionsAndReset.md) | Վերադարձնում է բոլոր ակտիվ քեշավորված [սեսսիաների նկարագրությունների](../types/SessionInfo.md) ցուցակը և հեռացնում քեշից։ |
| [UpdateLastActiveDate](SessionInfoCacheService/Methods/UpdateLastActiveDate.md) | Թարմացնում է նշված **guid**-ով [սեսսիայի](../types/SessionInfo.md) վերջին ակտիվության ամսաթիվը/ժամանակը: |
| [Exists](IFactService/Methods/Exists.md) | Ստուգում է [սեսսիայի](../types/SessionInfo.md) առկայությունը քեշում՝ ըստ ներքին նույնականացման համարի (**guid**)։ |