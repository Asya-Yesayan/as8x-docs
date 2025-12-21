---
title: Document.OnRejectDocumentChangeRequest(RejectDocumentChangeRequestEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnRejectDCR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnRejectDCR.html)

**Դաս՝** [Document](../../document.md)

```c#
public virtual Task OnRejectDocumentChangeRequest(RejectDocumentChangeRequestEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../../../types/DocumentChangeRequest.md) մերժելիս։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [RejectDocumentChangeRequestEventArgs](../../../types/args/RejectDocumentChangeRequestEventArgs.md) | - | [RejectDocumentChangeRequestEventArgs](../../../types/args/RejectDocumentChangeRequestEventArgs.md) դասի օբյեկտ։ |

**Նկատառումներ**

Փաստաթղթի փոփոխման հայտը մերժելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝ 
* [PreOnRejectDocumentChangeRequest](../../../../extensions/Definitions/document_extender/Methods/PreOnRejectDocumentChangeRequest.md),
* [OnRejectDocumentChangeRequest](OnRejectDocumentChangeRequest.md),
* [PostOnRejectDocumentChangeRequest](../../../../extensions/Definitions/document_extender/Methods/PostOnRejectDocumentChangeRequest.md):

Յուրաքանչյուր մեթոդի պարամետրերը, կանչից հետո, փոխանցվում են հաջորդին։

