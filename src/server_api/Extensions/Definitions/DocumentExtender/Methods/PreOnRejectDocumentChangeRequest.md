---
title: DocumentExtender.PreOnRejectDocumentChangeRequest(Document, RejectDocumentChangeRequestEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPreOnRejectDCR

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PreOnRejectDocumentChangeRequest(Document sender, 
                                                     RejectDocumentChangeRequestEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../../../../Models/DocumentChangeRequest.md)մերժելիս, [OnRejectDocumentChangeRequest](../../../../Definitions/Document/OnRejectDocumentChangeRequest.md) մեթոդի կանչից առաջ։

**Պարամետրեր**

* `sender` - [Փաստաթղթի օբյեկտը](../../../../Definitions/Document/document.md), որի հիման վրա ստեղծվել է ընթացիկ փոփոխման հայտը։
* `args` - [RejectDocumentChangeRequestEventArgs](../../../../Models/Args/RejectDocumentChangeRequestEventArgs.md) դասի օբյեկտ։

**Նկատառումներ**

[Փաստաթղթի փոփոխման հայտը](../../../../Models/DocumentChangeRequest.md) մերժելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝ 
* [PreOnRejectDocumentChangeRequest](PreOnRejectDocumentChangeRequest.md),
* [OnRejectDocumentChangeRequest](../../../../Definitions/Document/OnRejectDocumentChangeRequest.md),
* [PostOnRejectDocumentChangeRequest](PostOnRejectDocumentChangeRequest.md):

Յուրաքանչյուր մեթոդի պարամետրերը, կանչից հետո, փոխանցվում են հաջորդին։
