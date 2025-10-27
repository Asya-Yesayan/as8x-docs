---
title: LoginController.Delete մեթոդ
---

```c#
[HttpDelete]
[Authorize]
public Task Delete([FromServices] LoginService loginService)
```

Հեռացնում է ընթացիկ օգտագործողի [սեսսիան](../../server_api/types/SessionInfo.md), որի հետ համատեղ հեռացվում են նաև սեսսիայի ընթացքում առաջացած ժամանակավոր ֆայլերը, ընդհատվում և քեշից հեռացվում են երկար կատարվող պրոցեսները ([փաստաթղթերի](../../server_api/definitions/document.md) [գրանցում](../../server_api/definitions/document/Store.md)/[հեռացում](../../server_api/definitions/document/Delete.md), [տվյալների աղբյուրների](../../server_api/definitions/ds.md), [DPR](../../server_api/definitions/dpr.md)\-ների կատարում)։

Տե՛ս օգտագործման [օրինակը](https://www.postman.com/asya-01/armsoft/example/33237126-c73936af-bf4f-4016-8f79-f5b182c43ad0)։
