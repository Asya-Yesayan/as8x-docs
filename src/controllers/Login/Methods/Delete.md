---
title: LoginController.Delete(LoginService) մեթոդ
---

```c#
[HttpDelete]
[Authorize]
public Task Delete([FromServices] LoginService loginService)
```

Հեռացնում է ընթացիկ օգտագործողի [սեսսիան](../../../server_api/Types/SessionInfo.md), որի հետ համատեղ հեռացվում են նաև սեսսիայի ընթացքում առաջացած ժամանակավոր ֆայլերը, ընդհատվում և քեշից հեռացվում են երկար կատարվող պրոցեսները (փաստաթղթերի [գրանցում](../../../server_api/Definitions/Document/Methods/Store.md)/[հեռացում](../../../server_api/Definitions/Document/Methods/Delete.md), [տվյալների աղբյուրների](../../../server_api/Definitions/DataSource/DataSource.md), [DPR](../../../server_api/Definitions/DataProcessingRequest/DataProcessingRequest.md)\-ների կատարում)։

Տե՛ս օգտագործման [օրինակը](https://www.postman.com/asya-01/armsoft/example/33237126-c73936af-bf4f-4016-8f79-f5b182c43ad0)։
