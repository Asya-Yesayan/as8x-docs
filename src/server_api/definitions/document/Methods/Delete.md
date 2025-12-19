---
title: Document.Delete(DeleteEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Delete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Delete.html)

**Դաս՝** [Document](../../document.md)

```c#
public virtual Task Delete(DeleteEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Delete](../../../../controllers/Document/Methods/Delete.md) ֆունկցիայով փաստաթուղթը ջնջելիս։

Նախատեսված է ջնջելուց առաջ ստուգումներ կատարելու և այլ տվյալներ ջնջելու համար։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [DeleteEventArgs](../../../types/args/DeleteEventArgs.md) | - | [DeleteEventArgs](../../../types/args/DeleteEventArgs.md) դասի օբյեկտ։ |

