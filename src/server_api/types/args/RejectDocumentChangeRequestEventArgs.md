---
layout: page
title: "RejectDocumentChangeRequestEventArgs" 
tags: OnRejectDCR
---

Այս դասը պարունակում է փաստաթղթի փոփոխման հայտի մերժման տվյալներ և օգտագործվում է [PreOnRejectDocumentChangeRequest](../../../extensions/definitions/document_extender/PreOnRejectDocumentChangeRequest.md), [OnRejectDocumentChangeRequest](../../definitions/document/OnRejectDocumentChangeRequest.md), [PostOnRejectDocumentChangeRequest](../../../extensions/definitions/document_extender/PostOnRejectDocumentChangeRequest.md) մեթոդներում։

```c#
public class RejectDocumentChangeRequestEventArgs
{
    public DocumentChangeRequest DCR { get; }
    public string RejectComment { get; }
}
```

* `DCR` - [Փաստաթղթի փոփոխման հայտը](../DocumentChangeRequest.md)։
* `RejectComment` - [Փաստաթղթի փոփոխման հայտի](../DocumentChangeRequest.md) մերժման մեկնաբանությունը: