---
title: LoginController դաս
---

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AuthenticateWithCertificate](AuthenticateWithCertificate.md) | Նույնականացնում է այն օգտագործողին, որը ստեղծվել է սերտիֆիկատով վավերացվող [Api կլիենտների](../../web_api_client/api_client.md) համար։ |
| [AuthenticateWithSecret](AuthenticateWithSecret.md) | Նույնականացնում է այն օգտագործողին, որը ստեղծվել է բանալիով վավերացվող [Api կլիենտների](../../web_api_client/api_client.md) համար։ |
| [Refresh1](Refresh1.md) | Թարմացնում է տրված նույնականացված օգտագործողի նույնականացման տվյալները։ |
| [Delete](Delete.md) | Հեռացնում է ընթացիկ օգտագործողի [սեսսիան](../../server_api/types/SessionInfo.md), որի հետ համատեղ հեռացվում են նաև սեսսիայի ընթացքում առաջացած ժամանակավոր ֆայլերը, ընդհատվում և քեշից հեռացվում են երկար կատարվող պրոցեսները (փաստաթղթերի [գրանցում](../../server_api/definitions/document/Store.md)/[հեռացում](../../server_api/definitions/document/Delete.md), [տվյալների աղբյուրների](../../server_api/definitions/ds.md), [DPR](../../server_api/definitions/dpr.md)\-ների կատարում)։ |
| [GetBackgroundActions](GetBackgroundActions.md) | Վերադարձնում է համակարգում առկա բոլոր ֆոնային գործողությունների նկարագրությունների ցուցակը։ |