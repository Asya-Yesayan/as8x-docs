---
title: LoginService.CreateDefaultSessionInfo(string, short, bool, string, DateTime, short, string) մեթոդ
---

```c#
public Task<SessionInfo> CreateDefaultSessionInfo(string userName, 
                                                  short suid, 
                                                  bool isAdmin, 
                                                  string guid,
                                                  DateTime expirationDate, 
                                                  short clientId, 
                                                  string computerName = null)
```

Ստեղծում է նոր սեսսիա՝ օգտագործելով տրված պարամետրերը, իսկ սեսսիայի բացակայող դաշտերը (WkDate, ServiceId, ...) լրացնում է լռությամբ արժեքներով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| userName | string | - | Օգտագործողի մուտքանունը։ |
| suid | short | - | Օգտագործողի ներքին համարը (կոդ)։ |
| isAdmin | bool | - | Օգտագործողի ադմինիստրատոր հանդիսանալու հայտանիշ։ |
| guid | string | - | [Սեսսիայի](../../types/SessionInfo.md) ներքին նույնականացման համարը (guid)։ |
| expirationDate | DateTime | - | Սեսսիայի վավերականության ժամկետը։ |
| clientId | short | - | Այն [Api կլիենտ](../../../web_api_client/api_client.md) ծրագրի id-ն, որում ստեղծվել է օգտագործողը։ |
| computerName | string | null | Օգտագործողի համակարգչի անունը։ |