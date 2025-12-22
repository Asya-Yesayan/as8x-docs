---
title: LoginController դաս
---

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AuthenticateWithCertificate](Methods/AuthenticateWithCertificate.md) | Նույնականացնում է այն օգտագործողին, որը ստեղծվել է սերտիֆիկատով վավերացվող [Api կլիենտների](../../Client/api_client.md) համար։ |
| [AuthenticateWithSecret](Methods/AuthenticateWithSecret.md) | Նույնականացնում է այն օգտագործողին, որը ստեղծվել է բանալիով վավերացվող [Api կլիենտների](../../Client/api_client.md) համար։ |
| [Refresh](Methods/Refresh1.md) | Ստանում է նույնականացված օգտագործողի տվյալները (տոկեն, թարմացման տոկեն) և գեներացնում է նոր տոկեն՝ սերվիս հարցումներ կատարելու համար։ |
| [Delete](Methods/Delete.md) | Հեռացնում է ընթացիկ օգտագործողի [սեսսիան](../../server_api/Types/SessionInfo.md), որի հետ համատեղ հեռացվում են նաև սեսսիայի ընթացքում առաջացած ժամանակավոր ֆայլերը, ընդհատվում և քեշից հեռացվում են երկար կատարվող պրոցեսները (փաստաթղթերի [գրանցում](../../server_api/Definitions/Document/Methods/Store.md)/[հեռացում](../../server_api/Definitions/Document/Methods/Delete.md), [տվյալների աղբյուրների](../../server_api/Definitions/DataSource/DataSource.md), [DPR](../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)\-ների կատարում)։ |
| [GetBackgroundActions](Methods/GetBackgroundActions.md) | Վերադարձնում է համակարգում առկա բոլոր ֆոնային գործողությունների նկարագրությունների ցուցակը։ |