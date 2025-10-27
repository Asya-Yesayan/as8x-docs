---
title: LoginController.Delete մեթոդ
---

```c#
[HttpDelete]
[Authorize]
public Task Delete([FromServices] LoginService loginService)
```

Հեռացնում է ընթացիկ օգտագործողի [սեսսիան](https://armsoft.github.io/as8x-docs/src/server_api/types/SessionInfo.html), որի հետ համատեղ հեռացվում են նաև սեսսիայի ընթացքում առաջացած ժամանակավոր ֆայլերը, ընդհատվում և քեշից հեռացվում են երկար կատարվող պրոցեսները ([փաստաթղթերի](https://armsoft.github.io/as8x-docs/src/server_api/definitions/document.html) [գրանցում](https://[https://armsoft.github.io/as8x-docs/src/server_api/definitions/document.html#store)/[հեռացում](https://armsoft.github.io/as8x-docs/src/server_api/definitions/document.html#delete), [տվյալների աղբյուրների](https://armsoft.github.io/as8x-docs/src/server_api/definitions/ds.html), [DPR](https://armsoft.github.io/as8x-docs/src/server_api/definitions/dpr.html)\-ների կատարում)։

Տե՛ս օգտագործման [օրինակը](https://www.postman.com/asya-01/armsoft/example/33237126-c73936af-bf4f-4016-8f79-f5b182c43ad0)։
