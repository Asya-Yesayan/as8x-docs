---
title: LoginController դաս
---

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AuthenticateWithCertificate](Methods/AuthenticateWithCertificate.md) | Նույնականացնում է այն օգտագործողին, որը ստեղծվել է սերտիֆիկատով վավերացվող [Api կլիենտների](../../web_api_client/api_client.md) համար։ |
| [AuthenticateWithSecret](Methods/AuthenticateWithSecret.md) | Նույնականացնում է այն օգտագործողին, որը ստեղծվել է բանալիով վավերացվող [Api կլիենտների](../../web_api_client/api_client.md) համար։ |
| [Refresh](Methods/Refresh1.md) | Ստանում է նույնականացված օգտագործողի տվյալները (տոկեն, թարմացման տոկեն) և գեներացնում է նոր տոկեն՝ սերվիս հարցումներ կատարելու համար։ |
| [Delete](Methods/Delete.md) | Հեռացնում է ընթացիկ օգտագործողի [սեսսիան](../../server_api/types/SessionInfo.md), որի հետ համատեղ հեռացվում են նաև սեսսիայի ընթացքում առաջացած ժամանակավոր ֆայլերը, ընդհատվում և քեշից հեռացվում են երկար կատարվող պրոցեսները (փաստաթղթերի [գրանցում](../../server_api/definitions/document/Store.md)/[հեռացում](../../server_api/definitions/document/Delete.md), [տվյալների աղբյուրների](../../server_api/definitions/ds.md), [DPR](../../server_api/definitions/dpr.md)\-ների կատարում)։ |
| [GetBackgroundActions](Methods/GetBackgroundActions.md) | Վերադարձնում է համակարգում առկա բոլոր ֆոնային գործողությունների նկարագրությունների ցուցակը։ |