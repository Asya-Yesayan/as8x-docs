---
title: OnConfirmDocumentChangeRequest(ConfirmDocumentChangeRequestEventArgs)
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.OnConfirmDocumentChangeRequest(ConfirmDocumentChangeRequestEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnConfirmDCR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnConfirmDCR.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task OnConfirmDocumentChangeRequest(ConfirmDocumentChangeRequestEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից փաստաթղթի փոփոխման հայտը `IDocumentChangeRequestService.Confirm` մեթոդով հաստատելիս։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [ConfirmDocumentChangeRequestEventArgs](../../../Types/Args/ConfirmDocumentChangeRequestEventArgs.md) | - | [ConfirmDocumentChangeRequestEventArgs](../../../Types/Args/ConfirmDocumentChangeRequestEventArgs.md) դասի օբյեկտ։ |

