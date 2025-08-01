---
title: DocumentExtender.PostOnConfirmDocumentChangeRequest(Document, ConfirmDocumentChangeRequestEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [PostOnConfirmDCR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/PostOnConfirmDCR.html)

```c#
public virtual Task PostOnConfirmDocumentChangeRequest(Document sender, ConfirmDocumentChangeRequestEventArgs args)
```

PreOnConfirmDocumentChangeRequest մեթոդը կանչվում է միջուկի կողմից` փաստաթղթի պահպանման ժամանակ ([Store](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Store.html)), [OnConfirmDocumentChangeRequest](../../../server_api/definitions/document/OnConfirmDocumentChangeRequest.md) իրադարձություններից հետո։