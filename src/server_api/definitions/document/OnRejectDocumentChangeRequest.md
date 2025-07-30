---
title: Document.OnRejectDocumentChangeRequest(RejectDocumentChangeRequestEventArgs) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [OnRejectDCR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnRejectDCR.html)

```c#
public virtual Task OnRejectDocumentChangeRequest(RejectDocumentChangeRequestEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../../types/DocumentChangeRequest.md) մերժելիս։

**Պարամետրեր**

* `args` - [RejectDocumentChangeRequestEventArgs](../../types/args/RejectDocumentChangeRequestEventArgs.md) դասի օբյեկտ:

**Նկատառումներ**

Փաստաթղթի փոփոխման հայտը մերժելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝ 
* [PreOnRejectDocumentChangeRequest](../../../extensions/definitions/document_extender/PreOnRejectDocumentChangeRequest.md),
* [OnRejectDocumentChangeRequest](OnRejectDocumentChangeRequest.md),
* [PostOnRejectDocumentChangeRequest](../../../extensions/definitions/document_extender/PostOnRejectDocumentChangeRequest.md):

Յուրաքանչյուր մեթոդի պարամետրերը, կանչից հետո, փոխանցվում են հաջորդին։

