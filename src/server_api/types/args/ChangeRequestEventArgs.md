---
layout: page
title: "ChangeRequestEventArgs" 
tags: ChangeRequest
---

Այս դասը օգտագործվում է փաստաթղթի [IDocumentChangeRequest](../IDocumentChangeRequest.md)-ի [ChangeRequest](../IDocumentChangeRequest/Methods/ChangeRequest.md) մեթոդում։

```c#
public class ChangeRequestEventArgs
{
    public DocumentChangeRequest DCR { get; }
    public DCRResult DCRResult { get; set; } = DCRResult.NotCreated;
}
```

## Հատկություններ

| Անվանում  | Տվյալների տիպ | Լռությամբ արժեք      | Նկարագրություն  |
| --------- | ------------- | -------------------- | ----------------------- |
| DCR       |  DocumentChangeRequest             |         -             | [Փաստաթղթի փոփոխման հայտը](../DocumentChangeRequest.md)։   |
| DCRResult |  DCRResult             | DCRResult.NotCreated | Որոշում է [փաստաթղթի փոփոխման հայտի](../DocumentChangeRequest.md) վիճակը [ChangeRequest](../IDocumentChangeRequest/ChangeRequest.md) մեթոդի կանչից հետո՝<br>**DCRResult.NotCreated** - փոփոխման հայտը ստեղծվել է,<br>**DCRResult.CreatedAndConfirmed** - փոփոխման հայտը ստեղծվել և հաստատվել է,<br>**DCRResult.CreatedAndNotConfirmed** - փոփոխման հայտը ստեղծվել է և չի հաստատվել,<br>**DCRResult.CreatedAndConfirmedWithOnConfirm** - փոփոխման հայտը ստեղծվել և ուղարկվել է կրկնակի հաստատման [PreOnConfirmDocumentChangeRequest](../../..extensions/Definitions/document_extender/PreOnConfirmDocumentChangeRequest.md), [OnConfirmDocumentChangeRequest](../../definitions/Document/Methods/OnConfirmDocumentChangeRequest.md), [PostOnConfirmDocumentChangeRequest](../../..extensions/Definitions/document_extender/PostOnConfirmDocumentChangeRequest.md) մեթոդների միջոցով։ |
