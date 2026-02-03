---
title: PostOnRejectDocumentChangeRequest(Document, RejectDocumentChangeRequestEventArgs)
nav_exclude: true
---

# DocumentExtender.PostOnRejectDocumentChangeRequest(Document, RejectDocumentChangeRequestEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostOnRejectDCR

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostOnRejectDocumentChangeRequest(Document sender, 
                                                      RejectDocumentChangeRequestEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../../../../Types/DocumentChangeRequest.md) մերժելիս, [OnRejectDocumentChangeRequest](../../../../Definitions/Document/Methods/OnRejectDocumentChangeRequest.md) մեթոդի կանչից հետո։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ          | Լռությամբ արժեք | Նկարագրություն  |
|----------|--------------------|----------------|-------------|
| sender   | Document                                   | —              | [Փաստաթղթի օբյեկտը](../../../../Definitions/Document/Document.md), որի հիման վրա ստեղծվել է ընթացիկ փոփոխման հայտը։              |
| args     | RejectDocumentChangeRequestEventArgs       | —              | [RejectDocumentChangeRequestEventArgs](../../../../Types/Args/RejectDocumentChangeRequestEventArgs.md) դասի օբյեկտ։   |

**Նկատառումներ**

[Փաստաթղթի փոփոխման հայտը](../../../../Types/DocumentChangeRequest.md) մերժելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝ 
* [PreOnRejectDocumentChangeRequest](PreOnRejectDocumentChangeRequest.md),
* [OnRejectDocumentChangeRequest](../../../../Definitions/Document/Methods/OnRejectDocumentChangeRequest.md),
* [PostOnRejectDocumentChangeRequest](PostOnRejectDocumentChangeRequest.md):

Յուրաքանչյուր մեթոդի պարամետրերը, կանչից հետո, փոխանցվում են հաջորդին։
