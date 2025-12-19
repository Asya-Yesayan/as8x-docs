---
title: Document.OnConfirmDocumentChangeRequest(ConfirmDocumentChangeRequestEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnConfirmDCR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnConfirmDCR.html)

**Դաս՝** [Document](../document.md)

```c#
public virtual Task OnConfirmDocumentChangeRequest(ConfirmDocumentChangeRequestEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից փաստաթղթի փոփոխման հայտը `IDocumentChangeRequestService.Confirm` մեթոդով հաստատելիս։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [ConfirmDocumentChangeRequestEventArgs](../../types/args/ConfirmDocumentChangeRequestEventArgs.md) | - | [ConfirmDocumentChangeRequestEventArgs](../../types/args/ConfirmDocumentChangeRequestEventArgs.md) դասի օբյեկտ։ |

