---
title: CardsRoutes.GetCardAgreementFiles(int, Language) մեթոդ
---

```c#
public Task<FilesInfoResponse> GetCardAgreementFiles(int cardIsn, Language language)
```
Ներբեռնում է տրված քարտի համար անհրաժեշտ պայմանագրերը։ 
Պայմանագրերի ձևանմուշները կարգավորվում են հետևյալ կետով՝ «Պլաստիկ քարտերի պայմանագրերի ձևանմուշների կարգավորում»։ 
Մեթոդի կանչի ժամանակ նշված ձևանմուշներում լրացվում են տրված քարտի և հաճախորդի տվյալները։

Վերադարձնում է ֆայլերի անունները և պարունակությունը (byte[])։

**Պարամետրեր**

* `cardIsn` - Քարտի ISN։
* `language` - Պայմանագրի լեզու։

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../../../web_api_client/bank/examples/CardsRoutes.md#օրինակ-1)։
