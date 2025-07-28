---
title: Document.Action(ActionEventArgs) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [Action](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Action.html)

```c#
public virtual Task Action(ActionEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../services/IDocumentService.md).[Store](../../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։

Հաշվառումների ստեղծումը և տվյալների պահոցում գրանցումը հարկավոր է կատարել այս մեթոդում [IDocumentService](../../services/IDocumentService.md).[StoreFact](../../services/IDocumentService/StoreFact.md) մեթոդով։

Հանդիսանում է 4x համակարգում նկարագրված [Action](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Action.html) իրադարձության համարժեքը:
