---
layout: page
title: "RejectDocumentChangeRequestEventArgs" 
tags: OnRejectDCR
---

Այս դասը պարունակում է փաստաթղթի փոփոխման հայտի մերժման տվյալներ և օգտագործվում է [PreOnRejectDocumentChangeRequest](../../../extensions/definitions/document_extender/Methods/PreOnRejectDocumentChangeRequest.md), [OnRejectDocumentChangeRequest](../../definitions/document/Methods/OnRejectDocumentChangeRequest.md), [PostOnRejectDocumentChangeRequest](../../../extensions/definitions/document_extender/Methods/PostOnRejectDocumentChangeRequest.md) մեթոդներում։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| DCR | `DocumentChangeRequest` | - | `DCR` - [Փաստաթղթի փոփոխման հայտը](../DocumentChangeRequest.md)։ |
| RejectComment | `string` | - | `RejectComment` - [Փաստաթղթի փոփոխման հայտի](../DocumentChangeRequest.md) մերժման մեկնաբանությունը։ |
