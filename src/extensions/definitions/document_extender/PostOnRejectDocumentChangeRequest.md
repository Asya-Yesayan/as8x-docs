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

Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../../../server_api/types/DocumentChangeRequest.md) մերժելիս, [OnRejectDocumentChangeRequest](../../../server_api/definitions/document/OnRejectDocumentChangeRequest.md) մեթոդի կանչից հետո։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| sender          | Document             | -              | [Փաստաթղթի օբյեկտը](../../../server_api/definitions/document.md), որի հիման վրա ստեղծվել է ընթացիկ փոփոխման հայտը։ |
| args            | RejectDocumentChangeRequestEventArgs | -              | [RejectDocumentChangeRequestEventArgs](../../../server_api/types/args/RejectDocumentChangeRequestEventArgs.md) դասի օբյեկտ: |

**Նկատառումներ**

[Փաստաթղթի փոփոխման հայտը](../../../server_api/types/DocumentChangeRequest.md) մերժելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝ 
* [PreOnRejectDocumentChangeRequest](PreOnRejectDocumentChangeRequest.md),
* [OnRejectDocumentChangeRequest](../../../server_api/definitions/document/OnRejectDocumentChangeRequest.md),
* [PostOnRejectDocumentChangeRequest](PostOnRejectDocumentChangeRequest.md):

Յուրաքանչյուր մեթոդի պարամետրերը, կանչից հետո, փոխանցվում են հաջորդին։