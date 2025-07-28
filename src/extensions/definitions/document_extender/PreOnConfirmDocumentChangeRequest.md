---
title: DocumentExtender.PreOnConfirmDocumentChangeRequest(Document, ConfirmDocumentChangeRequestEventArgs) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [PreOnConfirmDCR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/PreOnConfirmDCR.html)

```c#
public virtual Task PreOnConfirmDocumentChangeRequest(Document sender, ConfirmDocumentChangeRequestEventArgs args)
```

PreOnConfirmDocumentChangeRequest մեթոդը կանչվում է միջուկի կողմից՝ փաստաթղթի պահպանման ժամանակ ([Store](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Store.html)), [OnConfirmDocumentChangeRequest](../../../server_api/definitions/document/OnConfirmDocumentChangeRequest.md) իրադարձությունից առաջ։

