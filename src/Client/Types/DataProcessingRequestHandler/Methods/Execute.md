---
title: Execute(DPRType, string, T, bool, int, int, bool, Dictionary<int, UIRequestResultBase>)
nav_exclude: true
---

# DataProcessingRequestHandler.Execute(DPRType, string, T, bool, int, int, bool, Dictionary<int, UIRequestResultBase>) մեթոդ

```c#
public (bool, R) Execute<T, R>(DPRType type, string name, T request, bool enableUIRequest = true,
                               int retryAttempts = 1, int retryInterval = 0, bool handleEvents = false,
                               Dictionary<int, UIRequestResultBase> uiResponse = null)
```

Մեթոդը հերթի է դնում DPR-ի կատարումը, հարցնում է կատարման ընթացքի մասին ինֆորմացիա, քանի դեռ կատարումը չի ավարտվել և վերջում վերադարձնում է կատարման արդյունքը և բուլյան տիպի արժեք, որը ցույց է տալիս կատարում հաջողվել է թե ոչ։

Տե՛ս նաև [Ասինխրոն մշակում կիրառությունների սերվերի վրա](../../../../Architecture/appserver_async.md):

**Պարամետրեր**


| Անվանում           | Տվյալների տիպ                                   | Լռությամբ արժեք | Նկարագրություն |
|--------------------|--------------------------------------------------|----------------|----------------|
| T                  | T                                     |      -          | DPR-ի կատարման համար անհրաժեշտ պարամետրերը նկարագրող դասը։ |
| R                  | R                                     |     -           | DPR-ի կատարման արդյունքում ստացվող տվյալները նկարագրող դասը։ |
| type               | DPRType                                          |      -          | DPR-ի [տեսակը](../../../../server_api/Definitions/DataProcessingRequest/Properties/DPRType.md)։ |
| name               | string                                           |      -          | DPR-ի [ներքին անունը](../../../../server_api/Definitions/DataProcessingRequest/Properties/Name.md)։ |
| request            | T                                                |      -          | DPR-ի կատարման համար անհրաժեշտ պարամետրերը նկարագրող դասի օբյեկտ։ |
| enableUIRequest    | bool                                             | true           | DPR-ի կատարման ընթացքում սերվիսից կլիենտ հաղորդագրություն ուղարկելու, հաղորդագրության պատասխանը ստանալու և այն սերվիսում մշակելու համար հնարավորության միացման հայտանիշ։ |
| retryAttempts      | int                                              | 1              | DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում վերաստացման փորձերի քանակը։ |
| retryInterval      | int                                              | 0              | DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում մինչև վերաստացման հաջորդ փորձը ընկած ժամանակահատվածը միլիվայրկյաններով։ |
| handleEvents       | bool                                             | false          | ?? |
| uiResponse         | Dictionary<int, UIRequestResultBase>             | null           | ?? |

