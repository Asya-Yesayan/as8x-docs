---
title: Action
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.Action(ActionEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [Action](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Action.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task Action(ActionEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Store](../../../Services/IDocument/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելիս։ Կանչը տեղի է ունենում փաստաթղթի գրանցման տրանզակցիայում։

Հաշվառումների ստեղծումը և տվյալների պահոցում գրանցումը հարկավոր է կատարել այս մեթոդում` [IDocumentService.StoreFact](../../../Services/IDocument/Methods/StoreFact.md)-ի օգնությամբ։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [ActionEventArgs](../../../Types/Args/ActionEventArgs.md) | - | [ActionEventArgs](../../../Types/Args/ActionEventArgs.md) դասի օբյեկտ։ |