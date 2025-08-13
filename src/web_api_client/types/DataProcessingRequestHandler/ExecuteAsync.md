---
title: DataProcessingRequestHandler.ExecuteAsync(DPRType, string, T, bool,
                                                 int, int, bool,
                                                 Dictionary<int, UIRequestResultBase>,
                                                 CancellationToken) մեթոդ
---

```c#
public Task<(bool, R)> ExecuteAsync<T, R>(DPRType type, string name, T request, bool enableUIRequest = true,
                                          int retryAttempts = 1, int retryInterval = 0, bool handleEvents = false,
                                          Dictionary<int, UIRequestResultBase> uiResponse = null,
                                          CancellationToken cancellationToken = default)
```

Մեթոդը հերթի է դնում DPR-ի կատարումը, հարցնում է կատարման ընթացքի մասին ինֆորմացիա, քանի դեռ կատարումը չի ավարտվել և վերջում վերադարձնում է կատարման արդյունքը և բուլյան տիպի արժեք, որը ցույց է տալիս կատարում հաջողվել է թե ոչ։

Տե՛ս նաև [Ասինխրոն մշակում կիրառությունների սերվերի վրա](../../../Architecture/appserver_async.md):

**Պարամետրեր**

* `T` - DPR-ի կատարման համար անհրաժեշտ պարամետրերը նկարագրող դասը։
* `R` - DPR-ի կատարման արդյունքում ստացվող տվյալները նկարագրող դասը։
* `type` - DPR-ի [տեսակը](../../../server_api/definitions/dpr/DPRType.md)։
* `name` - DPR-ի [ներքին անունը](../../../server_api/definitions/dpr/Name.md)։
* `request` - DPR-ի կատարման համար անհրաժեշտ պարամետրերը նկարագրող դասի օբյեկտ։
* `enableUIRequest` - DPR-ի կատարման ընթացքում սերվիսից կլիենտ հաղորդագրություն ուղարկելու, հաղորդագրության պատասխանը ստանալու և այն սերվիսում մշակելու համար հնարավորության միացման հայտանիշ։
* `retryAttempts` - DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում վերաստացման փորձերի քանակը։
* `retryInterval` - DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում մինչև վերաստացման հաջորդ փորձը ընկած ժամանակահատվածը միլիվայրկյաններով։
* `handleEvents` - ??
* `uiResponse` - ??
* `cancellationToken` - Ընդհատման օբյեկտ:
