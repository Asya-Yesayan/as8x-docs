---
title: Document.Action(ActionEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Action](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Action.html)

**Դաս՝** [Document](../document.md)

```c#
public virtual Task Action(ActionEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Store](../../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելիս։ Կանչը տեղի է ունենում փաստաթղթի գրանցման տրանզակցիայում։

Հաշվառումների ստեղծումը և տվյալների պահոցում գրանցումը հարկավոր է կատարել այս մեթոդում` [IDocumentService.StoreFact](../../services/IDocumentService/StoreFact.md)-ի օգնությամբ։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [ActionEventArgs](../../types/args/ActionEventArgs.md) | - | [ActionEventArgs](../../types/args/ActionEventArgs.md) դասի օբյեկտ։ |