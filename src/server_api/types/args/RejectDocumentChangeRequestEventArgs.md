---
layout: page
title: "RejectDocumentChangeRequestEventArgs" 
tags: OnRejectDCR
---

Այս դասը պարունակում է փաստաթղթի փոփոխման հայտի մերժման տվյալներ և օգտագործվում է [PreOnRejectDocumentChangeRequest](../../Extensions/Definitions/DocumentExtender/Methods/PreOnRejectDocumentChangeRequest.md), [OnRejectDocumentChangeRequest](../../Definitions/Document/Methods/OnRejectDocumentChangeRequest.md), [PostOnRejectDocumentChangeRequest](../../Extensions/Definitions/DocumentExtender/Methods/PostOnRejectDocumentChangeRequest.md) մեթոդներում։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| DCR | `DocumentChangeRequest` | - | `DCR` - [Փաստաթղթի փոփոխման հայտը](../DocumentChangeRequest.md)։ |
| RejectComment | `string` | - | `RejectComment` - [Փաստաթղթի փոփոխման հայտի](../DocumentChangeRequest.md) մերժման մեկնաբանությունը։ |
