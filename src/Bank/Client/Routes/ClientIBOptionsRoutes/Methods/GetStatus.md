---
title: ClientIBOptionsRoutes.GetStatus(GetStatusRequest) մեթոդ
---

```c#
public Task<GetStatusResponse> GetStatus(GetStatusRequest request)
```

Վերադարձնում է հաճախորդի ԻԲ կարգավիճակը։
Եթե հաճախորդի համար ԻԲ կարգավորում արված չէ, նույնպես վերադարձնում է "0"։

**Պարամետրեր**

* `request` - Պարունակում է հաճախորդի կոդը։

**Վերադարձվող արժեքներ**

* `Status` - կարգավիճակի կոդ։

Հնարավոր արժեքներն են`

| Status | Նկարագրություն |
| -- | -- |
| 0 | Չօգտագործող |
| 1 | Գրանցված |
| 2 | Օգտագործող |
| 3 | Սառեցված |

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../../../web_api_client/bank/examples/ClientIBOptionsRoutes.md#օրինակ-1)։
