---
title: PostOnConfirmDocumentChangeRequest(Document, ConfirmDocumentChangeRequestEventArgs)
nav_exclude: true
---

# DocumentExtender.PostOnConfirmDocumentChangeRequest(Document, ConfirmDocumentChangeRequestEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [PostOnConfirmDCR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/PostOnConfirmDCR.html)

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostOnConfirmDocumentChangeRequest(Document sender, 
                                                       ConfirmDocumentChangeRequestEventArgs args)
```

PreOnConfirmDocumentChangeRequest մեթոդը կանչվում է միջուկի կողմից` փաստաթղթի պահպանման ժամանակ ([Store](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Store.html)), [OnConfirmDocumentChangeRequest](../../../../Definitions/Document/Methods/OnConfirmDocumentChangeRequest.md) իրադարձություններից հետո։
