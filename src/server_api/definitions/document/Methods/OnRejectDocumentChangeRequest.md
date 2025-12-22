---
title: Document.OnRejectDocumentChangeRequest(RejectDocumentChangeRequestEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnRejectDCR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnRejectDCR.html)

**Դաս՝** [Document](../../Document.md)

```c#
public virtual Task OnRejectDocumentChangeRequest(RejectDocumentChangeRequestEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../../../Types/DocumentChangeRequest.md) մերժելիս։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [RejectDocumentChangeRequestEventArgs](../../../Types/args/RejectDocumentChangeRequestEventArgs.md) | - | [RejectDocumentChangeRequestEventArgs](../../../Types/args/RejectDocumentChangeRequestEventArgs.md) դասի օբյեկտ։ |

**Նկատառումներ**

Փաստաթղթի փոփոխման հայտը մերժելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝ 
* [PreOnRejectDocumentChangeRequest](../../../../extensions/Definitions/DocumentExtender/Methods/PreOnRejectDocumentChangeRequest.md),
* [OnRejectDocumentChangeRequest](OnRejectDocumentChangeRequest.md),
* [PostOnRejectDocumentChangeRequest](../../../../extensions/Definitions/DocumentExtender/Methods/PostOnRejectDocumentChangeRequest.md):

Յուրաքանչյուր մեթոդի պարամետրերը, կանչից հետո, փոխանցվում են հաջորդին։

