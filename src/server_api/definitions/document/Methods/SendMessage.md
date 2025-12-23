---
title: Document.SendMessage(string, int, string, bool, bool) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.SendMessage](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/SendMessage.html)

**Դաս՝** [Document](../Document.md)

```c#
public Task SendMessage(string message,
                        int isn = -1,
                        string messageForDocLog = "",
                        bool raiseErrorIfDocNotExists = true,
                        bool raiseErrorIfParentNotExists = true)
```

Ուղարկում է հաղորդագրություն այլ փաստաթղթի (կամ ծնող փաստաթղթերին) աշխատացնելով [PostMessage](PostMessage.md) ֆունկցիան:  
Հաղորդագրություն ստանալուց հետո ստացող փաստաթղթի [պատմության](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html)  
մեջ [գրանցվում է](WriteLog.md) հաղորդագրության տեքստը և ստացող փաստաթուղթը գրանցվում է տվյալների պահոցում [StoreMode](../Properties/StoreMode.md) հատկությանը տալով `ContinueProcessing` արժեքը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| message         | string               | -              | Ուղարկվող հաղորդագրության տեքստը։ |
| isn             | int                  | -1             | Հաղորդագրությունը ստացող փաստաթղթի ներքին նույնականացման համարը։ <br> Եթե պարամետրը փոխանցված չէ, ապա հաղորդագրությունը կուղարկվի ընթացիկ փաստաթղթի ծնող փաստաթղթերին, եթե այդպիսիք առկա են։ |
| messageForDocLog | string               | ""             |  Ստացող փաստաթղթի [պատմության](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) մեջ գրանցվող տեքստը։ <br> Եթե պարամետրը փոխանցված չէ, ապա պատմության մեջ կգրանցվի `message` պարամետրի արժեքը։  |
| raiseErrorIfDocNotExists | bool                 | true           | Ստացող փաստաթղթի բացակայության դեպքում սխալի գեներացում։ |
| raiseErrorIfParentNotExists | bool                 | true           | Ստացող ծնող փաստաթղթերի բացակայության դեպքում սխալի գեներացում։ |

