---
title: IDocumentChangeRequest.ChangeRequest(ChangeRequestEventArgs) մեթոդ
---

```c#
public Task ChangeRequest(ChangeRequestEventArgs args)
```

Մեթոդը կանչվում է փաստաթղթի փոփոխման հայտի մշակման ընթացքում։ 

**Պարամետրեր**

* `args` - [ChangeRequestEventArgs](../args/ChangeRequestEventArgs.md) դասի օբյեկտ, որը պարունակում է փաստաթղթի [փոփոխման հայտը](../DocumentChangeRequest.md) և սահմանում է հայտի վիճակը մեթոդի կանչից հետո։

## Կարևոր

Փաստաթղթի փոփոխման հայտը հաստատելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝  
* [ChangeRequest](ChangeRequest.md),
* [PreOnConfirmDocumentChangeRequest](../../../extensions/definitions/document_extender/PreOnConfirmDocumentChangeRequest.md),
* [OnConfirmDocumentChangeRequest](../../definitions/document/OnConfirmDocumentChangeRequest.md),
* [PostOnConfirmDocumentChangeRequest](../../../extensions/definitions/document_extender/PostOnConfirmDocumentChangeRequest.md):

Մեթոդները կանչվում են դրանց մշակման դեպքում և յուրաքանչյուր մեթոդի պարամետրերը կանչից հետո փոխանցվում են հաջորդին։

[PreOnConfirmDocumentChangeRequest](../../../extensions/definitions/document_extender/PreOnConfirmDocumentChangeRequest.md), [OnConfirmDocumentChangeRequest](../../definitions/document/OnConfirmDocumentChangeRequest.md), [PostOnConfirmDocumentChangeRequest](../../../extensions/definitions/document_extender/PostOnConfirmDocumentChangeRequest.md) մեթոդները կանչվում են միայն այն դեպքում, երբ [ChangeRequest](ChangeRequest.md) մեթոդի [ChangeRequestEventArgs](../args/ChangeRequestEventArgs.md) պարամետրի `DCRResult` հատկության արժեքը **CreatedAndConfirmedWithOnConfirm** է։
