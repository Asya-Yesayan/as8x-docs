---
title: DocumentExtender.PostOnRejectDocumentChangeRequest(Document, RejectDocumentChangeRequestEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostOnRejectDCR

```c#
public virtual Task PostOnRejectDocumentChangeRequest(Document sender, 
                                                      RejectDocumentChangeRequestEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../../../server_api/types/DocumentChangeRequest.md) մերժելիս, [OnRejectDocumentChangeRequest](../../../server_api/definitions/document/OnRejectDocumentChangeRequest.md) մեթոդի կանչից հետո։

**Պարամետրեր**

* `sender` - [Փաստաթղթի օբյեկտը](../../../server_api/definitions/document.md), որի հիման վրա ստեղծվել է ընթացիկ փոփոխման հայտը։
* `args` - [RejectDocumentChangeRequestEventArgs](../../../server_api/types/args/RejectDocumentChangeRequestEventArgs.md) դասի օբյեկտ:

**Նկատառումներ**

[Փաստաթղթի փոփոխման հայտը](../../../server_api/types/DocumentChangeRequest.md) մերժելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝ 
* [PreOnRejectDocumentChangeRequest](PreOnRejectDocumentChangeRequest.md),
* [OnRejectDocumentChangeRequest](../../../server_api/definitions/document/OnRejectDocumentChangeRequest.md),
* [PostOnRejectDocumentChangeRequest](PostOnRejectDocumentChangeRequest.md):

Յուրաքանչյուր մեթոդի պարամետրերը, կանչից հետո, փոխանցվում են հաջորդին։