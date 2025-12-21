---
layout: page
title: "RejectDocumentChangeRequestEventArgs" 
tags: OnRejectDCR
---

Այս դասը պարունակում է փաստաթղթի փոփոխման հայտի մերժման տվյալներ և օգտագործվում է [PreOnRejectDocumentChangeRequest](../../../extensions/Definitions/document_extender/PreOnRejectDocumentChangeRequest.md), [OnRejectDocumentChangeRequest](../../definitions/document/OnRejectDocumentChangeRequest.md), [PostOnRejectDocumentChangeRequest](../../../extensions/Definitions/document_extender/PostOnRejectDocumentChangeRequest.md) մեթոդներում։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| DCR | `DocumentChangeRequest` | - | `DCR` - [Փաստաթղթի փոփոխման հայտը](../DocumentChangeRequest.md)։ |
| RejectComment | `string` | - | `RejectComment` - [Փաստաթղթի փոփոխման հայտի](../DocumentChangeRequest.md) մերժման մեկնաբանությունը։ |
