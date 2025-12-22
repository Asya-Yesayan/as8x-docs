---
title: ClientsRoutes.CreateClientFromEkeng(CreateClientFromEkengRequest) մեթոդ
---

```c#
public Task<CreatePhysicalClientByFullDataResponse> CreateClientFromEkeng(
    CreateClientFromEkengRequest request)
```

Ստեղծում է ֆիզ. անձ հաճախորդ ստանալով նույնականացման փաստաթղթի համարը (սոց.քարտ, անձնագիր...), իսկ հիմնական տվյալները ստանալով [ԷԿԵՆԳ](https://www.ekeng.am) համակարգից:
Եթե այդ տվյալներով հաճախորդ առկա է համակարգում, ապա նոր հաճախորդ չի ստեղծվում։
Վերադարձնում հաճախորդի ստեղծված լինելու մասին տվյալներ՝ հաճախորդի կոդ, ստեղված հաճախորդի վիճակը վերջնական է, թե ոչ։

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| request         | CreateClientFromEkengRequest | -              | Ավելացվող հաճախորդի տվյալներ։ |

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../Examples/ClientsRoutes.md#օրինակ-1)։
