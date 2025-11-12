---
title: LoginService սերվիս
---

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [LogOut()](LoginService/LogOut.md) | Հեռացնում է ընթացիկ օգտագործողի [սեսսիան](../../server_api/types/SessionInfo.md), որի հետ համատեղ հեռացվում են նաև սեսսիայի ընթացքում առաջացած ժամանակավոր ֆայլերը, ընդհատվում և քեշից հեռացվում են երկար կատարվող պրոցեսները (փաստաթղթերի [գրանցում](../../server_api/definitions/document/Store.md)/[հեռացում](../../server_api/definitions/document/Delete.md), [տվյալների աղբյուրների](../../server_api/definitions/ds.md), [DPR](../../server_api/definitions/dpr.md)\-ների կատարում)։ |
| [CheckLogin(short)](LoginService/CheckLogin.md) | Վերադարձնում է տրված ներքին համարով օգտագործողի մուտքի ինֆորմացիան։ |
| [CheckLogin(string, bool)](LoginService/CheckLogin1.md) | Վերադարձնում է տրված մուտքանունով օգտագործողի մուտքի ինֆորմացիան։ |
| [CreateDefaultSessionInfo(string, short, bool, string, DateTime, short, string)](LoginService/CreateDefaultSessionInfo.md) | Ստեղծում է նոր սեսսիա՝ օգտագործելով տրված պարամետրերը, իսկ սեսսիայի բացակայող դաշտերը (WkDate, ServiceId, ...) լրացնում է լռությամբ արժեքներով։ |
