---
title: IDocumentChangeRequest.ChangeRequest(ChangeRequestEventArgs) մեթոդ
---

```c#
public Task ChangeRequest(ChangeRequestEventArgs args)
```

Մեթոդը կանչվում է փաստաթղթի փոփոխման հայտի մշակման ընթացքում։ 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| args            | ChangeRequestEventArgs | -              | [ChangeRequestEventArgs](../args/ChangeRequestEventArgs.md) դասի օբյեկտ, որը պարունակում է փաստաթղթի [փոփոխման հայտը](../DocumentChangeRequest.md) և սահմանում է հայտի վիճակը մեթոդի կանչից հետո։ |

## Կարևոր

Փաստաթղթի փոփոխման հայտը հաստատելիս կանչվում են հետևյալ մեթոդները նշված հերթականությամբ՝  
* [ChangeRequest](ChangeRequest.md),
* [PreOnConfirmDocumentChangeRequest](../../../extensions/Definitions/DocumentExtender/Methods/PreOnConfirmDocumentChangeRequest.md),
* [OnConfirmDocumentChangeRequest](../../Definitions/Document/Methods/OnConfirmDocumentChangeRequest.md),
* [PostOnConfirmDocumentChangeRequest](../../../extensions/Definitions/DocumentExtender/Methods/PostOnConfirmDocumentChangeRequest.md):

Մեթոդները կանչվում են դրանց մշակման դեպքում և յուրաքանչյուր մեթոդի պարամետրերը կանչից հետո փոխանցվում են հաջորդին։

[PreOnConfirmDocumentChangeRequest](../../../extensions/Definitions/DocumentExtender/Methods/PreOnConfirmDocumentChangeRequest.md), [OnConfirmDocumentChangeRequest](../../Definitions/Document/Methods/OnConfirmDocumentChangeRequest.md), [PostOnConfirmDocumentChangeRequest](../../../extensions/Definitions/DocumentExtender/Methods/PostOnConfirmDocumentChangeRequest.md) մեթոդները կանչվում են միայն այն դեպքում, երբ [ChangeRequest](ChangeRequest.md) մեթոդի [ChangeRequestEventArgs](../args/ChangeRequestEventArgs.md) պարամետրի `DCRResult` հատկության արժեքը **CreatedAndConfirmedWithOnConfirm** է։
