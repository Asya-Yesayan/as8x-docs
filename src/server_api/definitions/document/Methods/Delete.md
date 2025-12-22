---
title: Document.Delete(DeleteEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Delete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Delete.html)

**Դաս՝** [Document](../../Document.md)

```c#
public virtual Task Delete(DeleteEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Delete](../../../Services/IDocument/Methods/Delete.md) ֆունկցիայով փաստաթուղթը ջնջելիս։

Նախատեսված է ջնջելուց առաջ ստուգումներ կատարելու և այլ տվյալներ ջնջելու համար։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [DeleteEventArgs](../../../Types/Args/DeleteEventArgs.md) | - | [DeleteEventArgs](../../../Types/Args/DeleteEventArgs.md) դասի օբյեկտ։ |

