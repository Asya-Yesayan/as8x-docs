---
title: DocumentExtender.PostOnRejectDocumentChangeRequest(Document, RejectDocumentChangeRequestEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostOnRejectDCR

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostOnRejectDocumentChangeRequest(Document sender, 
                                                      RejectDocumentChangeRequestEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../../../Models/DocumentChangeRequest.md) մերժելիս, [OnRejectDocumentChangeRequest](../../../Core/Definitions/Document/OnRejectDocumentChangeRequest.md) մեթոդի կանչից հետո։

**Պարամետրեր**

* `sender` - [Փաստաթղթի օբյեկտը](../../../Core/Definitions/Document/document.md), որի հիման վրա ստեղծվել է ընթացիկ փոփոխման հայտը։
* `args` - [RejectDocumentChangeRequestEventArgs](../../../Models/Args/RejectDocumentChangeRequestEventArgs.md) դասի օբյեկտ:

**Նկատառումներ**

[Փաստաթղթի փոփոխման հայտը](../../../Models/DocumentChangeRequest.md) մերժելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝ 
* [PreOnRejectDocumentChangeRequest](PreOnRejectDocumentChangeRequest.md),
* [OnRejectDocumentChangeRequest](../../../Core/Definitions/Document/OnRejectDocumentChangeRequest.md),
* [PostOnRejectDocumentChangeRequest](PostOnRejectDocumentChangeRequest.md):

Յուրաքանչյուր մեթոդի պարամետրերը, կանչից հետո, փոխանցվում են հաջորդին։
