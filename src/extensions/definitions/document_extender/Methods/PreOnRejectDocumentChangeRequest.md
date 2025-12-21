---
title: DocumentExtender.PreOnRejectDocumentChangeRequest(Document, RejectDocumentChangeRequestEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPreOnRejectDCR

**Դաս՝** [DocumentExtender](../../document_extender.md)

```c#
public virtual Task PreOnRejectDocumentChangeRequest(Document sender, 
                                                     RejectDocumentChangeRequestEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../../../../server_api/types/DocumentChangeRequest.md)մերժելիս, [OnRejectDocumentChangeRequest](../../../../server_api/definitions/Document/Methods/OnRejectDocumentChangeRequest.md) մեթոդի կանչից առաջ։

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| sender          | Document             | -              | [Փաստաթղթի օբյեկտը](../../../../server_api/definitions/Document.md), որի հիման վրա ստեղծվել է ընթացիկ փոփոխման հայտը։ |
| args            | RejectDocumentChangeRequestEventArgs | -              | [RejectDocumentChangeRequestEventArgs](../../../../server_api/types/args/RejectDocumentChangeRequestEventArgs.md) դասի օբյեկտ։ |

**Նկատառումներ**

[Փաստաթղթի փոփոխման հայտը](../../../../server_api/types/DocumentChangeRequest.md) մերժելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝ 
* [PreOnRejectDocumentChangeRequest](PreOnRejectDocumentChangeRequest.md),
* [OnRejectDocumentChangeRequest](../../../../server_api/definitions/Document/Methods/OnRejectDocumentChangeRequest.md),
* [PostOnRejectDocumentChangeRequest](PostOnRejectDocumentChangeRequest.md):

Յուրաքանչյուր մեթոդի պարամետրերը, կանչից հետո, փոխանցվում են հաջորդին։
