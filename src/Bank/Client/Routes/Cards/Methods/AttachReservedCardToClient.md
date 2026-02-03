---
title: AttachReservedCardToClient(AttachReservedCardToClientRequest)
nav_exclude: true
---

# CardsRoutes.AttachReservedCardToClient(AttachReservedCardToClientRequest) մեթոդ

```c#
public Task<AttachReservedCardToClientResponse> AttachReservedCardToClient(
    AttachReservedCardToClientRequest request)
```

Ռեզերվացրած քարտը կցում է տրված հաճախորդին։  
Քարտը պետք է նախապես բացված լինի ՀԾ-Բանկ համակարգում և պրոցեսինգում։  
Այն պետք է բացված լինի տեխնիկական հաճախորդի կոդով (սահմանվում է RESERVEDCARDSCLIENTS պարամետրով)։

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| request         | AttachReservedCardToClientRequest | -              | Պարունակում է հաճախորդի կոդը և քարտի համարը։ |

**Վերադարձվող արժեքներ**

* `CardISN` - քարտի ISN
* `RespCode` - պատասխանի կոդ (բարեհաջող աշխատանքի դեպքում 00)
* `ErrorMessage` - սխալի հաղորդագրություն:  

Հնարավոր արժեքներն են`

| RespCode | ErrorMessage |
| -- | -- |
| 00 | |
| 01 | 12345678 client mobile is not filled |
| 02 | 9051010203040506 card is not a reserved card |
| 03 | CreateVirtualCard call is failed |
| 04 | Incorrect card is attached to client by CreateVirtualCard |
| 05 | Other error |

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../Examples/CardsRoutes.md#օրինակ-1)։
